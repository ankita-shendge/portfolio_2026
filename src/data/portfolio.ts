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
    name: 'React + TypeScript',
    level: 'Expert',
    description: 'Component architecture, hooks, state management, and maintainable UI code.',
  },
  {
    name: 'Vue.js',
    level: 'Advanced',
    description: 'Progressive framework for building user interfaces with reactive data binding.',
  },
  {
    name: 'JavaScript (ES6+)',
    level: 'Expert',
    description: 'Modern JavaScript features, async/await, modules, and clean code practices.',
  },
  {
    name: 'HTML5 & CSS3',
    level: 'Expert',
    description: 'Semantic markup, responsive layouts, CSS Grid/Flexbox, and modern styling.',
  },
  {
    name: 'SCSS & Bootstrap',
    level: 'Advanced',
    description: 'Preprocessed CSS and utility-first framework for rapid UI development.',
  },
  {
    name: 'Redux & Context API',
    level: 'Advanced',
    description: 'State management solutions for complex application data flow.',
  },
  {
    name: 'RESTful APIs',
    level: 'Advanced',
    description: 'API integration, JSON handling, and secure data communication.',
  },
  {
    name: 'Vite & Webpack',
    level: 'Advanced',
    description: 'Modern build tools for fast development and optimized production bundles.',
  },
  {
    name: 'Figma',
    level: 'Intermediate',
    description: 'Design prototyping and collaboration for UI/UX workflows.',
  },
  {
    name: 'Progressive Web Apps',
    level: 'Intermediate',
    description: 'Building installable web apps with offline capabilities and native-like experiences.',
  },
  {
    name: 'AI Tooling',
    level: 'Advanced',
    description: 'Leveraging chatGPT, GitHub Copilot, and Cursor for enhanced development productivity.',
  },
];

export const projects: Project[] = [
  {
    id: 'audemy-accessibility-studio',
    title: 'Audemy Accessibility Studio',
    description: 'Developed the Accessibility Studio page for Audemy, improved application performance by identifying and fixing issues, and designed a portal to visualize student progress, game statistics, and key information with supporting API integration for seamless data flow.',
    stack: ['React', 'Accessibility', 'Performance', 'API Integration'],
    link: 'https://audemy.org/accessibility-studio',
  },
  {
    id: 'gericht-restaurant',
    title: 'Gericht Restaurant Website',
    description: 'Built responsive React applications using Context API and Redux to deliver high-performance, cross-device user experiences. Developed modular UI components including dynamic menus, newsletter integration, and interactive carousels to improve user engagement.',
    stack: ['React', 'Context API', 'Redux', 'Responsive Design'],
    link: 'https://finedinegerich.netlify.app/',
  },
  {
    id: 'ecommerce-app',
    title: 'Ecommerce Application',
    description: 'Built cross-platform Flutter applications using Dart for consistent performance across iOS, Android, and web. Implemented full-stack features including authentication, product catalog, personalized profiles, checkout, and order history with secure, cross-browser server-side integration.',
    stack: ['Flutter', 'Dart', 'Cross-platform', 'Authentication'],
    link: '#',
  },
  {
    id: 'music-app',
    title: 'Music App',
    description: 'React music app integrating Spotify API and OAuth for secure, personalized playback. Performance and reliability using Context API and Jest with real-time REST API integrations. State management with Context API to dynamically render media controls and user content, improving load times and application performance.',
    stack: ['React', 'Spotify API', 'OAuth', 'Context API', 'Jest'],
    link: 'https://www.linkedin.com/posts/ankita-shendge_webdevelopment-spotify-spotifyapi-ugcPost-7318860312403656704-e64M/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACOFjrgBTDGd5L8DtzhHOZaCt5WTIRRB0lQ',
  },
];
