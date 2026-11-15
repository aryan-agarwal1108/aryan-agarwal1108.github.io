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
    'I work where aerospace engineering meets physics: aircraft aerodynamics, rocket propulsion hardware, and quantum technology.',
  description:
    'Aryan Agarwal: Aerospace Engineering & Physics student at UIUC. Projects, research, and experience.',
  status: {
    available: true,
    text: 'Open to Summer 2027 internships',
  },
  email: 'aryana13@illinois.edu',
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
    details: [
      'Thesis: Investigating the Effect of Varying Wavelengths of Light on Depolarization Due to Atmospheric Scattering',
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
  start: string;
  end: string;
  location?: string;
  bullets: string[];
  tags?: string[];
  projects?: string[];
};

export const experience: Experience[] = [
  {
    role: 'Undergraduate Researcher',
    org: 'Midwest Nice Aerospace Group',
    start: 'Aug 2026',
    end: 'Present',
    location: 'Urbana-Champaign, IL',
    bullets: [
      'Developed Python aerodynamic models of a Piper PA-28 blown wing using blade-element momentum theory (BEMT).',
      'Simulated propeller slipstream and lift augmentation, analyzing thrust, power loading, and takeoff performance.',
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
      'Designed mechanical components in Siemens NX and fabricated them using 3D printing for a hybrid-propulsion rocket fuel-grain spin-casting apparatus.',
      'Conducted Finite Element Analysis to analyze heat distribution, thermal gradients, and heat transfer during the spin-casting process.',
    ],
    tags: ['Siemens NX', '3D Printing', 'FEA', 'Thermal Analysis'],
    projects: ['fuel-grain-spin-caster'],
  },
  {
    role: 'Visiting Researcher',
    org: 'New York University Abu Dhabi, CAIR Lab',
    start: 'Jan 2025',
    end: 'Nov 2025',
    location: 'Abu Dhabi, UAE',
    bullets: [
      'Designed an eVTOL UAV in SolidWorks, integrating aerodynamics and emergency water-landing buoyancy.',
      'Engineered solenoid-actuated pneumatic buoyancy with burst-diaphragm regulation for sub-8-second deployment.',
      'Simulated transient airflow and pressure distributions in ANSYS Fluent CFD to characterize inflation dynamics.',
    ],
    tags: ['SolidWorks', 'ANSYS Fluent', 'CFD', 'Pneumatics'],
    projects: ['evtol-water-landing'],
  },
  {
    role: 'Student Researcher',
    org: 'New York University Abu Dhabi, eBRAIN Lab',
    start: 'Aug 2025',
    end: 'Mar 2026',
    location: 'Abu Dhabi, UAE',
    bullets: [
      'Developed novel XQRL metrics and a unified framework for quantum reinforcement learning policy explainability.',
      'Built hybrid quantum-classical simulation pipelines using Python, PennyLane, TensorFlow, and Qiskit.',
      'Applied LIME, SHAP, and feature occlusion to explain Quantum Q-Learning and Q-DQN policies.',
    ],
    tags: ['Python', 'PennyLane', 'Qiskit', 'TensorFlow'],
    projects: ['xqrl'],
  },
  {
    role: 'Junior Research Intern',
    org: 'Technology Innovation Institute',
    start: 'Jul 2024',
    end: 'Aug 2024',
    location: 'Abu Dhabi, UAE',
    bullets: [
      "Selected as the youngest intern at UAE's only government-funded quantum research facility, contributing to satellite quantum key distribution.",
      'Researched BB84 QKD receivers and designed a Superconducting Nanowire Single Photon Detector with reduced dark-count rates.',
      'Investigated a novel photon absorption mechanism and utilized SolidWorks to CAD the design components.',
    ],
    tags: ['Quantum Optics', 'SolidWorks', 'QKD'],
    projects: ['snspd-qkd'],
  },
];

// ── Leadership & honors ──────────────────────────────────────
export const leadership: Experience[] = [
  {
    role: 'Founder & President',
    org: 'Erudios',
    href: 'https://erudios.vercel.app',
    start: 'Aug 2023',
    end: 'Sep 2026',
    location: 'Dubai, UAE',
    bullets: [
      'Founded an organization that partnered with 200+ undergraduate and graduate students at top universities to mentor 1,000+ high school students globally in research projects.',
      'Led student research initiatives resulting in the publication of 150+ academic papers.',
    ],
  },
  {
    role: 'World Science Scholar',
    org: 'World Science Festival',
    start: 'Jun 2024',
    end: 'Jun 2025',
    location: 'New York, USA',
    bullets: [
      'Selected 1 of 52 globally for advanced training in theoretical physics, mathematics, and computational science, with research mentorship from Nobel laureates and leading scientists.',
    ],
  },
];

// ── Skills ───────────────────────────────────────────────────
export const skills: { group: string; items: string[] }[] = [
  { group: 'CAD & Engineering Software', items: ['SolidWorks', 'Siemens NX', 'ANSYS Fluent'] },
  { group: 'Design & Manufacturing', items: ['Engineering Drawings', '3D Printing', 'Assembly', 'GD&T'] },
  { group: 'Simulation & Analysis', items: ['FEA', 'CFD', 'Thermal Analysis', 'Aerodynamic Modeling', 'BEMT'] },
  { group: 'Programming & Tools', items: ['Python', 'C++', 'Java', 'PennyLane', 'TensorFlow', 'Qiskit', 'Arduino'] },
];

// ── Personal (About page) ────────────────────────────────────
// Highlights shown as big numbers on the About page. All are from the resume.
export const highlights: { value: string; label: string }[] = [
  { value: '1 of 52', label: 'World Science Scholars selected globally' },
  { value: '1,000+', label: 'High schoolers mentored through Erudios' },
  { value: '150+', label: 'Student research papers published' },
  { value: '40/45', label: 'IB Diploma score' },
];

// "Currently" list on the About page. Keep it short and update it often.
export const now: string[] = [
  'First year at UIUC, studying Aerospace Engineering & Physics',
  'Modeling blown-wing aerodynamics with Midwest Nice Aerospace Group',
  'Building rocket fuel-grain manufacturing hardware with the ISS Hybrid team',
];

// Optional "Beyond engineering" section on the About page.
// It stays hidden until you add at least one item, e.g.
//   { title: 'Photography', text: 'I shoot film around campus.' }
export const interests: { title: string; text: string }[] = [];
