'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center light:bg-white/40 dark:bg-black/70 backdrop-blur fixed top-0 z-50">
      <h1 className="text-2xl font-bold light:text-black dark:text-white">Gyan's Portfolio</h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 items-center light:text-black dark:text-white">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>

        <button
          onClick={toggleTheme}
          className="p-2 rounded hover:bg-white/10 transition"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-black" />}
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden light:text-black dark:text-white"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full light:bg-white dark:bg-black light:text-black dark:text-white flex flex-col items-start px-6 py-4 space-y-4 md:hidden z-40 shadow-md">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

          <button
            onClick={() => {
              toggleTheme()
              setIsOpen(false)
            }}
            className="p-2 rounded hover:bg-white/10 transition"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-black" />}
          </button>
        </div>
      )}
    </nav>
  )
}
