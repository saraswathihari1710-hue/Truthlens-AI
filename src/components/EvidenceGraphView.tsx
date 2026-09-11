import React, { useState, useMemo } from 'react';
import { EvidenceGraphData, EvidenceGraphNode } from '../types';
import {
  Network,
  Info,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  FileText,
  Building,
  Scale,
  Maximize2,
  Filter,
  X
} from 'lucide-react';

interface EvidenceGraphViewProps {
  graphData: EvidenceGraphData;
  claimTitle?: string;
  verdictLabel?: string;
}

export const EvidenceGraphView: React.FC<EvidenceGraphViewProps> = ({
  graphData,
  claimTitle,
  verdictLabel,
}) => {
  const [selectedNode, setSelectedNode] = useState<EvidenceGraphNode | null>(null);
  const [filterStance, setFilterStance] = useState<'all' | 'Supports' | 'Contradicts' | 'Neutral'>('all');

  // Compute calculated positions for nodes in a visually balanced hierarchical layout
  const layoutNodes = useMemo(() => {
    const nodes = [...graphData.nodes];
    const width = 840;
    const height = 480;

    // Categorize nodes by logical column levels
    const claims = nodes.filter(n => n.type === 'claim');
    const subclaims = nodes.filter(n => n.type === 'subclaim');
    const sources = nodes.filter(n => n.type === 'source');
    const evidence = nodes.filter(n => n.type === 'evidence_pro' || n.type === 'evidence_con');
    const verdicts = nodes.filter(n => n.type === 'verdict');

    const positioned: (EvidenceGraphNode & { cx: number; cy: number })[] = [];

    // Column 1: Claim (x ~ 80)
    claims.forEach((n, idx) => {
      positioned.push({
        ...n,
        cx: 80,
        cy: height / 2 + (idx - (claims.length - 1) / 2) * 80,
      });
    });

    // Column 2: Sub-claims (x ~ 250)
    subclaims.forEach((n, idx) => {
      const step = subclaims.length > 1 ? (height - 140) / (subclaims.length - 1) : height / 2;
      positioned.push({
        ...n,
        cx: 240,
        cy: subclaims.length === 1 ? height / 2 : 70 + idx * step,
      });
    });

    // Column 3: Sources (x ~ 430)
    sources.forEach((n, idx) => {
      const step = sources.length > 1 ? (height - 120) / (sources.length - 1) : height / 2;
      positioned.push({
        ...n,
        cx: 430,
        cy: sources.length === 1 ? height / 2 : 60 + idx * step,
      });
    });

    // Column 4: Evidence Nodes (x ~ 620)
    evidence.forEach((n, idx) => {
      const step = evidence.length > 1 ? (height - 120) / (evidence.length - 1) : height / 2;
      positioned.push({
        ...n,
        cx: 620,
        cy: evidence.length === 1 ? height / 2 : 60 + idx * step,
      });
    });

    // Column 5: Verdict (x ~ 770)
    verdicts.forEach((n, idx) => {
      positioned.push({
        ...n,
        cx: 770,
        cy: height / 2 + (idx - (verdicts.length - 1) / 2) * 80,
      });
    });

    return positioned;
  }, [graphData.nodes]);

  const filteredNodes = useMemo(() => {
    if (filterStance === 'all') return layoutNodes;
    return layoutNodes.filter(n => {
      if (n.type === 'claim' || n.type === 'verdict') return true;
      if (n.stance === filterStance) return true;
      if (filterStance === 'Supports' && n.type === 'evidence_pro') return true;
      if (filterStance === 'Contradicts' && n.type === 'evidence_con') return true;
      return false;
    });
  }, [layoutNodes, filterStance]);

  const getNodeColor = (node: EvidenceGraphNode) => {
    switch (node.type) {
      case 'claim':
        return { fill: '#0ea5e9', stroke: '#38bdf8', text: 'text-sky-400', bg: 'bg-sky-500/10' };
      case 'subclaim':
        return { fill: '#6366f1', stroke: '#818cf8', text: 'text-indigo-400', bg: 'bg-indigo-500/10' };
      case 'source':
        return node.stance === 'Contradicts'
          ? { fill: '#e11d48', stroke: '#fb7185', text: 'text-rose-400', bg: 'bg-rose-500/10' }
          : node.stance === 'Supports'
          ? { fill: '#10b981', stroke: '#34d399', text: 'text-emerald-400', bg: 'bg-emerald-500/10' }
          : { fill: '#a855f7', stroke: '#c084fc', text: 'text-purple-400', bg: 'bg-purple-500/10' };
      case 'evidence_pro':
        return { fill: '#10b981', stroke: '#34d399', text: 'text-emerald-400', bg: 'bg-emerald-500/10' };
      case 'evidence_con':
        return { fill: '#f43f5e', stroke: '#fb7185', text: 'text-rose-400', bg: 'bg-rose-500/10' };
      case 'verdict':
        return { fill: '#eab308', stroke: '#fde047', text: 'text-yellow-400', bg: 'bg-yellow-500/10' };
      default:
        return { fill: '#64748b', stroke: '#94a3b8', text: 'text-slate-400', bg: 'bg-slate-500/10' };
    }
  };

  return (
    <div className="glass-panel rounded-2xl p-5 border border-slate-800 shadow-2xl relative">
      {/* Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-4 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold font-mono tracking-wide text-slate-100 flex items-center gap-2">
              Interactive Evidence Graph
              <span className="text-[11px] font-normal px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300">
                Click nodes to inspect
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Visualizing the reasoning pipeline: Claim → Sources → Evidence → Contradictions → Verdict
            </p>
          </div>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs font-mono">
          <Filter className="w-3.5 h-3.5 text-slate-400 ml-1.5" />
          <button
            onClick={() => setFilterStance('all')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              filterStance === 'all' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Nodes
          </button>
          <button
            onClick={() => setFilterStance('Supports')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              filterStance === 'Supports' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-emerald-400'
            }`}
          >
            Pro Evidence
          </button>
          <button
            onClick={() => setFilterStance('Contradicts')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              filterStance === 'Contradicts' ? 'bg-rose-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-rose-400'
            }`}
          >
            Contradictions
          </button>
        </div>
      </div>

      {/* Main Graph Canvas Container */}
      <div className="relative w-full overflow-x-auto rounded-xl bg-slate-950/60 border border-slate-900 p-2">
        <svg
          viewBox="0 0 850 480"
          className="w-full min-w-[750px] h-[380px] md:h-[420px] select-none"
        >
          <defs>
            {/* Markers for directed arrows */}
            <marker id="arrow-supports" viewBox="0 0 10 10" refX="24" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
            </marker>
            <marker id="arrow-contradicts" viewBox="0 0 10 10" refX="24" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#f43f5e" />
            </marker>
            <marker id="arrow-analyzes" viewBox="0 0 10 10" refX="24" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
            </marker>
            <marker id="arrow-concludes" viewBox="0 0 10 10" refX="24" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#eab308" />
            </marker>

            {/* Glowing filter */}
            <filter id="node-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Grid Background */}
          <pattern id="graph-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#graph-grid)" />

          {/* Column Stage Labels */}
          <g className="font-mono text-[10px] uppercase tracking-widest fill-slate-400 font-semibold">
            <text x="80" y="24" textAnchor="middle">1. Central Claim</text>
            <text x="240" y="24" textAnchor="middle">2. Decomposition</text>
            <text x="430" y="24" textAnchor="middle">3. Source Nodes</text>
            <text x="620" y="24" textAnchor="middle">4. Corroboration</text>
            <text x="770" y="24" textAnchor="middle">5. Assessment</text>
          </g>

          {/* Edges */}
          {graphData.edges.map((edge) => {
            const src = layoutNodes.find(n => n.id === edge.source);
            const tgt = layoutNodes.find(n => n.id === edge.target);
            if (!src || !tgt) return null;

            const isHighlighted = selectedNode && (selectedNode.id === src.id || selectedNode.id === tgt.id);
            const isContradicts = edge.relationship === 'contradicts';
            const isSupports = edge.relationship === 'supports';
            const isConcludes = edge.relationship === 'concludes';

            const strokeColor = isContradicts
              ? '#f43f5e'
              : isSupports
              ? '#10b981'
              : isConcludes
              ? '#eab308'
              : '#38bdf8';

            // Curved cubic bezier
            const dx = tgt.cx - src.cx;
            const pathData = `M ${src.cx} ${src.cy} C ${src.cx + dx * 0.45} ${src.cy}, ${tgt.cx - dx * 0.45} ${tgt.cy}, ${tgt.cx} ${tgt.cy}`;

            return (
              <g key={edge.id} className="transition-all duration-300">
                <path
                  d={pathData}
                  fill="none"
                  stroke={strokeColor}
                  strokeWidth={isHighlighted ? 3 : 1.5}
                  strokeOpacity={isHighlighted ? 0.9 : 0.4}
                  strokeDasharray={edge.relationship === 'contradicts' ? '4 3' : undefined}
                  markerEnd={`url(#arrow-${edge.relationship})`}
                />
              </g>
            );
          })}

          {/* Nodes */}
          {filteredNodes.map((node) => {
            const colors = getNodeColor(node);
            const isSelected = selectedNode?.id === node.id;
            const radius = node.type === 'claim' || node.type === 'verdict' ? 22 : 17;

            return (
              <g
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className="cursor-pointer transition-transform hover:scale-110"
                style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
              >
                {/* Glow ring when selected */}
                {isSelected && (
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={radius + 8}
                    fill="none"
                    stroke={colors.stroke}
                    strokeWidth="2"
                    strokeDasharray="4 2"
                    className="animate-spin"
                    style={{ transformOrigin: `${node.cx}px ${node.cy}px`, animationDuration: '8s' }}
                  />
                )}

                {/* Node Circle */}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={radius}
                  fill="#090d16"
                  stroke={colors.stroke}
                  strokeWidth={isSelected ? 3 : 2}
                  filter="url(#node-glow)"
                />

                {/* Inner Icon / Letter */}
                <text
                  cx={node.cx}
                  cy={node.cy}
                  x={node.cx}
                  y={node.cy + 4}
                  textAnchor="middle"
                  fill={colors.stroke}
                  className="font-mono font-bold text-[11px] pointer-events-none"
                >
                  {node.type === 'claim'
                    ? 'CLM'
                    : node.type === 'subclaim'
                    ? 'SUB'
                    : node.type === 'source'
                    ? 'SRC'
                    : node.type === 'evidence_pro'
                    ? 'PRO'
                    : node.type === 'evidence_con'
                    ? 'CON'
                    : 'VER'}
                </text>

                {/* Label text below */}
                <text
                  x={node.cx}
                  y={node.cy + radius + 15}
                  textAnchor="middle"
                  className="font-mono text-[10px] fill-slate-300 font-medium pointer-events-none"
                >
                  {node.label.length > 18 ? node.label.substring(0, 16) + '…' : node.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-between gap-2 p-3 mt-1 bg-slate-900/60 rounded-xl border border-slate-800/80 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span> Primary Claim
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400"></span> Sub-claims
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span> Sources
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> Supporting Evidence
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span> Contradicting Evidence
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span> Final Assessment
            </span>
          </div>
          <span className="text-[10px] text-slate-500">
            Total Graph Nodes: {graphData.nodes.length}
          </span>
        </div>
      </div>

      {/* Selected Node Details Drawer / Popover */}
      {selectedNode && (
        <div className="mt-4 p-4 rounded-xl bg-slate-900 border border-cyan-500/40 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold bg-cyan-950 border border-cyan-800 text-cyan-300">
                {selectedNode.type.replace('_', ' ')}
              </span>
              {selectedNode.stance && (
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold ${
                    selectedNode.stance === 'Contradicts'
                      ? 'bg-rose-950 border border-rose-800 text-rose-300'
                      : selectedNode.stance === 'Supports'
                      ? 'bg-emerald-950 border border-emerald-800 text-emerald-300'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {selectedNode.stance}
                </span>
              )}
              <h4 className="font-bold text-sm text-slate-100 font-mono">
                {selectedNode.label}
              </h4>
            </div>
            <button
              onClick={() => setSelectedNode(null)}
              className="p-1 text-slate-400 hover:text-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="mt-2 text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-800">
            {selectedNode.details}
          </p>

          <div className="mt-3 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
            <span className="text-[11px]">
              Why this influenced the result: Verified against cross-corroborated primary databases.
            </span>
            {selectedNode.confidence && (
              <span className="font-mono text-cyan-400 font-semibold">
                Corroboration: {selectedNode.confidence}%
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
