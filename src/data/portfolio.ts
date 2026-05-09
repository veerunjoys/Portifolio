import type { IconName } from '@/Components/Icon'

export const profile = {
  name: 'Veerabrahmam Sangani',
  firstName: 'Veerabrahmam',
  lastName: 'Sangani',
  role: 'Full Stack Developer - Agentic AI Enthusiast',
  email: 'veerusangani89@gmail.com',
  phone: '+91 87902 77027',
  phoneHref: 'tel:+918790277027',
  githubUrl: 'https://github.com/veerunjoys',
  linkedinUrl: 'https://www.linkedin.com/in/veerabrahmam-sangani-326844234',
  resumeUrl: '/Veerabrahmam_sangani_Resume.pdf',
}

export type SkillGroup = {
  icon: IconName
  title: string
  skills: string[]
  delay?: string
}

export type Project = {
  number: string
  icon: IconName
  date: string
  title: string
  subtitle: string
  description: string
  stack: string[]
  accent?: 'teal'
  delay?: string
  sourceUrl?: string
  liveUrl?: string
}

export type EducationItem = {
  icon: IconName
  degree: string
  school: string
  year: string
  delay?: string
}

export const skillGroups: SkillGroup[] = [
  {
    icon: 'server',
    title: 'Backend Development',
    skills: ['Python', 'Flask', 'FastAPI', 'Java', 'Spring Boot', 'Node.js', 'REST APIs'],
  },
  {
    icon: 'monitor',
    title: 'Frontend Development',
    skills: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
    delay: '0.08s',
  },
  {
    icon: 'database',
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'SQL', 'Query Optimization'],
    delay: '0.16s',
  },
  {
    icon: 'shield',
    title: 'Security & Auth',
    skills: ['JWT', 'RBAC', 'Secure Auth Flows', 'API Security'],
    delay: '0.24s',
  },
  {
    icon: 'brain',
    title: 'AI / ML',
    skills: ['Machine Learning', 'Generative AI', 'Agentic AI', 'Intelligent Automation'],
    delay: '0.32s',
  },
  {
    icon: 'git',
    title: 'Tools & Practices',
    skills: ['Git', 'VS Code', 'AWS S3', 'Agile / Scrum', 'SDLC', 'Code Reviews'],
    delay: '0.4s',
  },
]

export const projects: Project[] = [
  {
    number: '01',
    icon: 'pill',
    date: 'Jan 2026',
    title: 'MediStocks',
    subtitle: 'Medicine Expiry Management System',
    description:
      'A pharmaceutical inventory platform that tracks stock, automates expiry alerts, and gives pharmacists a cleaner dashboard for daily work.',
    stack: ['React.js', 'FastAPI', 'PostgreSQL', 'AWS S3', 'RBAC'],
    sourceUrl: profile.githubUrl,
  },
  {
    number: '02',
    icon: 'video',
    date: 'Nov 2025',
    title: 'Interview Copilot',
    subtitle: 'Mock Interview Platform',
    description:
      'A mock interview platform for scheduling sessions with verified professionals, including ranking, payments, and resume uploads.',
    stack: ['Flask', 'React.js', 'PostgreSQL', 'JWT'],
    accent: 'teal',
    delay: '0.12s',
    sourceUrl: profile.githubUrl,
  },
]

export const education: EducationItem[] = [
  {
    icon: 'graduation',
    degree: 'Bachelor of Science in MPCs',
    school: 'Ideal College of Arts and Science, Kakinada, AP',
    year: '2017 - 2020',
  },
  {
    icon: 'book',
    degree: 'Intermediate - MPC',
    school: 'Sri Vikas Junior College, Kakinada, AP',
    year: '2015 - 2017',
    delay: '0.08s',
  },
  {
    icon: 'school',
    degree: 'Secondary School Certificate',
    school: 'Municipal Corporation Boys High School, Kakinada, AP',
    year: '2014 - 2015',
    delay: '0.16s',
  },
]

export const heroTech = [
  'Python',
  'React.js',
  'FastAPI',
  'Flask',
  'Spring Boot',
  'PostgreSQL',
  'MongoDB',
  'JWT - RBAC',
  'Gen AI',
  'Tailwind CSS',
]
