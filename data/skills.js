// Skills data with proficiency levels
const skills = [
  {
    id: 1,
    name: 'JavaScript',
    level: 70,
    category: 'programming',
  },
  {
    id: 2,
    name: 'Python',
    level: 60,
    category: 'programming',
  },
  {
    id: 3,
    name: 'HTML',
    level: 85,
    category: 'web',
  },
  {
    id: 4,
    name: 'C++',
    level: 50,
    category: 'programming',
  },
  {
    id: 5,
    name: 'Editing',
    level: 75,
    category: 'multimedia',
  },
];

// Education timeline
const education = [
  {
    id: 1,
    title: 'Self Learning',
    period: '2023 — Present',
    description:
      'Continuously expanding my skillset through online resources, tutorials, and personal projects.',
  },
];

// Work experience timeline
const experience = [
  {
    id: 1,
    title: 'Junior Developer',
    period: '2023 — Present',
    description:
      'Provided comprehensive editing and proofreading services for web content and technical documentation, ensuring accuracy and consistency.',
  },
];

// Export for use in other files if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { skills, education, experience };
}
