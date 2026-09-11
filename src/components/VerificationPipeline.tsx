import React, { useEffect, useState } from 'react';
import {
  FileSearch,
  Split,
  Building2,
  Database,
  Sparkles,
  GitCompare,
  Clock,
  Layers,
  Image,
  Video,
  Cpu,
  CheckCircle2,
  Loader2
} from 'lucide-react';

interface VerificationPipelineProps {
  onComplete?: () => void;
  active?: boolean;
}

interface PipelineStep {
  title: string;
  detail: string;
  icon: React.ReactNode;
}

const PIPELINE_STEPS: PipelineStep[] = [
  { title: 'Claim Extraction', detail: 'Parsing core factual assertions from text and metadata', icon: <FileSearch className="w-4 h-4" /> },
  { title: 'Claim Decomposition', detail: 'Splitting composite narrative into independent verifiable units', icon: <Split className="w-4 h-4" /> },
  { title: 'Source Authority Audit', detail: 'Evaluating domain reputation, author transparency, and past record', icon: <Building2 className="w-4 h-4" /> },
  { title: 'Evidence Retrieval', detail: 'Querying indexed institutional gazettes and peer-reviewed journals', icon: <Database className="w-4 h-4" /> },
  { title: 'Semantic & Rhetoric Scan', detail: 'Detecting clickbait manipulation, emotional bias, and alarmist framing', icon: <Sparkles className="w-4 h-4" /> },
  { title: 'Cross-Source Corroboration', detail: 'Mapping independent secondary reporting against primary records', icon: <GitCompare className="w-4 h-4" /> },
  { title: 'Temporal & Recycling Check', detail: 'Auditing whether an archived historical incident is repurposed', icon: <Clock className="w-4 h-4" /> },
  { title: 'Contextual Alignment', detail: 'Testing if authentic facts are presented with misleading attribution', icon: <Layers className="w-4 h-4" /> },
  { title: 'Image Forensics', detail: 'Reverse visual search, EXIF integrity audit, and compression artifacts', icon: <Image className="w-4 h-4" /> },
  { title: 'Video Intelligence', detail: 'Keyframe extraction, audio spectrogram and viseme alignment', icon: <Video className="w-4 h-4" /> },
  { title: 'Synthetic AI Detection', detail: 'Evaluating neural deepfake probability and generative patterns', icon: <Cpu className="w-4 h-4" /> },
  { title: 'Cross-Modal Consistency', detail: 'Synthesizing final credibility intelligence verdict dossier', icon: <CheckCircle2 className="w-4 h-4" /> },
];

export const VerificationPipeline: React.FC<VerificationPipelineProps> = ({
  onComplete,
  active = true,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < PIPELINE_STEPS.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          if (onComplete) {
            setTimeout(onComplete, 400);
          }
          return prev;
        }
      });
    }, 250);

    return () => clearInterval(interval);
  }, [active, onComplete]);

  return (
    <div className="glass-panel-glow rounded-2xl p-6 border border-cyan-500/30 max-w-3xl mx-auto shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-cyan-400 opacity-60"></span>
            <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />
          </div>
          <div>
            <h3 className="font-mono text-sm uppercase tracking-wider text-cyan-300 font-bold">
              TruthLens 12-Stage Deep Forensic Engine
            </h3>
            <p className="text-xs text-slate-400">
              Executing multimodal cross-corroboration & credibility analysis
            </p>
          </div>
        </div>
        <div className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800">
          Stage {currentStep + 1} / 12
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-900 rounded-full h-1.5 mb-6 overflow-hidden border border-slate-800">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400 transition-all duration-300 rounded-full"
          style={{ width: `${((currentStep + 1) / PIPELINE_STEPS.length) * 100}%` }}
        ></div>
      </div>

      {/* Step Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-h-[360px] overflow-y-auto pr-1">
        {PIPELINE_STEPS.map((step, idx) => {
          const isDone = idx < currentStep;
          const isCurrent = idx === currentStep;

          return (
            <div
              key={step.title}
              className={`flex items-start gap-3 p-2.5 rounded-xl border transition-all ${
                isCurrent
                  ? 'bg-cyan-950/40 border-cyan-500/60 shadow-lg shadow-cyan-950/50 scale-[1.01]'
                  : isDone
                  ? 'bg-slate-900/40 border-emerald-900/40 text-slate-300'
                  : 'bg-slate-950/30 border-slate-800/40 text-slate-400 opacity-40'
              }`}
            >
              <div
                className={`p-1.5 rounded-lg shrink-0 ${
                  isCurrent
                    ? 'bg-cyan-500 text-slate-950 animate-pulse'
                    : isDone
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-slate-800 text-slate-500'
                }`}
              >
                {isDone ? <CheckCircle2 className="w-4 h-4" /> : step.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold font-mono tracking-tight text-slate-200">
                    {step.title}
                  </h4>
                  {isCurrent && (
                    <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest animate-pulse">
                      Analyzing...
                    </span>
                  )}
                  {isDone && (
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                      Passed
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                  {step.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
