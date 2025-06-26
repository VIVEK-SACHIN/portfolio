import React, { useState } from 'react';
import Experience from './Experience';

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const experienceItems = [
    {
      id: '1',
      title: 'Software Engineer',
      company: 'Advertt Online Services Pvt. Ltd.',
      period: '2021-2022',
      responsibilities: [
        'Created mobile applications utilizing React Native and Redux for efficient state management',
        'Increased user engagement by 30% through a rewards-based advertising model.',
        'Designed and executed a tailored application for a dynamic startup, optimizing operational processes and boosting overall productivity.'
      ]
    },
    // Add more experience items as needed
  ];

  return (
    <section id="experience" className="py-16">
      <Experience 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        items={experienceItems}
      />
    </section>
  );
};

export default ExperienceSection;
