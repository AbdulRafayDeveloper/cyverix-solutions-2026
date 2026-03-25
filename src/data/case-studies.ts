/** Case studies: balanced narrative length, explicit industry verticals, six-stack tags per project */

import type { CaseStudyVisualTheme } from "@/components/case-studies/case-study-visual-theme";

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  year: string;
  /** Primary industry vertical(s), shown prominently on the case study page */
  industry: string;
  /** Optional override for the generated case-study preview art (SVG). If omitted, theme is inferred from copy. */
  visualTheme?: CaseStudyVisualTheme;
  liveUrl?: string;
  summary: string;
  challenge: string;
  solution: string;
  highlights: string[];
  techStack: string[];
  role: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "droppr-ai",
    title: "DropPR.ai",
    category: "AI / SaaS",
    year: "2024",
    industry: "MarTech, AI content and SEO automation",
    liveUrl: "https://www.droppr.ai",
    summary:
      "We delivered a production-grade MarTech platform for teams that must turn rich media into searchable, publish-ready editorial at volume. The product spans ingestion, async AI pipelines, operator visibility, and growth mechanics so marketing and comms orgs can run campaigns without babysitting infrastructure.",
    challenge:
      "The client needed to sustain heavy concurrent transcription and generation without silent failures, while deterring abuse and proving progress to end users. Organic discovery had to stay first-class: metadata, crawlability, and operational SEO could not be bolted on late without rework.",
    solution:
      "We built queue-backed workers, hardened APIs, and structured status surfaces so every job is observable from upload to completion. We layered validation, logging, anti-spam controls, and indexing workflows so the system behaves like an enterprise SaaS surface, not a demo wrapper around a model API.",
    highlights: [
      "End-to-end pipeline visibility so users and admins always know where content sits in processing, reducing support load and trust gaps.",
      "Multi-modal flows spanning audio-to-article, in-browser capture, and AI voiceover so one platform replaces several point tools.",
      "In-product messaging, AI-assisted support, and feedback loops that turn production traffic into actionable product intelligence.",
      "Technical SEO foundations, sitemaps, metadata discipline, and indexing-oriented structure, aligned with how serious content teams ship.",
    ],
    techStack: ["AI / LLM orchestration", "Background workers and queues", "Real-time job status", "API hardening and abuse controls", "SEO and indexing", "Observability and logging"],
    role: "Platform architecture, backend systems, and product engineering",
  },
  {
    id: "panda-chat",
    title: "Panda Chat",
    category: "AI / CX",
    year: "2024",
    industry: "Retail and CX, Omnichannel AI support",
    summary:
      "Panda Chat is an enterprise-style customer experience platform for retailers and operators who cannot afford fragmented inboxes. We engineered a single control plane across email, social, and live chat with reasoning-assisted replies grounded in live commerce and ERP truth, not generic chatbot fluff.",
    challenge:
      "Support volume was splitting across channels while buyers expected instant answers tied to orders, inventory, and policies. The product had to automate the routine without trapping customers in dead-end bots when revenue or reputation was on the line.",
    solution:
      "We unified ingestion into one inbox, added a reasoning layer tuned for sub-second responses on high-volume threads, and integrated Shopify, Magento, WooCommerce, and ERP backends so answers reference real data. Human escalation paths preserve quality for edge cases and VIP scenarios.",
    highlights: [
      "One operational inbox replacing channel silos, with consistent routing, context, and audit-friendly conversation history.",
      "Automation coverage on repetitive intents with measurable deflection, while preserving human takeover for sensitive workflows.",
      "Document-grounded assistance across PDFs, spreadsheets, and knowledge bases so agents and AI share the same source of truth.",
      "Multilingual detection and response patterns suitable for global storefronts without duplicating entire teams per locale.",
    ],
    techStack: ["LLM reasoning layer", "Shopify / Magento / Woo", "ERP and order data sync", "Omnichannel messaging APIs", "RBAC and handoff workflows", "Analytics and coverage metrics"],
    role: "AI systems design, integrations, and production CX engineering",
  },
  {
    id: "chooseyourchoice",
    title: "ChooseYourChoice",
    category: "Web / Research",
    year: "2024",
    industry: "Market research, Structured sentiment capture",
    liveUrl: "https://chooseyourchoice.vercel.app",
    summary:
      "Built for the insights and research vertical, this product rethinks how opinion data is collected on mobile. Instead of long forms, respondents move through a guided, low-friction flow that still yields structured, analysis-ready signals for product and policy teams.",
    challenge:
      "Classic surveys create abandonment: too many fields, too many pages, and weak mobile ergonomics. The client still required precise per-question structure so analysts could segment agreement and intensity without manual cleanup.",
    solution:
      "We implemented a Next.js experience on Vercel with a disciplined one-question-at-a-time UX, motion-safe transitions, and Supabase-backed persistence that captures question identifiers and dual-axis slider values reliably. The architecture stays lean on auth where unnecessary, keeping rollout fast without sacrificing data integrity.",
    highlights: [
      "Continuous flow design that minimizes cognitive load while preserving strict question order and capture semantics.",
      "Dual-slider mechanics encoding both direction and strength of opinion for richer segmentation than Likert-only tools.",
      "Server-backed storage with clear schemas so downstream analytics, exports, and dashboards do not require rescraping.",
      "Extensible foundation for visualization phases, cohort filters, and institutional reporting without redesigning the capture layer.",
    ],
    techStack: ["Next.js App Router", "Vercel edge delivery", "Supabase Postgres", "Responsive UX patterns", "Schema-driven responses", "Analytics-ready payloads"],
    role: "Product UX, frontend architecture, and data capture integration",
  },
  {
    id: "medaibility",
    title: "Medaibility",
    category: "EdTech / Health",
    year: "2024",
    industry: "Healthcare, Medical education technology",
    liveUrl: "https://medaibility.com",
    summary:
      "Medaibility sits at the intersection of healthcare education and digital product delivery: a multi-service learning environment with banks, simulations, and live-like clinical workflows. We built backend services, auth, media, and content tooling so educators can operate at scale without compromising session quality.",
    challenge:
      "Medical training content is sensitive, high-stakes, and globally distributed. The platform required secure access, reliable realtime sessions, performance analytics across specialties, and enough modularity to evolve curricula without freezing the entire stack.",
    solution:
      "We delivered NestJS microservices with JWT-secured boundaries, MySQL-backed domain models, AWS Lambda for elastic workloads, and a TypeScript React client. LiveKit powers WebRTC consultations, recording, and transcription hooks, with AI-assisted content workflows where instructors need speed without sacrificing reviewability.",
    highlights: [
      "Structured learning modules spanning question banks, spaced repetition, and interview preparation with traceable learner progress.",
      "Live clinical simulations with documentation patterns that mirror real-world charting expectations for training programs.",
      "Imaging and video assessment flows designed for specialty depth rather than generic “upload a file” features.",
      "Localization-ready medical libraries with personalization hooks so institutions can tailor pathways by cohort or region.",
    ],
    techStack: ["NestJS microservices", "React + TypeScript", "MySQL", "AWS Lambda", "LiveKit WebRTC", "JWT auth and media pipelines"],
    role: "Backend architecture, realtime media, and education platform engineering",
  },
  {
    id: "talkhub",
    title: "TalkHub",
    category: "Realtime / Comms",
    year: "2024",
    industry: "Communications, Real-time voice and signaling",
    summary:
      "TalkHub is a communications product that packages WebRTC calling behind enterprise-appropriate authentication and persistence. We treated signaling, presence, and call state as first-class distributed concerns, not a weekend demo, so the experience survives real networks and real user behavior.",
    challenge:
      "Browser calling fails when ICE negotiation, NAT traversal, and auth/session drift are handled casually. The client needed predictable call setup, searchable users, online presence, and APIs that resist trivial abuse in a public-facing deployment.",
    solution:
      "We combined Next.js 15 with a custom Node server, Socket.io signaling, STUN/TURN configuration, and MongoDB-backed profiles. Joi validation, bcrypt-backed credentials, JWT-protected routes, and security headers round out a stack that reads like a serious comms MVP ready for hardening and scale-out.",
    highlights: [
      "User discovery and presence modeling so calls start from real directory state rather than opaque peer IDs.",
      "Offer/answer/ICE exchange orchestration with hooks abstracted into maintainable client modules for future mobile clients.",
      "Custom React hooks encapsulating WebRTC lifecycle noise so product teams can iterate UI without breaking media logic.",
      "Defense-in-depth API posture: JWT gates, schema validation, and transport hardening appropriate for customer-facing rollout.",
    ],
    techStack: ["Next.js 15", "Socket.io", "WebRTC / STUN / TURN", "MongoDB", "Joi validation", "JWT and security headers"],
    role: "Realtime engineering, signaling architecture, and secure APIs",
  },
  {
    id: "okani-travels",
    title: "Okani Travels",
    category: "Marketplace / Travel",
    year: "2024",
    industry: "Travel and hospitality, Multi-sided marketplace",
    liveUrl: "https://www.okanitravels.com",
    summary:
      "Okani Travels is a full marketplace stack for hotels, activities, and transport, complete with vendor verification, commercial analytics, and Stripe-backed money movement. We engineered three distinct product surfaces (traveler, supplier, operations) that behave as one coherent platform.",
    challenge:
      "Travel marketplaces collapse when inventory, policy, and payouts are managed in spreadsheets. The client required trustworthy bookings, vendor onboarding with compliance-minded checks, and admin tooling that leadership can actually run during peak season.",
    solution:
      "We implemented Next.js and TypeScript with a Node service layer, Stripe for payments and reconciliation, wishlists and promos, recommendation surfaces, vendor financial exports, verification workflows, support chat, ticketing, and executive dashboards. Notifications and insured-transaction positioning reduce operational anxiety for both sides of the market.",
    highlights: [
      "Unified catalog and booking flows across lodging, experiences, and transport modalities with consistent policy handling.",
      "Vendor verification pipelines and admin oversight designed for fraud resistance, not cosmetic badges.",
      "P&L style analytics, modular backups, and export paths so finance and ops can audit without database access.",
      "Customer messaging, ticketing, and email-triggered updates that keep travelers informed through itinerary changes.",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js services", "Stripe Connect / payments", "MongoDB or SQL data layer", "Admin and vendor dashboards"],
    role: "Marketplace platform engineering and payments integration",
  },
  {
    id: "genx-career",
    title: "GenX Career",
    category: "Web / HR Tech",
    year: "2024",
    industry: "HR Tech, Talent acquisition and CV intelligence",
    liveUrl: "https://genx-career.vercel.app",
    summary:
      "GenX Career targets the HR technology vertical with an aggregated discovery experience and AI-assisted application quality. Job seekers operate from one surface while the system reasons about fit, wording, and structure against real postings, reducing spray-and-pray applications.",
    challenge:
      "Candidates were bouncing between job boards with inconsistent CV quality and no feedback loop. The product needed credible integrations, fast search, and document generation that feels professional, not gimmicky, because hiring managers judge polish instantly.",
    solution:
      "We connected listings from major sources with one-click apply handoffs where appropriate, built CV analysis flows against posting text, and shipped a template-driven CV builder with export paths. The architecture keeps AI suggestions explainable enough for users to trust edits before submission.",
    highlights: [
      "Single-pane discovery reducing context switching across external boards while preserving deep links and attribution.",
      "Fit-oriented AI commentary tied to specific roles rather than generic “improve your resume” tips.",
      "Multiple high-quality document templates with consistent typography and parse-friendly structure for ATS systems.",
      "Extensible pipeline for adding boards, locales, and employer-specific branding without rewriting core matching logic.",
    ],
    techStack: ["Next.js", "Job feed aggregation", "LLM CV analysis", "PDF / DOC generation", "Template engine", "Analytics on funnel events"],
    role: "Product engineering, AI integration, and document workflows",
  },
  {
    id: "househub365",
    title: "HouseHub365",
    category: "Web / Home",
    year: "2024",
    industry: "PropTech, Home operations and maintenance",
    liveUrl: "https://www.househub365.com",
    summary:
      "HouseHub365 is a homeowner operations platform in the PropTech space: appliances, warranties, maintenance schedules, and trusted service providers in one system. We treated the home as a portfolio of assets with timelines, not a single static dashboard, so families stop losing manuals and missing service windows.",
    challenge:
      "Home data is fragmented across rooms, vendors, paper manuals, and ad hoc reminders. Without structure, even simple maintenance becomes reactive and expensive. The client needed cloud-backed history, notifications, and a credible contractor layer.",
    solution:
      "We built Next.js with Node and MongoDB, modeling room-wise appliances, smart and manual reminders, verified contractor discovery, and durable service logs. Storage and notification patterns are designed so the product can grow into insurer or property-manager partnerships later.",
    highlights: [
      "Portfolio-style dashboards that mirror how owners think: by space, asset class, and upcoming maintenance risk.",
      "Scheduling intelligence combining manual plans and automated nudges so seasonal and manufacturer intervals are not missed.",
      "Verified contractor flows with booking hooks that reduce “random phone number from Facebook” risk for homeowners.",
      "Historical service records that increase resale and warranty claim credibility with time-stamped evidence.",
    ],
    techStack: ["Next.js", "Node.js", "MongoDB", "Notification jobs", "Cloud file storage", "Verification workflows"],
    role: "Full-stack product engineering for consumer PropTech",
  },
  {
    id: "rewordify",
    title: "Rewordify",
    category: "AI / Content",
    year: "2024",
    industry: "SaaS, AI writing and editorial tooling",
    summary:
      "Rewordify is a SaaS workspace for teams and creators who need controlled rewriting, generation, and file-based editorial workflows. We shipped flows that respect tone, length, and format constraints while keeping exports compatible with downstream legal and marketing review.",
    challenge:
      "Generic chat UIs frustrate professional writers: parameters drift, files leak context, and outputs are hard to version. The client needed deterministic-enough controls, ingest for office formats, and admin communication channels for policy updates.",
    solution:
      "We engineered paragraph and document pipelines with explicit parameter panels, PDF/Word/text ingest, exports to .txt and .doc, and guided onboarding content. Admin messaging surfaces let operators broadcast changes to acceptable use or model behavior without redeploying static copy only.",
    highlights: [
      "Tunable tone and length targets so teams can enforce brand voice instead of post-hoc editing everything.",
      "Sample-driven onboarding and one-click copy flows that reduce time-to-first-success for non-technical users.",
      "File ingest with sensible guardrails so large documents do not destabilize client memory or server timeouts.",
      "Admin-to-user messaging patterns suitable for policy, maintenance, or tier announcements inside the product.",
    ],
    techStack: ["LLM content APIs", "PDF / DOC parsing", "Next.js or SPA client", "Job chunking for long docs", "Export pipelines", "Admin messaging"],
    role: "Product engineering for AI-assisted content SaaS",
  },
  {
    id: "pacedream",
    title: "PaceDream",
    category: "Marketplace",
    year: "2024",
    industry: "Travel and hospitality, Flexible rentals and splits",
    liveUrl: "https://www.pacedream.com",
    summary:
      "PaceDream addresses a complex slice of the travel and short-term rental industry: hourly inventory, roommate economics, and distressed inventory for last-minute trips. We engineered unified booking and payment semantics so radically different inventory types do not fork into unmaintainable code paths.",
    challenge:
      "The business combined rooms, restrooms, parking, roommate splits, and flash deals, each with different risk profiles. Users still expect Airbnb-grade trust cues, fair refunds, and security around payments.",
    solution:
      "We implemented cohesive booking flows with optional authentication where it improves conversion, explicit credit/refund rules, and payment security messaging. The architecture isolates pricing and inventory rules per vertical while sharing a single cart and ledger conceptual model.",
    highlights: [
      "Hourly rental support across unconventional inventory categories without compromising checkout clarity.",
      "Roommate split-payment flows that reduce awkward peer-to-peer money chasing outside the platform.",
      "Last-minute travel merchandising hooks for flights and lodging with operational safeguards on inventory freshness.",
      "Security-first payment framing and dispute-oriented logging so ops can trace edge cases during scale events.",
    ],
    techStack: ["Marketplace core", "Payments and ledger rules", "Inventory modeling", "Fraud-conscious checkout", "Notification system", "Admin pricing tools"],
    role: "Platform engineering, payments logic, and marketplace UX",
  },
  {
    id: "101electronics",
    title: "101electronics.pk",
    category: "E‑commerce",
    year: "2024",
    industry: "Retail, Consumer electronics and appliances",
    liveUrl: "https://101electronics.pk",
    summary:
      "101electronics.pk is a retail e-commerce platform focused on appliances and consumer electronics for the Pakistan market, including B2B programs and after-sales care. We structured catalog, campaigns, and support touchpoints so the brand competes with national chains online.",
    challenge:
      "Electronics retail requires trust: warranty language, service centers, and commercial buyer flows cannot look like a generic theme. The client needed promotional mechanics, repair positioning, and always-visible sales channels.",
    solution:
      "We delivered a storefront emphasizing large-ticket categories, TVs, ACs, appliances, with B2B entry points, care and repair sections, vouchers, and clearance events. Published contact lines and structured service CTAs reduce abandonment on high-consideration purchases.",
    highlights: [
      "Category architecture tuned for appliance and electronics discovery rather than shallow SKU grids.",
      "B2B flows and repair services surfaced as first-class journeys, not footer links nobody clicks.",
      "Campaign tooling for vouchers and clearance with merchandising blocks that marketing can rotate frequently.",
      "Operational phone and support visibility aligned with how regional buyers still prefer to confirm stock and price.",
    ],
    techStack: ["E-commerce CMS", "Catalog and merchandising", "Promo / voucher engine", "B2B checkout paths", "SEO for retail", "Analytics and conversion tracking"],
    role: "Retail storefront engineering and commerce operations",
  },
  {
    id: "seohub",
    title: "SEOHub (Digital Search Group)",
    category: "MarTech / Internal tools",
    year: "2024",
    industry: "MarTech, SEO operations and automation",
    liveUrl: "https://tools.digitalsearchgroup.com",
    summary:
      "SEOHub is internal MarTech infrastructure for agencies that must generate keyword and page scaffolding at scale with auditability. We modeled sectors, disciplines, services, and locations so automation outputs stay tied to real customer records, not orphan HTML.",
    challenge:
      "Manual SEO setup does not scale across dozens of clients and verticals. Teams needed CRUD, exports, deletion safety, and stats that leadership can review without opening a database console.",
    solution:
      "We implemented a structured domain model that drives automated keyword and landing-page generation, full admin CRUD, operational statistics, safe delete workflows, and Excel export for handoff to content and sales teams. The tool behaves like internal software, not a one-off script.",
    highlights: [
      "Domain-driven generation so every page and keyword set traces back to sector, service, and geo intent.",
      "Admin panels with stats and governance suitable for managers reviewing throughput and quality weekly.",
      "Export pipelines that slot into agency workflows instead of forcing copy-paste from browser tables.",
      "Deletion and audit patterns that reduce the risk of nuking customer datasets during bulk operations.",
    ],
    techStack: ["Internal admin app", "Relational data model", "Bulk generation jobs", "Excel export", "RBAC for operators", "Usage analytics"],
    role: "MarTech tooling, automation, and data governance",
  },
  {
    id: "detext-ai",
    title: "DETEXT AI",
    category: "AI / SaaS",
    year: "2024",
    industry: "SaaS, Content authenticity and multimodal AI",
    liveUrl: "https://www.detext.ai",
    summary:
      "DETEXT AI is a subscription SaaS suite spanning detection, humanization, voice, and imagery, aimed at teams that need defensible signals about AI-generated material. We integrated multiple model providers and built monetization, limits, and admin analytics like a mature consumer software business.",
    challenge:
      "Users expect fast, credible scores across modalities, but model variance and API costs punish naive architectures. The client required guest vs paid tiers, package administration, charts, and support workflows that do not collapse under traffic spikes.",
    solution:
      "We shipped Next.js and Node/TypeScript with Python-side tooling, wiring OpenAI, HuggingFace, Kaggle assets, and specialized detection APIs. Admin consoles manage packages, quotas, cancellations, and revenue views; product surfaces expose line-level insights for text workflows.",
    highlights: [
      "Cross-modal toolkit: humanizer, detectors, generators, and media checks in one cohesive commercial product.",
      "Subscription lifecycle with upgrades, cancels, and limit enforcement suitable for card-not-present SaaS.",
      "Admin analytics for usage, revenue, and support triage so operators can intervene before churn hardens.",
      "Performance-conscious routing between model providers to balance latency, cost, and accuracy targets.",
    ],
    techStack: ["Next.js", "Node.js / TypeScript", "Python ML services", "OpenAI and HuggingFace", "Stripe / billing hooks", "Admin analytics dashboards"],
    role: "Full-stack AI platform engineering and monetization",
  },
  {
    id: "idurara-erp",
    title: "Idurara ERP",
    category: "ERP / Enterprise",
    year: "2024",
    industry: "Enterprise, ERP and business operations",
    summary:
      "Idurara ERP is an integrated operations suite for SMEs that have outgrown spreadsheets but cannot afford a multi-year SAP-style program. We delivered HR, CRM, finance, inventory, ticketing, and reporting as modular domains with shared auth and auditable ledgers.",
    challenge:
      "Small and mid-market firms juggle employees, customers, invoices, stock, and support tickets in disconnected tools. Data drift causes revenue leakage and compliance headaches; they needed one system with role-based access and exportable evidence.",
    solution:
      "We built React with Node and TypeScript, implementing RBAC, automated invoicing PDFs, payment gateways, notification systems, ticketing, dashboards, Excel/PDF reporting, payroll modules, and cloud backups. Each submodule can evolve independently while sharing identity and audit trails.",
    highlights: [
      "Employee and customer CRM with histories that sales and support can trust during disputes.",
      "Financial operations with auditable logs and document generation suitable for accountants and regulators’ questions.",
      "Inventory and HR/payroll coverage so operations leaders stop reconciling three exports every Friday.",
      "Modular backup and analytics dashboards that leadership can read without SQL literacy.",
    ],
    techStack: ["React SPA", "Node.js / TypeScript", "RBAC and audit logs", "Stripe / PayPal", "PDF and Excel reporting", "Cloud backup jobs"],
    role: "Enterprise application development and ERP modularization",
  },
  {
    id: "zorova-health",
    title: "Zorova Health",
    category: "Marketplace / Health",
    year: "2024",
    industry: "Healthcare, On-demand wellness and field services",
    summary:
      "Zorova Health is a healthcare-adjacent marketplace coordinating on-demand wellness and protection-style services with dispatch, memberships, and live tracking. We built order lifecycle, provider apps, and admin finance views so field operations behave like a modern gig platform with healthcare-grade discipline.",
    challenge:
      "Field services break when payouts, referrals, franchises, and SOS flows are afterthoughts. The client needed revenue and expense visibility, package authoring, legal terms, and post-service feedback without operational blind spots.",
    solution:
      "We delivered end-to-end order states, provider-facing tools, admin revenue/profit/expense analytics, configurable packages, T&Cs, live tracking, gateway integrations, and structured feedback capture. The system is built for regional expansion and franchise governance.",
    highlights: [
      "Service catalog spanning massage, fitness, weight management, and protection-adjacent offerings with clear SKUs.",
      "Franchise, referral, membership, and SOS pathways modeled explicitly instead of hard-coded promotions.",
      "Live provider tracking and payment recording so dispatch and finance share one operational timeline.",
      "Post-service feedback loops that feed quality control and provider scorecards for marketplace health.",
    ],
    techStack: ["Marketplace core", "Real-time location", "Payments and payouts", "Admin finance dashboards", "Membership engine", "Notifications and SMS/email"],
    role: "Healthcare marketplace platform engineering",
  },
  {
    id: "edexcel",
    title: "Edexcel Academy",
    category: "EdTech",
    year: "2024",
    industry: "EdTech, Tutoring and academic programs",
    liveUrl: "https://edexceledu.com",
    summary:
      "Edexcel Academy’s digital presence serves the education industry with structured program marketing, tutor recruitment, and online delivery positioning. We built a credible institutional front door that scales with new subjects and intake seasons without redesigning each year.",
    challenge:
      "Students and parents evaluate tutors on trust signals: curriculum depth, monitoring, support promises, and career paths for educators. A generic landing page would undersell a multi-subject academy competing with international brands.",
    solution:
      "We engineered a marketing and lightweight operations site emphasizing curricula, performance support, 24/7 support positioning, tutor careers, and online teaching pathways. Content architecture separates programs, outcomes, and hiring so SEO and paid campaigns can deep-link cleanly.",
    highlights: [
      "Broad subject and curriculum storytelling that scales as the academy adds departments or boards.",
      "Support and monitoring narratives aligned with parent expectations in premium tutoring segments.",
      "Tutor hiring funnels with job-board semantics so recruitment does not live only in PDF flyers.",
      "Online course and class positioning hooks ready for LMS or webinar integrations behind the same brand.",
    ],
    techStack: ["Marketing site / CMS", "Program information architecture", "SEO and structured content", "Lead capture forms", "Analytics events", "Localization-ready layout"],
    role: "Web platform, content architecture, and EdTech positioning",
  },
  {
    id: "yovho",
    title: "Yovho.com",
    category: "Marketplace / PropTech",
    year: "2024",
    industry: "PropTech, Short-term rental marketplace",
    liveUrl: "https://yovho.netlify.app",
    summary:
      "Yovho is a MERN marketplace in the property rental vertical connecting verified vendors with guests across hotels, hostels, homes, and apartments. We implemented the full two-sided lifecycle: onboarding, bookings, reviews, discounts, and admin approvals at production depth.",
    challenge:
      "Trust in listings and booking state is everything; chat, discounts, and reporting cannot be plugins glued on at the end. The client needed admin pipelines that scale as inventory grows across cities.",
    solution:
      "We used MongoDB, Express, React, and Node with vendor verification, user history, Q&A, reviews, real-time vendor chat, promotional discounts, printable operational artifacts, and admin approval queues. Search and filtering keep discovery usable as SKUs multiply.",
    highlights: [
      "Inventory breadth across hospitality formats while preserving consistent booking semantics and calendars.",
      "User panels for history, questions, and reviews that reduce duplicate support tickets to vendors.",
      "Vendor dashboards for availability, discounts, and printable summaries aligned with on-site operations.",
      "Admin moderation and approval flows that prevent low-quality listings from poisoning search relevance.",
    ],
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io chat", "Admin moderation tools"],
    role: "Full-stack marketplace engineering for PropTech",
  },
  {
    id: "trafikbilder",
    title: "TrafikBilder",
    category: "Media / Subscription",
    year: "2024",
    industry: "Media, Licensed traffic imagery (Nordics)",
    liveUrl: "https://trafikbilder.se",
    summary:
      "TrafikBilder is a subscription media business serving the Swedish market with searchable traffic photo and video libraries. We built tiered access, large cloud media, uploads, and admin moderation so publishers and professionals can license assets confidently.",
    challenge:
      "Free versus paid tiers, high-resolution media, and editorial taxonomy require disciplined admin tooling. Without exports and verification, libraries become unsearchable dumps that churn subscribers.",
    solution:
      "We engineered searchable catalogs with filters, package-based quality gates, registered profiles, user uploads, cloud storage, admin verification, tag governance, and Excel export of metadata for partner workflows.",
    highlights: [
      "Category and keyword discovery tuned for newsroom-speed retrieval under deadline pressure.",
      "Registered profiles and upload flows with moderation queues so community content does not erode brand trust.",
      "Admin taxonomy and verification tools that scale as contributors and agencies onboard.",
      "Metadata export for partners who need bulk ingestion into internal DAM or CMS systems.",
    ],
    techStack: ["Web application", "Cloud object storage", "Subscription tiers", "Admin moderation", "Search indexing", "Excel / CSV export"],
    role: "Media platform engineering and subscription product",
  },
  {
    id: "diamond-galaxy",
    title: "Diamond Galaxy",
    category: "FinTech / MLM platform",
    year: "2024",
    industry: "Fintech, Rewards, referrals and tiered economics",
    liveUrl: "https://www.diamondgalaxy.io",
    summary:
      "Diamond Galaxy is a MERN platform in the fintech-adjacent referral economy: tasks, commissions, tiers, and premium passes with admin control of bans, pricing, and payouts. We treated money movement and progression rules as domain logic with audit needs, not UI state alone.",
    challenge:
      "Users demand transparent progression; operators need levers for fraud, slot pricing, and commission adjustments without engineering tickets for every change. Any ambiguity erodes trust instantly.",
    solution:
      "We implemented activation payments, task payouts, referral commissions, tier ladders, prestige points, premium passes, and comprehensive admin dashboards for users, tasks, earnings, and slot pricing. Economic rules are centralized to reduce desync between client and server.",
    highlights: [
      "Six-tier progression with prestige scoring that is explainable in-product to reduce support conspiracy theories.",
      "Premium pass monetization with clear benefit communication and entitlement checks enforced server-side.",
      "Admin tooling for bans, pricing, and commissions suitable for nightly operational reviews.",
      "Ledger-friendly event modeling so finance can reconcile payouts when volumes spike.",
    ],
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Payment gateway integration", "Admin economics console"],
    role: "Fintech platform logic, payouts, and governance tooling",
  },
  {
    id: "big-star-uae",
    title: "Big Star UAE",
    category: "Marketplace / Automotive",
    year: "2024",
    industry: "Automotive retail, Classifieds and parts",
    liveUrl: "https://www.bigstaruae.com",
    summary:
      "Big Star UAE serves the automotive retail industry with a classifieds-style marketplace spanning vehicles and spare parts, localized for the UAE. We built discovery, trust, and admin scale for high-SKU complexity and multilingual audiences.",
    challenge:
      "Vehicle and parts taxonomies explode quickly; buyers expect WhatsApp-speed contact, gallery-rich listings, and admin tools that keep inventory honest. Poor filters make marketplaces feel empty even when data exists.",
    solution:
      "We shipped advanced search and filters, galleries, availability signals, WhatsApp CTAs, feedback capture, email updates, admin CRUD for inventory and orders, grid/list modes, and localization. Operational email flows reduce stale listings that damage SEO and trust.",
    highlights: [
      "Cross-vehicle-type inventory with spare parts exploration so the marketplace feels complete, not car-only.",
      "WhatsApp-forward handoff aligned with regional buyer behavior and dealer response times.",
      "Admin CRUD and order oversight that scales as dealers upload hundreds of SKUs per month.",
      "Multi-language UI and dual view modes that improve scanning on mobile showrooms.",
    ],
    techStack: ["Marketplace frontend", "Search and filter engine", "WhatsApp deep links", "Admin inventory CMS", "Email notifications", "i18n / localization"],
    role: "Automotive e-commerce and marketplace engineering",
  },
  {
    id: "pdfify",
    title: "PDFify",
    category: "Developer tools / SaaS",
    year: "2024",
    industry: "SaaS, Document infrastructure and compliance",
    liveUrl: "https://www.pdftools.net",
    summary:
      "PDFify is developer-adjacent SaaS delivering compression, conversion, merge/split, editing hooks, and summarization via FastAPI services. We prioritized privacy posture, short retention, and subscription surfaces so the product can sit credibly next to enterprise procurement checklists.",
    challenge:
      "Users upload sensitive contracts and financial PDFs; long-lived storage is a liability. They still expect Office-quality conversion reliability and predictable performance under parallel jobs.",
    solution:
      "We engineered FastAPI microservices for multi-level compression, bidirectional Office and image conversion, editing, summarization, merge/split, automatic deletion after one hour, plus blog, FAQ, admin, and subscription management for sustainable revenue.",
    highlights: [
      "Configurable compression profiles balancing size reduction against visual fidelity for archival use.",
      "Bidirectional conversion pipelines tested around real-world malformed Office exports users actually upload.",
      "One-hour auto-deletion policy with clear UX copy so security reviewers understand data handling.",
      "Marketing, admin, and billing layers that make the toolkit operable as a business, not a script on a VPS.",
    ],
    techStack: ["FastAPI", "Python PDF stack", "Async job workers", "Object storage (ephemeral)", "Stripe / subscriptions", "Admin and content pages"],
    role: "Backend engineering for document SaaS and privacy-first retention",
  },
  {
    id: "shipzen",
    title: "ShipZen (PackPusher)",
    category: "Logistics / SaaS",
    year: "2024",
    industry: "Logistics, Shipping and carrier-facing SaaS",
    liveUrl: "https://packpusher.vercel.app",
    summary:
      "ShipZen targets the logistics SaaS vertical with a cost-aware agent experience: tracking, account history, FAQs, and a public API surface. We structured the product so operators can answer “where is my shipment?” without opening internal tools.",
    challenge:
      "Shipping incumbents win on trust and visibility; challengers must present clean tracking, transparent policies, and developer extensibility without drowning users in carrier jargon.",
    solution:
      "We built user-friendly tracking and account management, transaction history, integration hooks, a documented public API, and prominent legal pages. The IA mirrors how businesses evaluate logistics partners: proof, support, and compliance first.",
    highlights: [
      "Shipment tracking and self-service account tools that reduce load on human agents during peak seasons.",
      "FAQ depth covering pricing, liability, and edge cases so sales stops answering the same threads daily.",
      "Developer API exposure with versioning-minded structure for partners embedding rates or status in their own apps.",
      "Privacy and terms surfacing that passes basic enterprise vendor review without last-minute legal panic.",
    ],
    techStack: ["Web app / dashboard", "REST public API", "Auth and account model", "Shipment status integration", "FAQ / content layer", "Analytics on support themes"],
    role: "Logistics product engineering and API platform",
  },
  {
    id: "adziyo",
    title: "Adziyo",
    category: "Agency / Marketing site",
    year: "2024",
    industry: "Digital agency, Creative and performance marketing",
    liveUrl: "https://adziyo.com",
    summary:
      "Adziyo is a digital agency presence showcasing web, social, and advertising craft with portfolio depth and structured lead capture. We built the site so creative work, especially HTML banners, is demonstrable, not buried in PDF decks.",
    challenge:
      "Agency sites often look identical; buyers need proof of execution and a low-friction path to brief the team. SEO and performance signals matter because procurement googles vendors before RFPs.",
    solution:
      "We implemented About, Services, Portfolio, Contact, and banner showcases with SEO-friendly structure, fast delivery, and forms that capture enough context for sales to qualify leads. Content areas are modular for ongoing campaign updates.",
    highlights: [
      "Positioning that spans web, social, and performance ads so buyers see full-funnel competence.",
      "Portfolio presentation emphasizing interactive banner work that differentiates from static screenshot grids.",
      "Lead forms tuned for agency sales workflows: budget signals, timelines, and asset availability questions.",
      "SEO-ready IA so service pages rank for intent-heavy queries in competitive agency markets.",
    ],
    techStack: ["Marketing site", "Component-based CMS patterns", "SEO on-page", "Contact and CRM hooks", "Performance optimization", "Banner embed demos"],
    role: "Marketing site engineering and agency positioning",
  },
  {
    id: "scholarai-kfocus",
    title: "ScholarAI (KFocus Academic Search)",
    category: "EdTech / AI",
    year: "2024",
    industry: "EdTech, Academic research discovery",
    summary:
      "ScholarAI serves universities, labs, and independent researchers with metadata-rich academic search, AI summaries, and paper-grounded chat. We built discovery UX and AI layers so users never feel they are chatting with a model disconnected from citations.",
    challenge:
      "Researchers tolerate zero slop: filters must be exact, pagination predictable, and AI assistance must respect paper boundaries. Latency and hallucination risk are existential to credibility in this vertical.",
    solution:
      "We built advanced filters for year, subject, publisher, and institute with disciplined pagination and abstract presentation. AI summaries and live chat analyze attached papers under constraints that keep answers traceable to source text where possible.",
    highlights: [
      "Metadata filters that match how librarians and PhDs actually narrow corpora, not toy tag clouds.",
      "Abstract-first reading patterns with performance tuned for large result sets and slow networks.",
      "Paper-aware chat flows that reduce generic answers by grounding prompts in selected article content.",
      "Extensible ranking and export hooks for institutions integrating with reference managers later.",
    ],
    techStack: ["Next.js", "Scholarly metadata index", "LLM summarization", "RAG / grounded chat", "Pagination and caching", "Citation-safe prompting"],
    role: "Search engineering and AI features for research products",
  },
  {
    id: "dawat-ul-aman",
    title: "Dawat-ul-Aman",
    category: "Non-profit / Community",
    year: "2024",
    industry: "Non-profit, Faith-based community and welfare",
    liveUrl: "https://dawat-ul-aman.vercel.app",
    summary:
      "Dawat-ul-Aman is a non-profit web platform aligned with Dawat-e-Islami mission work: services, FAQs, galleries, testimonials, maps, and donation-adjacent storytelling. We structured information architecture for global audiences and admin-managed updates at organizational scale.",
    challenge:
      "Large informational surfaces fail when navigation is shallow and content rot sets in. The organization needed trust layers, department clarity, and SEO without compromising respectful tone.",
    solution:
      "We engineered structured sections, About, Services across Finery/Society/Extensions, FAQs, Testimonials, Gallery, Contact with maps, and admin workflows for ongoing updates. Donation-related operations are integrated responsibly with clear content governance.",
    highlights: [
      "Global mission narrative with department alignment so remote chapters see themselves represented accurately.",
      "Service pages tied to welfare and digital outreach programs with consistent CTAs and contact paths.",
      "FAQ and testimonial layers that build trust before users commit time or funds to engagement.",
      "SEO-oriented publishing patterns so community content surfaces in search without technical debt.",
    ],
    techStack: ["Next.js", "Content sections / CMS", "Maps integration", "Image galleries", "SEO structure", "Admin update workflows"],
    role: "Non-profit web platform and content architecture",
  },
  {
    id: "teds-woodworking",
    title: "Ted's Woodworking",
    category: "Brand / Marketing",
    year: "2024",
    industry: "SMB retail, Custom woodworking and furniture",
    summary:
      "Ted’s Woodworking is a brand marketing site for bespoke furniture craftsmanship: services, social proof, and visual storytelling that justify premium pricing. We translated workshop quality into a digital experience that feels as intentional as the physical product.",
    challenge:
      "Custom makers lose leads when sites look templated or when portfolios fail on mobile. The brand needed hero clarity, service structure, and conversion paths for high-ticket inquiries.",
    solution:
      "We delivered responsive HTML/CSS/JS with a strong hero CTA, structured service sections, testimonial proof, an image carousel of completed work, and intuitive navigation that guides visitors from inspiration to contact without friction.",
    highlights: [
      "Mobile-first layouts that showcase joinery and finish detail on small screens, where many buyers browse first.",
      "Project carousel mechanics that scale as the shop adds commissions without redeploying the whole gallery.",
      "Service taxonomy that mirrors how clients request quotes: kitchens, builtins, restoration, and custom pieces.",
      "CTA hierarchy that nudges consultation booking without cheapening a luxury positioning.",
    ],
    techStack: ["Semantic HTML", "CSS layout systems", "Vanilla JS interactions", "Image optimization", "Contact funnel", "Performance budgets"],
    role: "Frontend marketing site for premium SMB brands",
  },
  {
    id: "voiceflux",
    title: "VoiceFlux",
    category: "AI / Media",
    year: "2024",
    industry: "Media, AI dubbing, voice and TTS",
    summary:
      "VoiceFlux operates in the media AI vertical with registered-only access to GPU-heavy dubbing and TTS pipelines. We built guided user journeys, admin observability, and conversion tracking so creative teams can ship localized audio without ops chaos.",
    challenge:
      "AI audio is expensive; anonymous abuse burns margin fast. The product needed gated accounts, parameter clarity for tone and speed, and dashboards that show what ran, for whom, and at what cost envelope.",
    solution:
      "We engineered upload pipelines for video dubbing, parameterized TTS, user guides, contact surfaces, and admin dashboards over conversions and generations. The architecture separates preview, billing, and batch jobs so support can diagnose failures quickly.",
    highlights: [
      "Multi-language dubbing-style outputs with controls that producers understand, not raw model knobs.",
      "TTS parameterization for tone and speed suitable for marketing, education, and narrative use cases.",
      "Admin views on usage and failures that prevent silent quota burnout across shared GPU pools.",
      "Onboarding content that reduces misconfigured jobs that waste credits and generate bad audio.",
    ],
    techStack: ["GPU / AI audio APIs", "Auth and gating", "Job queue for media", "Next.js or web client", "Admin analytics", "Storage for temp assets"],
    role: "AI media product engineering and admin tooling",
  },
  {
    id: "smart-transform",
    title: "Smart Transform",
    category: "AI / Creative suite",
    year: "2024",
    industry: "SaaS, Multimodal generative AI suite",
    summary:
      "Smart Transform is a unified creative suite spanning text-to-video, text-to-image, text-to-voice, voice-to-text, and image-to-text with admin analytics. We packaged multiple modality endpoints behind one product identity so teams stop juggling five single-purpose tabs.",
    challenge:
      "Multimodal UIs become confusing fast: users lose track of which model ran, which credits burned, and where outputs live. Operators need aggregate visibility to tune pricing and capacity.",
    solution:
      "We implemented a Next.js and Tailwind client with a centralized admin dashboard for activity logs, statistics, and behavioral insights. Tool routes share consistent progress, error, and history patterns so the suite feels intentional, not a bundle of iframes.",
    highlights: [
      "Five conversion tools with shared session, billing, and history semantics for lower support overhead.",
      "Admin analytics on usage spikes that inform which modalities need rate limits or model upgrades.",
      "Workflow defaults that guide non-technical creators through safe prompts and file prep steps.",
      "Extensible routing to swap model vendors without rewriting the entire UI surface per modality.",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Multimodal AI APIs", "Admin analytics DB", "Job tracking", "Auth and quotas"],
    role: "Full-stack AI suite engineering and instrumentation",
  },
  {
    id: "glowart",
    title: "GlowArt",
    category: "CMS / Gallery",
    year: "2024",
    industry: "Arts and culture, Collection and catalog management",
    summary:
      "GlowArt is a collection management product for galleries and serious collectors handling paintings, sculpture, drawings, and frescoes. We built CRUD, search, statistics, and exports so curators stop maintaining parallel spreadsheets of provenance and dimensions.",
    challenge:
      "Art metadata is rich and irregular; weak tooling forces staff into Excel hell. The client needed typed records, fast lookup, and reporting by medium and artist without hiring a data team.",
    solution:
      "We built artwork CRUD with attribution, dimensions, medium, author, filters, detail views, Excel export, and aggregate statistics. Search is tuned for partial names and inventory codes common in gallery operations.",
    highlights: [
      "Typed artwork records with fields that match how appraisers and registrars actually document pieces.",
      "Search and filter combinations that remain fast as collections grow into thousands of objects.",
      "Excel exports that slot into insurance, loan, and exhibition paperwork workflows without retyping.",
      "Collection statistics by type and totals that help boards understand acquisition strategy quickly.",
    ],
    techStack: ["Web application", "Relational or document DB", "Full-text search", "Excel export library", "RBAC for staff", "Image asset handling"],
    role: "Vertical SaaS engineering for arts institutions",
  },
  {
    id: "rentory",
    title: "Rentory",
    category: "PropTech / SaaS",
    year: "2024",
    industry: "PropTech, Residential leasing marketplace",
    summary:
      "Rentory is a two-sided PropTech platform for house rentals with packages, Stripe activation, requests, secure payments, chat, and maintenance updates. We built marketplace trust: money flows, fees, notifications, and real-time coordination between owners and tenants.",
    challenge:
      "Rental products fail when payment ambiguity, scam listings, and broken communication dominate reviews. The client needed explicit package economics, deduplicated threads, and maintenance audit trails.",
    solution:
      "We implemented listings with rich specs, free and paid packages via Stripe, rental requests, secure payments with platform fee logic, notifications, chat, approvals, and maintenance tracking. State machines keep both parties aligned on who owes what and when.",
    highlights: [
      "Package-based listing activation that aligns monetization with listing quality and fraud deterrence.",
      "Real-time notifications and messaging that reduce double-booking and “I never got the message” disputes.",
      "End-to-end rental lifecycle from inquiry through payment and handoff with explicit statuses.",
      "Maintenance update channels that create timestamped records for landlords and property managers.",
    ],
    techStack: ["Stripe Billing / Connect patterns", "Realtime messaging", "Web + mobile-responsive UI", "Notification service", "PostgreSQL / Prisma-ready model", "Admin dispute tools"],
    role: "Marketplace engineering for residential rentals",
  },
  {
    id: "tripvista",
    title: "TripVista",
    category: "Content / Travel",
    year: "2024",
    industry: "Travel media, Publishing and UGC community",
    summary:
      "TripVista blends editorial travel content with community uploads, comments, search, subscriptions, and moderation, a travel media vertical play. We built responsive reading experiences, cloud media, and admin controls so editors retain quality as UGC scales.",
    challenge:
      "Pure blogs feel stale; pure UGC feels unsafe. The product needed premium subscription value, social sharing, and mobile performance for photo-heavy galleries.",
    solution:
      "We shipped blogs, galleries, cloud-backed media, social sharing hooks, search, subscription tiers, and admin profile/content moderation. Performance budgets keep LCP acceptable on tourist photography.",
    highlights: [
      "Editorial focus on cultural and sustainable travel with templates that scale for series and guides.",
      "User reviews and uploads with moderation queues so spam does not poison community trust.",
      "Premium subscription feature packaging that is enforceable server-side, not cosmetic badges only.",
      "Admin tooling for featured content, takedowns, and contributor verification at operational speed.",
    ],
    techStack: ["Content CMS", "Cloud media CDN", "Comment and UGC system", "Search index", "Subscription gating", "Admin moderation"],
    role: "Content platform engineering for travel media",
  },
  {
    id: "prestige-pass",
    title: "Prestige Pass",
    category: "Gaming / Engagement",
    year: "2024",
    industry: "Gaming, Live-ops monetization and progression UI",
    summary:
      "Prestige Pass is a gaming industry engagement surface: tiered progression, prestige points, premium pass upsell, and booster-themed mechanics. We built HTML/CSS/JS UI that communicates complex rules without overwhelming first-time players.",
    challenge:
      "Progression systems confuse users when states, locks, and currencies are inconsistent. Monetization UI must feel fair and legible or it triggers churn and chargebacks in live-ops contexts.",
    solution:
      "We built a six-tier ladder with progress bars, point economics, locked/unlocked states, and a €6 premium pass for accelerated benefits. Visual hierarchy mirrors how product managers spec live-ops calendars.",
    highlights: [
      "Clear tier ladder with locked states and prerequisites that reduce “why can’t I advance?” tickets.",
      "Points communication per pixel/week/month so players understand earning rates without spreadsheets.",
      "Premium pass upsell framed as acceleration, not pay-to-win walling, with transparent benefit lists.",
      "Component structure ready for embedding in larger game clients or web companion apps.",
    ],
    techStack: ["Semantic HTML", "CSS animations", "Vanilla JS state", "A11y-friendly contrast", "Localization hooks", "Analytics event hooks"],
    role: "Frontend game UI and live-ops presentation layer",
  },
  {
    id: "mobilemart365",
    title: "MobileMart365",
    category: "E‑commerce / SaaS",
    year: "2025",
    industry: "Retail, Mobile-first consumer commerce",
    liveUrl: "https://mobilemart365.vercel.app",
    summary:
      "MobileMart365 is a full-stack retail commerce platform optimized for mobile shoppers: OAuth, S3-backed assets, rich admin CRUD, blogs, promos, dual payment gateways, and analytics. We delivered separation between storefront and operations so catalog teams can move at daily velocity without breaking checkout.",
    challenge:
      "Mobile admin and catalog tooling often collapses under real SKUs, images, and order volume. The client needed secure auth, rate limiting, destructive-action confirmations, and payment redundancy across PayPal and Stripe.",
    solution:
      "We engineered Node/Express/TypeScript with Prisma and PostgreSQL, JWT plus Passport OAuth, S3 images, Next.js 16 with React 19 and Tailwind 4, TipTap blogs, Recharts analytics, Nodemailer, Helmet, and hardened API routes. Admin tables scroll responsively; confirmations protect irreversible ops.",
    highlights: [
      "Strict multi-role separation between shoppers and administrators with least-privilege patterns.",
      "Full admin CRUD across products, categories, orders, reviews, promos, blog, and contacts, mirroring real retail ops.",
      "Responsive admin data grids that remain usable on phones during warehouse or pop-up selling contexts.",
      "S3-backed media pipeline with transactional integrity around uploads, deletes, and order confirmation emails.",
    ],
    techStack: ["Next.js 16", "React 19", "Node.js / Express", "Prisma ORM", "PostgreSQL", "AWS S3", "Stripe and PayPal"],
    role: "End-to-end e-commerce platform engineering",
  },
];
