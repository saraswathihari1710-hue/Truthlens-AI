import React, { useState } from 'react';
import { RadarNarrative, RegionHotspot } from '../types';
import { RADAR_NARRATIVES, REGION_HOTSPOTS, RADAR_TIMELINE_TRENDS } from '../data/radarData';
import {
  Radio,
  Flame,
  AlertCircle,
  TrendingUp,
  MapPin,
  Filter,
  ArrowUpRight,
  Cpu,
  Share2,
  Clock,
  ShieldCheck,
  Search
} from 'lucide-react';

interface MisinformationRadarViewProps {
  onSelectNarrative?: (narrativeTitle: string) => void;
}

export const MisinformationRadarView: React.FC<MisinformationRadarViewProps> = ({
  onSelectNarrative,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedHotspot, setSelectedHotspot] = useState<RegionHotspot | null>(REGION_HOTSPOTS[0]);

  const categories = ['All', 'Financial & Scams', 'Disaster & Weather', 'Health & Medicine', 'Elections & Politics', 'Science & Tech'];

  const filteredNarratives = RADAR_NARRATIVES.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const getVelocityBadge = (velocity: RadarNarrative['velocity']) => {
    switch (velocity) {
      case 'Explosive':
        return 'bg-rose-950 text-rose-300 border-rose-800 animate-pulse';
      case 'Rapid':
        return 'bg-amber-950 text-amber-300 border-amber-800';
      case 'Steady':
        return 'bg-sky-950 text-sky-300 border-sky-800';
      default:
        return 'bg-slate-800 text-slate-400 border-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Radar Top Live Bar */}
      <div className="glass-panel-glow rounded-2xl p-5 border border-cyan-500/30 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-rose-500 opacity-40"></span>
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold font-mono text-slate-100 flex items-center gap-2">
              National Misinformation Radar
              <span className="text-xs px-2 py-0.5 rounded-full bg-rose-950 text-rose-300 border border-rose-800 font-mono font-semibold">
                Live Open-Source Monitoring
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              Real-time velocity tracking, recycled rumor detection & regional Indian state risk hotspots
            </p>
          </div>
        </div>

        {/* Live Counters */}
        <div className="flex items-center gap-3 md:gap-5 flex-wrap">
          <div className="bg-slate-900/90 border border-slate-800 px-3.5 py-2 rounded-xl text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Debunked Today</span>
            <span className="text-lg font-mono font-black text-cyan-400">512</span>
          </div>
          <div className="bg-slate-900/90 border border-slate-800 px-3.5 py-2 rounded-xl text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Deepfakes Flagged</span>
            <span className="text-lg font-mono font-black text-rose-400">114</span>
          </div>
          <div className="bg-slate-900/90 border border-slate-800 px-3.5 py-2 rounded-xl text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Virality Surge</span>
            <span className="text-lg font-mono font-black text-amber-400">98% High</span>
          </div>
        </div>
      </div>

      {/* Category Pills & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-mono px-3 py-1.5 rounded-xl border whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold'
                  : 'bg-slate-900/70 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search radar narratives..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900/80 border border-slate-800 text-slate-200 text-xs rounded-xl pl-9 pr-3 py-2 focus:outline-none focus:border-cyan-500 font-mono placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Radar Main Grid: Narratives & Regional Hotspots */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Rapidly Spreading Narratives (2 cols) */}
        <div className="lg:col-span-2 space-y-3.5">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
            <span className="flex items-center gap-1.5 text-slate-300 font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4 text-amber-400" />
              Active Viral Narratives ({filteredNarratives.length})
            </span>
            <span className="text-[11px] text-slate-500">Sorted by virality velocity index</span>
          </div>

          {filteredNarratives.map((item) => (
            <div
              key={item.id}
              className="glass-panel rounded-2xl p-4 md:p-5 border border-slate-800 hover:border-slate-700 transition-all group"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded border ${getVelocityBadge(item.velocity)}`}>
                    {item.velocity} Velocity
                  </span>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">
                    {item.category}
                  </span>
                  {item.manipulatedMedia && (
                    <span className="text-[10px] font-mono font-bold text-rose-300 bg-rose-950 px-2 py-0.5 rounded border border-rose-800 flex items-center gap-1">
                      <Cpu className="w-3 h-3" /> AI Manipulated Media
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span>{item.firstSeen}</span>
                </div>
              </div>

              <h3 className="text-base font-bold font-mono text-slate-100 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mt-2">
                {item.summary}
              </p>

              {/* Channels & Region */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/80 text-xs">
                <div className="flex items-center gap-3 text-slate-400 font-mono text-[11px] flex-wrap">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {item.region}
                  </span>
                  <span>•</span>
                  <span>Languages: {item.language}</span>
                  <span>•</span>
                  <span className="text-cyan-400 font-semibold">{item.sharesEstimate}</span>
                </div>

                {onSelectNarrative && (
                  <button
                    onClick={() => onSelectNarrative(item.title)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    Open Intelligence Dossier <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Indian Regional Hotspots (1 col) */}
        <div className="space-y-4">
          <div className="glass-panel rounded-2xl p-5 border border-slate-800 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-slate-200">
                Indian State Risk Hotspots
              </h3>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Regional surveillance cluster tracking localized claim clusters and vernacular spread.
            </p>

            {/* Hotspots List */}
            <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
              {REGION_HOTSPOTS.map((spot) => {
                const isSelected = selectedHotspot?.code === spot.code;
                return (
                  <div
                    key={spot.code}
                    onClick={() => setSelectedHotspot(spot)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-cyan-950/50 border-cyan-500 text-slate-100 shadow-md'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center font-mono text-xs font-bold text-cyan-400">
                          {spot.code}
                        </span>
                        <div>
                          <h4 className="text-xs font-bold font-mono">{spot.state}</h4>
                          <span className="text-[10px] text-slate-500 font-mono">
                            {spot.primaryCategory}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-mono font-bold text-slate-200 block">
                          {spot.activeClaimsCount} claims
                        </span>
                        <span className={`text-[9px] font-mono font-bold uppercase ${
                          spot.riskLevel === 'critical' ? 'text-rose-400' : spot.riskLevel === 'elevated' ? 'text-amber-400' : 'text-sky-400'
                        }`}>
                          {spot.riskLevel}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Hotspot Deep Dive */}
            {selectedHotspot && (
              <div className="mt-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-1.5 animate-in fade-in duration-200">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Selected State:</span>
                  <span className="text-cyan-400 font-bold">{selectedHotspot.state} ({selectedHotspot.code})</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Active Claims:</span>
                  <span className="text-slate-200 font-bold">{selectedHotspot.activeClaimsCount}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Dominant Media:</span>
                  <span className="text-slate-300">{selectedHotspot.primaryCategory}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Top Languages:</span>
                  <span className="text-slate-300">{selectedHotspot.topLanguages.join(', ')}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
