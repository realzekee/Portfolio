/**
 * Portfolio Configuration Data
 * Centralized data for easy maintenance and updates
 */

const portfolioData = {
  // Personal Information
  personal: {
    name: 'Zeke',
    title: 'Web developer',
    email: 'realzekee@gmail.com',
    phone: 'realzekee',
    location: 'Manila, Philippines',
    avatar: './assets/images/my-avatar.png',
  },

  // Social Links
  social: [
    {
      name: 'GitHub',
      icon: 'logo-github',
      url: 'https://github.com/realzekee',
    },
    {
      name: 'Twitter',
      icon: 'logo-twitter',
      url: 'https://x.com/RealZekee?t=bILXfKhK1qSIleJARvjTpQ',
    },
    {
      name: 'Instagram',
      icon: 'logo-instagram',
      url: 'https://www.instagram.com/realzekee?igsh=ZXMzZXNtb2lpMW1z',
    },
  ],

  // About Section
  about: {
    description: [
      "I'm a self-taught full stack developer and multimedia editor. I build responsive websites and create sharp, professional visuals. I focus on practical solutions, clean execution, and continuous improvement.",
    ],
  },

  // Services/What I'm Doing
  services: [
    {
      icon: './assets/icons/icon-design.svg',
      title: 'UI/UX Design',
      description:
        'Designing intuitive and visually appealing user interfaces and experiences that enhance usability and achieve your business goals.',
    },
    {
      icon: './assets/icons/icon-dev.svg',
      title: 'Full-Stack Development',
      description:
        'Building robust and scalable web applications from front-end to back-end, focusing on performance, security, and maintainability.',
    },
    {
      icon: './assets/icons/icon-photo.svg',
      title: 'Editing',
      description:
        'Proficient in multimedia editing, transforming raw content into polished, engaging material.',
    },
  ],

  // Education
  education: [
    {
      title: 'Self Learning',
      period: '2023 — Present',
      description:
        'Continuously expanding my skillset through online resources, tutorials, and personal projects.',
    },
  ],

  // Experience
  experience: [
    {
      title: 'Junior Developer',
      period: '2023 — Present',
      description:
        'Provided comprehensive editing and proofreading services for web content and technical documentation, ensuring accuracy and consistency.',
    },
  ],

  // Skills
  skills: [
    { name: 'JavaScript', level: 70 },
    { name: 'Python', level: 60 },
    { name: 'HTML', level: 85 },
    { name: 'C++', level: 50 },
    { name: 'Editing', level: 75 },
  ],

  // Projects
  projects: [
    {
      title: 'My Homepage',
      category: 'web development',
      url: 'https://zeke024.github.io/My-homepage/',
      image: './assets/images/project-1.jpg',
      description: 'Personal homepage project',
    },
    {
      title: 'Calculator',
      category: 'web development',
      url: 'https://realzeke-calculator.vercel.app/',
      image: './assets/images/project-2.png',
      description: 'Interactive calculator application',
    },
    {
      title: 'Shopping Website',
      category: 'web development',
      url: 'https://realzekee-shopline.vercel.app/',
      image: './assets/images/project-3.jpg',
      description: 'E-commerce website project',
    },
    {
      title: 'ZynPay',
      category: 'web development',
      url: 'https://realzeke-bank.vercel.app/',
      image: './assets/images/project-4.png',
      description: 'Banking application interface',
    },
    {
      title: 'Chirp',
      category: 'web development',
      url: 'https://realzeke-chirp.vercel.app/',
      image: './assets/images/project-5.png',
      description: 'Social media application',
    },
  ],

  // Categories for filtering
  categories: ['All', 'Web design', 'Editing', 'Web development'],

  // Map configuration
  map: {
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251323.5405211749!2d120.88248852481153!3d14.594973380958486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca0350a03a1d%3A0x14d37c494dd4b5f4!2sManila%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1647608789441!5m2!1sen!2sph',
    width: '400',
    height: '300',
  },

  // Contact Form
  contact: {
    formAction: 'https://forms.gle/WFaU4V88vBft5K737',
    method: 'get',
  },
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}
