import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  LockKeyhole,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react';

export const serviceGroups = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Services',
    summary:
      'Grow visibility, generate qualified leads, and build a brand that performs across search, social, email, and commerce channels.',
    icon: Megaphone,
    accent: 'gold',
    services: [
      {
        name: 'SEO',
        description: 'Technical SEO, on-page optimisation, and link building to dominate search rankings.',
      },
      {
        name: 'Performance Marketing',
        description: 'ROI-focused paid campaigns across Google, Meta, and beyond for maximum conversions.',
      },
      {
        name: 'Website Development',
        description: 'Design and develop responsive websites that communicate clearly and support lead generation.',
      },
      {
        name: 'Email Marketing',
        description: 'Automated email sequences that nurture leads, retain customers, and drive sales.',
      },
      {
        name: 'Analytics and Reporting',
        description: 'Track performance with dashboards, campaign reports, and data-driven recommendations.',
      },
      {
        name: 'Digital Footprint',
        description: 'Audit and manage your complete online presence across all digital touchpoints.',
      },
      {
        name: 'Ad Marketing',
        description: 'Expert Google, Facebook, and Instagram ad campaigns with ROI tracking.',
      },
      {
        name: 'Branding and Creative Services',
        description: 'Shape your brand identity, visuals, messaging, and campaign creatives for stronger recall.',
      },
      {
        name: 'Consulting and Strategy',
        description: 'Get expert planning for digital channels, budgets, positioning, and growth execution.',
      },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Services',
    summary:
      'Protect business systems, applications, social channels, and data with practical assessments and continuous security support.',
    icon: ShieldCheck,
    accent: 'blue',
    services: [
      {
        name: 'Vulnerability Assessment',
        description: 'Identify weaknesses across systems, applications, and networks before attackers exploit them.',
      },
      {
        name: 'Social Media Security',
        description: 'Protect brand accounts with access reviews, monitoring, recovery planning, and security controls.',
      },
      {
        name: 'Data Security',
        description: 'Safeguard sensitive business and customer data with practical policies and controls.',
      },
      {
        name: 'Penetration Testing',
        description: 'Simulate real-world attacks to validate defenses and uncover high-risk security gaps.',
      },
      {
        name: 'Security Operation Centres',
        description: 'Support monitoring, alert handling, and response workflows for continuous protection.',
      },
      {
        name: 'Infrastructure Security',
        description: 'Harden servers, networks, endpoints, and cloud infrastructure against common threats.',
      },
      {
        name: 'Security Consultation',
        description: 'Receive expert guidance on risk reduction, compliance readiness, and security roadmaps.',
      },
      {
        name: 'Security Assessment',
        description: 'Evaluate your current security posture with clear findings and prioritized recommendations.',
      },
      {
        name: 'Web Application Security',
        description: 'Secure websites, portals, APIs, and web apps against vulnerabilities and misuse.',
      },
      {
        name: 'Technical Support',
        description: 'Get responsive support for security issues, troubleshooting, configuration, and maintenance.',
      },
    ],
  },
  {
    id: 'ai-security-agent',
    title: 'AI Security and Agent',
    summary:
      'Adopt AI agents responsibly with automation workflows, agent integration, and security practices aligned to your business goals.',
    icon: Bot,
    accent: 'gold',
    services: [
      {
        name: 'AI Agent for Business',
        description: 'Deploy AI agents to streamline customer support, lead handling, reporting, and daily workflows.',
      },
      {
        name: 'AI Agent Security',
        description: 'Protect agent workflows with secure access, data handling, prompt safety, and monitoring practices.',
      },
      {
        name: 'Automation for Agent Integration',
        description: 'Connect AI agents with tools, CRMs, forms, and internal processes for smooth automation.',
      },
    ],
  },
  {
    id: 'career-training',
    title: 'Career and Training',
    summary:
      'Empower individuals, institutions, and corporate teams through guidance, skill programs, assessments, and professional mentoring.',
    icon: GraduationCap,
    accent: 'blue',
    services: [
      {
        name: 'Career Counselling and Guidance',
        description: 'Help students and professionals choose practical paths based on strengths, goals, and market demand.',
      },
      {
        name: 'Career Assessment',
        description: 'Use structured assessments to understand interests, abilities, personality, and suitable career options.',
      },
      {
        name: 'Resume and Profile Building',
        description: 'Create stronger resumes, LinkedIn profiles, and professional portfolios for better opportunities.',
      },
      {
        name: 'Interview Preparation',
        description: 'Practice interview answers, confidence, communication, and role-specific preparation.',
      },
      {
        name: 'Skill Development Courses and Program',
        description: 'Deliver practical learning programs that improve job readiness and workplace performance.',
      },
      {
        name: 'Awareness Program',
        description: 'Run sessions on digital safety, career planning, technology adoption, and professional growth.',
      },
      {
        name: 'Corporate and Educational Trainings',
        description: 'Train teams, faculty, and learners through customized workshops and institutional programs.',
      },
      {
        name: 'Career Growth Mentorship',
        description: 'Guide long-term professional development through mentorship, goal-setting, and accountability.',
      },
      {
        name: 'Education Consultancy',
        description: 'Support academic planning, course selection, institutional decisions, and future readiness.',
      },
      {
        name: 'Mindset and Productivity Coaching',
        description: 'Build focus, discipline, confidence, and habits that support personal and professional growth.',
      },
    ],
  },
];

export const highlights = [
  {
    title: 'Growth Strategy',
    text: 'Data-driven plans for stronger online presence and measurable campaign performance.',
    icon: Target,
  },
  {
    title: 'Secure Delivery',
    text: 'Assessment-led cybersecurity services that reduce business and operational risk.',
    icon: LockKeyhole,
  },
  {
    title: 'Modern Technology',
    text: 'Web, AI, automation, and analytics solutions built around real business outcomes.',
    icon: Code2,
  },
  {
    title: 'Training Impact',
    text: 'Career and corporate learning programs designed for practical skill growth.',
    icon: BriefcaseBusiness,
  },
];

export const stats = [
  { value: '360°', label: 'Digital and IT solutions' },
  { value: '4', label: 'Core service verticals' },
  { value: '24/7', label: 'Security monitoring mindset' },
  { value: '100%', label: 'Consultative approach' },
];

export const processSteps = [
  {
    title: 'Discover',
    text: 'We understand your goals, audience, risk areas, and current digital maturity.',
    icon: Sparkles,
  },
  {
    title: 'Plan',
    text: 'We map the right mix of marketing, security, technology, and training services.',
    icon: BarChart3,
  },
  {
    title: 'Deliver',
    text: 'We execute with clear milestones, reporting, and support after implementation.',
    icon: ShieldCheck,
  },
];
