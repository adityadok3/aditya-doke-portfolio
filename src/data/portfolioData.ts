import type { Project, SkillCategory, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'ADITYA DOKE',
  firstName: 'ADITYA',
  lastName: 'DOKE',
  title: 'Robotics & Automation Engineering Student',
  institution: 'AISSMS College of Engineering, Pune',
  tagline: '⚡ Exploring Robotics • Automation • Technology',
  description: 'A curious engineering student exploring robotics, automation, technology, and entrepreneurship.',
  email: 'adityadoke434@gmail.com',
  mobile: '+91 8767163312',
  githubUser: 'adityadok3',
  githubUrl: 'https://github.com/adityadok3',
  linkedinUser: 'Aditya Doke',
  linkedinUrl: 'https://www.linkedin.com/in/aditya-doke-671a91431',
  resumePath: '/resume/aditya-doke-resume.pdf',
};

export const ABOUT_TEXT = [
  "I’m Aditya Doke, a Robotics and Automation Engineering student at AISSMS College of Engineering, Pune, with a strong interest in technology, software development, and intelligent systems. I enjoy turning ideas into practical solutions by combining programming, automation, and problem-solving.",
  "Through academic work and personal projects, I’ve explored full-stack development, artificial intelligence, data analytics, and automation, building applications that solve real-world problems. I’m continuously developing my technical skills while improving my ability to communicate, collaborate, and approach challenges with a practical mindset.",
  "Beyond academics, I’m passionate about entrepreneurship, innovation, and robotics, with a long-term goal of building or contributing to solutions that create real-world impact. I believe in learning by building, staying curious, and constantly improving."
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    stage: 'School — SSC / 10th',
    institution: 'Kendriya Vidyalaya DIAT Pune',
    logoUrl: '/education/kv-logo.png.png',
    degreeOrCourse: 'SSC / Class 10',
    qualification: 'SSC / Class 10',
    scoreLabel: 'Percentage',
    scoreValue: '73.6%',
    isCurrent: false,
  },
  {
    stage: 'Junior College — HSC / 12th',
    institution: 'Rajiv Gandhi Academy of E-Learning School & Jr. College',
    logoUrl: '/education/rgae-logo.png.png',
    degreeOrCourse: 'HSC / Class 12',
    qualification: 'HSC / Class 12',
    scoreLabel: 'Percentage',
    scoreValue: '57%',
    isCurrent: false,
  },
  {
    stage: 'Engineering — Current',
    institution: 'AISSMS College of Engineering',
    logoUrl: '/education/aissms-logo.png.png',
    location: 'Pune',
    degreeOrCourse: 'B.E. Robotics and Automation',
    qualification: 'B.E. Robotics and Automation',
    status: 'Currently Pursuing',
    scoreLabel: 'Current CGPA',
    scoreValue: '7.8',
    timeline: 'Expected Graduation: 2028',
    isCurrent: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconName: 'Code',
    skills: [
      { name: 'C++', percentage: 80 },
      { name: 'Java', percentage: 85 },
      { name: 'Python', percentage: 90 },
      { name: 'JavaScript', percentage: 75 },
    ],
  },
  {
    title: 'Frontend & UI',
    iconName: 'Layout',
    skills: [
      { name: 'HTML5', percentage: 95 },
      { name: 'CSS3', percentage: 90 },
    ],
  },
  {
    title: 'Backend & Databases',
    iconName: 'Server',
    skills: [
      { name: 'FastAPI', percentage: 85 },
      { name: 'REST APIs', percentage: 85 },
      { name: 'SQLite', percentage: 80 },
      { name: 'MySQL', percentage: 75 },
    ],
  },
  {
    title: 'Libraries & APIs',
    iconName: 'Cpu',
    skills: [
      { name: 'Pandas', percentage: 80 },
      { name: 'Scikit-learn', percentage: 70 },
      { name: 'TextBlob', percentage: 75 },
      { name: 'Requests', percentage: 85 },
    ],
  },
  {
    title: 'Developer Tools',
    iconName: 'Wrench',
    skills: [
      { name: 'Git', percentage: 85 },
      { name: 'GitHub', percentage: 90 },
      { name: 'VS Code', percentage: 95 },
      { name: 'Eclipse IDE', percentage: 70 },
      { name: 'MySQL Workbench', percentage: 75 },
      { name: 'Jupyter Notebook', percentage: 80 },
      { name: 'Canva', percentage: 75 },
    ],
  },
];

export const CHEFPULSE_PROJECT: Project = {
  id: 'chefpulse',
  title: 'ChefPulse',
  subtitle: 'AI-Powered Restaurant Management System',
  description: 'A full-stack restaurant operations platform combining AI assistants, smart recommendations, voice ordering, image recognition, real-time notifications, inventory intelligence, reservations, and business analytics.',
  problemStatement: 'Traditional restaurant operations often require separate systems for orders, reservations, inventory, customer interactions, and analytics, making management fragmented and inefficient.',
  solutionStatement: 'ChefPulse brings these operations together in one intelligent platform, using AI and real-time technologies to simplify restaurant management and improve the customer experience.',
  keyFeatures: [
    'AI Business Assistant',
    'Voice Ordering',
    'Image-Based Dish Recognition',
    'Smart Recommendations',
    'Inventory Intelligence',
    'Real-Time Notifications',
    'Reservations & Order Management',
    'Business Analytics & Demand Forecasting',
  ],
  techStack: ['React', 'FastAPI', 'Python', 'SQLite', 'WebSockets', 'JWT', 'Recharts'],
  githubUrl: 'https://github.com/riabhagat27/ChefPulse',
  liveDemoUrl: 'https://chef-pulse.vercel.app',
  developedByNote: 'Aditya Doke & Ria Bhagat',
  isFeaturedCaseStudy: true,
  screenshots: [
    {
      id: 'chefpulse-1',
      label: 'Main Dashboard & Analytics Overview',
      caption: 'ChefPulse AI Dashboard with real-time sales performance, inventory alerts, and recommendation cards.',
      src: '/projects/chefpulse/screenshot-1.png',
    },
    {
      id: 'chefpulse-2',
      label: 'Voice Ordering & AI Assistant',
      caption: 'Voice-controlled order entry and interactive dish recognition module.',
      src: '/projects/chefpulse/screenshot-2.png',
    },
    {
      id: 'chefpulse-3',
      label: 'Live Reservations & Kitchen Operations',
      caption: 'Real-time WebSocket kitchen display and table reservation management system.',
      src: '/projects/chefpulse/screenshot-3.png',
    },
  ],
};

export const OTHER_PROJECTS: Project[] = [
  {
    id: 'apextracker-ai',
    title: 'ApexTracker AI',
    subtitle: 'Personal Finance & Expense Analytics',
    description: 'A full-stack financial management platform featuring expense and income tracking, interactive analytics, budgeting, savings goals, AI-powered financial insights, receipt uploads, and automated PDF reports.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Gemini AI'],
    githubUrl: 'https://github.com/adityadok3/Expense-Tracker-with-Analytics',
    liveDemoUrl: 'https://expense-tracker-frontend-27ov.onrender.com/',
    screenshots: [
      {
        id: 'apex-1',
        label: 'APEXTRACKER AI — Analytics & Budgeting Dashboard',
        caption: 'Expense tracking, interactive charts, and Gemini AI financial insights interface.',
        src: '/projects/apextracker/screenshot-1.png',
      },
    ],
  },
  {
    id: 'resqai',
    title: 'ResQAI',
    subtitle: 'AI Resume Analyzer & ATS Optimizer',
    description: 'An AI-powered full-stack platform that analyzes resumes against job descriptions, identifies missing skills and keywords, calculates ATS suitability scores, and generates tailored cover letters.',
    techStack: ['React', 'Tailwind CSS', 'FastAPI', 'Python', 'SQLAlchemy', 'PostgreSQL', 'Gemini AI', 'Chart.js'],
    githubUrl: 'https://github.com/adityadok3/AiResume',
    screenshots: [
      {
        id: 'resq-1',
        label: 'RESQAI — Resume Analyzer & ATS Score Card',
        caption: 'ATS score calculations, keyword gap breakdown, and automated cover letter generator.',
        src: '/projects/resqai/screenshot-1.png',
      },
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'css-with-ai',
    title: 'CSS with AI',
    issuer: 'Unstop',
    logoUrl: '/certificates/unstop-logo.svg',
    certificateUrl: '/certificates/css-with-ai.pdf',
    verificationUrl: 'https://unstop.com/api/course/certificate/43651b89-3b02-4168-b684-7e10590a4b69/view',
  },
  {
    id: 'nodejs',
    title: 'Node.js',
    issuer: 'Unstop',
    logoUrl: '/certificates/unstop-logo.svg',
    certificateUrl: '/certificates/nodejs.pdf',
    verificationUrl: 'https://unstop.com/api/course/certificate/08b4d6b0-7e15-4cde-ac94-2608cf56e484/view',
  },
  {
    id: 'advanced-software-engineering',
    title: 'Advanced Software Engineering Job Simulation',
    issuer: 'Walmart / Forage',
    logoUrl: '/certificates/walmart-logo.svg',
    certificateUrl: '/certificates/walmart-software-engineering.pdf',
    verificationUrl: 'https://www.instagram.com/adityadok3/',
  },
];
