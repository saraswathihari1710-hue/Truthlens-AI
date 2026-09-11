import React, { useState } from 'react';
import { SourceItem } from '../types';
import {
  Building2,
  Calendar,
  User,
  ShieldCheck,
  AlertCircle,
  CheckCircle,
  ExternalLink,
  Info,
  Scale,
  Award,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface SourceTrustPanelProps {
  sources: SourceItem[];
}

export const SourceTrustPanel: React.FC<SourceTrustPanelProps> = ({ sources }) => {
  const [expandedSourceId, setExpandedSourceId] = useState<string | null>(sources[0]?.id || null);

  const getReputationBadge = (tier: SourceItem['reputationTier']) => {
    switch (tier) {
      case 'Primary Authority':
        return 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300';
      case 'High Authority':
        return 'bg-sky-500/15 border-sky-500/40 text-sky-300';
      case 'Fact-Check Bureau':
        return 'bg-indigo-500/15 border-indigo-500/40 text-indigo-300';
      case 'Secondary News':
        return 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300';
      case 'Moderate':
        return 'bg-amber-500/15 border-amber-500/40 text-amber-300';
      case 'Low / Unverified':
        return 'bg-rose-500/15 border-rose-500/40 text-rose-300';
      case 'State / Partisan':
        return 'bg-orange-500/15 border-orange-500/40 text-orange-300';
      default:
        return 'bg-slate-800 border-slate-700 text-slate-300';
    }
  };

  const getStanceBadge = (stance: SourceItem['stance']) => {
    switch (stance) {
      case 'Supports':
        return 'bg-emerald-950 border-emerald-700 text-emerald-400';
      case 'Contradicts':
        return 'bg-rose-950 border-rose-700 text-rose-400';
      case 'Contextualizes':
        return 'bg-amber-950 border-amber-700 text-amber-400';
      default:
        return 'bg-slate-800 border-slate-700 text-slate-400';
    }
  };

  return (
    <div className="glass-panel rounded-2xl p-5 border border-slate-800 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold font-mono tracking-wide text-slate-100 flex items-center gap-2">
              Source Trust Intelligence
              <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                {sources.length} evaluated
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Granular credibility breakdown, citation rigor & cross-source agreement
            </p>
          </div>
        </div>

        {/* Ethical disclaimer reminder */}
        <div className="text-[11px] text-slate-400 bg-slate-900/90 border border-slate-800 rounded-lg px-3 py-1.5 max-w-sm leading-tight">
          <strong className="text-cyan-400">Ethical Rule:</strong> TruthLens never stamps an entire outlet permanently as "fake." Each claim is audited against specific relevant evidence.
        </div>
      </div>

      {/* Sources List */}
      <div className="space-y-3">
        {sources.map((src) => {
          const isExpanded = expandedSourceId === src.id;

          return (
            <div
              key={src.id}
              className={`rounded-xl border transition-all ${
                isExpanded
                  ? 'bg-slate-900/90 border-slate-700 shadow-lg'
                  : 'bg-slate-950/50 border-slate-800/70 hover:border-slate-700'
              }`}
            >
              {/* Collapsed summary bar */}
              <div
                onClick={() => setExpandedSourceId(isExpanded ? null : src.id)}
                className="p-4 flex items-center justify-between gap-3 cursor-pointer select-none"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col items-center justify-center shrink-0">
                    <span className="text-xs font-mono font-black text-cyan-400">
                      {src.credibilityScore}
                    </span>
                    <span className="text-[8px] uppercase tracking-tighter text-slate-400">
                      Score
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-bold text-sm text-slate-200 truncate font-mono">
                        {src.name}
                      </h4>
                      <span className="text-xs text-slate-500 font-mono">
                        ({src.domain})
                      </span>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${getReputationBadge(src.reputationTier)}`}>
                        {src.reputationTier}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 truncate mt-0.5">
                      {src.quoteOrSummary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full border ${getStanceBadge(src.stance)}`}>
                    {src.stance}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  )}
                </div>
              </div>

              {/* Expanded Detailed Intelligence Panel */}
              {isExpanded && (
                <div className="px-4 pb-4 pt-2 border-t border-slate-800/80 text-xs animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-3 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                        Source Category
                      </span>
                      <span className="font-medium text-slate-200 font-mono mt-0.5 block">
                        {src.type}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                        Publication / Record Date
                      </span>
                      <span className="font-medium text-slate-200 font-mono mt-0.5 block flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-cyan-400" />
                        {src.publicationDate}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                        Citation Rigor
                      </span>
                      <span className="font-medium text-slate-200 font-mono mt-0.5 block">
                        {src.citationQuality}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                        Transparency Rating
                      </span>
                      <span className="font-medium text-cyan-400 font-mono mt-0.5 block">
                        {src.transparencyScore} / 100
                      </span>
                    </div>
                  </div>

                  {src.author && (
                    <div className="mb-2 text-slate-300 flex items-center gap-1.5 text-xs">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-slate-400">Author / Desk:</span>
                      <span className="font-medium text-slate-200">{src.author}</span>
                    </div>
                  )}

                  {/* Primary Quote or Assessment */}
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Direct Evidentiary Excerpt / Finding:
                    </span>
                    <p className="italic text-slate-200 leading-relaxed">
                      "{src.quoteOrSummary}"
                    </p>
                  </div>

                  {/* Potential Bias & Reliability Signals */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Institutional Bias Assessment:
                      </span>
                      <p className="text-slate-300 leading-normal">
                        {src.potentialBiasIndicator}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Corroborating Reliability Signals:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {src.reliabilitySignals.map((signal) => (
                          <span
                            key={signal}
                            className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px] border border-slate-700"
                          >
                            ✓ {signal}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {src.url && (
                    <div className="mt-3 text-right">
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 underline"
                      >
                        Inspect Primary Source Archive <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
