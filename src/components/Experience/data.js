export const experiences = [
  {
    client: "Obligo, New York, NY, USA",
    period: "Jan 2024 – Present",
    project: "Lease Administration Management Software",
    summary:
      "Centralized lease management platform with advanced filters, geolocation features, and analytics dashboards.",
    responsibilities: [
      "Built a full-stack SPA using React, Express.js, and MongoDB for seamless property browsing and user interaction.",
      "Implemented property search filters, dynamic property listings and modular sorting via integrations with Google Maps.",
      "Refactored legacy gallery and navigation structure by replacing jQuery code with modern React components.",
      "Created intuitive Figma-based UI flows for collecting stakeholders feedback in design phase.",
      "Built a browsing history tracking system with Express and Mongoose to capture user engagement data.",
      "Conducted unit and integration testing for key components using Jest and React Testing Library, ensuring robustness across core user flows."
    ],
  },
  {
    client: "Element Chat, London, UK (Remote)",
    period: "Dec 2022 – Nov 2023",
    project: "Cross-border Chat App",
    summary:
      "A real-time messaging and video platform with Whisper-powered language translation.",
    responsibilities: [
      "Built one-on-one and group chat interfaces using WebSocket (Socket.IO), with message threading, read receipts, typing indicators and infinite scroll.",
      "Implemented multi-party video calls in React/React Native via WebRTC with Dynamic Grid Layout and screen sharing.",
      "Integrated ChatGPT Whisper for live audio/text translation overlays, auto-detecting source language and rendering translated captions in real time.",
      "Integrated Firebase Cloud Messaging for web and mobile, handling background notifications.",
      "Implemented OAuth2/JWT and Google social login flows in React Native & Node.js.",
      "Developed drag-and-drop upload, chunked image/file transfers, preview thumbnails and progress bars—optimizing network usage and UX feedback.",
      "Achieved 90 %+ coverage with Jest & React Testing Library; added Cypress and Detox to test the E2E flows."
    ],
  },
  {
    client: "Memorial Sloan Kettering Cancer Center, NY, USA",
    period: "Jan 2021 – Dec 2022",
    project: "HIPAA-Compliant Patient Portal",
    summary:
      "Next-gen React portal for appointments, prescriptions, and patient health data using HL7/FHIR standards.",
    responsibilities: [
      "Designed and implemented an accessible, HIPAA-compliant SPA website using React (Hooks, Context API), React Router, and TypeScript.",
      "Integrated pharmacy and appointment APIs for profile updates, insurance entry, and calendar-based appointment scheduling.",
      "Enforced strict PHI protection standards across the frontend by implementing OAuth2 token-based auth, automatic session expiry, etc.",
      "Introduced React error boundaries and user-friendly fallback UIs to gracefully handle API failures and session timeouts in critical workflows.",
      "Used Tailwind CSS and Material UI to ensure responsive, mobile-first layout across various places.",
      "Collaborated with backend teams to refine request contracts and troubleshoot data consistency issues using Postman and Splunk logs."
    ],
  },
];

