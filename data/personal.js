// Personal information configuration
const personalInfo = {
  name: 'Zeke',
  title: 'Web developer',
  avatar: './assets/images/my-avatar.png',
  about: {
    short: "I'm a self-taught full stack developer and multimedia editor. I build responsive websites and create sharp, professional visuals. I focus on practical solutions, clean execution, and continuous improvement.",
    long: '',
  },
};

// Contact information
const contactInfo = {
  email: 'realzekee@gmail.com',
  phone: 'realzekee',
  phoneDisplay: 'realzekee',
  location: 'Manila, Philippines',
};

// Social media links
const socialLinks = [
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
];

// Services offered
const services = [
  {
    title: 'UI/UX Design',
    icon: './assets/icons/icon-design.svg',
    description:
      'Designing intuitive and visually appealing user interfaces and experiences that enhance usability and achieve your business goals.',
  },
  {
    title: 'Full-Stack Development',
    icon: './assets/icons/icon-dev.svg',
    description:
      'Building robust and scalable web applications from front-end to back-end, focusing on performance, security, and maintainability.',
  },
  {
    title: 'Editing',
    icon: './assets/icons/icon-photo.svg',
    description:
      'Proficient in multimedia editing, transforming raw content into polished, engaging material.',
  },
];

// Export for use in other files if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { personalInfo, contactInfo, socialLinks, services };
}
