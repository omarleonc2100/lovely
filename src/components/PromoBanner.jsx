import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const promos = [
  {
    id: 'dia-mama',
    title: 'Día de la Mamá',
    subtitle: 'Descuentos especiales',
    image: '/images/promo-dia-mama.jpg',
    gradientFrom: '#F5C030',
    gradientTo: '#E8A020',
    accent: '#FEFCF5',
    theme: 'Día de la Mamá',
  },
  {
    id: 'san-valentin',
    title: 'San Valentín',
    subtitle: 'Regalos con amor',
    image: '/images/promo-san-valentin.jpg',
    gradientFrom: '#C73B2A',
    gradientTo: '#A02820',
    accent: '#FEFCF5',
    theme: 'San Valentín',
  },
]

export default function PromoBanner({ onFilterByTheme }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-10">
      {/* Sub-header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="font-quicksand text-[10px] font-semibold text-peanuts-green tracking-[0.22em] uppercase mb-1">
            Temporada especial
          </p>
          <h3 className="font-poppins font-bold text-[22px] text-charming">Promociones</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
        {promos.map((promo, i) => (
          <motion.div
            key={promo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            whileHover={{ scale: 1.025 }}
            className="relative overflow-hidden rounded-3xl cursor-pointer group"
            style={{ height: '200px' }}
            onClick={() => onFilterByTheme?.(promo.theme)}
          >
            <img
              src={promo.image}
              alt={promo.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={e => { e.target.style.display = 'none' }}
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${promo.gradientFrom}e0 0%, ${promo.gradientTo}cc 100%)`,
              }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-start justify-end p-6">
              <h3 className="font-poppins font-bold text-white text-[24px] sm:text-[26px] drop-shadow">
                {promo.title}
              </h3>
              <p className="font-inter text-[13px] text-white/80 mt-0.5 mb-3">{promo.subtitle}</p>
              <motion.button
                className="flex items-center gap-1.5 font-inter text-[12px] font-bold text-charming bg-cream-light rounded-full px-4 py-2"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
              >
                Ver promoción <ArrowRight size={12} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
