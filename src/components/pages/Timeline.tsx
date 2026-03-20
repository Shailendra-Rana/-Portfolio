import { motion } from 'framer-motion'
import { Calendar, Award, BookOpen } from 'lucide-react'
import { getAllTimelineEntries } from '@data/experience'

export default function Timeline() {
  const timelineEntries = getAllTimelineEntries()

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Timeline</h1>
          <p className="text-gray-600 text-lg">My educational and professional journey</p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {timelineEntries.map((entry, index) => (
            <motion.div
              key={`${entry.id}-${index}`}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline dot and line */}
              <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2">
                <div className={`h-4 w-4 rounded-full border-4 border-white ${
                  entry.type === 'education' ? 'bg-blue-600' : 'bg-purple-600'
                } shadow-lg`}></div>
                {index !== timelineEntries.length - 1 && (
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 h-16 md:h-24 w-1 bg-gradient-to-b from-gray-300 to-gray-200"></div>
                )}
              </div>

              {/* Content */}
              <motion.div
                className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'} md:w-1/2`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-lg ${
                        entry.type === 'education' ? 'bg-blue-100' : 'bg-purple-100'
                      }`}>
                        {entry.type === 'education' ? (
                          <BookOpen className={`w-5 h-5 ${
                            entry.type === 'education' ? 'text-blue-600' : 'text-purple-600'
                          }`} />
                        ) : (
                          <Award className="w-5 h-5 text-purple-600" />
                        )}
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wide ${
                        entry.type === 'education' ? 'text-blue-600' : 'text-purple-600'
                      }`}>
                        {entry.type === 'education' ? 'Education' : 'Experience'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">
                        {entry.startDate}
                        {entry.endDate && ` - ${entry.endDate}`}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">{entry.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{entry.organization}</p>

                  {entry.description && (
                    <p className="text-gray-700 mb-4 leading-relaxed">{entry.description}</p>
                  )}

                  {/* Achievements or Key Points */}
                  {entry.achievements && entry.achievements.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {entry.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex gap-2 text-sm text-gray-700">
                          <span className="text-blue-600 font-bold">•</span>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  {entry.technologies && entry.technologies.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-xs font-bold text-gray-600 uppercase mb-2">Tech</p>
                      <div className="flex flex-wrap gap-2">
                        {entry.technologies.map(tech => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
