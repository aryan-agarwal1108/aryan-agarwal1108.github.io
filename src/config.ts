// ─────────────────────────────────────────────────────────────
//  SITE CONFIG — edit this file to make the site yours.
//  Everything personal (name, links, experience, skills) lives here.
//  Projects live in src/content/projects/*.md
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Aryan Agarwal',
  initials: 'AA',
  title: 'Engineering Student',
  school: 'University of Illinois Urbana-Champaign',
  schoolShort: 'UIUC',
  major: 'Computer Engineering',
  gradYear: '2029',
  location: 'Champaign, IL',
  tagline: 'I design and build systems where hardware meets software — from embedded firmware to the tools that talk to it.',
  description:
    'Engineering portfolio of Aryan Agarwal — projects, experience, and resume.',
  status: {
    available: true,
    text: 'Seeking Summer 2027 internships',
  },
  email: 'you@example.com',
  resume: '/files/resume.pdf',
  links: {
    github: 'https://github.com/aryan-agarwal1108',
    linkedin: 'https://www.linkedin.com/in/your-handle',
  },
};

export type Experience = {
  role: string;
  org: string;
  href?: string;
  start: string;
  end: string;
  location?: string;
  bullets: string[];
  tags?: string[];
};

export const experience: Experience[] = [
  {
    role: 'Undergraduate Research Assistant',
    org: 'Placeholder Robotics Lab',
    start: 'Aug 2026',
    end: 'Present',
    location: 'Urbana, IL',
    bullets: [
      'Wrote sensor-fusion firmware for a quadruped test platform, reducing state-estimate drift by 35%.',
      'Built a Python telemetry dashboard used by 6 lab members for daily test runs.',
    ],
    tags: ['C++', 'ROS 2', 'Python'],
  },
  {
    role: 'Electrical Team Member',
    org: 'Placeholder Student Racing Team',
    start: 'Sep 2025',
    end: 'Present',
    bullets: [
      'Designed a 4-layer CAN-bus sensor node PCB in KiCad; 12 units now run on the competition car.',
      'Cut wiring-harness weight 18% by consolidating analog sensor runs onto the bus.',
    ],
    tags: ['KiCad', 'STM32', 'CAN'],
  },
  {
    role: 'Course Assistant — Intro to Computer Science',
    org: 'Placeholder University',
    start: 'Jan 2026',
    end: 'May 2026',
    bullets: [
      'Held weekly office hours for 40+ students and helped debug Java and Kotlin assignments.',
    ],
    tags: ['Java', 'Kotlin', 'Teaching'],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['C', 'C++', 'Python', 'Java', 'Kotlin', 'TypeScript', 'Verilog', 'MATLAB'] },
  { group: 'Software & Tools', items: ['Git', 'Linux', 'ROS 2', 'React', 'Node.js', 'Docker', 'PyTorch'] },
  { group: 'Hardware & CAD', items: ['KiCad', 'SolidWorks', 'Fusion 360', 'STM32', 'Arduino', 'Raspberry Pi', 'FPGA'] },
  { group: 'Lab & Fabrication', items: ['Oscilloscope', 'Logic Analyzer', 'Soldering', '3D Printing', 'Laser Cutting'] },
];

export const coursework = [
  'Data Structures',
  'Computer Systems',
  'Digital Systems Lab',
  'Analog Signal Processing',
  'Discrete Mathematics',
  'Linear Algebra',
];
