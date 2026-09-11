import { InvestigationReport, VerdictConfig, VerdictType } from '../types';

export const VERDICT_CONFIGS: Record<VerdictType, VerdictConfig> = {
  VERIFIED: {
    label: 'VERIFIED',
    description: 'Directly supported by corroborating authoritative primary evidence and cross-validated sources.',
    color: 'emerald',
    badgeBg: 'bg-emerald-500/15',
    badgeBorder: 'border-emerald-500/30',
    textColor: 'text-emerald-400',
    dotColor: 'bg-emerald-400',
    iconName: 'CheckCircle2',
  },
  MOSTLY_SUPPORTED: {
    label: 'MOSTLY SUPPORTED',
    description: 'Substantively accurate with minor missing context or non-critical numerical discrepancies.',
    color: 'sky',
    badgeBg: 'bg-sky-500/15',
    badgeBorder: 'border-sky-500/30',
    textColor: 'text-sky-400',
    dotColor: 'bg-sky-400',
    iconName: 'Info',
  },
  MISLEADING: {
    label: 'MISLEADING / OUT OF CONTEXT',
    description: 'Contains factual elements but frames them with selective omission, deceptive juxtaposition, or wrong dates.',
    color: 'amber',
    badgeBg: 'bg-amber-500/15',
    badgeBorder: 'border-amber-500/30',
    textColor: 'text-amber-400',
    dotColor: 'bg-amber-400',
    iconName: 'AlertTriangle',
  },
  UNVERIFIED: {
    label: 'UNVERIFIED',
    description: 'Plausible assertions currently lacking primary corroboration or verifiable independent audit trails.',
    color: 'orange',
    badgeBg: 'bg-orange-500/15',
    badgeBorder: 'border-orange-500/30',
    textColor: 'text-orange-400',
    dotColor: 'bg-orange-400',
    iconName: 'HelpCircle',
  },
  FALSE: {
    label: 'FALSE / CONTRADICTED',
    description: 'Contradicted by verifiable facts, primary records, or forensic proof.',
    color: 'rose',
    badgeBg: 'bg-rose-500/15',
    badgeBorder: 'border-rose-500/30',
    textColor: 'text-rose-400',
    dotColor: 'bg-rose-400',
    iconName: 'XCircle',
  },
  MANIPULATED_MEDIA: {
    label: 'MANIPULATED MEDIA',
    description: 'Digital audio, video, or image has been altered, spliced, synthesized (AI deepfake), or cloned.',
    color: 'purple',
    badgeBg: 'bg-purple-500/15',
    badgeBorder: 'border-purple-500/30',
    textColor: 'text-purple-400',
    dotColor: 'bg-purple-400',
    iconName: 'Wand2',
  },
  INSUFFICIENT_EVIDENCE: {
    label: 'INSUFFICIENT EVIDENCE',
    description: 'Neither verified nor debunkable at present due to absence of verifiable records or classified provenance.',
    color: 'slate',
    badgeBg: 'bg-slate-500/15',
    badgeBorder: 'border-slate-500/30',
    textColor: 'text-slate-400',
    dotColor: 'bg-slate-400',
    iconName: 'MinusCircle',
  },
};

export const MOCK_INVESTIGATIONS: InvestigationReport[] = [
  {
    id: 'inv-gps-500',
    verificationId: 'TL-2026-90412',
    timestamp: '2026-09-10T14:32:00Z',
    claim: 'New RBI ₹500 currency notes contain embedded GPS satellite microchips capable of signal tracking even 120 meters underground.',
    category: 'Financial & Scams',
    inputType: 'text',
    language: 'English / Hindi',
    verdict: 'FALSE',
    confidenceScore: 98,
    confidenceExplanation: 'High statistical confidence based on direct statements from the Reserve Bank of India, physical currency forensics by semiconductor researchers, and lack of RF transmitter feasibility.',
    summary30Sec: 'The claim that ₹500 notes contain embedded GPS tracking chips is demonstrably false. The Reserve Bank of India has explicitly refuted this myth multiple times. No passive radio frequency or satellite chip exists that can broadcast location 120 meters through solid earth without an active power source.',
    detailedInvestigation: 'This viral narrative is a recycled permutation of an urban legend first introduced during the 2016 demonetization. The claim asserts that newly minted banknotes incorporate an "NGC" (Nano GPS Chip) capable of transmitting coordinates to reconnaissance satellites. In reality, passive RFID/NFC requires an external reader within millimeters to centimeters, while active satellite uplinks demand lithium or solar power supplies, neither of which can be physically integrated into 100-micron security paper without detection and degradation. Furthermore, physical tear-downs and spectroscopic audits conducted by metallurgical and electronics laboratories confirm the presence of only standard security threads, optically variable inks, and fluorescent fibers.',
    expertEvidenceView: 'RF propagation through soil (attenuation ~10-40 dB/meter at UHF frequencies) renders 120m underground communication physically impossible without high-wattage subterranean low-frequency transceivers. The claim violates fundamental electromagnetic wave equations and currency manufacturing standards ISO 14443 / ISO 7816.',
    subClaims: [
      {
        id: 'sc-1',
        text: '₹500 banknotes contain an embedded semiconductor microchip',
        verdict: 'FALSE',
        confidence: 99,
        domain: 'Material Forensics',
        verificationNote: 'Physical teardowns and X-ray analysis reveal solely traditional security threads and watermark fibers.'
      },
      {
        id: 'sc-2',
        text: 'The chip transmits location coordinates to GPS satellites',
        verdict: 'FALSE',
        confidence: 99,
        domain: 'Physics / Telecommunications',
        verificationNote: 'GPS satellites only broadcast time-coded signals; they do not receive tracking signals from terrestrial passive chips.'
      },
      {
        id: 'sc-3',
        text: 'Signals penetrate 120 meters underground',
        verdict: 'FALSE',
        confidence: 100,
        domain: 'Electromagnetic Propagation',
        verificationNote: 'Radio attenuation in moist earth prevents gigahertz-band signal traversal past a few decimeters without external amplification.'
      }
    ],
    sources: [
      {
        id: 'src-rbi',
        name: 'Reserve Bank of India (RBI)',
        domain: 'rbi.org.in',
        url: 'https://rbi.org.in/Scripts/FAQView.aspx',
        credibilityScore: 99,
        reputationTier: 'Primary Authority',
        type: 'Primary Authority',
        publicationDate: 'Official Gazette Clarification',
        author: 'Department of Currency Management, RBI',
        citationQuality: 'Rigorous / Direct',
        transparencyScore: 98,
        stance: 'Contradicts',
        quoteOrSummary: 'RBI officially reiterated that banknotes do not contain any microchip, GPS receiver, or electronic tracking mechanism.',
        potentialBiasIndicator: 'None detected. Regulatory central banking entity.',
        reliabilitySignals: ['Official Government Regulator', 'Direct Primary Statement', 'Signed Press Release']
      },
      {
        id: 'src-pib',
        name: 'PIB Fact Check Bureau',
        domain: 'factcheck.pib.gov.in',
        url: 'https://factcheck.pib.gov.in',
        credibilityScore: 95,
        reputationTier: 'Fact-Check Bureau',
        type: 'Fact-Check Bureau',
        publicationDate: 'Regular Bulletin',
        author: 'Press Information Bureau, Govt of India',
        citationQuality: 'Rigorous / Direct',
        transparencyScore: 94,
        stance: 'Contradicts',
        quoteOrSummary: 'PIB Fact Check verified the viral WhatsApp message as fake news and confirmed no currency note in India has tracking capabilities.',
        potentialBiasIndicator: 'Official counter-disinformation cell.',
        reliabilitySignals: ['Recognized National Fact-Checker', 'Archived Debunk Records']
      },
      {
        id: 'src-iit',
        name: 'Department of Electrical Engineering, IIT Bombay',
        domain: 'ee.iitb.ac.in',
        credibilityScore: 97,
        reputationTier: 'High Authority',
        type: 'Academic / Scientific',
        publicationDate: 'Technical Memo',
        author: 'Prof. S. R. Varma, RF Systems Laboratory',
        citationQuality: 'Rigorous / Direct',
        transparencyScore: 96,
        stance: 'Contradicts',
        quoteOrSummary: 'Analysis of banknote paper confirms standard security ink and microprinting. Microchip embedding without visible wafer contour or battery source is technically unviable.',
        potentialBiasIndicator: 'None. Peer-reviewed academic laboratory.',
        reliabilitySignals: ['Independent Academic Laboratory', 'Physical Audit Evidence']
      },
      {
        id: 'src-viral-post',
        name: 'Viral WhatsApp Forward / Telegram Channel',
        domain: 't.me/anonymous_forward',
        credibilityScore: 8,
        reputationTier: 'Low / Unverified',
        type: 'Social Platform',
        publicationDate: 'Anonymous Circulation',
        author: 'Unattributed',
        citationQuality: 'Weak / Anonymous',
        transparencyScore: 5,
        stance: 'Supports',
        quoteOrSummary: 'Forward claims Modi government activated satellite tracing to catch hoarders with secret GPS chips.',
        potentialBiasIndicator: 'Sensational clickbait, unverified chain forwarding, zero cited sources.',
        reliabilitySignals: ['Anonymous Origin', 'Urgent Forwarding Appeal', 'No Verifiable Author']
      }
    ],
    timeline: [
      {
        id: 't-1',
        date: 'Nov 2016',
        stage: 'First Detected',
        title: 'Initial Emergence During Demonetization',
        description: 'First spotted on WhatsApp as a speculative rumor asserting the newly announced ₹2000 notes contained Nano GPS Chips (NGC).',
        sourceName: 'Social Messaging Networks',
        impactLevel: 'viral'
      },
      {
        id: 't-2',
        date: 'Nov 2016',
        stage: 'Fact-Check & Corrections',
        title: 'RBI Governor Official Refutation',
        description: 'Former RBI Governor and Chief General Managers categorically denied the presence of microchips in official press conferences.',
        sourceName: 'Reserve Bank of India Press Briefing',
        impactLevel: 'high'
      },
      {
        id: 't-3',
        date: 'May 2023',
        stage: 'Social Amplification',
        title: 'Recycled Resurgence for ₹500 Notes',
        description: 'Following the phased withdrawal of ₹2000 notes, bad actors repackaged the identical claim with the ₹500 denomination.',
        sourceName: 'Social Media Feeds & Video Clips',
        impactLevel: 'medium'
      },
      {
        id: 't-4',
        date: 'Aug 2026',
        stage: 'Social Amplification',
        title: 'Algorithm Amplification via Short-form Video',
        description: 'AI-narrated short videos on video platforms re-circulated the claim with sensationalist graphics.',
        sourceName: 'Shorts / Reels Content Farms',
        impactLevel: 'high'
      },
      {
        id: 't-5',
        date: 'Present Day',
        stage: 'Current Evidence Status',
        title: 'Definitively Discredited and Cataloged',
        description: 'Categorized under persistent cyclical financial disinformation by Indian and global fact-checking consortiums.',
        sourceName: 'TruthLens AI Intelligence Database',
        impactLevel: 'low'
      }
    ],
    graphData: {
      nodes: [
        { id: 'c0', type: 'claim', label: 'Claim: ₹500 GPS Chip Tracking', details: 'Embedded satellite chip tracks cash 120m underground', confidence: 10 },
        { id: 'sc1', type: 'subclaim', label: 'Sub-claim: Microchip Inside Note', details: 'Asserts physical presence of semiconductor in cotton-rag paper' },
        { id: 'sc2', type: 'subclaim', label: 'Sub-claim: Satellite Uplink', details: 'Asserts passive two-way satellite connectivity' },
        { id: 's1', type: 'source', label: 'Reserve Bank of India', details: 'Official Central Bank Regulatory Authority', stance: 'Contradicts' },
        { id: 's2', type: 'source', label: 'PIB Fact Check', details: 'Government Counter-Misinformation Desk', stance: 'Contradicts' },
        { id: 's3', type: 'source', label: 'IIT Bombay RF Dept', details: 'Academic Electromagnetic Forensics Lab', stance: 'Contradicts' },
        { id: 's4', type: 'source', label: 'Viral WhatsApp Forward', details: 'Unverified anonymous viral message', stance: 'Supports' },
        { id: 'ep1', type: 'evidence_con', label: 'Contradicting: Physical Teardown', details: 'Only cotton fibers, latent security thread, no silicon' },
        { id: 'ep2', type: 'evidence_con', label: 'Contradicting: RF Attenuation Law', details: 'Underground propagation impossible without active generator' },
        { id: 'v0', type: 'verdict', label: 'Verdict: FALSE / CONTRADICTED', details: '98% Confidence - Fabricated urban myth', confidence: 98 }
      ],
      edges: [
        { id: 'e1', source: 'c0', target: 'sc1', relationship: 'analyzes', strength: 0.9 },
        { id: 'e2', source: 'c0', target: 'sc2', relationship: 'analyzes', strength: 0.9 },
        { id: 'e3', source: 'sc1', target: 's1', relationship: 'analyzes', strength: 1.0 },
        { id: 'e4', source: 'sc1', target: 's3', relationship: 'analyzes', strength: 0.95 },
        { id: 'e5', source: 'sc2', target: 's3', relationship: 'analyzes', strength: 0.95 },
        { id: 'e6', source: 'c0', target: 's4', relationship: 'supports', strength: 0.2 },
        { id: 'e7', source: 's1', target: 'ep1', relationship: 'contradicts', strength: 1.0 },
        { id: 'e8', source: 's3', target: 'ep2', relationship: 'contradicts', strength: 0.95 },
        { id: 'e9', source: 's2', target: 'ep1', relationship: 'contradicts', strength: 0.9 },
        { id: 'e10', source: 'ep1', target: 'v0', relationship: 'concludes', strength: 1.0 },
        { id: 'e11', source: 'ep2', target: 'v0', relationship: 'concludes', strength: 0.98 }
      ]
    },
    temporalAnalysis: {
      isOutdated: true,
      originalEventDate: '2016-11-08',
      recirculatedDate: '2026-08-15',
      temporalMismatchScore: 92,
      recycledContextSummary: 'Original myth originated in November 2016 during ₹2000 introduction. Recycled 10 years later targeting ₹500 notes using identical phrasing.'
    },
    semanticAnalysis: {
      sensationalLanguageScore: 88,
      emotionalManipulationScore: 82,
      loadedPhrases: [
        'Secret satellite tracking',
        'Government secretly watching your cash',
        'Share immediately before they delete this'
      ],
      clickbaitIndicators: [
        'Urgent call to forward',
        'Conspiratorial insider narrative',
        'Exaggerated technical jargon (NGC nano-chip)'
      ],
      framingType: 'Alarmist Misdirection'
    },
    reasoningFactors: {
      strongestEvidence: [
        'Direct refutation on record from the Reserve Bank of India.',
        'Physical currency teardowns showing absence of semiconductor circuitry.',
        'Physical impossibility of passive GPS satellite reception through 120m soil.'
      ],
      contradictoryEvidence: [
        'Zero physical samples found with chips across billions of circulating banknotes.'
      ],
      missingEvidence: [
        'No technical whitepaper or patent exists for paper-thin passive GPS transceivers.',
        'No source has ever produced a working demonstration or schematic.'
      ],
      reasoningChain: [
        'Claim posits physical electronic microchips in standard banknotes.',
        'Official issuer (RBI) officially denies electronic components exist.',
        'Academic laboratory audits confirm absence of electronic substrates.',
        'Physics constraints refute satellite reception without high-gain active antennas.',
        'Verdict definitively reached as FALSE / CONTRADICTED.'
      ]
    },
    limitations: [
      'Analysis is strictly confined to circulating Indian legal tender; does not evaluate experimental RFID bank badges or bank vault security tags.',
      'Evaluation utilizes open-source institutional notices and established electromagnetic physical laws.'
    ],
    isDemo: true
  },
  {
    id: 'inv-deepfake-politician',
    verificationId: 'TL-2026-88190',
    timestamp: '2026-09-11T01:15:00Z',
    claim: 'Leaked viral video purportedly shows Chief Minister announcing the immediate termination of agricultural electricity subsidies.',
    category: 'Elections & Politics',
    inputType: 'video',
    language: 'Telugu / English',
    verdict: 'MANIPULATED_MEDIA',
    confidenceScore: 96,
    confidenceExplanation: 'Confirmed digital deepfake synthesis through facial landmark jitter analysis, lip-sync audio alignment variance, and neural voice-cloning spectrogram artifacts.',
    summary30Sec: 'The viral video is an AI-generated deepfake created by altering authentic footage from an April 2024 budget press conference. State power ministries and official gazettes confirm agricultural electricity subsidies remain fully operational and funded.',
    detailedInvestigation: 'A 42-second clip circulated across political WhatsApp groups and X (formerly Twitter) depicting the Chief Minister declaring an end to free agricultural electricity schemes. Our multimodal video intelligence pipeline identified 8 distinct manipulation signatures. The video exhibits temporal visual discontinuity around the mouth region (32-41 frames per second), warping artifacts along the jawline consistent with generative adversarial face reenactment, and unnatural audio spectral gaps indicating text-to-speech voice cloning. The original background audio was stripped and replaced with an AI-synthesized regional voice model.',
    expertEvidenceView: 'Wav2Lip / Diff-SVC synthesis markers detected: Phonation acoustic envelope lacks natural glottal pulses; spectral flux variance is 0.04 (normal speech ~0.18). Visual optical flow vectors show 14% anomalous pixel distortion around the perioral margin during bilabial plosives (/b/, /p/).',
    subClaims: [
      {
        id: 'sc-df-1',
        text: 'The Chief Minister delivered an announcement canceling agricultural subsidies',
        verdict: 'FALSE',
        confidence: 99,
        domain: 'Government Record',
        verificationNote: 'No such speech exists in legislative assembly archives, press information records, or broadcast feeds.'
      },
      {
        id: 'sc-df-2',
        text: 'The video footage represents an authentic recording',
        verdict: 'MANIPULATED_MEDIA',
        confidence: 97,
        domain: 'Forensic Video Analysis',
        verificationNote: 'Source video is from April 14, 2024 discussion on irrigation canal repairs, modified with AI lip reenactment.'
      }
    ],
    sources: [
      {
        id: 'src-energy-ministry',
        name: 'State Department of Energy & Power Utilities',
        domain: 'energy.state.gov.in',
        credibilityScore: 98,
        reputationTier: 'Primary Authority',
        type: 'Primary Authority',
        publicationDate: 'Official Press Statement',
        author: 'Principal Secretary, Energy',
        citationQuality: 'Rigorous / Direct',
        transparencyScore: 96,
        stance: 'Contradicts',
        quoteOrSummary: 'Clarified that free 9-hour agricultural power supply continues without interruption and labeled the circulated video malicious fabrication.',
        potentialBiasIndicator: 'Incumbent government department protecting policy record.',
        reliabilitySignals: ['Statutory Body', 'Budgetary Allocation Proof', 'Official Media Release']
      },
      {
        id: 'src-doordarshan-archive',
        name: 'National Public Broadcaster Archive (Doordarshan)',
        domain: 'prasarbharati.gov.in',
        credibilityScore: 96,
        reputationTier: 'Primary Authority',
        type: 'Archival Record',
        publicationDate: 'April 14, 2024 Archive',
        author: 'State Bureau Archival Team',
        citationQuality: 'Rigorous / Direct',
        transparencyScore: 95,
        stance: 'Contradicts',
        quoteOrSummary: 'Original broadcast shows the Chief Minister inaugurating minor irrigation repairs wearing identical attire, with completely different speech content.',
        potentialBiasIndicator: 'None. Public archive footage.',
        reliabilitySignals: ['Original High-Bitrate Broadcast Tape', 'Timestamped Media Repository']
      },
      {
        id: 'src-ai-forensics',
        name: 'TruthLens Media Intelligence Lab',
        domain: 'truthlens.ai/forensics',
        credibilityScore: 94,
        reputationTier: 'High Authority',
        type: 'Academic / Scientific',
        publicationDate: 'Automated Forensic Run',
        author: 'Multimodal Neural Forensics Engine',
        citationQuality: 'Rigorous / Direct',
        transparencyScore: 95,
        stance: 'Contradicts',
        quoteOrSummary: 'Facial landmarks demonstrate synthetic warping; audio tracks exhibit neural TTS spectrogram artifacts with zero natural room reverberation.',
        potentialBiasIndicator: 'Algorithmic heuristic analysis.',
        reliabilitySignals: ['Frame-by-frame Optical Flow Analysis', 'Audio Spectrum Consistency Check']
      }
    ],
    timeline: [
      {
        id: 'tdf-1',
        date: 'Apr 14, 2024',
        stage: 'First Detected',
        title: 'Original Source Footage Recorded',
        description: 'Chief Minister addresses regional media regarding canal repair funding; broadcasted live on public news stations.',
        sourceName: 'Public Television Broadcast',
        impactLevel: 'low'
      },
      {
        id: 'tdf-2',
        date: 'Yesterday, 21:00',
        stage: 'Social Amplification',
        title: 'Manipulated Audio/Video Uploaded to Telegram',
        description: 'A 42-second edited clip with synthetic audio is posted to several regional political discussion groups.',
        sourceName: 'Anonymous Telegram Channel',
        impactLevel: 'medium'
      },
      {
        id: 'tdf-3',
        date: 'Today, 06:30',
        stage: 'Social Amplification',
        title: 'Viral Cross-Platform Spread',
        description: 'Circulated with alarmed captions urging farmers to stage demonstrations outside substation offices.',
        sourceName: 'WhatsApp Groups & X',
        impactLevel: 'viral'
      },
      {
        id: 'tdf-4',
        date: 'Today, 09:15',
        stage: 'Fact-Check & Corrections',
        title: 'State Police Cyber Cell Notice & Debunk',
        description: 'Cyber Crime branch registers FIR and identifies the video as deepfake generated via commercial AI tools.',
        sourceName: 'State Cyber Cell Bulletin',
        impactLevel: 'high'
      }
    ],
    graphData: {
      nodes: [
        { id: 'c0', type: 'claim', label: 'Claim: Subsidy Cancellation Video', details: 'Viral clip claiming power subsidies terminated', confidence: 15 },
        { id: 'sc1', type: 'subclaim', label: 'Sub-claim: Video Authenticity', details: 'Authenticity of audio and facial lip motion' },
        { id: 'sc2', type: 'subclaim', label: 'Sub-claim: Policy Decision', details: 'Official order ending free agricultural power' },
        { id: 's1', type: 'source', label: 'Doordarshan Broadcast Archive', details: 'Matches exact identical clothing from 2024 canal briefing', stance: 'Contradicts' },
        { id: 's2', type: 'source', label: 'Department of Energy', details: 'Budget receipts confirming ongoing subsidy release', stance: 'Contradicts' },
        { id: 's3', type: 'source', label: 'Neural Audio Analysis', details: 'TTS spectrogram clone signature', stance: 'Contradicts' },
        { id: 'ep1', type: 'evidence_con', label: 'Contradicting: Lip-Sync Inconsistency', details: 'Pixel warping around mouth region (confidence 97%)' },
        { id: 'ep2', type: 'evidence_con', label: 'Contradicting: Acoustic Glottal Void', details: 'Synthesized voice lack natural room acoustics' },
        { id: 'v0', type: 'verdict', label: 'Verdict: MANIPULATED MEDIA', details: 'Synthetic video/audio reenactment', confidence: 96 }
      ],
      edges: [
        { id: 'e1', source: 'c0', target: 'sc1', relationship: 'analyzes', strength: 0.95 },
        { id: 'e2', source: 'c0', target: 'sc2', relationship: 'analyzes', strength: 0.95 },
        { id: 'e3', source: 'sc1', target: 's1', relationship: 'contradicts', strength: 1.0 },
        { id: 'e4', source: 'sc1', target: 's3', relationship: 'contradicts', strength: 0.95 },
        { id: 'e5', source: 'sc2', target: 's2', relationship: 'contradicts', strength: 0.98 },
        { id: 'e6', source: 's1', target: 'ep1', relationship: 'contradicts', strength: 0.96 },
        { id: 'e7', source: 's3', target: 'ep2', relationship: 'contradicts', strength: 0.94 },
        { id: 'e8', source: 'ep1', target: 'v0', relationship: 'concludes', strength: 1.0 },
        { id: 'e9', source: 'ep2', target: 'v0', relationship: 'concludes', strength: 0.98 }
      ]
    },
    temporalAnalysis: {
      isOutdated: true,
      originalEventDate: '2024-04-14',
      recirculatedDate: '2026-09-11',
      temporalMismatchScore: 88,
      recycledContextSummary: 'Video visually stems from April 2024 press event regarding canal maintenance, but re-voiced with fabricated 2026 policy claims.'
    },
    mediaIntelligence: {
      mediaType: 'video',
      aiGeneratedRisk: 95,
      manipulationIndicators: [
        'Facial boundary blending artifacts along the jawline',
        'Phoneme-viseme temporal lag (-120ms discrepancy)',
        'Monophonic voice track without ambient press-room reverberation',
        'Repetitive micro-blinking irregularity (0 blinks in 28 seconds)'
      ],
      metadataSummary: {
        cameraModel: 'Re-encoded via WebM/VP9 FFmpeg export',
        softwareUsed: 'Unknown Generative Deepfake Pipeline',
        creationDate: 'Recent batch render',
        compressionAnomalies: 'Dual compression matrix indicating re-rendered facial bounding box'
      },
      reverseMatches: [
        {
          source: 'Doordarshan Official YouTube Channel',
          date: '2024-04-14',
          originalContext: 'Chief Minister Press Meet on Srisailam Canal Desiltation Projects'
        }
      ],
      keyframes: [
        { id: 'kf-1', time: '00:04', description: 'Subject introduction, stationary framing', flag: 'clean', aiRisk: 12 },
        { id: 'kf-2', time: '00:14', description: 'Facial warp onset during phrase "subsidies canceled"', flag: 'altered', aiRisk: 96 },
        { id: 'kf-3', time: '00:26', description: 'Jawline boundary pixel blur anomaly', flag: 'altered', aiRisk: 98 },
        { id: 'kf-4', time: '00:39', description: 'Audio-lip desynchronization during concluding words', flag: 'suspicious', aiRisk: 89 }
      ],
      crossModalConsistency: {
        score: 18,
        isConsistent: false,
        contradictionsFound: [
          'Visual background banners mention irrigation works while audio discusses power tariff cancellations',
          'Acoustic reverberation does not match the large open auditorium shown visually'
        ],
        visualTextAlignmentSummary: 'Severe cross-modal mismatch: Visual setting is an April 2024 irrigation press conference; spoken claim asserts immediate power cut orders.'
      }
    },
    semanticAnalysis: {
      sensationalLanguageScore: 91,
      emotionalManipulationScore: 94,
      loadedPhrases: [
        'Immediate cancellation',
        'Shocking betrayal of farmers',
        'Protest before it is too late'
      ],
      clickbaitIndicators: [
        'High outrage incitement',
        'Call for immediate physical unrest'
      ],
      framingType: 'Urgent Rage-Bait'
    },
    reasoningFactors: {
      strongestEvidence: [
        'Archived 2024 broadcast showing identical visual footage with genuine irrigation dialogue.',
        'High-confidence neural detection of facial reenactment and voice cloning artifacts.',
        'Official verification from Energy Department affirming subsidies are intact.'
      ],
      contradictoryEvidence: [
        'The speaker in the clip visually resembles the authentic official, creating high initial deception.'
      ],
      missingEvidence: [
        'No official government gazette, legislative bulletin, or cabinet note matches the video claims.'
      ],
      reasoningChain: [
        'Multimodal input submitted as video claim.',
        'Computer vision forensics reveals generative mouth-mask artifacts and unnatural blinking.',
        'Speech synthesis audit finds synthetic glottal waveforms.',
        'Archival search retrieves original unmanipulated broadcast from April 2024.',
        'Verdict assigned: MANIPULATED MEDIA.'
      ]
    },
    limitations: [
      'Neural manipulation detection is based on contemporary deepfake architectures (Wav2Lip, LivePortrait, FastSVC); does not guarantee detection of proprietary non-public military-grade generative models.',
      'Audio-only forensic confidence relies on spectral analysis; low-bitrate compression can occasionally introduce acoustic noise.'
    ],
    isDemo: true
  },
  {
    id: 'inv-isro-cryo',
    verificationId: 'TL-2026-61402',
    timestamp: '2026-09-09T18:20:00Z',
    claim: 'ISRO successfully conducts qualification tests for semi-cryogenic engine at Mahendragiri propulsion complex.',
    category: 'Science & Tech',
    inputType: 'text',
    language: 'English',
    verdict: 'VERIFIED',
    confidenceScore: 99,
    confidenceExplanation: 'Fully corroborated by official ISRO press releases, high-resolution test footage from IPRC Mahendragiri, and national aerospace agency publications.',
    summary30Sec: 'The claim is authentic and verified. The Indian Space Research Organisation (ISRO) successfully conducted the hot test of the intermediate configuration of its semi-cryogenic engine at the ISRO Propulsion Complex (IPRC) in Mahendragiri.',
    detailedInvestigation: 'On testing records verified through the Department of Space, ISRO confirmed the successful ignition and duration test of the Semi-cryogenic Engine development program. The engine operates on liquid oxygen (LOX) and refined kerosene (isrosene) propellant combinations. The test validated the chill-down sequence, pre-burner ignition, and main combustion chamber stability.',
    expertEvidenceView: 'Official telemetry published in propulsion technical journals indicates chamber pressure was maintained within nominal thresholds. All high-pressure turbopump operating metrics satisfied pre-test mission simulation criteria.',
    subClaims: [
      {
        id: 'sc-isro-1',
        text: 'ISRO conducted semi-cryogenic engine test at Mahendragiri',
        verdict: 'VERIFIED',
        confidence: 99,
        domain: 'Aerospace Engineering',
        verificationNote: 'Confirmed via official ISRO portal, press releases, and on-site instrumentation logs.'
      },
      {
        id: 'sc-isro-2',
        text: 'The test achieved intended duration and parameters',
        verdict: 'VERIFIED',
        confidence: 97,
        domain: 'Mission Telemetry',
        verificationNote: 'Telemetry curves confirmed by propulsion division engineers.'
      }
    ],
    sources: [
      {
        id: 'src-isro-hq',
        name: 'Indian Space Research Organisation (ISRO)',
        domain: 'isro.gov.in',
        url: 'https://isro.gov.in',
        credibilityScore: 99,
        reputationTier: 'Primary Authority',
        type: 'Primary Authority',
        publicationDate: 'Official Release',
        author: 'ISRO Media & PR Division',
        citationQuality: 'Rigorous / Direct',
        transparencyScore: 99,
        stance: 'Supports',
        quoteOrSummary: 'ISRO announced the successful completion of hot test milestone for the semi-cryogenic engine at IPRC Mahendragiri facility.',
        potentialBiasIndicator: 'Primary executing agency.',
        reliabilitySignals: ['National Space Agency', 'Official Technical Bulletin', 'Primary Telemetry Provider']
      },
      {
        id: 'src-the-hindu',
        name: 'The Hindu Science Bureau',
        domain: 'thehindu.com',
        credibilityScore: 93,
        reputationTier: 'Secondary News',
        type: 'Secondary News',
        publicationDate: 'Press Coverage',
        author: 'Senior Aerospace Correspondent',
        citationQuality: 'Rigorous / Direct',
        transparencyScore: 92,
        stance: 'Supports',
        quoteOrSummary: 'Reported on the technical specifications of the 2,000 kN thrust semi-cryogenic engine development milestone.',
        potentialBiasIndicator: 'Mainstream legacy journalism.',
        reliabilitySignals: ['Independent Press Corroboration', 'Named Byline']
      }
    ],
    timeline: [
      {
        id: 't-isro-1',
        date: 'Test Day, 14:00',
        stage: 'First Detected',
        title: 'Hot Test Firing Conducted',
        description: 'Engine ignites at Mahendragiri stand for scheduled qualification duration.',
        sourceName: 'IPRC Mahendragiri Test Stand',
        impactLevel: 'medium'
      },
      {
        id: 't-isro-2',
        date: 'Test Day, 17:30',
        stage: 'Major Publications',
        title: 'Official Press Statement & Video Released',
        description: 'ISRO releases official multi-angle 4K video showing engine exhaust plume and startup sequence.',
        sourceName: 'ISRO Communications',
        impactLevel: 'high'
      },
      {
        id: 't-isro-3',
        date: 'Present Day',
        stage: 'Current Evidence Status',
        title: 'Documented in Aerospace Archives',
        description: 'Milestone verified across international aerospace tracking platforms.',
        sourceName: 'TruthLens AI Intelligence Database',
        impactLevel: 'low'
      }
    ],
    graphData: {
      nodes: [
        { id: 'c0', type: 'claim', label: 'Claim: ISRO Semi-Cryo Engine Test', details: 'Successful hot test at Mahendragiri', confidence: 99 },
        { id: 'sc1', type: 'subclaim', label: 'Sub-claim: Engine Firing Conducted', details: 'Hot-fire ignition completed' },
        { id: 's1', type: 'source', label: 'ISRO Official Press Bureau', details: 'Primary space agency release and footage', stance: 'Supports' },
        { id: 's2', type: 'source', label: 'The Hindu Science Desk', details: 'Independent journalistic verification', stance: 'Supports' },
        { id: 'ep1', type: 'evidence_pro', label: 'Supporting: Telemetry & Firing Video', details: 'Continuous multi-camera high-frame-rate recording' },
        { id: 'v0', type: 'verdict', label: 'Verdict: VERIFIED', details: '99% Confidence - Authenticated milestone', confidence: 99 }
      ],
      edges: [
        { id: 'e1', source: 'c0', target: 'sc1', relationship: 'analyzes', strength: 1.0 },
        { id: 'e2', source: 'sc1', target: 's1', relationship: 'supports', strength: 1.0 },
        { id: 'e3', source: 'sc1', target: 's2', relationship: 'supports', strength: 0.95 },
        { id: 'e4', source: 's1', target: 'ep1', relationship: 'supports', strength: 1.0 },
        { id: 'e5', source: 'ep1', target: 'v0', relationship: 'concludes', strength: 0.99 }
      ]
    },
    temporalAnalysis: {
      isOutdated: false,
      temporalMismatchScore: 5,
      recycledContextSummary: 'Fresh announcement; reporting aligns accurately with chronological test schedule.'
    },
    semanticAnalysis: {
      sensationalLanguageScore: 12,
      emotionalManipulationScore: 8,
      loadedPhrases: [],
      clickbaitIndicators: [],
      framingType: 'Objective Report'
    },
    reasoningFactors: {
      strongestEvidence: [
        'Primary release and high-resolution video provided directly by ISRO headquarters.',
        'Statements by project directors and Ministry of Science & Technology.'
      ],
      contradictoryEvidence: [],
      missingEvidence: [],
      reasoningChain: [
        'Claim states specific technical milestone at designated facility.',
        'Primary institution published comprehensive telemetry and video evidence.',
        'Independent media corroborated on-site reporting.',
        'Verdict definitively determined as VERIFIED.'
      ]
    },
    limitations: [
      'Specific proprietary internal valve chamber pressure figures remain restricted under state aerospace security guidelines.'
    ],
    isDemo: true
  },
  {
    id: 'inv-cyclone-bridge-2018',
    verificationId: 'TL-2026-44021',
    timestamp: '2026-09-08T10:11:00Z',
    claim: 'Dramatic photo of collapsed river bridge claimed to show aftermath of current August 2026 monsoon flooding in Assam.',
    category: 'Disaster & Weather',
    inputType: 'image',
    language: 'Assamese / English',
    verdict: 'MISLEADING',
    confidenceScore: 94,
    confidenceExplanation: 'Reverse-image forensics and weather agency archives show the photograph is genuine but depicts an August 2018 flood incident in Kerala, not Assam 2026.',
    summary30Sec: 'This claim is misleading due to severe temporal and contextual misattribution. While the photo depicts a genuine bridge collapse, the incident occurred in August 2018 in Aluva, Kerala, during Cyclone Ockhi aftermath. It has no connection to ongoing Assam rains.',
    detailedInvestigation: 'Reverse visual search cross-referenced with newspaper archives identifies the original photographer from the Malayala Manorama archive dated August 16, 2018. The bridge shown crossed the Periyar river. Social media accounts in August 2026 reposted the image with false geotags asserting it was a vital lifeline severed in Kaziranga/Assam, inciting unnecessary panic among travelers and emergency services.',
    expertEvidenceView: 'Metadata extraction shows original JPEG quantization tables consistent with Canon EOS 5D Mark IV used by Kerala photojournalists in 2018. EXIF geocoding was stripped during social reposting, but architectural features (cylindrical concrete piers with specific flood marks) match Kerala PWD blueprints, not Assam bridge designs.',
    subClaims: [
      {
        id: 'sc-bridge-1',
        text: 'The photographed bridge collapsed during August 2026 floods',
        verdict: 'FALSE',
        confidence: 98,
        domain: 'Temporal Verification',
        verificationNote: 'Incident occurred precisely on August 16, 2018.'
      },
      {
        id: 'sc-bridge-2',
        text: 'The collapsed bridge is located in Assam',
        verdict: 'FALSE',
        confidence: 99,
        domain: 'Geographic Context',
        verificationNote: 'Structure located over Periyar River in Kerala, over 2,500 km away from Assam.'
      }
    ],
    sources: [
      {
        id: 'src-assam-sdda',
        name: 'Assam State Disaster Management Authority (ASDMA)',
        domain: 'asdma.assam.gov.in',
        credibilityScore: 98,
        reputationTier: 'Primary Authority',
        type: 'Primary Authority',
        publicationDate: 'Official Alert Clarification',
        author: 'Emergency Operations Center, Dispur',
        citationQuality: 'Rigorous / Direct',
        transparencyScore: 97,
        stance: 'Contradicts',
        quoteOrSummary: 'Clarified that no major bridge collapse occurred on the national highway and cautioned against recirculating archived Kerala flood images.',
        potentialBiasIndicator: 'None.',
        reliabilitySignals: ['Statutory Disaster Authority', 'Real-time Ground Assessment']
      },
      {
        id: 'src-manorama-archive',
        name: 'Malayala Manorama Photo Archive',
        domain: 'manoramaonline.com',
        credibilityScore: 94,
        reputationTier: 'Secondary News',
        type: 'Archival Record',
        publicationDate: '2018-08-16',
        author: 'Photojournalist B. Nambiar',
        citationQuality: 'Rigorous / Direct',
        transparencyScore: 93,
        stance: 'Contradicts',
        quoteOrSummary: 'Original publication of Periyar river surge submerging local connecting bridge during the historic 2018 Kerala floods.',
        potentialBiasIndicator: 'None.',
        reliabilitySignals: ['Original Copyrighted Photo Record', 'Indexed Time-stamp']
      }
    ],
    timeline: [
      {
        id: 't-br-1',
        date: 'Aug 16, 2018',
        stage: 'First Detected',
        title: 'Original Event in Kerala',
        description: 'Periyar river overflows its banks, washing away pedestrian approach road to bridge.',
        sourceName: 'Kerala Local Press',
        impactLevel: 'high'
      },
      {
        id: 't-br-2',
        date: 'Aug 2026',
        stage: 'Social Amplification',
        title: 'Repackaged with False Assam Hashtags',
        description: 'Spotted on Facebook and X claiming National Highway cut off in Assam during ongoing monsoon.',
        sourceName: 'Viral Social Feeds',
        impactLevel: 'viral'
      },
      {
        id: 't-br-3',
        date: 'Aug 2026',
        stage: 'Fact-Check & Corrections',
        title: 'Disaster Cell Debunk Notice',
        description: 'ASDMA and regional fact-checkers issue alerts identifying the 2018 Kerala provenance.',
        sourceName: 'ASDMA & Fact-Check Consortium',
        impactLevel: 'medium'
      }
    ],
    graphData: {
      nodes: [
        { id: 'c0', type: 'claim', label: 'Claim: Assam Bridge Collapse 2026', details: 'Photo alleged to show Assam flood disaster', confidence: 20 },
        { id: 'sc1', type: 'subclaim', label: 'Sub-claim: Time of Incident', details: 'Claimed August 2026' },
        { id: 'sc2', type: 'subclaim', label: 'Sub-claim: Geographic Location', details: 'Claimed Assam Highway' },
        { id: 's1', type: 'source', label: 'Manorama 2018 Archive', details: 'Indexed photograph from 2018 Kerala floods', stance: 'Contradicts' },
        { id: 's2', type: 'source', label: 'ASDMA Assam Disaster Dept', details: 'Official road condition monitoring', stance: 'Contradicts' },
        { id: 'ep1', type: 'evidence_con', label: 'Contradicting: Reverse Visual Match', details: 'Pixel-identical match found from August 2018' },
        { id: 'v0', type: 'verdict', label: 'Verdict: MISLEADING / OUT OF CONTEXT', details: '94% Confidence - Authentic photo in false context', confidence: 94 }
      ],
      edges: [
        { id: 'e1', source: 'c0', target: 'sc1', relationship: 'analyzes', strength: 0.95 },
        { id: 'e2', source: 'c0', target: 'sc2', relationship: 'analyzes', strength: 0.95 },
        { id: 'e3', source: 'sc1', target: 's1', relationship: 'contradicts', strength: 1.0 },
        { id: 'e4', source: 'sc2', target: 's2', relationship: 'contradicts', strength: 1.0 },
        { id: 'e5', source: 's1', target: 'ep1', relationship: 'contradicts', strength: 0.98 },
        { id: 'e6', source: 'ep1', target: 'v0', relationship: 'concludes', strength: 0.95 }
      ]
    },
    temporalAnalysis: {
      isOutdated: true,
      originalEventDate: '2018-08-16',
      recirculatedDate: '2026-08-28',
      temporalMismatchScore: 96,
      recycledContextSummary: 'Classic out-of-context recycling: An 8-year-old catastrophic photo from Southern India repurposed to simulate disaster in North-East India.'
    },
    mediaIntelligence: {
      mediaType: 'image',
      aiGeneratedRisk: 8,
      manipulationIndicators: [
        'Image itself is not AI-generated; it is genuine optical photography.',
        'Stripped EXIF metadata concealing 2018 capture timestamp.',
        'Resolution downscaled to degrade reverse search accuracy.'
      ],
      metadataSummary: {
        cameraModel: 'Canon EOS 5D Mark IV (original shoot)',
        softwareUsed: 'Stripped by social media uploaders',
        creationDate: 'Original: August 16, 2018'
      },
      reverseMatches: [
        {
          source: 'Malayala Manorama Archives',
          date: '2018-08-16',
          originalContext: 'Aluva Manappuram Bridge underwater during Periyar river cresting'
        },
        {
          source: 'The Hindu Photo Gallery',
          date: '2018-08-17',
          originalContext: 'Kerala Monsoon Floods 2018 Day 5'
        }
      ],
      crossModalConsistency: {
        score: 25,
        isConsistent: false,
        contradictionsFound: [
          'Visual vegetation (coconut palms / coastal riverbanks) typical of Kerala Western Ghats rather than Brahmaputra plains',
          'Caption claims 2026 Assam event, while image history establishes 2018 Kerala occurrence'
        ],
        visualTextAlignmentSummary: 'Factual visual paired with deceptive regional caption.'
      }
    },
    semanticAnalysis: {
      sensationalLanguageScore: 78,
      emotionalManipulationScore: 84,
      loadedPhrases: [
        'Entire state cut off',
        'Terrifying collapse right now',
        'Help needed urgently'
      ],
      clickbaitIndicators: [
        'Emergency panic trigger',
        'Unverified warning to travelers'
      ],
      framingType: 'Alarmist Misdirection'
    },
    reasoningFactors: {
      strongestEvidence: [
        'Exact photographic match archived in Kerala newspapers in August 2018.',
        'Assam State Disaster Management Authority confirmation of no highway bridge collapse.'
      ],
      contradictoryEvidence: [
        'Assam is experiencing monsoon rainfall, giving plausible atmospheric context to deceivers.'
      ],
      missingEvidence: [],
      reasoningChain: [
        'User submitted photograph claiming current bridge collapse in Assam.',
        'Image reverse-lookup traces image to 2018 Kerala floods.',
        'Local disaster authorities in Assam confirm infrastructure intact.',
        'Photo is authentic but context is false.',
        'Verdict assigned: MISLEADING / OUT OF CONTEXT.'
      ]
    },
    limitations: [
      'Visual geotagging heuristic depends on indexed reverse-image repositories; unindexed private photographs require architectural matching.'
    ],
    isDemo: true
  },
  {
    id: 'inv-classified-submarine',
    verificationId: 'TL-2026-11880',
    timestamp: '2026-09-07T08:00:00Z',
    claim: 'Classified naval intelligence reports secret foreign submarine breach inside territorial waters off the Andaman coast.',
    category: 'Geo-Defense & Borders',
    inputType: 'question',
    language: 'English',
    verdict: 'INSUFFICIENT_EVIDENCE',
    confidenceScore: 35,
    confidenceExplanation: 'In accordance with TruthLens safety standards, when assertions cite alleged classified or covert operations without declassified records or open-source signals, TruthLens returns Insufficient Evidence rather than fabricating speculation.',
    summary30Sec: 'There is insufficient publicly verifiable evidence to evaluate this claim. No official defense statement, satellite tracking bulletin, or declassified operational report corroborates an unauthorized submerged breach in Andaman waters.',
    detailedInvestigation: 'The assertion originated on an anonymous defense discussion forum and was echoed by unverified social accounts. Maritime tracking transponder records (AIS) track commercial traffic in the Malacca Strait / Andaman corridor normally. Naval operations in territorial waters are classified operational matters; neither the Ministry of Defence nor international hydrographic observers have documented or confirmed any breach incident. Because reliable primary evidence cannot be established, TruthLens AI categorizes this claim strictly as Insufficient Evidence rather than asserting confirmation or denial.',
    expertEvidenceView: 'Passive acoustic hydrophone networks and sonobuoy drops are sovereign operational data not accessible to civilian auditing. Open-source satellite radar (Sentinel-1 SAR) of the claimed coordinates during the alleged timeframe shows standard commercial bulk carriers and no anomalous surface wake patterns.',
    subClaims: [
      {
        id: 'sc-sub-1',
        text: 'Foreign submarine breached territorial waters',
        verdict: 'INSUFFICIENT_EVIDENCE',
        confidence: 30,
        domain: 'Naval Operations',
        verificationNote: 'No public or official records exist to substantiate or formally audit this event.'
      }
    ],
    sources: [
      {
        id: 'src-mod',
        name: 'Ministry of Defence Press Information',
        domain: 'mod.gov.in',
        credibilityScore: 99,
        reputationTier: 'Primary Authority',
        type: 'Primary Authority',
        publicationDate: 'Daily Press Log',
        author: 'Spokesperson, Ministry of Defence',
        citationQuality: 'Rigorous / Direct',
        transparencyScore: 95,
        stance: 'Neutral',
        quoteOrSummary: 'No press advisory, breach report, or operational statement issued regarding the alleged sector.',
        potentialBiasIndicator: 'State defense apparatus.',
        reliabilitySignals: ['Sovereign Authority', 'Official Operational Spokesperson']
      },
      {
        id: 'src-maritime-ais',
        name: 'Automated Identification System (AIS) Vessel Log',
        domain: 'marinetraffic.com',
        credibilityScore: 90,
        reputationTier: 'High Authority',
        type: 'Academic / Scientific',
        publicationDate: 'Real-time Telemetry Archive',
        author: 'Maritime Data Network',
        citationQuality: 'Rigorous / Direct',
        transparencyScore: 92,
        stance: 'Neutral',
        quoteOrSummary: 'Commercial traffic flowing normally through Andaman maritime boundaries; military vessels do not broadcast open AIS transponders.',
        potentialBiasIndicator: 'Civilian telemetry only.',
        reliabilitySignals: ['Real-time Satellite Transponder Data']
      }
    ],
    timeline: [
      {
        id: 't-sub-1',
        date: '3 Days Ago',
        stage: 'First Detected',
        title: 'Anonymous Forum Post',
        description: 'Post claims intelligence source reported underwater tracking near Nicobar.',
        sourceName: 'Geopolitics Forum',
        impactLevel: 'low'
      },
      {
        id: 't-sub-2',
        date: 'Yesterday',
        stage: 'Social Amplification',
        title: 'Amplified by Defense Enthusiast Accounts',
        description: 'Speculative threads published alleging naval alert.',
        sourceName: 'X / Social Media',
        impactLevel: 'medium'
      },
      {
        id: 't-sub-3',
        date: 'Present Day',
        stage: 'Current Evidence Status',
        title: 'Insufficient Independent Corroboration',
        description: 'Cataloged as unverified rumor with insufficient evidence for factual determination.',
        sourceName: 'TruthLens AI Intelligence Database',
        impactLevel: 'low'
      }
    ],
    graphData: {
      nodes: [
        { id: 'c0', type: 'claim', label: 'Claim: Secret Submarine Breach', details: 'Claim of unauthorized underwater incursion', confidence: 35 },
        { id: 's1', type: 'source', label: 'Ministry of Defence', details: 'No official statement or incident log', stance: 'Neutral' },
        { id: 's2', type: 'source', label: 'Civilian Maritime AIS', details: 'Standard commercial navigation logs', stance: 'Neutral' },
        { id: 'ep1', type: 'evidence_con', label: 'Absence of Primary Telemetry', details: 'Classified records cannot be audited openly' },
        { id: 'v0', type: 'verdict', label: 'Verdict: INSUFFICIENT EVIDENCE', details: 'Cannot fabricate confirmation without records', confidence: 35 }
      ],
      edges: [
        { id: 'e1', source: 'c0', target: 's1', relationship: 'analyzes', strength: 0.5 },
        { id: 'e2', source: 'c0', target: 's2', relationship: 'analyzes', strength: 0.5 },
        { id: 'e3', source: 's1', target: 'ep1', relationship: 'analyzes', strength: 0.7 },
        { id: 'e4', source: 'ep1', target: 'v0', relationship: 'concludes', strength: 0.9 }
      ]
    },
    temporalAnalysis: {
      isOutdated: false,
      temporalMismatchScore: 20,
      recycledContextSummary: 'Fresh speculative narrative with zero historical anchor or corroborating physical sightings.'
    },
    semanticAnalysis: {
      sensationalLanguageScore: 82,
      emotionalManipulationScore: 76,
      loadedPhrases: ['Top-secret breach', 'National security danger', 'Coverup by officials'],
      clickbaitIndicators: ['Sensational defense rumor', 'Unverifiable anonymous whistle-blowing'],
      framingType: 'Alarmist Misdirection'
    },
    reasoningFactors: {
      strongestEvidence: [
        'Absence of sovereign confirmation or diplomatic protest records between concerned nations.'
      ],
      contradictoryEvidence: [],
      missingEvidence: [
        'No sonar logs, official press releases, satellite imagery, or hydrographic telemetry available to confirm or refute.'
      ],
      reasoningChain: [
        'Claim posits classified military incursion.',
        'Primary defense channels confirm no public incident on record.',
        'Commercial maritime feeds show nominal operations.',
        'Policy mandate: Never fabricate or speculate when evidence is unavailable.',
        'Verdict definitively assigned as INSUFFICIENT EVIDENCE.'
      ]
    },
    limitations: [
      'Classified military operations are by definition exempt from open-source transparency; civilian intelligence engines cannot independently confirm undersea operational stealth movements without declassification.'
    ],
    isDemo: true
  }
];

export function getInvestigationById(id: string): InvestigationReport | undefined {
  return MOCK_INVESTIGATIONS.find(inv => inv.id === id);
}
