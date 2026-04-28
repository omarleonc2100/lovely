import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

/* ─── Rotating phrases ─── */
const phrases = [
  'La primera tienda cute de Tlaxcala',
  'Regalos para toda ocasión con amor',
  'Personajes que se quedan en el corazón',
]

/* ─── Front-facing cute Snoopy mascot ─── */
function SnoopyMascot() {
  return (
    <svg
      viewBox="0 0 220 260"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Snoopy mascot"
      className="w-full h-full"
    >
      {/* ── Body ── */}
      <ellipse cx="110" cy="218" rx="70" ry="46" fill="white" />
      {/* Body spot */}
      <ellipse cx="82" cy="222" rx="36" ry="28" fill="#1C1C1C" opacity="0.88" />
      {/* Tummy patch */}
      <ellipse cx="84" cy="224" rx="22" ry="17" fill="white" />

      {/* ── Arms ── */}
      <ellipse cx="40" cy="202" rx="22" ry="11" fill="white" transform="rotate(-30 40 202)" />
      <ellipse cx="180" cy="200" rx="22" ry="11" fill="white" transform="rotate(30 180 200)" />

      {/* ── Tail ── */}
      <path
        d="M178 235 Q202 218 196 198 Q190 178 206 166"
        stroke="white" strokeWidth="11" fill="none" strokeLinecap="round"
      />
      <path
        d="M178 235 Q202 218 196 198 Q190 178 206 166"
        stroke="#F0EDE0" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.5"
      />

      {/* ── Head ── */}
      <circle cx="110" cy="120" r="76" fill="white" />

      {/* ── Floppy ears ── */}
      {/* Left ear */}
      <ellipse cx="50" cy="74" rx="26" ry="40" fill="#1C1C1C" transform="rotate(-14 50 74)" />
      {/* Right ear */}
      <ellipse cx="170" cy="72" rx="24" ry="36" fill="#1C1C1C" transform="rotate(14 170 72)" />

      {/* ── Eyes ── */}
      {/* Left eye */}
      <circle cx="84"  cy="112" r="14" fill="#1C1C1C" />
      <circle cx="80"  cy="107" r="4.5" fill="white" />
      <circle cx="78"  cy="105" r="2" fill="white" opacity="0.7" />
      {/* Right eye */}
      <circle cx="136" cy="112" r="14" fill="#1C1C1C" />
      <circle cx="132" cy="107" r="4.5" fill="white" />
      <circle cx="130" cy="105" r="2" fill="white" opacity="0.7" />

      {/* ── Blush circles ── */}
      <ellipse cx="66"  cy="132" rx="16" ry="10" fill="#FFB3CC" opacity="0.55" />
      <ellipse cx="154" cy="132" rx="16" ry="10" fill="#FFB3CC" opacity="0.55" />

      {/* ── Muzzle / snout ── */}
      <ellipse cx="110" cy="142" rx="26" ry="17" fill="#F0EDE0" />
      {/* Nose */}
      <ellipse cx="110" cy="133" rx="12" ry="8" fill="#1C1C1C" />
      {/* Nose shine */}
      <ellipse cx="107" cy="131" rx="3.5" ry="2.5" fill="white" opacity="0.5" />
      {/* Smile */}
      <path
        d="M94 153 Q110 167 126 153"
        stroke="#1C1C1C" strokeWidth="3.5" fill="none" strokeLinecap="round"
      />

      {/* ── Woodstock perched on head ── */}
      <g transform="translate(138, 52)">
        <ellipse cx="14" cy="18" rx="11" ry="10" fill="#F5C030" />
        <circle cx="14" cy="8"  r="9"  fill="#F5C030" />
        <path d="M21 7 L28 5 L21 12 Z" fill="#E8A020" />
        <circle cx="18" cy="6" r="2" fill="#1C1C1C" />
        <circle cx="17.3" cy="5.3" r="0.7" fill="white" />
        <line x1="10" y1="27" x2="8"  y2="33" stroke="#E8A020" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="14" y1="28" x2="14" y2="33" stroke="#E8A020" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="18" y1="27" x2="20" y2="33" stroke="#E8A020" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 0 Q9 -4 12 -1 Q12 -5 15 -2 Q15 -5 18 -1" stroke="#E8A020" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  )
}

/* ─── Cloud blob shapes at the bottom of the hero ─── */
function CloudBar() {
  return (
    <svg
      viewBox="0 0 1440 180"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-0 w-full"
      preserveAspectRatio="none"
      style={{ zIndex: 4 }}
    >
      {/* Back cloud layer */}
      <ellipse cx="120"  cy="160" rx="130" ry="70" fill="white" opacity="0.6" />
      <ellipse cx="360"  cy="170" rx="180" ry="75" fill="white" opacity="0.6" />
      <ellipse cx="620"  cy="158" rx="150" ry="65" fill="white" opacity="0.6" />
      <ellipse cx="900"  cy="165" rx="170" ry="72" fill="white" opacity="0.6" />
      <ellipse cx="1150" cy="155" rx="145" ry="68" fill="white" opacity="0.6" />
      <ellipse cx="1370" cy="162" rx="120" ry="66" fill="white" opacity="0.6" />
      {/* Front cloud layer — solid white */}
      <ellipse cx="0"    cy="175" rx="100" ry="60" fill="white" />
      <ellipse cx="200"  cy="178" rx="180" ry="65" fill="white" />
      <ellipse cx="480"  cy="172" rx="200" ry="68" fill="white" />
      <ellipse cx="750"  cy="175" rx="190" ry="66" fill="white" />
      <ellipse cx="1020" cy="172" rx="185" ry="64" fill="white" />
      <ellipse cx="1270" cy="176" rx="175" ry="65" fill="white" />
      <ellipse cx="1440" cy="175" rx="110" ry="60" fill="white" />
      {/* Floor */}
      <rect x="0" y="170" width="1440" height="10" fill="white" />
    </svg>
  )
}

/* ─── Scattered decorative outline icons ─── */
function ScatteredIcons() {
  const color = 'rgba(61,43,31,0.22)'
  const sw = 1.8

  /* Bone */
  const Bone = ({ x, y, size = 1, rotate = 0 }) => (
    <g transform={`translate(${x},${y}) rotate(${rotate}) scale(${size})`} opacity="0.9">
      <rect x="-14" y="-5" width="28" height="10" rx="5" fill="none" stroke={color} strokeWidth={sw} />
      <circle cx="-14" cy="-8" r="6" fill="none" stroke={color} strokeWidth={sw} />
      <circle cx="-14" cy="8"  r="6" fill="none" stroke={color} strokeWidth={sw} />
      <circle cx="14"  cy="-8" r="6" fill="none" stroke={color} strokeWidth={sw} />
      <circle cx="14"  cy="8"  r="6" fill="none" stroke={color} strokeWidth={sw} />
    </g>
  )

  /* Paw print */
  const Paw = ({ x, y, size = 1 }) => (
    <g transform={`translate(${x},${y}) scale(${size})`} opacity="0.9">
      <ellipse cx="0" cy="6" rx="9" ry="11" fill="none" stroke={color} strokeWidth={sw} />
      <ellipse cx="-11" cy="-4" rx="5" ry="6" fill="none" stroke={color} strokeWidth={sw} />
      <ellipse cx="0"   cy="-8" rx="5" ry="6" fill="none" stroke={color} strokeWidth={sw} />
      <ellipse cx="11"  cy="-4" rx="5" ry="6" fill="none" stroke={color} strokeWidth={sw} />
    </g>
  )

  /* Heart */
  const Heart = ({ x, y, size = 1 }) => (
    <g transform={`translate(${x},${y}) scale(${size})`} opacity="0.9">
      <path d="M0 8 C-3 4 -12 0 -12 -6 C-12 -12 -6 -14 0 -8 C6 -14 12 -12 12 -6 C12 0 3 4 0 8 Z"
        fill="none" stroke={color} strokeWidth={sw} />
    </g>
  )

  /* Star */
  const Star = ({ x, y, size = 1 }) => (
    <g transform={`translate(${x},${y}) scale(${size})`} opacity="0.9">
      <path d="M0 -11 L2.6 -3.5 L10.5 -3.5 L4.4 1.5 L6.9 9.5 L0 4.8 L-6.9 9.5 L-4.4 1.5 L-10.5 -3.5 L-2.6 -3.5 Z"
        fill="none" stroke={color} strokeWidth={sw} />
    </g>
  )

  /* Small Snoopy doodle */
  const SnoopyDoodle = ({ x, y, size = 1 }) => (
    <g transform={`translate(${x},${y}) scale(${size})`} opacity="0.85">
      <circle cx="0" cy="0" r="12" fill="none" stroke={color} strokeWidth={sw} />
      <ellipse cx="-8" cy="-8" rx="4" ry="7" fill="none" stroke={color} strokeWidth={sw} transform="rotate(-15 -8 -8)" />
      <ellipse cx="8"  cy="-9" rx="3.5" ry="6" fill="none" stroke={color} strokeWidth={sw} transform="rotate(15 8 -9)" />
      <ellipse cx="7"  cy="5"  rx="6" ry="4" fill="none" stroke={color} strokeWidth={sw} />
      <circle cx="-4" cy="0" r="1.5" fill={color} />
      <circle cx="4"  cy="0" r="1.5" fill={color} />
    </g>
  )

  return (
    <svg
      viewBox="0 0 800 520"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 2 }}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Top-left area */}
      <SnoopyDoodle x={68}  y={95}  size={1.3} />
      <Heart        x={160} y={58}  size={1.1} />
      <Star         x={48}  y={190} size={0.9} />
      <Bone         x={100} y={260} size={0.85} rotate={30} />

      {/* Top-right area */}
      <Bone         x={680} y={80}  size={1.1} rotate={-20} />
      <Paw          x={740} y={160} size={1.0} />
      <Heart        x={620} y={55}  size={0.9} />
      <Star         x={760} y={260} size={1.0} />

      {/* Mid-left */}
      <Star  x={32}  y={340} size={0.8} />
      <Heart x={72}  y={400} size={1.0} />

      {/* Mid-right */}
      <Paw   x={728} y={360} size={0.9} />
      <Bone  x={690} y={430} size={0.8} rotate={45} />

      {/* Small sparkle dots */}
      <circle cx="200" cy="42"  r="4" fill={color} opacity="0.5" />
      <circle cx="580" cy={38}  r="3" fill={color} opacity="0.4" />
      <circle cx="140" cy="460" r="3" fill={color} opacity="0.35" />
      <circle cx="660" cy="470" r="4" fill={color} opacity="0.35" />
      <circle cx="400" cy="30"  r="3.5" fill={color} opacity="0.4" />
    </svg>
  )
}

/* ─── Main Hero ─── */
export default function Hero() {
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [scrollY, setScrollY]     = useState(0)

  useEffect(() => {
    const t = setInterval(() => setPhraseIdx(i => (i + 1) % phrases.length), 3500)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const goCollection = () => document.getElementById('coleccion')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden flex flex-col items-center"
      style={{
        minHeight: '100svh',
        background: 'linear-gradient(175deg, #FAD5BF 0%, #FDE8D8 45%, #FEF3EC 100%)',
      }}
    >
      {/* Scattered outline icons */}
      <ScatteredIcons />

      {/* Main content — centered column */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-6 pt-28 pb-52 sm:pb-56 lg:pb-60 w-full"
        style={{ zIndex: 3 }}
      >
        {/* Top pill label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="inline-block font-quicksand text-[11px] font-semibold text-peanuts-green bg-white/80 backdrop-blur-sm border border-peanuts-green/25 px-4 py-1.5 rounded-full tracking-[0.18em] uppercase mb-6 shadow-sm"
        >
          Bienvenida a Lovely A
        </motion.span>

        {/* ── Big title — Pacifico font like SweetCharm ── */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-pacifico text-charming leading-tight mb-4"
          style={{ fontSize: 'clamp(2.6rem, 8vw, 5.5rem)' }}
        >
          Lovely A
        </motion.h1>

        {/* Rotating subtitle */}
        <div className="h-7 mb-7 overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={phraseIdx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.38 }}
              className="font-inter text-[14px] sm:text-[15px] text-warm-gray"
            >
              {phrases[phraseIdx]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* ── Pink CTA button ── */}
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.55 }}
          onClick={goCollection}
          className="flex items-center gap-2.5 font-inter text-[14px] sm:text-[15px] font-semibold text-black bg-[#ef8ec3] rounded-full px-8 py-3.5 shadow-pink-soft transition-all duration-200"
          whileHover={{ scale: 1.06, boxShadow: '0 0 28px rgba(240,98,146,0.45)' }}
          whileTap={{ scale: 0.97 }}
        >
          Descubrir colección
          <ArrowRight size={16} />
        </motion.button>

        {/* ── Snoopy mascot — floats above the clouds ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: 'easeOut' }}
          className="relative mt-10 animate-float-1"
          style={{ width: 'clamp(380px, 38vw, 600px)' }}
        >
          <img
            src="/images/snoopy-mascot.png"
            alt="Snoopy"
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </motion.div>
      </div>

      {/* ── Cloud bar — sits at bottom, mascot peeks above it ── */}
      <CloudBar />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-slow cursor-pointer"
        animate={{ opacity: scrollY > 80 ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        style={{ zIndex: 5 }}
        onClick={goCollection}
      >
        <ChevronDown size={24} className="text-warm-gray/50" />
      </motion.div>
    </section>
  )
}
