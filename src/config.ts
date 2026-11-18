// ─────────────────────────────────────────────────────────────
//  SITE CONFIG: edit this file to update the site.
//  Everything personal (name, links, experience, skills) lives here.
//  Projects live in src/content/projects/*.md (see _template.md)
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Aryan Agarwal',
  firstName: 'Aryan',
  initials: 'AA',
  title: 'Aerospace Engineering & Physics Student',
  school: 'University of Illinois Urbana-Champaign',
  schoolShort: 'UIUC',
  major: 'Aerospace Engineering & Physics',
  degree: 'B.S. Aerospace Engineering & B.S. Physics (Dual Degree)',
  gradYear: '2030',
  location: 'Urbana-Champaign, IL',
  previously: 'Dubai, UAE',
  tagline:
    "Most of what I work on comes back to space and flight. Right now that's blown-wing aerodynamics and hybrid rocket hardware, and in January I start hypersonics research.",
  description:
    'Aryan Agarwal studies Aerospace Engineering and Physics at UIUC. Projects, research, and resume.',
  status: {
    available: true,
    text: 'Open to Summer 2027 internships',
  },
  email: 'aryana13@illinois.edu',
  // Shown on the Contact page (obfuscated in the HTML so bots can't scrape them easily)
  contact: {
    personalEmail: 'aryan.exe@outlook.com',
    schoolEmail: 'aryana13@illinois.edu',
    phone: '+1 (217) 402-1220',
    phoneHref: '+12174021220',
    current: { city: 'Urbana, IL', country: 'USA' },
    home: { city: 'Dubai', country: 'UAE' },
  },
  resume: '/files/Aryan_Agarwal_Resume.pdf',
  links: {
    github: 'https://github.com/aryan-agarwal1108',
    linkedin: 'https://www.linkedin.com/in/aryan-agarwal1108',
  },
};

// ── Education ────────────────────────────────────────────────
export type Education = {
  school: string;
  location: string;
  degree: string;
  date: string;
  details?: string[];
  subjects?: string[]; // shown as tags on the About page
};

export const education: Education[] = [
  {
    school: 'University of Illinois Urbana-Champaign',
    location: 'Urbana-Champaign, IL',
    degree: 'B.S. Aerospace Engineering & B.S. Physics (Dual Degree)',
    date: 'Expected May 2030',
  },
  {
    school: 'Dubai International Academy Emirates Hills',
    location: 'Dubai, UAE',
    degree: 'International Baccalaureate Diploma Programme: 40/45',
    date: 'May 2026',
    subjects: ['Physics', 'Mathematics: Analysis & Approaches', 'Chemistry'],
    details: [
      'Research paper (Physics): Investigating the Effect of Atmospheric Temperature on Depolarization of Light Due to Atmospheric Scattering',
    ],
  },
];

// ── Experience ───────────────────────────────────────────────
// `projects` lists slugs of files in src/content/projects/ that came out of
// this role. One role can have several projects.
export type Experience = {
  role: string;
  org: string;
  href?: string;
  start?: string;
  end?: string;
  location?: string;
  // true = a role that hasn't started yet; shows an "Incoming" badge
  upcoming?: boolean;
  supervisor?: string;
  bullets: string[];
  tags?: string[];
  projects?: string[];
};

export const experience: Experience[] = [
  {
    role: 'Undergraduate Researcher',
    org: 'Center for Hypersonics and Entry Systems Studies (CHESS), UIUC',
    href: 'https://chess.grainger.illinois.edu/',
    start: 'Jan 2027',
    location: 'Urbana-Champaign, IL',
    upcoming: true,
    bullets: ['Incoming undergraduate researcher in hypersonics and atmospheric entry systems, starting January 2027.'],
    tags: ['Hypersonics', 'Entry Systems'],
  },
  {
    role: 'Undergraduate Researcher',
    org: 'Midwest Nice Aerospace Group',
    supervisor: 'Dr. Elle Wroblewski',
    start: 'Aug 2026',
    end: 'Present',
    location: 'Urbana-Champaign, IL',
    bullets: [
      'Developing Python aerodynamic models of a Piper PA-28 blown wing using blade-element momentum theory (BEMT).',
      'Simulating propeller slipstream effects and lift augmentation to evaluate thrust, power loading, and takeoff performance.',
    ],
    tags: ['Python', 'BEMT', 'Aerodynamic Modeling'],
    projects: ['pa28-blown-wing'],
  },
  {
    role: 'Manufacturing Engineer, Hybrid Team',
    org: 'Illinois Space Society',
    start: 'Aug 2026',
    end: 'Present',
    location: 'Urbana-Champaign, IL',
    bullets: [
      'Designing components in Siemens NX for a hybrid rocket fuel-grain spin-caster and fabricating them with 3D printing.',
      'Performing FEA of heat distribution, thermal gradients, and heat transfer during the fuel-grain casting process.',
    ],
    tags: ['Siemens NX', '3D Printing', 'FEA', 'Thermal Analysis'],
    projects: ['fuel-grain-spin-caster'],
  },
  {
    role: 'Visiting Researcher',
    org: 'NYU Abu Dhabi, CAIR Lab',
    start: 'Jan 2025',
    end: 'Nov 2025',
    location: 'Abu Dhabi, UAE',
    bullets: [
      'Designed an eVTOL drone in SolidWorks with an integrated emergency flotation system for water landings.',
      'Developed a rapid-deployment pneumatic buoyancy system with sub-8-second inflation using ambient-air intake and solenoid-controlled burst-diaphragm regulators.',
      'Ran transient CFD simulations in ANSYS Fluent to validate airflow and pressure behavior during float inflation.',
      'Presented the system to the UAE government ahead of its exhibition at TECHSPO Dubai 2026.',
    ],
    tags: ['SolidWorks', 'ANSYS Fluent', 'CFD', 'Pneumatics'],
    projects: ['evtol-water-landing'],
  },
  {
    role: 'Student Researcher',
    org: 'NYU Abu Dhabi, eBRAIN Lab',
    start: 'Aug 2025',
    end: 'Mar 2026',
    location: 'Abu Dhabi, UAE',
    bullets: [
      'Co-developed the first explainability metrics for quantum reinforcement learning (XQRL), benchmarked on CartPole and MNIST across Quantum Q-Learning and Quantum Deep Q-Network agents.',
      'Enhanced the interpretability of prior XQRL models using LIME, SHAP, and feature occlusion.',
      'Built hybrid quantum-classical simulation pipelines in Python (PennyLane, TensorFlow, Qiskit) and optimized parameterized quantum gates for near-term hardware.',
      'Co-authored "ClearQRL: A Unified Interpretability and Explainability Framework for Quantum RL."',
    ],
    tags: ['Python', 'PennyLane', 'Qiskit', 'TensorFlow', 'Explainable AI'],
    projects: ['xqrl'],
  },
  {
    role: 'Junior Research Intern',
    org: 'Technology Innovation Institute (TII)',
    start: 'Jul 2024',
    end: 'Aug 2024',
    location: 'Abu Dhabi, UAE',
    bullets: [
      "Contributed to satellite quantum key distribution research for the Abu Dhabi Quantum Optical Ground Station (ADQOGS) as the Quantum Research Center's youngest intern.",
      'Built a superconducting nanowire single-photon detector (SNSPD) setup, aligning optics with nanopositioners and automating control in Python on a Raspberry Pi.',
      'Designed and fabricated custom opto-mechanical interfaces in SolidWorks for detector–cryostat integration.',
      'Researched polarization-based QKD with a focus on BB84 receivers.',
    ],
    tags: ['Quantum Optics', 'SolidWorks', 'QKD', 'Python', 'Raspberry Pi'],
    projects: ['snspd-qkd'],
  },
];

// ── Leadership & activities ──────────────────────────────────
export const leadership: Experience[] = [
  {
    role: 'Founder & President',
    org: 'Erudios',
    href: 'https://erudios.vercel.app',
    start: 'Aug 2023',
    end: 'Sep 2026',
    location: 'Dubai, UAE',
    bullets: [
      'Founded a free global research-mentorship program connecting 1,000+ high school students with 200+ mentors from universities including Princeton and Penn.',
      'Supported program participants in publishing 150+ research papers.',
      'Organized annual global research competitions with 450+ participants and $500 in prizes, judged by faculty and students from Cambridge, Carnegie Mellon, and Cornell.',
    ],
  },
  {
    role: 'World Science Scholar (2024–25 cohort)',
    org: 'World Science Festival',
    start: 'Jun 2024',
    end: 'Jun 2025',
    location: 'New York, USA',
    bullets: [
      'Selected as one of 52 students worldwide for advanced coursework and projects in theoretical physics, mathematics, and computation.',
      'Studied under scientists including Brian Greene, Stephen Wolfram, and Cumrun Vafa.',
      'Admitted through an international nomination and application process to a program funded by the John Templeton Foundation.',
    ],
  },
  {
    role: 'Problem Writer',
    org: 'Online Physics Olympiad (OPhO) 2025',
    href: 'https://opho.physoly.org',
    start: '2025',
    location: 'Online',
    bullets: [
      'Wrote olympiad-level problems in quantum physics, relativity, and electromagnetism for an international competition with 900+ participants.',
      'Graded 70 competitor submissions.',
      'Collaborated with a problem-writing team of IPhO and EuPhO medalists and physics students from MIT and Oxford.',
      'Contributed to a student-run olympiad that has drawn 10,000+ competitors from 80+ countries since 2020, sponsored by Jane Street, Citadel, and Wolfram.',
    ],
  },
  {
    role: 'Co-Founder & President',
    org: 'Cosmic Society, Dubai International Academy',
    start: '2024',
    end: '2025',
    location: 'Dubai, UAE',
    bullets: [
      'Taught special relativity, quantum theory, and astrophysics to 60+ students in Grades 7–9.',
      "Organized events including NASA's International Astronomical Search Collaboration (IASC), expert panels, and competitions.",
    ],
  },
  {
    role: 'President of the General Assemblies',
    org: 'DIAMUN, Dubai International Academy Model UN',
    start: '2024',
    end: '2025',
    location: 'Dubai, UAE',
    bullets: [
      'Co-organized the largest THIMUN-affiliated Model UN conference in the MENA region, with 600+ delegates from 20+ schools across 10 countries and $100K in revenue.',
      'Presided over General Assembly sessions and oversaw all General Assembly committees in one of the conference’s top student leadership roles.',
    ],
  },
  {
    role: 'Lead Prefect, Student Leadership Team',
    org: 'Dubai International Academy',
    start: '2025',
    location: 'Dubai, UAE',
    bullets: [
      "Led and coordinated a team of 50+ prefects as part of the school's Student Leadership Team.",
      'Oversaw student well-being across the school, serving as a link between the student body and school leadership.',
      'Assigned and supervised prefect duties for school events and day-to-day operations.',
    ],
  },
];

// ── Awards & competitions ────────────────────────────────────
export type Award = {
  rank: string; // the big headline, e.g. "Top 50"
  context: string; // e.g. "of 1,000+ teams"
  title: string;
  org: string;
  level: 'International' | 'National' | 'School';
  year: string;
  detail?: string; // one line on what I did
  href?: string; // e.g. a report PDF
  hrefLabel?: string;
};

export const awards: Award[] = [
  {
    rank: 'Top 50',
    context: 'of 508 teams worldwide',
    title: 'Beamline for Schools Competition',
    org: 'CERN',
    level: 'International',
    year: '2024–25',
    detail: 'Proposed an experiment on CP violation in neutral kaon decays, with Monte Carlo simulations and a custom detector for semileptonic decays.',
    href: '/files/BL4S_Proposal_CP_Violation_in_Neutral_Kaons.pdf',
    hrefLabel: 'Read the proposal (PDF)',
  },
  {
    rank: 'Top 250',
    context: 'of 12,000+ globally · 2nd in UAE',
    title: 'International Astronomy & Astrophysics Competition',
    org: 'IAAC',
    level: 'International',
    year: '2024–26',
  },
  {
    rank: 'Top 500',
    context: 'of 4,000 globally · 5th in UAE',
    title: 'Sir Isaac Newton Exam',
    org: 'University of Waterloo',
    level: 'International',
    year: '2024–25',
  },
  {
    rank: '1st',
    context: 'Freshwater Conservation category',
    title: 'EEG 2024 Environmental Competition',
    org: 'Emirates Environmental Group',
    level: 'National',
    year: '2024',
    detail: 'Developed a neutralization-based method for making freshwater.',
  },
  {
    rank: '2nd',
    context: 'of 100+ competitors',
    title: 'Annual Math Competition',
    org: 'Emirates Aviation University',
    level: 'National',
    year: '2024–25',
  },
  {
    rank: 'Medal',
    context: 'Best in School',
    title: 'Canadian Senior & Intermediate Mathematics Contest',
    org: 'University of Waterloo',
    level: 'School',
    year: '2023–24',
  },
];

// Other recognition shown on the Awards page (from roles and projects above)
export const recognition: { what: string; detail: string; year: string; href?: string }[] = [
  { what: 'World Science Scholar', detail: 'One of 52 students picked worldwide (World Science Festival)', year: '2024–25', href: '/experience' },
  { what: 'Youngest quantum researcher at TII', detail: "Technology Innovation Institute, the UAE's government quantum research facility", year: '2024', href: '/projects/snspd-qkd' },
  { what: 'Presented to the UAE government', detail: 'eVTOL drone with emergency water-landing floats (NYU Abu Dhabi), slated for TECHSPO Dubai 2026', year: '2025', href: '/projects/evtol-water-landing' },
  { what: 'Co-authored a quantum ML paper', detail: 'ClearQRL: an explainability framework for quantum reinforcement learning (NYU Abu Dhabi)', year: '2025–26', href: '/papers/clearqrl' },
  { what: 'IB Diploma: 40/45', detail: 'Dubai International Academy Emirates Hills', year: '2026', href: '/about' },
];

// ── Papers ───────────────────────────────────────────────────
// Research papers shown on /papers. Put PDFs in public/files/ with clean filenames.
export type Paper = {
  slug: string; // URL: /papers/<slug>
  title: string;
  subject: string;
  year: string;
  authors?: string; // defaults to just me
  pages?: number;
  words?: string;
  abstract: string;
  findingsLabel?: string; // defaults to "Key findings"
  findings: string[];
  keywords: string[];
  pdf?: string; // leave out for a paper that's still being written
  status?: string; // e.g. "In progress"; shown as a badge
  pdfLabel?: string; // defaults to "Read the paper (PDF)"
  project?: string; // related project page
  figure?: string; // optional preview image
};

export const papers: Paper[] = [
  {
    slug: 'pa28-blown-wing',
    title: 'Modeling Propeller-Induced Lift Augmentation on a Piper PA-28 Blown Wing Using Blade-Element Momentum Theory',
    subject: 'Aerodynamics · Modeling',
    year: '2026–27',
    status: 'In progress',
    abstract:
      'A blown wing places propellers ahead of the wing so their slipstream accelerates the air over it, raising lift at low speeds. This paper models that effect on a Piper PA-28 with Python implementations of blade-element momentum theory (BEMT), predicting the slipstream velocity behind each propeller and the resulting lift increase on the wing sections it covers.',
    findingsLabel: 'Scope',
    findings: [
      'BEMT propeller model coupling blade-element lift and drag with momentum theory to solve for thrust and slipstream velocity.',
      'Slipstream-to-wing coupling to estimate lift augmentation on the blown sections of the wing.',
      'Evaluation of thrust, power loading, and takeoff performance with and without blowing.',
    ],
    keywords: ['Blown wing', 'BEMT', 'Propeller slipstream', 'Lift augmentation', 'Takeoff performance'],
    project: '/projects/pa28-blown-wing',
  },
  {
    slug: 'clearqrl',
    title: 'ClearQRL: A Unified Interpretability and Explainability Framework for Quantum RL',
    subject: 'Quantum Computing · Machine Learning',
    year: '2025–26',
    authors: 'Nouhaila Innan, Aryan Agarwal · eBRAIN Lab, NYU Abu Dhabi',
    abstract:
      'Quantum reinforcement learning is promising for sequential decision-making, but quantum policies are hard to interpret. ClearQRL combines classical feature-attribution methods, quantum information-theoretic diagnostics, and new quantum-aware interpretability metrics into one framework, evaluated on CartPole-v1 with a four-qubit quantum model and a classical Deep Q-Network baseline.',
    findingsLabel: 'What it contributes',
    findings: [
      'New quantum explainability metrics, including Quantum Attribution Score, Quantum Feature Alignment, Quantum Decision Purity, and Quantum State Diversity.',
      'A combined Quantum Interpretability Index (QII) that rolls them into one score for comparing policy transparency.',
      'Side-by-side analysis of feature importance, decision confidence, quantum-state sensitivity, and representational diversity for quantum and classical agents.',
    ],
    keywords: ['Quantum RL', 'Explainable AI', 'PennyLane', 'Quantum information', 'CartPole'],
    pdf: '/files/ClearQRL_Quantum_RL_Explainability_First_Page.pdf',
    pdfLabel: 'Read the first page (PDF)',
    project: '/projects/xqrl',
  },
  {
    slug: 'cern-bl4s-cp-violation',
    title: 'Investigating CP Violation in Neutral Kaon Decays as a Source of Matter-Antimatter Asymmetry',
    subject: 'Particle Physics · Proposal',
    year: '2024–25',
    authors: 'The Broken Symmetry Society (8 students, 6 countries), incl. Aryan Agarwal',
    pages: 8,
    abstract:
      "Our team's proposal for CERN's Beamline for Schools competition, which placed in the top 50 of 508 teams worldwide. It describes an experiment at the PS T9 beamline to measure the semileptonic charge asymmetry δₗ in long-lived neutral kaon decays, a direct signature of CP violation, using a charge-exchange kaon beam and a custom two-arm detector.",
    findingsLabel: 'Highlights',
    findings: [
      'Targets 10⁶–10⁷ semileptonic K_L decays for a statistical precision on δₗ of 0.1–0.2%, with electron and muon channels compared to test lepton universality.',
      'A dual Cherenkov-calorimeter detector module designed under a USD 2,000 budget, with GEANT4 simulations to optimize geometry and acceptance.',
      'Extensions to compare kaon and antikaon beams (a CPT test) and to probe quantum decoherence in K⁰–K̄⁰ oscillations, with analysis in ROOT.',
    ],
    keywords: ['CP violation', 'Neutral kaons', 'Detector design', 'GEANT4', 'ROOT'],
    pdf: '/files/BL4S_Proposal_CP_Violation_in_Neutral_Kaons.pdf',
    pdfLabel: 'Read the proposal (PDF)',
  },
  {
    slug: 'atmospheric-depolarization',
    title: 'Investigating the Effect of Atmospheric Temperature on Depolarization of Light due to Atmospheric Scattering',
    subject: 'Physics · Optics',
    year: '2025–26',
    pages: 25,
    words: '3,962',
    abstract:
      'How does atmospheric temperature change the degree of polarization (DoP) of rectilinearly polarized light as it undergoes Mie scattering? Using a milk–water suspension as a scattering analog for the atmosphere, a 636 nm source, crossed and parallel polarizers, and a light sensor, I measured DoP at five temperatures from 25 °C to 65 °C, with five trials each and full uncertainty propagation.',
    findings: [
      'DoP fell steadily from 0.984 ± 0.003 at 25 °C to 0.861 ± 0.005 at 65 °C, a 12.5% drop.',
      'The drop accelerated at higher temperatures, alongside visible convection and beam flicker.',
      'Results point to temperature as a factor worth modeling in free-space optical and polarization-based QKD links.',
    ],
    keywords: ['Mie scattering', 'Polarimetry', 'Degree of polarization', 'Free-space optics', 'QKD'],
    pdf: '/files/Aryan_Agarwal_Atmospheric_Depolarization_Paper.pdf',
    project: '/projects/atmospheric-depolarization',
    figure: '/images/ee-dop-vs-temperature.svg',
  },
  {
    slug: 'mhd-thruster',
    title: 'The Relationship Between Current Supplied to a Magnetohydrodynamic Thruster and Maximum Velocity of Saltwater Displaced',
    subject: 'Physics · Electromagnetism',
    year: '2025–26',
    pages: 24,
    words: '2,996',
    abstract:
      'A magnetohydrodynamic (MHD) thruster has no moving parts: current through saltwater in a magnetic field produces a Lorentz force that pushes the water. I varied the current supplied to a small MHD thruster and measured the maximum velocity of the displaced saltwater with video analysis, to test the relationship predicted from F = BIL.',
    findings: [
      'Average velocity rose from 0.0052 m/s at 0.20 A to 0.0154 m/s at 1.60 A.',
      'The fit v² = 0.0001471·I (negligible intercept) shows v² is proportional to current, matching the Lorentz-force prediction.',
      'Electrolysis bubbles, electrode corrosion, and changes in magnetic field strength were the main limits on accuracy.',
    ],
    keywords: ['MHD propulsion', 'Lorentz force', 'Video analysis', 'Logger Pro', 'Uncertainty analysis'],
    pdf: '/files/Aryan_Agarwal_Paper_MHD_Thruster.pdf',
  },
  {
    slug: 'apple-share-price-model',
    title: 'Developing a Mathematical Model to Predict the Optimal Share Price of Apple Stock Using Multivariable Statistics and Calculus',
    subject: 'Mathematics · Modeling',
    year: '2025–26',
    pages: 23,
    abstract:
      "Can a company's own financials tell you when to buy or sell its stock? I built a multiple-regression model of Apple's share price from EBITDA, dividend per share, and earnings per share, then used multivariable calculus to find the model's maxima and minima and read them as entry and exit points.",
    findings: [
      'The regression model fit the historical share price with R² = 0.975.',
      'Critical points of the multivariable model were interpreted as buy and sell signals.',
      'Best suited to mid- and long-term investing. It uses quarterly data and does not account for shocks like pandemics.',
    ],
    keywords: ['Multiple regression', 'Multivariable calculus', 'Optimization', 'Mathematica', 'Financial data'],
    pdf: '/files/Aryan_Agarwal_Paper_Apple_Share_Price_Model.pdf',
  },
  {
    slug: 'calcium-in-heated-milk',
    title: 'The Effect of Heating Temperature on Free Calcium Ion Concentration in Milk',
    subject: 'Chemistry · Analytical',
    year: '2025–26',
    pages: 15,
    abstract:
      'How does the temperature milk is heated to change how much free calcium (Ca²⁺) it contains? I heated milk to five temperatures from 25 °C to 65 °C and measured free Ca²⁺ by complexometric titration with EDTA and Eriochrome Black T indicator.',
    findings: [
      'Free Ca²⁺ concentration rose with temperature, most sharply between 25 °C and 45 °C, then plateaued.',
      'The trend fits heat breaking down casein micelles, which normally bind calcium, and matches visible curdling above 45 °C.',
      'Percentage error (5.72%) was within the total propagated uncertainty (6.87%), with a tight linear fit (RMSE 0.0001388).',
    ],
    keywords: ['Complexometric titration', 'EDTA', 'Food chemistry', 'Casein micelles', 'Uncertainty analysis'],
    pdf: '/files/Aryan_Agarwal_Paper_Calcium_in_Heated_Milk.pdf',
  },
];

// General skill areas offered in the Projects page "Skill" filter. Each one matches any project
// tagged with one of its `tags`. Projects still list the specific software on their own pages.
export const filterSkills: { key: string; label: string; tags: string[] }[] = [
  { key: 'cad', label: 'CAD', tags: ['SolidWorks', 'Siemens NX'] },
  { key: 'cfd-fea', label: 'CFD & FEA', tags: ['ANSYS Fluent', 'CFD', 'FEA', 'Thermal Analysis', 'Heat Transfer'] },
  { key: 'modeling', label: 'Simulation & Modeling', tags: ['BEMT', 'Aerodynamic Modeling', 'OpenRocket', 'Flight Simulation', 'Transient Simulation'] },
  { key: 'programming', label: 'Programming', tags: ['Python', 'NumPy', 'Matplotlib', 'Raspberry Pi'] },
  { key: 'data', label: 'Data Analysis', tags: ['Data Analysis', 'Flight Data Analysis', 'Uncertainty Analysis'] },
  { key: 'fabrication', label: 'Fabrication & Prototyping', tags: ['3D Printing', 'Balsa & Foam Fabrication', 'Epoxy Bonding', 'Prototyping'] },
  { key: 'lab', label: 'Experimental Physics', tags: ['Experimental Physics', 'Polarimetry', 'Quantum Optics', 'Nanopositioners', 'Cryogenics'] },
  { key: 'quantum-ml', label: 'Quantum Computing & ML', tags: ['Qiskit', 'PennyLane', 'Quantum Circuits', 'Quantum Machine Learning', 'Reinforcement Learning'] },
];

// ── Skills ───────────────────────────────────────────────────
export const skills: { group: string; items: string[] }[] = [
  { group: 'CAD & Engineering Software', items: ['SolidWorks', 'Siemens NX', 'ANSYS Fluent', 'OpenRocket'] },
  { group: 'Design & Manufacturing', items: ['Engineering Drawings', '3D Printing', 'Assembly', 'GD&T', 'Balsa & Foam Fabrication'] },
  { group: 'Simulation & Analysis', items: ['FEA', 'CFD', 'Thermal Analysis', 'Aerodynamic Modeling', 'BEMT', 'Flight Simulation'] },
  { group: 'Programming & Tools', items: ['Python', 'NumPy', 'Matplotlib', 'C++', 'Java', 'PennyLane', 'TensorFlow', 'Qiskit', 'Arduino'] },
  { group: 'Physics & Lab', items: ['Experimental Physics', 'Polarimetry', 'Mie Scattering', 'Quantum Optics', 'Photonics', 'Vernier LabQuest', 'Uncertainty Analysis'] },
  { group: 'Aerospace', items: ['Aircraft Design', 'Weight & Balance', 'Hybrid Propulsion', 'Model Rocketry', 'Propeller Slipstream Analysis', 'Takeoff Performance'] },
  { group: 'Languages', items: ['English (Native)', 'Hindi (Native)', 'Spanish (B1)', 'German (A2)', 'French (A2)', 'Arabic (A2)'] },
];

// ── Personal (About page) ────────────────────────────────────
// Highlights shown as big numbers on the About page. All are from the resume.
export const highlights: { value: string; label: string }[] = [
  { value: '1 of 52', label: 'World Science Scholars picked worldwide' },
  { value: '1,000+', label: 'High schoolers mentored through Erudios' },
  { value: '150+', label: 'Papers published by Erudios students' },
  { value: '40/45', label: 'IB Diploma' },
];

// "Currently" list on the About page. Keep it short and update it often.
export const now: string[] = [
  'First semester at UIUC',
  'Modeling a blown-wing PA-28 with the Midwest Nice Aerospace Group',
  'Designing spin-caster parts for the ISS Hybrid team',
  'Getting ready to start at CHESS in January',
];

// Languages (CEFR levels: A1–C2, or Native). Shown on the About page and in Skills.
export const languages: { name: string; level: string }[] = [
  { name: 'English', level: 'Native' },
  { name: 'Hindi', level: 'Native' },
  { name: 'Spanish', level: 'B1' },
  { name: 'German', level: 'A2' },
  { name: 'French', level: 'A2' },
  { name: 'Arabic', level: 'A2' },
];

// "Beyond engineering" section on the About page (hidden if empty, apart from Languages).
export const interests: { title: string; text: string }[] = [];
