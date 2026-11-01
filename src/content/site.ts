/**
 * ---------------------------------------------------------------------------
 * SITE CONTENT — the single place to edit the portfolio.
 * ---------------------------------------------------------------------------
 * This file works as the site's lightweight CMS/settings panel.
 *
 * PROFESSIONAL PHOTO
 *   1. Add your portrait to `public/portrait/` (JPG, PNG or WebP).
 *   2. Set `photo` below to its public path, e.g. "/portrait/rejie-rufin.jpg".
 *   Until then, the hero shows a designed RR monogram plate.
 *
 * LINKEDIN
 *   Paste a profile URL into `linkedin` when available. While it is empty,
 *   no LinkedIn link or placeholder icon is rendered anywhere on the site.
 *
 * RESUME
 *   The supplied resume lives at `public/resume/Rejie-Rufin-Resume.pdf`.
 *   Replace that file with an updated version to update the download.
 * ---------------------------------------------------------------------------
 */

export const site = {
  name: "Rejie Rufin",
  firstName: "Rejie",
  lastName: "Rufin",
  role: "ICM Specialist",
  roleLong: "ICM Specialist",
  specialtyLine:
    "Import Customs Manifest | Shipping Documentation | Logistics Operations | Process Excellence",

  // Owner settings ---------------------------------------------------------
  photo: "/portrait/rejie-rufin.webp", // transparent cutout, supplied portrait
  photoAlt: "Rejie Rufin, ICM Specialist",
  linkedin: "", // optional — leave empty to hide
  resumeUrl: "/resume/Rejie-Rufin-Resume.pdf",

  email: "rejierufinxxvii@gmail.com",
  phoneDisplay: "0977-160-1265",
  phoneHref: "+639771601265",

  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Experience", href: "#experience" },
    { label: "Process", href: "#process" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    label: "Logistics • Customs • Documentation",
    headline: "Documentation precision that keeps cargo moving.",
    support:
      "Results-driven logistics and customs documentation professional experienced in import customs manifest processing, freight forwarding, airfreight documentation, import-export coordination, regulatory documentation, and time-sensitive operational processes.",
    specializations: [
      "Import Customs Manifest",
      "Shipping Documentation",
      "Logistics Operations",
      "Process Excellence",
    ],
    values: ["Accuracy", "Compliance", "Ownership", "Reliability"],
  },

  about: {
    eyebrow: "Beyond the documents",
    headline: "Precision behind every shipment.",
    paragraphs: [
      "Rejie Rufin works where shipping data, customs requirements, and operational deadlines meet. His background combines hands-on import customs manifest processing, freight forwarding documentation, airfreight operations, and import-export coordination.",
      "The work is detail-heavy by nature. Every release depends on validated information, corrected discrepancies, coordinated agents, and documents filed within strict timelines. Rejie brings ownership to that chain — reviewing carefully, communicating clearly, and keeping the process moving when exceptions arise.",
      "From customs manifest submission for Vietnam and Cambodia shipments to end-to-end air export documentation, the focus stays the same: accuracy, compliance, and control.",
    ],
    chips: [
      "Customs Manifest",
      "Shipping Documentation",
      "Import / Export",
      "Process Control",
      "Regulatory Support",
      "Exception Handling",
    ],
    facts: [
      { label: "Current Focus", value: "Import Customs Manifest", icon: "focus" },
      { label: "Markets Supported", value: "Vietnam & Cambodia", icon: "globe" },
      { label: "Industry", value: "Shipping & Logistics", icon: "ship" },
      {
        label: "Core Strength",
        value: "Documentation & Process Control",
        icon: "shield",
      },
    ],
  },

  expertise: [
    {
      title: "Import Customs Manifest",
      icon: "manifest",
      kicker: "Customs",
      description:
        "Preparation, validation, and timely submission of import customs manifests for shipments arriving in Vietnam and Cambodia.",
    },
    {
      title: "Freight Documentation",
      icon: "freight",
      kicker: "Documentation",
      description:
        "Experience in import air and sea manifest processing, shipping document review, cargo updates, amendments, and shipment documentation.",
    },
    {
      title: "Compliance & Accuracy",
      icon: "compliance",
      kicker: "Compliance",
      description:
        "Careful validation of shipment information with focus on documentation accuracy, regulatory requirements, and operational deadlines.",
    },
    {
      title: "Shipment Coordination",
      icon: "coordination",
      kicker: "Coordination",
      description:
        "Coordination with international agents, airlines, shipping lines, customs brokers, and internal stakeholders to resolve documentation discrepancies.",
    },
    {
      title: "Air Export Operations",
      icon: "air",
      kicker: "Airfreight",
      description:
        "Experience supporting air export shipments from booking through cargo uplift and preparing MAWB, HAWB, commercial invoices, packing lists, export declarations, and shipping instructions.",
    },
    {
      title: "Process Ownership",
      icon: "process",
      kicker: "Operations",
      description:
        "Structured process execution, issue management, documentation control, and continuous improvement.",
    },
  ],

  experience: [
    {
      period: "2023 — Present",
      company: "Maersk Global Service Centre",
      location: "Philippines",
      role: "Process Expert / ICM Specialist",
      current: true,
      summary:
        "Import customs manifest preparation, validation, compliance, and timely submission for Vietnam and Cambodia shipments.",
      highlights: [
        "Ensure the timely, accurate, and compliant preparation and submission of import customs manifests.",
        "Maintain high accuracy and on-time completion of customs manifest reporting.",
      ],
      tags: ["Import Customs Manifest", "Vietnam & Cambodia", "Compliance"],
    },
    {
      period: "2017 — 2023",
      company: "ATR International Freight Inc.",
      location: "Port Area, Manila",
      role: "Senior Documentation Officer / IMPEX Coordinator",
      current: false,
      summary:
        "End-to-end import air and sea manifest processing through the e-Trade/e2m Customs System, manifest amendments, shipment exceptions, air export coordination, and shipping documentation.",
      highlights: [
        "Managed import air and sea manifest processing and submission through the e-Trade/e2m Customs System.",
        "Resolved manifest amendments, cargo updates, and shipment exceptions with international agents, airlines, shipping lines, and customs brokers.",
        "Coordinated air export shipments from booking to cargo uplift, preparing MAWB, HAWB, commercial invoices, packing lists, export declarations, and shipping instructions.",
      ],
      tags: ["Air & Sea Manifest", "e2m / e-Trade", "Air Export"],
    },
    {
      period: "2016",
      company: "Municipal Treasurer’s Office",
      location: "Municipality of Isabel",
      role: "Administrative Staff",
      current: false,
      summary:
        "Financial records, daily disbursement documentation, payroll support, BIR records, reporting, and administrative operations.",
      highlights: [
        "Recorded and posted daily disbursement transactions with accurate financial documentation.",
        "Supported payroll preparation, employee BIR records, and treasury reporting.",
      ],
      tags: ["Financial Records", "Payroll Support", "BIR Records"],
    },
    {
      period: "2013 — 2015",
      company: "Inspira Prime International Corp.",
      location: "Quezon City",
      role: "Liaison Officer",
      current: false,
      summary:
        "Government permits, regulatory documentation, registrations, renewals, and coordination with government agencies and other external stakeholders.",
      highlights: [
        "Managed business permit applications, renewals, registrations, and regulatory documentary submissions.",
        "Coordinated with BIR, LGUs, barangay offices, banks, and other external stakeholders.",
      ],
      tags: ["Government Liaison", "Regulatory Documents", "Permits"],
    },
    {
      period: "2013 — 2015",
      company: "Philippine Statistics Authority",
      location: "Tacloban City, Leyte",
      role: "Census Area Supervisor",
      current: false,
      summary:
        "Field supervision, enumerator training, logistics coordination, protocol compliance, and data validation.",
      highlights: [
        "Supervised field operations, trained enumerators, and coordinated census logistics.",
        "Reviewed collected data for consistency and resolved discrepancies.",
      ],
      tags: ["Field Supervision", "Data Validation", "Logistics"],
    },
  ],

  process: [
    {
      step: "01",
      title: "Receive & Organize",
      icon: "receive",
      description:
        "Establish shipment scope, source documents, and submission requirements.",
    },
    {
      step: "02",
      title: "Validate",
      icon: "validate",
      description:
        "Review critical shipment and documentation details for consistency and completeness.",
    },
    {
      step: "03",
      title: "Resolve Exceptions",
      icon: "resolve",
      description:
        "Coordinate discrepancies, amendments, and missing information with relevant stakeholders.",
    },
    {
      step: "04",
      title: "Submit & Control",
      icon: "submit",
      description:
        "Complete compliant filing according to required operational deadlines.",
    },
    {
      step: "05",
      title: "Document & Improve",
      icon: "improve",
      description:
        "Maintain clear records, support business continuity, and continuously improve repeatable processes.",
    },
  ],

  valueProps: [
    {
      title: "Precision",
      icon: "precision",
      description:
        "Detail-focused review of time-sensitive shipping and customs information.",
    },
    {
      title: "Reliability",
      icon: "reliability",
      description:
        "Ownership of deadlines, operational handoffs, and follow-through.",
    },
    {
      title: "Compliance Mindset",
      icon: "compliance",
      description:
        "Strong focus on documentation aligned with regulatory and business requirements.",
    },
    {
      title: "Clear Coordination",
      icon: "coordination",
      description:
        "Professional communication across agents, carriers, brokers, and internal stakeholders.",
    },
    {
      title: "Adaptability",
      icon: "adaptability",
      description:
        "Experience covering logistics operations, government liaison work, and administrative functions.",
    },
    {
      title: "Continuous Improvement",
      icon: "improvement",
      description:
        "A process-oriented mindset focused on clarity, control, and sustainable execution.",
    },
  ],

  tools: [
    { name: "Microsoft Excel", category: "Data & Reporting", icon: "excel" },
    { name: "Microsoft Word", category: "Documentation", icon: "word" },
    { name: "Microsoft Outlook", category: "Email & Scheduling", icon: "outlook" },
    { name: "Microsoft Teams", category: "Collaboration", icon: "teams" },
    { name: "e2m / e-Trade System", category: "Customs Filing", icon: "etrade" },
    { name: "Process Flows", category: "Process Design", icon: "flow" },
  ],

  strengths: [
    "Attention to Detail",
    "Time Management",
    "Process Ownership",
    "Communication",
    "Adaptability & Flexibility",
    "Continuous Improvement",
  ],

  education: {
    school: "Palompon Institute of Technology",
    degree: "Bachelor of Science in Shipping Management",
    period: "June 2011 — March 2015",
  },

  cta: {
    eyebrow: "Let’s connect",
    headline: ["Build reliable operations.", "Keep cargo moving."],
    support:
      "Open to professional opportunities where customs documentation expertise, logistics knowledge, process discipline, and stakeholder coordination can contribute to reliable operations.",
  },

  contact: {
    eyebrow: "Contact",
    headline: "Let’s talk about the work.",
    note: "For opportunities in customs documentation, shipping operations, or logistics process support, reach out directly.",
  },

  footer: {
    descriptor:
      "Import Customs Manifest • Shipping Documentation • Process Excellence",
    values: "Accuracy | Compliance | Ownership",
  },
};

export type Site = typeof site;
export type NavItem = (typeof site.nav)[number];
export type ExpertiseItem = (typeof site.expertise)[number];
export type ExperienceItem = (typeof site.experience)[number];
export type ProcessItem = (typeof site.process)[number];
export type ValueProp = (typeof site.valueProps)[number];
export type ToolItem = (typeof site.tools)[number];
