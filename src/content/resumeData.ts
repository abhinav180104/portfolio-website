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
  tagline: 'Full-stack engineer building scalable web products',
  location: 'Visakhapatnam, India',
  email: 'kssabhinav@gmail.com',
  phone: '+91 81439 41409',
  education: {
    school: 'Indian Institute of Technology Indore (IIT Indore)',
    program: 'B Tech in Mechanical Engineering',
    period: 'Nov 2021 – May 2025',
    gpa: '7.11/10.0',
  },
  summary:
    'Full-stack engineer with hands-on experience building scalable backend services, RESTful APIs, and modern web applications using React, Node.js, Express.js, Django, MongoDB, PostgreSQL, Redis, and Socket.io.',
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
      period: 'June 2025 – Sep 2025',
      summary: 'Built scalable backend services using Node.js, Express.js, and MongoDB for a School ERP system and an AI-powered Quiz App.',
      achievements: [
        'Designed MongoDB schemas and developed APIs from scratch, ensuring scalable and efficient data management for growing user bases.',
        'Built RESTful APIs with Redis caching, reducing average response times by 40% and enabling low-latency access to frequently requested data.',
        'Integrated Socket.io for real-time updates in a layered architecture across frontend, backend, cache, and database for live quiz dashboards and ERP notifications.',
        'Worked in a fast-paced startup environment, improving frontend performance by revamping the Angular UI and preloading metadata before SSR to improve SEO.',
      ],
      stack: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'Socket.io', 'Angular'],
    },
  ],
  projects: [
    {
      name: 'Full Stack E-Commerce Application',
      description: 'Full-stack e-commerce application for product browsing, cart management, and secure checkout.',
      highlights: [
        'Developed the application using React for the frontend and Django for the backend.',
        'Built RESTful APIs for products, orders, and cart operations, and implemented JWT authentication for secure user sessions.',
        'Integrated PostgreSQL for data storage and enabled seamless frontend-backend communication via APIs.',
      ],
      stack: ['JavaScript', 'React.js', 'Tailwind CSS', 'Python', 'Django', 'PostgreSQL'],
      link: { label: 'View repo', url: 'https://github.com/abhinav180104' },
    },
    {
      name: 'Hospital Management System',
      description: 'Role-based hospital platform for patients, doctors, and admins.',
      highlights: [
        'Implemented role-based access control using JWT authentication for patients, doctors, and admins, ensuring secure access and data protection.',
        'Developed interactive dashboards, appointment tracking, and patient history management using React.',
      ],
      stack: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
      link: { label: 'View repo', url: 'https://github.com/abhinav180104' },
    },
  ],
  skills: [
    { label: 'Programming', items: ['C++', 'Data Structures & Algorithms', 'Object-Oriented Programming', 'Competitive Programming', 'Python'] },
    { label: 'Web', items: ['React', 'Node.js', 'Express.js', 'Angular', 'Django', 'TypeScript', 'SCSS', 'Bootstrap'] },
    { label: 'Data & Infra', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Socket.io', 'Git'] },
  ],
  achievements: [
    { title: 'ACM ICPC Regionalist', detail: 'Represented IIT Indore at Kanpur Regional 2024' },
    { title: 'Max Rating 1627 (Expert)', detail: 'Codeforces' },
    { title: 'Max Rating 1991 (4★)', detail: 'CodeChef' },
    { title: 'AIR 6072', detail: 'JEE Advanced 2021' },
  ],
  responsibilities: [
    { role: 'Placement Manager', org: 'Training and Placement Cell, IIT Indore' },
    { role: 'Treasurer', org: 'Astronomy Club, IIT Indore' },
  ],
}
