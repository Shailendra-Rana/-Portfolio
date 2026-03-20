import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight, Github, Linkedin, ChevronDown,
  Code2, Layers, Cloud, Database, Sparkles,
  Code, Palette, GitBranch, Activity, CheckCircle,
  GraduationCap, Briefcase, Mail, ChevronUp,
  Sun, Moon,
} from 'lucide-react'
import { HERO_CONTENT, PORTFOLIO_OWNER, NAV_ITEMS } from '@data/constants'
import { PROJECTS } from '@data/projects'
import { SKILLS } from '@data/skills'
import { getAllTimelineEntries } from '@data/experience'
import { useUIStore } from '@store'

// ── Skill icon map ────────────────────────────────────────────────────────────
const SKILL_ICON_MAP: Record<string, React.ReactNode> = {
  'code-2':       <Code2 className="w-5 h-5" />,
  'layers':       <Layers className="w-5 h-5" />,
  'cloud':        <Cloud className="w-5 h-5" />,
  'database':     <Database className="w-5 h-5" />,
  'sparkles':     <Sparkles className="w-5 h-5" />,
  'code':         <Code className="w-5 h-5" />,
  'palette':      <Palette className="w-5 h-5" />,
  'git-branch':   <GitBranch className="w-5 h-5" />,
  'activity':     <Activity className="w-5 h-5" />,
  'check-circle': <CheckCircle className="w-5 h-5" />,
}

// ── Typewriter hook ───────────────────────────────────────────────────────────
const ROLES = [
  'Senior Backend Developer',
  'AI-Driven Developer',
  '.NET 8 Specialist',
  'Clean Architecture Expert',
  'API & Microservices Engineer',
]

function useTypewriter(words: string[], typeSpeed = 80, deleteSpeed = 40, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typeSpeed)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), deleteSpeed)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs])

  return displayed
}

// ── Count-up hook ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1500, triggered = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!triggered) return
    let start = 0
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, triggered])

  return count
}

// ── Scroll-spy hook ───────────────────────────────────────────────────────────
function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [ids])

  return active
}

// ── Stat item (count-up) ──────────────────────────────────────────────────────
function StatItem({ value, label, triggered }: { value: string; label: string; triggered: boolean }) {
  const isNumeric = /^\d+/.test(value)
  const numericPart = isNumeric ? parseInt(value) : 0
  const suffix = isNumeric ? value.replace(String(numericPart), '') : ''
  const count = useCountUp(numericPart, 1500, triggered)

  return (
    <div className="text-center">
      <p className="text-5xl font-bold text-theme-accent mb-2">
        {isNumeric ? `${count}${suffix}` : value}
      </p>
      <p className="text-theme-muted font-medium">{label}</p>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
const NAV_SECTION_IDS = ['skills', 'projects', 'timeline', 'contact']

export default function Portfolio() {
  const role = useTypewriter(ROLES)
  const activeSection = useScrollSpy(NAV_SECTION_IDS)
  const { darkMode, setDarkMode } = useUIStore()

  // Show floating nav after scrolling past hero (~100px)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Trigger count-up when stats section is in view
  const statsRef = useRef<HTMLDivElement>(null)
  const [statsTrigger, setStatsTrigger] = useState(false)
  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsTrigger(true) },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  }

  const timelineEntries = getAllTimelineEntries()
  const featuredProjects = PROJECTS.filter(p => p.featured)

  // Show all projects toggle
  const [showAllProjects, setShowAllProjects] = useState(false)
  const displayedProjects = showAllProjects ? PROJECTS : featuredProjects

  const STATS = [
    { label: 'Projects Completed', value: `${PROJECTS.length}+` },
    { label: 'Certifications',     value: '5' },
    { label: 'Skills',             value: `${SKILLS.length}` },
    { label: 'Years Experience',   value: `${Math.floor(PORTFOLIO_OWNER.yearsOfExperience)}+` },
  ]

  return (
    <div className="bg-theme-bg">

      {/* ── FLOATING NAV ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {scrolled && (
          <motion.nav
            key="floating-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-theme-surface/90 backdrop-blur-sm border border-theme-accent/20 rounded-full px-2 py-1.5 flex gap-1"
          >
            {NAV_ITEMS.filter(n => n.id !== 'home').map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-theme-accent text-white'
                    : 'text-theme-muted hover:text-theme-accent'
                }`}
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Background: dot grid + blobs */}
        <div className="absolute inset-0 -z-10">
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: 'radial-gradient(circle, var(--color-accent) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="absolute top-0 -left-40 w-80 h-80 bg-orange-900/20 rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-orange-800/20 rounded-full blur-3xl opacity-20" />
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-theme-accent overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt="Profile photo"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="text-theme-accent text-lg md:text-xl font-semibold mb-3">
            {HERO_CONTENT.greeting}
          </motion.p>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 text-theme-text leading-tight">
            {HERO_CONTENT.title}
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-theme-muted mb-6 h-10 flex items-center justify-center">
            <span>{role}</span>
            <span className="ml-0.5 inline-block w-0.5 h-7 bg-theme-accent animate-pulse" />
          </motion.h2>

          <motion.p variants={itemVariants} className="text-theme-muted text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            {HERO_CONTENT.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-8 flex-col sm:flex-row">
            <a
              href="#contact"
              className="px-8 py-4 bg-theme-accent text-white font-semibold rounded-lg hover:bg-theme-accent-hover transition-colors flex items-center justify-center gap-2 group"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-theme-accent text-theme-accent font-semibold rounded-lg hover:border-theme-accent-hover hover:bg-theme-accent/10 transition-colors flex items-center justify-center gap-2 group"
            >
              View Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-4">
            <a
              href={PORTFOLIO_OWNER.github || 'https://github.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-theme-surface hover:bg-theme-accent/10 transition-colors text-theme-accent hover:text-theme-accent-hover border border-theme-accent/30 hover:border-theme-accent"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={PORTFOLIO_OWNER.linkedin || 'https://linkedin.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-theme-surface hover:bg-theme-accent/10 transition-colors text-theme-accent hover:text-theme-accent-hover border border-theme-accent/30 hover:border-theme-accent"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* ── SCROLL INDICATOR ─────────────────────────────────────────── */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-theme-accent/60"
          animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? 10 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' as const }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── SKILLS SECTION ───────────────────────────────────────────────── */}
      <section id="skills" className="py-24 px-4 bg-theme-bg scroll-mt-0">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-theme-text mb-4">Skills & Expertise</h2>
            <p className="text-theme-muted text-lg max-w-2xl mx-auto">
              Technical capabilities and proficiencies developed through hands-on experience
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {SKILLS.map((skill) => (
              <motion.div key={skill.id} variants={itemVariants} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <div className="skill-card card-hover bg-theme-surface p-6 rounded-lg border border-theme-border cursor-pointer h-96 flex flex-col">

                  {/* Icon + title row */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-theme-accent/10 border border-theme-accent/20 flex items-center justify-center text-theme-accent flex-shrink-0">
                      {SKILL_ICON_MAP[skill.icon] ?? <Code2 className="w-5 h-5" />}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-theme-text leading-tight">
                      {skill.name}
                    </h3>
                  </div>

                  <div className="flex-1">
                    <p className="text-xs md:text-sm text-theme-muted leading-snug skill-description mb-3">
                      {skill.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-theme-muted uppercase">Level {skill.level}</span>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 w-2 rounded-full ${i < skill.level ? 'bg-theme-accent' : 'bg-theme-border'}`}
                          />
                        ))}
                      </div>
                    </div>
                    {skill.yearsOfExperience !== undefined && (
                      <p className="text-xs text-theme-muted mt-2">
                        {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'yr' : 'yrs'} experience
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    <div className="w-full flex flex-wrap gap-1.5 tech-badges-visible">
                      {(skill.technologies ?? []).slice(0, 3).map(tech => (
                        <span key={tech} className="px-2 py-0.5 text-xs rounded-full bg-theme-badge-bg text-theme-badge-text border border-theme-border">
                          {tech}
                        </span>
                      ))}
                      {(skill.technologies ?? []).length > 3 && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-theme-badge-bg text-theme-badge-text border border-theme-border">
                          +{(skill.technologies ?? []).length - 3}
                        </span>
                      )}
                    </div>
                    <div className="w-full flex flex-wrap gap-1.5 tech-badges-hidden">
                      {(skill.technologies ?? []).map(tech => (
                        <span key={tech} className="px-2 py-0.5 text-xs rounded-full bg-theme-badge-bg text-theme-badge-text border border-theme-border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS SECTION ─────────────────────────────────────────────── */}
      <section id="projects" className="py-24 px-4 bg-theme-surface scroll-mt-0">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-theme-text mb-4">Projects</h2>
            <p className="text-theme-muted text-lg max-w-2xl mx-auto">
              Selection of projects showcasing my expertise and problem-solving abilities
            </p>
          </motion.div>

          <AnimatePresence initial={false}>
            <motion.div
              className="flex flex-wrap justify-center gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {displayedProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="w-full lg:w-[calc(50%-16px)]"
                >
                  <div className="card-hover bg-theme-bg p-6 md:p-8 rounded-lg border border-theme-border cursor-pointer flex flex-col h-full">
                    {/* Featured badge */}
                    {project.featured && (
                      <span className="self-start mb-3 px-2.5 py-0.5 text-xs font-bold rounded-full bg-theme-accent/20 text-theme-accent border border-theme-accent/30 uppercase tracking-wide">
                        Featured
                      </span>
                    )}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-theme-text mb-3">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base text-theme-muted mb-4 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mb-4">
                      <p className="text-theme-text text-sm md:text-base leading-relaxed">
                        {project.impact}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs rounded-full bg-theme-badge-bg text-theme-badge-text border border-theme-border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Show More / Show Less */}
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setShowAllProjects(prev => !prev)}
              className="flex items-center gap-2 px-6 py-3 border border-theme-accent/40 text-theme-accent font-semibold rounded-full hover:bg-theme-accent/10 hover:border-theme-accent transition-colors text-sm"
            >
              {showAllProjects ? (
                <>Show Less <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Show All {PROJECTS.length} Projects <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── TIMELINE SECTION ─────────────────────────────────────────────── */}
      <section id="timeline" className="py-24 px-4 bg-theme-bg scroll-mt-0">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-theme-text mb-4">Experience & Education</h2>
            <p className="text-theme-muted text-lg">Timeline of my professional journey and learning</p>
          </motion.div>

          <div className="relative">
            {/* Continuous vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-theme-border" />

            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {timelineEntries.map((entry) => (
                <motion.div key={entry.id} variants={itemVariants} className="relative pl-8">
                  <div className="absolute left-0 top-5 w-4 h-4 rounded-full bg-theme-accent border-2 border-theme-bg" />

                  <motion.div className="card-hover bg-theme-surface p-6 md:p-8 rounded-lg border border-theme-border cursor-pointer">
                    {/* Type badge */}
                    <div className="flex items-center gap-2 mb-3">
                      {entry.type === 'education' ? (
                        <span className="flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          <GraduationCap className="w-3.5 h-3.5" />
                          Education
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-theme-accent/10 text-theme-accent border border-theme-accent/20">
                          <Briefcase className="w-3.5 h-3.5" />
                          Experience
                        </span>
                      )}
                    </div>

                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-theme-text mb-1">{entry.title}</h3>
                        <p className="text-theme-accent font-semibold text-sm md:text-base">{entry.organization}</p>
                      </div>
                      <span className="px-3 py-1 text-xs rounded-full bg-theme-accent/20 text-theme-accent font-semibold flex-shrink-0 border border-theme-accent/30 ml-3">
                        {entry.period ?? `${new Date(entry.startDate).getFullYear()}${entry.endDate ? ` – ${new Date(entry.endDate).getFullYear()}` : ' – Present'}`}
                      </span>
                    </div>
                    {entry.description && (
                      <p className="text-theme-text text-sm md:text-base leading-relaxed mt-3">{entry.description}</p>
                    )}
                    {entry.achievements && entry.achievements.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-theme-border">
                        <ul className="space-y-2">
                          {entry.achievements.slice(0, 3).map((achievement, i) => (
                             <li key={i} className="text-sm flex items-start gap-2">
                              <span className="text-theme-accent font-bold mt-0.5 flex-shrink-0">•</span>
                              <span className="text-theme-text">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS SECTION ────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-theme-surface">
        <div className="container mx-auto">
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <StatItem value={stat.value} label={stat.label} triggered={statsTrigger} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ──────────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-4 bg-theme-bg scroll-mt-0">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-theme-text mb-4">Let's Connect</h2>
            <p className="text-theme-muted text-lg">Have a project in mind or just want to chat? I'd love to hear from you.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-theme-surface p-8 rounded-lg border border-theme-border text-center"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-theme-text mb-2">Get in Touch</h3>
              <p className="text-theme-muted mb-2">Reach out to me via email or social media</p>
              <p className="flex items-center justify-center gap-2 text-theme-muted font-medium text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                Click "Send Email" to connect
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => { window.location.href = `mailto:${PORTFOLIO_OWNER.email}` }}
                className="block w-full px-8 py-4 bg-theme-accent text-white font-semibold rounded-lg hover:bg-theme-accent-hover transition-colors cursor-pointer"
              >
                Send Email
              </button>
              <div className="flex gap-4 justify-center">
                <a
                  href={PORTFOLIO_OWNER.github || 'https://github.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 border-2 border-theme-accent text-theme-accent font-semibold rounded-lg hover:border-theme-accent-hover hover:bg-theme-accent/10 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={PORTFOLIO_OWNER.linkedin || 'https://linkedin.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 border-2 border-theme-accent text-theme-accent font-semibold rounded-lg hover:border-theme-accent-hover hover:bg-theme-accent/10 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── THEME TOGGLE FAB ──────────────────────────────────────────────── */}
      <motion.button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-theme-surface border border-theme-border shadow-lg flex items-center justify-center text-theme-accent hover:bg-theme-accent hover:text-white transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.button>

    </div>
  )
}
