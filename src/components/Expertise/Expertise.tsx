import React from 'react';
import { CodeXml, Server, Database, Terminal, Braces, Cpu } from 'lucide-react';
import { ExpertiseCard } from './ExpertiseCard';
import './Expertise.css';

const expertiseData = [
  {
    title: 'Frontend Development',
    description: 'Crafting responsive and intuitive user interfaces with modern frameworks',
    icon: <CodeXml className="w-6 h-6" />,
    tags: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Redux'],
    gradient: 'linear-gradient(135deg, #4ECDC4 0%, #556270 100%)',
  },
  {
    title: 'Backend Development',
    description: 'Building scalable and robust server-side applications',
    icon: <Server className="w-6 h-6" />,
    tags: ['Node.js', 'Express', 'REST APIs', 'GraphQL'],
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #556270 100%)',
  },
  {
    title: 'Database Management',
    description: 'Designing and optimizing database architectures',
    icon: <Database className="w-6 h-6" />,
    tags: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase'],
    gradient: 'linear-gradient(135deg, #6C5CE7 0%, #556270 100%)',
  },
];

const additionalTech = [
  { icon: <Terminal className="w-4 h-4" />, text: 'Git & CI/CD' },
  { icon: <Braces className="w-4 h-4" />, text: 'Jest & Testing' },
  { icon: <Cpu className="w-4 h-4" />, text: 'Docker' },
];

export const Expertise: React.FC = () => {
  return (
    <section className="expertise-section">
      <div className="expertise-container">
        <div className="expertise-header">
          <h2 className="expertise-title">
            My <span className="text-gradient">Expertise</span>
          </h2>
          <p className="expertise-description">
            With over 3 years of experience in full-stack development, I've built and scaled applications across various domains. Here's what I bring to the table:
          </p>
        </div>

        <div className="expertise-grid">
          {expertiseData.map((item, index) => (
            <ExpertiseCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              tags={item.tags}
              gradient={item.gradient}
              animationDelay={index * 200}
            />
          ))}
        </div>

        <div className="additional-tech">
          <h3 className="additional-tech-title">Additional Technologies</h3>
          <div className="tech-tags-container">
            {additionalTech.map((tech, index) => (
              <div key={index} className="tech-tag">
                {tech.icon}
                <span>{tech.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
