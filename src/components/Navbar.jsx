import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Colección', href: '#coleccion' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
  { label: 'Ubicación', href: '#ubicacion' },
]

function SnoopyLogo() {
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
      {/* Mini Snoopy face for logo */}
      <circle cx="24" cy="24" r="20" fill="#F06292" />
      {/* Snoopy face circle */}
      <circle cx="24" cy="26" r="12" fill="white" />
      {/* Left ear */}
      <ellipse cx="16" cy="18" rx="6" ry="10" fill="#1C1C1C" transform="rotate(-15 16 18)" />
      {/* Right ear */}
      <ellipse cx="32" cy="17" rx="5" ry="9" fill="#1C1C1C" transform="rotate(15 32 17)" />
      {/* Snout */}
      <ellipse cx="28" cy="30" rx="7" ry="5" fill="#F0EDE0" />
      {/* Nose */}
      <ellipse cx="31" cy="28" rx="4" ry="3" fill="#1C1C1C" />
      {/* Eye */}
      <circle cx="21" cy="24" r="2.5" fill="#1C1C1C" />
      <circle cx="20.5" cy="23.5" r="0.8" fill="white" />
      {/* Smile */}
      <path d="M23 32 Q27 35 31 32" stroke="#1C1C1C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
      const sections = navLinks.map(l => l.href.replace('#', ''))
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const go = (href) => {
    setMenuOpen(false)
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(255,250,243,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(74,122,90,0.12)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => go('#inicio')}
            className="flex items-center gap-2.5 cursor-pointer"
            whileHover={{ scale: 1.03 }}
          >
            <SnoopyLogo />
            <span className="font-poppins font-bold text-[20px] text-charming tracking-tight">
              Lovely A
            </span>
          </motion.button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = activeSection === link.href.replace('#', '')
              return (
                <button
                  key={link.href}
                  onClick={() => go(link.href)}
                  className="relative font-inter text-[13px] font-medium text-warm-gray hover:text-peanuts-green transition-colors duration-200 group"
                >
                  {link.label}
                  <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-peanuts-green rounded-full transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </button>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <motion.button
            onClick={() => go('#contacto')}
            className="hidden md:block font-inter text-[13px] font-semibold text-cream-light bg-peanuts-green px-5 py-2.5 rounded-full transition-all duration-200"
            whileHover={{ scale: 1.04, boxShadow: '0 4px 18px rgba(74,122,90,0.35)' }}
            whileTap={{ scale: 0.97 }}
          >
            Contactar
          </motion.button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-charming hover:text-peanuts-green transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-cream/96 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            {/* Decorative Peanuts stripe top */}
            <div className="absolute top-0 left-0 right-0 peanuts-section-divider" />
            <nav className="flex flex-col items-center gap-7">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => go(link.href)}
                  className="font-poppins text-2xl font-bold text-charming hover:text-peanuts-green transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: navLinks.length * 0.06 + 0.05 }}
                onClick={() => go('#contacto')}
                className="font-inter text-[15px] font-semibold text-cream-light bg-peanuts-green px-8 py-3 rounded-full mt-2"
              >
                Contactar
              </motion.button>
            </nav>
            <div className="absolute bottom-0 left-0 right-0 peanuts-section-divider" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
