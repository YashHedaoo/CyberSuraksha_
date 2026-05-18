export interface LegalStatute {
    id: string;
    crimeType: string;
    keywords: string[];
    bnsSection: string; // Bharatiya Nyaya Sanhita 2023
    specialAct?: string; // IT Act, POCSO, PMLA, NDPS, etc.
    description: string;
    punishment: string;
    bailable: boolean;
    cognizable: boolean;
    immediateAction: string; // Advice on what to do NOW
    severity: 'High' | 'Critical' | 'Moderate' | 'Low';
}

export const VLKB: LegalStatute[] = [
    // ==========================================
    //  1. CRIMES AGAINST BODY (Murder, Rape, Assault)
    // ==========================================
    {
        id: "body-murder",
        crimeType: "Murder / Homicide",
        keywords: ["murder", "killed", "homicide", "stabbed", "shot dead", "suicide abetment", "death threat"],
        bnsSection: "Section 103 (Punishment for Murder)",
        description: "Intentionally causing death of a person.",
        punishment: "Death or Imprisonment for Life + Fine.",
        bailable: false,
        cognizable: true,
        immediateAction: "Call 100 IMMEDIATELY. Preserve the crime scene. Do not touch anything. Wait for police.",
        severity: "Critical"
    },
    {
        id: "body-rape",
        crimeType: "Rape / Sexual Assault",
        keywords: ["rape", "sexual assault", "forced sex", "molestation", "sexual violence"],
        bnsSection: "Section 63 (Rape)",
        description: "Sexual intercourse with a woman without her consent.",
        punishment: "Rigorous Imprisonment min 10 years to Life.",
        bailable: false,
        cognizable: true,
        immediateAction: "Go to a safe place. Do NOT bathe or wash clothes (DNA evidence). Go to hospital for medical exam.",
        severity: "Critical"
    },
    {
        id: "body-kidnap",
        crimeType: "Kidnapping / Abduction",
        keywords: ["kidnapped", "abducted", "taken away", "missing person", "hostage"],
        bnsSection: "Section 137 (Kidnapping)",
        description: "Taking or enticing a person (especially minor) away from lawful guardianship.",
        punishment: "Imprisonment up to 7 years + Fine.",
        bailable: false,
        cognizable: true,
        immediateAction: "Call 100. Provide last seen location and photo of the victim. Track their phone if possible.",
        severity: "Critical"
    },
    {
        id: "body-dv",
        crimeType: "Domestic Violence / Cruelty",
        keywords: ["domestic violence", "husband beating", "wife beating", "dowry", "torture at home", "498a"],
        bnsSection: "Section 85 (Cruelty by Husband/Relatives)",
        specialAct: "Domestic Violence Act 2005",
        description: "Husband or relative subjecting a woman to cruelty (physical or mental).",
        punishment: "Imprisonment up to 3 years + Fine.",
        bailable: false,
        cognizable: true,
        immediateAction: "Call 100 or Women's Helpline 1091. Seek medical help if injured. Go to parents' house if unsafe.",
        severity: "High"
    },

    // ==========================================
    //  2. CRIMES AGAINST PROPERTY (Theft, Scam)
    // ==========================================
    {
        id: "prop-theft",
        crimeType: "Theft / Robbery",
        keywords: ["theft", "stolen", "robbery", "snatching", "burglary", "house breaking", "pickpocket"],
        bnsSection: "Section 303 (Theft)",
        description: "Dishonestly taking any movable property out of the possession of any person.",
        punishment: "Imprisonment up to 3 years (Theft) / 10 years (Robbery).",
        bailable: false,
        cognizable: true,
        immediateAction: "File an FIR at the nearest police station. If phone/car stolen, block SIM/Fastag immediately.",
        severity: "Moderate"
    },
    {
        id: "prop-cheat",
        crimeType: "Cheating / Financial Fraud",
        keywords: ["cheated", "fraud", "scam", "money lost", "investment scam", "fake lottery", "ponzi scheme"],
        bnsSection: "Section 318 (Cheating)",
        description: "Deceiving person to deliver property or money.",
        punishment: "Imprisonment up to 3-7 years.",
        bailable: true,
        cognizable: true,
        immediateAction: "Call 1930 (Cyber Fraud) or 100. Contact Bank to freeze transaction.",
        severity: "High"
    },

    // ==========================================
    //  3. CIVIL & FINANCIAL (Cheque Bounce, Tax)
    // ==========================================
    {
        id: "civil-cheque",
        crimeType: "Cheque Bounce",
        keywords: ["cheque bounce", "check bounce", "payment dishonored", "insufficient funds", "cheque return"],
        specialAct: "Section 138, Negotiable Instruments Act",
        bnsSection: "N/A (Civil/Criminal Mix)",
        description: "Dishonour of cheque for insufficiency of funds in the bank account.",
        punishment: "Imprisonment up to 2 years or Fine (2x amount).",
        bailable: true,
        cognizable: false,
        immediateAction: "Send a Legal Notice within 30 days of cheque return. File complaint in court if not paid in 15 days.",
        severity: "Moderate"
    },
    {
        id: "civil-consumer",
        crimeType: "Consumer Dispute",
        keywords: ["defective product", "bad service", "hotel service", "airline refund", "spoiled food", "consumer court"],
        specialAct: "Consumer Protection Act 2019",
        bnsSection: "N/A",
        description: "Unfair trade practices or selling defective goods/services.",
        punishment: "Compensation + Penalty.",
        bailable: true,
        cognizable: false,
        immediateAction: "File a complaint on National Consumer Helpline (1915). Keep bills/invoices safe.",
        severity: "Low"
    },

    // ==========================================
    //  4. SPECIAL ACTS (Drugs, Corruption, Gambling, Arms)
    // ==========================================
    {
        id: "spec-drugs",
        crimeType: "Narcotics / Drugs (NDPS)",
        keywords: ["drugs", "ganja", "cocaine", "drug peddler", "weed", "narcotics", "smuggling drugs"],
        specialAct: "NDPS Act 1985",
        bnsSection: "N/A (Special Act)",
        description: "Possession, sale, or transport of narcotic drugs and psychotropic substances.",
        punishment: "Rigorous Imprisonment 10-20 years (for commercial qty).",
        bailable: false,
        cognizable: true,
        immediateAction: "Report to Police or Narcotics Control Bureau. Do not touch or transport the substance.",
        severity: "Critical"
    },
    {
        id: "spec-corruption",
        crimeType: "Corruption / Bribery",
        keywords: ["bribe", "corruption", "asking money for job", "ghoos", "public servant bribe"],
        specialAct: "Prevention of Corruption Act 1988",
        bnsSection: "N/A",
        description: "Public servant taking gratification other than legal remuneration.",
        punishment: "Imprisonment 3 to 7 years.",
        bailable: false,
        cognizable: true,
        immediateAction: "Record the demand (audio/video). Report to Anti-Corruption Bureau (ACB).",
        severity: "High"
    },
    {
        id: "spec-animal",
        crimeType: "Animal Cruelty",
        keywords: ["dog beating", "hitting animal", "killing stray dog", "animal abuse", "cow slaughter"],
        specialAct: "Prevention of Cruelty to Animals Act 1960",
        bnsSection: "Section 325 (Mischief by killing animal)",
        description: "Beating, kicking, torturing, or killing any animal.",
        punishment: "Fine + Imprisonment (up to 5 years under BNS).",
        bailable: true,
        cognizable: true,
        immediateAction: "Record video evidence. Call 100 or NGO (PETA/PFA). File FIR.",
        severity: "Moderate"
    },
    {
        id: "spec-gamble",
        crimeType: "Illegal Gambling",
        keywords: ["gambling", "betting", "satta", "casino illegal", "ipl betting"],
        specialAct: "Public Gambling Act 1867",
        bnsSection: "N/A",
        description: "Owning a gaming house or being found in one.",
        punishment: "Fine ₹200 or Imprisonment up to 3 months.",
        bailable: true,
        cognizable: false,
        immediateAction: "Report the location to local police.",
        severity: "Low"
    },
    {
        id: "spec-arms",
        crimeType: "Illegal Weapons (Arms Act)",
        keywords: ["gun", "pistol", "illegal weapon", "sword", "knife attack", "desi katta"],
        specialAct: "Arms Act 1959",
        bnsSection: "N/A",
        description: "Possession or use of illegal firearms/weapons.",
        punishment: "Imprisonment 3 to 7 years.",
        bailable: false,
        cognizable: true,
        immediateAction: "Move away to safety. Call 100. Do not confront.",
        severity: "Critical"
    }
];

// Fallback "General" responses for unknown queries
const GENERAL_ADVICE = [
    { text: "civil", advice: "This sounds like a Civil Dispute. You may need to file a suit in Civil Court. Consult a lawyer." },
    { text: "divorce", advice: "This falls under Family Law (Hindu Marriage Act / Special Marriage Act). You should consult a Family Court lawyer." },
    { text: "property", advice: "Property disputes are usually Civil matters unless there is Forgery or Cheating (Criminal). Ensure you have ownership documents." },
    { text: "job", advice: "Employment disputes are covered under Labour Laws. You can approach the Labour Commissioner." }
];

export function findLegalProvision(text: string): LegalStatute | null {
    const lowerText = text.toLowerCase();

    // Weighted Matching System
    let bestMatch: LegalStatute | null = null;
    let highestScore = 0;

    for (const statute of VLKB) {
        let score = 0;

        // 1. Keyword Matches
        for (const keyword of statute.keywords) {
            if (lowerText.includes(keyword)) {
                // Exact phrase match gets higher points
                score += 5;
            } else {
                // Word-by-word break down for partial match
                const words = keyword.split(" ");
                let wordMatches = 0;
                words.forEach(w => {
                    if (lowerText.includes(w) && w.length > 3) wordMatches++;
                });
                if (wordMatches === words.length && words.length > 1) score += 3;
            }
        }

        // 2. Severity Bias 
        if (statute.severity === 'Critical' && score > 0) {
            score += 3;
        }

        // 3. Update Best Match
        if (score > highestScore && score >= 3) {
            highestScore = score;
            bestMatch = statute;
        }
    }

    return bestMatch;
}
