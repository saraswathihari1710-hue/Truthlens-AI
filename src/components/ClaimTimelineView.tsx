import React from 'react';
import { TimelineEvent, TemporalAnalysis } from '../types';
import {
  Clock,
  AlertTriangle,
  History,
  TrendingUp,
  Share2,
  CheckCircle2,
  Calendar,
  Layers
} from 'lucide-react';

interface ClaimTimelineViewProps {
  timeline: TimelineEvent[];
  temporalAnalysis?: TemporalAnalysis;
}

export const ClaimTimelineView: React.FC<ClaimTimelineViewProps> = ({
  timeline,
  temporalAnalysis,
}) => {
  const getStageBadgeColor = (stage: TimelineEvent['stage']) => {
    switch (stage) {
      case 'First Detected':
        return 'border-sky-500 text-sky-400 bg-sky-950/40';
      case 'Major Publications':
        return 'border-indigo-500 text-indigo-400 bg-indigo-950/40';
      case 'Social Amplification':
        return 'border-rose-500 text-rose-400 bg-rose-950/40';
      case 'Fact-Check & Corrections':
        return 'border-emerald-500 text-emerald-400 bg-emerald-950/40';
      case 'Current Evidence Status':
        return 'border-cyan-500 text-cyan-400 bg-cyan-950/40';
      default:
        return 'border-slate-500 text-slate-400 bg-slate-900';
    }
  };

  const getImpactBadge = (impact: TimelineEvent['impactLevel']) => {
    switch (impact) {
      case 'viral':
        return 'bg-rose-950 text-rose-300 border-rose-800 animate-pulse';
      case 'high':
        return 'bg-amber-950 text-amber-300 border-amber-800';
      case 'medium':
        return 'bg-sky-950 text-sky-300 border-sky-800';
      default:
        return 'bg-slate-800 text-slate-400 border-slate-700';
    }
  };

  return (
    <div className="glass-panel rounded-2xl p-5 border border-slate-800 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-400">
            <History className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold font-mono tracking-wide text-slate-100 flex items-center gap-2">
              Claim Propagation & Timeline
              <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                Temporal Chronology
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Tracking origin, amplification waves, fact-check responses & recycled resurgences
            </p>
          </div>
        </div>

        {temporalAnalysis?.isOutdated && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-mono font-semibold">
            <AlertTriangle className="w-4 h-4 text-amber-400 animate-pulse shrink-0" />
            <span>Recycled Misinformation Detected</span>
          </div>
        )}
      </div>

      {/* Temporal Recycling Banner (if applicable) */}
      {temporalAnalysis && (
        <div className="mb-6 p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              Temporal Verification Analysis
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {temporalAnalysis.recycledContextSummary}
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0 bg-slate-900 p-2.5 rounded-lg border border-slate-800 font-mono text-xs">
            {temporalAnalysis.originalEventDate && (
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">True Origin Date</span>
                <span className="text-emerald-400 font-bold">{temporalAnalysis.originalEventDate}</span>
              </div>
            )}
            <div className="h-6 w-px bg-slate-700"></div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase block">Temporal Drift Index</span>
              <span className={`font-bold ${temporalAnalysis.temporalMismatchScore > 70 ? 'text-rose-400' : 'text-sky-400'}`}>
                {temporalAnalysis.temporalMismatchScore} / 100
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Timeline Steps */}
      <div className="relative pl-6 md:pl-8 border-l border-slate-800 space-y-6 my-2">
        {timeline.map((event, idx) => (
          <div key={event.id} className="relative group">
            {/* Dot marker */}
            <div
              className={`absolute -left-[31px] md:-left-[39px] top-1 w-5 h-5 rounded-full border-2 bg-slate-950 flex items-center justify-center transition-all ${getStageBadgeColor(
                event.stage
              )}`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
            </div>

            {/* Event Card */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-xs font-bold text-cyan-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {event.date}
                  </span>
                  <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border font-semibold ${getStageBadgeColor(event.stage)}`}>
                    {event.stage}
                  </span>
                </div>
                <span className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded border ${getImpactBadge(event.impactLevel)}`}>
                  Impact: {event.impactLevel}
                </span>
              </div>

              <h4 className="text-sm font-bold text-slate-200 font-mono mb-1">
                {event.title}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {event.description}
              </p>

              {event.sourceName && (
                <div className="mt-2 text-[11px] text-slate-500 font-mono">
                  Origin Attribution: <span className="text-slate-400">{event.sourceName}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
