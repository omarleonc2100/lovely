import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Gift, Star, HeartHandshake } from 'lucide-react'

const marqueeItems = [
  'Personajes adorables',
  'Calidad premium',
  'Regalos especiales',
  'Envíos rápidos',
  'Personajes adorables',
  'Calidad premium',
  'Regalos especiales',
  'Envíos rápidos',
]

const features = [
  {
    icon: Gift,
    title: 'Amor en Cada Detalle',
    description: 'Seleccionamos cada producto con cuidado. Calidad que puedes confiar en cada artículo.',
    color: '#C73B2A',
    bg: '#FDECEA',
  },
  {
    icon: Star,
    title: 'Para Toda Ocasión',
    description: 'Desde cumpleaños hasta graduaciones. Tenemos algo especial para ti y las personas que amas.',
    color: '#A07020',
    bg: '#FEF3D0',
  },
  {
    icon: HeartHandshake,
    title: 'Hecho con Pasión',
    description: 'Cada cliente es especial. Tu experiencia y tu sonrisa son nuestra máxima prioridad.',
    color: '#2E6048',
    bg: '#E4F3EC',
  },
]

/* Woodstock row for decoration */
function WoodstockRow() {
  return (
    <div className="flex gap-8 justify-center mb-6 opacity-60">
      {[0, 1, 2].map(i => (
        <motion.svg
          key={i}
          viewBox="0 0 36 44"
          width="28"
          className="animate-float-1"
          style={{ animationDelay: `${i * 0.4}s` }}
        >
          <ellipse cx="18" cy="28" rx="12" ry="11" fill="#F5C030" />
          <circle cx="18" cy="14" r="10" fill="#F5C030" />
          <path d="M24 13 L32 11 L24 18 Z" fill="#E8A020" />
          <circle cx="22" cy="11" r="2" fill="#1C1C1C" />
          <line x1="13" y1="38" x2="10" y2="44" stroke="#E8A020" strokeWidth="2" strokeLinecap="round" />
          <line x1="18" y1="39" x2="18" y2="44" stroke="#E8A020" strokeWidth="2" strokeLinecap="round" />
          <line x1="23" y1="38" x2="26" y2="44" stroke="#E8A020" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 4 Q11 -2 14 2 Q14 -3 18 1 Q18 -3 22 2" stroke="#E8A020" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </motion.svg>
      ))}
    </div>
  )
}

export default function WhyLovely() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <section className="py-20 lg:py-28 overflow-hidden bg-cream">
      {/* Marquee */}
      <div className="overflow-hidden py-3 mb-14" style={{ background: '#F06292' }}>
        <div className="flex animate-marquee-scroll whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 font-quicksand text-[12px] font-semibold text-peanuts-yellow tracking-[0.18em] uppercase mr-10 flex-shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-peanuts-yellow inline-block flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <WoodstockRow />
          <span className="inline-block font-quicksand text-[10px] font-semibold text-peanuts-green bg-peanuts-green-pale px-3.5 py-1.5 rounded-full tracking-[0.2em] uppercase border border-peanuts-green/20 mb-4">
            Por Qué Elegirnos
          </span>
          <h2 className="font-poppins font-bold text-[30px] sm:text-[38px] lg:text-[46px] text-charming">
            Lo que nos hace especiales
          </h2>
        </motion.div>

        {/* Cards */}
        <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {features.map((feat, i) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="group peanuts-card peanuts-card-hover p-7 text-center transition-all duration-300 hover:-translate-y-1 cursor-default"
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-2xl mx-auto mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: feat.bg }}
                >
                  <Icon size={26} style={{ color: feat.color }} />
                </div>

                <h3 className="font-poppins font-semibold text-[19px] text-charming mb-3">
                  {feat.title}
                </h3>
                <p className="font-inter text-[13px] text-warm-gray leading-relaxed">
                  {feat.description}
                </p>

                {/* Animated accent line */}
                <div className="flex justify-center mt-5">
                  <motion.div
                    className="h-[3px] rounded-full"
                    style={{ background: feat.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.45 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
