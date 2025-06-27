export interface TimelineItem {
  id: string;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export const experienceData: TimelineItem[] = [
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
  {
    id: '2',
    title: 'Software Engineer',
    company: 'Advertt Online Services Pvt. Ltd.',
    period: '2021-2022',
    responsibilities: [
      'Created mobile applications utilizing React Native and Redux for efficient state management',
      'Increased user engagement by 30% through a rewards-based advertising model.',
      'Designed and executed a tailored application for a dynamic startup, optimizing operational processes and boosting overall productivity.'
    ]
  },
  {
    id: '3',
    title: 'Software Engineer',
    company: 'Advertt Online Services Pvt. Ltd.',
    period: '2021-2022',
    responsibilities: [
      'Created mobile applications utilizing React Native and Redux for efficient state management',
      'Increased user engagement by 30% through a rewards-based advertising model.',
      'Designed and executed a tailored application for a dynamic startup, optimizing operational processes and boosting overall productivity.'
    ]
  }
];

export const educationData: TimelineItem[] = [
  {
    id: 'edu1',
    title: 'Bachelor of Technology in Computer Science',
    company: 'Your University',
    period: '2017-2021',
    responsibilities: [
      'Specialized in Software Development',
      'Graduated with First Class Honors',
      'Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems'
    ]
  },
  {
    id: 'edu2',
    title: 'Senior Secondary Education',
    company: 'Your School',
    period: '2015-2017',
    responsibilities: [
      'Major in Science with Computer Science',
      'Scored XX% in final examinations',
      'Participated in various technical competitions'
    ]
  }
];
