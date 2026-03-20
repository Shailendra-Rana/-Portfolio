import { useUIStore } from '@store'

interface NavigationProps {
  layout?: 'horizontal' | 'vertical'
}

export default function Navigation({ layout = 'horizontal' }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'timeline', label: 'Timeline', href: '#timeline' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ]

  const setSidebar = useUIStore((state: { setSidebar: (open: boolean) => void }) => state.setSidebar)

  const handleNavClick = () => {
    // Close sidebar on mobile when navigating
    if (layout === 'vertical') {
      setSidebar(false)
    }
  }

  const baseClasses = 'px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm md:text-base'
  const inactiveClasses = 'text-gray-400 hover:text-[#FF5F1F] hover:bg-[#FF5F1F]/10'

  if (layout === 'vertical') {
    return (
      <nav className="flex flex-col gap-2 mt-8">
        {navItems.map(item => (
          <a
            key={item.id}
            href={item.href}
            className={`${baseClasses} ${inactiveClasses}`}
            onClick={handleNavClick}
          >
            {item.label}
          </a>
        ))}
      </nav>
    )
  }

  return (
    <nav className="flex gap-2 md:gap-4">
      {navItems.map(item => (
        <a
          key={item.id}
          href={item.href}
          className={`${baseClasses} ${inactiveClasses}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}
