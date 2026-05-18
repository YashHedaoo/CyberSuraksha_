import { Complaint, Role, User } from "./types";
import { mockApi } from "./mockData";

const STORAGE_KEYS = {
    COMPLAINTS: "cs_complaints_v1",
    USERS: "cs_users_v1",
    USER_SESSION: "cs_user"
};

export class MockDatabaseService {
    // --- Complaints ---
    static async getComplaints(userId?: string, role?: Role): Promise<Complaint[]> {
        if (typeof window === 'undefined') return []; // Server-side safety

        const stored = localStorage.getItem(STORAGE_KEYS.COMPLAINTS);
        let complaints: Complaint[] = [];

        if (stored) {
            complaints = JSON.parse(stored);
        } else {
            // Initialize with mock data if empty
            const initialData = await mockApi.getComplaints();
            localStorage.setItem(STORAGE_KEYS.COMPLAINTS, JSON.stringify(initialData));
            complaints = initialData;
        }

        // Filtering Logic
        if (role === 'police' || role === 'admin') {
            return complaints.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        }

        if (userId) {
            return complaints.filter(c => c.userId === userId).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        }

        return [];
    }

    static async createComplaint(complaint: Omit<Complaint, 'id' | 'createdAt' | 'status'>, userId: string): Promise<Complaint> {
        const newComplaint: Complaint = {
            ...complaint,
            id: `CSR-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            createdAt: new Date().toISOString(),
            status: 'Pending',
            userId: userId,
            evidenceFiles: complaint.evidenceFiles || []
        };

        const existing = await this.getComplaints(undefined, 'police'); // Get all
        const updated = [newComplaint, ...existing];

        if (typeof window !== 'undefined') {
            localStorage.setItem(STORAGE_KEYS.COMPLAINTS, JSON.stringify(updated));
        }

        return newComplaint;
    }

    static async updateStatus(id: string, status: string): Promise<void> {
        const existing = await this.getComplaints(undefined, 'police');
        const updated = existing.map(c =>
            c.id === id ? { ...c, status: status as Complaint['status'] } : c
        );

        if (typeof window !== 'undefined') {
            localStorage.setItem(STORAGE_KEYS.COMPLAINTS, JSON.stringify(updated));
        }
    }

    // --- Users ---
    static getUser(userId: string): User | null {
        // For now, we mainly rely on AuthContext, but this can store profiles
        return null;
    }
}
