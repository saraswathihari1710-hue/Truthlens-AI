import React from 'react';
import { VerdictType } from '../types';
import { VERDICT_CONFIGS } from '../data/mockInvestigations';
import { CheckCircle2, AlertTriangle, XCircle, HelpCircle, Wand2, MinusCircle, Info } from 'lucide-react';

interface VerdictBadgeProps {
  verdict: VerdictType;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showDescription?: boolean;
  nativeLabel?: string;
  className?: string;
}

export const VerdictBadge: React.FC<VerdictBadgeProps> = ({
  verdict,
  size = 'md',
  showDescription = false,
  nativeLabel,
  className = '',
}) => {
  const config = VERDICT_CONFIGS[verdict] || VERDICT_CONFIGS['UNVERIFIED'];

  const getIcon = () => {
    switch (verdict) {
      case 'VERIFIED':
        return <CheckCircle2 className="shrink-0" />;
      case 'MOSTLY_SUPPORTED':
        return <Info className="shrink-0" />;
      case 'MISLEADING':
        return <AlertTriangle className="shrink-0" />;
      case 'UNVERIFIED':
        return <HelpCircle className="shrink-0" />;
      case 'FALSE':
        return <XCircle className="shrink-0" />;
      case 'MANIPULATED_MEDIA':
        return <Wand2 className="shrink-0" />;
      case 'INSUFFICIENT_EVIDENCE':
        return <MinusCircle className="shrink-0" />;
      default:
        return <HelpCircle className="shrink-0" />;
    }
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1 gap-1.5 font-mono font-semibold',
    md: 'text-sm px-3.5 py-1.5 gap-2 font-mono font-bold tracking-wide',
    lg: 'text-base px-4 py-2 gap-2.5 font-mono font-bold tracking-wider',
    hero: 'text-lg md:text-xl px-5 py-2.5 gap-3 font-mono font-black tracking-widest',
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    hero: 'w-6 h-6',
  };

  const displayLabel = nativeLabel || config.label;

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <span
        id={`verdict-badge-${verdict.toLowerCase()}`}
        className={`inline-flex items-center rounded-full border shadow-sm transition-all ${config.badgeBg} ${config.badgeBorder} ${config.textColor} ${sizeStyles[size]}`}
      >
        <span className={`relative flex ${iconSizes[size]}`}>
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-40 ${config.dotColor}`}></span>
          <span className={`relative inline-flex rounded-full ${iconSizes[size]} items-center justify-center`}>
            {React.cloneElement(getIcon(), { className: iconSizes[size] })}
          </span>
        </span>
        <span>{displayLabel}</span>
      </span>

      {showDescription && (
        <p className="mt-1.5 text-xs text-slate-400 max-w-sm leading-relaxed">
          {config.description}
        </p>
      )}
    </div>
  );
};
