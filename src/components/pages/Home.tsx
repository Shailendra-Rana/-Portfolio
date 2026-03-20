/**
 * Home.tsx — NOT currently used/routed.
 * All portfolio content lives in Portfolio.tsx (single-page layout).
 * Keeping this file in case multi-page routing is added later.
 * Social links fixed to use PORTFOLIO_OWNER data instead of hardcoded URLs.
 */
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { HERO_CONTENT, PORTFOLIO_OWNER } from '@data/constants'
import { getFeaturedProjects } from '@data/projects'
import { SKILLS } from '@data/skills'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
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

  const featuredProjects = getFeaturedProjects()

  return (
    <div className="bg-[#0D0D0D]">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-40 w-80 h-80 bg-orange-900/20 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-orange-800/20 rounded-full blur-3xl opacity-20"></div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Avatar */}
          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-[#FF5F1F] overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt="Profile photo"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={itemVariants} className="text-[#FF5F1F] text-lg md:text-xl font-semibold mb-3">
            {HERO_CONTENT.greeting}
          </motion.p>

          {/* Main Title */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 text-[#F2F2F7] leading-tight">
            {HERO_CONTENT.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-gray-400 mb-6">
            {HERO_CONTENT.subtitle}
          </motion.h2>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            {HERO_CONTENT.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/skills"
              className="px-8 py-4 bg-[#FF5F1F] text-white font-semibold rounded-lg hover:bg-[#FF8C4A] transition-all flex items-center justify-center gap-2 group"
            >
              Explore Skills
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 border-2 border-[#FF5F1F] text-[#FF5F1F] font-semibold rounded-lg hover:border-[#FF8C4A] hover:bg-[#FF5F1F]/10 transition-all flex items-center justify-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Social Links — use PORTFOLIO_OWNER data, not hardcoded URLs */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4">
            <a
              href={PORTFOLIO_OWNER.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#1A1A1B] hover:bg-[#FF5F1F]/10 transition-colors text-[#FF5F1F] hover:text-[#FF8C4A] border border-[#FF5F1F]/30 hover:border-[#FF5F1F]"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={PORTFOLIO_OWNER.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#1A1A1B] hover:bg-[#FF5F1F]/10 transition-colors text-[#FF5F1F] hover:text-[#FF8C4A] border border-[#FF5F1F]/30 hover:border-[#FF5F1F]"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-4 bg-[#1A1A1B]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#F2F2F7] mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg">Showcase of my best work and achievements</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-hover group"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#FF5F1F]/20 text-[#FF5F1F] border border-[#FF5F1F]/30">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#F2F2F7] mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-gray-700 text-gray-300 border border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#FF5F1F] text-[#FF5F1F] font-semibold rounded-lg hover:bg-[#FF5F1F]/10 transition-all group"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats — use dynamic data */}
      <section className="py-24 px-4 bg-[#0D0D0D]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', value: `${PORTFOLIO_OWNER.yearsOfExperience}+` },
              { label: 'Projects', value: `${featuredProjects.length}+` },
              { label: 'Skills', value: `${SKILLS.length}` },
              { label: 'Clients', value: '5+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-5xl font-bold text-[#FF5F1F] mb-2">{stat.value}</p>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
