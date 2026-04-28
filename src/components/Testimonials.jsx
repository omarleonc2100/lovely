import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Sofía M.',
    city: 'Tlaxcala, Tlax.',
    rating: 5,
    text: 'Compré la mochila de Hello Kitty para mi hija y quedó encantada. La calidad es excelente y el servicio fue muy amable. Definitivamente volveré.',
  },
  {
    id: 2,
    name: 'Daniela R.',
    city: 'Puebla, Pue.',
    rating: 5,
    text: 'Me regalaron un peluche de Stitch que compré aquí y fue el mejor regalo. Todo súper lindo y bien empacado. 100% recomendado.',
  },
  {
    id: 3,
    name: 'Karen L.',
    city: 'Tlaxcala, Tlax.',
    rating: 5,
    text: 'La tienda es hermosa, muy ordenada y con muchas opciones. Encontré exactamente lo que buscaba para el Día de la Mamá.',
  },
  {
    id: 4,
    name: 'Valeria C.',
    city: 'Apizaco, Tlax.',
    rating: 5,
    text: 'Increíble variedad de productos. Las tazas de Harry Potter son de muy buena calidad. El envío fue rápido y llegó perfectamente empacado.',
  },
  {
    id: 5,
    name: 'Paola T.',
    city: 'Tlaxcala, Tlax.',
    rating: 5,
    text: 'Compré varios regalos de graduación aquí y todos mis amigos quedaron felices. El precio es muy accesible para la calidad que ofrecen.',
  },
  {
    id: 6,
    name: 'Andrea B.',
    city: 'CDMX',
    rating: 5,
    text: 'Visité la tienda cuando estaba en Tlaxcala y me llevé un termo de Stitch. Lo uso todos los días y sigue como nuevo.',
  },
]

function StarRow({ count }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <Star
          key={i}
          size={13}
          className={i <= count ? 'text-peanuts-yellow fill-peanuts-yellow' : 'text-cream-warm fill-cream-warm'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = () => setCurrent(i => (i + 1) % reviews.length)
  const prev = () => setCurrent(i => (i - 1 + reviews.length) % reviews.length)

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 4200)
    return () => clearInterval(t)
  }, [paused, current])

  const getVisible = () => {
    const count = 3
    return Array.from({ length: count }, (_, i) => reviews[(current + i) % reviews.length])
  }

  return (
    <section className="py-20 lg:py-28 overflow-hidden" style={{ background: '#F06292' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-quicksand text-[10px] font-semibold text-peanuts-yellow bg-peanuts-yellow/15 px-3.5 py-1.5 rounded-full tracking-[0.2em] uppercase border border-peanuts-yellow/30 mb-4">
            Testimonios
          </span>
          <h2 className="font-poppins font-bold text-[30px] sm:text-[40px] lg:text-[48px] text-white leading-tight">
            Voces felices, historias reales
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {getVisible().map((review, i) => (
                <motion.div
                  key={`${review.id}-${current}`}
                  initial={{ opacity: 0, x: 36, scale: 0.97 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -36, scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 22, delay: i * 0.05 }}
                  className="p-6 sm:p-7 flex flex-col gap-4 rounded-3xl"
                  style={{
                    background: 'rgba(255,255,255,0.10)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.18)',
                  }}
                >
                  <StarRow count={review.rating} />
                  <p className="font-poppins italic text-[14px] sm:text-[15px] text-white/90 leading-relaxed flex-1">
                    "{review.text}"
                  </p>
                  <div>
                    <p className="font-quicksand font-semibold text-[13px] text-white">{review.name}</p>
                    <p className="font-inter text-[11px] text-peanuts-yellow mt-0.5">{review.city}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button onClick={prev} className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.93 }}>
              <ChevronLeft size={17} />
            </motion.button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${i === current ? 'bg-peanuts-yellow w-5 h-2' : 'bg-white/30 w-2 h-2'}`}
                />
              ))}
            </div>
            <motion.button onClick={next} className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.93 }}>
              <ChevronRight size={17} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
