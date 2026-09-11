import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

interface ConfidenceMeterProps {
  score: number; // 0 - 100
  explanation?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ConfidenceMeter: React.FC<ConfidenceMeterProps> = ({
  score,
  explanation,
  size = 'md',
}) => {
  const clampedScore = Math.min(100, Math.max(0, score));

  // Determine color theme based on score level
  let strokeColor = '#10b981'; // emerald
  let textColor = 'text-emerald-400';
  let glowColor = 'rgba(16, 185, 129, 0.2)';

  if (clampedScore < 50) {
    strokeColor = '#f59e0b'; // amber
    textColor = 'text-amber-400';
    glowColor = 'rgba(245, 158, 11, 0.2)';
  } else if (clampedScore < 75) {
    strokeColor = '#38bdf8'; // sky
    textColor = 'text-sky-400';
    glowColor = 'rgba(56, 189, 248, 0.2)';
  }

  const radius = size === 'sm' ? 28 : size === 'lg' ? 46 : 38;
  const strokeWidth = size === 'sm' ? 5 : size === 'lg' ? 8 : 6;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (clampedScore / 100) * circumference;
  const svgSize = (radius + strokeWidth) * 2;

  return (
    <div className="glass-panel rounded-2xl p-4 md:p-5 flex flex-col justify-between relative overflow-hidden">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
            Evidence Confidence Index
          </span>
        </div>
        <div className="group relative cursor-pointer">
          <Info className="w-3.5 h-3.5 text-slate-500 hover:text-cyan-400 transition-colors" />
          <div className="invisible group-hover:visible absolute right-0 bottom-full mb-2 w-64 p-2.5 bg-slate-900 border border-slate-700 text-[11px] text-slate-300 rounded-lg shadow-xl z-50 pointer-events-none leading-relaxed">
            Confidence represents statistical agreement among verified sources and forensic signals. It is not an absolute mathematical certainty.
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5 my-1">
        {/* Radial SVG Gauge */}
        <div className="relative flex items-center justify-center shrink-0">
          <svg
            width={svgSize}
            height={svgSize}
            className="transform -rotate-90"
            style={{ filter: `drop-shadow(0 0 10px ${glowColor})` }}
          >
            {/* Background ring */}
            <circle
              cx={svgSize / 2}
              cy={svgSize / 2}
              r={radius}
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            {/* Animated progress ring */}
            <circle
              cx={svgSize / 2}
              cy={svgSize / 2}
              r={radius}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className={`font-mono font-black ${size === 'lg' ? 'text-2xl' : 'text-xl'} ${textColor}`}>
              {clampedScore}%
            </span>
            <span className="text-[9px] uppercase tracking-widest text-slate-400 font-medium">
              Weight
            </span>
          </div>
        </div>

        {/* Text Breakdown */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-semibold uppercase tracking-wider ${textColor}`}>
              {clampedScore >= 85 ? 'High Corroboration' : clampedScore >= 60 ? 'Substantial Agreement' : 'Preliminary / Low Signal'}
            </span>
          </div>
          <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
            {explanation || 'Calculated from source authority hierarchy, cryptographic timestamps, and independent cross-verification.'}
          </p>
        </div>
      </div>

      {/* Safety Notice */}
      <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-start gap-1.5 text-[11px] text-slate-400">
        <span className="text-cyan-400 font-mono shrink-0">ℹ</span>
        <span>
          <strong className="text-slate-300 font-medium">Confidence ≠ Infallible Certainty:</strong> Reflects degree of verifiable evidence consensus currently available.
        </span>
      </div>
    </div>
  );
};
