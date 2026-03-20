import { ReactNode } from 'react'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F2F2F7] flex flex-col">
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-full">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  )
}
