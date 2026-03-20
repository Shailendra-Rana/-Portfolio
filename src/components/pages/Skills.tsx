import { motion } from 'framer-motion'
import { Zap, Award } from 'lucide-react'
import { SKILLS } from '@data/skills'

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Skills & Expertise</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and proficiencies
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.id}
              variants={itemVariants}
              className="card-hover group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{skill.description}</p>
                </div>
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
              </div>

              {/* Level indicator */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-600 uppercase">Level {skill.level}</span>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 w-2 rounded-full ${
                          i < skill.level ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {(skill.technologies ?? []).slice(0, 3).map(tech => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
                {(skill.technologies ?? []).length > 3 && (
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                    +{(skill.technologies ?? []).length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 card bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Continuous Learning</h3>
              <p className="text-gray-600">
                I'm constantly updating my skills and exploring emerging technologies. These proficiencies represent hands-on experience and demonstrated expertise across diverse domains.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
