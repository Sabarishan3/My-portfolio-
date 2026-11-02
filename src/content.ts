export const person = {
  name: 'Sabarishan',
  fullName: 'Sabarishan E N',
  handle: '@sabarishan',
  role: 'Frontend developer · Data scientist · AI-driven workflow',
  location: 'Bengaluru, Karnataka, India',
  phone: '+91 94420 61548',
  phoneHref: '+919442061548',
  email: 'sabarishan342002@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sabarishan-en-8b5348318',
  linkedinLabel: 'linkedin.com/in/sabarishan-en',
};

export const nav = [
  {label: 'Work', href: '#work'},
  {label: 'CV', href: '#cv'},
];

export const bio = [
  'I build fast, responsive interfaces.',
  'Frontend developer who turns Figma into clean React UIs and leans on Claude, ChatGPT and Copilot across design, coding and debugging to ship faster. Trained in data science and machine learning, so I can build the data and AI layers behind the interface too.',
  'Client-facing by training — sales and support taught me how people actually use what we ship. Based in Bengaluru and open to frontend work:',
];

export const projects = [
  {
    title: 'AI Analytics Dashboard',
    tech: 'React · Tailwind CSS · Chart.js · REST API',
    year: '2025',
    blurb:
      'A responsive analytics dashboard that pulls live data from a REST API into interactive line, bar and pie charts. Date and category filters, light/dark themes, loading and error states, and a component structure that keeps large datasets smooth.',
  },
  {
    title: 'Personal Portfolio',
    tech: 'HTML · CSS · JavaScript · Vercel',
    year: '2025',
    blurb:
      'A mobile-first portfolio site with CSS Grid and Flexbox layouts, subtle scroll animations and accessible, semantic markup. Images and assets were optimised until the site scored above 90 on Lighthouse, then shipped on a custom domain.',
  },
  {
    title: 'Smart Task Manager',
    tech: 'React · Node.js · Express · MongoDB',
    year: '2025',
    blurb:
      'A full-stack task manager with authentication and drag-and-drop Kanban boards. CRUD APIs and JWT login sit behind a React state layer with real-time updates, keyboard shortcuts, due-date reminders and a fully responsive layout.',
  },
  {
    title: 'Human Detection Using CNN',
    tech: 'Python · AlexNet · Deep learning',
    year: '2024',
    blurb:
      'An AlexNet-based convolutional neural network that detects humans in 256×256 CCTV frames. I prepared and labelled the image dataset, trained the model and evaluated it for real-time surveillance and crowd analysis.',
  },
];

export const education = {
  degree: 'B.Tech, Electronics & Communication Engineering',
  school: 'Jain (Deemed-to-be) University',
  place: 'Bengaluru',
  dates: '2020 – 2024',
  detail: 'CGPA 6.5 · Python, IoT, VLSI, signal processing',
};

export const certifications = [
  {name: 'Certified Data Scientist', org: 'DataMites · 120 hours', year: '2024'},
  {name: 'Python for Artificial Intelligence', org: 'Jain University workshop', year: '2023'},
];

export const skillGroups = [
  {
    label: 'Frontend',
    items: [
      'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript (basics)', 'React', 'Next.js',
      'Tailwind CSS', 'Bootstrap', 'Responsive design', 'REST APIs',
    ],
  },
  {
    label: 'AI & design workflow',
    items: [
      'Claude', 'ChatGPT', 'GitHub Copilot', 'Cursor', 'Prompt engineering',
      'LLM API integration', 'Figma prototyping', 'Design-to-code',
    ],
  },
  {
    label: 'Tools',
    items: [
      'Git', 'GitHub', 'VS Code', 'npm', 'Vite', 'Figma', 'Postman',
      'Chrome DevTools', 'Vercel', 'Netlify', 'Jira', 'Slack', 'Canva',
    ],
  },
  {
    label: 'Data & AI',
    items: [
      'Python', 'SQL', 'Pandas', 'NumPy', 'Jupyter', 'Power BI', 'Tableau',
      'Excel', 'Machine learning', 'CNN / deep learning basics',
    ],
  },
  {
    label: 'Core',
    items: ['Problem solving', 'Communication', 'Adaptability', 'Time management', 'Teamwork'],
  },
];

export const languages = ['English (proficient)', 'Tamil (native)', 'Hindi (basic)', 'Malayalam (basic)'];

export const interests = ['Photography', 'Video editing', 'District-level skating & hockey'];

/** Wordmarks for the footer strip — a type specimen of the toolbox. */
export const stack = [
  {name: 'React', font: 'font-display font-black tracking-[-0.03em]'},
  {name: 'TypeScript', font: 'font-mono tracking-[0.02em]'},
  {name: 'Vite', font: 'font-wide tracking-[0.1em]'},
  {name: 'Tailwind', font: 'font-serif italic'},
  {name: 'Figma', font: 'font-display font-medium'},
  {name: 'Python', font: 'font-mono tracking-[0.06em]'},
];

/**
 * Every expression is registered to the same square bust framing, chin anchored,
 * so they swap in place. A file that fails to load falls back to the base face
 * (a missing grab face falls back to g_grimace).
 */
export const faces = {
  base: {src: '/faces/base.webp', mood: 'chill'},
  l_left: {src: '/faces/l_left.webp', mood: 'watching you'},
  l_right: {src: '/faces/l_right.webp', mood: 'watching you'},
  x_cross: {src: '/faces/x_cross.webp', mood: 'suspicious'},
  x_shock: {src: '/faces/x_shock.webp', mood: 'startled'},
  x_laugh: {src: '/faces/x_laugh.webp', mood: 'grinning'},
  x_smug: {src: '/faces/x_smug.webp', mood: 'smug'},
  x_dizzy: {src: '/faces/x_dizzy.webp', mood: 'seeing stars'},
  g_grimace: {src: '/faces/g_grimace.webp', mood: 'being squeezed'},
  g_ouch: {src: '/faces/g_ouch.webp', mood: 'OW'},
  g_squish: {src: '/faces/g_squish.webp', mood: 'pinched'},
} as const;

export type FaceKey = keyof typeof faces;

/** Faces dealt at random when a stretch is let go. */
export const releaseFaces: FaceKey[] = ['x_laugh', 'x_smug'];

/**
 * Landmarks in image UV (0–1, v from the top) measured on the prepared faces.
 * The disc is drawn in the same space; above its centre the head breaks out,
 * below it the bust is clipped to the circle.
 */
export const rig = {
  disc: {x: 0.5, y: 0.6, r: 0.395},
  nose: {x: 0.5, y: 0.505, r: 0.04},
  cheeks: [
    {x: 0.29, y: 0.48},
    {x: 0.71, y: 0.48},
  ],
  face: {x: 0.5, y: 0.48, rx: 0.26, ry: 0.18},
  hairLine: 0.36,
  /** |u − 0.5| beyond which a grab above the jaw is the ears / side hair. */
  sides: 0.22,
};
