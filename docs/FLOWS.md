# 🎮 Gamified Portfolio - Complete Flow Documentation

## Table of Contents
1. [User Journey Flows](#1-user-journey-flows)
2. [Component Interaction Flows](#2-component-interaction-flows)
3. [Data Flow Architecture](#3-data-flow-architecture)
4. [Animation & Motion Flows](#4-animation--motion-flows)
5. [Navigation & Routing Flow](#5-navigation--routing-flow)
6. [State Management Flow](#6-state-management-flow)
7. [Deployment & Build Flow](#7-deployment--build-flow)

---

## 1. User Journey Flows

### 1.1 Hero/Landing Page Flow

**Flow Description:**
User lands on the portfolio and encounters the immersive hero section with animated background and character avatar.

```
User Lands on Portfolio
        ↓
Load Hero Section (fade-in animation)
        ↓
Display Player Character Avatar (glow effect)
        ↓
Show Welcome Message & Navigation Options
        ↓
User Can:
├─ View Skill Tree
├─ Browse Projects
├─ Check Timeline
└─ Access Contact
```

**Key Interactions:**
- **Avatar Hover**: Subtle rotation + enhanced glow effect
- **Hero Text**: Staggered fade-in animation (0.3s stagger between lines)
- **CTA Buttons**: Hover lifts element, shadow deepens
- **Mobile Behavior**: Hero text scales down, avatar size responsive

**Animation Timeline:**
1. Background fade-in: 0.6s
2. Avatar appearance: 0.8s (with scale effect)
3. Text reveal: 1.2s total (staggered)
4. Button visibility: 1.5s

---

### 1.2 Skill Tree Exploration Flow

**Flow Description:**
User explores the RPG-style skill tree, discovering skills, levels, and unlocking animations.

```
User Clicks on "Skills" Tab
        ↓
Load Skill Tree Component (tree fade-in)
        ↓
Display Skill Nodes in Hierarchical Layout
        ↓
User Hovers Over Skill Node
        ↓
├─ Locked Skill → Show Lock Icon + Requirements
├─ Unlocked Skill → Show Full Details + Level Indicator
└─ Grandmaster Skill → Special Glow + Title Badge
        ↓
User Clicks on Skill Node
        ↓
Expand Skill Card (modal or expanded panel)
        ↓
Display:
├─ Skill Name & Level
├─ Type Badge (Core Ability, Specialization, etc.)
├─ Description & Technologies
├─ Prerequisites (if applicable)
└─ Visual Icon with Animation
```

**Skill Node States:**
- **Locked**: Grayscale, dimmed, lock icon, "Requires: [prerequisite]"
- **Unlocked**: Full color, hover glow, clickable
- **Grandmaster**: Special crown/star icon, neon border, enhanced glow
- **Active Hover**: Elevated shadow, connection lines animate, particle effects

**Animation Details:**
- **Hover Glow**: 0.3s ease-out, radial gradient expand
- **Click Expand**: 0.4s spring animation
- **Particle Effects**: Subtle floating particles appear on Grandmaster skills
- **Connection Lines**: Animate when parent/child skills are hovered

---

### 1.3 Project Discovery Flow (Artifact Gallery)

**Flow Description:**
User browses projects presented as collectible artifacts/spellbooks.

```
User Clicks on "Projects" Tab
        ↓
Load Project Gallery (cards cascade in)
        ↓
Display Project Cards (categorized as Artifacts/Spellbooks)
        ↓
├─ Artifact Category: Strategic projects, achievements
├─ Spellbook Category: Technical implementations
└─ Quest Category: Major milestones
        ↓
User Hovers Over Project Card
        ↓
Card Animations:
├─ Scale: 1.0 → 1.05
├─ Shadow: Deepens
├─ Glow: Neon border appears
└─ Tech Tags: Slide up, color shift
        ↓
User Clicks on Project Card
        ↓
Modal Opens (with fade-in overlay)
        ↓
Display Full Project Details:
├─ Title & Description
├─ Technologies Used (with icons)
├─ Impact/Results
├─ Year & Category
└─ Related Links (if applicable)
        ↓
User Can:
├─ Close Modal (click outside or X button)
├─ Navigate to Next/Previous Project
└─ Copy Project Link
```

**Project Card States:**
- **Default**: Subtle shadow, muted colors
- **Hover**: Lifted (transform: translateY), shadow enhanced, border glow
- **Active/Selected**: Full glow effect, animated border
- **Mobile**: Cards stack, tap to open instead of click

**Modal Behavior:**
- Opens with fade-in + scale animation (0.3s)
- Content reveals staggered (0.1s between each section)
- Closes with fade-out + scale animation (0.2s)
- Touch-friendly on mobile (larger close button)

---

### 1.4 Experience Timeline/Journey Map Flow

**Flow Description:**
User explores career journey presented as chronological quest milestones.

```
User Clicks on "Timeline" or Scrolls to Timeline Section
        ↓
Load Timeline Component (vertical or horizontal layout)
        ↓
Display Timeline Entries Chronologically (BCA → MCA → Professional Roles)
        ↓
As User Scrolls Down:
        ↓
Trigger Scroll Animations (Intersection Observer):
├─ Timeline nodes fade-in + slide from side
├─ Connection lines animate (draw effect)
├─ Achievement badges pop-in
└─ Year markers appear with stagger
        ↓
User Hovers Over Timeline Node
        ↓
Display Expanded Details:
├─ Company/Institution Name
├─ Role & Duration
├─ Key Achievements
├─ Technologies Used
└─ XP/Level Indicator
        ↓
Timeline Continues with More Entries
```

**Scroll Trigger Details:**
- **Intersection Threshold**: 0.3 (trigger when 30% visible)
- **Node Animation**: Slide-in from left (odd entries) / right (even entries)
- **Duration**: 0.6s per node, staggered by 0.1s
- **Connection Lines**: SVG line animation (stroke-dasharray + stroke-dashoffset)
- **Achievement Icons**: Scale + fade-in effect (0.5s duration)

**Timeline States:**
- **Desktop**: Horizontal or vertical line with nodes on alternating sides
- **Tablet**: Vertical timeline, centered
- **Mobile**: Simplified vertical timeline, all nodes centered

---

### 1.5 Contact/Quest Submission Flow

**Flow Description:**
User submits contact form as a "quest submission" to the developer.

```
User Scrolls to Contact Section
        ↓
Display "Quest Submission Portal" Heading
        ↓
User Sees Google Form Embedded (iframe)
        ↓
Form Displays:
├─ Name Input
├─ Email Input
├─ Subject/Quest Type
├─ Message/Details
└─ Submit Button (styled as RPG quest button)
        ↓
User Fills Out Form
        ↓
User Clicks Submit
        ↓
Form Submits to Google Form Backend (no client-side processing)
        ↓
Response:
├─ Success: Show success toast notification
│  └─ Message: "Your quest has been recorded!"
│  └─ Animation: Fanfare particle effect
│  └─ Auto-dismiss: 5 seconds
└─ Error: Show error notification
   └─ Message: "Quest submission failed, try again"
```

**Form Styling:**
- **Container**: Glass panel effect (semi-transparent background)
- **Inputs**: Dark theme with glow on focus
- **Submit Button**: Styled as quest button, hover effect
- **Labels**: RPG-style descriptive text ("Brave Adventurer's Name", etc.)

**Mobile Behavior:**
- Form scales responsively
- Touch-friendly input fields (larger tap areas)
- Simplified styling on small screens
- Success message displayed prominently

---

### 1.6 Mobile vs Desktop Flow Differences

**Desktop Flow:**
```
Desktop Hero + Sidebar Navigation
        ↓
Full-width content areas
        ↓
Hover-based interactions (hover for details)
        ↓
Multi-column layouts where applicable
        ↓
Detailed animations (particles, complex paths)
```

**Mobile Flow:**
```
Mobile Hero with Hamburger Menu
        ↓
Toggle Navigation (slide-in from side)
        ↓
Full-width stacked content
        ↓
Tap-based interactions (tap to expand)
        ↓
Single-column layouts
        ↓
Simplified animations (reduced motion preference respected)
```

**Responsive Breakpoints:**
- **Mobile**: < 640px (Tailwind `sm`)
- **Tablet**: 640px - 1024px (Tailwind `md` to `lg`)
- **Desktop**: > 1024px (Tailwind `lg`, `xl`)

---

## 2. Component Interaction Flows

### 2.1 Avatar Interaction Flow

```
User Hovers Over Avatar Element
        ↓
Detect Hover Event (onMouseEnter)
        ↓
Trigger Avatar Animation:
├─ Scale: 1.0 → 1.1 (0.3s)
├─ Rotation: 0deg → 5deg
├─ Glow Effect: Increase opacity/shadow
└─ Particle Effect: Spawn floating particles around avatar
        ↓
User Moves Away (onMouseLeave)
        ↓
Reverse Animations (0.3s)
        ↓
Avatar Returns to Original State
```

**Avatar Component State:**
```
isHovering: boolean
├─ true → Apply transform + glow + particles
└─ false → Reset to default state
```

---

### 2.2 Button Interaction Flow

**CTA Button (Call-to-Action)**

```
Button at Rest
├─ Scale: 1.0
├─ Shadow: base
├─ Border: subtle glow
└─ Text: primary color

        ↓ (onMouseEnter)

Button Hover State
├─ Scale: 1.05
├─ Shadow: elevated
├─ Border: intense glow
├─ Text: lighter color
└─ Icon (if present): rotate 45deg

        ↓ (onMouseLeave)

Return to Rest State (0.2s)
```

**Click Behavior:**
```
User Clicks Button
        ↓
Ripple Effect Initiates (origin point)
        ↓
Ripple Expands (0.5s)
        ↓
Button Action Triggers (navigate, scroll, submit, etc.)
        ↓
Optional: Loading State (spinner animation) during async action
```

---

### 2.3 Skill Node Click & Expand Flow

```
User Clicks on Locked Skill Node
        ↓
Check if Skill is Locked:
├─ Locked:
│  ├─ Show Shake Animation (indicates locked state)
│  ├─ Display Tooltip: "Requires: [prerequisite skills]"
│  └─ No modal opens
└─ Unlocked:
   ├─ Expand Animation Triggers
   ├─ Modal/Panel Opens (0.4s spring animation)
   └─ Content Fades In (staggered)

Modal Content Load Sequence:
1. Skill Icon (0.1s)
2. Skill Name & Level (0.2s)
3. Type Badge (0.3s)
4. Description (0.4s)
5. Related Skills (0.5s)
6. Technologies (0.6s)
```

---

### 2.4 Project Card Modal Flow

```
User Clicks Project Card
        ↓
Overlay Fades In (0.2s, black semi-transparent)
        ↓
Modal Scales In (0.3s spring, from card center)
        ↓
Content Reveals (staggered, each section 0.1s apart):
├─ Project Image/Banner
├─ Title & Category Badge
├─ Description
├─ Technologies List (with icons)
├─ Impact Statement
└─ Action Buttons (View Project, GitHub Link, etc.)

While Modal Open:
├─ Body scroll is locked (overflow: hidden)
├─ Clicking outside modal closes it
├─ Pressing Escape key closes modal
└─ Can navigate to next/prev project with arrow buttons

        ↓ (User Closes Modal)

Content Fades Out (0.2s)
Modal Scales Out (0.2s)
Overlay Fades Out (0.2s)
Body scroll is restored
```

---

## 3. Data Flow Architecture

### 3.1 Content Data Structure

**Source**: `/src/data/` (TypeScript files)

```
/src/data/
├── skills.ts         → Skill tree data
├── projects.ts       → Project/artifact data
├── experience.ts     → Timeline entries
├── social.ts         → Contact & social links
└── constants.ts      → Global constants
```

**Skills Data Structure:**
```typescript
interface Skill {
  id: string;                    // unique identifier
  name: string;                  // "C#/.NET"
  level: number;                 // 1-5
  type: SkillType;              // "Core Ability" | "Specialization" | etc.
  description: string;           // detailed description
  icon: string;                  // icon name or SVG
  prerequisites?: string[];      // parent skill IDs
  technologies?: string[];       // related technologies
  yearsOfExperience?: number;   // professional experience years
  certifications?: string[];     // relevant certifications
}
```

**Projects Data Structure:**
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "Artifact" | "Spellbook" | "Quest";
  technologies: string[];
  impact: string;
  year: number;
  featured: boolean;
  image?: string;                // path to image (optional)
  links?: {
    github?: string;
    demo?: string;
    docs?: string;
  };
}
```

**Timeline Entry Structure:**
```typescript
interface TimelineEntry {
  id: string;
  title: string;                 // "Senior Developer" or "MCA"
  organization: string;          // "Centiro Solutions" or "University"
  type: "education" | "experience";
  startDate: string;            // "2020-01"
  endDate?: string;             // "2024-12" (undefined = current)
  description: string;
  achievements: string[];
  technologies: string[];
  level: number;                // XP level indicator
}
```

### 3.2 Data Loading Flow

```
App Component Mounts
        ↓
Import Data Files from /src/data/
        ↓
Parse TypeScript Objects (compile-time, not runtime)
        ↓
Data Available in Component Props
        ↓
No External API Calls (Static First)
        ↓
Components Render with Loaded Data
```

**Benefits:**
- Zero network requests
- Fully static site generation
- Fast initial load
- Perfect for GitHub Pages

---

## 4. Animation & Motion Flows

### 4.1 Page Load Animations

**Initial Load Sequence:**

```
Page Load Start (0.0s)
        ↓
Background Fade In (0.0s - 0.6s)
├─ Opacity: 0 → 1
└─ Duration: 0.6s ease-out
        ↓
Hero Content Cascade (staggered):
├─ Avatar Appears (0.3s - 1.1s)
│  ├─ Scale: 0.5 → 1.0
│  ├─ Opacity: 0 → 1
│  └─ Duration: 0.8s
├─ Main Heading (0.5s - 1.3s)
│  ├─ Y Translate: 20px → 0px
│  ├─ Opacity: 0 → 1
│  └─ Duration: 0.8s
├─ Subtitle (0.7s - 1.5s)
│  ├─ Y Translate: 20px → 0px
│  ├─ Opacity: 0 → 1
│  └─ Duration: 0.8s
└─ CTA Buttons (0.9s - 1.7s)
   ├─ Y Translate: 30px → 0px
   ├─ Opacity: 0 → 1
   └─ Duration: 0.8s
        ↓
Navigation Menu Ready (1.2s)
```

---

### 4.2 Scroll-Triggered Animations

**IntersectionObserver Implementation:**

```
Element Enters Viewport (Intersection Threshold: 0.3)
        ↓
Trigger Animation:
├─ Timeline Nodes: Slide in from side (0.6s)
├─ Achievement Icons: Scale + fade (0.5s)
├─ Text Content: Fade in (0.4s)
└─ Statistics: Count-up animation (if numbers present)
        ↓
Element Leaves Viewport
        ↓
Reset Animations (optional - can be configured to stay animated)
```

**Scroll Animation Staggering:**
```
First Element: Triggers at 0.0s
Second Element: Triggers at +0.1s
Third Element: Triggers at +0.2s
...and so on
```

---

### 4.3 Hover Effects & Micro-interactions

**Skill Node Hover:**
```
Mouse Enters Skill Node (onMouseEnter)
        ↓
Duration: 0.3s
├─ Scale: 1.0 → 1.08
├─ Shadow: base → elevated
├─ Border Color: dim → bright neon
├─ Background: slight color shift
└─ Connected Lines: Animate (opacity + color)
        ↓
Mouse Leaves Node
        ↓
Reverse animations (0.3s ease-out)
```

**Button Hover with Ripple:**
```
Mouse Enters Button
        ↓
Duration: 0.2s
├─ Background: Slight lighten
├─ Border: Glow intensifies
└─ Shadow: Deepen
        ↓
Click on Button
        ↓
Ripple Effect:
├─ Origin: Mouse position
├─ Radius: Expand over 0.5s
├─ Opacity: 1.0 → 0 (fade out during expansion)
└─ Creates "water drop" effect
```

**Project Card Hover:**
```
Mouse Enters Card
        ↓
Duration: 0.3s spring animation
├─ Transform: translateY(-10px)
├─ Shadow: increase depth
├─ Border: Add neon glow
├─ Tech Tags: Slide up + color shift
└─ Optional: Slight image zoom (1.0 → 1.05)
        ↓
Mouse Leaves Card
        ↓
Reverse animations smoothly
```

---

### 4.4 Unlock & Achievement Animations

**Skill Unlock Animation:**

```
Prerequisite Skill Unlocked
        ↓
Dependent Skill Receives Event
        ↓
Unlock Animation Sequence (2.0s total):
├─ Particles Spawn (0.0s - 0.5s)
│  └─ Small particles float upward, fade
├─ Glow Pulse (0.3s - 1.0s)
│  └─ Radial glow expands from center
├─ Border Glow Animate (0.5s - 1.5s)
│  └─ Border cycles through neon colors
├─ Scale Pulse (0.7s - 1.2s)
│  └─ Scale: 1.0 → 1.15 → 1.0
└─ Text Glow (0.8s - 1.3s)
   └─ Text color brightens then normalizes
        ↓
Skill Now Shows as Unlocked
```

**Achievement Toast Notification:**

```
Achievement Unlocked Event Triggered
        ↓
Toast Component Mounts
        ↓
Toast Animation Sequence (0.3s total):
├─ Slide in from right
├─ Opacity: 0 → 1
└─ Elevation shadow appears
        ↓
Display Achievement Details (3s duration)
├─ Icon (animated)
├─ Title
├─ Description
└─ Particle effects (subtle)
        ↓
Auto-dismiss or User Closes
        ↓
Toast Animation Out (0.3s):
├─ Slide out to right
├─ Opacity: 1 → 0
└─ Elevation shadow disappears
```

---

### 4.5 Framer Motion Configuration

**Key Animation Variants:**

```typescript
// Fade In/Out
fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
}

// Slide & Fade
slideInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20 }
}

// Glow Effect (via boxShadow)
glowVariant = {
  initial: { boxShadow: "0 0 0 rgba(0, 217, 255, 0)" },
  hover: { boxShadow: "0 0 20px rgba(0, 217, 255, 0.6)" },
  transition: { duration: 0.3 }
}

// Spring Animation (natural feel)
springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 10,
  duration: 0.4
}
```

---

## 5. Navigation & Routing Flow

### 5.1 React Router Structure

**Route Hierarchy:**

```
/ (Root - App Layout)
├── / (Home/Hero page)
├── /skills (Skill Tree page)
├── /projects (Project Gallery page)
├── /timeline (Experience Timeline page)
├── /contact (Contact/Quest Submission page)
└── /* (404 Not Found)
```

**Route Navigation Flow:**

```
User Clicks Navigation Link
        ↓
React Router Updates Location
        ↓
Route Component Changes
        ↓
Page Transition Animation Triggers:
├─ Current Page Fades Out (0.2s)
├─ New Page Fades In (0.3s)
└─ Scroll to Top (smooth scroll)
        ↓
New Page Content Mounts
        ↓
Scroll-triggered animations ready
```

**Deep Linking:**

```
User Visits URL: /Portfolio/skills#sql-management
        ↓
Page Loads, Router Parses Route
        ↓
Skills Component Renders
        ↓
Hash Fragment (#sql-management) Triggers Scroll-to-element
        ↓
Element Highlights or Focuses
```

---

### 5.2 Mobile Navigation Flow

**Hamburger Menu:**

```
Mobile User Views Page
        ↓
Hamburger Icon Visible (top-left)
        ↓
User Taps Hamburger
        ↓
Sidebar Menu Slides In (from left, 0.3s)
├─ Overlay appears (semi-transparent black)
├─ Menu items fade in (staggered)
└─ Hamburger icon changes to X
        ↓
User Taps Menu Item
        ↓
Navigate to Page
        ↓
Sidebar Slides Out (0.2s)
        ↓
New Page Content Loads
        ↓
Menu Auto-closes (optional: can keep open)
```

**Sidebar Menu States:**

```
Desktop (≥1024px):
├─ Always Visible (optional)
├─ Full Height Sidebar
├─ Horizontal Navigation (top bar)
└─ No Hamburger Icon

Tablet (640px - 1024px):
├─ Hamburger Icon Visible
├─ Sidebar Can Be Toggled
└─ Partial Sidebar Width

Mobile (<640px):
├─ Hamburger Icon Only
├─ Full-Screen Overlay Sidebar
└─ Overlay Closes on Item Click
```

---

## 6. State Management Flow

### 6.1 Zustand Store Architecture

**Skill Tree State:**

```typescript
// Store Definition
interface SkillState {
  unlockedSkills: Set<string>;
  expandedSkill: string | null;
  hoveredSkill: string | null;
}

interface SkillActions {
  unlockSkill: (skillId: string) => void;
  expandSkill: (skillId: string) => void;
  collapseSkill: () => void;
  hoverSkill: (skillId: string | null) => void;
}
```

**Skill Tree State Flow:**

```
User Clicks Skill Node
        ↓
Action: expandSkill(skillId)
        ↓
Store Updates:
├─ expandedSkill = skillId
└─ hoveredSkill = null
        ↓
Component Re-renders:
├─ Modal Opens for Skill
├─ Details Display
└─ Connection animations trigger
        ↓
User Closes Modal
        ↓
Action: collapseSkill()
        ↓
Store Updates:
└─ expandedSkill = null
        ↓
Modal Closes, Component Updates
```

**Achievement/Unlock State:**

```typescript
interface AchievementState {
  unlockedAchievements: Set<string>;
  recentlyUnlocked: string[];
}

interface AchievementActions {
  unlockAchievement: (id: string) => void;
  removeRecentlyUnlocked: (id: string) => void;
}
```

**Achievement Flow:**

```
Skill Unlocked Event
        ↓
Action: unlockAchievement("skill_unlocked")
        ↓
Store Updates:
├─ unlockedAchievements.add(id)
└─ recentlyUnlocked.push(id)
        ↓
Achievement Toast Component Reads Store
        ↓
Toast Displays with Animation
        ↓
After 5 seconds:
        ↓
Action: removeRecentlyUnlocked(id)
        ↓
Toast Fades Out
```

---

### 6.2 UI State Management

**Theme/Preference State:**

```typescript
interface UIState {
  sidebarOpen: boolean;
  darkMode: boolean;
  reducedMotion: boolean;
}

interface UIActions {
  toggleSidebar: () => void;
  setDarkMode: (value: boolean) => void;
  setReducedMotion: (value: boolean) => void;
}
```

**Sidebar Toggle Flow:**

```
Mobile User Taps Hamburger
        ↓
Action: toggleSidebar()
        ↓
Store Updates:
└─ sidebarOpen = !sidebarOpen
        ↓
Component Re-renders with Conditional Animation
        ↓
If sidebarOpen = true:
├─ Sidebar Slides In
└─ Overlay Appears
        ↓
If sidebarOpen = false:
├─ Sidebar Slides Out
└─ Overlay Disappears
```

**Reduced Motion Handling:**

```
Browser Detects Prefers-Reduced-Motion
        ↓
useEffect Hook Detects Media Query
        ↓
Action: setReducedMotion(true)
        ↓
Store Updates & All Components Adjust:
├─ Animations: Durations shortened to 0.1s
├─ Transitions: Duration reduced
├─ Complex Animations: Simplified or skipped
└─ Particles: Disabled
        ↓
User Experience Remains Smooth, Accessible
```

---

## 7. Deployment & Build Flow

### 7.1 GitHub Actions CI/CD Flow

**Trigger Event:**

```
Developer Pushes to 'main' Branch
        ↓
GitHub Detects Push Event
        ↓
GitHub Actions Workflow Activates (.github/workflows/deploy.yml)
```

**Build Process:**

```
Workflow Starts
        ↓
Job: Build & Deploy Begins
├─ OS: Ubuntu Latest
├─ Node.js Version: 18.x (or latest stable)
└─ Timeout: 30 minutes

        ↓ (Step 1: Setup)

Checkout Repository Code
        ↓
Setup Node.js 18.x
        ↓
Cache npm Dependencies
```

**Installation & Build:**

```
        ↓ (Step 2: Install)

npm install
        ↓ (Installs all dependencies)

        ↓ (Step 3: Build)

npm run build
        ↓
Vite Bundles React App:
├─ Transpiles TypeScript → JavaScript
├─ Bundles CSS (Tailwind)
├─ Minifies Code
├─ Creates dist/ folder with static assets
└─ Generates source maps (optional)

        ↓ (Step 4: Deploy)

Deploy to GitHub Pages:
├─ Source: dist/ folder
├─ Target: gh-pages branch
├─ URL: https://shailendra-rana.github.io/Portfolio/
└─ Custom Domain: (optional, if configured)
```

**Success & Failure Handling:**

```
Build Completes
        ↓
├─ Success:
│  ├─ Site Deployed to GitHub Pages
│  ├─ Live URL Updated
│  ├─ GitHub Actions Status: ✓ Passed
│  └─ Workflow Complete
└─ Failure:
   ├─ Workflow Stops at Failed Step
   ├─ GitHub Actions Status: ✗ Failed
   ├─ Notification Sent (email to committer)
   ├─ Developer Checks Logs
   └─ Developer Fixes & Pushes Again
```

---

### 7.2 Vite Build Configuration

**Build Command:**

```bash
npm run build
```

**Vite Build Process:**

```
1. Entry Point: src/main.tsx
2. Dependency Resolution
3. TypeScript Compilation
4. JSX Transformation (React)
5. CSS Processing (Tailwind)
6. Code Splitting (lazy routes)
7. Asset Optimization
8. Minification & Uglification
9. Output: dist/ folder
```

**Output Structure:**

```
dist/
├── index.html          → Main HTML file
├── assets/
│   ├── index-[hash].js → Main bundle
│   ├── [chunk]-[hash].js → Code-split chunks
│   ├── style-[hash].css → Bundled CSS
│   └── images/         → Optimized images
└── Portfolio/          → GitHub Pages base path
```

---

### 7.3 GitHub Pages Deployment

**Configuration:**

```
Repository: Shailendra-Rana/Portfolio
Branch: gh-pages (auto-created by workflow)
Base URL: /Portfolio/
Full URL: https://shailendra-rana.github.io/Portfolio/
```

**vite.config.ts Configuration:**

```typescript
export default {
  base: '/Portfolio/',  // GitHub Pages path
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false,  // Disable source maps in production
  },
}
```

**Deployment Steps:**

```
1. Workflow Copies dist/ Contents
2. Commits to gh-pages Branch
3. GitHub Pages Service Detects Update
4. Site Rebuilds & Publishes
5. Available at: https://shailendra-rana.github.io/Portfolio/
6. Cache Invalidates, New Version Served
```

---

## Summary Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    GAMIFIED PORTFOLIO FLOWS                     │
└─────────────────────────────────────────────────────────────────┘

User Interaction Layer:
  ├─ Landing → Hero Page
  ├─ Explore Skills → Skill Tree
  ├─ Browse Projects → Project Gallery
  ├─ View Timeline → Experience Journey
  └─ Contact → Quest Submission Form

Component Interaction Layer:
  ├─ Avatar Hover Effects
  ├─ Button Ripple & Glow
  ├─ Skill Node Expand/Collapse
  ├─ Project Card Modal
  └─ Timeline Scroll Triggers

Data Layer (Static):
  ├─ /src/data/skills.ts
  ├─ /src/data/projects.ts
  ├─ /src/data/experience.ts
  └─ /src/data/constants.ts

State Management (Zustand):
  ├─ Skill Unlocks
  ├─ Expanded Modals
  ├─ Achievements
  └─ UI Preferences

Animation Layer (Framer Motion):
  ├─ Page Transitions
  ├─ Scroll Triggers
  ├─ Hover Effects
  └─ Achievement Animations

Deployment Layer (GitHub Actions):
  ├─ Build (Vite)
  ├─ Test (optional)
  ├─ Deploy (GitHub Pages)
  └─ Live Site

```

---

**End of Documentation**

Generated: 2026-03-20
Last Updated: 2026-03-20
Version: 1.0
