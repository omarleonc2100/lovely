import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react'
import { products } from '../data/products'

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <Star
          key={i}
          size={11}
          className={i <= count ? 'text-peanuts-yellow fill-peanuts-yellow' : 'text-cream-warm fill-cream-warm'}
        />
      ))}
    </div>
  )
}

const featured = products.filter(p => p.featured).slice(0, 6)

function BSCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className="flex-shrink-0 w-[180px] sm:w-[200px] product-card-tf cursor-pointer group transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden rounded-t-2xl">
        {/* Gradient placeholder */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${product.gradientFrom || '#e8f4ea'}, ${product.gradientTo || '#c8e6d8'})` }}
        >
          <span className="font-quicksand font-semibold text-[10px] text-white/70 text-center px-2 leading-snug">
            {product.name}
          </span>
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="relative z-10 w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.07]"
          loading="lazy"
          onError={e => { e.target.style.display = 'none' }}
        />
        {/* Wishlist */}
        <motion.button
          className="absolute top-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-warm-gray/60 hover:text-peanuts-red transition-colors"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Heart size={13} />
        </motion.button>
        {/* SALE badge */}
        {product.featured && (
          <span className="absolute top-2.5 left-2.5 z-20 font-quicksand text-[10px] font-bold text-white bg-peanuts-green px-2 py-0.5 rounded-full">
            TOP
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="font-inter text-[10px] text-warm-gray/60 mb-0.5">{product.categories[0]}</p>
        <h4 className="font-quicksand font-semibold text-[13px] text-charming line-clamp-2 leading-snug mb-1.5">
          {product.name}
        </h4>
        <StarRating count={5} />
        <div className="flex items-center justify-between mt-2">
          <span className="font-mono font-bold text-[15px] text-peanuts-green">
            ${product.price.toLocaleString()}
          </span>
        </div>
        <button className="mt-2.5 w-full font-inter text-[11px] font-semibold text-peanuts-green border border-peanuts-green/40 rounded-lg py-1.5 hover:bg-peanuts-green hover:text-white transition-all duration-200">
          VER PRODUCTO
        </button>
      </div>
    </motion.div>
  )
}

export default function BestSellers() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir * 220, behavior: 'smooth' })
  }

  return (
    <div className="py-10 lg:py-14 bg-cream-light border-b border-peanuts-green/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="font-quicksand text-[10px] font-semibold text-peanuts-green tracking-[0.22em] uppercase mb-1">
              Más populares
            </p>
            <h3 className="font-poppins font-bold text-[22px] sm:text-[26px] text-charming">
              Más Vendidos
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => scroll(-1)}
              className="w-9 h-9 rounded-full border border-peanuts-green/25 flex items-center justify-center text-warm-gray hover:text-peanuts-green hover:border-peanuts-green transition-all duration-200"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <ChevronLeft size={16} />
            </motion.button>
            <motion.button
              onClick={() => scroll(1)}
              className="w-9 h-9 rounded-full border border-peanuts-green/25 flex items-center justify-center text-warm-gray hover:text-peanuts-green hover:border-peanuts-green transition-all duration-200"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <ChevronRight size={16} />
            </motion.button>
            <button className="ml-2 font-inter text-[12px] font-semibold text-peanuts-green hover:underline">
              Ver todo
            </button>
          </div>
        </div>

        {/* Horizontal scroll row */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar pb-2"
        >
          {featured.map((product, i) => (
            <BSCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
