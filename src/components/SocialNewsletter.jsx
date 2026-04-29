import { motion } from 'framer-motion'
import { Instagram, Facebook, MessageCircle } from 'lucide-react'

const socials = [
  { icon: Instagram,     label: 'Instagram', href: 'https://www.instagram.com/l.lovelya/',    hover: '#F06292' },
  { icon: Facebook,      label: 'Facebook',  href: 'https://www.facebook.com/lovelya.tienda', hover: '#F06292' },
  { icon: MessageCircle, label: 'WhatsApp',  href: 'https://wa.me/5215513741737',              hover: '#25D366' },
]

export default function SocialNewsletter() {
  return (
    <section className="py-20 lg:py-24 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <h2 className="font-poppins font-bold text-[28px] sm:text-[36px] lg:text-[42px] text-charming mb-3">
            Síguenos y no te pierdas de nada
          </h2>
          <p className="font-inter text-[14px] text-warm-gray">
            Novedades, nuevos productos y ofertas exclusivas
          </p>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-4"
        >
          {socials.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex items-center justify-center w-[52px] h-[52px] rounded-full text-warm-gray border-2 transition-all duration-200"
                style={{ borderColor: 'rgba(240,98,146,0.3)' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.2 }}
                whileHover={{ scale: 1.12, backgroundColor: s.hover, color: '#FEFCF5', borderColor: s.hover }}
                whileTap={{ scale: 0.93 }}
              >
                <Icon size={21} />
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
