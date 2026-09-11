import React, { useState } from 'react';
import { InvestigationReport } from '../types';
import {
  HelpCircle,
  Zap,
  FileSearch,
  FlaskConical,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
  Fingerprint
} from 'lucide-react';

interface ExplainabilityModeProps {
  report: InvestigationReport;
}

export const ExplainabilityMode: React.FC<ExplainabilityModeProps> = ({ report }) => {
  const [activeTab, setActiveTab] = useState<'30sec' | 'detailed' | 'expert'>('30sec');

  return (
    <div className="glass-panel rounded-2xl p-5 border border-slate-800 shadow-2xl">
      {/* Title & Tab Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
            <Fingerprint className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold font-mono tracking-wide text-slate-100 flex items-center gap-2">
              Why did TruthLens decide this?
              <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300">
                Explainability Protocol
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Clear, transparent reasoning without black-box opacity
            </p>
          </div>
        </div>

        {/* 3 View Tabs */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-mono">
          <button
            onClick={() => setActiveTab('30sec')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === '30sec'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            30-Sec Summary
          </button>
          <button
            onClick={() => setActiveTab('detailed')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'detailed'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileSearch className="w-3.5 h-3.5" />
            Detailed Investigation
          </button>
          <button
            onClick={() => setActiveTab('expert')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'expert'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FlaskConical className="w-3.5 h-3.5" />
            Expert Forensic View
          </button>
        </div>
      </div>

      {/* Tab Content Box */}
      <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 mb-6">
        {activeTab === '30sec' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase font-bold tracking-wider">
              <Zap className="w-4 h-4" />
              Executive 30-Second Bottom Line
            </div>
            <p className="text-sm md:text-base text-slate-200 font-medium leading-relaxed">
              {report.summary30Sec}
            </p>
          </div>
        )}

        {activeTab === 'detailed' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase font-bold tracking-wider">
              <FileSearch className="w-4 h-4" />
              Deep Investigative Dossier
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
              {report.detailedInvestigation}
            </p>
          </div>
        )}

        {activeTab === 'expert' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase font-bold tracking-wider">
              <FlaskConical className="w-4 h-4" />
              Technical / Forensic Methodology & Physical Constants
            </div>
            <p className="text-xs md:text-sm font-mono text-slate-300 leading-relaxed bg-slate-900/80 p-3 rounded-lg border border-slate-800">
              {report.expertEvidenceView}
            </p>
          </div>
        )}
      </div>

      {/* 4 Pillars of Reasoning: Strongest, Contradictory, Missing, Chain */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
        {/* Strongest Evidence */}
        <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-2.5">
            <CheckCircle className="w-4 h-4" />
            Strongest Corroboration
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            {report.reasoningFactors?.strongestEvidence?.map((ev, i) => (
              <li key={i} className="flex items-start gap-2 leading-relaxed">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>{ev}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contradictory Evidence */}
        <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-800/40">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase tracking-wider mb-2.5">
            <XCircle className="w-4 h-4" />
            Contradictory / Disproving Evidence
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            {report.reasoningFactors?.contradictoryEvidence?.length > 0 ? (
              report.reasoningFactors.contradictoryEvidence.map((ev, i) => (
                <li key={i} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-rose-400 font-bold">✗</span>
                  <span>{ev}</span>
                </li>
              ))
            ) : (
              <li className="text-slate-400 italic">No contradictory elements found; evidence aligns symmetrically.</li>
            )}
          </ul>
        </div>

        {/* Missing / Unestablished Evidence */}
        <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-2.5">
            <AlertTriangle className="w-4 h-4" />
            Missing Critical Elements
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            {report.reasoningFactors?.missingEvidence?.length > 0 ? (
              report.reasoningFactors.missingEvidence.map((ev, i) => (
                <li key={i} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-amber-400 font-bold">!</span>
                  <span>{ev}</span>
                </li>
              ))
            ) : (
              <li className="text-slate-400 italic">Audit did not identify critical evidentiary omissions.</li>
            )}
          </ul>
        </div>
      </div>

      {/* Reasoning Chain */}
      {report.reasoningFactors?.reasoningChain?.length > 0 && (
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-3">
            Forensic Reasoning Chain (Step-by-step Deductive Process):
          </span>
          <div className="flex flex-col md:flex-row md:items-center gap-2 text-xs">
            {report.reasoningFactors.reasoningChain.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex-1 bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-300 font-mono">
                  <span className="text-cyan-400 font-bold mr-1.5">0{idx + 1}.</span>
                  {step}
                </div>
                {idx < report.reasoningFactors.reasoningChain.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-slate-600 hidden md:block shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Stated Limitations */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-start gap-2 text-xs text-slate-400">
        <ShieldAlert className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-slate-300 font-mono uppercase tracking-wider text-[11px] block">
            Forensic & Epistemic Limitations:
          </strong>
          <span className="text-slate-400">
            {report.limitations?.join(' ')}
          </span>
        </div>
      </div>
    </div>
  );
};
