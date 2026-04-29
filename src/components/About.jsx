import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function useCountUp(target, shouldCount, duration = 1800) {
  const [value, setValue] = useState(0)
  const [done, setDone] = useState(false)
  useEffect(() => {
    if (!shouldCount) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setDone(true)
    }
    requestAnimationFrame(step)
  }, [shouldCount, target, duration])
  return { value, done }
}

function StatCounter({ value, label, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { value: count, done } = useCountUp(value, inView)

  return (
    <div ref={ref} className="flex flex-col items-center gap-1.5">
      <div className="relative">
        <span className="font-poppins font-bold text-[38px] sm:text-[42px] text-charming leading-none">
          {count.toLocaleString()}{suffix}
        </span>
        <motion.div
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[3px] bg-peanuts-yellow rounded-full"
          initial={{ width: 0 }}
          animate={{ width: done ? 36 : 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
      </div>
      <span className="font-quicksand text-[12px] font-semibold text-warm-gray-light mt-1">
        {label}
      </span>
    </div>
  )
}

/* Snoopy with a gift box — small decorative SVG */
function SnoopyGift() {
  return (
    <svg viewBox="0 0 140 160" width="140" className="mx-auto opacity-90">
      {/* Gift box */}
      <rect x="30" y="95" width="80" height="55" rx="6" fill="#C73B2A" />
      <rect x="30" y="85" width="80" height="18" rx="4" fill="#A02820" />
      {/* Bow */}
      <path d="M65 85 Q55 70 45 78 Q55 86 65 85 Z" fill="#F5C030" />
      <path d="M75 85 Q85 70 95 78 Q85 86 75 85 Z" fill="#F5C030" />
      <circle cx="70" cy="85" r="6" fill="#E8A020" />
      {/* Ribbon vertical */}
      <rect x="67" y="85" width="6" height="65" rx="3" fill="#F5C030" opacity="0.7" />
      {/* Ribbon horizontal */}
      <rect x="30" y="94" width="80" height="6" rx="3" fill="#F5C030" opacity="0.7" />

      {/* Snoopy head peeking over gift */}
      <circle cx="70" cy="72" r="22" fill="white" />
      <ellipse cx="60" cy="57" rx="8" ry="14" fill="#1C1C1C" transform="rotate(-12 60 57)" />
      <ellipse cx="82" cy="56" rx="7" ry="12" fill="#2C2C2C" transform="rotate(15 82 56)" />
      <ellipse cx="80" cy="78" rx="11" ry="8" fill="#F0EDE0" />
      <ellipse cx="84" cy="73" rx="7" ry="5" fill="#1C1C1C" />
      <circle cx="67" cy="68" r="3.5" fill="#1C1C1C" />
      <circle cx="66" cy="67" r="1.2" fill="white" />
      <path d="M74 80 Q80 84 86 80" stroke="#1C1C1C" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {/* Stars */}
      <circle cx="20" cy="60" r="3" fill="#F5C030" opacity="0.6" />
      <circle cx="115" cy="55" r="2" fill="#F5C030" opacity="0.5" />
    </svg>
  )
}

export default function About() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="nosotros" ref={sectionRef} className="py-20 lg:py-28 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block font-quicksand text-[10px] font-semibold text-peanuts-green bg-peanuts-green-pale px-3.5 py-1.5 rounded-full tracking-[0.2em] uppercase border border-peanuts-green/20 mb-5">
              Quiénes Somos
            </span>

            <h2 className="font-poppins font-bold text-[32px] sm:text-[40px] lg:text-[44px] text-charming leading-tight mb-6">
              Donde lo cute se encuentra con la calidad
            </h2>

            <div className="font-inter text-[14px] sm:text-[15px] text-warm-gray leading-relaxed space-y-4 mb-8">
              <p>
                En Lovely A creemos que los pequeños detalles hacen grandes diferencias. Desde 2020, nos dedicamos
                a traer los personajes y productos que amamos directo a Tlaxcala.
              </p>
              <p>
                Cada artículo ha sido cuidadosamente seleccionado para garantizar que no solo sea adorable, sino también
                de excelente calidad. Desde mochilas Hello Kitty hasta botellas de agua de Stitch, nuestro objetivo es
                que encuentres regalos perfectos para cada ocasión.
              </p>
              <p>
                Somos más que una tienda — somos un espacio donde cada cliente es especial, donde los regalos encuentran
                a sus personas, y donde lo cute nunca pasa de moda. Te esperamos en el centro de Tlaxcala.
              </p>
            </div>

            {/* Peanuts-stripe divider */}
            <div className="peanuts-section-divider mb-8 rounded-full overflow-hidden" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              <StatCounter value={1000} suffix="+" label="Productos" />
              <StatCounter value={4.9} suffix="" label="Puntuación" duration={1200} />
              <StatCounter value={2500} suffix="+" label="Clientes Felices" />
            </div>
          </motion.div>

          {/* Right — illustration + photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Decorative corner accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-peanuts-green/35 rounded-tl-xl z-10" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-peanuts-yellow/50 rounded-br-xl z-10" />

            <motion.div
              className="relative overflow-hidden rounded-3xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              style={{ minHeight: '400px' }}
            >
              {/* Placeholder: Peanuts-themed gradient background */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                style={{ background: 'linear-gradient(135deg, #4A7A5A 0%, #2E5E3E 50%, #7AAB75 100%)' }}
              >
                <SnoopyGift />
                <p className="font-quicksand font-semibold text-[13px] text-white/60">
                  tienda-interior.jpg
                </p>
              </div>
              <img
                src="/images/tienda-interior.png"
                alt="Interior de Lovely A"
                className="relative z-10 w-full h-full min-h-[400px] object-cover"
                loading="lazy"
                onError={e => { e.target.style.display = 'none' }}
              />
            </motion.div>

            {/* Floating yellow badge */}
            <motion.div
              className="absolute -bottom-4 -left-4 sm:-left-8 px-5 py-3 rounded-2xl shadow-yellow-soft z-20"
              style={{
                background: '#F5C030',
                boxShadow: '0 4px 20px rgba(245,192,48,0.35)',
              }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="font-poppins font-bold text-[20px] text-charming leading-none">2020</p>
              <p className="font-quicksand text-[10px] font-semibold text-charming/70">Desde siempre</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
