export interface LanguageMeta {
  code: string;
  name: string;
  nativeName: string;
  script: string;
  region: string;
}

export const INDIAN_LANGUAGES: LanguageMeta[] = [
  { code: 'en', name: 'English', nativeName: 'English', script: 'Latin', region: 'Pan-India & Global' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', script: 'Devanagari', region: 'North & Central India' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', script: 'Bengali', region: 'West Bengal & Tripura' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', script: 'Telugu', region: 'Andhra Pradesh & Telangana' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', script: 'Tamil', region: 'Tamil Nadu & Puducherry' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', script: 'Devanagari', region: 'Maharashtra' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', script: 'Gujarati', region: 'Gujarat' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', script: 'Kannada', region: 'Karnataka' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', script: 'Malayalam', region: 'Kerala' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', script: 'Gurmukhi', region: 'Punjab' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', script: 'Odia', region: 'Odisha' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া', script: 'Bengali-Assamese', region: 'Assam' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', script: 'Perso-Arabic', region: 'Jammu & Kashmir, Telangana, UP' },
  { code: 'sa', name: 'Sanskrit', nativeName: 'संस्कृतम्', script: 'Devanagari', region: 'Classical / Pan-India' },
  { code: 'mai', name: 'Maithili', nativeName: 'मैथिली', script: 'Devanagari', region: 'Bihar & Jharkhand' },
  { code: 'sat', name: 'Santali', nativeName: 'संथाली (ओल चिकी)', script: 'Ol Chiki / Devanagari', region: 'Jharkhand, Odisha, WB' },
  { code: 'ks', name: 'Kashmiri', nativeName: 'कॉशुर / کٲشُر', script: 'Perso-Arabic / Devanagari', region: 'Jammu & Kashmir' },
  { code: 'ne', name: 'Nepali', nativeName: 'नेपाली', script: 'Devanagari', region: 'Sikkim, North Bengal' },
  { code: 'kok', name: 'Konkani', nativeName: 'कोंकणी', script: 'Devanagari', region: 'Goa & Coastal Karnataka' },
  { code: 'sd', name: 'Sindhi', nativeName: 'سنڌي / सिन्धी', script: 'Perso-Arabic / Devanagari', region: 'Gujarat & Maharashtra' },
  { code: 'doi', name: 'Dogri', nativeName: 'डोगरी', script: 'Devanagari', region: 'Jammu' },
  { code: 'brx', name: 'Bodo', nativeName: 'बड़ो', script: 'Devanagari', region: 'Assam Bodoland' },
  { code: 'mni', name: 'Manipuri', nativeName: 'মৈতৈলোন্ (Meitei)', script: 'Meetei Mayek / Bengali', region: 'Manipur' },
];

export interface TranslationDict {
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  inputPlaceholder: string;
  verifyNow: string;
  uploadMedia: string;
  dashboard: string;
  verify: string;
  evidenceGraph: string;
  mediaLab: string;
  radar: string;
  reports: string;
  copilot: string;
  liveStats: string;
  recentInvestigations: string;
  howItWorks: string;
  confidenceTitle: string;
  confidenceDisclaimer: string;
  whyTruthLensTitle: string;
  quickSummary: string;
  detailedInvestigation: string;
  expertView: string;
  sourceTrustTitle: string;
  timelineTitle: string;
  shareReport: string;
  exportReport: string;
  verdictLabels: Record<string, string>;
  sampleClaims: { title: string; category: string; text: string }[];
}

export const TRANSLATIONS: Record<string, TranslationDict> = {
  en: {
    tagline: "Verify Before You Believe.",
    heroTitle: "Before You Share It, Verify It.",
    heroSubtitle: "TruthLens AI investigates claims, sources, images and videos to reveal the evidence behind digital information.",
    inputPlaceholder: "Paste a news article, claim, social media post, URL, or ask 'Is this claim true?'...",
    verifyNow: "Verify Now",
    uploadMedia: "Upload Media",
    dashboard: "Dashboard",
    verify: "Verify Engine",
    evidenceGraph: "Evidence Graph",
    mediaLab: "Media Lab",
    radar: "Misinformation Radar",
    reports: "Reports",
    copilot: "Copilot AI",
    liveStats: "Platform Verification Signals (Live Demo Monitor)",
    recentInvestigations: "Recent Intelligence Dossiers",
    howItWorks: "12-Stage Deep Verification Pipeline",
    confidenceTitle: "Credibility Confidence Metric",
    confidenceDisclaimer: "Confidence score represents statistical agreement across verified corroborating sources, not infallible certainty.",
    whyTruthLensTitle: "Why did TruthLens decide this?",
    quickSummary: "30-Sec Executive Brief",
    detailedInvestigation: "Detailed Investigation",
    expertView: "Expert Forensic View",
    sourceTrustTitle: "Source Trust & Cross-Corroboration Matrix",
    timelineTitle: "Claim Propagation & Correction Chronology",
    shareReport: "Share Intelligence Report",
    exportReport: "Export Dossier",
    verdictLabels: {
      VERIFIED: "VERIFIED",
      MOSTLY_SUPPORTED: "MOSTLY SUPPORTED",
      MISLEADING: "MISLEADING / OUT OF CONTEXT",
      UNVERIFIED: "UNVERIFIED",
      FALSE: "FALSE / CONTRADICTED",
      MANIPULATED_MEDIA: "MANIPULATED MEDIA",
      INSUFFICIENT_EVIDENCE: "INSUFFICIENT EVIDENCE",
    },
    sampleClaims: [
      {
        title: "500 Rupee Note Microchip Hoax",
        category: "Financial & Scams",
        text: "New RBI 500 currency notes contain embedded GPS satellite microchips capable of signal tracking even 120 meters underground."
      },
      {
        title: "WHO Cancer Miracle Herb WhatsApp Forward",
        category: "Health & Medicine",
        text: "WHO officially confirmed that drinking hot water with lemon and baking soda eliminates 100% of cancer cells without chemotherapy."
      },
      {
        title: "Deepfake Politician Video on Subsidy Cancellation",
        category: "Elections & Politics",
        text: "Leaked viral video purportedly shows Chief Minister announcing the immediate termination of agricultural electricity subsidies."
      },
      {
        title: "NASA Golden Crescent Lunar Alignment",
        category: "Science & Tech",
        text: "NASA releases photo of rare golden moon eclipse visible over the Himalayas for the first time in 500 years."
      }
    ]
  },
  hi: {
    tagline: "विश्वास करने से पहले, पुष्टि करें।",
    heroTitle: "साझा करने से पहले, सत्यापित करें।",
    heroSubtitle: "ट्रूथलेन्स एआई डिजिटल सूचना के पीछे के साक्ष्यों को उजागर करने के लिए दावों, स्रोतों, छवियों और वीडियो की गहन जांच करता है।",
    inputPlaceholder: "समाचार लेख, सोशल मीडिया पोस्ट, यूआरएल दर्ज करें या पूछें 'क्या यह सच है?'...",
    verifyNow: "अभी सत्यापित करें",
    uploadMedia: "मीडिया अपलोड करें",
    dashboard: "डैशबोर्ड",
    verify: "सत्यापन इंजन",
    evidenceGraph: "साक्ष्य ग्राफ",
    mediaLab: "मीडिया लैब",
    radar: "दुष्प्रचार रडार",
    reports: "रिपोर्ट्स",
    copilot: "एआई कोपायलट",
    liveStats: "प्लेटफ़ॉर्म सत्यापन संकेत (लाइव डेमो मॉनिटर)",
    recentInvestigations: "हालिया साक्ष्य अनुसंधान",
    howItWorks: "12-चरणीय गहन सत्यापन पाइपलाइन",
    confidenceTitle: "विश्वसनीयता कॉन्फिडेंस स्कोर",
    confidenceDisclaimer: "कॉन्फिडेंस स्कोर सत्यापित स्रोतों के सांख्यिकीय तालमेल को दर्शाता है, पूर्ण अचूकता का दावा नहीं।",
    whyTruthLensTitle: "ट्रूथलेन्स ने यह निर्णय क्यों लिया?",
    quickSummary: "30-सेकंड सारांश",
    detailedInvestigation: "विस्तृत जांच पड़ताल",
    expertView: "विशेषज्ञ साक्ष्य दृष्टिकोण",
    sourceTrustTitle: "स्रोत विश्वसनीयता एवं क्रॉस-सत्यापन मैट्रिक्स",
    timelineTitle: "दावा प्रसार एवं सुधार कालक्रम",
    shareReport: "रिपोर्ट साझा करें",
    exportReport: "डॉक्यूमेंट निर्यात करें",
    verdictLabels: {
      VERIFIED: "सत्यापित (VERIFIED)",
      MOSTLY_SUPPORTED: "अधिकांशतः समर्थित",
      MISLEADING: "भ्रामक / संदर्भ से परे",
      UNVERIFIED: "असत्यापित",
      FALSE: "असत्य / खंडित",
      MANIPULATED_MEDIA: "हेरफेर किया गया मीडिया",
      INSUFFICIENT_EVIDENCE: "अपर्याप्त साक्ष्य",
    },
    sampleClaims: [
      {
        title: "₹500 के नोट में जीपीएस नैनो-चिप का दावा",
        category: "Financial & Scams",
        text: "आरबीआई के नए 500 रुपये के नोटों में जीपीएस सैटेलाइट चिप लगी है जो जमीन के 120 मीटर नीचे से भी सिग्नल भेज सकती है।"
      },
      {
        title: "नींबू-सोडा से कैंसर ठीक होने का फर्जी डब्ल्यूएचओ संदेश",
        category: "Health & Medicine",
        text: "डब्ल्यूएचओ ने कथित तौर पर पुष्टि की है कि गर्म पानी में नींबू और बेकिंग सोडा मिलाकर पीने से कीमोथेरेपी के बिना कैंसर खत्म हो जाता है।"
      },
      {
        title: "कृषि बिजली सब्सिडी बंद होने का डीपफेक वीडियो",
        category: "Elections & Politics",
        text: "वायरल वीडियो में मुख्यमंत्री को कृषि बिजली सब्सिडी तुरंत बंद करने की घोषणा करते दिखाया गया है।"
      }
    ]
  },
  bn: {
    tagline: "বিশ্বাস করার আগে, যাচাই করুন।",
    heroTitle: "শেয়ার করার আগে, যাচাই করুন।",
    heroSubtitle: "ট্রুথলেন্স এআই ডিজিটাল তথ্যের সত্যতা উদঘাটন করতে দাবি, উৎস, ছবি ও ভিডিও বিশ্লেষণ করে।",
    inputPlaceholder: "খবরের লিংক, সোশ্যাল পোস্ট বা দাবি লিখুন...",
    verifyNow: "এখনই যাচাই করুন",
    uploadMedia: "মিডিয়া আপলোড করুন",
    dashboard: "ড্যাশবোর্ড",
    verify: "যাচাই ইঞ্জিন",
    evidenceGraph: "প্রমাণ গ্রাফ",
    mediaLab: "মিডিয়া ল্যাব",
    radar: "ভুয়ো খবর রাডার",
    reports: "রিপোর্ট",
    copilot: "কোপাইলট এআই",
    liveStats: "লাইভ ভেরিফিকেশন মনিটর",
    recentInvestigations: "সাম্প্রতিক অনুসন্ধান",
    howItWorks: "১২-ধাপের গভীর যাচাইকরণ পাইপলাইন",
    confidenceTitle: "বিশ্বাসযোগ্যতা স্কোর",
    confidenceDisclaimer: "কনফিডেন্স স্কোর উৎসসমূহের মিল নির্দেশ করে, নিখুঁত নিশ্চয়তা নয়।",
    whyTruthLensTitle: "কেন ট্রুথলেন্স এই সিদ্ধান্ত নিয়েছে?",
    quickSummary: "৩০-সেকেন্ড সারসংক্ষেপ",
    detailedInvestigation: "বিস্তারিত অনুসন্ধান",
    expertView: "বিশেষজ্ঞ দৃষ্টিভঙ্গি",
    sourceTrustTitle: "উৎস বিশ্বাসযোগ্যতা ম্যাট্রিক্স",
    timelineTitle: "দাবি প্রচারের সময়রেখা",
    shareReport: "শেয়ার করুন",
    exportReport: "এক্সপোর্ট করুন",
    verdictLabels: {
      VERIFIED: "যাচাইকৃত (VERIFIED)",
      MOSTLY_SUPPORTED: "অধিকাংশ সমর্থিত",
      MISLEADING: "বিভ্রান্তিকর / অপ্রাসঙ্গিক",
      UNVERIFIED: "অযাচাইকৃত",
      FALSE: "মিথ্যা / খণ্ডিত",
      MANIPULATED_MEDIA: "বিকৃত মিডিয়া",
      INSUFFICIENT_EVIDENCE: "অপর্যাপ্ত প্রমাণ",
    },
    sampleClaims: [
      {
        title: "৫০০ টাকার নোটে স্যাটেলাইট চিপের ভুয়ো দাবি",
        category: "Financial & Scams",
        text: "নতুন ৫০০ টাকার নোটে জিপিএস ন্যানোচিপ আছে যা মাটির নিচ থেকেও ট্র্যাক করা সম্ভব।"
      }
    ]
  },
  te: {
    tagline: "నమ్మే ముందు ధృవీకరించండి.",
    heroTitle: "షేర్ చేసే ముందు, ధృవీకరించండి.",
    heroSubtitle: "డిజిటల్ సమాచారం వెనుక ఉన్న వాస్తవాలను వెలికితీసేందుకు క్లెయిమ్‌లు, ఆధారాలు, చిత్రాలు మరియు వీడియోలను ట్రూత్‌లెన్స్ AI విశ్లేషిస్తుంది.",
    inputPlaceholder: "వార్త క్లెయిమ్, పోస్ట్ లేదా లింక్ ఇక్కడ నమోదు చేయండి...",
    verifyNow: "ఇప్పుడే ధృవీకరించండి",
    uploadMedia: "మీడియా అప్‌లోడ్ చేయండి",
    dashboard: "డాష్‌బోర్డ్",
    verify: "వెరిఫికేషన్ ఇంజిన్",
    evidenceGraph: "సాక్ష్యాల గ్రాఫ్",
    mediaLab: "మీడియా ల్యాబ్",
    radar: "తప్పుడు సమాచార రాడార్",
    reports: "నివేదికలు",
    copilot: "AI కోపైలట్",
    liveStats: "లైవ్ వెరిఫికేషన్ సిగ్నల్స్",
    recentInvestigations: "ఇటీవలి పరిశోధనలు",
    howItWorks: "12-దశల విశ్లేషణ వ్యవస్థ",
    confidenceTitle: "విశ్వసనీయత స్కోర్",
    confidenceDisclaimer: "కాన్ఫిడెన్స్ స్కోరు ఆధారాల పొందికను సూచిస్తుంది, సంపూర్ణ నిశ్చయత కాదు.",
    whyTruthLensTitle: "ట్రూత్‌లెన్స్ ఈ నిర్ణయానికి ఎందుకు వచ్చింది?",
    quickSummary: "30 సెకన్ల సారాంశం",
    detailedInvestigation: "సమగ్ర పరిశోధన",
    expertView: "నిపుణుల సాక్ష్యాల వీక్షణ",
    sourceTrustTitle: "మూలాల విశ్వసనీయత మ్యాట్రిక్స్",
    timelineTitle: "వ్యాప్తి సమయరేఖ",
    shareReport: "షేర్ చేయండి",
    exportReport: "ఎగుమతి చేయండి",
    verdictLabels: {
      VERIFIED: "ధృవీకరించబడింది (VERIFIED)",
      MOSTLY_SUPPORTED: "ఎక్కువగా సమర్థించబడింది",
      MISLEADING: "తప్పుదారి పట్టించేది",
      UNVERIFIED: "ధృవీకరించబడలేదు",
      FALSE: "తప్పు / ఖండించబడింది",
      MANIPULATED_MEDIA: "మార్ఫింగ్ చేసిన మీడియా",
      INSUFFICIENT_EVIDENCE: "సరిపోని ఆధారాలు",
    },
    sampleClaims: [
      {
        title: "ఉచిత కరెంటు రద్దుపై డీప్‌ఫేక్ వీడియో",
        category: "Elections & Politics",
        text: "వ్యవసాయ విద్యుత్ సబ్సిడీని రద్దు చేస్తున్నట్లు సీఎం చెప్పినట్లుగా వైరల్ అవుతున్న వీడియో."
      }
    ]
  },
  ta: {
    tagline: "நம்புவதற்கு முன் சரிபாருங்கள்.",
    heroTitle: "பகிர்வதற்கு முன் சரிபாருங்கள்.",
    heroSubtitle: "டிஜிட்டல் தகவல்களின் உண்மைத்தன்மையை கண்டறிய செய்திகள், மூலங்கள், படங்கள் மற்றும் வீடியோக்களை ஆய்வு செய்கிறது ட்ரூத்லென்ஸ் ஏஐ.",
    inputPlaceholder: "செய்தி பதிவு, முகவரி அல்லது தகவலை உள்ளிடவும்...",
    verifyNow: "சரிபார்க்கவும்",
    uploadMedia: "ஊடகத்தை பதிவேற்றவும்",
    dashboard: "டாஷ்போர்டு",
    verify: "சரிபார்ப்பு இயந்திரம்",
    evidenceGraph: "சான்றுகள் வரைபடம்",
    mediaLab: "மீடியா லேப்",
    radar: "தவறான தகவல் ரேடார்",
    reports: "அறிக்கைகள்",
    copilot: "ஏஐ வழிகாட்டி",
    liveStats: "நேரலை கண்காணிப்பு",
    recentInvestigations: "சமீபத்திய ஆய்வுகள்",
    howItWorks: "12-படி சரிபார்ப்பு கட்டமைப்பு",
    confidenceTitle: "நம்பகத்தன்மை குறியீடு",
    confidenceDisclaimer: "நம்பகத்தன்மை மதிப்பெண் சான்றுகளின் ஒருமைப்பாட்டை குறிக்கிறது.",
    whyTruthLensTitle: "ட்ரூத்லென்ஸ் ஏன் இந்த முடிவை எடுத்தது?",
    quickSummary: "30 வினாடி சுருக்கம்",
    detailedInvestigation: "விரிவான ஆய்வு",
    expertView: "வல்லுநர் சான்று பார்வை",
    sourceTrustTitle: "மூலங்களின் உண்மைத்தன்மை",
    timelineTitle: "பரவல் காலவரிசை",
    shareReport: "பகிரவும்",
    exportReport: "ஏற்றுமதி செய்க",
    verdictLabels: {
      VERIFIED: "சரிபார்க்கப்பட்டது (VERIFIED)",
      MOSTLY_SUPPORTED: "பெரும்பாலும் உறுதியானது",
      MISLEADING: "தவறாக வழிநடத்துகிறது",
      UNVERIFIED: "சரிபார்க்கப்படவில்லை",
      FALSE: "பொய் / மறுக்கப்பட்டது",
      MANIPULATED_MEDIA: "போலியாக உருவாக்கப்பட்ட ஊடகம்",
      INSUFFICIENT_EVIDENCE: "போதிய சான்றுகள் இல்லை",
    },
    sampleClaims: [
      {
        title: "500 ரூபாய் நோட்டில் செயற்கைக்கோள் சிப் வதந்தி",
        category: "Financial & Scams",
        text: "புதிய 500 ரூபாய் நோட்டுகளில் பூமிக்கு அடியில் இருந்தும் ஜிபிஎஸ் தகவலை அனுப்பும் நானோ சிப் பொருத்தப்பட்டுள்ளதாக கூற்று."
      }
    ]
  },
  mr: {
    tagline: "विश्वास ठेवण्यापूर्वी पडताळणी करा.",
    heroTitle: "शेअर करण्यापूर्वी, पडताळणी करा.",
    heroSubtitle: "डिजिटल माहितीमागील पुरावे शोधण्यासाठी ट्रुथलेन्स एआय दावे, स्रोत, चित्रे आणि व्हिडिओंचे विश्लेषण करते.",
    inputPlaceholder: "बातम्या, सोशल मीडिया पोस्ट किंवा दावा येथे पेस्ट करा...",
    verifyNow: "आता पडताळा",
    uploadMedia: "मीडिया अपलोड करा",
    dashboard: "डॅशबोर्ड",
    verify: "पडताळणी इंजिन",
    evidenceGraph: "पुरावा आलेख",
    mediaLab: "मीडिया लॅब",
    radar: "अफवा रडार",
    reports: "अहवाल",
    copilot: "एआय कोपायलट",
    liveStats: "थेट पडताळणी सिग्नल",
    recentInvestigations: "अलीकडील तपासणी",
    howItWorks: "१२-टप्प्यांची सखोल तपासणी",
    confidenceTitle: "विश्वासार्हता स्कोअर",
    confidenceDisclaimer: "हा स्कोअर उपलब्ध पुराव्यांमधील सुसंगतता दर्शवतो.",
    whyTruthLensTitle: "ट्रुथलेन्सने हा निर्णय का घेतला?",
    quickSummary: "३० सेकंद सारांश",
    detailedInvestigation: "सविस्तर तपास",
    expertView: "तज्ज्ञ पुरावा दृष्टिकोन",
    sourceTrustTitle: "स्रोत विश्वासार्हता मॅट्रिक्स",
    timelineTitle: "प्रसार कालक्रम",
    shareReport: "अहवाल शेअर करा",
    exportReport: "डाउनलोड करा",
    verdictLabels: {
      VERIFIED: "सत्यापित (VERIFIED)",
      MOSTLY_SUPPORTED: "मुख्यत्वे समर्थित",
      MISLEADING: "दिशाभूल करणारे",
      UNVERIFIED: "असत्यापित",
      FALSE: "खोटे / खंडित",
      MANIPULATED_MEDIA: "बदललेले माध्यम",
      INSUFFICIENT_EVIDENCE: "अपुरा पुरावा",
    },
    sampleClaims: [
      {
        title: "५०० रुपयांच्या नोटेत जीपीएस चिपचा दावा",
        category: "Financial & Scams",
        text: "आरबीआयच्या नवीन नोटांमध्ये जीपीएस चिप असून त्यातून थेट सॅटेलाइट ट्रॅकिंग होते."
      }
    ]
  },
  gu: {
    tagline: "વિશ્વાસ કરતા પહેલા ચકાસો.",
    heroTitle: "શેર કરતા પહેલાં, ચકાસણી કરો.",
    heroSubtitle: "ડિજિટલ માહિતી પાછળના પુરાવા શોધવા માટે ટ્રુથલેન્સ એઆઈ દાવાઓ, સ્રોતો, ચિત્રો અને વિડિયોનું વિશ્લેષણ કરે છે.",
    inputPlaceholder: "સમાચાર દાવા, પોસ્ટ અથવા પ્રશ્ન અહીં દાખલ કરો...",
    verifyNow: "હમણાં ચકાસો",
    uploadMedia: "મીડિયા અપલોડ કરો",
    dashboard: "ડેશબોર્ડ",
    verify: "વેરિફિકેશન એન્જિન",
    evidenceGraph: "પુરાવા ગ્રાફ",
    mediaLab: "મીડિયા લેબ",
    radar: "ગેરમાહિતી રડાર",
    reports: "અહેવાલો",
    copilot: "એઆઈ કોપાયલટ",
    liveStats: "લાઈવ મોનિટરિંગ",
    recentInvestigations: "તાજેતરના તારણો",
    howItWorks: "૧૨-તબક્કાની વેરિફિકેશન સિસ્ટમ",
    confidenceTitle: "વિશ્વસનીયતા સ્કોર",
    confidenceDisclaimer: "વિશ્વસનીયતા સ્કોર પુરાવાઓની સમાનતા દર્શાવે છે.",
    whyTruthLensTitle: "ટ્રુથલેન્સે આ નિર્ણય કેમ લીધો?",
    quickSummary: "૩૦-સેકન્ડ સારાંશ",
    detailedInvestigation: "વિગતવાર તપાસ",
    expertView: "નિષ્ણાત અભિપ્રાય",
    sourceTrustTitle: "સ્ત્રોતોની વિશ્વસનીયતા",
    timelineTitle: "સમયરેખા",
    shareReport: "શેર કરો",
    exportReport: "નિકાસ કરો",
    verdictLabels: {
      VERIFIED: "ચકાસાયેલ (VERIFIED)",
      MOSTLY_SUPPORTED: "મોટાભાગે સમર્થિત",
      MISLEADING: "ગેરમાર્ગે દોરનારું",
      UNVERIFIED: "અચકાસાયેલ",
      FALSE: "ખોટું / ખંડન થયેલ",
      MANIPULATED_MEDIA: "છેડછાડ કરેલ મીડિયા",
      INSUFFICIENT_EVIDENCE: "અપૂરતા પુરાવા",
    },
    sampleClaims: []
  },
  kn: {
    tagline: "ನಂಬುವ ಮುನ್ನ ಪರಿಶೀಲಿಸಿ.",
    heroTitle: "ಹಂಚಿಕೊಳ್ಳುವ ಮುನ್ನ, ಪರಿಶೀಲಿಸಿ.",
    heroSubtitle: "ಡಿಜಿಟಲ್ ಮಾಹಿತಿಯ ಹಿಂದಿನ ಸತ್ಯಾಸತ್ಯತೆಯನ್ನು ತಿಳಿಯಲು ಟ್ರೂತ್‌ಲೆನ್ಸ್ ಎಐ ಮೂಲಗಳು, ಚಿತ್ರಗಳು ಮತ್ತು ವಿಡಿಯೋಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    inputPlaceholder: "ಸುದ್ದಿ ಕ್ಲೇಮ್, ಲಿಂಕ್ ಅಥವಾ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ನಮೂದಿಸಿ...",
    verifyNow: "ಈಗಲೇ ಪರಿಶೀಲಿಸಿ",
    uploadMedia: "ಮಾಧ್ಯಮ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    verify: "ಪರಿಶೀಲನಾ ಎಂಜಿನ್",
    evidenceGraph: "ಸಾಕ್ಷ್ಯಗಳ ಗ್ರಾಫ್",
    mediaLab: "ಮೀಡಿಯಾ ಲ್ಯಾಬ್",
    radar: "ಸುಳ್ಳುಸುದ್ದಿ ರೇಡಾರ್",
    reports: "ವರದಿಗಳು",
    copilot: "ಎಐ ಕೋಪೈಲಟ್",
    liveStats: "ಲೈವ್ ಮಾನಿಟರ್",
    recentInvestigations: "ಇತ್ತೀಚಿನ ತನಿಖೆಗಳು",
    howItWorks: "12 ಹಂತಗಳ ಪರಿಶೀಲನೆ",
    confidenceTitle: "ವಿಶ್ವಾಸಾರ್ಹತೆ ಸೂಚ್ಯಂಕ",
    confidenceDisclaimer: "ಕಾನ್ಫಿಡೆನ್ಸ್ ಸ್ಕೋರ್ ಸಾಕ್ಷ್ಯಗಳ ಸಮನ್ವಯತೆಯನ್ನು ಬಿಂಬಿಸುತ್ತದೆ.",
    whyTruthLensTitle: "ಟ್ರೂತ್‌ಲೆನ್ಸ್ ಈ ನಿರ್ಧಾರಕ್ಕೆ ಏಕೆ ಬಂದಿತು?",
    quickSummary: "30 ಸೆಕೆಂಡುಗಳ ಸಾರಾಂಶ",
    detailedInvestigation: "ವಿವರವಾದ ತನಿಖೆ",
    expertView: "ತಜ್ಞರ ಸಾಕ್ಷ್ಯ ನೋಟ",
    sourceTrustTitle: "ಮೂಲಗಳ ವಿಶ್ವಾಸಾರ್ಹತೆ",
    timelineTitle: "ಪ್ರಸರಣ ಕಾಲಾವಧಿ",
    shareReport: "ವರದಿ ಹಂಚಿಕೊಳ್ಳಿ",
    exportReport: "ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
    verdictLabels: {
      VERIFIED: "ದೃಢೀಕರಿಸಲಾಗಿದೆ (VERIFIED)",
      MOSTLY_SUPPORTED: "ಹೆಚ್ಚಾಗಿ ಬೆಂಬಲಿತವಾಗಿದೆ",
      MISLEADING: "ತಪ್ಪುದಾರಿಗೆಳೆಯುವಂತಹದ್ದು",
      UNVERIFIED: "ದೃಢೀಕರಿಸಲಾಗಿಲ್ಲ",
      FALSE: "ಸುಳ್ಳು / ತಿರಸ್ಕರಿಸಲಾಗಿದೆ",
      MANIPULATED_MEDIA: "ತಿರುಚಿದ ಮಾಧ್ಯಮ",
      INSUFFICIENT_EVIDENCE: "ಅಪೂರ್ಣ ಸಾಕ್ಷ್ಯ",
    },
    sampleClaims: []
  },
  ml: {
    tagline: "വിശ്വസിക്കുന്നതിന് മുൻപ് പരിശോധിക്കുക.",
    heroTitle: "പങ്കിടുന്നതിന് മുൻപ്, പരിശോധിക്കുക.",
    heroSubtitle: "ഡിജിറ്റൽ വിവരങ്ങൾക്ക് പിന്നിലെ വസ്തുതകൾ കണ്ടെത്താൻ ട്രൂത്ത് ലെൻസ് എഐ ഉറവിടങ്ങളും ചിത്രങ്ങളും വീഡിയോകളും പരിശോധിക്കുന്നു.",
    inputPlaceholder: "വാർത്ത അല്ലെങ്കിൽ ക്ലെയിം ഇവിടെ നൽകുക...",
    verifyNow: "ഇപ്പോൾ പരിശോധിക്കുക",
    uploadMedia: "മീഡിയ അപ്‌ലോഡ് ചെയ്യുക",
    dashboard: "ഡാഷ്‌ബോർഡ്",
    verify: "വെരിഫിക്കേഷൻ എഞ്ചിൻ",
    evidenceGraph: "തെളിവ് ഗ്രാഫ്",
    mediaLab: "മീഡിയ ലാബ്",
    radar: "വ്യാജവാർത്ത റഡാർ",
    reports: "റിപ്പോർട്ടുകൾ",
    copilot: "എഐ കോപൈലറ്റ്",
    liveStats: "തത്സമയ സിഗ്നലുകൾ",
    recentInvestigations: "സമീപകാല അന്വേഷണങ്ങൾ",
    howItWorks: "12-ഘട്ട പരിശോധന",
    confidenceTitle: "വിശ്വാസ്യത സ്കോർ",
    confidenceDisclaimer: "തെളിവുകളുടെ തുല്യതയാണ് സ്കോർ സൂചിപ്പിക്കുന്നത്.",
    whyTruthLensTitle: "എന്തുകൊണ്ടാണ് ട്രൂത്ത് ലെൻസ് ഈ നിഗമനത്തിലെത്തിയത്?",
    quickSummary: "30 സെക്കൻഡ് ചുരുക്കം",
    detailedInvestigation: "വിശദമായ പരിശോധന",
    expertView: "വിദഗ്ദ്ധ കാഴ്ചപ്പാട്",
    sourceTrustTitle: "ഉറവിട വിശ്വാസ്യത",
    timelineTitle: "വ്യാപന ടൈംലൈൻ",
    shareReport: "പങ്കുവെക്കുക",
    exportReport: "ഡൗൺലോഡ് ചെയ്യുക",
    verdictLabels: {
      VERIFIED: "സ്ഥിരീകരിച്ചത് (VERIFIED)",
      MOSTLY_SUPPORTED: "ഭൂരിഭാഗവും ശരി",
      MISLEADING: "തെറ്റിദ്ധരിപ്പിക്കുന്നത്",
      UNVERIFIED: "സ്ഥിരീകരിക്കാത്തത്",
      FALSE: "തെറ്റ് / നിഷേധിച്ചത്",
      MANIPULATED_MEDIA: "കൃത്രിമം കാട്ടിയ മീഡിയ",
      INSUFFICIENT_EVIDENCE: "അപര്യാപ്തമായ തെളിവുകൾ",
    },
    sampleClaims: []
  },
  pa: {
    tagline: "ਯਕੀਨ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ, ਪੁਸ਼ਟੀ ਕਰੋ।",
    heroTitle: "ਸਾਂਝਾ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ, ਤਸਦੀਕ ਕਰੋ।",
    heroSubtitle: "ਟਰੂਥਲੈਂਸ ਏਆਈ ਦਾਅਵਿਆਂ, ਸਰੋਤਾਂ, ਤਸਵੀਰਾਂ ਅਤੇ ਵੀਡੀਓ ਦੀ ਡੂੰਘੀ ਜਾਂਚ ਕਰਕੇ ਸੱਚ ਸਾਹਮਣੇ ਲਿਆਉਂਦਾ ਹੈ।",
    inputPlaceholder: "ਖ਼ਬਰ, ਸੋਸ਼ਲ ਮੀਡੀਆ ਦਾਅਵਾ ਜਾਂ ਲਿੰਕ ਦਰਜ ਕਰੋ...",
    verifyNow: "ਹੁਣੇ ਜਾਂਚੋ",
    uploadMedia: "ਮੀਡੀਆ ਅੱਪਲੋਡ ਕਰੋ",
    dashboard: "ਡੈਸ਼ਬੋਰਡ",
    verify: "ਵੈਰੀਫਿਕੇਸ਼ਨ ਇੰਜਣ",
    evidenceGraph: "ਸਬੂਤ ਗ੍ਰਾਫ਼",
    mediaLab: "ਮੀਡੀਆ ਲੈਬ",
    radar: "ਅਫ਼ਵਾਹ ਰਾਡਾਰ",
    reports: "ਰਿਪੋਰਟਾਂ",
    copilot: "ਏਆਈ ਕੋਪਾਇਲਟ",
    liveStats: "ਲਾਈਵ ਜਾਂਚ ਨਿਗਰਾਨ",
    recentInvestigations: "ਹਾਲੀਆ ਜਾਂਚਾਂ",
    howItWorks: "12-ਪੜਾਵੀ ਤਸਦੀਕ ਪ੍ਰਕਿਰਿਆ",
    confidenceTitle: "ਵਿਸ਼ਵਾਸਯੋਗਤਾ ਸਕੋਰ",
    confidenceDisclaimer: "ਇਹ ਸਕੋਰ ਸਬੂਤਾਂ ਦੇ ਆਪਸੀ ਤਾਲਮੇਲ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ।",
    whyTruthLensTitle: "ਟਰੂਥਲੈਂਸ ਨੇ ਇਹ ਫ਼ੈਸਲਾ ਕਿਉਂ ਲਿਆ?",
    quickSummary: "30-ਸਕਿੰਟ ਸਾਰ",
    detailedInvestigation: "ਵਿਸਥਾਰਪੂਰਵਕ ਜਾਂਚ",
    expertView: "ਮਾਹਿਰਾਂ ਦਾ ਨਜ਼ਰੀਆ",
    sourceTrustTitle: "ਸਰੋਤਾਂ ਦੀ ਭਰੋਸੇਯੋਗਤਾ",
    timelineTitle: "ਘਟਨਾਕ੍ਰਮ ਟਾਈਮਲਾਈਨ",
    shareReport: "ਸਾਂਝਾ ਕਰੋ",
    exportReport: "ਸੰਭਾਲੋ",
    verdictLabels: {
      VERIFIED: "ਤਸਦੀਕਸ਼ੁਦਾ (VERIFIED)",
      MOSTLY_SUPPORTED: "ਜ਼ਿਆਦਾਤਰ ਸਹੀ",
      MISLEADING: "ਗੁੰਮਰਾਹਕੁੰਨ",
      UNVERIFIED: "ਗੈਰ-ਤਸਦੀਕਸ਼ੁਦਾ",
      FALSE: "ਝੂਠ / ਖੰਡਿਤ",
      MANIPULATED_MEDIA: "ਛੇੜਛਾੜ ਕੀਤਾ ਮੀਡੀਆ",
      INSUFFICIENT_EVIDENCE: "ਨਾਕਾਫ਼ੀ ਸਬੂਤ",
    },
    sampleClaims: []
  },
  ur: {
    tagline: "یقین کرنے سے پہلے، تصدیق کریں۔",
    heroTitle: "شیئر کرنے سے پہلے، تصدیق کریں۔",
    heroSubtitle: "ٹروتھ لینس اے آئی ڈیجیٹل معلومات کی سچائی جانچنے کے لیے دعووں، ذرائع، تصاویر اور ویڈیوز کا تفصیلی تجزیہ کرتا ہے۔",
    inputPlaceholder: "خبر، سوشل میڈیا پوسٹ یا لنک درج کریں...",
    verifyNow: "ابھی تصدیق کریں",
    uploadMedia: "میڈیا اپ لوڈ کریں",
    dashboard: "ڈیش بورڈ",
    verify: "تصدیقی انجن",
    evidenceGraph: "شواہد کا گراف",
    mediaLab: "میڈیا لیب",
    radar: "غلط معلومات کا راڈار",
    reports: "رپورٹس",
    copilot: "اے آئی معاون",
    liveStats: "براہ راست تجزیاتی سگنلز",
    recentInvestigations: "حالیہ تحقیقات",
    howItWorks: "12 مرحلہ وار تصدیقی عمل",
    confidenceTitle: "اعتماد کا اسکور",
    confidenceDisclaimer: "اعتماد کا اسکور دستیاب شواہد کے باہمی ربط کو ظاہر کرتا ہے۔",
    whyTruthLensTitle: "ٹروتھ لینس نے یہ فیصلہ کیوں کیا؟",
    quickSummary: "30 سیکنڈ کا خلاصہ",
    detailedInvestigation: "تفصیلی تفتیش",
    expertView: "ماہرین کا تجزیاتی زاویہ",
    sourceTrustTitle: "ذرائع کی ساکھ",
    timelineTitle: "پھیلاؤ کی ٹائم لائن",
    shareReport: "رپورٹ شیئر کریں",
    exportReport: "ایکسپورٹ کریں",
    verdictLabels: {
      VERIFIED: "تصدیق شدہ (VERIFIED)",
      MOSTLY_SUPPORTED: "زیادہ تر درست",
      MISLEADING: "گمراہ کن / سیاق و سباق سے باہر",
      UNVERIFIED: "غیر تصدیق شدہ",
      FALSE: "جھوٹ / باطل",
      MANIPULATED_MEDIA: "جعلی / ترمیم شدہ میڈیا",
      INSUFFICIENT_EVIDENCE: "ناکافی شواہد",
    },
    sampleClaims: []
  }
};

export type LanguageOption = LanguageMeta;

export function getTranslation(langCode: string, key?: string): any {
  const dict = TRANSLATIONS[langCode] || TRANSLATIONS['en'];
  if (!key) return dict;
  if (dict.verdictLabels && key in dict.verdictLabels) {
    return dict.verdictLabels[key];
  }
  if (key in dict) {
    return (dict as any)[key];
  }
  const defaults: Record<string, string> = {
    pasteClaim: 'Paste Claim',
    enterUrl: 'Enter URL',
    uploadImage: 'Upload Image',
    uploadVideo: 'Upload Video',
    askQuestion: 'Ask Question',
    batchAnalyze: 'Batch Analyze',
    verifyClaim: 'Verify Claim',
  };
  return defaults[key] || (TRANSLATIONS['en'] as any)[key] || key;
}

