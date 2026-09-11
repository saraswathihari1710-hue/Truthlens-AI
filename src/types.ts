export type VerdictType =
  | 'VERIFIED'
  | 'MOSTLY_SUPPORTED'
  | 'MISLEADING'
  | 'UNVERIFIED'
  | 'FALSE'
  | 'MANIPULATED_MEDIA'
  | 'INSUFFICIENT_EVIDENCE';

export interface VerdictConfig {
  label: string;
  nativeLabels?: Record<string, string>;
  description: string;
  color: string;
  badgeBg: string;
  badgeBorder: string;
  textColor: string;
  dotColor: string;
  iconName: string;
}

export interface SubClaim {
  id: string;
  text: string;
  verdict: VerdictType;
  confidence: number;
  domain: string;
  verificationNote: string;
}

export interface SourceItem {
  id: string;
  name: string;
  domain: string;
  url?: string;
  credibilityScore: number; // 0-100
  reputationTier: 'Primary Authority' | 'High Authority' | 'Moderate' | 'Low / Unverified' | 'State / Partisan' | 'Fact-Check Bureau' | 'Secondary News';
  type: 'Primary Authority' | 'Secondary News' | 'Fact-Check Bureau' | 'Academic / Scientific' | 'Social Platform' | 'Archival Record';
  publicationDate: string;
  author?: string;
  citationQuality: 'Rigorous / Direct' | 'Moderate / Secondary' | 'Weak / Anonymous';
  transparencyScore: number; // 0-100
  stance: 'Supports' | 'Contradicts' | 'Contextualizes' | 'Neutral';
  quoteOrSummary: string;
  potentialBiasIndicator: string;
  reliabilitySignals: string[];
}

export interface TimelineEvent {
  id: string;
  date: string;
  stage: 'First Detected' | 'Major Publications' | 'Social Amplification' | 'Fact-Check & Corrections' | 'Current Evidence Status';
  title: string;
  description: string;
  sourceName?: string;
  impactLevel: 'low' | 'medium' | 'high' | 'viral';
}

export interface EvidenceGraphNode {
  id: string;
  type: 'claim' | 'subclaim' | 'source' | 'evidence_pro' | 'evidence_con' | 'verdict';
  label: string;
  details: string;
  confidence?: number;
  weight?: number;
  stance?: 'Supports' | 'Contradicts' | 'Neutral' | 'Contextualizes';
  x?: number;
  y?: number;
}

export interface EvidenceGraphEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
  relationship: 'supports' | 'contradicts' | 'analyzes' | 'concludes';
  strength: number; // 0.1 - 1.0
}

export interface EvidenceGraphData {
  nodes: EvidenceGraphNode[];
  edges: EvidenceGraphEdge[];
}

export interface TemporalAnalysis {
  isOutdated: boolean;
  originalEventDate?: string;
  recirculatedDate?: string;
  temporalMismatchScore: number; // 0-100
  recycledContextSummary: string;
}

export interface MediaIntelligence {
  mediaType: 'image' | 'video' | 'audio' | 'none';
  mediaUrl?: string;
  aiGeneratedRisk: number; // 0-100 (Deepfake/GenAI probability)
  manipulationIndicators: string[];
  manipulationHeatmapUrl?: string;
  metadataSummary?: {
    cameraModel?: string;
    softwareUsed?: string;
    creationDate?: string;
    gpsCoordinates?: string;
    compressionAnomalies?: string;
  };
  exifData?: {
    deviceModel?: string;
    softwareSignature?: string;
    gpsCoordinates?: string;
    captureTimestamp?: string;
  };
  reverseMatches?: {
    source: string;
    date: string;
    originalContext: string;
    url?: string;
  }[];
  reverseVisualMatches?: {
    source: string;
    firstSeenDate: string;
    originalContext: string;
    url?: string;
  }[];
  keyframes?: {
    id: string;
    time: string;
    description: string;
    flag: 'clean' | 'suspicious' | 'altered';
    aiRisk: number;
  }[];
  videoAnalysis?: {
    keyframesAnalyzed: number;
    deepfakeArtifactsDetected: boolean;
    audioSpectrogramCheck: string;
    visemeSyncScore: number;
  };
  crossModalConsistency: {
    score: number; // 0-100
    isConsistent: boolean;
    contradictionsFound: string[];
    visualTextAlignmentSummary: string;
  };
}

export interface SemanticAnalysis {
  sensationalLanguageScore: number; // 0-100
  emotionalManipulationScore: number; // 0-100
  loadedPhrases: string[];
  clickbaitIndicators: string[];
  framingType: 'Objective Report' | 'Partisan Spin' | 'Urgent Rage-Bait' | 'Alarmist Misdirection';
}

export interface ReasoningFactors {
  strongestEvidence: string[];
  contradictoryEvidence: string[];
  missingEvidence: string[];
  reasoningChain: string[];
}

export interface InvestigationReport {
  id: string;
  verificationId: string;
  timestamp: string;
  claim: string;
  category: 'Elections & Politics' | 'Health & Medicine' | 'Geo-Defense & Borders' | 'Science & Tech' | 'Financial & Scams' | 'Social & Cultural' | 'Disaster & Weather';
  inputType: 'text' | 'url' | 'image' | 'video' | 'batch' | 'question';
  language: string;
  verdict: VerdictType;
  confidenceScore: number; // 0-100
  confidenceExplanation: string;
  summary30Sec: string;
  detailedInvestigation: string;
  expertEvidenceView: string;
  subClaims: SubClaim[];
  sources: SourceItem[];
  timeline: TimelineEvent[];
  graphData: EvidenceGraphData;
  temporalAnalysis: TemporalAnalysis;
  mediaIntelligence?: MediaIntelligence;
  semanticAnalysis: SemanticAnalysis;
  reasoningFactors: ReasoningFactors;
  limitations: string[];
  isDemo: boolean;
}

export interface CopilotMessage {
  id: string;
  sender?: 'user' | 'copilot' | 'system';
  role?: 'user' | 'assistant' | 'system';
  content?: string;
  text?: string;
  timestamp: string;
  suggestedQuestions?: string[];
  citations?: string[];
  evidenceCitations?: string[];
}

export interface RadarNarrative {
  id: string;
  title: string;
  category: string;
  region: string;
  language: string;
  velocity: 'Explosive' | 'Rapid' | 'Steady' | 'Declining';
  viralityIndex: number; // 0-100
  verdict: VerdictType;
  firstSeen: string;
  sharesEstimate: string;
  summary: string;
  manipulatedMedia: boolean;
  channels: string[];
}

export interface RegionHotspot {
  state: string;
  code: string;
  activeClaimsCount: number;
  primaryCategory: string;
  topLanguages: string[];
  riskLevel: 'critical' | 'elevated' | 'moderate' | 'low';
}
