import React, { useState, useRef, useEffect } from 'react';
import { InvestigationReport, CopilotMessage } from '../types';
import {
  Sparkles,
  Send,
  X,
  Bot,
  User,
  HelpCircle,
  BookOpen,
  Newspaper,
  ShieldCheck,
  ChevronRight,
  Maximize2,
  Minimize2,
  RotateCcw
} from 'lucide-react';

interface CopilotDrawerProps {
  currentInvestigation?: InvestigationReport;
  language: string;
  isOpen: boolean;
  onClose: () => void;
}

const PRESET_PROMPTS = [
  { label: 'Why is this misleading / false?', query: 'Why did TruthLens decide this verdict? What is the main reasoning?' },
  { label: 'What evidence contradicts this?', query: 'What specific evidence and sources contradict this claim?' },
  { label: 'Explain like a school student', query: 'Explain this like I am a school student, using a simple and relatable example.' },
  { label: 'Journalist-style dispatch', query: 'Give me a journalist-style verification dispatch with quotes and attribution.' },
  { label: 'What should I check next?', query: 'What should I or a fact-checker check next to investigate further?' },
  { label: 'Show strongest source', query: 'Which source provides the strongest corroboration or rebuttal in this dossier?' },
];

export const CopilotDrawer: React.FC<CopilotDrawerProps> = ({
  currentInvestigation,
  language,
  isOpen,
  onClose,
}) => {
  const [messages, setMessages] = useState<CopilotMessage[]>([
    {
      id: 'init-1',
      role: 'assistant',
      text: `Hello, I am TruthLens Copilot. I can answer questions about the current investigation on "${currentInvestigation?.claim?.substring(0, 50) || 'digital claims'}...", explain forensic findings, or reformat reports for students and journalists.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = (queryText || inputText).trim();
    if (!textToSend || isLoading) return;

    const userMsg: CopilotMessage = {
      id: 'user-' + Date.now(),
      role: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/copilot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: textToSend,
          currentInvestigation,
          language,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to query Copilot');
      }

      const data = await response.json();
      const assistantMsg: CopilotMessage = {
        id: 'asst-' + Date.now(),
        role: 'assistant',
        text: data.answer || 'Analysis completed.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        citations: data.evidenceCitations || [],
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Copilot request failed, providing local dossier answer:', err);
      // Local fallback
      const assistantMsg: CopilotMessage = {
        id: 'asst-' + Date.now(),
        role: 'assistant',
        text: `Based on the active investigation: Verdict is **${currentInvestigation?.verdict?.replace(/_/g, ' ') || 'UNVERIFIED'}** with ${currentInvestigation?.confidenceScore || 70}% confidence.\n\nKey Finding: ${currentInvestigation?.summary30Sec || 'Claim evaluated across verified databases.'}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        citations: currentInvestigation?.sources?.map((s) => s.name) || [],
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ${
        isExpanded
          ? 'inset-4 md:inset-10'
          : 'bottom-4 right-4 w-full max-w-md h-[560px] max-h-[90vh]'
      }`}
    >
      <div className="w-full h-full glass-panel-glow rounded-2xl border border-cyan-500/40 shadow-2xl flex flex-col overflow-hidden bg-slate-950/95">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 bg-slate-900/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-mono text-sm font-bold text-slate-100 flex items-center gap-2">
                TruthLens Copilot
                <span className="text-[10px] font-normal px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300">
                  AI Fact-Check Assistant
                </span>
              </h3>
              <p className="text-[11px] text-slate-400 truncate max-w-[220px]">
                Grounding: {currentInvestigation?.claim?.substring(0, 30) || 'General Knowledge'}...
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 hover:text-slate-100 rounded-lg hover:bg-slate-800 transition-colors"
              title={isExpanded ? 'Collapse' : 'Expand'}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 hover:text-slate-100 rounded-lg hover:bg-slate-800 transition-colors"
              title="Close Copilot"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-cyan-600 text-slate-950 font-medium rounded-tr-sm font-sans'
                    : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-sm'
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>

                {msg.citations && msg.citations.length > 0 && (
                  <div className="mt-2.5 pt-2 border-t border-slate-800/80 text-[10px] text-slate-400 font-mono">
                    <span className="text-cyan-400 font-semibold block mb-0.5">Primary Citations Grounding:</span>
                    <ul className="list-disc pl-3.5 space-y-0.5">
                      {msg.citations.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className={`mt-1 text-[9px] font-mono ${msg.role === 'user' ? 'text-slate-900' : 'text-slate-500'} text-right`}>
                  {msg.timestamp}
                </div>
              </div>

              {msg.role === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-2.5 items-center text-xs font-mono text-cyan-400 p-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center animate-spin">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span>Copilot is synthesizing forensic evidence...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Presets Carousel */}
        <div className="p-2 border-t border-slate-800/80 bg-slate-950/80 overflow-x-auto">
          <div className="flex items-center gap-1.5 whitespace-nowrap pb-1">
            {PRESET_PROMPTS.map((preset) => (
              <button
                key={preset.label}
                onClick={() => handleSendMessage(preset.query)}
                className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500 hover:text-cyan-300 transition-all shrink-0"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-3 border-t border-slate-800 bg-slate-900/90 flex items-center gap-2">
          <input
            type="text"
            placeholder={`Ask Copilot in ${language} or English...`}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
            className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-mono placeholder:text-slate-500"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={isLoading || !inputText.trim()}
            className="p-2.5 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-slate-950 font-bold rounded-xl transition-colors shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
