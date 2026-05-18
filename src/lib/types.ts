export type Role = 'citizen' | 'police' | 'admin';

export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
    phone?: string;
    jurisdiction?: string; // For police
    avatarUrl?: string;
}


export interface InvestigationNote {
    id: string;
    author: string;
    content: string;
    timestamp: string;
    type: 'general' | 'evidence' | 'suspect' | 'action';
}

export interface Complaint {
    id: string;
    userId: string;
    title: string;
    description: string;
    category: 'Cyberbullying' | 'Financial Fraud' | 'Identity Theft' | 'Data Breach' | 'Ransomware' | 'Online Stalking' | 'Hacking' | 'Fake Profile' | 'Other';
    urgency: 'Low' | 'Medium' | 'High' | 'Emergency';
    status: 'Pending' | 'In Progress' | 'Resolved' | 'Closed';
    location: string;
    incidentDate: string;
    createdAt: string;
    evidenceFiles?: string[];
    policeNotes?: string; // Legacy field, kept for backward compat
    aiPriorityScore?: number; // 0-100
    assignedOfficer?: string;
    slaDeadline?: string;
    investigationNotes?: InvestigationNote[];
    timeline?: { status: string; timestamp: string; note?: string }[];
}
