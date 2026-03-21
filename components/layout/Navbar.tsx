'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import RadheyaLogo from '@/components/ui/RadheyaLogo'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-primary/80 backdrop-blur-xl shadow-lg shadow-black/20'
            : 'bg-primary/40 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <RadheyaLogo size="md" />

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-ui uppercase tracking-ui-wide text-sm transition-colors duration-200 ${
                      isActive
                        ? 'text-accent'
                        : 'text-warm-ivory hover:text-accent'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2 border border-accent text-accent font-ui uppercase tracking-ui-wide text-sm rounded transition-colors duration-200 hover:bg-accent/10"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-warm-ivory p-2"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-6 text-warm-ivory p-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`font-ui uppercase tracking-ui-wide text-2xl transition-colors duration-200 ${
                        isActive
                          ? 'text-accent'
                          : 'text-warm-ivory hover:text-accent'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: NAV_LINKS.length * 0.05, duration: 0.3 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center px-8 py-3 border border-accent text-accent font-ui uppercase tracking-ui-wide text-lg rounded transition-colors duration-200 hover:bg-accent/10"
                >
                  Contact Us
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
