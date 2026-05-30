/* ============================================================================
   Iga Kowalczuk — personal site
   SINGLE SOURCE OF TRUTH for all text + the handful of placeholders to fill in.

   ── PLACEHOLDERS TO REPLACE BEFORE LAUNCH ──────────────────────────────────
   Everything in CONFIG below is a guess or a placeholder. Edit these and the
   whole site updates. Search the codebase for "PLACEHOLDER" to find anything
   else that needs a real value.
   ========================================================================== */

const CONFIG = {
  // The booking link behind EVERY button. Confirmed from the brief.
  calendly: "https://calendly.com/igakowalczuk/30min",

  // PLACEHOLDER — confirm the exact LinkedIn URL.
  linkedin: "https://www.linkedin.com/in/igakowalczuk/",

  // PLACEHOLDER — this is the address from the workshop setup; swap for a
  // public contact address if you'd rather not expose your personal Gmail.
  email: "igakowalczuk@gmail.com",

  // PLACEHOLDER — the CV file does not exist yet. Drop a real PDF at
  // site/Iga_Kowalczuk_CV.pdf (a clearly-labelled placeholder PDF is there now).
  cvPath: "/Iga_Kowalczuk_CV.pdf",

  // PLACEHOLDER — final domain. Used for canonical + OpenGraph + hreflang URLs.
  // Update this to your real domain once you know it (e.g. your Vercel URL).
  siteUrl: "https://igakowalczuk.com",
};

/* German uses the informal "du" throughout (Berlin AI-startup culture).
   To switch to formal "Sie", it's a find/replace inside the `de` block only. */

const I18N = {
  en: {
    /* ---- shared chrome ---- */
    nav_work: "Work with me",
    nav_profile: "Profile",
    skip_link: "Skip to content",

    /* ---- home: meta ---- */
    home_title: "Iga Kowalczuk — Freelance Senior AI Product / UX Designer, Berlin",
    home_desc:
      "Senior product and UX design for AI teams in Berlin. I turn powerful-but-technical AI products into structured, learnable experiences that users adopt — and that investors can read in the numbers. Senior Product Designer · UX Strategist · AI Solutions Designer.",

    /* ---- home: hero ---- */
    hero_h1: "You built something powerful. I make it simple enough to win.",
    hero_sub:
      "Senior product and UX design for AI teams, at the moment “it works” stops being enough.",
    hero_cta: "Book an intro call",

    /* ---- home: the stakes ---- */
    stakes_body:
      "A strong product can still lose to a simpler one. The difference is rarely the technology. It is whether a new user can find their way without you in the room. When the interface was built fast by engineers, the value is real but hidden, and every demo, every onboarding, every deal leans on you to explain it.",

    /* ---- home: what changes ---- */
    changes_title: "What changes when we work together",
    changes_1_title: "Users find their way alone.",
    changes_1_body:
      "The product stops needing a guided tour. Onboarding gets shorter and cheaper.",
    changes_2_title: "Sales stops narrating.",
    changes_2_body:
      "The value is visible on screen, so demos convert without senior hand-holding.",
    changes_3_title: "The numbers move.",
    changes_3_body:
      "Activation and retention improve, which is exactly what the next round is underwritten on.",

    /* ---- home: how I work ---- */
    how_title: "How I work",
    how_body:
      "I start with research, not screens. I interview your engineers and users to understand the real workflow, then rebuild the structure and the critical flows around how people actually think. A different approach to design thinking, done by a senior person who does the work, not just directs it. When you later hire a permanent designer, they inherit something solid instead of a blank page.",

    /* ---- home + profile: proof / testimonials (DRAFT — see HTML comments) ---- */
    proof_title: "Proof",
    proof_note: "Anonymised, grounded in real engagements.",
    t1_quote:
      "Our product was built by engineers and it showed. Iga reshaped the review flow around how our requirement engineers actually think, and within weeks the interface stopped needing a tour.",
    t1_attr:
      "Founder, requirements-management AI for the automotive industry",
    t2_quote:
      "Iga turned a deeply technical pipeline into a workbench our consultants understood immediately. The time saving was finally visible to stakeholders instead of buried in the backend.",
    t2_attr:
      "Co-founder, AI document-intelligence for regulated industries",
    t3_quote:
      "She made an AI optimisation tool tangible enough that senior stakeholders bought in. The prototype did the convincing.",
    t3_attr: "Project lead, enterprise AI (trading/optimisation)",

    /* ---- home: investors block ---- */
    investors_title: "For investors and referrers",
    investors_body:
      "Introduced by someone in my network? The short version: I help AI teams turn a strong build into a product users adopt and investors can underwrite. Happy to talk, no pitch.",

    /* ---- home: close ---- */
    close_body:
      "Tell me where your product is right now. A short call, no pitch. You will leave with at least one useful observation either way.",
    close_cta: "Book an intro call",

    /* ---- shared footer ---- */
    footer_name: "Iga Kowalczuk · Berlin",
    footer_linkedin: "LinkedIn",
    footer_email: "Email",
    footer_recruiters: "For recruiters → Profile",

    /* ---- profile: meta ---- */
    profile_title:
      "Iga Kowalczuk — Profile · Freelance Senior AI Product / UX Designer, Berlin",
    profile_desc:
      "Freelance Senior AI Product / UX Designer in Berlin. Available now, ~3 days/week, remote-first. Discovery & research, interaction & UI, AI/HCAI, design systems. ex–Aleph Alpha, ex–BCG X, ex–Airteam. Senior Product Designer · UX Strategist · AI Solutions Designer · KI/UX Designer (freiberuflich).",

    /* ---- profile: header ---- */
    profile_role:
      "Freelance Senior AI Product / UX Designer",
    profile_location:
      "Berlin · remote and hybrid · available for freelance / contract engagements.",
    profile_aliases:
      "Senior Product Designer · UX Strategist · AI Solutions Designer · KI/UX Designer (freiberuflich)",

    /* ---- profile: availability ---- */
    avail_title: "Availability and engagement",
    avail_status:
      "Status: available now · capacity ~3 days/week · remote-first, onsite in Berlin/DACH on request · project-based or retainer.",
    avail_rate_label: "Day rate",
    avail_rate_value: "on request",

    /* ---- profile: skills matrix ---- */
    skills_title: "Skills",
    skills_discovery_label: "Discovery & research",
    skills_discovery_body:
      "Stakeholder and user interviews, contextual inquiry, JTBD, process mapping, problem scoring, synthesis.",
    skills_strategy_label: "Strategy",
    skills_strategy_body:
      "Product vision, prioritisation (impact/effort, decision matrix), roadmap shaping, scoping, DVF.",
    skills_interaction_label: "Interaction & UI",
    skills_interaction_body:
      "User flows, information architecture, rapid prototyping, hi-fi design, heuristic evaluation, usability.",
    skills_ai_label: "AI / HCAI",
    skills_ai_body:
      "Human-in-the-loop strategy, AI-workflow UX, explainability patterns, EU AI Act and accessibility, agentic-workflow interfaces.",
    skills_systems_label: "Design systems",
    skills_systems_body:
      "Component libraries, design-system governance, reusable AI-solution patterns.",
    skills_tools_label: "Tools",
    skills_tools_body: "Figma, Figma Make, Miro, Lovable, ChatGPT, Perplexity.",
    skills_domains_label: "Domains",
    skills_domains_body:
      "Automotive, industrial / engineering data, public sector, legal tech, retail, finance.",
    skills_languages_label: "Languages",
    skills_languages_body: "German, English, Polish.",

    /* ---- profile: proof credentials ---- */
    credentials: "ex–Aleph Alpha · ex–BCG X · ex–Airteam",
    references: "References available on request.",

    /* ---- profile: forward kit ---- */
    forward_title: "Forward kit",
    cta_cv: "Download CV (PDF)",
    cta_linkedin: "LinkedIn",
    cta_email: "Copy email",
    cta_email_done: "Copied ✓",
    cta_book: "Book an intro call",
    back_home: "← Home",
  },

  de: {
    /* ---- shared chrome ---- */
    nav_work: "Mit mir arbeiten",
    nav_profile: "Profil",
    skip_link: "Zum Inhalt springen",

    /* ---- home: meta ---- */
    home_title: "Iga Kowalczuk — Freiberufliche Senior AI Produkt- / UX-Designerin, Berlin",
    home_desc:
      "Senior Produkt- und UX-Design für AI-Teams in Berlin. Ich verwandle starke, aber technische AI-Produkte in strukturierte, erlernbare Erlebnisse, die Nutzer annehmen — und die Investoren in den Zahlen lesen können. Senior Product Designer · UX Strategist · AI Solutions Designer.",

    /* ---- home: hero ---- */
    hero_h1: "Du hast etwas Starkes gebaut. Ich mache es einfach genug, um zu überzeugen.",
    hero_sub:
      "Senior Produkt- und UX-Design für AI-Teams – genau dann, wenn „es funktioniert“ nicht mehr reicht.",
    hero_cta: "Kennenlern-Call buchen",

    /* ---- home: the stakes ---- */
    stakes_body:
      "Auch ein starkes Produkt kann gegen ein einfacheres verlieren. Der Unterschied ist selten die Technologie, sondern ob sich neue Nutzer ohne dich zurechtfinden. Wenn das Interface schnell von Engineers gebaut wurde, ist der Wert echt, aber verborgen – und jede Demo, jedes Onboarding, jeder Deal hängt daran, dass du es erklärst.",

    /* ---- home: what changes ---- */
    changes_title: "Was sich ändert, wenn wir zusammenarbeiten",
    changes_1_title: "Nutzer finden sich allein zurecht.",
    changes_1_body:
      "Das Produkt braucht keine Führung mehr. Onboarding wird kürzer und günstiger.",
    changes_2_title: "Sales muss nicht mehr erklären.",
    changes_2_body:
      "Der Wert ist auf dem Bildschirm sichtbar, Demos überzeugen ohne Senior-Begleitung.",
    changes_3_title: "Die Zahlen bewegen sich.",
    changes_3_body:
      "Aktivierung und Retention steigen – genau das, worauf die nächste Runde aufbaut.",

    /* ---- home: how I work ---- */
    how_title: "Wie ich arbeite",
    how_body:
      "Ich beginne mit Research, nicht mit Screens. Ich interviewe deine Engineers und Nutzer, um den echten Workflow zu verstehen, und baue dann Struktur und die entscheidenden Flows so, wie Menschen tatsächlich denken. Ein anderer Ansatz im Design-Thinking – von einer Senior-Person, die die Arbeit macht, nicht nur anleitet. Wenn du später eine feste Designerin einstellst, erbt sie ein solides Fundament statt einer leeren Seite.",

    /* ---- home + profile: proof / testimonials (DRAFT) ---- */
    proof_title: "Referenzen",
    proof_note: "Anonymisiert, basierend auf echten Projekten.",
    t1_quote:
      "Unser Produkt war von Engineers gebaut, und das hat man gesehen. Iga hat den Review-Flow so umgebaut, wie unsere Requirements-Engineers wirklich denken – nach wenigen Wochen brauchte das Interface keine Erklärung mehr.",
    t1_attr:
      "Gründer, Requirements-Management-AI für die Automobilindustrie",
    t2_quote:
      "Iga hat aus einer hochtechnischen Pipeline einen Workbench gemacht, den unsere Consultants sofort verstanden haben. Die Zeitersparnis war endlich für Stakeholder sichtbar statt im Backend versteckt.",
    t2_attr:
      "Mitgründer, AI-Dokumentenintelligenz für regulierte Branchen",
    t3_quote:
      "Sie hat ein AI-Optimierungstool so greifbar gemacht, dass Senior-Stakeholder überzeugt waren. Der Prototyp hat die Arbeit gemacht.",
    t3_attr: "Projektleitung, Enterprise-AI (Trading/Optimierung)",

    /* ---- home: investors block ---- */
    investors_title: "Für Investoren und Vermittler",
    investors_body:
      "Über jemanden in meinem Netzwerk hierhergekommen? Kurzfassung: Ich helfe AI-Teams, aus einem starken Build ein Produkt zu machen, das Nutzer annehmen und Investoren überzeugt. Gerne ein Gespräch, kein Pitch.",

    /* ---- home: close ---- */
    close_body:
      "Erzähl mir, wo dein Produkt gerade steht. Ein kurzes Gespräch, kein Pitch. Du gehst mit mindestens einer nützlichen Beobachtung raus – so oder so.",
    close_cta: "Kennenlern-Call buchen",

    /* ---- shared footer ---- */
    footer_name: "Iga Kowalczuk · Berlin",
    footer_linkedin: "LinkedIn",
    footer_email: "E-Mail",
    footer_recruiters: "Für Recruiter → Profil",

    /* ---- profile: meta ---- */
    profile_title:
      "Iga Kowalczuk — Profil · Freiberufliche Senior AI Produkt- / UX-Designerin, Berlin",
    profile_desc:
      "Freiberufliche Senior AI Produkt- / UX-Designerin in Berlin. Sofort verfügbar, ~3 Tage/Woche, remote-first. Discovery & Research, Interaction & UI, AI/HCAI, Design Systems. ex–Aleph Alpha, ex–BCG X, ex–Airteam. Senior Product Designer · UX Strategist · AI Solutions Designer · KI/UX Designer (freiberuflich).",

    /* ---- profile: header ---- */
    profile_role: "Freiberufliche Senior AI Produkt- / UX-Designerin",
    profile_location:
      "Berlin · remote und hybrid · verfügbar für freiberufliche / Contract-Engagements.",
    profile_aliases:
      "Senior Product Designer · UX Strategist · AI Solutions Designer · KI/UX Designer (freiberuflich)",

    /* ---- profile: availability ---- */
    avail_title: "Verfügbarkeit und Zusammenarbeit",
    avail_status:
      "Status: sofort verfügbar · Kapazität ~3 Tage/Woche · remote-first, vor Ort in Berlin/DACH auf Anfrage · projektbasiert oder als Retainer.",
    avail_rate_label: "Tagessatz",
    avail_rate_value: "auf Anfrage",

    /* ---- profile: skills matrix ---- */
    skills_title: "Skills",
    skills_discovery_label: "Discovery & Research",
    skills_discovery_body:
      "Stakeholder- und Nutzer-Interviews, Contextual Inquiry, JTBD, Process Mapping, Problem Scoring, Synthese.",
    skills_strategy_label: "Strategie",
    skills_strategy_body:
      "Produktvision, Priorisierung (Impact/Effort, Entscheidungsmatrix), Roadmap-Gestaltung, Scoping, DVF.",
    skills_interaction_label: "Interaction & UI",
    skills_interaction_body:
      "User Flows, Informationsarchitektur, Rapid Prototyping, Hi-Fi-Design, Heuristische Evaluation, Usability.",
    skills_ai_label: "AI / HCAI",
    skills_ai_body:
      "Human-in-the-Loop-Strategie, AI-Workflow-UX, Explainability-Patterns, EU AI Act und Barrierefreiheit, Agentic-Workflow-Interfaces.",
    skills_systems_label: "Design Systems",
    skills_systems_body:
      "Komponentenbibliotheken, Design-System-Governance, wiederverwendbare AI-Solution-Patterns.",
    skills_tools_label: "Tools",
    skills_tools_body: "Figma, Figma Make, Miro, Lovable, ChatGPT, Perplexity.",
    skills_domains_label: "Branchen",
    skills_domains_body:
      "Automotive, Industrie / Engineering-Daten, öffentlicher Sektor, Legal Tech, Retail, Finance.",
    skills_languages_label: "Sprachen",
    skills_languages_body: "Deutsch, Englisch, Polnisch.",

    /* ---- profile: proof credentials ---- */
    credentials: "ex–Aleph Alpha · ex–BCG X · ex–Airteam",
    references: "Referenzen auf Anfrage.",

    /* ---- profile: forward kit ---- */
    forward_title: "Forward-Kit",
    cta_cv: "CV herunterladen (PDF)",
    cta_linkedin: "LinkedIn",
    cta_email: "E-Mail kopieren",
    cta_email_done: "Kopiert ✓",
    cta_book: "Kennenlern-Call buchen",
    back_home: "← Startseite",
  },
};
