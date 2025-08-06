module.exports = {
  email: 'ogunsanwodavid123@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ogunsanwodavid',
    },
    {
      name: 'Linkedin',
      url: 'https://linkedin.com/in/ogunsanwo-david-399817238',
    },
    {
      name: 'Gmail',
      url: 'mailto:ogunsanwodavid123@gmail.com',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/i__am__0x',
    },
    {
      name: 'X',
      url: 'https://x.com/i__am__0x',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
    /*     {
      name: 'Resources',
      url: '/resources',
    }, */
  ],

  colors: {
    primary: '#3b83f6',
    bg: '#ffffff',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
