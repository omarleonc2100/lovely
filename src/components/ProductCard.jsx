import { motion } from 'framer-motion'
import { Heart, ShoppingBag, Star } from 'lucide-react'

const badgeMap = {
  rose:   { bg: '#FEE2E6', text: '#B03060' },
  peach:  { bg: '#FEF3D0', text: '#A06010' },
  mint:   { bg: '#E4F3EC', text: '#2A6048' },
  purple: { bg: '#EDE9FE', text: '#5B21B6' },
  blue:   { bg: '#DBEAFE', text: '#1D4ED8' },
  gray:   { bg: '#F3F4F6', text: '#4B5563' },
}

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={10} className="text-peanuts-yellow fill-peanuts-yellow" />
      ))}
    </div>
  )
}

export default function ProductCard({ product, index }) {
  const badge = badgeMap[product.badgeColor] || badgeMap.mint

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.93, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      className="group product-card-tf cursor-pointer transition-all duration-300"
      whileHover={{ y: -4 }}
    >
      {/* Image zone */}
      <div className="relative aspect-square overflow-hidden rounded-t-2xl product-img-wrap">
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
          className="relative z-10 w-full h-full object-cover"
          loading="lazy"
          onError={e => { e.target.style.display = 'none' }}
        />

        {/* Badges */}
        {product.badge && (
          <span
            className="absolute top-2.5 left-2.5 z-20 font-quicksand text-[10px] font-semibold px-2.5 py-1 rounded-full"
            style={{ background: badge.bg, color: badge.text }}
          >
            {product.badge}
          </span>
        )}

        {/* Wishlist button */}
        <motion.button
          className="absolute top-2.5 right-2.5 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-warm-gray/50 hover:text-peanuts-red transition-colors"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
        >
          <Heart size={14} />
        </motion.button>
      </div>

      {/* Info zone */}
      <div className="p-3.5">
        <p className="font-inter text-[10px] text-warm-gray-light mb-0.5 uppercase tracking-wide">
          {product.categories[0]}
        </p>
        <h3 className="font-quicksand font-semibold text-[14px] text-charming line-clamp-2 leading-snug mb-1.5">
          {product.name}
        </h3>

        <StarRow />

        <p className="font-inter text-[11px] text-warm-gray/70 line-clamp-1 mt-1 mb-2.5">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-mono font-bold text-[17px] text-peanuts-green">
            ${product.price.toLocaleString()}
          </span>
          <motion.button
            className="flex items-center gap-1.5 font-inter text-[11px] font-semibold text-peanuts-green border border-peanuts-green/35 rounded-lg px-3 py-1.5 hover:bg-peanuts-green hover:text-white transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingBag size={12} />
            VER
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
