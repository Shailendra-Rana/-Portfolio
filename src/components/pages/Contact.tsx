import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send } from 'lucide-react'
import { PORTFOLIO_OWNER } from '@data/constants'

export default function Contact() {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim()
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim()
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim()

    if (!name || !email || !message) return

    // Fall back to mailto since there is no backend/form service configured
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${PORTFOLIO_OWNER.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#0D0D0D] py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#F2F2F7] mb-4">Let's Connect</h1>
          <p className="text-gray-400 text-lg">I'm always open to new opportunities and collaborations</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Form Section */}
          <motion.div
            variants={itemVariants}
            className="card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#FF5F1F]/10 rounded-lg">
                <Send className="w-6 h-6 text-[#FF5F1F]" />
              </div>
              <h2 className="text-2xl font-bold text-[#F2F2F7]">Send a Message</h2>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Have a question or want to work together? Drop me a message and I'll get back to you as soon as possible.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-[#1A1A1B] border border-gray-700 rounded-lg text-[#F2F2F7] placeholder-gray-500 focus:border-[#FF5F1F] focus:ring-1 focus:ring-[#FF5F1F] transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-3 bg-[#1A1A1B] border border-gray-700 rounded-lg text-[#F2F2F7] placeholder-gray-500 focus:border-[#FF5F1F] focus:ring-1 focus:ring-[#FF5F1F] transition-colors"
              />
              <textarea
                name="message"
                placeholder="Your message here..."
                rows={4}
                required
                className="w-full px-4 py-3 bg-[#1A1A1B] border border-gray-700 rounded-lg text-[#F2F2F7] placeholder-gray-500 focus:border-[#FF5F1F] focus:ring-1 focus:ring-[#FF5F1F] transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                className="button-primary w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            variants={itemVariants}
            className="card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#FF5F1F]/10 rounded-lg">
                <Linkedin className="w-6 h-6 text-[#FF5F1F]" />
              </div>
              <h2 className="text-2xl font-bold text-[#F2F2F7]">Connect Directly</h2>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Prefer connecting on social media? Find me on these platforms:
            </p>
            <div className="space-y-3">
              <a
                href={PORTFOLIO_OWNER.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-700 hover:border-[#FF5F1F] hover:bg-[#FF5F1F]/5 transition-all group"
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-[#FF5F1F]/10 transition-colors">
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-[#FF5F1F]" />
                </div>
                <div>
                  <p className="font-semibold text-[#F2F2F7]">GitHub</p>
                  <p className="text-sm text-gray-500">Check out my projects</p>
                </div>
              </a>
              <a
                href={PORTFOLIO_OWNER.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-700 hover:border-[#FF5F1F] hover:bg-[#FF5F1F]/5 transition-all group"
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-[#FF5F1F]/10 transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-[#FF5F1F]" />
                </div>
                <div>
                  <p className="font-semibold text-[#F2F2F7]">LinkedIn</p>
                  <p className="text-sm text-gray-500">Professional profile</p>
                </div>
              </a>
              <a
                href={`mailto:${PORTFOLIO_OWNER.email}`}
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-700 hover:border-[#FF5F1F] hover:bg-[#FF5F1F]/5 transition-all group"
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-[#FF5F1F]/10 transition-colors">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-[#FF5F1F]" />
                </div>
                <div>
                  <p className="font-semibold text-[#F2F2F7]">Email</p>
                  <p className="text-sm text-gray-500">{PORTFOLIO_OWNER.email}</p>
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 card text-center"
        >
          <p className="text-[#F2F2F7] mb-2 text-lg font-semibold">
            Available for collaborations
          </p>
          <p className="text-gray-400">
            Whether it's a full-time role, freelance project, or just a conversation about tech — I'd love to hear from you!
          </p>
        </motion.div>
      </div>
    </div>
  )
}
