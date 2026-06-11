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
    name: 'Frontend Frameworks',
    level: 'Expert',
    description: 'React, Angular, Vue.js, Next.js, TypeScript, JavaScript, React Hooks, and React Router.',
  },
  {
    name: 'UI Engineering',
    level: 'Expert',
    description: 'HTML5, CSS3, SCSS, Tailwind CSS, Bootstrap, responsive design, and cross-browser compatibility.',
  },
  {
    name: 'Accessibility',
    level: 'Expert',
    description: 'WCAG standards, semantic markup, accessible interactions, and inclusive interface development.',
  },
  {
    name: 'State Management',
    level: 'Advanced',
    description: 'Redux and Context API for predictable shared state and scalable application architecture.',
  },
  {
    name: 'Backend & APIs',
    level: 'Advanced',
    description: 'Node.js, Express.js, RESTful APIs, JSON, Axios, Fetch API, OAuth 2.0, JWT, and RBAC.',
  },
  {
    name: 'Databases',
    level: 'Advanced',
    description: 'PostgreSQL, SQL, Prisma ORM, reporting workflows, and data aggregation.',
  },
  {
    name: 'Testing & Performance',
    level: 'Advanced',
    description: 'Jest, React Testing Library, Cypress, WebPageTest, AppDynamics, lazy loading, and code splitting.',
  },
  {
    name: 'Design Systems',
    level: 'Advanced',
    description: 'Reusable component libraries, Storybook, Figma, design handoff, and prototyping.',
  },
  {
    name: 'Build & Delivery',
    level: 'Advanced',
    description: 'Vite, Webpack, npm, Yarn, Git, GitHub, CI/CD, Postman, Jira, code reviews, and Agile delivery.',
  },
  {
    name: 'Deployment & Hosting',
    level: 'Advanced',
    description: 'Vercel, Netlify, Firebase Hosting, and GitHub Pages.',
  },
  {
    name: 'AI Tooling',
    level: 'Advanced',
    description: 'ChatGPT, GitHub Copilot, Codex, Cursor AI, Claude AI, and Gemini AI for development and review.',
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
