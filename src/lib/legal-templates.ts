
export interface LegalNoticeTemplate {
    id: string;
    name: string;
    description: string;
    fields: { key: string; label: string; placeholder: string; type?: 'text' | 'date' | 'textarea' }[];
    generate: (data: Record<string, string>) => string;
}

export const LegalTemplates: LegalNoticeTemplate[] = [
    {
        id: "bank-freeze",
        name: "Bank Freeze Application (Cyber Fraud)",
        description: "Request the bank to immediate freeze a beneficiary account involved in fraud.",
        fields: [
            { key: "bankName", label: "Bank Name", placeholder: "e.g., State Bank of India" },
            { key: "branch", label: "Branch Address", placeholder: "e.g., Nariman Point, Mumbai" },
            { key: "fraudAmount", label: "Fraud Amount (₹)", placeholder: "e.g., 50,000" },
            { key: "transactionDate", label: "Date of Transaction", placeholder: "YYYY-MM-DD", type: 'date' },
            { key: "transactionId", label: "Transaction ID / UTR", placeholder: "e.g., 1234567890" },
            { key: "victimName", label: "Your Name", placeholder: "Full Name" },
            { key: "victimAccount", label: "Your Account Number", placeholder: "Account Number" },
        ],
        generate: (data) => `To,
The Branch Manager,
${data.bankName},
${data.branch}.

Subject: Request for Immediate Freezing of Fraudulent Transaction / Beneficiary Account.

Dear Sir/Madam,

I, ${data.victimName}, holding account number ${data.victimAccount} with your bank, am writing to report a fraudulent transaction.

On ${data.transactionDate}, an unauthorized debit of ₹${data.fraudAmount} was made from my account via Transaction ID / UTR: ${data.transactionId}.

This transaction was a result of Cyber Fraud. I have successfully filed a complaint with the National Cyber Crime Reporting Portal (1930) and the local police station.

As per RBI guidelines on 'Limiting Liability of Customers in Unauthorized Electronic Banking Transactions', I request you to:
1. Immediately execute a 'Lien' or 'Debit Freeze' on the beneficiary account where these funds were transferred.
2. Initiate a 'Chargeback' or reversal process to recover the lost amount.
3. Preserve the transaction logs and IP address details of the fraudster for police investigation.

Attached herewith are the transaction proof and copy of the police complaint.

I urge you to act swiftly to prevent the siphoning of these funds.

Yours faithfully,
${data.victimName}
Date: ${new Date().toLocaleDateString()}`
    },
    {
        id: "social-takedown",
        name: "Social Media Takedown Request",
        description: "Official request to a platform (FB, Insta, X) to remove impersonation or harassment content.",
        fields: [
            { key: "platform", label: "Platform Name", placeholder: "e.g., Instagram, Facebook" },
            { key: "grievanceOfficer", label: "Grievance Officer Email (if known)", placeholder: "e.g., grievance@instagram.com" },
            { key: "fakeUrl", label: "URL of Fake Profile/Post", placeholder: "https://..." },
            { key: "violationType", label: "Violation Type", placeholder: "Impersonation / Harassment / Nudity" },
            { key: "victimName", label: "Your Name", placeholder: "Full Name" },
        ],
        generate: (data) => `To,
The Grievance Officer,
${data.platform}.
(Cc: ${data.grievanceOfficer || "support-team"})

Subject: Request for Takedown of Content Violating IT Act 2000 and Community Standards.

Dear Sir/Madam,

I am writing to report a serious violation of your platform's Community Guidelines and the Information Technology Act, 2000.

The following URL/Profile is engaging in ${data.violationType} against me:
URL: ${data.fakeUrl}

Specific Violation:
This content/profile is ${data.violationType.toLowerCase()} which is a punishable offense under:
- Section 66D (Cheating by Personation) of the IT Act, 2000.
- Section 67 (Punishment for publishing obscene information) [if applicable].

As an intermediary, under the IT Rules 2021, you are required to remove such unlawful content within 36 hours of receiving actual knowledge.

I request you to:
1. Immediately suspend/block the above-mentioned URL/Profile.
2. Preserve the user registration details (IP, Phone, Email) of this offender for law enforcement authorities.

Failure to act may result in loss of 'Safe Harbor' protection under Section 79 of the IT Act.

Awaiting your prompt action.

Sincerely,
${data.victimName}
Date: ${new Date().toLocaleDateString()}`
    }
]
