
export type Scenario = {
    id: number
    sender: { name: string, role: string, avatar: string, online: boolean }
    initialMessage: string
    options: {
        text: string
        outcome: 'safe' | 'scam'
        feedback: string
        cost?: number
    }[]
}

const AVATARS = {
    bank: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bank",
    police: "https://api.dicebear.com/7.x/avataaars/svg?seed=Officer",
    dad: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dad",
    mom: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mom",
    friend: "https://api.dicebear.com/7.x/avataaars/svg?seed=Friend",
    recruiter: "https://api.dicebear.com/7.x/avataaars/svg?seed=Annie",
    delivery: "https://api.dicebear.com/7.x/avataaars/svg?seed=Delivery",
    stranger: "https://api.dicebear.com/7.x/avataaars/svg?seed=Stranger",
    support: "https://api.dicebear.com/7.x/avataaars/svg?seed=Support"
}

// 50+ Scenarios for "Endless Mode"
// Categories: Banking, Family Distress, Job Scams, Lottery, Tech Support, Digital Arrest, Utility Bill
export const SCENARIO_BANK: Scenario[] = [
    // --- BATCH 1: CLASSICS ---
    {
        id: 1,
        sender: { name: "SBI Alert", role: "Bank", avatar: AVATARS.bank, online: true },
        initialMessage: "Dear Customer, your KYC has expired. Your account will be blocked within 24 hours. Click here to update: http://sbi-kyc-update.com",
        options: [
            { text: "Okay, updating immediately.", outcome: 'scam', feedback: "Fake Link! Banks NEVER ask to update KYC via SMS links. Always visit the branch.", cost: 10000 },
            { text: "Ignore and delete.", outcome: 'safe', feedback: "Correct. Always check the official app or visit the branch." }
        ]
    },
    {
        id: 2,
        sender: { name: "Dad", role: "Family", avatar: AVATARS.dad, online: false },
        initialMessage: "Beta, I am at a shop and my GPay is stuck. Can you pay ₹2000 to this QR Code? I will return at home.",
        options: [
            { text: "Paying now, Dad!", outcome: 'scam', feedback: "Voice/Text Cloning! Always CALL your family member to verify before sending money.", cost: 2000 },
            { text: "Call Dad first.", outcome: 'safe', feedback: "Smart! Always verify identity via a voice call." }
        ]
    },
    {
        id: 3,
        sender: { name: "Angel Jobs HR", role: "Recruiter", avatar: AVATARS.recruiter, online: true },
        initialMessage: "Part-time job offer! Earn ₹1000-₹5000 daily by liking Instagram posts. Join Telegram group now.",
        options: [
            { text: "I'm interested!", outcome: 'scam', feedback: "Task Scam! No real job pays ₹5000 for liking posts. They will steal your money later.", cost: 5000 },
            { text: "Block this number.", outcome: 'safe', feedback: "Correct. Never trust 'easy money' job offers on WhatsApp." }
        ]
    },
    {
        id: 4,
        sender: { name: "DCP Cyber Crime", role: "Police", avatar: AVATARS.police, online: true },
        initialMessage: "This is DCP Sharma. Your son has been detained for a serious crime. Call me on video immediately to resolve this.",
        options: [
            { text: "Oh no! Calling you sir.", outcome: 'scam', feedback: "Digital Arrest Scam! Police NEVER video call to negotiate or threaten arrest.", cost: 25000 },
            { text: "I will visit the police station.", outcome: 'safe', feedback: "Brave! Real police follow due process, not Skype calls." }
        ]
    },
    {
        id: 5,
        sender: { name: "Amazon Delivery", role: "Courier", avatar: AVATARS.delivery, online: true },
        initialMessage: "Your package delivery failed. Address incomplete. Pay ₹5 re-delivery fee here: http://pay-delivery.com",
        options: [
            { text: "Paying ₹5 now.", outcome: 'scam', feedback: "Phishing! The ₹5 link will steal your entire bank balance. Check app tracking first.", cost: 500 },
            { text: "Check Amazon App.", outcome: 'safe', feedback: "Correct. Only trust the official app for tracking." }
        ]
    },
    // --- BATCH 2: ADVANCED ---
    {
        id: 6,
        sender: { name: "Customer Support", role: "Tech Support", avatar: AVATARS.support, online: true },
        initialMessage: "Your computer has a virus! Microsoft has detected suspicious activity. Install 'AnyDesk' for us to fix it.",
        options: [
            { text: "Installing AnyDesk...", outcome: 'scam', feedback: "Remote Access Scam! AnyDesk gives them full control of your PC to steal money.", cost: 15000 },
            { text: "Disconnect internet.", outcome: 'safe', feedback: "Correct. Microsoft NEVER calls you to fix viruses." }
        ]
    },
    {
        id: 7,
        sender: { name: "Ramesh Landlord", role: "Stranger", avatar: AVATARS.stranger, online: true },
        initialMessage: "Hello, I want to rent your apartment. I am sending an 'Advance Token' of ₹10,000 via QR code. Scan to receive.",
        options: [
            { text: "Scanning to receive money.", outcome: 'scam', feedback: "QR Scam! You NEVER scan a QR code to RECEIVE money. Valid only for PAYING.", cost: 10000 },
            { text: "I don't scan QRs.", outcome: 'safe', feedback: "Correct. To receive money, you just need to share your number/UPI ID." }
        ]
    },
    {
        id: 8,
        sender: { name: "Priya (Old Friend)", role: "Friend", avatar: AVATARS.friend, online: true },
        initialMessage: "Hey! Remember me? I am in trouble at the airport. Lost my wallet. Can you send ₹5000? Will pay back tomorrow.",
        options: [
            { text: " OMG Priya! Sending now.", outcome: 'scam', feedback: "Impersonation Scam! Scammers hack accounts to ask friends for money. Verify first.", cost: 5000 },
            { text: "Who are you exactly?", outcome: 'safe', feedback: "Good caution. Always verify if it's really your friend." }
        ]
    },
    {
        id: 9,
        sender: { name: "Income Tax Dept", role: "Govt", avatar: AVATARS.police, online: true },
        initialMessage: "Refund Approved: You have a tax refund of ₹12,500 pending. Validate your bank account number here to credit.",
        options: [
            { text: "Validating details...", outcome: 'scam', feedback: "Tax Phishing! IT Dept sends refunds automatically, never asks for bank details via link.", cost: 12500 },
            { text: "Check on IT Portal.", outcome: 'safe', feedback: "Correct. Always log in to the official government portal." }
        ]
    },
    {
        id: 10,
        sender: { name: "Netflix Support", role: "Service", avatar: AVATARS.support, online: true },
        initialMessage: "Payment Failed: Your subscription is on hold. Update payment method immediately to keep watching.",
        options: [
            { text: "Updating card details.", outcome: 'scam', feedback: "Phishing! Check your actual Netflix account status first.", cost: 1000 },
            { text: "Ignore. Check App.", outcome: 'safe', feedback: "Correct. Never click urgent payment links in emails/SMS." }
        ]
    },
    // --- BATCH 3: EXPERT ---
    {
        id: 11,
        sender: { name: "Crypto Trader", role: "Investment", avatar: AVATARS.stranger, online: true },
        initialMessage: "Double your money in 24 hours! Invest ₹10,000 in BitCoin mining and get ₹20,000 guaranteed return.",
        options: [
            { text: "Investing ₹10k!", outcome: 'scam', feedback: "Investment Scam! 'Guaranteed doubling' is always a lie.", cost: 10000 },
            { text: "Block user.", outcome: 'safe', feedback: "Smart. If it sounds too good to be true, it is." }
        ]
    },
    {
        id: 12,
        sender: { name: "Olx Buyer", role: "Buyer", avatar: AVATARS.stranger, online: true },
        initialMessage: "I want to buy your furniture. I am an Army Officer posted in remote area. I will send QR code, scan to verify account first.",
        options: [
            { text: "Okay sir, scanning.", outcome: 'scam', feedback: "Army OLX Scam! They use fake IDs and QR codes to steal money.", cost: 5000 },
            { text: "Cash on delivery only.", outcome: 'safe', feedback: "Correct. Verified payment only." }
        ]
    },
    {
        id: 13,
        sender: { name: "Facebook Security", role: "Social", avatar: AVATARS.support, online: true },
        initialMessage: "Your account violates community standards. Confirm your identity or we will delete your page permanently in 12 hours.",
        options: [
            { text: "Confirming identity...", outcome: 'scam', feedback: "Page Hijacking! They want your password to steal your page.", cost: 0 },
            { text: "Check Page Quality tab.", outcome: 'safe', feedback: "Correct. Check official settings, don't follow links." }
        ]
    },
    {
        id: 14,
        sender: { name: "KBC Lottery", role: "Lottery", avatar: AVATARS.recruiter, online: true },
        initialMessage: "Congratulations! Your number has won ₹25 Lakhs in KBC Lucky Draw. Call Mr. Rana Pratap to claim prize.",
        options: [
            { text: "Calling now!", outcome: 'scam', feedback: "Lottery Scam! You cannot win a lottery you didn't enter. They will ask for 'processing fees'.", cost: 25000 },
            { text: "It's fake.", outcome: 'safe', feedback: "Correct. KBC does not message random numbers." }
        ]
    },
    {
        id: 15,
        sender: { name: "MSEB Electricity", role: "Utility", avatar: AVATARS.bank, online: true },
        initialMessage: "NOTICE: Your power will be cut at 10:00 PM. Previous bill update pending. Call officer 98909xxxxx.",
        options: [
            { text: "Calling immediately.", outcome: 'scam', feedback: "Utility Scam! They will create panic to make you transfer money.", cost: 2000 },
            { text: "Checking latest bill.", outcome: 'safe', feedback: "Correct. Verify with your actual electricity bill." }
        ]
    },
    // --- BATCH 4: NEW AGE ---
    {
        id: 16,
        sender: { name: "FedEx Customs", role: "Official", avatar: AVATARS.delivery, online: true },
        initialMessage: "A package containing 5 Passports and Drugs sent from Mumbai to Taiwan under your Aadhaar has been seized.",
        options: [
            { text: "I didn't send anything!", outcome: 'scam', feedback: "Courier Scam! They will transfer you to 'Fake Police' to extort money.", cost: 50000 },
            { text: "I will report you.", outcome: 'safe', feedback: "Brave! This is a common intimidation tactic." }
        ]
    },
    {
        id: 17,
        sender: { name: "Share Market Tips", role: "Investment", avatar: AVATARS.stranger, online: true },
        initialMessage: "Exclusive Insider Tip: Buy 'XYZ Stock' today, it will go up 50% tomorrow. Join our premium WhatsApp group.",
        options: [
            { text: "Buying stock.", outcome: 'scam', feedback: "'Pump and Dump' Scheme! They artificially inflate price then sell, leaving you with losses.", cost: 5000 },
            { text: "Ignore tips.", outcome: 'safe', feedback: "Correct. Do your own research." }
        ]
    },
    {
        id: 18,
        sender: { name: "CEO_Company", role: "Boss", avatar: AVATARS.bank, online: true },
        initialMessage: "Hi, I am in a meeting. Can you urgently buy 5 Apple Gift Cards for clients? I will reimburse you.",
        options: [
            { text: "Yes boss, buying now.", outcome: 'scam', feedback: "CEO Fraud! Scammers impersonate bosses to steal gift cards.", cost: 10000 },
            { text: "Confirm via email/call.", outcome: 'safe', feedback: "Correct. Verify unusual requests from superiors." }
        ]
    },
    {
        id: 19,
        sender: { name: "Loan App", role: "Finance", avatar: AVATARS.bank, online: true },
        initialMessage: "Instant Loan Approved! ₹50,000 credit in 5 mins. No CIBIL check. Just download this APK file.",
        options: [
            { text: "Downloading APK.", outcome: 'scam', feedback: "Predatory Loan App! They hack your contacts and blackmail you with morphed photos.", cost: 50000 },
            { text: "Only Play Store apps.", outcome: 'safe', feedback: "Correct. Never install loan apps from random APKs." }
        ]
    },
    {
        id: 20,
        sender: { name: "Unknown Number", role: "Stranger", avatar: AVATARS.stranger, online: true },
        initialMessage: "*Video Call Incoming...*",
        options: [
            { text: "Answer call.", outcome: 'scam', feedback: "Sextortion Risk! They might record your face with a nude video and blackmail you.", cost: 50000 },
            { text: "Reject and Block.", outcome: 'safe', feedback: "Correct. Never answer video calls from unknown numbers." }
        ]
    }
]
