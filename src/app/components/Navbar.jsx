
'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon, Laptop } from 'lucide-react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center  bg-black/50 backdrop-blur fixed top-0 z-50">
      <h1 className="text-2xl font-bold">Gyan's Portfolio</h1>
      <div className="space-x-4 flex items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>

        {/* Theme Toggle Icons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setTheme('light')}
            className={`p-1.5 rounded hover:bg-white/10 transition ${theme === 'light' && 'bg-white/20'}`}
            aria-label="Light Mode"
          >
            <Sun className="w-5 h-5 text-yellow-400" />
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={`p-1.5 rounded hover:bg-white/10 transition ${theme === 'dark' && 'bg-white/20'}`}
            aria-label="Dark Mode"
          >
            <Moon className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={() => setTheme('system')}
            className={`p-1.5 rounded hover:bg-white/10 transition ${theme === 'system' && 'bg-white/20'}`}
            aria-label="System Theme"
          >
            <Laptop className="w-5 h-5 text-cyan-400" />
          </button>
        </div>
      </div>
    </nav>
  )
}
