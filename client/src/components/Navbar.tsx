
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Projects', href: '#projects' },
    {name: 'About', href: '#home'},
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()

    const target = document.querySelector(href)

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

      // Close mobile menu
      setIsOpen(false)

      // Update URL hash
      window.history.pushState(null, '', href)
    }
  }

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-3 shadow-lg shadow-black/5 backdrop-blur-xl sm:px-7">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavigation(e, '#home')}
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
              RTS
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-wide text-white">
                Raymart Santiago
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className="rounded-xl px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavigation(e, '#contact')}
            className="hidden items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:bg-indigo-100 md:flex"
          >
            Let's talk
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10 md:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-xl backdrop-blur-xl md:hidden"
            >
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={(e) => handleNavigation(e, '#contact')}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950"
              >
                Let's talk
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
