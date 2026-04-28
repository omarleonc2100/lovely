import { motion } from 'framer-motion'
import { Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Colección', href: '#coleccion' },
  { label: 'Nosotros',  href: '#nosotros' },
  { label: 'Galería',   href: '#galeria' },
  { label: 'Contacto',  href: '#contacto' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const socials = [
  { icon: Instagram,     href: 'https://www.instagram.com/l.lovelya/',    label: 'Instagram' },
  { icon: Facebook,      href: 'https://www.facebook.com/lovelya.tienda', label: 'Facebook' },
  { icon: MessageCircle, href: 'https://wa.me/5255137417737',              label: 'WhatsApp' },
]

/* Mini Snoopy doghouse logo SVG */
function DogHouseLogo() {
  return (
    <svg viewBox="0 0 40 36" width="32" aria-hidden="true">
      <rect x="4" y="18" width="32" height="18" rx="3" fill="#C73B2A" />
      <polygon points="0,20 20,4 40,20" fill="#A02820" />
      <ellipse cx="20" cy="30" rx="8" ry="6" fill="#7B241C" />
      {/* tiny Snoopy on roof */}
      <circle cx="26" cy="12" r="5" fill="white" />
      <ellipse cx="22" cy="9" rx="2.5" ry="4" fill="#1C1C1C" transform="rotate(-15 22 9)" />
      <ellipse cx="29" cy="8" rx="2" ry="3" fill="#2C2C2C" transform="rotate(15 29 8)" />
      <ellipse cx="29" cy="14" rx="3" ry="2.5" fill="#1C1C1C" />
      <circle cx="24" cy="11" r="1.2" fill="#1C1C1C" />
    </svg>
  )
}

export default function Footer() {
  const go = href => {
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ background: '#3D2B1F' }}>
      {/* Peanuts stripe top */}
      <div className="peanuts-section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top row */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2.5">
              <DogHouseLogo />
              <span className="font-poppins font-bold text-[20px] text-white tracking-tight">
                Lovely A
              </span>
            </div>
            <p className="font-inter text-[13px] text-white/60 max-w-[200px] leading-relaxed">
              Detalles que enamoran, desde Tlaxcala para el mundo.
            </p>
            <div className="flex items-center gap-1.5">
              <MapPin size={11} className="text-peanuts-yellow/70 flex-shrink-0" />
              <span className="font-inter text-[11px] text-white/50">Centro, Tlaxcala, México</span>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-col items-center gap-2.5">
            <p className="font-quicksand font-bold text-[10px] text-white/40 uppercase tracking-widest mb-1">
              Navegación
            </p>
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className="font-inter text-[13px] text-white/65 hover:text-peanuts-yellow transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="font-quicksand font-bold text-[10px] text-white/40 uppercase tracking-widest mb-1">
              Redes Sociales
            </p>
            <div className="flex items-center gap-3">
              {socials.map(s => {
                const Icon = s.icon
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white/60 border border-white/15 transition-all duration-200"
                    whileHover={{ scale: 1.12, backgroundColor: '#F5C030', color: '#2E5E3E', borderColor: '#F5C030' }}
                    whileTap={{ scale: 0.93 }}
                  >
                    <Icon size={16} />
                  </motion.a>
                )
              })}
            </div>
            <p className="font-inter text-[11px] text-white/40 mt-1">@l.lovelya</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px]" style={{ background: 'rgba(255,255,255,0.08)' }} />

        {/* Bottom */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="font-inter text-[11px] text-white/40">
            Lovely A © 2025 · Todos los derechos reservados
          </p>
          <p className="font-inter text-[11px] text-white/30">
            Tlaxcala de Xicohténcatl, Tlaxcala, México
          </p>
        </div>
      </div>
    </footer>
  )
}
