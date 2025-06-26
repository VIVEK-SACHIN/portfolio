import React from 'react';
import { Briefcase } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import './Projects.css';

const projectsData = [
  {
    title: 'SHOWZY',
    description: 'A ticket-booking web app built using Next.js, Tailwind CSS, and the MERN stack with PostgreSQL. It allows users to book tickets for IPL matches and concerts, ensuring a seamless booking experience.',
    imageUrl: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=1000',
    tags: ['Next.js', 'Tailwind CSS', 'React', 'Node.js', 'PostgreSQL', 'Express', 'RabbitMQ', 'Redis'],
    githubUrl: 'https://github.com/Aditya-system32',
    status: 'In Progress'
  },
  {
    title: 'DUBBLY',
    description: 'Dubbly is a web app that automatically generates highly accurate subtitles and voice dubbing for videos in multiple languages using AI.',
    imageUrl: 'https://raw.githubusercontent.com/Aditya-system32/amazon-clone/refs/heads/master/public/Dubbly%20web%20ss.png',
    tags: ['Next.js', 'AssemblyAI', 'Tailwind CSS', 'React', 'Node.js', 'PostgreSQL', 'Express'],
    githubUrl: 'https://github.com/Aditya-system32',
    status: 'In Progress'
  },
  {
    title: 'Ad-Rebate',
    description: 'A mobile application that provides incentives such as rewards, coupons, and gifts in return for engaging with local advertisements.',
    imageUrl: 'https://raw.githubusercontent.com/Aditya-system32/Ad-Rebate/refs/heads/master/assets/images/logoBlack.png',
    tags: ['React', 'React-Native', 'Firebase', 'Framer', 'Redux'],
    githubUrl: 'https://github.com/Aditya-system32/Ad-Rebate',
    status: 'Completed'
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <Briefcase className="projects-icon" />
          <h2 className="projects-title">Featured Projects</h2>
        </div>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              githubUrl={project.githubUrl}
              status={project.status as 'Completed' | 'In Progress'}
              animationDelay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
