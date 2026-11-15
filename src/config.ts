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
    bullets: ["Joining UIUC's hypersonics research center in January 2027."],
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
      'Building Python models of a Piper PA-28 blown wing using blade-element momentum theory (BEMT).',
      'Simulating the propeller slipstream and the extra lift it creates, then using the results to look at thrust, power loading, and takeoff performance.',
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
      'Designing parts in Siemens NX for the rig that spin-casts fuel grains for our hybrid rocket, and making them with 3D printing.',
      'Running FEA on heat distribution, thermal gradients, and heat transfer during the casting process.',
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
      'Designed an eVTOL drone in SolidWorks with an emergency flotation system for water landings.',
      'Engineered a solenoid-triggered pneumatic flotation system with a burst diaphragm to control inflation. It deploys in under 8 seconds.',
      'Ran transient CFD in ANSYS Fluent to see how airflow and pressure behave as the floats inflate.',
      'Presented the project at a national symposium.',
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
      'Co-developed the first metrics for explaining quantum reinforcement-learning agents (XQRL), plus a framework that ties them together. The paper is on arXiv and submitted to IEEE Transactions on Quantum Engineering.',
      'Built hybrid quantum-classical simulation pipelines in Python with PennyLane, TensorFlow, and Qiskit.',
      'Used LIME, SHAP, and feature occlusion to explain Quantum Q-Learning and Q-DQN policies.',
    ],
    tags: ['Python', 'PennyLane', 'Qiskit', 'TensorFlow'],
    projects: ['xqrl'],
  },
  {
    role: 'Junior Research Intern',
    org: 'Technology Innovation Institute (TII)',
    start: 'Jul 2024',
    end: 'Aug 2024',
    location: 'Abu Dhabi, UAE',
    bullets: [
      "Youngest intern at the UAE's only government-funded quantum research facility, working on satellite quantum key distribution.",
      "Researched BB84 QKD receivers and designed a superconducting nanowire single-photon detector with lower dark-count rates for the Abu Dhabi Quantum Optical Ground Station.",
      'Looked into a new photon-absorption mechanism and modeled the detector components in SolidWorks.',
      'Presented the detector at a global tech expo.',
    ],
    tags: ['Quantum Optics', 'SolidWorks', 'QKD'],
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
      'Started a free research-mentorship program that paired 1,000+ high schoolers around the world with 200+ mentors from universities like Princeton and Penn.',
      'Students in the program have published 150+ research papers.',
    ],
  },
  {
    role: 'World Science Scholar (2024–25 cohort)',
    org: 'World Science Festival',
    start: 'Jun 2024',
    end: 'Jun 2025',
    location: 'New York, USA',
    bullets: [
      'One of 52 students picked worldwide for advanced courses and projects in theoretical physics, math, and computation, taught by scientists including Brian Greene, Stephen Wolfram, and Cumrun Vafa.',
    ],
  },
  {
    role: 'Problem Writer',
    org: 'Online Physics Olympiad (OPhO) 2025',
    href: 'https://opho.physoly.tech',
    start: '2025',
    location: 'Online',
    bullets: [
      'Wrote olympiad-level problems on quantum physics, relativity, and electromagnetism for a competition with 900+ participants, and graded 70 entries.',
    ],
  },
  {
    role: 'Co-Founder & President',
    org: 'Cosmic Society, Dubai International Academy',
    location: 'Dubai, UAE',
    bullets: [
      'Taught special relativity, quantum theory, and astrophysics to 60+ students in Grades 7–9.',
      "Ran events including NASA's International Astronomical Search Collaboration (IASC), expert panels, and competitions.",
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
};

export const awards: Award[] = [
  {
    rank: 'Top 50',
    context: 'of 508 teams worldwide',
    title: 'Beamline for Schools Competition',
    org: 'CERN',
    level: 'International',
    year: '2024–25',
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

// ── Skills ───────────────────────────────────────────────────
export const skills: { group: string; items: string[] }[] = [
  { group: 'CAD & Engineering Software', items: ['SolidWorks', 'Siemens NX', 'ANSYS Fluent', 'OpenRocket'] },
  { group: 'Design & Manufacturing', items: ['Engineering Drawings', '3D Printing', 'Assembly', 'GD&T', 'Balsa & Foam Fabrication'] },
  { group: 'Simulation & Analysis', items: ['FEA', 'CFD', 'Thermal Analysis', 'Aerodynamic Modeling', 'BEMT', 'Flight Simulation'] },
  { group: 'Programming & Tools', items: ['Python', 'NumPy', 'Matplotlib', 'C++', 'Java', 'PennyLane', 'TensorFlow', 'Qiskit', 'Arduino'] },
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

// "Beyond engineering" section on the About page (hidden if empty).
export const interests: { title: string; text: string }[] = [
  {
    title: 'Golf',
    text: "I've played since Grade 7 and was on my school's varsity team. Highlights: two junior tournament wins at DASSA, a UAE interschool title in 2023–24, and a 4.8 handicap. I also helped coach the newer players.",
  },
  {
    title: 'Guitar',
    text: 'I play guitar in my spare time.',
  },
  {
    title: 'Tutoring',
    text: 'Through Bachpan Bachao, I ran bi-weekly lessons in math, physics, digital literacy, and English for 30+ kids in India, and organized a book drive that collected 500+ books.',
  },
];
