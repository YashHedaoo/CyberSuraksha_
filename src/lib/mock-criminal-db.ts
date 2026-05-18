
export interface CriminalProfile {
    id: string;
    alias: string;
    riskLevel: 'Moderate' | 'High' | 'Critical';
    knownOffenses: string[];
    linkedPhones: string[];
    linkedUPI: string[];
    lastActiveLocation: string;
    status: 'At Large' | 'Under Surveillance' | 'Detained';
    networkConnections: string[]; // Aliases of associates
    imageUrl?: string;
}

export const MOCK_CRIMINALS: CriminalProfile[] = [
    {
        id: "CRIM-001",
        alias: "The Jamtara Phantom",
        riskLevel: "Critical",
        knownOffenses: ["Phishing (KYC Update)", "Sim Swap", "Loan App Fraud"],
        linkedPhones: ["9876543210", "8822114455"],
        linkedUPI: ["refund@ybl", "kyc-update@axl"],
        lastActiveLocation: "Jamtara, Jharkhand",
        status: "At Large",
        networkConnections: ["Rocky Bhai", "SimCard Raja"],
        imageUrl: "/placeholder-criminal-1.jpg"
    },
    {
        id: "CRIM-002",
        alias: "Crypto Kingpin",
        riskLevel: "High",
        knownOffenses: ["Ponzi Scheme", "Fake Exchange", "Wallet Drain"],
        linkedPhones: ["7766554433"],
        linkedUPI: ["crypto-invest@okicici"],
        lastActiveLocation: "Dubai, UAE (VPN Traced)",
        status: "Under Surveillance",
        networkConnections: ["The Jamtara Phantom"],
    },
    {
        id: "CRIM-003",
        alias: "Loan Shark X",
        riskLevel: "Critical",
        knownOffenses: ["Sextortion", "Illegal Lending", "Harassment"],
        linkedPhones: ["9988776655", "9123456789"],
        linkedUPI: ["fast-loan@paytm"],
        lastActiveLocation: "Mewat, Haryana",
        status: "At Large",
        networkConnections: [],
    }
]

export const CriminalDB = {
    search: async (query: string): Promise<CriminalProfile[]> => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));

        const q = query.toLowerCase();
        return MOCK_CRIMINALS.filter(c =>
            c.alias.toLowerCase().includes(q) ||
            c.linkedPhones.some(p => p.includes(q)) ||
            c.linkedUPI.some(u => u.toLowerCase().includes(q))
        );
    }
}
