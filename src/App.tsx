import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { initializeUIPreferences } from '@store'
import Layout from '@components/common/Layout'
import Portfolio from '@pages/Portfolio'

function App() {
  useEffect(() => {
    // Initialize UI preferences on mount
    initializeUIPreferences()
  }, [])

  return (
    <Router basename="/Portfolio">
      <Layout>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  )
}

// 404 Page
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-[#FF5F1F] mb-4">404</h1>
      <p className="text-2xl text-[#F2F2F7] mb-8">Page Not Found</p>
      <p className="text-gray-400 mb-8">This page doesn't exist...</p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#FF5F1F] text-white font-semibold rounded-lg hover:bg-[#FF8C4A] transition-all"
      >
        Return Home
      </Link>
    </div>
  )
}

export default App

