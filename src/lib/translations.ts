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
    safety: safetyEn,
    ai: {},
    widgets: {
        safetyScore: "Safety Score",
        safetyLevel: "Safe",
        class: "Reports",
        downloadReport: "Download PDF"
    },
    seniorMode: seniorModeEn,
    panicButton: panicButtonEn,
    tools: toolsEn,
    apkScanner: {
        title: "App Risk Scanner",
        subtitle: "Analyze suspicious apps before you install them.",
        permissionsTitle: "Permissions Requested",
        permissionsDesc: "What is the app asking for?",
        analyzeBtn: "Calculate Risk Score",
        scanning: "Scanning Patterns...",
        riskScore: "Risk Score",
        threatAssess: "Threat Assessment",
        critical: "CRITICAL MALWARE RISK",
        high: "High Risk",
        moderate: "Moderate Risk",
        safe: "Safe",
        scanAnother: "Scan Another App",
        dangerAlert: "DANGEROUS PERMISSION COMBINATION DETECTED! DO NOT INSTALL!",
        quickScenarios: "Quick Scenarios",
        report: "REPORT THIS APP",
        perms: {
            camera: "Camera (Photos/Video)",
            mic: "Microphone (Record Audio)",
            location: "Precise Location",
            contacts: "Read Contacts",
            sms: "Read SMS (OTPs)",
            storage: "Storage (Photos/Files)",
            phone: "Phone State/Call Log",
            overlay: "Display Over Apps",
            accessibility: "Accessibility Services (Full Control)"
        },
        presets: {
            loan: "Instant Loan App",
            betting: "Betting/Rummy Game",
            dating: "Dating/Chat App",
            fakeKyc: "Fake KYC App",
            flashlight: "Flashlight App"
        },
        advice: {
            smsOverlay: "🚨 CRITICAL: SMS + Overlay is the signature of Banking Trojans (Drebin/Joker malware).",
            accessibility: "⚠️ SYSTEM TAKEOVER: Accessibility allows the app to click buttons for you. It can empty your bank account.",
            extortion: "📉 EXTORTION RISK: Predatory Loan Apps use this combo to steal gallery photos + contact list to blackmail victims."
        }
    },
    firDrafter: {
        title: "AI FIR Drafter",
        subtitle: "Generate a legally compliant police complaint in seconds.",
        form: {
            personalTitle: "Complainant Details",
            incidentTitle: "Incident Details",
            name: "Full Name",
            address: "Address & City",
            date: "Date of Incident",
            time: "Approx Time",
            city: "City of Incident",
            type: "Incident Type",
            amount: "Amount Lost (₹)",
            suspect: "Suspect Details (Number/UPI/Link)",
            desc: "Detailed Description"
        },
        types: {
            financial: "Financial Fraud / UPI Scam",
            stalking: "Cyber Stalking",
            job: "Fake Job Offer",
            sextortion: "Sextortion"
        },
        buttons: {
            generate: "Draft Complaint",
            drafting: "Drafting...",
            download: "Download PDF",
            print: "Print"
        },
        preview: {
            ready: "Document Ready!",
            legalCite: "Cited: BNS 2023 Sec 318 & IT Act 2000 Sec 66D",
            header: "APPLICATION FOR REGISTRATION OF F.I.R",
            to: "To,",
            sho: "The Station House Officer,",
            subject: "Subject: Complaint regarding Cyber Crime",
            bodyStart: "I wish to report a cybercrime incident.",
            request: "I request you to register an FIR and take necessary action."
        }
    },
    muleSearch: {
        title: "Stop Payment Fraud",
        subtitle: "Check if a Phone Number or UPI ID has been reported as a 'Mule Account' by others before you pay.",
        placeholder: "Enter Phone Number / UPI ID...",
        checkBtn: "Check",
        back: "Back",
        highRisk: "HIGH RISK DETECTED",
        safe: "NO REPORTS FOUND",
        safeDesc: "This account has not been flagged in our database yet. Always exercise caution.",
        doNotPay: "DO NOT PAY",
        reports: "Reports in last 7 days:"
    },
    community: {
        title: "Community Shield",
        guardians: "Active Guardians",
        family: {
            title: "Suraksha Bandhan (Family Safety)",
            protect: "Protect Your Elders",
            protectDesc: "Link your parents' devices. Get instant alerts if they receive suspicious SMS.",
            addBtn: "Add Family Member",
            nickname: "Nickname",
            phone: "Phone Number",
            sendInvite: "Send Invite"
        },
        insurance: {
            title: "Micro-Cyber Insurance",
            price: "₹99/year",
            coverage: "Coverage up to ₹25,000",
            features: ["Legal Helpline", "Instant Claim", "Identity Recovery"],
            buy: "Protect Now"
        },
        feed: {
            title: "Mandi News (Live Feed)",
            report: "Report Local Incident"
        }
    },
    toolsIndex: {
        title: "Cyber Defence Toolkit",
        subtitle: "Powerful, government-grade tools to protect you, your family, and your business from digital fraud.",
        phishingTitle: "Phishing Dojo",
        phishingDesc: "Gamified training to spot scams.",
        whatsappTitle: "WhatsApp Bot Check",
        whatsappDesc: "Forward suspicious messages to check links.",
        firTitle: "AI FIR Drafter",
        firDesc: "Generate a legally valid police complaint.",
        digitalArrestTitle: "Digital Arrest Simulator",
        digitalArrestDesc: "Experience a fake police call to learn safety.",
        fakePaymentTitle: "Fake Payment Detector",
        fakePaymentDesc: "For Merchants: Spot spoofed payment screens.",
        muleTitle: "Mule Account Search",
        muleDesc: "Search blacklisted fraud numbers.",
        apkTitle: "APK Safety Scanner",
        apkDesc: "Find dangerous permissions in your apps.",
        smsTitle: "SMS Case Tracker",
        smsDesc: "Offline status check via 'Missed Call'.",
        communityTitle: "Community Shield",
        communityDesc: "Family safety, insurance & local alerts."
    }
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
    },
    apkScanner: {
        title: "ऐप जोखिम स्कैनर",
        subtitle: "इंस्टॉल करने से पहले संदिग्ध ऐप्स का विश्लेषण करें।",
        permissionsTitle: "अनुमतियाँ",
        permissionsDesc: "ऐप क्या मांग रहा है?",
        analyzeBtn: "जोखिम स्कोर की गणना करें",
        scanning: "स्कैनिंग...",
        riskScore: "जोखिम स्कोर",
        threatAssess: "खतरा मूल्यांकन",
        critical: "गंभीर मैलवेयर जोखिम",
        high: "उच्च जोखिम",
        moderate: "मध्यम जोखिम",
        safe: "सुरक्षित",
        scanAnother: "दूसरा ऐप स्कैन करें",
        dangerAlert: "खतरनाक अनुमति संयोजन का पता चला! इंस्टॉल न करें!",
        quickScenarios: "त्वरित परिदृश्य",
        report: "इस ऐप की रिपोर्ट करें",
        perms: {
            camera: "कैमरा (फोटो/वीडियो)",
            mic: "माइक्रोफोन (ऑडियो रिकॉर्ड)",
            location: "सटीक स्थान",
            contacts: "संपर्क पढ़ें",
            sms: "SMS पढ़ें (OTP)",
            storage: "स्टोरेज (फोटो/फाइलें)",
            phone: "फोन स्थिति/कॉल लॉग",
            overlay: "ऐप्स के ऊपर दिखाएं",
            accessibility: "एक्सेसिबिलिटी सेवाएं (पूर्ण नियंत्रण)"
        },
        presets: {
            loan: "तत्काल ऋण ऐप",
            betting: "सट्टेबाजी/रम्मी गेम",
            dating: "डेटिंग/चैट ऐप",
            fakeKyc: "नकली KYC ऐप",
            flashlight: "फ्लैशलाइट ऐप"
        },
        advice: {
            smsOverlay: "🚨 गंभीर: SMS + ओवरले बैंकिंग ट्रोजन (Drebin/Joker मैलवेयर) का संकेत है।",
            accessibility: "⚠️ सिस्टम अधिग्रहण: एक्सेसिबिलिटी ऐप को आपके लिए बटन क्लिक करने की अनुमति देती है। यह आपका बैंक खाता खाली कर सकता है।",
            extortion: "📉 जबरन वसूली जोखिम: शिकारी ऋण ऐप्स इस कॉम्बो का उपयोग गैलरी फोटो + संपर्क सूची चोरी करने और पीड़ितों को ब्लैकमेल करने के लिए करते हैं।"
        }
    },
    firDrafter: {
        title: "AI एफ.आई.आर. ड्राफ्टर",
        subtitle: "सेकंड में कानूनी रूप से मान्य पुलिस शिकायत तैयार करें।",
        form: {
            personalTitle: "शिकायतकर्ता का विवरण",
            incidentTitle: "घटना का विवरण",
            name: "पूरा नाम",
            address: "पता और शहर",
            date: "घटना की तारीख",
            time: "लगभग समय",
            city: "घटना का शहर",
            type: "घटना का प्रकार",
            amount: "खोई हुई राशि (₹)",
            suspect: "संदिग्ध विवरण (नंबर/UPI)",
            desc: "विस्तृत विवरण"
        },
        types: {
            financial: "वित्तीय धोखाधड़ी / UPI",
            stalking: "साइबर स्टॉकिंग",
            job: "फर्जी नौकरी प्रस्ताव",
            sextortion: "ब्लैकमेल/सेक्सटोर्शन"
        },
        buttons: {
            generate: "शिकायत ड्राफ्ट करें",
            drafting: "ड्राफ्टिंग...",
            download: "PDF डाउनलोड करें",
            print: "प्रिंट करें"
        },
        preview: {
            ready: "दस्तावेज़ तैयार!",
            legalCite: "उद्धृत: BNS 2023 धारा 318 और IT अधिनियम 2000 धारा 66D",
            header: "एफ.आई.आर. पंजीकरण के लिए आवेदन",
            to: "प्रति,",
            sho: "थाना प्रभारी,",
            subject: "विषय: साइबर अपराध के संबंध में शिकायत",
            bodyStart: "मैं एक साइबर अपराध की घटना की रिपोर्ट करना चाहता/चाहती हूं।",
            request: "अनुरोध है कि एफ.आई.आर. दर्ज करें और आवश्यक कार्यवाही करें।"
        }
    },
    muleSearch: {
        title: "भुगतान धोखाधड़ी रोकें",
        subtitle: "भुगतान करने से पहले जांचें कि क्या यह नंबर या UPI 'मूल अकाउंट' के रूप में रिपोर्ट किया गया है।",
        placeholder: "फोन नंबर / UPI ID दर्ज करें...",
        checkBtn: "जांचें",
        back: "वापस",
        highRisk: "उच्च जोखिम का पता चला",
        safe: "कोई रिपोर्ट नहीं मिली",
        safeDesc: "यह खाता अभी तक हमारे डेटाबेस में फ्लैग नहीं किया गया है। फिर भी सावधानी बरतें।",
        doNotPay: "भुगतान न करें",
        reports: "पिछले 7 दिनों में रिपोर्ट:"
    },
    community: {
        title: "कम्युनिटी शील्ड",
        guardians: "सक्रिय संरक्षक",
        family: {
            title: "सुरक्षा बंधन (परिवार सुरक्षा)",
            protect: "अपने बड़ों की रक्षा करें",
            protectDesc: "माता-पिता के डिवाइस लिंक करें। यदि उन्हें संदिग्ध SMS मिलता है तो तुरंत अलर्ट प्राप्त करें।",
            addBtn: "सदस्य जोड़ें",
            nickname: "उपनाम",
            phone: "फोन नंबर",
            sendInvite: "आमंत्रण भेजें"
        },
        insurance: {
            title: "माइक्रो-साइबर बीमा",
            price: "₹99/वर्ष",
            coverage: "₹25,000 तक का कवर",
            features: ["कानूनी हेल्पलाइन", "त्वरित दावा", "पहचान रिकवरी"],
            buy: "अभी सुरक्षित करें"
        },
        feed: {
            title: "मंडी समाचार (लेटेस्ट)",
            report: "स्थानीय घटना रिपोर्ट करें"
        }
    },
    toolsIndex: {
        title: "साइबर सुरक्षा टूलकिट",
        subtitle: "डिजिटल धोखाधड़ी से आपको, आपके परिवार और आपके व्यवसाय को बचाने के लिए शक्तिशाली, सरकारी-ग्रेड उपकरण।",
        phishingTitle: "फिशिंग डोजो",
        phishingDesc: "घोटालों को पहचानने के लिए गेमिफाइड प्रशिक्षण।",
        whatsappTitle: "व्हाट्सएप बॉट चेक",
        whatsappDesc: "लिंक चेक करने के लिए संदिग्ध संदेश फॉरवर्ड करें।",
        firTitle: "AI FIR ड्राफ्टर",
        firDesc: "कानूनी रूप से मान्य पुलिस शिकायत तैयार करें।",
        digitalArrestTitle: "डिजिटल अरेस्ट सिम्युलेटर",
        digitalArrestDesc: "सुरक्षा सीखने के लिए नकली पुलिस कॉल का अनुभव करें।",
        fakePaymentTitle: "फर्जी भुगतान डिटेक्टर",
        fakePaymentDesc: "व्यापारियों के लिए: नकली भुगतान स्क्रीन पहचानें।",
        muleTitle: "म्यूल खाता खोज",
        muleDesc: "ब्लैकलिस्ट किए गए धोखाधड़ी नंबर खोजें।",
        apkTitle: "APK सुरक्षा स्कैनर",
        apkDesc: "अपने ऐप्स में खतरनाक अनुमतियां खोजें।",
        smsTitle: "SMS केस ट्रैकर",
        smsDesc: "'मिस्ड कॉल' के माध्यम से ऑफ़लाइन स्थिति जांच।",
        communityTitle: "कम्युनिटी शील्ड",
        communityDesc: "पारिवारिक सुरक्षा, बीमा और स्थानीय अलर्ट।"
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
    },
    apkScanner: {
        title: "ॲप जोखीम स्कॅनर",
        subtitle: "इन्स्टॉल करण्यापूर्वी संशयास्पद ॲप्स तपासा.",
        permissionsTitle: "परवानग्या",
        permissionsDesc: "ॲप नक्की काय मागत आहे?",
        analyzeBtn: "जोखीम तपासा",
        scanning: "स्कॅनिंग...",
        riskScore: "जोखीम स्कोर",
        threatAssess: "धोका मूल्यांकन",
        critical: "गंभीर मालवेअर धोका",
        high: "उच्च धोका",
        moderate: "मध्यम धोका",
        safe: "सुरक्षित",
        scanAnother: "दुसरे ॲप तपासा",
        dangerAlert: "धोकादायक परवानगी कॉम्बिनेशन सापडले! इन्स्टॉल करू नका!",
        quickScenarios: "जलद परिस्थिती",
        report: "या ॲपची तक्रार करा",
        perms: {
            camera: "कॅमेरा",
            mic: "मायक्रोफोन",
            location: "अचूक लोकेशन",
            contacts: "संपर्क",
            sms: "SMS वाचा (OTP)",
            storage: "स्टोरेज (फोटो/फाईल)",
            phone: "फोन स्थिती/कॉल लॉग",
            overlay: "ॲप्स वर दाखवा (Overlay)",
            accessibility: "एक्सेसिबिलिटी सेवा (पूर्ण नियंत्रण)"
        },
        presets: {
            loan: "इन्स्टंट लोन ॲप",
            betting: "बेटिंग/रम्मी गेम",
            dating: "डेटिंग/चॅट ॲप",
            fakeKyc: "बनावट KYC ॲप",
            flashlight: "फ्लॅशलाइट ॲप"
        },
        advice: {
            smsOverlay: "🚨 गंभीर: SMS + आच्छादन (Overlay) हे बँकिंग ट्रोजन (Drebin/Joker मालवेअर) चे लक्षण आहे.",
            accessibility: "⚠️ सिस्टम ताबा: ॲक्सेसिबिलिटी ॲपला तुमच्यासाठी बटणे क्लिक करण्यास अनुमती देते. हे तुमचे बँक खाते रिकामे करू शकते.",
            extortion: "📉 खंडणीचा धोका: भक्षक कर्ज ॲप्स गॅलरी फोटो + संपर्क यादी चोरण्यासाठी आणि बळींना ब्लॅकमेल करण्यासाठी या कॉम्बोचा वापर करतात."
        }
    },
    firDrafter: {
        title: "AI एफ.आई.आर. ड्राफ्टर",
        subtitle: "कायदेशीर पोलीस तक्रार काही सेकंदात तयार करा.",
        form: {
            personalTitle: "तक्रारदाराची माहिती",
            incidentTitle: "घटनेची माहिती",
            name: "पूर्ण नाव",
            address: "पत्ता आणि शहर",
            date: "घटनेची तारीख",
            time: "वेळ",
            city: "शहर",
            type: "घटनेचा प्रकार",
            amount: "गमावलेली रक्कम (₹)",
            suspect: "संशयित माहिती (नंबर/UPI)",
            desc: "सविस्तर माहिती"
        },
        types: {
            financial: "आर्थिक फसवणूक / UPI",
            stalking: "सायबर स्टॉकिंग",
            job: "बनावट नोकरी",
            sextortion: "ब्लॅकमेल/सेक्सटोर्शन"
        },
        buttons: {
            generate: "तक्रार ड्राफ्ट करा",
            drafting: "ड्राफ्टिंग...",
            download: "PDF डाउनलोड",
            print: "प्रिंट"
        },
        preview: {
            ready: "दस्तऐवज तयार!",
            legalCite: "संदर्भ: BNS 2023 कलम 318 आणि IT Act 2000 कलम 66D",
            header: "एफ.आई.आर. नोंदणीसाठी अर्ज",
            to: "प्रति,",
            sho: "पोलिस निरीक्षक,",
            subject: "विषय: सायबर गुन्ह्याबाबत तक्रार",
            bodyStart: "मी सायबर गुन्ह्याची तक्रार नोंदवू इच्छितो.",
            request: "विनंती आहे की एफ.आई.आर. नोंदवावा."
        }
    },
    muleSearch: {
        title: "पेमेंट फसवणूक थांबवा",
        subtitle: "पेमेंट करण्यापूर्वी तपासा की हा नंबर 'मूल अकाउंट' म्हणून रिपोर्ट केला गेला आहे का.",
        placeholder: "फोन नंबर / UPI ID...",
        checkBtn: "तपासा",
        back: "मागे",
        highRisk: "उच्च धोका आढळला",
        safe: "कोणतीही तक्रार नाही",
        safeDesc: "हा खात्याबद्दल अजून कोणतीही तक्रार नाही. तरीही सावधगिरी बाळगा.",
        doNotPay: "पेमेंट करू नका",
        reports: "गेल्या 7 दिवसात रिपोर्ट्स:"
    },
    community: {
        title: "कम्युनिटी शील्ड",
        guardians: "सक्रिय रक्षक",
        family: {
            title: "सुरक्षा बंधन (कुटुंब सुरक्षा)",
            protect: "ज्येष्ठांचे संरक्षण करा",
            protectDesc: "पालकांचे डिव्हाइस लिंक करा. संशयास्पद SMS आल्यास तुम्हाला अलर्ट मिळेल.",
            addBtn: "सदस्य जोडा",
            nickname: "टोपणनाव",
            phone: "फोन नंबर",
            sendInvite: "आमंत्रण पाठवा"
        },
        insurance: {
            title: "मायक्रो-सायबर बीमा",
            price: "₹99/वर्ष",
            coverage: "₹25,000 पर्यंत कवच",
            features: ["कायदेशीर मदत", "त्वरित दावा", "ओळख रिकव्हरी"],
            buy: "सुरक्षित करा"
        },
        feed: {
            title: "मंडी बातम्या (लाईव्ह)",
            report: "स्थानिक घटना"
        }
    },
    toolsIndex: {
        title: "सायबर संरक्षण टूलकिट",
        subtitle: "तुम्हाला, तुमच्या कुटुंबाला आणि तुमच्या व्यवसायाला डिजिटल फसवणुकीपासून वाचवण्यासाठी सरकारी-दर्जाची शक्तिशाली साधने.",
        phishingTitle: "फिशिंग डोजो",
        phishingDesc: "स्कॅम ओळखण्यासाठी गेमसारखे प्रशिक्षण.",
        whatsappTitle: "व्हॉट्सॲप बॉट चेक",
        whatsappDesc: "लिंक तपासण्यासाठी संशयास्पद मेसेज फॉरवर्ड करा.",
        firTitle: "AI FIR ड्राफ्टर",
        firDesc: "कायदेशीर पोलीस तक्रार तयार करा.",
        digitalArrestTitle: "डिजिटल अरेस्ट सिम्युलेटर",
        digitalArrestDesc: "सुरक्षितता शिकण्यासाठी बनावट पोलीस कॉलचा अनुभव घ्या.",
        fakePaymentTitle: "बनावट पेमेंट डिटेक्टर",
        fakePaymentDesc: "व्यापाऱ्यांसाठी: बनावट पेमेंट स्क्रीन ओळखा.",
        muleTitle: "म्यूल खाते शोध",
        muleDesc: "ब्लॅकलिस्ट केलेले फसवणूक नंबर शोधा.",
        apkTitle: "APK सुरक्षा स्कॅनर",
        apkDesc: "तुमच्या ॲप्समधील धोकादायक परवानग्या शोधा.",
        smsTitle: "SMS केस ट्रॅकर",
        smsDesc: "'मिस्ड कॉल' द्वारे ऑफलाइन स्टेटस चेक.",
        communityTitle: "कम्युनिटी शील्ड",
        communityDesc: "कौटुंबिक सुरक्षा, विमा आणि स्थानिक अलर्ट."
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
    },
    apkScanner: {
        title: "యాప్ రిస్క్ స్కానర్",
        subtitle: "ఇన్‌స్టాల్ చేసే ముందు అనుమానాస్పద యాప్‌లను విశ్లేషించండి.",
        permissionsTitle: " అనుమతులు",
        permissionsDesc: "యాప్ ఏమి అడుగుతోంది?",
        analyzeBtn: "రిస్క్ స్కోర్ లెక్కించు",
        scanning: "స్కానింగ్ చేస్తోంది...",
        riskScore: "రిస్క్ స్కోర్",
        threatAssess: "ముప్పు అంచనా",
        critical: "క్లిష్టమైన మాల్వేర్ రిస్క్",
        high: "అధిక రిస్క్",
        moderate: "మధ్యస్థ రిస్క్",
        safe: "సురక్షితం",
        scanAnother: "మరొక యాప్‌ని స్కాన్ చేయండి",
        dangerAlert: "ప్రమాదకరమైన అనుమతుల కలయిక గుర్తించబడింది! ఇన్‌స్టాల్ చేయవద్దు!",
        quickScenarios: "శీఘ్ర సందర్భాలు",
        report: "ఈ యాప్‌ను నివేదించండి",
        perms: {
            camera: "కెమెరా (ఫోటోలు/వీడియో)",
            mic: "మైక్రోఫోన్ (ఆడియో రికార్డ్)",
            location: "ఖచ్చితమైన స్థానం",
            contacts: "కాంటాక్ట్స్ చదవండి",
            sms: "SMS చదవండి (OTPs)",
            storage: "స్టోరేజ్ (ఫోటోలు/ఫైల్స్)",
            phone: "ఫోన్ స్థితి/కాల్ లాగ్",
            overlay: "యాప్‌ల పైన ప్రదర్శించు",
            accessibility: "యాక్సెసిబిలిటీ సేవలు (పూర్తి నియంత్రణ)"
        },
        presets: {
            loan: "తక్షణ రుణ యాప్",
            betting: "బెట్టింగ్/రమ్మీ గేమ్",
            dating: "డేటింగ్/ చాట్ యాప్",
            fakeKyc: "నకిలీ KYC యాప్",
            flashlight: "ఫ్లాష్‌లైట్ యాప్"
        },
        advice: {
            smsOverlay: "🚨 కీలకం: SMS + ఓవర్‌లే అనేది బ్యాంకింగ్ ట్రోజన్‌ల (Drebin/Joker మాల్వేర్) సంతకం.",
            accessibility: "⚠️ సిస్టమ్ టేకోవర్: యాక్సెసిబిలిటీ యాప్‌ని మీ కోసం బటన్‌లను క్లిక్ చేయడానికి అనుమతిస్తుంది. ఇది మీ బ్యాంక్ ఖాతాను ఖాళీ చేయవచ్చు.",
            extortion: "📉 దోపిడీ ప్రమాదం: దోపిడీ రుణ యాప్‌లు గ్యాలరీ ఫోటోలు + సంప్రదింపు జాబితాను దొంగిలించడానికి మరియు బాధితులను బ్లాక్‌మెయిల్ చేయడానికి ఈ కాంబోని ఉపయోగిస్తాయి."
        }
    },
    firDrafter: {
        title: "AI FIR డ్రాఫ్టర్",
        subtitle: "చట్టబద్ధమైన పోలీసు ఫిర్యాదును సెకన్లలో రూపొందించండి.",
        form: {
            personalTitle: "ఫిర్యాదుదారు వివరాలు",
            incidentTitle: "సంఘటన వివరాలు",
            name: "పూర్తి పేరు",
            address: "చిరునామా & నగరం",
            date: "సంఘటన తేదీ",
            time: "సుమారు సమయం",
            city: "సంఘటన నగరం",
            type: "సంఘటన రకం",
            amount: "కోల్పోయిన మొత్తం (₹)",
            suspect: "అనుమానితుని వివరాలు (నంబర్/UPI)",
            desc: "వివరణాత్మక వివరణ"
        },
        types: {
            financial: "ఆర్థిక మోసం / UPI",
            stalking: "సైబర్ స్టాకింగ్",
            job: "నకిలీ ఉద్యోగ ఆఫర్",
            sextortion: "బ్లాక్‌మెయిల్/సెక్స్టార్షన్"
        },
        buttons: {
            generate: "ఫిర్యాదు డ్రాఫ్ట్ చేయండి",
            drafting: "డ్రాఫ్టింగ్...",
            download: "PDF డౌన్‌లోడ్",
            print: "ప్రింట్ చేయండి"
        },
        preview: {
            ready: "పత్రం సిద్ధంగా ఉంది!",
            legalCite: "ఉదహరించబడింది: BNS 2023 సెక్షన్ 318 & IT చట్టం 2000 సెక్షన్ 66D",
            header: "F.I.R నమోదు కోసం దరఖాస్తు",
            to: "To,",
            sho: "The Station House Officer,",
            subject: "విషయం: సైబర్ క్రైమ్ గురించి ఫిర్యాదు",
            bodyStart: "నేను సైబర్ క్రైమ్ సంఘటనను నివేదించాలనుకుంటున్నాను.",
            request: "FIR నమోదు చేసి అవసరమైన చర్యలు తీసుకోవాలని కోరుతున్నాను."
        }
    },
    muleSearch: {
        title: "చెల్లింపు మోసాన్ని ఆపండి",
        subtitle: "చెల్లించే ముందు ఈ నంబర్ లేదా UPI 'మ్యూల్ ఖాతా'గా నివేదించబడిందా అని తనిఖీ చేయండి.",
        placeholder: "ఫోన్ నంబర్ / UPI ID ఎంటర్ చేయండి...",
        checkBtn: "తనిఖీ చేయండి",
        back: "వెనుకకు",
        highRisk: "అధిక రిస్క్ గుర్తించబడింది",
        safe: "ఎలాంటి నివేదికలు లేవు",
        safeDesc: "ఈ ఖాతా మా డేటాబేస్‌లో ఇంకా ఫ్లాగ్ చేయబడలేదు. అయినా జాగ్రత్త వహించండి.",
        doNotPay: "చెల్లించవద్దు",
        reports: "గత 7 రోజుల్లో నివేదికలు:"
    },
    community: {
        title: "కమ్యూనిటీ షీల్డ్",
        guardians: "యాక్టివ్ గార్డియన్స్",
        family: {
            title: "సురక్షా బంధన్ (కుటుంబ భద్రత)",
            protect: "మీ పెద్దలను రక్షించండి",
            protectDesc: "మీ తల్లిదండ్రుల పరికరాలను లింక్ చేయండి. అనుమానాస్పద SMS వస్తే తక్షణ హెచ్చరికలు పొందండి.",
            addBtn: "కుటుంబ సభ్యుడిని జోడించండి",
            nickname: "ముద్దుపేరు",
            phone: "ఫోన్ నంబర్",
            sendInvite: "ఆహ్వానం పంపండి"
        },
        insurance: {
            title: "మైక్రో-సైబర్ ఇన్సూరెన్స్",
            price: "₹99/సంవత్సరం",
            coverage: "₹25,000 వరకు కవరేజ్",
            features: ["న్యాయ సహాయం", "తక్షణ క్లెయిమ్", "గుర్తింపు రికవరీ"],
            buy: "రక్షించుకోండి"
        },
        feed: {
            title: "మండి న్యూస్ (లైవ్)",
            report: "స్థానిక సంఘటనను నివేదించండి"
        }
    },
    toolsIndex: {
        title: "సైబర్ రక్షణ టూల్‌కిట్",
        subtitle: "డిజిటల్ మోసాల నుండి మిమ్మల్ని, మీ కుటుంబాన్ని మరియు మీ వ్యాపారాన్ని రక్షించడానికి శక్తివంతమైన, ప్రభుత్వ-స్థాయి సాధనాలు.",
        phishingTitle: "ఫిషింగ్ డోజో",
        phishingDesc: "స్కామ్‌లను గుర్తించడానికి గేమిఫైడ్ శిక్షణ.",
        whatsappTitle: "వాట్సాప్ బాట్ చెక్",
        whatsappDesc: "లింక్‌లను తనిఖీ చేయడానికి అనుమానాస్పద సందేశాలను ఫార్వార్డ్ చేయండి.",
        firTitle: "AI FIR డ్రాఫ్టర్",
        firDesc: "చట్టబద్ధమైన పోలీసు ఫిర్యాదును రూపొందించండి.",
        digitalArrestTitle: "డిజిటల్ అరెస్ట్ సిమ్యులేటర్",
        digitalArrestDesc: "భద్రతను తెలుసుకోవడానికి నకిలీ పోలీసు కాల్‌ను అనుభవించండి.",
        fakePaymentTitle: "నకిలీ చెల్లింపు డిటెక్టర్",
        fakePaymentDesc: "వ్యాపారుల కోసం: నకిలీ చెల్లింపు స్క్రీన్‌లను గుర్తించండి.",
        muleTitle: "మ్యూల్ ఖాతా శోధన",
        muleDesc: "బ్లాక్‌లిస్ట్ చేయబడిన మోసపూరిత నంబర్లను శోధించండి.",
        apkTitle: "APK భద్రతా స్కానర్",
        apkDesc: "మీ యాప్‌లలో ప్రమాదకరమైన అనుమతులను కనుగొనండి.",
        smsTitle: "SMS కేసు ట్రాకర్",
        smsDesc: "'మిస్డ్ కాల్' ద్వారా ఆఫ్‌లైన్ స్థితి తనిఖీ.",
        communityTitle: "కమ్యూనిటీ షీల్డ్",
        communityDesc: "కుటుంబ భద్రత, బీమా & స్థానిక హెచ్చరికలు."
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
    },
    apkScanner: {
        title: "செயலி ஆபத்து ஸ்கேனர்",
        subtitle: "நிறுவும் முன் சந்தேகத்திற்கிடமான செயலிகளை பகுப்பாய்வு செய்யுங்கள்.",
        permissionsTitle: "அனுமதிகள்",
        permissionsDesc: "செயலி என்ன கேட்கிறது?",
        analyzeBtn: "ஆபத்து மதிப்பெண்ணைக் கணக்கிடு",
        scanning: "ஸ்கேன் செய்கிறது...",
        riskScore: "ஆபத்து மதிப்பெண்",
        threatAssess: "அச்சுறுத்தல் மதிப்பீடு",
        critical: "முக்கியமான மால்வேர் ஆபத்து",
        high: "அதிக ஆபத்து",
        moderate: "மிதமான ஆபத்து",
        safe: "பாதுகாப்பானது",
        scanAnother: "மற்றொரு செயலியை ஸ்கேன் செய்யவும்",
        dangerAlert: "ஆபத்தான அனுமதி சேர்க்கை கண்டறியப்பட்டது! நிறுவ வேண்டாம்!",
        quickScenarios: "விரைவான காட்சிகள்",
        report: "இந்த செயலியைப் புகாரளிக்கவும்",
        perms: {
            camera: "கேமரா (புகைப்படங்கள்/வீடியோ)",
            mic: "மைக்ரோஃபோன் (ஆடியோ பதிவு)",
            location: "துல்லியமான இடம்",
            contacts: "தொடர்புகளைப் படிக்கவும்",
            sms: "SMS படிக்கவும் (OTPகள்)",
            storage: "சேமிப்பு (புகைப்படங்கள்/கோப்புகள்)",
            phone: "தொலைபேசி நிலை/அழைப்பு பதிவு",
            overlay: "செயலிகளின் மேல் காட்டு",
            accessibility: "அணுகல் சேவைகள் (முழு கட்டுப்பாடு)"
        },
        presets: {
            loan: "உடனடி கடன் செயலி",
            betting: "பந்தயம்/ரம்மி விளையாட்டு",
            dating: "டேட்டிங்/அரட்டை செயலி",
            fakeKyc: "போலி KYC செயலி",
            flashlight: "ஃபிளாஷ்லைட் செயலி"
        },
        advice: {
            smsOverlay: "🚨 முக்கியமானது: SMS + ஓவர்லே என்பது வங்கி ட்ரோஜான்களின் (Drebin/Joker மால்வேர்) கையொப்பமாகும்.",
            accessibility: "⚠️ கணினி கையகப்படுத்தல்: அணுகல் செயலி உங்களுக்கான பொத்தான்களைக் கிளிக் செய்ய அனுமதிக்கிறது. இது உங்கள் வங்கிக் கணக்கைக் காலியாக்கலாம்.",
            extortion: "📉 மிரட்டி பணம் பறிக்கும் ஆபத்து: கொள்ளையடிக்கும் கடன் செயலிகள் கேலரி புகைப்படங்கள் + தொடர்பு பட்டியலைத் திருடவும் பாதிக்கப்பட்டவர்களை மிரட்டவும் இந்த காம்போவைப் பயன்படுத்துகின்றன."
        }
    },
    firDrafter: {
        title: "AI FIR வரைவாளர்",
        subtitle: "சட்டபூர்வமான காவல் புகாரை நொடிகளில் உருவாக்கவும்.",
        form: {
            personalTitle: "புகார்தாரர் விவரங்கள்",
            incidentTitle: "சம்பவ விவரங்கள்",
            name: "முழு பெயர்",
            address: "முகவரி & நகரம்",
            date: "சம்பவ தேதி",
            time: "தோராயமான நேரம்",
            city: "சம்பவ நகரம்",
            type: "சம்பவ வகை",
            amount: "இழந்த தொகை (₹)",
            suspect: "சந்தேக நபர் விவரங்கள் (எண்/UPI)",
            desc: "விரிவான விளக்கம்"
        },
        types: {
            financial: "நிதி மோசடி / UPI",
            stalking: "சைபர் ஸ்டாக்கிங்",
            job: "போலி வேலை வாய்ப்பு",
            sextortion: "பிளாக்மெயில்/செக்ஸ்டார்ஷன்"
        },
        buttons: {
            generate: "புகாரை வரையவும்",
            drafting: "வரைவு செய்கிறது...",
            download: "PDF பதிவிறக்கம்",
            print: "அச்சிடுக"
        },
        preview: {
            ready: "ஆவணம் தயார்!",
            legalCite: "மேற்கோள்: BNS 2023 பிரிவு 318 & IT சட்டம் 2000 பிரிவு 66D",
            header: "F.I.R பதிவுக்கான விண்ணப்பம்",
            to: "பெறுநர்,",
            sho: "காவல் ஆய்வாளர் அவர்கள்,",
            subject: "பொருள்: சைபர் குற்றம் தொடர்பான புகார்",
            bodyStart: "நான் ஒரு சைபர் குற்ற சம்பவத்தைப் புகாரளிக்க விரும்புகிறேன்.",
            request: "FIR பதிவு செய்து உரிய நடவடிக்கை எடுக்குமாறு கேட்டுக்கொள்கிறேன்."
        }
    },
    muleSearch: {
        title: "கட்டண மோசடியைத் தடு",
        subtitle: "பணம் செலுத்தும் முன் இந்த எண் அல்லது UPI 'மூல் கணக்கு' என புகாரளிக்கப்பட்டுள்ளதா என சோதிக்கவும்.",
        placeholder: "தொலைபேசி எண் / UPI ID ஐ உள்ளிடவும்...",
        checkBtn: "சோதிக்கவும்",
        back: "பின்னால்",
        highRisk: "அதிக ஆபத்து கண்டறியப்பட்டது",
        safe: "புகார்கள் எதுவும் இல்லை",
        safeDesc: "இந்த கணக்கு எங்கள் தரவுத்தளத்தில் இன்னும் கொடியிடப்படவில்லை. இருப்பினும் எச்சரிக்கையாக இருங்கள்.",
        doNotPay: "பணம் செலுத்த வேண்டாம்",
        reports: "கடந்த 7 நாட்களில் புகார்கள்:"
    },
    community: {
        title: "சமூக கேடயம்",
        guardians: "செயலில் உள்ள பாதுகாவலர்கள்",
        family: {
            title: "சுரக்ஷா பந்தன் (குடும்ப பாதுகாப்பு)",
            protect: "உங்கள் பெரியவர்களைப் பாதுகாக்கவும்",
            protectDesc: "பெற்றோரின் சாதனங்களை இணைக்கவும். சந்தேகத்திற்கிடமான SMS வந்தால் உடனடி எச்சரிக்கைகளைப் பெறுங்கள்.",
            addBtn: "குடும்ப உறுப்பினரைச் சேர்க்கவும்",
            nickname: "செல்லப்பெயர்",
            phone: "தொலைபேசி எண்",
            sendInvite: "அழைப்பை அனுப்பு"
        },
        insurance: {
            title: "மைக்ரோ-சைபர் காப்பீடு",
            price: "₹99/ஆண்டு",
            coverage: "₹25,000 வரை பாதுகாப்பு",
            features: ["சட்ட உதவி", "உடனடி உரிமைகோரல்", "அடையாள மீட்பு"],
            buy: "இப்போது பாதுகாக்கவும்"
        },
        feed: {
            title: "மண்டி செய்திகள் (நேரடி)",
            report: "உள்ளூர் சம்பவத்தைப் புகாரளிக்கவும்"
        }
    },
    toolsIndex: {
        title: "சைபர் பாதுகாப்பு கருவிப்பெட்டி",
        subtitle: "டிஜிட்டல் மோசடியிலிருந்து உங்களையும், உங்கள் குடும்பத்தையும், உங்கள் வணிகத்தையும் பாதுகாக்க சக்திவாய்ந்த, அரசாங்கத் தரமான கருவிகள்.",
        phishingTitle: "ஃபிஷிங் டோஜோ",
        phishingDesc: "மோசடிகளை கண்டறிய கேமிஃபைட் பயிற்சி.",
        whatsappTitle: "வாட்ஸ்அப் பாட் சரிபார்ப்பு",
        whatsappDesc: "இணைப்புகளைச் சரிபார்க்க சந்தேகத்திற்கிடமான செய்திகளை அனுப்பவும்.",
        firTitle: "AI FIR வரைவாளர்",
        firDesc: "சட்டபூர்வமான காவல் புகாரை உருவாக்கவும்.",
        digitalArrestTitle: "டிஜிட்டல் கைது சிமுலேட்டர்",
        digitalArrestDesc: "பாதுகாப்பைக் கற்றுக்கொள்ள போலித் காவல் அழைப்பை அனுபவிக்கவும்.",
        fakePaymentTitle: "போலி கட்டணக் கண்டறிதல்",
        fakePaymentDesc: "வணிகர்களுக்கு: போலி கட்டணத் திரைகளைக் கண்டறியவும்.",
        muleTitle: "மூல் கணக்குத் தேடல்",
        muleDesc: "தடைசெய்யப்பட்ட மோசடி எண்களைத் தேடுங்கள்.",
        apkTitle: "APK பாதுகாப்பு ஸ்கேனர்",
        apkDesc: "உங்கள் செயலிகளில் ஆபத்தான அனுமதிகளைக் கண்டறியவும்.",
        smsTitle: "SMS வழக்கு டிராக்கர்",
        smsDesc: "'மிஸ்டு கால்' மூலம் ஆஃப்லைன் நிலை சரிபார்ப்பு.",
        communityTitle: "சமூகக் கேடயம்",
        communityDesc: "குடும்பப் பாதுகாப்பு, காப்பீடு & உள்ளூர் எச்சரிக்கைகள்."
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
    },
    apkScanner: {
        title: "ಆಪ್ ರಿಸ್ಕ್ ಸ್ಕ್ಯಾನರ್",
        subtitle: "ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವ ಮೊದಲು ಅನುಮಾನಾಸ್ಪದ ಆ್ಯಪ್‌ಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ.",
        permissionsTitle: "ಅನುಮತಿಗಳು",
        permissionsDesc: "ಆ್ಯಪ್ ಏನು ಕೇಳುತ್ತಿದೆ?",
        analyzeBtn: "ರಿಸ್ಕ್ ಸ್ಕೋರ್ ಲೆಕ್ಕಹಾಕಿ",
        scanning: "ಸ್ಕ್ಯಾನಿಂಗ್...",
        riskScore: "ರಿಸ್ಕ್ ಸ್ಕೋರ್",
        threatAssess: "ಬೆದರಿಕೆ ಮೌಲ್ಯಮಾಪನ",
        critical: "ಗಂಭೀರ ಮಾಲ್‌ವೇರ್ ರಿಸ್ಕ್",
        high: "ಹೆಚ್ಚಿನ ರಿಸ್ಕ್",
        moderate: "ಮಧ್ಯಮ ರಿಸ್ಕ್",
        safe: "ಸುರಕ್ಷಿತ",
        scanAnother: "ಮತ್ತೊಂದು ಆ್ಯಪ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
        dangerAlert: "ಅಪಾಯಕಾರಿ ಅನುಮತಿ ಸಂಯೋಜನೆ ಪತ್ತೆಯಾಗಿದೆ! ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಬೇಡಿ!",
        quickScenarios: "ತ್ವರಿತ ಸನ್ನಿವೇಶಗಳು",
        report: "ಈ ಆ್ಯಪ್ ವರದಿ ಮಾಡಿ",
        perms: {
            camera: "ಕ್ಯಾಮೆರಾ (ಫೋಟೋ/ವಿಡಿಯೋ)",
            mic: "ಮೈಕ್ರೊಫೋನ್ (ಆಡಿಯೋ ರೆಕಾರ್ಡ್)",
            location: "ನಿಖರವಾದ ಸ್ಥಳ",
            contacts: "ಸಂಪರ್ಕಗಳನ್ನು ಓದಿ",
            sms: "SMS ಓದಿ (OTP ಗಳು)",
            storage: "ಶೇಖರಣೆ (ಫೋಟೋ/ಫೈಲ್)",
            phone: "ಫೋನ್ ಸ್ಥಿತಿ/ಕರೆ ಲಾಗ್",
            overlay: "ಆ್ಯಪ್‌ಗಳ ಮೇಲೆ ಪ್ರದರ್ಶಿಸಿ",
            accessibility: "ಪ್ರವೇಶ ಸೇವೆಗಳು (ಪೂರ್ಣ ನಿಯಂತ್ರಣ)"
        },
        presets: {
            loan: "ತ್ವರಿತ ಸಾಲದ ಆ್ಯಪ್",
            betting: "ಬೆಟ್ಟಿಂಗ್/ರಮ್ಮಿ ಗೇಮ್",
            dating: "ಡೇಟಿಂಗ್/ಚಾಟ್ ಆ್ಯಪ್",
            fakeKyc: "ನಕಲಿ KYC ಆ್ಯಪ್",
            flashlight: "ಫ್ಲ್ಯಾಶ್‌ಲೈಟ್ ಆ್ಯಪ್"
        },
        advice: {
            smsOverlay: "🚨 ಗಂಭೀರ: SMS + ಓವರ್‌ಲೇ ಬ್ಯಾಂಕಿಂಗ್ ಟ್ರೋಜನ್‌ಗಳ (Drebin/Joker ಮಾಲ್‌ವೇರ್) ಲಕ್ಷಣವಾಗಿದೆ.",
            accessibility: "⚠️ ಸಿಸ್ಟಮ್ ಸ್ವಾಧೀನ: ಪ್ರವೇಶಿಸುವಿಕೆ ಆ್ಯಪ್‌ಗೆ ನಿಮಗಾಗಿ ಬಟನ್‌ಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ. ಇದು ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಯನ್ನು ಖಾಲಿ ಮಾಡಬಹುದು.",
            extortion: "📉 ಸುಲಿಗೆ ಅಪಾಯ: ಪರಭಕ್ಷಕ ಸಾಲದ ಆ್ಯಪ್‌ಗಳು ಗ್ಯಾಲರಿ ಫೋಟೋಗಳು + ಸಂಪರ್ಕ ಪಟ್ಟಿಯನ್ನು ಕದಿಯಲು ಮತ್ತು ಸಂತ್ರಸ್ತರಿಗೆ ಬ್ಲ್ಯಾಕ್ ಮೇಲ್ ಮಾಡಲು ಈ ಕಾಂಬೊವನ್ನು ಬಳಸುತ್ತವೆ."
        }
    },
    firDrafter: {
        title: "AI FIR ಡ್ರಾಫ್ಟರ್",
        subtitle: "ಕಾನೂನುಬದ್ಧ ಪೊಲೀಸ್ ದೂರನ್ನು ಸೆಕೆಂಡುಗಳಲ್ಲಿ ರಚಿಸಿ.",
        form: {
            personalTitle: "ದೂರುದಾರರ ವಿವರಗಳು",
            incidentTitle: "ಘಟನೆಯ ವಿವರಗಳು",
            name: "ಪೂರ್ಣ ಹೆಸರು",
            address: "ವಿಳಾಸ ಮತ್ತು ನಗರ",
            date: "ಘಟನೆಯ ದಿನಾಂಕ",
            time: "ಸಮಯ",
            city: "ಘಟನೆಯ ನಗರ",
            type: "ಘಟನೆಯ ಪ್ರಕಾರ",
            amount: "ಕಳೆದುಕೊಂಡ ಮೊತ್ತ (₹)",
            suspect: "ಶಂಕಿತ ವಿವರಗಳು (ಸಂಖ್ಯೆ/UPI)",
            desc: "ವಿವರವಾದ ವಿವರಣೆ"
        },
        types: {
            financial: "ಹಣಕಾಸು ವಂಚನೆ / UPI",
            stalking: "ಸೈಬರ್ ಸ್ಟಾಕಿಂಗ್",
            job: "ನಕಲಿ ಉದ್ಯೋಗ",
            sextortion: "ಬ್ಲ್ಯಾಕ್‌ಮೇಲ್/ಸೆಕ್ಸ್‌ಟಾರ್ಷನ್"
        },
        buttons: {
            generate: "ದೂರು ಡ್ರಾಫ್ಟ್ ಮಾಡಿ",
            drafting: "ಡ್ರಾಫ್ಟಿಂಗ್...",
            download: "PDF ಡೌನ್‌ಲೋಡ್",
            print: "ಮುದ್ರಿಸಿ"
        },
        preview: {
            ready: "ದಾಖಲೆ ಸಿದ್ಧವಾಗಿದೆ!",
            legalCite: "ಉಲ್ಲೇಖ: BNS 2023 ಸೆಕ್ಷನ್ 318 ಮತ್ತು IT ಕಾಯಿದೆ 2000 ಸೆಕ್ಷನ್ 66D",
            header: "F.I.R ನೋಂದಣಿಗೆ ಅರ್ಜಿ",
            to: "ಗೆ,",
            sho: "ಠಾಣಾಧಿಕಾರಿಗಳು,",
            subject: "ವಿಷಯ: ಸೈಬರ್ ಅಪರಾಧದ ಬಗ್ಗೆ ದೂರು",
            bodyStart: "ನಾನು ಸೈಬರ್ ಅಪರಾಧ ಘಟನೆಯನ್ನು ವರದಿ ಮಾಡಲು ಬಯಸುತ್ತೇನೆ.",
            request: "FIR ದಾಖಲಿಸಿ ಅಗತ್ಯ ಕ್ರಮ ಕೈಗೊಳ್ಳುವಂತೆ ಕೋರುತ್ತೇನೆ."
        }
    },
    muleSearch: {
        title: "ಪಾವತಿ ವಂಚನೆ ತಡೆಯಿರಿ",
        subtitle: "ಹಣ ಪಾವತಿಸುವ ಮೊದಲು ಈ ಸಂಖ್ಯೆ ಅಥವಾ UPI 'ಮ್ಯೂಲ್ ಖಾತೆ' ಎಂದು ವರದಿಯಾಗಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ.",
        placeholder: "ಫೋನ್ ಸಂಖ್ಯೆ / UPI ID ನಮೂದಿಸಿ...",
        checkBtn: "ಪರಿಶೀಲಿಸಿ",
        back: "ಹಿಂದೆ",
        highRisk: "ಹೆಚ್ಚಿನ ರಿಸ್ಕ್ ಪತ್ತೆಯಾಗಿದೆ",
        safe: "ಯಾವುದೇ ವರದಿಗಳಿಲ್ಲ",
        safeDesc: "ಈ ಖಾತೆಯ ಬಗ್ಗೆ ನಮ್ಮ ಡೇಟಾಬೇಸ್‌ನಲ್ಲಿ ಇನ್ನೂ ಯಾವುದೇ ವರದಿಯಿಲ್ಲ. ಆದರೂ ಎಚ್ಚರದಿಂದಿರಿ.",
        doNotPay: "ಪಾವತಿಸಬೇಡಿ",
        reports: "ಕಳೆದ 7 ದಿನಗಳಲ್ಲಿ ವರದಿಗಳು:"
    },
    community: {
        title: "ಕಮ್ಯುನಿಟಿ ಶೀಲ್ಡ್",
        guardians: "ಸಕ್ರಿಯ ರಕ್ಷಕರು",
        family: {
            title: "ಸುರಕ್ಷಾ ಬಂಧನ್ (ಕುಟುಂಬ ಸುರಕ್ಷತೆ)",
            protect: "ನಿಮ್ಮ ಹಿರಿಯರನ್ನು ರಕ್ಷಿಸಿ",
            protectDesc: "ಪೋಷಕರ ಸಾಧನಗಳನ್ನು ಲಿಂಕ್ ಮಾಡಿ. ಅನುಮಾನಾಸ್ಪದ SMS ಬಂದರೆ ತಕ್ಷಣ ಎಚ್ಚರಿಕೆ ಪಡೆಯಿರಿ.",
            addBtn: "ಕುಟುಂಬದ ಸದಸ್ಯರನ್ನು ಸೇರಿಸಿ",
            nickname: "ಅಡ್ಡಹೆಸರು",
            phone: "ಫೋನ್ ಸಂಖ್ಯೆ",
            sendInvite: "ಆಹ್ವಾನ ಕಳುಹಿಸಿ"
        },
        insurance: {
            title: "ಮೈಕ್ರೋ-ಸೈಬರ್ ವಿಮೆ",
            price: "₹99/ವರ್ಷ",
            coverage: "₹25,000 ವರೆಗೆ ರಕ್ಷಣೆ",
            features: ["ಕಾನೂನು ಸಹಾಯ", "ತ್ವರಿತ ಕ್ಲೈಮ್", "ಗುರುತು ಚೇತರಿಕೆ"],
            buy: "ಈಗಲೇ ರಕ್ಷಿಸಿ"
        },
        feed: {
            title: "ಮಂಡಿ ಸುದ್ದಿ (ಲೈವ್)",
            report: "ಸ್ಥಳೀಯ ಘಟನೆ ವರದಿ ಮಾಡಿ"
        }
    },
    toolsIndex: {
        title: "ಸೈಬರ್ ರಕ್ಷಣಾ ಟೂಲ್‌ಕಿಟ್",
        subtitle: "ಡಿಜಿಟಲ್ ವಂಚನೆಯಿಂದ ನಿಮ್ಮನ್ನು, ನಿಮ್ಮ ಕುಟುಂಬವನ್ನು ಮತ್ತು ನಿಮ್ಮ ವ್ಯಾಪಾರವನ್ನು ರಕ್ಷಿಸಲು ಪ್ರಬಲವಾದ, ಸರ್ಕಾರಿ ದರ್ಜೆಯ ಪರಿಕರಗಳು.",
        phishingTitle: "ಫಿಶಿಂಗ್ ಡೋಜೋ",
        phishingDesc: "ಹಗರಣಗಳನ್ನು ಗುರುತಿಸಲು ಗೇಮಿಫೈಡ್ ತರಬೇತಿ.",
        whatsappTitle: "ವಾಟ್ಸಾಪ್ ಬಾಟ್ ಚೆಕ್",
        whatsappDesc: "ಲಿಂಕ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಲು ಅನುಮಾನಾಸ್ಪದ ಸಂದೇಶಗಳನ್ನು ಫಾರ್ವರ್ಡ್ ಮಾಡಿ.",
        firTitle: "AI FIR ಡ್ರಾಫ್ಟರ್",
        firDesc: "ಕಾನೂನುಬದ್ಧ ಪೊಲೀಸ್ ದೂರನ್ನು ರಚಿಸಿ.",
        digitalArrestTitle: "ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್ ಸಿಮ್ಯುಲೇಟರ್",
        digitalArrestDesc: "ಸುರಕ್ಷತೆಯನ್ನು ಕಲಿಯಲು ನಕಲಿ ಪೊಲೀಸ್ ಕರೆಯನ್ನು ಅನುಭವಿಸಿ.",
        fakePaymentTitle: "ನಕಲಿ ಪಾವತಿ ಪತ್ತೆದರ",
        fakePaymentDesc: "ವ್ಯಾಪಾರಿಗಳಿಗಾಗಿ: ನಕಲಿ ಪಾವತಿ ಸ್ಕ್ರೀನ್‌ಗಳನ್ನು ಗುರುತಿಸಿ.",
        muleTitle: "ಮ್ಯೂಲ್ ಖಾತೆ ಹುಡುಕಾಟ",
        muleDesc: "ಬ್ಲ್ಯಾಕ್‌ಲಿಸ್ಟ್ ಮಾಡಲಾದ ವಂಚನೆ ಸಂಖ್ಯೆಗಳನ್ನು ಹುಡುಕಿ.",
        apkTitle: "APK ಸುರಕ್ಷತಾ ಸ್ಕ್ಯಾನರ್",
        apkDesc: "ನಿಮ್ಮ ಆ್ಯಪ್‌ಗಳಲ್ಲಿ ಅಪಾಯಕಾರಿ ಅನುಮತಿಗಳನ್ನು ಹುಡುಕಿ.",
        smsTitle: "SMS ಕೇಸ್ ಟ್ರ್ಯಾಕರ್",
        smsDesc: "'ಮಿಸ್ಡ್ ಕಾಲ್' ಮೂಲಕ ಆಫ್‌ಲೈನ್ ಸ್ಥಿತಿ ಪರಿಶೀಲನೆ.",
        communityTitle: "ಕಮ್ಯುನಿಟಿ ಶೀಲ್ಡ್",
        communityDesc: "ಕುಟುಂಬ ಸುರಕ್ಷತೆ, ವಿಮೆ ಮತ್ತು ಸ್ಥಳೀಯ ಎಚ್ಚರಿಕೆಗಳು."
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
    },
    apkScanner: {
        title: "অ্যাপ রিস্ক স্ক্যানার",
        subtitle: "ইনস্টল করার আগে সন্দেহজনক অ্যাপ বিশ্লেষণ করুন।",
        permissionsTitle: "অনুমতি",
        permissionsDesc: "অ্যাপটি কী চাইছে?",
        analyzeBtn: "ঝুঁকি স্কোর গণনা করুন",
        scanning: "স্ক্যান করা হচ্ছে...",
        riskScore: "ঝুঁকি স্কোর",
        threatAssess: "হুমকি মূল্যায়ন",
        critical: "গুরুতর ম্যালওয়্যার ঝুঁকি",
        high: "উচ্চ ঝুঁকি",
        moderate: "মাঝারি ঝুঁকি",
        safe: "নিরাপদ",
        scanAnother: "অন্য অ্যাপ স্ক্যান করুন",
        dangerAlert: "বিপজ্জনক অনুমতি কম্বিনেশন সনাক্ত হয়েছে! ইনস্টল করবেন না!",
        quickScenarios: "দ্রুত পরিস্থিতি",
        report: "এই অ্যাপ রিপোর্ট করুন",
        perms: {
            camera: "ক্যামেরা (ছবি/ভিডিও)",
            mic: "মাইক্রোফোন (অডিও রেকর্ড)",
            location: "সঠিক অবস্থান",
            contacts: "কন্টাক্ট পড়ুন",
            sms: "এসএমএস পড়ুন (OTP)",
            storage: "স্টোরেজ (ছবি/ফাইল)",
            phone: "ফোন স্ট্যাটাস/কল লগ",
            overlay: "অ্যাপের উপরে প্রদর্শন",
            accessibility: "অ্যাক্সেসিবিলিটি সার্ভিস (পূর্ণ নিয়ন্ত্রণ)"
        },
        presets: {
            loan: "তাৎক্ষণিক লোন অ্যাপ",
            betting: "বেটিং/রামি গেম",
            dating: "ডেটিং/চ্যাট অ্যাপ",
            fakeKyc: "ভুয়া KYC অ্যাপ",
            flashlight: "ফ্ল্যাশলাইট অ্যাপ"
        },
        advice: {
            smsOverlay: "🚨 গুরুতর: এসএমএস + ওভারলে হল ব্যাংকিং ট্রোজানের (Drebin/Joker ম্যালওয়্যার) লক্ষণ।",
            accessibility: "⚠️ সিস্টেম টেকওভার: অ্যাক্সেসিবিলিটি অ্যাপটিকে আপনার জন্য বোতামে ক্লিক করার অনুমতি দেয়। এটি আপনার ব্যাংক অ্যাকাউন্ট খালি করতে পারে।",
            extortion: "📉 চাঁদাবাজির ঝুঁকি: শিকারী লোন অ্যাপগুলি গ্যালারি ফটো + কন্টাক্ট লিস্ট চুরি করতে এবং ভিকথিমদের ব্ল্যাকমেইল করতে এই কম্বো ব্যবহার করে।"
        }
    },
    firDrafter: {
        title: "AI FIR ড্রাফটার",
        subtitle: "সেকেন্ডের মধ্যে একটি আইনি পুলিশ অভিযোগ তৈরি করুন।",
        form: {
            personalTitle: "অভিযোগকারীর বিবরণ",
            incidentTitle: "ঘটনার বিবরণ",
            name: "পুরো নাম",
            address: "ঠিকানা ও শহর",
            date: "ঘটনার তারিখ",
            time: "আনুমানিক সময়",
            city: "ঘটনার শহর",
            type: "ঘটনার ধরন",
            amount: "হারানো পরিমাণ (₹)",
            suspect: "সন্দেহভাজনের বিবরণ (নম্বর/UPI)",
            desc: "বিস্তারিত বিবরণ"
        },
        types: {
            financial: "আর্থিক জালিয়াতি / UPI",
            stalking: "সাইবার স্টকিং",
            job: "ভুয়া চাকরির অফার",
            sextortion: "ব্ল্যাকমেইল/সেক্সটর্শন"
        },
        buttons: {
            generate: "অভিযোগ ড্রাফ্ট করুন",
            drafting: "ড্রাফ্টিং...",
            download: "PDF ডাউনলোড",
            print: "প্রিন্ট করুন"
        },
        preview: {
            ready: "ডকুমেন্ট তৈরি!",
            legalCite: "উদ্ধৃত: BNS 2023 ধারা 318 এবং IT অ্যাক্ট 2000 ধারা 66D",
            header: "F.I.R নিবন্ধনের জন্য আবেদন",
            to: "প্রতি,",
            sho: "থানা ভারপ্রাপ্ত কর্মকর্তা,",
            subject: "বিষয়: সাইবার অপরাধ সংক্রান্ত অভিযোগ",
            bodyStart: "আমি একটি সাইবার অপরাধের ঘটনার রিপোর্ট করতে চাই।",
            request: "অনুরোধ করছি যে এফআইআর নিবন্ধন করুন এবং প্রয়োজনীয় ব্যবস্থা নিন।"
        }
    },
    muleSearch: {
        title: "পেমেন্ট জালিয়াতি থামান",
        subtitle: "পেমেন্ট করার আগে চেক করুন এই নম্বর বা UPI 'মিউল অ্যাকাউন্ট' হিসেবে রিপোর্ট করা হয়েছে কিনা।",
        placeholder: "ফোন নম্বর / UPI ID লিখুন...",
        checkBtn: "চেক করুন",
        back: "ফিরে যান",
        highRisk: "উচ্চ ঝুঁকি সনাক্ত হয়েছে",
        safe: "কোনো রিপোর্ট পাওয়া যায়নি",
        safeDesc: "এই অ্যাকাউন্টটি আমাদের ডাটাবেসে এখনও ফ্ল্যাগ করা হয়নি। তবে সতর্ক থাকুন।",
        doNotPay: "পেমেন্ট করবেন না",
        reports: "গত ৭ দিনে রিপোর্ট:"
    },
    community: {
        title: "কমিউনিটি শিল্ড",
        guardians: "সক্রিয় অভিভাবক",
        family: {
            title: "সুরক্ষা বন্ধন (পারিবারিক নিরাপত্তা)",
            protect: "আপনার মুরুব্বিদের রক্ষা করুন",
            protectDesc: "বাবা-মায়ের ডিভাইস লিঙ্ক করুন। সন্দেহজনক এসএমএস পেলে তাৎক্ষণিক সতর্কতা পান।",
            addBtn: "সদস্য যোগ করুন",
            nickname: "ডাকনাম",
            phone: "ফোন নম্বর",
            sendInvite: "আমন্ত্রণ পাঠান"
        },
        insurance: {
            title: "মাইক্রো-সাইবার ইন্স্যুরেন্স",
            price: "₹৯৯/বছর",
            coverage: "₹২৫,০০০ পর্যন্ত কভারেজ",
            features: ["আইনি সহায়তা", "তাৎক্ষণিক দাবি", "পরিচয় পুনরুদ্ধার"],
            buy: "এখনই সুরক্ষিত করুন"
        },
        feed: {
            title: "মান্ডি নিউজ (লাইভ)",
            report: "স্থানীয় ঘটনা রিপোর্ট করুন"
        }
    },
    toolsIndex: {
        title: "সাইবার প্রতিরক্ষা টুলকিট",
        subtitle: "ডিজিটাল জালিয়াতি থেকে আপনাকে, আপনার পরিবারকে এবং আপনার ব্যবসাকে রক্ষা করার জন্য শক্তিশালী, সরকারি-মানের সরঞ্জাম।",
        phishingTitle: "ফিশिंग ডোজো",
        phishingDesc: "স্ক্যাম সনাক্ত করতে গেমিফাইড প্রশিক্ষণ।",
        whatsappTitle: "হোয়াটসঅ্যাপ বট চেক",
        whatsappDesc: "লিঙ্ক চেক করতে সন্দেহজনক বার্তা ফরোয়ার্ড করুন।",
        firTitle: "AI FIR ড্রাফটার",
        firDesc: "আইনগতভাবে বৈধ পুলিশ অভিযোগ তৈরি করুন।",
        digitalArrestTitle: "ডিজিটাল অ্যারেস্ট সিমুলেটর",
        digitalArrestDesc: "নিরাপত্তা শিখতে নকল পুলিশ কলের অভিজ্ঞতা নিন।",
        fakePaymentTitle: "ভুয়া পেমেন্ট ডিটেক্টর",
        fakePaymentDesc: "ব্যবসায়ীদের জন্য: ভুয়া পেমেন্ট স্ক্রিন স্পট করুন।",
        muleTitle: "মিউল অ্যাকাউন্ট অনুসন্ধান",
        muleDesc: "কালো তালিকাভুক্ত জালিয়াতির নম্বর খুঁজুন।",
        apkTitle: "APK নিরাপত্তা স্ক্যানার",
        apkDesc: "আপনার অ্যাপে বিপজ্জনক অনুমতি খুঁজুন।",
        smsTitle: "SMS কেস ট্র্যাকার",
        smsDesc: "'মিসড কল' এর মাধ্যমে অফলাইন স্ট্যাটাস চেক।",
        communityTitle: "কমিউনিটি শিল্ড",
        communityDesc: "পারিবারিক নিরাপত্তা, বীমা এবং স্থানীয় সতর্কতা."
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
    },
    apkScanner: {
        title: "એપ્લિકેશન જોખમ સ્કેનર",
        subtitle: "ઇન્સ્ટોલ કરતા પહેલા શંકાસ્પદ એપ્લિકેશન્સનું વિશ્લેષણ કરો.",
        permissionsTitle: "પરવાનગીઓ",
        permissionsDesc: "એપ્લિકેશન શું માંગી રહી છે?",
        analyzeBtn: "જોખમ સ્કોર ગણતરી",
        scanning: "સ્કેનિંગ...",
        riskScore: "જોખમ સ્કોર",
        threatAssess: "ધમકી મૂલ્યાંકન",
        critical: "ગંભીર માલવેર જોખમ",
        high: "ઉચ્ચ જોખમ",
        moderate: "મધ્યમ જોખમ",
        safe: "સુરક્ષિત",
        scanAnother: "બીજી એપ્લિકેશન સ્કેન કરો",
        dangerAlert: "ખતરનાક પરવાનગી સંયોજન મળ્યું! ઇન્સ્ટોલ કરશો નહીં!",
        quickScenarios: "ઝડપી દૃશ્યો",
        report: "આ એપ્લિકેશનની જાણ કરો",
        perms: {
            camera: "કેમેરા (ફોટા/વિડિઓ)",
            mic: "માઇક્રોફોન (ઓડિયો રેકોર્ડ)",
            location: "ચોક્કસ સ્થાન",
            contacts: "સંપર્કો વાંચો",
            sms: "SMS વાંચો (OTP)",
            storage: "સ્ટોરેજ (ફોટા/ફાઇલો)",
            phone: "ફોન સ્થિતિ/કોલ લોગ",
            overlay: "એપ્લિકેશન્સ ઉપર દર્શાવો",
            accessibility: "એક્સેસિબિલિટી સેવાઓ (સંપૂર્ણ નિયંત્રણ)"
        },
        presets: {
            loan: "ઇન્સ્ટન્ટ લોન એપ્લિકેશન",
            betting: "સટ્ટાબાજી/રમ્મી ગેમ",
            dating: "ડેટિંગ/ચેટ એપ્લિકેશન",
            fakeKyc: "નકલી KYC એપ્લિકેશન",
            flashlight: "ફ્લેશલાઇટ એપ્લિકેશન"
        },
        advice: {
            smsOverlay: "🚨 ગંભીર: SMS + ઓવરલે એ બેંકિંગ ટ્રોજન (Drebin/Joker માલવેર) ની નિશાની છે।",
            accessibility: "⚠️ સિસ્ટમ ટેકઓવર: એક્સેસિબિલિટી એપ્લિકેશનને તમારા માટે બટનો ક્લિક કરવાની મંજૂરી આપે છે. તે તમારું બેંક ખાતું ખાલી કરી શકે છે।",
            extortion: "📉 ખંડણીનું જોખમ: પ્રિડેટરી લોન એપ્લિકેશન્સ ગેલેરી ફોટા + સંપર્ક સૂચિ ચોરી કરવા અને પીડિતોને બ્લેકમેલ કરવા માટે આ કોમ્બોનો ઉપયોગ કરે છે।"
        }
    },
    firDrafter: {
        title: "AI FIR ડ્રાફટર",
        subtitle: "સેકંડમાં કાયદેસર પોલીસ ફરિયાદ તૈયાર કરો.",
        form: {
            personalTitle: "ફરિયાદીની વિગતો",
            incidentTitle: "ઘટનાની વિગતો",
            name: "પૂરું નામ",
            address: "સરનામું અને શહેર",
            date: "ઘટનાની તારીખ",
            time: "આશરે સમય",
            city: "ઘટનાનું શહેર",
            type: "ઘટનાનો પ્રકાર",
            amount: "ગુમાવેલી રકમ (₹)",
            suspect: "શંકાસ્પદ વિગતો (નંબર/UPI)",
            desc: "વિગતવાર વર્ણન"
        },
        types: {
            financial: "નાણાકીય છેતરપિંડી / UPI",
            stalking: "સાયબર સ્ટૉકિંગ",
            job: "નકલી નોકરી ઓફર",
            sextortion: "બ્લેકમેલ/સેક્સટોર્શન"
        },
        buttons: {
            generate: "ફરિયાદ ડ્રાફ્ટ કરો",
            drafting: "ડ્રાફ્ટિંગ...",
            download: "PDF ડાઉનલોડ",
            print: "પ્રિન્ટ કરો"
        },
        preview: {
            ready: "દસ્તાવેજ તૈયાર!",
            legalCite: "ઉલ્લેખિત: BNS 2023 કલમ 318 અને IT અધિનિયમ 2000 કલમ 66D",
            header: "F.I.R નોંધણી માટે અરજી",
            to: "પ્રતિ,",
            sho: "પોલીસ સ્ટેશન ઓફિસર,",
            subject: "વિષય: સાયબર ક્રાઇમ અંગે ફરિયાદ",
            bodyStart: "હું સાયબર ક્રાઇમ ઘટનાની જાણ કરવા માંગું છું.",
            request: "FIR નોંધીને જરૂરી કાર્યવાહી કરવા વિનંતી."
        }
    },
    muleSearch: {
        title: "ચુકવણી છેતરપિંડી રોકો",
        subtitle: "ચુકવણી કરતા પહેલા તપાસો કે આ નંબર અથવા UPI 'મ્યુલ એકાઉન્ટ' તરીકે રિપોર્ટ થયો છે કે નહીં.",
        placeholder: "ફોન નંબર / UPI ID દાખલ કરો...",
        checkBtn: "તપાસો",
        back: "પાછા",
        highRisk: "ઉચ્ચ જોખમ મળ્યું",
        safe: "કોઈ રિપોર્ટ મળ્યો નથી",
        safeDesc: "આ એકાઉન્ટ અમારા ડેટાબેઝમાં હજી સુધી ફ્લેગ થયું નથી. છતાં સાવચેત રહો.",
        doNotPay: "ચુકવણી કરશો નહીં",
        reports: "છેલ્લા 7 દિવસમાં રિપોર્ટ્સ:"
    },
    community: {
        title: "કમ્યુનિટી શિલ્ડ",
        guardians: "સક્રિય વાલીઓ",
        family: {
            title: "સુરક્ષા બંધન (પરિવાર સુરક્ષા)",
            protect: "તમારા વડીલોનું રક્ષણ કરો",
            protectDesc: "તમારા માતાપિતાના ઉપકરણો લિંક કરો. શંકાસ્પદ SMS આવે તો તાત્કાલિક ચેતવણી મેળવો.",
            addBtn: "સભ્ય ઉમેરો",
            nickname: "ઉપનામ",
            phone: "ફોન નંબર",
            sendInvite: "আমંત્રણ મોકલો"
        },
        insurance: {
            title: "માઇક્રો-સાયબર વીમો",
            price: "₹99/વર્ષ",
            coverage: "₹25,000 સુધી કવરેજ",
            features: ["કાનૂની સહાય", "ત્વરિત દાવો", "ઓળખ પુનઃપ્રાપ્તિ"],
            buy: "હવે સુરક્ષિત કરો"
        },
        feed: {
            title: "મંડી સમાચાર (લાઇવ)",
            report: "સ્થાનિક ઘટના રિપોર્ટ કરો"
        }
    },
    toolsIndex: {
        title: "સાયબર સંરક્ષણ ટૂલકિટ",
        subtitle: "ડિજિટલ છેતરપિંડીથી તમને, તમારા પરિવારને અને તમારા વ્યવસાયને બચાવવા માટે શક્તિશાળી, સરકારી કક્ષાના સાધનો.",
        phishingTitle: "ફિશિંગ ડોજો",
        phishingDesc: "કૌભાંડો ઓળખવા માટે ગેમિફાઇડ તાલીમ.",
        whatsappTitle: "વોટ્સએપ બોટ ચેક",
        whatsappDesc: "લિંક્સ તપાસવા માટે શંકાસ્પદ સંદેશાઓ ફોરવર્ડ કરો.",
        firTitle: "AI FIR ડ્રાફટર",
        firDesc: "કાયદેસર પોલીસ ફરિયાદ તૈયાર કરો.",
        digitalArrestTitle: "ડિજિટલ અરેસ્ટ સિમ્યુલેટર",
        digitalArrestDesc: "સુરક્ષા શીખવા માટે નકલી પોલીસ કોલનો અનુભવ કરો.",
        fakePaymentTitle: "નકલી ચુકવણી ડિટેક્ટર",
        fakePaymentDesc: "વેપારીઓ માટે: નકલી ચુકવણી સ્ક્રીન શોધો.",
        muleTitle: "મ્યુલ એકાઉન્ટ શોધ",
        muleDesc: "બ્લેકલિસ્ટ થયેલ છેતરપિંડી નંબરો શોધો.",
        apkTitle: "APK સુરક્ષા સ્કેનર",
        apkDesc: "તમારી એપ્લિકેશન્સમાં ખતરનાક પરવાનગીઓ શોધો.",
        smsTitle: "SMS કેસ ટ્રેકર",
        smsDesc: "'મિસ્ડ કોલ' દ્વારા ઓફલાઇન સ્ટેટસ ચેક.",
        communityTitle: "કમ્યુનિટી શિલ્ડ",
        communityDesc: "પરિવાર સુરક્ષા, વીમો અને સ્થાનિક ચેતવણીઓ."
    }
};

export const translations = {
    en, hi, mr, te, ta, kn, bn, gu
};
