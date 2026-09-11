import React, { useState, useRef } from 'react';
import {
  FileText,
  Link2,
  Image as ImageIcon,
  Video,
  HelpCircle,
  Layers,
  UploadCloud,
  Search,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  X,
  FileCheck
} from 'lucide-react';
import { LanguageOption, getTranslation } from '../i18n/languages';

interface HeroSectionProps {
  currentLanguage: LanguageOption;
  onVerify: (payload: {
    claim: string;
    inputType: 'text' | 'url' | 'image' | 'video' | 'question' | 'batch';
    mediaBase64?: string;
    mediaMimeType?: string;
    url?: string;
  }) => void;
  isLoading: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLanguage,
  onVerify,
  isLoading,
}) => {
  const [activeTab, setActiveTab] = useState<'text' | 'url' | 'image' | 'video' | 'question' | 'batch'>('text');
  const [claimText, setClaimText] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [mediaFile, setMediaFile] = useState<{ file: File; base64: string; previewUrl: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const t = (key: any) => getTranslation(currentLanguage.code, key);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = (reader.result as string).split(',')[1];
      const previewUrl = URL.createObjectURL(file);
      setMediaFile({ file, base64, previewUrl });
    };
    reader.readAsDataURL(file);
  };

  const handleClearMedia = () => {
    setMediaFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    if (activeTab === 'text' && !claimText.trim()) return;
    if (activeTab === 'url' && !urlInput.trim()) return;
    if ((activeTab === 'image' || activeTab === 'video') && !mediaFile && !claimText.trim()) return;
    if (activeTab === 'question' && !claimText.trim()) return;

    onVerify({
      claim: claimText,
      inputType: activeTab,
      mediaBase64: mediaFile?.base64,
      mediaMimeType: mediaFile?.file?.type,
      url: urlInput,
    });
  };

  const handleSelectQuickClaim = (quickClaimText: string, tab: 'text' | 'image' | 'video' = 'text') => {
    setActiveTab(tab);
    setClaimText(quickClaimText);
    onVerify({
      claim: quickClaimText,
      inputType: tab,
    });
  };

  return (
    <div className="space-y-6">
      {/* Hero Header Statement */}
      <div className="text-center max-w-3xl mx-auto pt-4 pb-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Multi-Stage Multimodal AI Verification Platform</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-mono tracking-tight text-slate-100">
          Before You Share It, <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400">
            Verify Before You Believe.
          </span>
        </h1>

        <p className="mt-3 text-sm md:text-base text-slate-400 max-w-2xl mx-auto font-sans leading-relaxed">
          TruthLens AI investigates claims, sources, images and videos across primary databases and media forensics to generate verifiable evidence intelligence.
        </p>
      </div>

      {/* Verification Input Hub Card */}
      <div className="glass-panel-glow rounded-3xl p-5 md:p-7 border border-cyan-500/30 shadow-2xl max-w-4xl mx-auto">
        {/* Input Mode Selector Tabs */}
        <div className="flex items-center gap-1 sm:gap-2 p-1 bg-slate-900/90 rounded-2xl border border-slate-800 overflow-x-auto mb-5 text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveTab('text')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all shrink-0 ${
              activeTab === 'text'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t('pasteClaim')}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('url')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all shrink-0 ${
              activeTab === 'url'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Link2 className="w-3.5 h-3.5" />
            <span>{t('enterUrl')}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('image')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all shrink-0 ${
              activeTab === 'image'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>{t('uploadImage')}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('video')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all shrink-0 ${
              activeTab === 'video'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>{t('uploadVideo')}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('question')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all shrink-0 ${
              activeTab === 'question'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t('askQuestion')}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('batch')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all shrink-0 ${
              activeTab === 'batch'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{t('batchAnalyze')}</span>
          </button>
        </div>

        {/* Input Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Tab 1: Text Claim */}
          {(activeTab === 'text' || activeTab === 'batch') && (
            <div>
              <textarea
                rows={activeTab === 'batch' ? 5 : 3}
                placeholder={
                  activeTab === 'batch'
                    ? 'Enter multiple claims separated by numbers or newlines (e.g. 1. RBI ₹500 note chip... 2. New solar subsidy scheme...)'
                    : 'Paste a social media forward, viral claim, WhatsApp message, or news headline...'
                }
                value={claimText}
                onChange={(e) => setClaimText(e.target.value)}
                className="w-full bg-slate-950/70 border border-slate-800 rounded-2xl p-4 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 font-mono transition-colors"
              />
            </div>
          )}

          {/* Tab 2: URL */}
          {activeTab === 'url' && (
            <div className="space-y-3">
              <div className="relative">
                <Link2 className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="url"
                  placeholder="https://example.com/news-article-or-tweet..."
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="w-full bg-slate-950/70 border border-slate-800 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
                />
              </div>
              <p className="text-xs text-slate-400 font-mono pl-1">
                TruthLens fetches article content, checks domain registration age, and runs cross-source verification.
              </p>
            </div>
          )}

          {/* Tab 3 & 4: Image & Video Upload */}
          {(activeTab === 'image' || activeTab === 'video') && (
            <div className="space-y-3">
              <input
                ref={fileInputRef}
                type="file"
                accept={activeTab === 'image' ? 'image/*' : 'video/*'}
                onChange={handleFileUpload}
                className="hidden"
                id="media-file-input"
              />

              {!mediaFile ? (
                <label
                  htmlFor="media-file-input"
                  className="border-2 border-dashed border-slate-800 hover:border-cyan-500/60 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer bg-slate-950/40 hover:bg-slate-900/30 transition-all text-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold font-mono text-slate-200">
                    Click to select or drag and drop {activeTab === 'image' ? 'an image / screenshot' : 'a video clip'}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 font-mono">
                    Supports PNG, JPG, WEBP, MP4, MOV. Evaluates reverse visual search & neural deepfake artifacts.
                  </p>
                </label>
              ) : (
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-cyan-500/40 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    {activeTab === 'image' && (
                      <img
                        src={mediaFile.previewUrl}
                        alt="Preview"
                        className="w-14 h-14 object-cover rounded-xl border border-slate-700 shrink-0"
                      />
                    )}
                    {activeTab === 'video' && (
                      <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 shrink-0">
                        <Video className="w-6 h-6" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <h4 className="text-xs font-mono font-bold text-slate-200 truncate">
                        {mediaFile.file.name}
                      </h4>
                      <span className="text-[10px] font-mono text-slate-500">
                        {(mediaFile.file.size / (1024 * 1024)).toFixed(2)} MB • {mediaFile.file.type}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleClearMedia}
                    className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* Optional Caption Input for Cross-Modal Verification */}
              <input
                type="text"
                placeholder="Optional: Enter the viral caption or claim associated with this media..."
                value={claimText}
                onChange={(e) => setClaimText(e.target.value)}
                className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
              />
            </div>
          )}

          {/* Tab 5: Question */}
          {activeTab === 'question' && (
            <div className="space-y-2">
              <textarea
                rows={3}
                placeholder="Ask any question, e.g.: Is it true that the ₹500 note contains a GPS tracking chip?"
                value={claimText}
                onChange={(e) => setClaimText(e.target.value)}
                className="w-full bg-slate-950/70 border border-slate-800 rounded-2xl p-4 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
              />
            </div>
          )}

          {/* Verification CTA Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>12-stage forensic pipeline active in <strong className="text-cyan-300">{currentLanguage.name}</strong></span>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-bold font-mono text-sm shadow-xl shadow-cyan-950/60 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isLoading ? 'Verifying Evidence...' : t('verifyClaim')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Curated Benchmark Claims for Quick Testing */}
        <div className="mt-6 pt-5 border-t border-slate-800/80">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Curated Investigative Benchmarks (Click to Instant Verify):
            </span>
            <span className="text-[10px] font-mono text-cyan-400">
              High-Fidelity Demo Dossiers
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => handleSelectQuickClaim('New ₹500 currency note contains a Nano-GPS satellite tracking chip embedded inside the security thread that transmits coordinates without batteries.')}
              className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-cyan-300 transition-all text-left"
            >
              💸 ₹500 Note GPS Chip
            </button>

            <button
              type="button"
              onClick={() => handleSelectQuickClaim('Chief Minister announces immediate cancellation of free agricultural electricity subsidies in an urgent press briefing video.', 'video')}
              className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-cyan-300 transition-all text-left"
            >
              🎥 CM Subsidies Deepfake Video
            </button>

            <button
              type="button"
              onClick={() => handleSelectQuickClaim('ISRO completes 720-second qualification test of the CE-20 cryogenic engine at Mahendragiri propulsion complex for the Gaganyaan mission.')}
              className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-cyan-300 transition-all text-left"
            >
              🚀 ISRO Cryogenic Test (Real)
            </button>

            <button
              type="button"
              onClick={() => handleSelectQuickClaim('Devastating monsoon floods submerge major national highway bridge in Assam yesterday isolating 14 villages.', 'image')}
              className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-cyan-300 transition-all text-left"
            >
              🌊 Recycled Flood Photo (Kerala 2018)
            </button>

            <button
              type="button"
              onClick={() => handleSelectQuickClaim('Secret foreign nuclear submarine spotted operating unauthorized inside the Andaman & Nicobar EEZ waters.')}
              className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-cyan-300 transition-all text-left"
            >
              ⚓ Secret Submarine Claim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
