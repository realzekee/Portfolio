// Projects data
const projects = [
  {
    id: 1,
    title: 'My Homepage',
    category: 'Web development',
    categories: ['web development', 'frontend'],
    url: 'https://zeke024.github.io/My-homepage/',
    github: null,
    description: 'Personal homepage built with HTML, CSS, and JavaScript',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: null,
    featured: true,
  },
  {
    id: 2,
    title: 'Calculator',
    category: 'Web development',
    categories: ['web development', 'javascript'],
    url: 'https://realzeke-calculator.vercel.app/',
    github: null,
    description: 'Functional calculator web application',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: null,
    featured: false,
  },
  {
    id: 3,
    title: 'Shopping Website',
    category: 'Web development',
    categories: ['web development', 'ecommerce'],
    url: 'https://realzekee-shopline.vercel.app/',
    github: null,
    description: 'E-commerce shopping website',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: null,
    featured: false,
  },
  {
    id: 4,
    title: 'ZynPay',
    category: 'Web development',
    categories: ['web development', 'fintech'],
    url: 'https://realzeke-bank.vercel.app/',
    github: null,
    description: 'Banking application interface',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: null,
    featured: true,
  },
  {
    id: 5,
    title: 'Chirp',
    category: 'Web development',
    categories: ['web development', 'social'],
    url: 'https://realzeke-chirp.vercel.app/',
    github: null,
    description: 'Social media application',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: null,
    featured: false,
  },
];

// Project categories for filtering
const projectCategories = [
  { id: 'all', name: 'All', count: projects.length },
  {
    id: 'web design',
    name: 'Web design',
    count: projects.filter(p => p.categories.includes('web design')).length,
  },
  {
    id: 'editing',
    name: 'Editing',
    count: projects.filter(p => p.categories.includes('editing')).length,
  },
  {
    id: 'web development',
    name: 'Web development',
    count: projects.filter(p => p.categories.includes('web development')).length,
  },
];

// Export for use in other files if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { projects, projectCategories };
}
