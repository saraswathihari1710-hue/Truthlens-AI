import React from 'react';
import { InvestigationReport } from '../types';
import { VerdictBadge } from './VerdictBadge';
import { ConfidenceMeter } from './ConfidenceMeter';
import { ExplainabilityMode } from './ExplainabilityMode';
import { EvidenceGraphView } from './EvidenceGraphView';
import { SourceTrustPanel } from './SourceTrustPanel';
import { ClaimTimelineView } from './ClaimTimelineView';
import { MediaLabView } from './MediaLabView';
import {
  Download,
  Share2,
  Sparkles,
  FileCheck2,
  Calendar,
  Layers,
  Split,
  Tag,
  ShieldCheck,
  AlertTriangle,
  RotateCcw
} from 'lucide-react';
import { LanguageOption, getTranslation } from '../i18n/languages';

interface InvestigationDossierViewProps {
  report: InvestigationReport;
  currentLanguage: LanguageOption;
  onOpenReportModal: () => void;
  onOpenCopilot: () => void;
  onNewInvestigation: () => void;
}

export const InvestigationDossierView: React.FC<InvestigationDossierViewProps> = ({
  report,
  currentLanguage,
  onOpenReportModal,
  onOpenCopilot,
  onNewInvestigation,
}) => {
  const t = (key: any) => getTranslation(currentLanguage.code, key);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Action & Verification Metadata Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs font-bold text-slate-200">
              Audit ID: <span className="text-cyan-400">{report.verificationId}</span>
            </span>
          </div>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
            <Calendar className="w-3 h-3 text-slate-500" />
            {new Date(report.timestamp).toLocaleString()}
          </span>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
            {report.category}
          </span>
          {report.isDemo && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
              Benchmark Verified
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenReportModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>Export Report</span>
          </button>

          <button
            onClick={onOpenCopilot}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ask Copilot</span>
          </button>

          <button
            onClick={onNewInvestigation}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors"
            title="Start new analysis"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>New</span>
          </button>
        </div>
      </div>

      {/* Claim Title & Central Assessment Section */}
      <div className="glass-panel rounded-3xl p-6 md:p-8 border border-slate-800 shadow-2xl space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
            Target Digital Claim Under Forensic Investigation:
          </span>
          <h2 className="text-xl md:text-2xl font-bold font-mono text-slate-100 leading-snug">
            "{report.claim}"
          </h2>
        </div>

        {/* Verdict Hero Banner + Confidence Gauge Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
          {/* Main Verdict Card (2 cols) */}
          <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Synthesized Evidence Assessment
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  TruthLens Categorical Framework
                </span>
              </div>

              <div className="mb-4">
                <VerdictBadge
                  verdict={report.verdict}
                  size="hero"
                  showDescription={true}
                  nativeLabel={getTranslation(currentLanguage.code, report.verdict as any)}
                />
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 mt-4">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
                  Executive Finding:
                </span>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {report.summary30Sec}
                </p>
              </div>
            </div>

            {/* Semantic Tone Indicators */}
            {report.semanticAnalysis && (
              <div className="mt-5 pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Sensationalism Index</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className={`font-bold ${report.semanticAnalysis.sensationalLanguageScore > 60 ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {report.semanticAnalysis.sensationalLanguageScore}%
                    </span>
                    <span className="text-slate-400 text-[10px]">
                      {report.semanticAnalysis.sensationalLanguageScore > 60 ? 'High Clickbait' : 'Neutral Tone'}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Emotional Manipulation</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className={`font-bold ${report.semanticAnalysis.emotionalManipulationScore > 60 ? 'text-rose-400' : 'text-sky-400'}`}>
                      {report.semanticAnalysis.emotionalManipulationScore}%
                    </span>
                    <span className="text-slate-400 text-[10px]">
                      {report.semanticAnalysis.emotionalManipulationScore > 60 ? 'Rage-Bait Risk' : 'Calm Cadence'}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Discourse Framing</span>
                  <span className="font-bold text-slate-200 mt-0.5 block">
                    {report.semanticAnalysis.framingType}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Confidence Meter (1 col) */}
          <div className="flex flex-col">
            <ConfidenceMeter
              score={report.confidenceScore}
              explanation={report.confidenceExplanation}
              size="lg"
            />
          </div>
        </div>
      </div>

      {/* Claim Decomposition Breakdown */}
      {report.subClaims && report.subClaims.length > 0 && (
        <div className="glass-panel rounded-2xl p-5 border border-slate-800 shadow-xl">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-2 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400">
              <Split className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold font-mono tracking-wide text-slate-100 flex items-center gap-2">
                Claim Decomposition
                <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  {report.subClaims.length} atomic assertions
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Composite narratives dissected into independently verifiable factual elements
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {report.subClaims.map((sub, idx) => (
              <div
                key={sub.id || idx}
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold">
                      Sub-assertion 0{idx + 1}
                    </span>
                    <VerdictBadge verdict={sub.verdict} size="sm" />
                  </div>
                  <h4 className="text-xs font-mono font-bold text-slate-200 leading-snug">
                    "{sub.text}"
                  </h4>
                </div>

                <div className="pt-2 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block mb-0.5">
                    Forensic Verification Note:
                  </span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {sub.verificationNote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* "Why did TruthLens decide this?" Explainability Mode */}
      <ExplainabilityMode report={report} />

      {/* Interactive Evidence Graph */}
      <EvidenceGraphView
        graphData={report.graphData}
        claimTitle={report.claim}
        verdictLabel={report.verdict}
      />

      {/* Source Trust Intelligence */}
      <SourceTrustPanel sources={report.sources} />

      {/* Claim Propagation Timeline */}
      <ClaimTimelineView
        timeline={report.timeline}
        temporalAnalysis={report.temporalAnalysis}
      />

      {/* Multimodal Media Lab (if media attached or image/video claim) */}
      {report.mediaIntelligence && (
        <MediaLabView mediaIntel={report.mediaIntelligence} report={report} />
      )}
    </div>
  );
};
