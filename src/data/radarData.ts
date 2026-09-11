import { RadarNarrative, RegionHotspot } from '../types';

export const RADAR_NARRATIVES: RadarNarrative[] = [
  {
    id: 'rad-1',
    title: 'Synthetic Voice Cloning of Bank Customer Support for OTP Phishing',
    category: 'Financial & Scams',
    region: 'Maharashtra & Delhi NCR',
    language: 'Hindi & English',
    velocity: 'Explosive',
    viralityIndex: 94,
    verdict: 'MANIPULATED_MEDIA',
    firstSeen: '14 hours ago',
    sharesEstimate: '185,000+ interactions',
    summary: 'Automated AI voice agents mimicking regional bank managers calling elderly citizens claiming debit cards are locked unless security codes are read aloud.',
    manipulatedMedia: true,
    channels: ['Voice Calls', 'WhatsApp Audio Notes', 'Telegram Scams']
  },
  {
    id: 'rad-2',
    title: 'Recycled 2018 Flood Visuals Attributed to Current Monsoon in Assam',
    category: 'Disaster & Weather',
    region: 'North-East India & West Bengal',
    language: 'Assamese, Bengali, English',
    velocity: 'Rapid',
    viralityIndex: 82,
    verdict: 'MISLEADING',
    firstSeen: '2 days ago',
    sharesEstimate: '92,000+ shares',
    summary: 'Photographs of submerged bridges from Kerala 2018 floods repurposed with alarmist false captions asserting national highways are severed.',
    manipulatedMedia: false,
    channels: ['Facebook Reels', 'X (Twitter)', 'Local Community Groups']
  },
  {
    id: 'rad-3',
    title: 'Fabricated WHO Endorsement of Lemon-Bicarbonate Cancer Cure',
    category: 'Health & Medicine',
    region: 'Pan-India',
    language: 'Hindi, Tamil, Telugu, Marathi, Gujarati',
    velocity: 'Steady',
    viralityIndex: 76,
    verdict: 'FALSE',
    firstSeen: 'Cyclical (Spotted 2017, revived 2026)',
    sharesEstimate: '340,000+ forwards',
    summary: 'Persistent medical hoax claiming warm lemon water with baking soda destroys cancer cells 1,000 times more effectively than oncology drugs.',
    manipulatedMedia: false,
    channels: ['Family WhatsApp Groups', 'YouTube Health Shorts']
  },
  {
    id: 'rad-4',
    title: 'Deepfake Video of Chief Minister Canceling Agricultural Free Power',
    category: 'Elections & Politics',
    region: 'Telangana & Andhra Pradesh',
    language: 'Telugu',
    velocity: 'Explosive',
    viralityIndex: 91,
    verdict: 'MANIPULATED_MEDIA',
    firstSeen: '18 hours ago',
    sharesEstimate: '140,000+ shares',
    summary: 'AI lipsync overlay applied to 2024 canal irrigation press conference fabricating a policy reversal on farm power subsidies.',
    manipulatedMedia: true,
    channels: ['WhatsApp Status', 'Political Telegram Broadcasts', 'X']
  },
  {
    id: 'rad-5',
    title: 'Fake Government Recruitment Notification for 45,000 Postal Gramin Dak Sevaks',
    category: 'Financial & Scams',
    region: 'Uttar Pradesh, Bihar, Rajasthan',
    language: 'Hindi',
    velocity: 'Rapid',
    viralityIndex: 88,
    verdict: 'FALSE',
    firstSeen: '3 days ago',
    sharesEstimate: '260,000+ visits to phishing clone',
    summary: 'Deceptive clone website mimicking India Post portal soliciting ₹450 registration fees for non-existent clerical positions.',
    manipulatedMedia: false,
    channels: ['Job Alerts Telegram Channels', 'WhatsApp Forward Chains']
  },
  {
    id: 'rad-6',
    title: 'Rare NASA "Golden Crescent" Planetary Alignment Photo',
    category: 'Science & Tech',
    region: 'Global & India',
    language: 'English, Punjabi, Tamil',
    velocity: 'Declining',
    viralityIndex: 58,
    verdict: 'MANIPULATED_MEDIA',
    firstSeen: '1 week ago',
    sharesEstimate: '85,000+ shares',
    summary: 'CGI digital artwork created in Blender circulated as an authentic astronomical optical capture by the James Webb Space Telescope.',
    manipulatedMedia: true,
    channels: ['Instagram', 'Pinterest', 'Reddit']
  }
];

export const REGION_HOTSPOTS: RegionHotspot[] = [
  { state: 'Maharashtra', code: 'MH', activeClaimsCount: 142, primaryCategory: 'Financial & Scams', topLanguages: ['Marathi', 'Hindi', 'English'], riskLevel: 'critical' },
  { state: 'Uttar Pradesh', code: 'UP', activeClaimsCount: 189, primaryCategory: 'Job Recruitment / Social', topLanguages: ['Hindi', 'Urdu'], riskLevel: 'critical' },
  { state: 'Delhi NCR', code: 'DL', activeClaimsCount: 118, primaryCategory: 'Political & Deepfakes', topLanguages: ['Hindi', 'English', 'Punjabi'], riskLevel: 'elevated' },
  { state: 'Tamil Nadu', code: 'TN', activeClaimsCount: 96, primaryCategory: 'Health Hoaxes & Elections', topLanguages: ['Tamil', 'English'], riskLevel: 'elevated' },
  { state: 'West Bengal', code: 'WB', activeClaimsCount: 104, primaryCategory: 'Communal / Disaster Media', topLanguages: ['Bengali', 'Hindi'], riskLevel: 'elevated' },
  { state: 'Telangana', code: 'TG', activeClaimsCount: 88, primaryCategory: 'Deepfakes & Policy Claims', topLanguages: ['Telugu', 'Urdu', 'English'], riskLevel: 'elevated' },
  { state: 'Karnataka', code: 'KA', activeClaimsCount: 82, primaryCategory: 'Tech Scam / Investment', topLanguages: ['Kannada', 'English'], riskLevel: 'moderate' },
  { state: 'Gujarat', code: 'GJ', activeClaimsCount: 79, primaryCategory: 'Financial & Stock Tips', topLanguages: ['Gujarati', 'Hindi'], riskLevel: 'moderate' },
  { state: 'Kerala', code: 'KL', activeClaimsCount: 65, primaryCategory: 'Health / Ayurvedic Hoaxes', topLanguages: ['Malayalam', 'English'], riskLevel: 'moderate' },
  { state: 'Punjab', code: 'PB', activeClaimsCount: 71, primaryCategory: 'Agrarian Policies & Immigration', topLanguages: ['Punjabi', 'Hindi'], riskLevel: 'moderate' },
  { state: 'Assam', code: 'AS', activeClaimsCount: 58, primaryCategory: 'Weather & Border Rumors', topLanguages: ['Assamese', 'Bengali', 'Bodo'], riskLevel: 'moderate' },
  { state: 'Odisha', code: 'OD', activeClaimsCount: 46, primaryCategory: 'Disaster / Cyclone Hoaxes', topLanguages: ['Odia', 'Hindi'], riskLevel: 'low' },
  { state: 'Jammu & Kashmir', code: 'JK', activeClaimsCount: 52, primaryCategory: 'Security & Telecommunications', topLanguages: ['Kashmiri', 'Dogri', 'Urdu'], riskLevel: 'moderate' }
];

export const RADAR_TIMELINE_TRENDS = [
  { day: 'Mon', claimsDebunked: 240, deepfakesDetected: 42, viralSurgeIndex: 68 },
  { day: 'Tue', claimsDebunked: 310, deepfakesDetected: 61, viralSurgeIndex: 78 },
  { day: 'Wed', claimsDebunked: 285, deepfakesDetected: 54, viralSurgeIndex: 74 },
  { day: 'Thu', claimsDebunked: 420, deepfakesDetected: 89, viralSurgeIndex: 92 },
  { day: 'Fri', claimsDebunked: 390, deepfakesDetected: 78, viralSurgeIndex: 86 },
  { day: 'Sat', claimsDebunked: 460, deepfakesDetected: 98, viralSurgeIndex: 96 },
  { day: 'Sun (Today)', claimsDebunked: 512, deepfakesDetected: 114, viralSurgeIndex: 98 },
];
