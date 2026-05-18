# 🛡️ CyberSuraksha
**The Unified Digital Defense & Crime Reporting Ecosystem**

![CyberSuraksha Hero](https://github.com/user-attachments/assets/demo-image-placeholder)

CyberSuraksha is a defense-grade, comprehensive cybersecurity platform designed to bridge the gap between citizens, law enforcement, and legal aid. It serves as a unified command center for digital safety, offering proactive prevention tools, streamlined incident reporting, and real-time situational awareness.

---

## 🚀 Key Value Propositions

*   **Democratize Cyber Safety:** Make advanced forensic and diagnostic tools accessible to the general public.
*   **Streamline Justice:** Digitize and accelerate the First Information Report (FIR) and evidence submission process.
*   **Gamified Awareness:** Interactive modules like *Phishing Dojo* to actively train citizens against social engineering.
*   **Rapid Response:** Immediate emergency reporting, "Zero FIR" capabilities, and stealth panic protocols for urgent threats.

---

## 🛠️ Technical Architecture & Stack

CyberSuraksha is engineered for high performance, accessibility, and strict security.

*   **Frontend Framework:** Next.js 16 (App Router) & React 19.
*   **Language:** TypeScript (Strict Mode) for end-to-end type safety.
*   **Styling:** Tailwind CSS v4 + Radix UI (Headless accessible primitives) + Framer Motion (Animations).
*   **Backend & Auth:** Supabase (PostgreSQL) for authentication, Row Level Security (RLS), and real-time data synchronization.
*   **Key Integrations:** 
    *   `react-speech-recognition` for real-time multilingual Voice FIR.
    *   `tesseract.js` for Client-Side Optical Character Recognition (Forensics).
    *   `leaflet` & `react-leaflet` for Live Threat Geospatial Mapping.

---

## 🔥 Core Features & Modules

### 1. 🛡️ Proactive Defense & User Tools
*   **Safety Vault:** Secure, local-first storage for critical digital evidence prioritizing client privacy before formal police submission.
*   **Shadow Mode (Calculator Disguise):** A stealth interface that disguises sensitive reporting features as a standard calculator, crucial for victims in physically compromised situations.
*   **Phishing Dojo:** An interactive training simulation to identify and resist social engineering attacks.
*   **System Health Check:** Client-side diagnostics identifying potential vulnerabilities.

### 2. 🚓 Next-Gen Law Enforcement Coordination
*   **Voice FIR Engine:** AI-assisted voice-to-text complaint registration supporting multiple Indian languages, vastly lowering the barrier to report crimes.
*   **Live Threat Map:** Real-time geographical visualization of cybercrime trends and active threat hotspots for proactive policing.
*   **Video Evidence Recorder:** Secure, browser-based video capture for immediate evidence logging.
*   **Zero FIR:** Enables jurisdiction-independent immediate complaint filing, enforcing citizens' legal rights.

### 3. 🔍 Forensic Scanners (Client-Side)
*   **Fake Payment Detector:** Validates digital transaction screenshots for tampering using OCR.
*   **SMS Tracker & Reporter:** Analyzes suspicious message patterns to intercept smishing attempts.
*   **APK & Scam Scanners:** Verifies links, emails, and android packages for malicious signatures.

### 4. 🧠 Intelligence Ecosystem
*   **AI Legal Assistant:** A context-aware chatbot offering immediate legal and technical guidance based on the **BNS (Bharatiya Nyaya Sanhita) 2023** statutes.
*   **Role-Based Dashboards:** Specialized, isolated portals for Citizens, Police Forces, Legal Aid, and VLEs (Village Level Entrepreneurs).

---

## ⚙️ Installation & Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/Rushi04j/CyberSuraksha.git
cd CyberSuraksha
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

*Note on Fallbacks: The application is designed to be highly resilient. If Supabase keys are missing or the network drops, the API gracefully falls back to a robust local `MockDatabaseService` (`localStorage`) so the UI and core flows remain completely functional for demonstrations.*

### 4. Run the Development Server
```bash
npm run dev
```
Navigate to `http://localhost:3000` to view the application.

---

## 🔒 Security & Privacy Posture
- **Local-First Processing:** Forensic tools (like the Fake Payment Detector) prioritize processing data directly in the browser using WASM/Client-side libraries to prevent sensitive user data from leaving the device unnecessarily.
- **Strict RLS:** Supabase Row Level Security ensures citizens can only query their own data, while authorized police roles have scoped, jurisdictional access.
- **Graceful Degradation:** The UI safely falls back if certain browser APIs (like Geolocation or Microphone) are blocked by user permissions.

---
*© 2024-Present CyberSuraksha. Built for a Safer Digital India.*
