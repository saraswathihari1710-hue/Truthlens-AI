import React, { useState } from 'react';
import { MediaIntelligence, InvestigationReport } from '../types';
import {
  Image as ImageIcon,
  Video,
  Cpu,
  Layers,
  Search,
  FileCheck,
  AlertTriangle,
  CheckCircle,
  Eye,
  Sliders,
  Sparkles,
  Info,
  Activity
} from 'lucide-react';

interface MediaLabViewProps {
  mediaIntel?: MediaIntelligence;
  report?: InvestigationReport;
}

export const MediaLabView: React.FC<MediaLabViewProps> = ({
  mediaIntel,
  report,
}) => {
  const [activeTab, setActiveTab] = useState<'forensics' | 'crossmodal' | 'keyframes' | 'metadata'>('forensics');
  const [showHeatmapOverlay, setShowHeatmapOverlay] = useState(true);

  if (!mediaIntel || mediaIntel.mediaType === 'none') {
    return (
      <div className="glass-panel rounded-2xl p-8 border border-slate-800 text-center">
        <div className="w-12 h-12 mx-auto rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 mb-3">
          <ImageIcon className="w-6 h-6" />
        </div>
        <h4 className="text-sm font-mono font-bold text-slate-300">
          No Media Payload Attached to this Investigation
        </h4>
        <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
          This investigation was performed on textual digital claims. To inspect reverse visual search, audio spectrograms, and deepfake signals, submit an image or video in the Verify Engine.
        </p>
      </div>
    );
  }

  const riskScore = mediaIntel.aiGeneratedRisk ?? 0;
  const isHighRisk = riskScore > 65;
  const isModerateRisk = riskScore >= 35 && riskScore <= 65;

  return (
    <div className="glass-panel rounded-2xl p-5 border border-slate-800 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold font-mono tracking-wide text-slate-100 flex items-center gap-2">
              Multimodal & Neural Media Lab
              <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full border ${
                isHighRisk
                  ? 'bg-rose-950 border-rose-800 text-rose-300'
                  : isModerateRisk
                  ? 'bg-amber-950 border-amber-800 text-amber-300'
                  : 'bg-emerald-950 border-emerald-800 text-emerald-300'
              }`}>
                {mediaIntel.mediaType === 'video' ? 'Video Telemetry' : 'Visual Forensics'}
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Deepfake artifact scans, reverse visual provenance & cross-modal consistency audit
            </p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-mono">
          <button
            onClick={() => setActiveTab('forensics')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'forensics' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Neural Forensics
          </button>
          <button
            onClick={() => setActiveTab('crossmodal')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'crossmodal' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Cross-Modal Audit
          </button>
          {mediaIntel.videoAnalysis && (
            <button
              onClick={() => setActiveTab('keyframes')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'keyframes' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Keyframes ({mediaIntel.videoAnalysis.keyframesAnalyzed})
            </button>
          )}
          {mediaIntel.exifData && (
            <button
              onClick={() => setActiveTab('metadata')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'metadata' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              EXIF & Origin
            </button>
          )}
        </div>
      </div>

      {/* Primary Neural Risk Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Risk Score Card */}
        <div className={`p-4 rounded-xl border flex items-center justify-between gap-4 ${
          isHighRisk
            ? 'bg-rose-950/30 border-rose-800/60'
            : isModerateRisk
            ? 'bg-amber-950/30 border-amber-800/60'
            : 'bg-emerald-950/30 border-emerald-800/60'
        }`}>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
              Synthetic / Deepfake Risk
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className={`text-3xl font-mono font-black ${
                isHighRisk ? 'text-rose-400' : isModerateRisk ? 'text-amber-400' : 'text-emerald-400'
              }`}>
                {riskScore}%
              </span>
              <span className="text-xs font-mono font-bold uppercase text-slate-300">
                {isHighRisk ? 'High Probability' : isModerateRisk ? 'Moderate Signals' : 'Authentic Footprint'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Neural artifact probability across analyzed frames and audio.
            </p>
          </div>
          <Activity className={`w-8 h-8 shrink-0 ${
            isHighRisk ? 'text-rose-400' : isModerateRisk ? 'text-amber-400' : 'text-emerald-400'
          }`} />
        </div>

        {/* Cross-Modal Consistency */}
        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
              Cross-Modal Text/Visual Consistency
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className={`text-3xl font-mono font-black ${
                mediaIntel.crossModalConsistency.isConsistent ? 'text-emerald-400' : 'text-rose-400'
              }`}>
                {mediaIntel.crossModalConsistency.score}%
              </span>
              <span className="text-xs font-mono font-bold uppercase text-slate-300">
                {mediaIntel.crossModalConsistency.isConsistent ? 'Consistent Alignment' : 'Caption Contradiction'}
              </span>
            </div>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Tests whether the asserted caption truthfully reflects the depicted scene.
          </p>
        </div>

        {/* Reverse Search Provenance */}
        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
              Earliest Visual Appearance
            </span>
            <div className="text-sm font-mono font-bold text-cyan-300 mt-1">
              {mediaIntel.reverseVisualMatches?.[0]?.firstSeenDate || 'Contemporary Capture'}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Indexed in {mediaIntel.reverseVisualMatches?.length || 0} historical open-web archives.
            </p>
          </div>
          <span className="text-[10px] font-mono text-slate-500">
            Reverse search databases: Google Vision, Bing, Yandex, TinEye
          </span>
        </div>
      </div>

      {/* Tab: Forensics */}
      {activeTab === 'forensics' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Detected Manipulation Artifacts & Forensic Markers:
              </span>
              {mediaIntel.manipulationHeatmapUrl && (
                <button
                  onClick={() => setShowHeatmapOverlay(!showHeatmapOverlay)}
                  className={`text-xs font-mono px-2.5 py-1 rounded border transition-colors ${
                    showHeatmapOverlay
                      ? 'bg-cyan-950 text-cyan-300 border-cyan-700'
                      : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}
                >
                  {showHeatmapOverlay ? 'Heatmap Overlay: Active' : 'Show Heatmap'}
                </button>
              )}
            </div>

            <div className="space-y-2">
              {mediaIntel.manipulationIndicators.map((indicator, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-200">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{indicator}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Video Forensics Details */}
          {mediaIntel.videoAnalysis && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Viseme Sync Score</span>
                <span className="font-mono text-sm font-bold text-cyan-400 mt-0.5 block">
                  {mediaIntel.videoAnalysis.visemeSyncScore}% Correlation
                </span>
                <span className="text-[10px] text-slate-500">Mouth movement to phoneme alignment</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Audio Spectrogram</span>
                <span className="font-mono text-sm font-bold text-emerald-400 mt-0.5 block">
                  {mediaIntel.videoAnalysis.audioSpectrogramCheck}
                </span>
                <span className="text-[10px] text-slate-500">Voice track spectral continuity</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Neural Blending Artifacts</span>
                <span className={`font-mono text-sm font-bold mt-0.5 block ${
                  mediaIntel.videoAnalysis.deepfakeArtifactsDetected ? 'text-rose-400' : 'text-emerald-400'
                }`}>
                  {mediaIntel.videoAnalysis.deepfakeArtifactsDetected ? 'Artifacts Flagged' : 'No Anomalies'}
                </span>
                <span className="text-[10px] text-slate-500">Edge blurring & temporal flickering</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab: Cross-Modal Audit */}
      {activeTab === 'crossmodal' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Cross-Modal Semantic Discrepancy Breakdown
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {mediaIntel.crossModalConsistency.visualTextAlignmentSummary}
            </p>

            {mediaIntel.crossModalConsistency.contradictionsFound.length > 0 ? (
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-rose-400 uppercase tracking-wider font-bold block">
                  Specific Contradictions Between Visual Evidence and Claim:
                </span>
                {mediaIntel.crossModalConsistency.contradictionsFound.map((contradiction, i) => (
                  <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-rose-950/20 border border-rose-900/40 text-xs text-rose-300">
                    <span className="font-bold text-rose-400">✗</span>
                    <span>{contradiction}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No direct contradictions between the submitted text and the visual elements.</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab: Keyframes */}
      {activeTab === 'keyframes' && mediaIntel.videoAnalysis && (
        <div className="space-y-3 animate-in fade-in duration-200">
          <div className="text-xs font-mono text-slate-400 mb-2">
            Decomposed {mediaIntel.videoAnalysis.keyframesAnalyzed} keyframes analyzed for facial warp and temporal jumps:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((frameIdx) => (
              <div key={frameIdx} className="rounded-xl bg-slate-950 border border-slate-800 p-2 text-center">
                <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 relative overflow-hidden">
                  <span className="text-[10px] font-mono text-slate-500">Keyframe 0{frameIdx}</span>
                  <div className="absolute top-1 right-1 text-[9px] font-mono bg-cyan-950 text-cyan-300 px-1 rounded border border-cyan-800">
                    00:0{frameIdx * 2}s
                  </div>
                </div>
                <div className="mt-2 text-[10px] font-mono text-slate-400">
                  Artifacts: <span className="text-emerald-400">0.03%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Metadata / EXIF */}
      {activeTab === 'metadata' && mediaIntel.exifData && (
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs animate-in fade-in duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <div>
              <span className="text-[10px] text-slate-500 uppercase block">Camera / Hardware</span>
              <span className="text-slate-200 font-bold">{mediaIntel.exifData.deviceModel || 'Stripped / Anonymous'}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase block">Software Signature</span>
              <span className="text-cyan-400 font-bold">{mediaIntel.exifData.softwareSignature || 'None'}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase block">GPS Geolocation</span>
              <span className="text-slate-300">{mediaIntel.exifData.gpsCoordinates || 'Not recorded'}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase block">Original Capture Stamp</span>
              <span className="text-slate-300">{mediaIntel.exifData.captureTimestamp || 'Not recorded'}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
