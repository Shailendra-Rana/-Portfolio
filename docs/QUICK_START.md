# 🚀 QUICK START GUIDE

## Getting Started in 5 Minutes

### 1. Prerequisites ✅
- Node.js 18+ installed
- npm/yarn available
- Git installed

### 2. Installation
```bash
# Already done! Dependencies are installed
npm install --legacy-peer-deps
```

### 3. Run Development Server
```bash
npm run dev
```
Opens automatically at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```
Output in `dist/` folder

### 5. Deploy to GitHub Pages
```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```
GitHub Actions automatically builds and deploys!

---

## 📁 File Structure Quick Reference

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── common/        ← Layout, Header, Footer, Navigation
│   │   └── pages/         ← Home, Skills, Projects, Timeline, Contact
│   ├── data/              ← All content (skills, projects, experience)
│   ├── store/             ← Zustand state management
│   ├── types/             ← TypeScript interfaces
│   ├── styles/            ← Global CSS
│   └── App.tsx
├── .github/workflows/deploy.yml  ← GitHub Actions
├── FLOWS.md               ← Flow documentation
├── PROJECT_BRIEF.json     ← Project specification
├── ARCHITECTURE.md        ← Architecture decisions
├── README.md              ← Full documentation
├── IMPLEMENTATION_SUMMARY.md  ← This phase summary
└── package.json
```

---

## 🎨 Customizing Your Portfolio

### Update Portfolio Owner Info
**File**: `src/data/constants.ts`
```typescript
export const PORTFOLIO_OWNER: PortfolioOwner = {
  name: 'Your Name',
  role: 'Your Role',
  title: 'Your Title',
  // ... more fields
};
```

### Add a New Skill
**File**: `src/data/skills.ts`
```typescript
{
  id: 'new-skill',
  name: 'Skill Name',
  level: 4,
  type: 'Core Ability',
  description: '...',
  icon: 'lucide-icon-name',
  technologies: ['Tech1', 'Tech2'],
}
```

### Add a New Project
**File**: `src/data/projects.ts`
```typescript
{
  id: 'new-project',
  title: 'Project Name',
  description: '...',
  category: 'Artifact',
  technologies: ['Tech1'],
  year: 2024,
  featured: true,
}
```

---

## 🌐 Deployment Status

✅ **GitHub Actions Configured**
- Automatic build on push to `main`
- Deploys to GitHub Pages
- Accessible at: `https://shailendra-rana.github.io/Portfolio/`

### First Deployment
1. Initialize git (if needed):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/Shailendra-Rana/Portfolio.git
   git push -u origin main
   ```

2. Go to GitHub repository settings
3. Navigate to Pages section
4. Confirm deployment branch is `gh-pages`
5. Site will be live in 2-5 minutes!

---

## 📊 Component Checklist

- [x] Layout & Navigation
- [x] Home Page
- [x] Header & Footer
- [ ] Skill Tree (Next)
- [ ] Project Gallery (Next)
- [ ] Experience Timeline (Next)
- [ ] Contact Form Integration
- [ ] Avatar Integration

---

## 💡 Tips

### Hot Module Replacement (HMR)
Changes auto-reload in dev mode:
```bash
npm run dev
# Make changes, see them instantly!
```

### Type Checking
Verify TypeScript before building:
```bash
npm run type-check
```

### Build Analysis
Check bundle size:
```bash
npm run build
# Check dist/ folder size
```

---

## 🎯 Next Phase Tasks

1. **Build Skill Tree Component** (2-3 hours)
   - [ ] Create `src/components/sections/SkillTree.tsx`
   - [ ] Render skills from data
   - [ ] Add hover animations
   - [ ] Add click to expand

2. **Build Project Gallery** (2-3 hours)
   - [ ] Create `src/components/sections/ProjectGallery.tsx`
   - [ ] Render projects as cards
   - [ ] Add expand modal
   - [ ] Add filtering

3. **Build Timeline** (1.5-2 hours)
   - [ ] Create `src/components/sections/ExperienceTimeline.tsx`
   - [ ] Render timeline entries
   - [ ] Add scroll animations
   - [ ] Style connections

4. **Integrate Avatar** (1-2 hours)
   - [ ] Get image from Drive
   - [ ] AI generation if needed
   - [ ] Add to assets
   - [ ] Integrate in Home

5. **Integrate Google Form** (30 min)
   - [ ] Get form embed URL
   - [ ] Add to Contact page
   - [ ] Style appropriately

---

## 🐛 Troubleshooting

### Port 5173 Already in Use
```bash
# Kill process or use different port
npm run dev -- --port 3000
```

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install --legacy-peer-deps
npm run build
```

### TypeScript Errors
```bash
npm run type-check
# Fix errors shown
```

---

## 📚 Documentation Files

- **README.md** - Full project documentation
- **FLOWS.md** - Detailed flow diagrams
- **PROJECT_BRIEF.json** - Complete specification
- **ARCHITECTURE.md** - Technical decisions
- **IMPLEMENTATION_SUMMARY.md** - This phase summary

---

## ✨ You're All Set!

The foundation is complete. Start by:
1. Running `npm run dev`
2. Viewing the home page at localhost:5173
3. Building the remaining components

Happy coding! 🚀

---

**Phase**: Foundation ✅  
**Status**: Ready for Development  
**Date**: 2026-03-20
