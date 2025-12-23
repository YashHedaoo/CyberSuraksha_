export type Language = 'en' | 'hi' | 'mr' | 'te' | 'ta' | 'kn' | 'bn' | 'gu';

const safetyEn = {
    title: "Safety Resources",
    subtitle: "Knowledge is your first line of defense. Explore guides to stay safe online.",
    searchPlaceholder: "Search guides (e.g. 'bank', 'instagram')...",
    noResults: "No guides found matching",
    readMore: "Read More",
    categories: {
        Financial: "Financial",
        Social: "Social Media",
        Legal: "Legal",
        Tech: "Device Security"
    },
    // ... articles kept simple for brevity in this update, assuming they are fetched or static
    articles: [
        {
            title: "Spotting Phishing Scams",
            desc: "Learn how to identify fake emails and SMS that pretend to be from banks or officials.",
            tips: ["Check the sender's email address", "Look for spelling errors", "Never click on suspicious links"]
        },
        {
            title: "Secure Your UPI App",
            desc: "Best practices to keep your PhonePe, GPay, and Paytm accounts safe from hackers.",
            tips: ["Set a strong MPIN", "Don't share screen usage", "Turn on two-factor authentication"]
        },
        {
            title: "Safe Social Media Habits",
            desc: "Protect your identity on Instagram and Facebook from impersonators.",
            tips: ["Lock your profile", "Don't accept unknown requests", "Use strong passwords"]
        },
        {
            title: "ATM Card Hygiene",
            desc: "Prevent skimming and card cloning while withdrawing cash.",
            tips: ["Cover the keypad while entering PIN", "Check for card skimming devices", "Change PIN regularly"]
        }
    ]
};

// ... (Rest of existing sub-objects like aiEn, widgetsEn kept implicitly) ... 
// Redefining complete objects to ensure type safety.

const commonEn = {
    welcome: "Welcome back",
    loading: "Loading...",
    submit: "Submit",
    next: "Next",
    back: "Back",
    status: "Status",
    date: "Date",
    actions: "Actions",
    filter: "Filter",
    export: "Export Report",
    verify: "Verify",
    unknown: "Unknown"
};

const navEn = {
    home: "Home",
    overview: "Overview",
    fileComplaint: "File Complaint",
    myComplaints: "My Complaints",
    safety: "Awareness Hub",
    settings: "Settings",
    logout: "Log Out",
    policeDashboard: "Case Management",
    ai: "AI Assistant",
    verify: "Verify Tool",
    scamDetector: "Scam Detector",
    heatmap: "Heatmap",
    legalAid: "Legal Aid",
    smsReport: "SMS Report",
    quiz: "Cyber Quiz",
    tools: "Tools"
};

const seniorModeEn = {
    title: "SIMPLE MODE ACTIVATED",
    subtitle: "Easier interface for seniors and easy accessibility.",
    emergency: "REPORT EMERGENCY",
    scamCheck: "CHECK FOR SCAM",
    verify: "VERIFY NUMBER",
    needHelp: "NEED HELP?",
    helplineDesc: "National Cyber Helpline"
};

const panicButtonEn = {
    title: "ONE-TAP LOCK",
    activeTitle: "ACCOUNTS SECURED",
    desc: "Suspect a hack? Instantly freeze your linked bank accounts and UPI IDs.",
    activeDesc: "Simulation: Requests sent to HDFC, SBI, and Axis Bank. Your accounts are temporarily frozen.",
    button: "FREEZE ALL NOW",
    reset: "Reset Simulation"
};

const toolsEn = {
    smsTitle: "High-Speed Offline Reporter",
    smsDesc: "No Internet? No Problem. Generate a code to report directly via SMS to 1930.",
    bankLabel: "Bank Name / Wallet",
    amountLabel: "Amount Lost (₹)",
    fraudType: "Fraud Type",
    generate: "Copy Code & Open SMS",
    heatmapTitle: "Live Cyber Crime Heatmap",
    heatmapDesc: "Real-time visualization of reported cyber incidents across India.",
    legalTitle: "Instant Legal Aid Matcher",
    legalDesc: "Find verified lawyers and NGOs specializing in your specific type of cyber crime.",
    incidentType: "What type of incident did you face?",
    findLawyer: "Find Experts"
};

const en = {
    nav: navEn,
    auth: {
        citizenTitle: "CyberSuraksha Login",
        citizenSubtitle: "Secure access for citizens to report incidents",
        policeTitle: "Officer Portal",
        policeSubtitle: "Law Enforcement Agency Access Only",
        email: "Email / Mobile Number",
        password: "Password",
        badge: "Badge Number",
        pin: "Secure Pin",
        loginCitizen: "Login as Demo Citizen",
        loginPolice: "Login to Dashboard",
        demoMode: "Demo Mode Enabled: No password required.",
        notAccount: "Don't have an account?",
        register: "Register Now",
        areYouPolice: "Are you a Police Officer?",
        policeLink: "Officer Login Here",
        returnCitizen: "Return to Citizen Portal",
        authenticating: "Authenticating..."
    },
    common: commonEn,
    dashboard: {
        title: "Dashboard",
        subtitle: "Here's what's happening today.",
        newComplaint: "File New Complaint",
        totalReports: "Total Reports",
        pending: "Pending Review",
        inProgress: "In Progress",
        resolved: "Resolved Cases",
        recentActivity: "Recent Activity",
        noActivity: "No recent activity found.",
        viewAll: "View All Complaints",
        aiTool: "AI Fraud Detector",
        aiDesc: "Analyze suspicious text instantly.",
        emergency: "Emergency Contacts",
        analyze: "Analyze Text",
        sos: "SOS / Panic Button",
        liveAlerts: "LIVE ALERTS",
        alerts: [
            "⚠️ RBI warns against fake electricity bill SMS.",
            "🛡️ Update Chrome browser to latest version immediately.",
            "🚫 Do not share OTP with anyone calling from 'Bank Support'."
        ]
    },
    complaint: {
        steps: {
            category: "Category & Urgency",
            details: "Incident Details",
            location: "Location & Time",
            evidence: "Evidence",
            review: "Review"
        },
        success: "Report Submitted Successfully"
    },
    safety: safetyEn, // Explicitly keeping safetyEn structure but simplified
    ai: {}, // Placeholder to keep existing structure valid if extended later
    widgets: {
        safetyScore: "Safety Score",
        safetyLevel: "Safe",
        class: "Reports",
        downloadReport: "Download PDF"
    },
    seniorMode: seniorModeEn,
    panicButton: panicButtonEn,
    tools: toolsEn
};

const hi = {
    nav: {
        home: "होम",
        overview: "अवलोकन",
        fileComplaint: "शिकायत दर्ज करें",
        myComplaints: "मेरी शिकायतें",
        safety: "जागरूकता हब",
        settings: "सेटिंग्स",
        logout: "लॉग आउट",
        policeDashboard: "केस प्रबंधन",
        ai: "AI सहायक",
        verify: "सत्यापन टूल",
        scamDetector: "स्कैम डिटेक्टर",
        heatmap: "हीटमैप",
        legalAid: "कानूनी सहायता",
        smsReport: "SMS रिपोर्ट",
        quiz: "साइबर प्रश्नोत्तरी",
        tools: "टूल्स"
    },
    auth: {
        citizenTitle: "सााइबर सुरक्षा लॉगिन",
        citizenSubtitle: "नागरिकों के लिए सुरक्षित पोर्टल",
        policeTitle: "अधिकारी पोर्टल",
        policeSubtitle: "केवल कानून प्रवर्तन के लिए",
        email: "ईमेल / मोबाइल नंबर",
        password: "पासवर्ड",
        badge: "बैज नंबर",
        pin: "सुरक्षित पिन",
        loginCitizen: "डेमो नागरिक के रूप में लॉगिन करें",
        loginPolice: "डैशबोर्ड में लॉगिन करें",
        demoMode: "डेमो मोड सक्रिय: पासवर्ड की आवश्यकता नहीं।",
        notAccount: "खाता नहीं है?",
        register: "अभी रजिस्टर करें",
        areYouPolice: "क्या आप पुलिस अधिकारी हैं?",
        policeLink: "अधिकारी लॉगिन यहाँ",
        returnCitizen: "नागरिक पोर्टल पर वापस",
        authenticating: "प्रमाणीकरण हो रहा है..."
    },
    common: {
        welcome: "वापसी पर स्वागत है",
        loading: "लोड हो रहा है...",
        submit: "जमा करें",
        next: "अगला",
        back: "वापस",
        status: "स्थिति",
        date: "दिनांक",
        actions: "कार्रवाई",
        filter: "फ़िल्टर",
        export: "रिपोर्ट निर्यात",
        verify: "सत्यापित करें",
        unknown: "अज्ञात"
    },
    dashboard: {
        title: "डैशबोर्ड",
        subtitle: "आज की ताजा स्थिति यहाँ है।",
        newComplaint: "नई शिकायत दर्ज करें",
        totalReports: "कुल रिपोर्ट",
        pending: "समीक्षा लंबित",
        inProgress: "जांच जारी",
        resolved: "सुलझाए गए मामले",
        recentActivity: "हाल की गतिविधि",
        noActivity: "कोई हालिया गतिविधि नहीं मिली।",
        viewAll: "सभी शिकायतें देखें",
        aiTool: "AI धोखाधड़ी डिटेक्टर",
        aiDesc: "संदेहास्पद पाठ का तुरंत विश्लेषण करें।",
        emergency: "आपातकालीन संपर्क",
        analyze: "विश्लेषण करें",
        sos: "SOS / आपातकालीन बटन",
        liveAlerts: "ताज़ा खबरें",
        alerts: [
            "⚠️ बिजली बिल के फर्जी एसएमएस से सावधान रहें।",
            "🛡️ अपने ब्राउज़र को तुरंत अपडेट करें।",
            "🚫 बैंक से कॉल करने वाले किसी भी व्यक्ति के साथ OTP साझा न करें।"
        ]
    },
    complaint: {
        steps: {
            category: "श्रेणी और महत्व",
            details: "विवरण",
            location: "स्थान",
            evidence: "सबूत",
            review: "समीक्षा"
        },
        success: "रिपोर्ट सफल"
    },
    safety: safetyEn,
    ai: {},
    widgets: {
        safetyScore: "सुरक्षा स्कोर",
        safetyLevel: "सुरक्षित",
        class: "रिपोर्ट्स",
        downloadReport: "PDF डाउनलोड करें"
    },
    seniorMode: {
        title: "सरल मोड सक्रिय",
        subtitle: "वरिष्ठ नागरिकों के लिए आसान इंटरफ़ेस।",
        emergency: "आपातकालीन रिपोर्ट",
        scamCheck: "स्कैम चेक करें",
        verify: "नंबर सत्यापित करें",
        needHelp: "मदद चाहिए?",
        helplineDesc: "राष्ट्रीय साइबर हेल्पलाइन"
    },
    panicButton: {
        title: "वन-टैप लॉक",
        activeTitle: "खाते सुरक्षित",
        desc: "हैक का संदेह है? अपने लिंक किए गए बैंक खातों और UPI आईडी को तुरंत फ्रीज करें।",
        activeDesc: "सिमुलेशन: HDFC, SBI और Axis Bank को अनुरोध भेजे गए। आपके खाते अस्थायी रूप से फ्रीज हैं।",
        button: "सभी फ्रीज करें",
        reset: "रीसेट करें"
    },
    tools: {
        smsTitle: "हाई-स्पीड ऑफलाइन रिपोर्टर",
        smsDesc: "इंटरनेट नहीं है? कोई समस्या नहीं। 1930 पर सीधे SMS रिपोर्ट करने के लिए कोड जनरेट करें।",
        bankLabel: "बैंक का नाम / वॉलेट",
        amountLabel: "खोई हुई राशि (₹)",
        fraudType: "धोखाधड़ी का प्रकार",
        generate: "कोड कॉपी करें और SMS खोलें",
        heatmapTitle: "लाइव साइबर अपराध हीटमैप",
        heatmapDesc: "पूरे भारत में रिपोर्ट की गई साइबर घटनाओं का वास्तविक समय दृश्य।",
        legalTitle: "तत्काल कानूनी सहायता",
        legalDesc: "अपने विशिष्ट प्रकार के साइबर अपराध में विशेषज्ञता रखने वाले वाकीलों और एनजीओ को खोजें।",
        incidentType: "आपने किस प्रकार की घटना का सामना किया?",
        findLawyer: "विशेषज्ञ खोजें"
    }
};

const mr = {
    nav: {
        home: "मुख्यपृष्ठ",
        overview: "आढावा",
        fileComplaint: "तक्रार नोंदवा",
        myComplaints: "माझ्या तक्रारी",
        safety: "सुरक्षा हब",
        settings: "सेटिंग्ज",
        logout: "बाहेर पडा",
        policeDashboard: "केस व्यवस्थापन",
        ai: "AI सहाय्यक",
        verify: "सत्यापन साधन",
        scamDetector: "स्कॅम डिटेक्टर",
        heatmap: "हीटमॅप",
        legalAid: "कायदेशीर मदत",
        smsReport: "SMS रिपोर्ट",
        quiz: "सायबर क्विझ",
        tools: "साधने"
    },
    auth: {
        citizenTitle: "सायबर सुरक्षा लॉगिन",
        citizenSubtitle: "नागरिकांसाठी सुरक्षित पोर्टल",
        policeTitle: "अधिकारी पोर्टल",
        policeSubtitle: "केवळ कायदे अंमलबजावणीसाठी",
        email: "ईमेल / मोबाईल नंबर",
        password: "पासवर्ड",
        badge: "बॅज नंबर",
        pin: "सुरक्षित पिन",
        loginCitizen: "डेमो नागरिक म्हणून लॉगिन करा",
        loginPolice: "डॅशबोर्डमध्ये लॉगिन करा",
        demoMode: "डेमो मोड सक्रिय: पासवर्ड आवश्यक नाही.",
        notAccount: "खाते नाही?",
        register: "आताच नोंदणी करा",
        areYouPolice: "तुम्ही पोलीस अधिकारी आहात का?",
        policeLink: "अधिकारी लॉगिन येथे",
        returnCitizen: "नागरिक पोर्टलवर परत",
        authenticating: "प्रमाणित करत आहे..."
    },
    common: {
        welcome: "पुन्हा स्वागत आहे",
        loading: "लोड होत आहे...",
        submit: "सबमिट करा",
        next: "पुढे",
        back: "मागे",
        status: "स्थिती",
        date: "तारीख",
        actions: "कृती",
        filter: "फिल्टर",
        export: "रिपोर्ट निर्यात करा",
        verify: "सत्यापित करा",
        unknown: "अज्ञात"
    },
    dashboard: {
        title: "डॅशबोर्ड",
        subtitle: "आजची स्थिती येथे आहे.",
        newComplaint: "नवीन तक्रार नोंदवा",
        totalReports: "एकूण रिपोर्ट",
        pending: "प्रलंबित पुनरावलोकन",
        inProgress: "तपास सुरू",
        resolved: "सोडवलेली प्रकरणे",
        recentActivity: "अलीकडील हालचाली",
        noActivity: "कोणतीही अलीकडील हालचाल आढळली नाही.",
        viewAll: "सर्व तक्रारी पहा",
        aiTool: "AI फसवणूक डिटेक्टर",
        aiDesc: "संशयास्पद मजकूर त्वरित विश्लेषित करा.",
        emergency: "आपत्कालीन संपर्क",
        analyze: "विश्लेषण करा",
        sos: "SOS / पॅनिक बटण",
        liveAlerts: "थेट सतर्कता",
        alerts: [
            "⚠️ वीज बिलाच्या बनावट SMS पासून सावध राहा.",
            "🛡️ तुमचा ब्राउझर त्वरित अद्यतनित करा.",
            "🚫 बँक सपोर्टच्या नावाखाली कोणालाही OTP शेअर करू नका."
        ]
    },
    complaint: {
        steps: {
            category: "श्रेणी आणि निकड",
            details: "तपशील",
            location: "स्थान",
            evidence: "पुरावा",
            review: "पुनरावलोकन"
        },
        success: "रिपोर्ट यशस्वीरित्या सबमिट केली"
    },
    safety: {
        title: "सुरक्षा संसाधने",
        subtitle: "ज्ञान ही तुमची पहिली संरक्षक फळी आहे. सुरक्षित राहण्यासाठी मार्गदर्शक वाचा.",
        searchPlaceholder: "मार्गदर्शक शोधा (उदा. 'बँक', 'इंस्टाग्राम')...",
        noResults: "काहीही सापडले नाही",
        readMore: "अधिक वाचा",
        categories: {
            Financial: "आर्थिक",
            Social: "सोशल मीडिया",
            Legal: "कायदेशीर",
            Tech: "डिव्हाइस सुरक्षा"
        },
        articles: [
            {
                title: "फिशिंग स्कॅम्स ओळखणे",
                desc: "बँक किंवा अधिकारी असल्याचे भासवून येणारे बनावट ईमेल आणि SMS कसे ओळखायचे ते शिका.",
                tips: ["प्रेषकाचा ईमेल तपासा", "शुद्धलेखनाच्या चुका शोधा", "संशयास्पद लिंकवर क्लिक करू नका"]
            },
            {
                title: "UPI ॲप सुरक्षित करा",
                desc: "PhonePe, GPay आणि Paytm हॅकर्सपासून सुरक्षित ठेवण्यासाठी सर्वोत्तम उपाय.",
                tips: ["मजबूत MPIN सेट करा", "स्क्रीन शेअरिंग टाळा", "टू-फॅक्टर ऑथेंटिकेशन चालू करा"]
            },
            {
                title: "सोशल मीडिया सवयी",
                desc: "इंस्टाग्राम आणि फेसबुकवर आपली ओळख सुरक्षित ठेवा.",
                tips: ["प्रोफाइल लॉक करा", "अनोळखी रिक्वेस्ट स्वीकारू नका", "मजबूत पासवर्ड वापरा"]
            },
            {
                title: "ATM कार्ड सुरक्षा",
                desc: "पैसे काढताना स्किमिंग आणि कार्ड क्लोनिंगपासून सावध राहा.",
                tips: ["पिन टाकताना कीपॅड झाकून ठेवा", "स्किमिंग डिव्हाइस तपासा", "नियमितपणे पिन बदला"]
            }
        ]
    },
    ai: {},
    widgets: {
        safetyScore: "सुरक्षा स्कोर",
        safetyLevel: "सुरक्षित",
        class: "रिपोर्ट्स",
        downloadReport: "PDF डाउनलोड करा"
    },
    seniorMode: {
        title: "सोपा मोड सक्रिय",
        subtitle: "ज्येष्ठ नागरिकांसाठी सोपा इंटरफेस.",
        emergency: "तात्काळ रिपोर्ट",
        scamCheck: "स्कॅम तपासा",
        verify: "नंबर तपासा",
        needHelp: "मदत हवी?",
        helplineDesc: "राष्ट्रीय सायबर हेल्पलाइन"
    },
    panicButton: {
        title: "वन-टॅप लॉक",
        activeTitle: "खाते सुरक्षित",
        desc: "हॅकचा संशय आहे? लिंक केलेली बँक खाती आणि UPI आयडी त्वरित गोठवा.",
        activeDesc: "सिम्युलेशन: HDFC, SBI आणि Axis Bank ला विनंती पाठविली. खाती तात्पुरती गोठविली.",
        button: "सर्व फ्रीझ करा",
        reset: "रीसेट करा"
    },
    tools: {
        smsTitle: "हाय-स्पीड ऑफलाइन रिपोर्टर",
        smsDesc: "इंटरनेट नाही? काही हरकत नाही. 1930 वर थेट SMS रिपोर्ट करण्यासाठी कोड जनरेट करा.",
        bankLabel: "बँकेचे नाव / वॉलेट",
        amountLabel: "गमावलेली रक्कम (₹)",
        fraudType: "फसवणुकीचा प्रकार",
        generate: "कोड कॉपी करा आणि SMS उघडा",
        heatmapTitle: "लाईव्ह सायबर क्राईम हीटमॅप",
        heatmapDesc: "भारतातील सायबर घटनांचे रिअल-टाइम व्हिज्युअलायझेशन.",
        legalTitle: "त्वरित कायदेशीर मदत",
        legalDesc: "तुमच्या विशिष्ट सायबर गुन्ह्यात तज्ञ वकील आणि NGO शोधा.",
        incidentType: "तुम्ही कोणत्या प्रकारच्या घटनेचा सामना केला?",
        findLawyer: "तज्ञ शोधा"
    }
};

const te = {
    nav: {
        home: "హోమ్",
        overview: "అవలోకనం",
        fileComplaint: "ఫిర్యాదు చేయండి",
        myComplaints: "నా ఫిర్యాదులు",
        safety: "అవగాహన కేంద్రం",
        settings: "సిట్టింగ్స్",
        logout: "లాగ్ అవుట్",
        policeDashboard: "కేసు నిర్వహణ",
        ai: "AI అసిస్టెంట్",
        verify: "వెరిఫై టూల్",
        scamDetector: "స్కామ్ డిటెక్టర్",
        heatmap: "హీట్‌మ్యాప్",
        legalAid: "న్యాయ సహాయం",
        smsReport: "SMS నివేదిక",
        quiz: "సైబర్ క్విజ్",
        tools: "సాధనాలు"
    },
    auth: {
        citizenTitle: "సైబర్ సురక్ష లాగిన్",
        citizenSubtitle: "పౌరులకు సురక్షితమైన పోర్టల్",
        policeTitle: "పోలీసు పోర్టల్",
        policeSubtitle: "చట్ట అమలు కోసం మాత్రమే",
        email: "ఇమెయిల్ / మొబైల్ నంబర్",
        password: "పాస్‌వర్డ్",
        badge: "బ్యాడ్జ్ నంబర్",
        pin: "సురక్షిత పిన్",
        loginCitizen: "డెమో సిటిజన్‌గా లాగిన్ చేయండి",
        loginPolice: "డ్యాష్‌బోర్డ్‌లోకి లాగిన్ చేయండి",
        demoMode: "డెమో మోడ్ ఆన్: పాస్‌వర్డ్ అవసరం లేదు.",
        notAccount: "ఖాతా లేదా?",
        register: "ఇప్పుడే నమోదు చేసుకోండి",
        areYouPolice: "మీరు పోలీసు అధికారా?",
        policeLink: "అధికారి లాగిన్ ఇక్కడ",
        returnCitizen: "సిటిజన్ పోర్టల్‌కు తిరిగి వెళ్లు",
        authenticating: "ధృవీకరిస్తోంది..."
    },
    common: {
        welcome: "స్వాగతం",
        loading: "లోడ్ అవుతోంది...",
        submit: "సమర్పించు",
        next: "తరువాత",
        back: "వెనుకకు",
        status: "స్థితి",
        date: "తేదీ",
        actions: "చర్యలు",
        filter: "ఫిల్టర్",
        export: "నివేదికను ఎగుమతి చేయి",
        verify: "నిర్ధారించండి",
        unknown: "తెలియదు"
    },
    dashboard: {
        title: "డ్యాష్‌బోర్డ్",
        subtitle: "నేటి స్థితి ఇక్కడ ఉంది.",
        newComplaint: "కొత్త ఫిర్యాదు చేయండి",
        totalReports: "మొత్తం నివేదికలు",
        pending: "పెండింగ్‌లో ఉంది",
        inProgress: "పురోగతిలో ఉంది",
        resolved: "పరిష్కరించబడిన కేసులు",
        recentActivity: "ఇటీవలి కార్యకలాపాలు",
        noActivity: "ఇటీవలి కార్యకలాపాలు ఏవీ లేవు.",
        viewAll: "అన్ని ఫిర్యాదులను చూడండి",
        aiTool: "AI మోసం డిటెక్టర్",
        aiDesc: "అనుమానాస్పద వచనాన్ని తక్షణమే విశ్లేషించండి.",
        emergency: "అత్యవసర చిరునామాలు",
        analyze: "విశ్లేషించు",
        sos: "SOS / పానిక్ బటన్",
        liveAlerts: "లైవ్ హెచ్చరికలు",
        alerts: [
            "⚠️ విద్యుత్ బిల్లు నకిలీ SMS పట్ల జాగ్రత్త వహించండి.",
            "🛡️ మీ బ్రౌజర్‌ను తక్షణమే అప్‌డేట్ చేయండి.",
            "🚫 బ్యాంక్ సపోర్ట్ అని చెప్పే ఎవరికీ OTP చెప్పకండి."
        ]
    },
    complaint: {
        steps: {
            category: "వర్గం & అత్యవసరరా",
            details: "వివరాలు",
            location: "స్థానం",
            evidence: "సాక్ష్యం",
            review: "సమీక్ష"
        },
        success: "నివేదిక విజయవంతంగా సమర్పించబడింది"
    },
    safety: {
        title: "రక్షణ వనరులు",
        subtitle: "జ్ఞానమే మీ మొదటి రక్షణ. ఆన్‌లైన్‌లో సురక్షితంగా ఉండటానికి గైడ్స్ చదవండి.",
        searchPlaceholder: "శోధించండి (ఉదా. 'బ్యాంక్')...",
        noResults: "ఫలితాలు లేవు",
        readMore: "మరింత చదవండి",
        categories: {
            Financial: "ఆర్థిక",
            Social: "సోషల్ మీడియా",
            Legal: "చట్టపరమైన",
            Tech: "పరికరం భద్రత"
        },
        articles: [
            {
                title: "ఫిషింగ్ మోసాలను గుర్తించడం",
                desc: "బ్యాంకులు లేదా అధికారుల నుండి వచ్చినట్లు నకిలీ ఇమెయిల్స్ మరియు SMS లను ఎలా గుర్తించాలో తెలుసుకోండి.",
                tips: ["పంపినవారి ఇమెయిల్ తనిఖీ చేయండి", "అక్షరదోషాలను గమనించండి", "అనుమానాస్పద లింక్‌లను క్లిక్ చేయవద్దు"]
            },
            {
                title: "మీ UPI యాప్‌ను సురక్షితం చేయండి",
                desc: "PhonePe, GPay మరియు Paytm ఖాతాలను హ్యాకర్ల నుండి సురక్షితంగా ఉంచడానికి ఉత్తమ పద్ధతులు.",
                tips: ["బలమైన MPIN సెట్ చేయండి", "స్క్రీన్ షేరింగ్ ఇవ్వకండి", "టూ-ఫ్యాక్టర్ ఆథెంటికేషన్ ఆన్ చేయండి"]
            },
            {
                title: "సురక్షిత సోషల్ మీడియా",
                desc: "ఇnstagram మరియు Facebook లో మీ గుర్తింపును కాపాడుకోండి.",
                tips: ["ప్రొఫైల్ లాక్ చేయండి", "తెలియని వారిని యాడ్ చేయవద్దు", "బలమైన పాస్‌వర్డ్‌లను వాడండి"]
            },
            {
                title: "ATM కార్డు జాగ్రత్తలు",
                desc: "డబ్బు తీసుకునేటప్పుడు స్కిమ్మింగ్ మరియు క్లోనింగ్ నుండి జాగ్రత్తగా ఉండండి.",
                tips: ["పిన్ ఎంటర్ చేసేటప్పుడు కీప్యాడ్ దాచండి", "స్కిమ్మింగ్ పరికరాల కోసం తనిఖీ చేయండి", "తరచుగా పిన్ మార్చండి"]
            }
        ]
    },
    ai: {},
    widgets: {
        safetyScore: "రక్షణ స్కోర్",
        safetyLevel: "సురక్షితం",
        class: "నివేదికలు",
        downloadReport: "PDF డౌన్‌లోడ్"
    },
    seniorMode: {
        title: "సింపుల్ మోడ్ యాక్టివేటెడ్",
        subtitle: "సీనియర్ సిటిజన్లకు సులభమైన ఇంటర్ఫేస్.",
        emergency: "అత్యవసర నివేదిక",
        scamCheck: "స్కామ్ చెక్",
        verify: "నంబర్ వెరిఫై",
        needHelp: "సహాయం కావాలా?",
        helplineDesc: "జాతీయ సైబర్ హెల్ప్‌లైన్"
    },
    panicButton: {
        title: "వన్-ట్యాప్ లాక్",
        activeTitle: "ఖాతాలు సురక్షితం",
        desc: "హ్యాక్ అనుమానం ఉందా? లింక్ చేసిన బ్యాంక్ ఖాతాలు మరియు UPI ID లను తక్షణమే స్తంభింపజేయండి.",
        activeDesc: "సిములేషన్: HDFC, SBI మరియు Axis Bank కు అభ్యర్థనలు పంపబడ్డాయి. ఖాతాలు తాత్కాలికంగా స్తంభింపజేయబడ్డాయి.",
        button: "అన్నీ ఫ్రీజ్ చేయండి",
        reset: "రీసెట్"
    },
    tools: {
        smsTitle: "హై-స్పీడ్ ఆఫ్‌లైన్ రిపోర్టర్",
        smsDesc: "ఇంటర్నెట్ లేదా? పర్వాలేదు. 1930 కి నేరుగా SMS నివేదిక పంపడానికి కోడ్ రూపొందించండి.",
        bankLabel: "బ్యాంక్ పేరు / వాలెట్",
        amountLabel: "కోల్పోయిన మొత్తం (₹)",
        fraudType: "మోసం రకం",
        generate: "కోడ్ కాపీ & SMS తెరవండి",
        heatmapTitle: "లైవ్ సైబర్ క్రైమ్ హీట్‌మ్యాప్",
        heatmapDesc: "భారతదేశం అంతటా సైబర్ సంఘటనల రియల్ టైమ్ విజువలైజేషన్.",
        legalTitle: "తక్షణ న్యాయ సహాయం",
        legalDesc: "మీ నిర్దిష్ట సైబర్ క్రైమ్ రకంలో నిపుణులైన లాయర్లు మరియు NGO లను కనుగొనండి.",
        incidentType: "మీరు ఎలాంటి సంఘటనను ఎదుర్కొన్నారు?",
        findLawyer: "నిపుణులను కనుగొనండి"
    }
};

const ta = {
    nav: {
        home: "முகப்பு",
        overview: "கண்ணோட்டம்",
        fileComplaint: "புகார் அளிக்கவும்",
        myComplaints: "என் புகார்கள்",
        safety: "விழிப்புணர்வு மையம்",
        settings: "அமைப்புகள்",
        logout: "வெளியேறு",
        policeDashboard: "வழக்கு மேலாண்மை",
        ai: "AI உதவியாளர்",
        verify: "சரிபார்ப்பு கருவி",
        scamDetector: "மோசடி கண்டுபிடிப்பான்",
        heatmap: "ஹீட்மேப்",
        legalAid: "சட்ட உதவி",
        smsReport: "SMS அறிக்கை",
        quiz: "சைபர் வினாடி வினா",
        tools: "கருவிகள்"
    },
    auth: {
        citizenTitle: "சைபர் சுரக்ஷா உள்நுழைவு",
        citizenSubtitle: "குடிமக்களுக்கான பாதுகாப்பான தளம்",
        policeTitle: "அதிகாரி தளம்",
        policeSubtitle: "சட்ட அமலாக்கத்திற்கு மட்டும்",
        email: "மின்னஞ்சல் / மொபைல் எண்",
        password: "கடவுச்சொல்",
        badge: "பேட்ஜ் எண்",
        pin: "பாதுகாப்பு பின்",
        loginCitizen: "நடைமுறை குடிமகனாக உள்நுழையவும்",
        loginPolice: "டாஷ்போர்டில் உள்நுழையவும்",
        demoMode: "டெமோ முறை இயக்கப்பட்டது: கடவுச்சொல் தேவையில்லை.",
        notAccount: "கணக்கு இல்லையா?",
        register: "இப்போதே பதிவு செய்யவும்",
        areYouPolice: "நீங்கள் காவல் அதிகாரியா?",
        policeLink: "அதிகாரி உள்நுழைவு இங்கே",
        returnCitizen: "குடிமகன் தளத்திற்கு திரும்பு",
        authenticating: "சரிபார்க்கிறது..."
    },
    common: {
        welcome: "மீண்டும் வருக",
        loading: "ஏற்றுகிறது...",
        submit: "சமர்ப்பிக்கவும்",
        next: "அடுத்து",
        back: "பின்னால்",
        status: "நிலை",
        date: "தேதி",
        actions: "செயல்கள்",
        filter: "வடிகட்டி",
        export: "அறிக்கை ஏற்றுமதி",
        verify: "சரிபார்க்கவும்",
        unknown: "தெரியாதது"
    },
    dashboard: {
        title: "டாஷ்போர்டு",
        subtitle: "இன்றைய நிலவரம் இங்கே.",
        newComplaint: "புதிய புகார் அளிக்கவும்",
        totalReports: "மொத்த அறிக்கைகள்",
        pending: "நிலுவையில் உள்ளது",
        inProgress: "செயல்பாட்டில் உள்ளது",
        resolved: "தீர்க்கப்பட்ட வழக்குகள்",
        recentActivity: "சமீபத்திய செயல்பாடுகள்",
        noActivity: "சமீபத்திய செயல்பாடுகள் எதுவும் இல்லை.",
        viewAll: "அனைத்து புகார்களையும் காண்க",
        aiTool: "AI மோசடி கண்டுபிடிப்பான்",
        aiDesc: "சந்தேகத்திற்குரிய உரையை உடனடியாக பகுப்பாய்வு செய்யவும்.",
        emergency: "அவசர தொடர்புகள்",
        analyze: "பகுப்பாய்வு",
        sos: "SOS / அவசர பொத்தான்",
        liveAlerts: "நேரடி எச்சரிக்கைகள்",
        alerts: [
            "⚠️ போலி மின் கட்டண SMS குறித்து எச்சரிக்கையாக இருங்கள்.",
            "🛡️ உங்கள் உலாவியை உடனடியாக புதுப்பிக்கவும்.",
            "🚫 வங்கி ஆதரவிலிருந்து என்று கூறி அழைக்கும் எவரிடமும் OTP பகிர வேண்டாம்."
        ]
    },
    complaint: {
        steps: {
            category: "வகை & அவசரம்",
            details: "விவரங்கள்",
            location: "இடம்",
            evidence: "ஆதாரம்",
            review: "மதிப்பாய்வு"
        },
        success: "அறிக்கை வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது"
    },
    safety: {
        title: "பாதுகாப்பு வளங்கள்",
        subtitle: "அறிவே உங்கள் முதல் பாதுகாப்பு. ஆன்லைனில் பாதுகாப்பாக இருக்க வழிகாட்டிகளைப் படியுங்கள்.",
        searchPlaceholder: "தேடுக (உ.தா. 'வங்கி')...",
        noResults: "முடிவுகள் இல்லை",
        readMore: "மேலும் படிக்க",
        categories: {
            Financial: "நிதி",
            Social: "சமூக ஊடகம்",
            Legal: "சட்ட",
            Tech: "சாதன பாதுகாப்பு"
        },
        articles: [
            {
                title: "பிஷிங் மோசடிகளை கண்டறிதல்",
                desc: "வங்கி அல்லது அதிகாரிகளிடமிருந்து வருவது போன்ற போலி மின்னஞ்சல்கள் மற்றும் SMSகளை அடையாளம் காண கற்றுக்கொள்ளுங்கள்.",
                tips: ["அனுப்புநரின் மின்னஞ்சலைச் சரிபார்க்கவும்", "எழுத்துப்பிழைகளைத் தேடுங்கள்", "சந்தேகத்திற்கிடமான இணைப்புகளைக் கிளிக் செய்யாதீர்கள்"]
            },
            {
                title: "உங்கள் UPI செயலியைப் பாதுகாக்கவும்",
                desc: "PhonePe, GPay மற்றும் Paytm கணக்குகளை ஹேக்கர்களிடமிருந்து பாதுகாப்பதற்கான சிறந்த வழிகள்.",
                tips: ["வலுவான MPIN அமைக்கவும்", "திரையைப் பகிர வேண்டாம்", "இரட்டை காரணி அங்கீகாரத்தை இயக்கவும்"]
            },
            {
                title: "பாதுகாப்பான சமூக ஊடகப் பழக்கங்கள்",
                desc: "Instagram மற்றும் Facebook இல் உங்கள் அடையாளத்தைப் பாதுகாக்கவும்.",
                tips: ["சுயவிவரத்தைப் பூட்டவும்", "தெரியாத கோரிக்கைகளை ஏற்க வேண்டாம்", "வலுவான கடவுச்சொற்களைப் பயன்படுத்தவும்"]
            },
            {
                title: "ATM அட்டை பாதுகாப்பு",
                desc: "பணம் எடுக்கும்போது ஸ்கிம்மிங் மற்றும் குளோனிங் செய்வதைத் தடுக்கவும்.",
                tips: ["பின் எண்ணை உள்ளிடும்போது விசைப்பலகையை மறைக்கவும்", "ஸ்கிம்மிங் கருவிகளைச் சோதிக்கவும்", "பின் எண்ணை அடிக்கடி மாற்றவும்"]
            }
        ]
    },
    ai: {},
    widgets: {
        safetyScore: "பாதுகாப்பு மதிப்பெண்",
        safetyLevel: "பாதுகாப்பானது",
        class: "அறிக்கைகள்",
        downloadReport: "PDF பதிவிறக்கம்"
    },
    seniorMode: {
        title: "எளிய முறை செயல்படுத்தப்பட்டது",
        subtitle: "முதியவர்களுக்கான எளிய இடைமுகம்.",
        emergency: "அவசர அறிக்கை",
        scamCheck: "மோசடி சோதனை",
        verify: "எண் சரிபார்ப்பு",
        needHelp: "உதவி தேவையா?",
        helplineDesc: "தேசிய சைபர் உதவி எண்"
    },
    panicButton: {
        title: "ஒன்-டேப் லாக்",
        activeTitle: "கணக்குகள் பாதுகாக்கீடு",
        desc: "ஹேக் செய்யப்படுவதாக சந்தேகமா? இணைக்கப்பட்ட வங்கி கணக்குகள் மற்றும் UPI ஐடிகளை உடனடியாக முடக்கவும்.",
        activeDesc: "உருவகப்படுத்துதல்: HDFC, SBI மற்றும் Axis Bank க்கு கோரிக்கைகள் அனுப்பப்பட்டன. கணக்குகள் தற்காலிகமாக முடக்கப்பட்டன.",
        button: "அனைத்தையும் முடக்கு",
        reset: "மீட்டமை"
    },
    tools: {
        smsTitle: "அதிவேக ஆஃப்லைன் ரிப்போர்ட்டர்",
        smsDesc: "இணையம் இல்லையா? பரவாயில்லை. 1930 க்கு நேரடியாக SMS அனுப்ப குறியீட்டை உருவாக்கவும்.",
        bankLabel: "வங்கி பெயர் / பணப்பை",
        amountLabel: "இழந்த தொகை (₹)",
        fraudType: "மோசடி வகை",
        generate: "குறியீட்டை நகலெடுத்து SMS திறக்கவும்",
        heatmapTitle: "நேரடி சைபர் குற்ற ஹீட்மேப்",
        heatmapDesc: "இந்தியா முழுவதும் பதிவாகும் சைபர் சம்பவங்களின் நேரடி காட்சி.",
        legalTitle: "உடனடி சட்ட உதவி",
        legalDesc: "உங்கள் குறிப்பிட்ட சைபர் குற்றத்தில் நிபுணத்துவம் வாய்ந்த வழக்கறிஞர்கள் மற்றும் தொண்டு நிறுவனங்களைக் கண்டறியவும்.",
        incidentType: "நீங்கள் எந்த வகையான சம்பவத்தை எதிர்கொண்டீர்கள்?",
        findLawyer: "நிபுணர்களைத் தேடுங்கள்"
    }
};

const kn = {
    nav: {
        home: "ಮುಖಪುಟ",
        overview: "ಅವಲೋಕನ",
        fileComplaint: "ದೂರು ದಾಖಲಿಸಿ",
        myComplaints: "ನನ್ನ ದೂರುಗಳು",
        safety: "ಜಾಗೃತಿ ಕೇಂದ್ರ",
        settings: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
        logout: "ಲಾಗ್ ಔಟ್",
        policeDashboard: "ಪ್ರಕರಣ ನಿರ್ವಹಣೆ",
        ai: "AI ಸಹಾಯಕ",
        verify: "ಪರಿಶೀಲನಾ ಸಾಧನ",
        scamDetector: "ಸ್ಕ್ಯಾಮ್ ಡಿಟೆಕ್ಟರ್",
        heatmap: "ಹೀಟ್‌ಮ್ಯಾಪ್",
        legalAid: "ಕಾನೂನು ಸಹಾಯ",
        smsReport: "SMS ವರದಿ",
        quiz: "ಸೈಬರ್ ರಸಪ್ರಶ್ನೆ",
        tools: "ಪರಿಕರಗಳು"
    },
    auth: {
        citizenTitle: "ಸೈಬರ್ ಸುರಕ್ಷಾ ಲಾಗಿನ್",
        citizenSubtitle: "ನಾಗರಿಕರಿಗೆ ಸುರಕ್ಷಿತ ಪೋರ್ಟಲ್",
        policeTitle: "ಅಧಿಕಾರಿ ಪೋರ್ಟಲ್",
        policeSubtitle: "ಕಾನೂನು ಜಾರಿಗೆ ಮಾತ್ರ",
        email: "ಇಮೇಲ್ / ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
        password: "ಪಾಸ್‌ವರ್ಡ್",
        badge: "ಬ್ಯಾಡ್ಜ್ ಸಂಖ್ಯೆ",
        pin: "ಸುರಕ್ಷಿತ ಪಿನ್",
        loginCitizen: "ಡೆಮೊ ನಾಗರಿಕನಾಗಿ ಲಾಗಿನ್ ಮಾಡಿ",
        loginPolice: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಲಾಗಿನ್ ಮಾಡಿ",
        demoMode: "ಡೆಮೊ ಮೋಡ್ ಸಕ್ರಿಯ: ಪಾಸ್‌ವರ್ಡ್ ಅಗತ್ಯವಿಲ್ಲ.",
        notAccount: "ಖಾತೆ ಇಲ್ಲವೇ?",
        register: "ಈಗಲೇ ನೋಂದಾಯಿಸಿ",
        areYouPolice: "ನೀವು ಪೊಲೀಸ್ ಅಧಿಕಾರಿಯೇ?",
        policeLink: "ಅಧಿಕಾರಿ ಲಾಗಿನ್ ಇಲ್ಲಿ",
        returnCitizen: "ನಾಗರಿಕ ಪೋರ್ಟಲ್‌ಗೆ ಹಿಂತಿರುಗಿ",
        authenticating: "ದೃಢೀಕರಿಸಲಾಗುತ್ತಿದೆ..."
    },
    common: {
        welcome: "ಸ್ವಾಗತ",
        loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
        submit: "ಸಲ್ಲಿಸಿ",
        next: "ಮುಂದೆ",
        back: "ಹಿಂದೆ",
        status: "ಸ್ಥಿತಿ",
        date: "ದಿನಾಂಕ",
        actions: "ಕ್ರಿಯೆಗಳು",
        filter: "ಫಿಲ್ಟರ್",
        export: "ವರದಿ ರಫ್ತು",
        verify: "ಪರಿಶೀಲಿಸಿ",
        unknown: "ಅಪರಿಚಿತ"
    },
    dashboard: {
        title: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        subtitle: "ಇಂದಿನ ಸ್ಥಿತಿ ಇಲ್ಲಿದೆ.",
        newComplaint: "ಹೊಸ ದೂರು ದಾಖಲಿಸಿ",
        totalReports: "ಒಟ್ಟು ವರದಿಗಳು",
        pending: "ಪರಿಶೀಲನೆ ಬಾಕಿ ಇದೆ",
        inProgress: "ಪ್ರಗತಿಯಲ್ಲಿದೆ",
        resolved: "ಬಗೆಹರಿದ ಪ್ರಕರಣಗಳು",
        recentActivity: "ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆಗಳು",
        noActivity: "ಯಾವುದೇ ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆ ಕಂಡುಬಂದಿಲ್ಲ.",
        viewAll: "ಎಲ್ಲಾ ದೂರುಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
        aiTool: "AI ವಂಚನೆ ಪತ್ತೆದರ",
        aiDesc: "ಸಂಶಯಾಸ್ಪದ ಪಠ್ಯವನ್ನು ತಕ್ಷಣ ವಿಶ್ಲೇಷಿಸಿ.",
        emergency: "ತುರ್ತು ಸಂಪರ್ಕಗಳು",
        analyze: "ವಿಶ್ಲೇಷಿಸಿ",
        sos: "SOS / ಪ್ಯಾನಿಕ್ ಬಟನ್",
        liveAlerts: "ನೇರ ಎಚ್ಚರಿಕೆಗಳು",
        alerts: [
            "⚠️ ವಿದ್ಯುತ್ ಬಿಲ್ ನಕಲಿ SMS ಬಗ್ಗೆ ಎಚ್ಚರದಿಂದಿರಿ.",
            "🛡️ ನಿಮ್ಮ ಬ್ರೌಸರ್ ಅನ್ನು ತಕ್ಷಣ ನವೀಕರಿಸಿ.",
            "🚫 ಬ್ಯಾಂಕ್ ಬೆಂಬಲ ಎಂದು ಹೇಳುವ ಯಾರೊಂದಿಗೂ OTP ಹಂಚಿಕೊಳ್ಳಬೇಡಿ."
        ]
    },
    complaint: {
        steps: {
            category: "ವರ್ಗ ಮತ್ತು ತುರ್ತು",
            details: "ವಿವರಗಳು",
            location: "ಸ್ಥಳ",
            evidence: "ಸಾಕ್ಷ್ಯ",
            review: "ಪರಿಶೀಲನೆ"
        },
        success: "ವರದಿ ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ"
    },
    safety: {
        title: "ಸುರಕ್ಷತಾ ಸಂಪನ್ಮೂಲಗಳು",
        subtitle: "ಜ್ಞಾನವೇ ನಿಮ್ಮ ಮೊದಲ ರಕ್ಷಣೆ. ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿರಲು ಮಾರ್ಗದರ್ಶಿಗಳನ್ನು ಓದಿ.",
        searchPlaceholder: "ಹುಡುಕಿ (ಉದಾ. 'ಬ್ಯಾಂಕ್')...",
        noResults: "ಫಲಿತాలు ಪತ್ತೆಯಾಗಿಲ್ಲ",
        readMore: "ಇನ್ನಷ್ಟು ಓದಿ",
        categories: {
            Financial: "ಹಣಕಾಸು",
            Social: "ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ",
            Legal: "ಕಾನೂನು",
            Tech: "ಸಾಧನ ಭದ್ರತೆ"
        },
        articles: [
            {
                title: "ಫಿಶಿಂಗ್ ಹಗರಣಗಳ ಗುರುಿಸುವಿಕೆ",
                desc: "ಬ್ಯಾಂಕ್ ಅಥವಾ ಅಧಿಕಾರಿಗಳಂತೆ ನಟಿಸುವ ನಕಲಿ ಇಮೇಲ್‌ಗಳು ಮತ್ತು SMS ಗಳನ್ನು ಗುರುತಿಸುವುದು ಹೇಗೆ ಎಂದು ತಿಳಿಯಿರಿ.",
                tips: ["ಕಳುಹಿಸುವವರ ಇಮೇಲ್ ಪರಿಶೀಲಿಸಿ", "ಕಾಗುಣಿತ ದೋಷಗಳನ್ನು ಗಮನಿಸಿ", "ಅನುಮಾನಾಸ್ಪದ ಲಿಂಕ್‌ಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡಬೇಡಿ"]
            },
            {
                title: "ನಿಮ್ಮ UPI ಅಪ್ಲಿಕೇಶನ್ ಸುರಕ್ಷಿತಗೊಳಿಸಿ",
                desc: "PhonePe, GPay ಮತ್ತು Paytm ಖಾತೆಗಳನ್ನು ಹ್ಯಾಕರ್‌ಗಳಿಂದ ಸುರಕ್ಷಿತವಾಗಿಡಲು ಉತ್ತಮ ಅಭ್ಯಾಸಗಳು.",
                tips: ["ಬಲಶಾಲಿಯಾದ MPIN ಹೊಂದಿಸಿ", "ಸ್ಕ್ರೀನ್ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ", "ಟೂ-ಫ್ಯಾಕ್ಟರ್ ದೃಢೀಕರಣ ಆನ್ ಮಾಡಿ"]
            },
            {
                title: "ಸುರಕ್ಷಿತ ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ಅಭ್ಯಾಸಗಳು",
                desc: "Instagram ಮತ್ತು Facebook ನಲ್ಲಿ ನಿಮ್ಮ ಗುರುತನ್ನು ರಕ್ಷಿಸಿಕೊಳ್ಳಿ.",
                tips: ["ಪ್ರೊಫೈಲ್ ಲಾಕ್ ಮಾಡಿ", "ಅಪರಿಚಿತ ವಿನಂತಿಗಳನ್ನು ಸ್ವೀಕರಿಸಬೇಡಿ", "ಬಲವಾದ ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಬಳಸಿ"]
            },
            {
                title: "ATM ಕಾರ್ಡ್ ಎಚ್ಚರಿಕೆ",
                desc: "ಹಣ ಹಿಂಪಡೆಯುವಾಗ ಸ್ಕಿಮ್ಮಿಂಗ್ ಮತ್ತು ಕಾರ್ಡ್ ಕ್ಲೋನಿಂಗ್ ತಡೆಯಿರಿ.",
                tips: ["ಲಾಗಿನ್ ಆಗುವಾಗ ಕೀಪ್ಯಾಡ್ ಮರೆಮಾಡಿ", "ಸ್ಕಿಮ್ಮಿಂಗ್ ಸಾಧನಗಳನ್ನು ಪರಿಶೀಲಿಸಿ", "ನಿಯಮಿತವಾಗಿ ಪಿನ್ ಬದಲಾಯಿಸಿ"]
            }
        ]
    },
    ai: {},
    widgets: {
        safetyScore: "ಸುರಕ್ಷತಾ ಸ್ಕೋರ್",
        safetyLevel: "ಸುರಕ್ಷಿತ",
        class: "ವರದಿಗಳು",
        downloadReport: "PDF ಡೌನ್‌ಲೋಡ್"
    },
    seniorMode: {
        title: "ಸರಳ ಮೋಡ್ ಸಕ್ರಿಯ",
        subtitle: "ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಸುಲಭ ಇಂಟರ್ಫೇಸ್.",
        emergency: "ತುರ್ತು ವರದಿ",
        scamCheck: "ಸ್ಕ್ಯಾಮ್ ಪರಿಶೀಲನೆ",
        verify: "ಸಂಖ್ಯೆ ಪರಿಶೀಲಿಸಿ",
        needHelp: "ಸಹಾಯ ಬೇಕೇ?",
        helplineDesc: "ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಸಹಾಯವಾಣಿ"
    },
    panicButton: {
        title: "ಒನ್-ಟ್ಯಾಪ್ ಲಾಕ್",
        activeTitle: "ಖಾತೆಗಳು ಸುರಕ್ಷಿತ",
        desc: "ಹ್ಯಾಕ್ ಆದ ಅನುಮಾನವಿದೆಯೇ? ಲಿಂಕ್ ಮಾಡಿದ ಬ್ಯಾಂಕ್ ಖಾತೆಗಳು ಮತ್ತು UPI ಐಡಿಗಳನ್ನು ತಕ್ಷಣ ಫ್ರೀಜ್ ಮಾಡಿ.",
        activeDesc: "ಸಿಮ್ಯುಲೇಶನ್: HDFC, SBI ಮತ್ತು Axis Bank ಗೆ ವಿನಂತಿಗಳನ್ನು ಕಳುಹಿಸಲಾಗಿದೆ. ಖಾತೆಗಳು ತಾತ್ಕಾಲಿಕವಾಗಿ ಫ್ರೀಜ್ ಆಗಿವೆ.",
        button: "ಎಲ್ಲವನ್ನೂ ಫ್ರೀಜ್ ಮಾಡಿ",
        reset: "ಮರುಹೊಂದಿಸಿ"
    },
    tools: {
        smsTitle: "ಹೈ-ಸ್ಪೀಡ್ ಆಫ್‌ಲೈನ್ ವರದಿಗಾರ",
        smsDesc: "ಇಂಟರ್ನೆಟ್ ಇಲ್ಲವೇ? ಪರವಾಗಿಲ್ಲ. 1930 ಕ್ಕೆ ನೇರವಾಗಿ SMS ವರದಿ ಮಾಡಲು ಕೋಡ್ ರಚಿಸಿ.",
        bankLabel: "ಬ್ಯಾಂಕ್ ಹೆಸರು / ವ್ಯಾಲೆಟ್",
        amountLabel: "ಕಳೆದುಕೊಂಡ ಮೊತ್ತ (₹)",
        fraudType: "ವಂಚನೆಯ ಪ್ರಕಾರ",
        generate: "ಕೋಡ್ ನಕಲಿಸಿ ಮತ್ತು SMS ತೆರೆಯಿರಿ",
        heatmapTitle: "ಲೈವ್ ಸೈಬರ್ ಕ್ರೈಮ್ ಹೀಟ್‌మ್ಯಾಪ್",
        heatmapDesc: "ಭಾರತದಾದ್ಯಂತ ಸೈಬರ್ ಘಟನೆಗಳ ನೈಜ ಸಮಯದ ದೃಶ್ಯೀಕರಣ.",
        legalTitle: "ತುರ್ತು ಕಾನೂನು ಸಹಾಯ",
        legalDesc: "ನಿಮ್ಮ ನಿರ್ದಿಷ್ಟ ಸೈಬರ್ ಅಪರಾಧದಲ್ಲಿ ಪರಿಣತಿ ಹೊಂದಿರುವ ವಕೀಲರು ಮತ್ತು NGO ಗಳನ್ನು ಹುಡುಕಿ.",
        incidentType: "ನೀವು ಯಾವ ರೀತಿಯ ಘಟನೆಯನ್ನು ಎದುರಿಸಿದ್ದೀರಿ?",
        findLawyer: "ತಜ್ಞರನ್ನು ಹುಡುಕಿ"
    }
};

const bn = {
    nav: {
        home: "হোম",
        overview: "ওভারভিউ",
        fileComplaint: "অভিযোগ দায়ের করুন",
        myComplaints: "আমার অভিযোগ",
        safety: "সচেতনতা হাব",
        settings: "সেটিংস",
        logout: "লগ আউট",
        policeDashboard: "কেস ম্যানেজমেন্ট",
        ai: "এআই সহকারী",
        verify: "যাচাইকরণ টুল",
        scamDetector: "স্ক্যাম ডিটেক্টর",
        heatmap: "হিটম্যাপ",
        legalAid: "আইনি সহায়তা",
        smsReport: "এসএমএস রিপোর্ট",
        quiz: "সাইবার কুইজ",
        tools: "টুলস"
    },
    auth: {
        citizenTitle: "সাইবার সুরক্ষা লগইন",
        citizenSubtitle: "নাগরিকদের জন্য নিরাপদ পোর্টাল",
        policeTitle: "অফিসার পোর্টাল",
        policeSubtitle: "শুধুমাত্র আইন প্রয়োগকারীদের জন্য",
        email: "ইমেল / মোবাইল নম্বর",
        password: "পাসওয়ার্ড",
        badge: "ব্যাজ নম্বর",
        pin: "নিরাপদ পিন",
        loginCitizen: "ডেমো নাগরিক হিসেবে লগইন করুন",
        loginPolice: "ড্যাশবোর্ডে লগইন করুন",
        demoMode: "ডেমো মোড সক্রিয়: পাসওয়ার্ড প্রয়োজন নেই।",
        notAccount: "অ্যাকাউন্ট নেই?",
        register: "এখনই নিবন্ধন করুন",
        areYouPolice: "আপনি কি পুলিশ অফিসার?",
        policeLink: "অফিসার লগইন এখানে",
        returnCitizen: "নাগরিক পোর্টালে ফিরে যান",
        authenticating: "যাচাই করা হচ্ছে..."
    },
    common: {
        welcome: "ফিরে আসায় স্বাগতম",
        loading: "লোড হচ্ছে...",
        submit: "জমা দিন",
        next: "পরবর্তী",
        back: "পেছনে",
        status: "অবস্থা",
        date: "তারিখ",
        actions: "ক্রিয়াকলাপ",
        filter: "ফিল্টার",
        export: "রিপোর্ট এক্সপোর্ট",
        verify: "যাচাই করুন",
        unknown: "অজানা"
    },
    dashboard: {
        title: "ড্যাশবোর্ড",
        subtitle: "আজকের পরিস্থিতি এখানে।",
        newComplaint: "নতুন অভিযোগ দায়ের করুন",
        totalReports: "মোট রিপোর্ট",
        pending: "পর্যালোচনা মুলতবি",
        inProgress: "তদন্ত চলছে",
        resolved: "সমাধানকৃত মামলা",
        recentActivity: "সাম্প্রতিক কার্যকলাপ",
        noActivity: "কোন সাম্প্রতিক কার্যকলাপ পাওয়া যায়নি।",
        viewAll: "সব অভিযোগ দেখুন",
        aiTool: "এআই জালিয়াতি ডিটেক্টর",
        aiDesc: "সন্দেহজনক টেক্সট অবিলম্বে বিশ্লেষণ করুন।",
        emergency: "জরুরী যোগাযোগ",
        analyze: "বিশ্লেষণ করুন",
        sos: "SOS / প্যানিক বোতাম",
        liveAlerts: "লাইভ সতর্কতা",
        alerts: [
            "⚠️ বিদ্যুৎ বিলের ভুয়া এসএমএস থেকে সাবধান।",
            "🛡️ আপনার ব্রাউজার অবিলম্বে আপডেট করুন।",
            "🚫 ব্যাংক সাপোর্ট বলে দাবি করা কারো সাথে ওটিপি শেয়ার করবেন না।"
        ]
    },
    complaint: {
        steps: {
            category: "বিভাগ ও জরুরী",
            details: "বিবরণ",
            location: "অবস্থান",
            evidence: "প্রমাণ",
            review: "পর্যালোচনা"
        },
        success: "রিপোর্ট সফলভাবে জমা দেওয়া হয়েছে"
    },
    safety: {
        title: "নিরাপত্তা রিসোর্স",
        subtitle: "জ্ঞানই আপনার প্রথম প্রতিরক্ষা। অনলাইনে নিরাপদ থাকতে নির্দেশিকা পড়ুন।",
        searchPlaceholder: "অনুসন্ধান করুন (উদাঃ 'ব্যাংক')...",
        noResults: "কোন ফলাফল নেই",
        readMore: "আরও পড়ুন",
        categories: {
            Financial: "আর্থিক",
            Social: "সোশ্যাল মিডিয়া",
            Legal: "আইনি",
            Tech: "ডিভাইস নিরাপত্তা"
        },
        articles: [
            {
                title: "ফিশিং স্ক্যাম সনাক্তকরণ",
                desc: "ব্যাংক বা কর্মকর্তাদের থেকে আসা ভুয়া ইমেল এবং এসএমএস কীভাবে চিহ্নিত করবেন তা শিখুন।",
                tips: ["প্রেরকের ইমেল চেক করুন", "বানান ভুল খুঁজুন", "সন্দেহজনক লিঙ্কে ক্লিক করবেন না"]
            },
            {
                title: "আপনার ইউপিআই অ্যাপ সুরক্ষিত করুন",
                desc: "PhonePe, GPay এবং Paytm অ্যাকাউন্ট হ্যাকারদের থেকে নিরাপদ রাখার সেরা উপায়।",
                tips: ["শক্তিশালী পিন সেট করুন", "স্ক্রিন শেয়ার করবেন না", "টু-ফ্যাক্টর অথেনটিকেশন চালু করুন"]
            },
            {
                title: "নিরাপদ সোশ্যাল মিডিয়া অভ্যাস",
                desc: "Instagram এবং Facebook এ আপনার পরিচয় সুরক্ষিত রাখুন।",
                tips: ["প্রোফাইল লক করুন", "অজানা অনুরোধ গ্রহণ করবেন না", "শক্তিশালী পাসওয়ার্ড ব্যবহার করুন"]
            },
            {
                title: "এটিএম কার্ড নিরাপত্তা",
                desc: "টাকা তোলার সময় স্কিমিং এবং কার্ড ক্লোনিং প্রতিরোধ করুন।",
                tips: ["পিন দেওয়ার সময় কিপ্যাড ঢেকে রাখুন", "স্কিমিং ডিভাইস চেক করুন", "নিয়মিত পিন পরিবর্তন করুন"]
            }
        ]
    },
    ai: {},
    widgets: {
        safetyScore: "নিরাপত্তা স্কোর",
        safetyLevel: "নিরাপদ",
        class: "রিপোর্ট",
        downloadReport: "পিডিএফ ডাউনলোড"
    },
    seniorMode: {
        title: "সহজ মোড সক্রিয়",
        subtitle: "প্রবীণ নাগরিকদের জন্য সহজ ইন্টারফেস।",
        emergency: "জরুরি রিপোর্ট",
        scamCheck: "স্ক্যাম চেক",
        verify: "নম্বর যাচাই",
        needHelp: "সাহায্য প্রয়োজন?",
        helplineDesc: "জাতীয় সাইবার হেল্পলাইন"
    },
    panicButton: {
        title: "ওয়ান-ট্যাপ লক",
        activeTitle: "অ্যাকাউন্ট সুরক্ষিত",
        desc: "হ্যাক সন্দেহ হচ্ছে? লিঙ্ক করা ব্যাংক অ্যাকাউন্ট এবং ইউপিআই আইডি অবিলম্বে ফ্রিজ করুন।",
        activeDesc: "সিমুলেশন: HDFC, SBI এবং Axis Bank এ অনুরোধ পাঠানো হয়েছে। অ্যাকাউন্টগুলি সাময়িকভাবে ফ্রিজ করা হয়েছে।",
        button: "সব ফ্রিজ করুন",
        reset: "রিসেট করুন"
    },
    tools: {
        smsTitle: "হাই-স্পিড অফলাইন রিপোর্টার",
        smsDesc: "ইন্টারনেট নেই? সমস্যা নেই। 1930 এ সরাসরি এসএমএস রিপোর্ট করতে কোড তৈরি করুন।",
        bankLabel: "ব্যাংকের নাম / ওয়ালেট",
        amountLabel: "হারানো টাকার পরিমাণ (₹)",
        fraudType: "জালিয়াতির ধরন",
        generate: "কোড কপি করুন এবং এসএমএস খুলুন",
        heatmapTitle: "লাইভ সাইবার ক্রাইম হিটম্যাপ",
        heatmapDesc: "সারা ভারত জুড়ে রিপোর্ট করা সাইবার ঘটনার রিয়েল-টাইম দৃশ্য।",
        legalTitle: "তাৎক্ষণিক আইনি সহায়তা",
        legalDesc: "আপনার নির্দিষ্ট সাইবার অপরাধে দক্ষ আইনজীবী এবং এনজিও খুঁজুন।",
        incidentType: "আপনি কোন ধরনের ঘটনার সম্মুখীন হয়েছেন?",
        findLawyer: "বিশেষজ্ঞ খুঁজুন"
    }
};

const gu = {
    nav: {
        home: "ઘર",
        overview: "ઝાંખી",
        fileComplaint: "ફરિયાદ નોંધાવો",
        myComplaints: "મારી ફરિયાદો",
        safety: "જાગૃતિ કેન્દ્ર",
        settings: "સેટિંગ્સ",
        logout: "લોગ આઉટ",
        policeDashboard: "કેસ મેનેજમેન્ટ",
        ai: "AI સહાયક",
        verify: "ચકાસણી સાધન",
        scamDetector: "કૌભાંડ ડિટેક્ટર",
        heatmap: "હીટમેપ",
        legalAid: "કાનૂની સહાય",
        smsReport: "SMS રિપોર્ટ",
        quiz: "સાયબર ક્વિઝ",
        tools: "સાધનો"
    },
    auth: {
        citizenTitle: "સાયબર સુરક્ષા લોગિન",
        citizenSubtitle: "નાગરિકો માટે સુરક્ષિત પોર્ટલ",
        policeTitle: "ઓફિસર પોર્ટલ",
        policeSubtitle: "માત્ર કાયદા અમલીકરણ માટે",
        email: "ઇમેઇલ / મોબાઇલ નંબર",
        password: "પાસવર્ડ",
        badge: "બેજ નંબર",
        pin: "સુરક્ષિત પિન",
        loginCitizen: "ડેમો નાગરિક તરીકે લોગિન કરો",
        loginPolice: "ડેશબોર્ડમાં લોગિન કરો",
        demoMode: "ડેમો મોડ સક્રિય: પાસવર્ડની જરૂર નથી.",
        notAccount: "ખાતું નથી?",
        register: "હમણાં જ નોંધણી કરો",
        areYouPolice: "શું તમે પોલીસ અધિકારી છો?",
        policeLink: "અધિકારી લોગિન અહીં",
        returnCitizen: "નાગરિક પોર્ટલ પર પાછા",
        authenticating: "પ્રમાણીકરણ થઈ રહ્યું છે..."
    },
    common: {
        welcome: "ફરી સ્વાગત છે",
        loading: "લોડ થઈ રહ્યું છે...",
        submit: "સબમિટ કરો",
        next: "આગળ",
        back: "પાછળ",
        status: "સ્થિતિ",
        date: "તારીખ",
        actions: "ક્રિયાઓ",
        filter: "ફિલ્ટર",
        export: "રિપોર્ટ નિકાસ કરો",
        verify: "ચકાસો",
        unknown: "અજ્ઞાત"
    },
    dashboard: {
        title: "ડેશબોર્ડ",
        subtitle: "આજની સ્થિતિ અહીં છે.",
        newComplaint: "નવી ફરિયાદ નોંધાવો",
        totalReports: "કુલ રિપોર્ટ",
        pending: "સમીક્ષા બાકી",
        inProgress: "તપાસ ચાલુ",
        resolved: "ઉકેલાયેલા કેસો",
        recentActivity: "તાજેતરની પ્રવૃત્તિ",
        noActivity: "કોઈ તાજેતરની પ્રવૃત્તિ મળી નથી.",
        viewAll: "બધી ફરિયાદો જુઓ",
        aiTool: "AI છેતરપિંડી ડિટેક્ટર",
        aiDesc: "શંકાસ્પદ ટેક્સ્ટનું તરત જ વિશ્લેષણ કરો.",
        emergency: "ઇમરજન્સી સંપર્કો",
        analyze: "વિશ્લેષણ કરો",
        sos: "SOS / પેનિક બટન",
        liveAlerts: "લાઇવ ચેતવણીઓ",
        alerts: [
            "⚠️ વીજળી બિલના નકલી SMS થી સાવધ રહો.",
            "🛡️ તમારા બ્રાઉઝરને તરત જ અપડેટ કરો.",
            "🚫 બેંક સપોર્ટ હોવાનો દાવો કરતા કોઈની સાથે OTP શેર કરશો નહીં."
        ]
    },
    complaint: {
        steps: {
            category: "શ્રેણી અને તાકીદ",
            details: "વિગતો",
            location: "સ્થળ",
            evidence: "પુરાવા",
            review: "સમીક્ષા"
        },
        success: "રિપોર્ટ સફળતાપૂર્વક સબમિટ થયો"
    },
    safety: {
        title: "સુરક્ષા સંસાધનો",
        subtitle: "જ્ઞાન એ તમારો પ્રથમ બચાવ છે. ઓનલાઇન સુરક્ષિત રહેવા માટે માર્ગદર્શિકાઓ વાંચો.",
        searchPlaceholder: "શોધો (દા.ત. 'બેંક')...",
        noResults: "કોઈ પરિણામ નથી",
        readMore: "વધુ વાંચો",
        categories: {
            Financial: "આર્થિક",
            Social: "સોશિયલ મીડિયા",
            Legal: "કાનૂની",
            Tech: "ડિવાઇસ સુરક્ષા"
        },
        articles: [
            {
                title: "ફિશિંગ કૌભાંડો ઓળખવા",
                desc: "બેંક અથવા અધિકારીઓ હોવાનો ડોળ કરતા નકલી ઇમેઇલ્સ અને SMS કેવી રીતે ઓળખવા તે શીખો.",
                tips: ["મોકલનારનું ઇમેઇલ તપાસો", "જોડણીની ભૂલો શોધો", "શંકાસ્પદ લિંક્સ પર ક્લિક કરશો નહીં"]
            },
            {
                title: "તમારી UPI એપ્લિકેશન સુરક્ષિત કરો",
                desc: "PhonePe, GPay અને Paytm એકાઉન્ટ્સને હેકર્સથી સુરક્ષિત રાખવા માટે શ્રેષ્ઠ વ્યવહારો.",
                tips: ["મજબૂત MPIN સેટ કરો", "સ્ક્રીન શેર કરશો નહીં", "ટુ-ફેક્ટર ઓથેન્ટિકેશન ચાલુ કરો"]
            },
            {
                title: "સુરક્ષિત સોશિયલ મીડિયા ટેવો",
                desc: "Instagram અને Facebook પર તમારી ઓળખ સુરક્ષિત રાખો.",
                tips: ["પ્રોફાઇલ લોક કરો", "અજાણ્યા વિનંતીઓ સ્વીકારશો નહીં", "મજબૂત પાસવર્ડ્સ વાપરો"]
            },
            {
                title: "ATM કાર્ડ સુરક્ષા",
                desc: "પૈસા ઉપાડતી વખતે સ્કિમિંગ અને કાર્ડ ક્લોનિંગથી બચો.",
                tips: ["પિન દાખલ કરતી વખતે કીપેડ ઢાંકો", "સ્કિમિંગ ઉપકરણો તપાસો", "નિયમિતપણે પિન બદલો"]
            }
        ]
    },
    ai: {},
    widgets: {
        safetyScore: "સુરક્ષા સ્કોર",
        safetyLevel: "સુરક્ષિત",
        class: "રિપોર્ટ્સ",
        downloadReport: "PDF ડાઉનલોડ"
    },
    seniorMode: {
        title: "સરળ મોડ સક્રિય",
        subtitle: "વરિષ્ઠ નાગરિકો માટે સરળ ઇન્ટરફેસ.",
        emergency: "ઇમરજન્સી રિપોર્ટ",
        scamCheck: "કૌભાંડ તપાસો",
        verify: "નંબર ચકાસો",
        needHelp: "મદદ જોઈએ છે?",
        helplineDesc: "રાષ્ટ્રીય સાયબર હેલ્પલાઇન"
    },
    panicButton: {
        title: "વન-ટેપ લોક",
        activeTitle: "એકાઉન્ટ્સ સુરક્ષિત",
        desc: "હેકની શંકા છે? લિંક કરેલા બેંક એકાઉન્ટ્સ અને UPI ID ને તરત જ ફ્રીઝ કરો.",
        activeDesc: "સિમ્યુલેશન: HDFC, SBI અને Axis Bank ને વિનંતીઓ મોકલવામાં આવી. તમારા એકાઉન્ટ્સ કામચલાઉ રીતે ફ્રીઝ છે.",
        button: "બધું ફ્રીઝ કરો",
        reset: "રીસેટ"
    },
    tools: {
        smsTitle: "હાઇ-સ્પીડ ઓફલાઇન રિપોર્ટર",
        smsDesc: "ઇન્ટરનેટ નથી? કોઈ વાંધો નથી. 1930 પર સીધા SMS રિપોર્ટ કરવા માટે કોડ જનરેટ કરો.",
        bankLabel: "બેંકનું નામ / વૉલેટ",
        amountLabel: "ગુમાવેલી રકમ (₹)",
        fraudType: "છેતરપિંડીનો પ્રકાર",
        generate: "કોડ કોપી કરો અને SMS ખોલો",
        heatmapTitle: "લાઇવ સાયબર ક્રાઇમ હીટમેપ",
        heatmapDesc: "સમગ્ર ભારતમાં નોંધાયેલા સાયબર બનાવોનું રીઅલ-ટાઇમ વિઝ્યુઅલાઈઝેશન.",
        legalTitle: "તાત્કાલિક કાનૂની સહાય",
        legalDesc: "તમારા ચોક્કસ પ્રકારના સાયબર ક્રાઇમમાં નિષ્ણાત વકીલો અને એનજીઓ શોધો.",
        incidentType: "તમે કયા પ્રકારની ઘટનાનો સામનો કર્યો?",
        findLawyer: "નિષ્ણાતો શોધો"
    }
};

export const translations = {
    en, hi, mr, te, ta, kn, bn, gu
};
