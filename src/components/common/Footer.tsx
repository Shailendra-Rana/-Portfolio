import { Github, Linkedin, Mail } from 'lucide-react'
import { PORTFOLIO_OWNER } from '@data/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-theme-bg border-t border-theme-accent/20">
      <div className="container py-12">
        <div className="flex flex-col items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-theme-muted">
            © {currentYear} {PORTFOLIO_OWNER.name}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href={PORTFOLIO_OWNER.github || 'https://github.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-accent hover:text-theme-accent-hover transition-colors p-2 rounded-lg hover:bg-theme-accent/10 border border-theme-accent/30 hover:border-theme-accent/60"
              title="GitHub"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PORTFOLIO_OWNER.linkedin || 'https://linkedin.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-accent hover:text-theme-accent-hover transition-colors p-2 rounded-lg hover:bg-theme-accent/10 border border-theme-accent/30 hover:border-theme-accent/60"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={() => { window.location.href = `mailto:${PORTFOLIO_OWNER.email}` }}
              className="text-theme-accent hover:text-theme-accent-hover transition-colors p-2 rounded-lg hover:bg-theme-accent/10 border border-theme-accent/30 hover:border-theme-accent/60 cursor-pointer"
              title="Email"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
