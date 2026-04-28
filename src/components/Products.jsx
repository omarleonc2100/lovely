import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { products, categories } from '../data/products'
import ProductCard from './ProductCard'
import BestSellers from './BestSellers'
import PromoBanner from './PromoBanner'

export default function Products({ externalFilter }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = useMemo(() => {
    let list = products
    const cat = externalFilter || (activeCategory !== 'all' ? activeCategory : null)
    if (cat) {
      list = list.filter(p => p.categories.includes(cat) || p.theme === cat)
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.categories.some(c => c.toLowerCase().includes(q)) ||
        p.theme?.toLowerCase().includes(q)
      )
    }
    return list
  }, [activeCategory, searchQuery, externalFilter])

  return (
    <section id="coleccion">
      {/* Peanuts stripe divider */}
      <div className="peanuts-section-divider" />

      {/* Best Sellers — TF Beauty style */}
      <BestSellers />

      {/* Promo banners */}
      <PromoBanner onFilterByTheme={(t) => setActiveCategory(t)} />

      {/* Full catalog */}
      <div className="py-10 lg:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="font-quicksand text-[10px] font-semibold text-peanuts-green tracking-[0.22em] uppercase mb-2">
              Catálogo completo
            </p>
            <h2 className="font-poppins font-bold text-[28px] sm:text-[34px] lg:text-[40px] text-charming">
              Encuentra tu favorito
            </h2>
          </motion.div>

          {/* Search bar */}
          <div className="relative mb-6 max-w-lg">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Busca por personaje, tipo o tema..."
              className="w-full font-inter text-[13px] text-charming placeholder-warm-gray/40 bg-cream-light border border-peanuts-green/15 focus:border-peanuts-green rounded-xl px-5 py-3 pr-11 outline-none transition-all duration-200"
            />
            {searchQuery ? (
              <button onClick={() => setSearchQuery('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-warm-gray/50 hover:text-peanuts-green transition-colors">
                <X size={15} />
              </button>
            ) : (
              <Search size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-peanuts-green/60" />
            )}
          </div>

          {/* Category tabs */}
          <div className="mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 sm:flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 font-quicksand text-[12px] font-semibold px-4 py-2 rounded-full border transition-all duration-200 whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-peanuts-green text-cream-light border-peanuts-green'
                      : 'bg-transparent text-warm-gray border-peanuts-green/25 hover:bg-peanuts-green-pale hover:border-peanuts-green/40'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product grid */}
          <AnimatePresence mode="popLayout">
            {filteredProducts.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16"
              >
                <p className="font-poppins text-warm-gray text-[15px] mb-3">
                  No encontramos productos para tu búsqueda
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all') }}
                  className="font-inter text-[13px] font-semibold text-peanuts-green hover:underline"
                >
                  Ver todos los productos
                </button>
              </motion.div>
            ) : (
              <motion.div key="grid" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
                {filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
