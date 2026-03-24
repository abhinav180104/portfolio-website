export type Experience = {
  title: string
  company: string
  period: string
  summary: string
  achievements: string[]
  stack: string[]
}

export type Project = {
  name: string
  description: string
  highlights: string[]
  stack: string[]
  link?: { label: string; url: string }
}

export type SkillCategory = {
  label: string
  items: string[]
}

export type Achievement = {
  title: string
  detail: string
}

export type Responsibility = {
  role: string
  org: string
}

export const resumeData = {
  name: 'K Surya Sai Abhinav',
  tagline: 'Full-stack engineer crafting fast, resilient products',
  location: 'Visakhapatnam, India',
  email: 'kssabhinav@gmail.com',
  phone: '+91 81439 41409',
  education: {
    school: 'Indian Institute of Technology Indore',
    program: 'B.Tech • Mechanical Engineering',
    period: 'Nov 2021 – May 2025',
    gpa: '7.11 / 10.0',
  },
  summary:
    'I blend systems thinking from mechanical engineering with hands-on software experience to build end-to-end web platforms. I enjoy owning APIs, data models, and polished user interfaces that stay fast even as the user base scales.',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sai-abhinav' },
    { label: 'GitHub', url: 'https://github.com/abhinav180104' },
    { label: 'Codeforces', url: 'https://codeforces.com/profile/abhinav180104' },
    { label: 'CodeChef', url: 'https://www.codechef.com/users/abhinav180104' },
  ],
  experience: [
    {
      title: 'SDE Intern',
      company: 'Inforida',
      period: 'Jun 2025 – Sep 2025',
      summary: 'Built and scaled backend + real-time systems for an AI quiz platform and a school ERP suite.',
      achievements: [
        'Designed MongoDB schemas and REST APIs that kept queries efficient as schools onboarded.',
        'Introduced Redis caching and cut average response times by roughly 40%.',
        'Integrated Socket.io across a layered stack so live dashboards and ERP notifications stayed in sync.',
        'Polished Angular screens and metadata preloading to improve SEO performance before SSR.',
      ],
      stack: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'Socket.io', 'Angular'],
    },
  ],
  projects: [
    {
      name: 'Full Stack E-Commerce',
      description: 'Shopping experience with catalog browsing, carts, checkout, and JWT-secured orders.',
      highlights: [
        'Connected a React storefront to Django REST APIs for products, cart, and orders.',
        'Implemented JWT authentication plus PostgreSQL persistence and CORS-hardened API gateway.',
      ],
      stack: ['React', 'Django REST', 'Tailwind CSS', 'PostgreSQL', 'JWT'],
      link: { label: 'View repo', url: 'https://github.com/abhinav180104' },
    },
    {
      name: 'Hospital Management System',
      description: 'Role-aware dashboards for doctors, nurses, and admins with live appointment data.',
      highlights: [
        'Built granular JWT-based authorization for each persona.',
        'Crafted React dashboards that surface appointments, patient history, and alerts in one place.',
      ],
      stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      link: { label: 'View repo', url: 'https://github.com/abhinav180104' },
    },
  ],
  skills: [
    { label: 'Programming', items: ['C++', 'Python', 'Data Structures & Algorithms', 'Object-Oriented Design'] },
    { label: 'Web', items: ['React', 'Node.js', 'Express.js', 'Angular', 'Django', 'TypeScript', 'SCSS', 'Bootstrap'] },
    { label: 'Data & Infra', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Socket.io', 'Git'] },
  ],
  achievements: [
    { title: 'ACM ICPC Regionalist', detail: 'Represented IIT Indore at Kanpur Regional 2024' },
    { title: 'Codeforces Expert', detail: 'Max rating 1627' },
    { title: 'CodeChef 4★', detail: 'Max rating 1991' },
    { title: 'JEE Advanced 2021', detail: 'All India Rank 6072' },
  ],
  responsibilities: [
    { role: 'Placement Manager', org: 'Training & Placement Cell, IIT Indore' },
    { role: 'Treasurer', org: 'Astronomy Club, IIT Indore' },
  ],
}
