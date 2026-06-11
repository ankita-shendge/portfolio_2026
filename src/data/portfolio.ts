export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  link: string;
};

export type Skill = {
  name: string;
  level: string;
  description: string;
};

export const skills: Skill[] = [
  {
    name: 'Frontend',
    level: 'Expert',
    description: 'React.js, Angular, Vue.js, Next.js, TypeScript, JavaScript (ES6+), React Hooks, React Router, HTML5, CSS3, SCSS, Tailwind CSS, Bootstrap, Redux, Context API, Responsive Design, Cross-Browser Compatibility, Accessibility (WCAG).',
  },
  {
    name: 'Design & Prototyping',
    level: 'Advanced',
    description: 'Figma, Storybook.',
  },
  {
    name: 'Backend & APIs',
    level: 'Advanced',
    description: 'Node.js, Express.js, RESTful APIs, JSON, Axios, Fetch API, OAuth 2.0, JWT Authentication.',
  },
  {
    name: 'Databases',
    level: 'Advanced',
    description: 'PostgreSQL, SQL, Prisma ORM.',
  },
  {
    name: 'AI & Developer Tools',
    level: 'Advanced',
    description: 'ChatGPT, GitHub Copilot, Cursor AI, Claude AI, Gemini AI.',
  },
  {
    name: 'Deployment & Hosting',
    level: 'Advanced',
    description: 'Vercel, Netlify, Firebase Hosting, GitHub Pages.',
  },
  {
    name: 'Build & Tooling',
    level: 'Advanced',
    description: 'Vite, Webpack, npm, Yarn, Git, GitHub, CI/CD, Postman, Jira.',
  },
  {
    name: 'Testing & Performance',
    level: 'Advanced',
    description: 'Jest, React Testing Library, Cypress, WebPageTest, AppDynamics.',
  },
];

export const projects: Project[] = [
  {
    id: 'audemy-accessibility-studio',
    title: 'Audemy Accessibility Studio',
    description: 'Developed the Accessibility Studio and analytics dashboards, built responsive Vue.js components, integrated REST APIs, and improved WCAG compliance and performance.',
    stack: ['Vue.js', 'WCAG', 'REST APIs', 'Performance'],
    link: 'https://audemy.org/accessibility-studio',
  },
  {
    id: 'gericht-restaurant',
    title: 'Gericht Restaurant Website',
    description: 'Developed a responsive React restaurant application with reusable components, dynamic menus, newsletter subscriptions, and interactive carousels.',
    stack: ['React', 'Context API', 'Redux', 'Responsive Design'],
    link: 'https://finedinegerich.netlify.app/',
  },
  {
    id: 'ecommerce-app',
    title: 'E-Commerce Application',
    description: 'Developed a cross-platform Flutter application with authentication, product catalog, personalized profiles, checkout, order history, and secure server-side integration.',
    stack: ['Flutter', 'Dart', 'Cross-Platform', 'Authentication'],
    link: '#',
  },
  {
    id: 'music-app',
    title: 'Spotify Music Application',
    description: 'Built a Spotify-powered React application with OAuth 2.0, real-time search, playback controls, playlists, personalized discovery, and optimized API requests.',
    stack: ['React', 'Spotify API', 'OAuth 2.0', 'Context API'],
    link: 'https://music-application-gamma.vercel.app/',
  },
];
