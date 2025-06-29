
import type { TimelineItem, Project, NameAndDescription, TechItem, ExpertiseItem } from './types/config.types';

export const experienceData: TimelineItem[] = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'Instave (Peoplelink) | Sep 2023 – Present | Hi-Tech City, India',
    period: '2023-present',
    responsibilities: [
      'Developed and optimized video conferencing solutions using WebRTC and WebSockets, addressing SFU auto-scaling and participant scaling issues, increasing capacity from 150 to 300+ users while reducing latency by 30%.',
      'Built a generic video-conferencing SDK to streamline integration across projects.',
      'Collaborated with UI teams to design and implement modern UI components using JavaScript (ES6+).',
      'Enhanced system reliability by containerizing services with Docker, improving deployment consistency.',
      'Contributed to real-time communication features, ensuring low-latency performance for large-scale interactions.',
      'Built a dynamic SMS and email sending module which can be configured with any kind and type of credentials from any provider.'
    ]
  }
];

export const educationData: TimelineItem[] = [
  {
    id: 'edu1',
    title: 'Bachelor of Technology in Computer Science',
    company: 'GLA University Mathura, India',
    period: '2020–2024 | 7.3 GPA',
    responsibilities: [
      'Programming Languages: Java, C++, Python',
      'Major subjects: Operating Systems (OS), Computer Organization and Architecture, Microprocessors and Microcontrollers, Computer Networks',
      'Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems,Design and Analysis of Algorithms (DAA)'
    ]
  },
  {
    id: 'edu2',
    title: 'Senior Secondary Education',
    company: 'Army Public School (APS), Yol Cantt',
    period: '2019–2020',
    responsibilities: [
      'Major in Science with Computer Science',
      'Scored 89.2% in final examinations',
      'Participated in various technical competitions'
    ]
  },
  {
    id: 'edu3',
    title: 'Higher Secondary Education',
    company: 'Army Public School (APS), Sukna Cantt',
    period: '2017–2018',
    responsibilities: [
      'general subjects',
      'Scored 91.6% in final examinations',
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: 'TRAVEL AND TOUR',
    description: 'Full-stack Travel Management System with secure auth, Razorpay payments, and RESTful APIs.Optimized performance via caching, compression, and secure input handling.Responsive UI with Pug templates, Mapbox integration, and ESLint/Prettier for code quality',
    imageUrl: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=1000',
    tags: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Pug', 'Mapbox'],
    githubUrl: 'https://github.com/VIVEK-SACHIN/TravelAndTour',
    status: 'Completed'
  },
  {
    title: 'UFIRE',
    description: 'Scalable group chat app with Firebase, Socket.IO, and GetX state management.Responsive UI future upgrades include 1:1 chats and media sharing.',
    imageUrl: 'https://raw.githubusercontent.com/Aditya-system32/amazon-clone/refs/heads/master/public/Dubbly%20web%20ss.png',
    tags: ['Flutter', 'Firebase', 'GetX', 'Socket.IO'],
    githubUrl: 'https://github.com/VIVEK-SACHIN/chat-app',
    status: 'Completed'
  },
  {
    title: 'Conferencing App',
    description: 'Peer-to-peer video platform using WebRTC with private IPs for low latency.Minimal UI with semantic HTML5/CSS3; no STUN/TURN server dependency.',
    imageUrl: 'https://raw.githubusercontent.com/Aditya-system32/Ad-Rebate/refs/heads/master/assets/images/logoBlack.png',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'WebRTC'],
    githubUrl: 'https://github.com/VIVEK-SACHIN/video-confrencingapp',
    status: 'In Progress'
  },
];

export const nameAndDescriptionData: NameAndDescription = {
  name: 'Vivek Kumar',
  summary: `I craft exceptional digital experiences through elegant code and innovative solutions`,
  title: 'FULL STACK DEVELOPER',
  githubUrl: 'https://github.com/VIVEK-SACHIN',
  cvUrl: 'https://github.com/VIVEK-SACHIN/PersonalData/blob/main/vivekresume2yrs.pdf',
  MyExpertise: `With over 2 years of experience in full-stack development, I've built and scaled applications across various domains. Here's what I bring to the table:`,
  linkedinUrl: 'https://www.linkedin.com/in/vivek-kumar-a96a23207/'
};

export const expertiseData: ExpertiseItem[] = [
  {
    title: 'Frontend Development',
    description: 'Crafting responsive and intuitive user interfaces with modern frameworks',
    icon: 'CodeXml',
    tags: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Redux'],
    gradient: 'linear-gradient(135deg, #4ECDC4 0%, #556270 100%)',
    iconClassName: 'w-6 h-6'
  },
  {
    title: 'Backend Development',
    description: 'Building scalable and robust server-side applications',
    icon: 'Server',
    tags: ['Node.js', 'Express', 'REST APIs', 'GraphQL'],
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #556270 100%)',
    iconClassName: 'w-6 h-6'
  },
  {
    title: 'Database Management',
    description: 'Designing and optimizing database architectures',
    icon: 'Database',
    tags: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase'],
    gradient: 'linear-gradient(135deg, #6C5CE7 0%, #556270 100%)',
    iconClassName: 'w-6 h-6'
  },
];

export const additionalTech: TechItem[] = [
  { icon: 'Terminal', text: 'Git & CI/CD', className: 'w-4 h-4' },
  { icon: 'Braces', text: 'Jest & Testing', className: 'w-4 h-4' },
  { icon: 'Cpu', text: 'Docker', className: 'w-4 h-4' },
];