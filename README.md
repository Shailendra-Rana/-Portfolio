# 🎮 Gamified Portfolio - Shailendra Sunil Rana

A highly unique, deeply gamified personal portfolio website featuring an RPG/MMO HUD aesthetic, built with React, TypeScript, Tailwind CSS, and Framer Motion.

**Live Site**: [https://shailendra-rana.github.io/Portfolio/](https://shailendra-rana.github.io/-Portfolio/)

---

## 🎯 Overview

This portfolio presents a professional career and skill set through the lens of an immersive RPG gaming experience. Every section is designed to feel like an interactive game interface, complete with:

- **Skill Tree** - RPG-style skill nodes with levels and unlock mechanics
- **Project Gallery** - Artifacts and Spellbooks showcasing work
- **Experience Timeline** - Career journey as quest milestones  
- **Gamified Animations** - Smooth, responsive motion effects
- **Dark Aesthetic** - Futuristic RPG/MMO HUD color palette
- **Mobile Optimized** - Fully responsive design for all devices

---

## 🏗️ Architecture

### Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | React 19 | UI library |
| **Language** | TypeScript | Type safety |
| **Build Tool** | Vite | Fast bundling |
| **Styling** | Tailwind CSS | Utility-first CSS |
| **Animations** | Framer Motion | GPU animations |
| **Routing** | React Router | Client-side navigation |
| **State** | Zustand | Lightweight state management |
| **Hosting** | GitHub Pages | Free static hosting |
| **CI/CD** | GitHub Actions | Automated deployment |

### Key Features

- ✅ **Static Site Generation** - No backend, no database, zero API exposure
- ✅ **Type Safe** - Full TypeScript with strict mode enabled
- ✅ **Responsive Design** - Mobile-first approach, works on all devices
- ✅ **Performance Optimized** - Code splitting, lazy loading, minification
- ✅ **Accessible** - ARIA labels, keyboard navigation, reduced-motion support
- ✅ **Fully Automated** - GitHub Actions handles build and deployment

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (download from [nodejs.org](https://nodejs.org/))
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shailendra-Rana/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   Visit `http://localhost:5173` in your browser

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type check (TypeScript)
npm run type-check
```

---

## 📁 Project Structure

```
src/
├── assets/                 # Images, icons, avatars
│   ├── avatars/           # Player character portraits
│   ├── icons/             # RPG-style icons
│   └── images/            # Project screenshots, backgrounds
├── components/            # React components
│   ├── common/            # Reusable: Header, Footer, Layout
│   ├── pages/             # Full-page components
│   ├── sections/          # Sections: Hero, Timeline, etc.
│   └── ui/                # Small UI primitives
├── data/                  # Hardcoded content
│   ├── skills.ts          # Skill tree data
│   ├── projects.ts        # Project/artifact data
│   ├── experience.ts      # Timeline entries
│   └── constants.ts       # Global constants
├── hooks/                 # Custom React hooks
├── store/                 # Zustand state stores
├── styles/                # Global CSS
├── types/                 # TypeScript interfaces
├── App.tsx               # Root component
└── main.tsx              # Entry point

.github/
└── workflows/
    └── deploy.yml        # GitHub Actions CI/CD workflow

Configuration Files:
├── vite.config.ts        # Vite build configuration
├── tailwind.config.ts    # Tailwind CSS customization
├── tsconfig.json         # TypeScript configuration
├── postcss.config.js     # PostCSS configuration
└── package.json          # Dependencies and scripts

Documentation:
├── FLOWS.md              # Complete flow documentation
├── PROJECT_BRIEF.json    # Structured project brief
├── ARCHITECTURE.md       # Architecture decision records
└── README.md             # This file
```

---

## 🎨 RPG Color Palette

The portfolio uses a custom gamified color palette:

- **Primary Dark**: `#1a0033` (Deep Purple)
- **Primary**: `#330066` (Purple)
- **Accent Cyan**: `#00d9ff` (Neon Cyan)
- **Accent Purple**: `#9d4edd` (Electric Purple)
- **Gold**: `#f7b801` (Achievement Gold)
- **Text Light**: `#e2e8f0` (Light Gray)

All colors are configured in `tailwind.config.ts` with custom utility classes like `.glass-panel`, `.glow-border`, and `.neon-glow`.

---

## ⚙️ Configuration

### Updating Portfolio Content

All content is stored as data files in `src/data/`:

#### Skills (`src/data/skills.ts`)
```typescript
export const SKILLS: Skill[] = [
  {
    id: 'skill-id',
    name: 'Skill Name',
    level: 4,
    type: 'Core Ability',
    description: '...',
    icon: 'lucide-icon-name',
    // ... more fields
  },
];
```

#### Projects (`src/data/projects.ts`)
```typescript
export const PROJECTS: Project[] = [
  {
    id: 'project-id',
    title: 'Project Title',
    description: 'Short description',
    longDescription: 'Detailed description',
    category: 'Artifact', // or 'Spellbook', 'Quest'
    technologies: ['Tech1', 'Tech2'],
    // ... more fields
  },
];
```

#### Timeline (`src/data/experience.ts`)
```typescript
export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: 'entry-id',
    title: 'Role/Degree',
    organization: 'Company/University',
    type: 'experience', // or 'education'
    startDate: 'YYYY-MM',
    endDate: 'YYYY-MM', // undefined for current
    // ... more fields
  },
];
```

#### Constants (`src/data/constants.ts`)
Update portfolio owner info, nav items, hero content, colors, and metadata here.

---

## 🚢 Deployment

### Automatic Deployment (GitHub Pages)

This project uses GitHub Actions for automatic deployment:

1. **Push to main branch**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **GitHub Actions automatically**:
   - Installs dependencies
   - Builds the project
   - Deploys to GitHub Pages

3. **Site goes live** at `https://shailendra-rana.github.io/Portfolio/`

### Manual Build & Deploy

```bash
# Build for production
npm run build

# Output is in dist/ folder ready to deploy
```

---

## 📊 Performance

The portfolio is optimized for performance:

- **Bundle Size**: ~115KB (gzipped)
- **First Contentful Paint**: < 1.5s
- **Lighthouse Score**: 90+
- **Fully Static**: No server requests needed

Optimizations include:
- Code splitting for lazy-loaded pages
- CSS purging removes unused Tailwind styles
- Image optimization and responsive images
- Terser minification
- Vite's fast bundling

---

## 🔧 Customization Guide

### Adding a New Skill

1. Open `src/data/skills.ts`
2. Add to `SKILLS` array:
```typescript
{
  id: 'unique-skill-id',
  name: 'Skill Name',
  level: 3,
  type: 'Core Ability',
  description: 'Detailed description',
  icon: 'lucide-icon', // From lucide-react
  technologies: ['Tech1', 'Tech2'],
  prerequisites: ['other-skill-id'], // Optional
}
```

### Adding a New Project

1. Open `src/data/projects.ts`
2. Add to `PROJECTS` array:
```typescript
{
  id: 'unique-project-id',
  title: 'Project Name',
  description: 'Short version',
  longDescription: 'Detailed version',
  category: 'Artifact',
  technologies: ['Tech1', 'Tech2'],
  impact: 'What was achieved',
  year: 2024,
  featured: true,
  links: {
    github: 'url',
    demo: 'url',
    docs: 'url'
  }
}
```

### Changing Colors

Edit `tailwind.config.ts` to modify the RPG color palette:
```typescript
colors: {
  'rpg': {
    'dark': '#1a0033',
    'cyan': '#00d9ff',
    // ... more colors
  },
}
```

---

## 📚 Documentation

Comprehensive documentation is provided:

- **[FLOWS.md](./FLOWS.md)** - Detailed flow diagrams for all user interactions
- **[PROJECT_BRIEF.json](./PROJECT_BRIEF.json)** - Structured project specification
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Architecture decisions and system design

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the ISC License - see `LICENSE` file for details.

---

## 👤 About

**Shailendra Sunil Rana**
- **Title**: System Architect-Knight
- **Experience**: 4.5+ years
- **Specialization**: Full-stack development, ServiceNow platform
- **Company**: Centiro Solutions
- **GitHub**: [@Shailendra-Rana](https://github.com/Shailendra-Rana)

---

## 🙏 Acknowledgments

Built with:
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)
- [Zustand](https://zustand-demo.vercel.app)

---

**Last Updated**: 2026-03-20  
**Version**: 1.0.0  
**Status**: Active Development
