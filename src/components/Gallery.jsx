import { motion } from 'framer-motion'
import { Plus, Instagram } from 'lucide-react'

const galleryImages = [
  { src: '/images/galeria-01.png', alt: 'Producto Lovely A', gradientFrom: '#7AAB75', gradientTo: '#4A7A5A' },
  { src: '/images/galeria-02.png', alt: 'Colección Hello Kitty', gradientFrom: '#F5C030', gradientTo: '#E8A020' },
  { src: '/images/galeria-03.png', alt: 'Stitch Collection', gradientFrom: '#7EC3D9', gradientTo: '#4A8AAA' },
  { src: '/images/galeria-04.png', alt: 'Set de regalo', gradientFrom: '#9B8ECC', gradientTo: '#6B5B9E' },
  { src: '/images/galeria-05.png', alt: 'Tienda Lovely A', gradientFrom: '#C73B2A', gradientTo: '#902B1E' },
  { src: '/images/galeria-06.png', alt: 'Peluches', gradientFrom: '#5AAA78', gradientTo: '#3A7A58' },
  { src: '/images/galeria-07.png', alt: 'Tazas y termos', gradientFrom: '#F5A623', gradientTo: '#C07018' },
  { src: '/images/galeria-08.png', alt: 'Mochilas escolares', gradientFrom: '#E8B4C4', gradientTo: '#C07890' },
]

/* Small Woodstock SVG for placeholder */
function WoodstockPlaceholder({ from, to }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <svg viewBox="0 0 40 50" width="32" opacity="0.5">
        <ellipse cx="20" cy="32" rx="14" ry="13" fill="white" />
        <circle cx="20" cy="16" r="12" fill="white" />
        <path d="M28 14 L36 12 L28 20 Z" fill="#F5C030" />
        <circle cx="25" cy="13" r="2.5" fill="#2C2C2C" />
        <line x1="14" y1="44" x2="11" y2="50" stroke="#F5C030" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="45" x2="20" y2="50" stroke="#F5C030" strokeWidth="2" strokeLinecap="round" />
        <line x1="26" y1="44" x2="29" y2="50" stroke="#F5C030" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function GalleryItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
    >
      <WoodstockPlaceholder from={item.gradientFrom} to={item.gradientTo} />
      <img
        src={item.src}
        alt={item.alt}
        className="absolute inset-0 z-[1] w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.07]"
        loading="lazy"
        onError={e => { e.target.style.display = 'none' }}
      />
      {/* Hover overlay */}
      <div
        className="absolute inset-0 z-[2] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'rgba(74,122,90,0.5)' }}
      >
        <div className="bg-white/90 rounded-full w-10 h-10 flex items-center justify-center">
          <Plus size={18} className="text-peanuts-green" />
        </div>
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 lg:py-28 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-quicksand text-[10px] font-semibold text-peanuts-green bg-peanuts-green-pale px-3.5 py-1.5 rounded-full tracking-[0.2em] uppercase border border-peanuts-green/20 mb-4">
            Nuestros Momentos
          </span>
          <h2 className="font-poppins font-bold text-[30px] sm:text-[40px] lg:text-[48px] text-charming leading-tight">
            Clientes felices, <br className="hidden sm:block" />nuestro mayor regalo
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {galleryImages.map((item, i) => (
            <GalleryItem key={item.src} item={item} index={i} />
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="flex justify-center">
          <motion.a
            href="https://www.instagram.com/l.lovelya/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 font-inter text-[13px] font-semibold text-peanuts-green border-2 border-peanuts-green/40 rounded-full px-7 py-3.5 sm:w-auto w-full sm:justify-start justify-center hover:bg-peanuts-green hover:border-peanuts-green hover:text-cream-light transition-all duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Instagram size={16} />
            Síguenos en Instagram @l.lovelya
          </motion.a>
        </div>
      </div>
    </section>
  )
}
