import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Facebook, MessageCircle, CheckCircle, Send } from 'lucide-react'

const socials = [
  { icon: Instagram,     label: 'Instagram', href: 'https://www.instagram.com/l.lovelya/',         hover: '#4A7A5A' },
  { icon: Facebook,      label: 'Facebook',  href: 'https://www.facebook.com/lovelya.tienda',      hover: '#4A7A5A' },
  { icon: MessageCircle, label: 'WhatsApp',  href: 'https://wa.me/5255137417737',                  hover: '#25D366' },
]

export default function SocialNewsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async e => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 700))
    setLoading(false)
    setSubscribed(true)
  }

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
          className="flex items-center justify-center gap-4 mb-12"
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
                style={{ borderColor: 'rgba(74,122,90,0.3)' }}
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

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="max-w-[420px] mx-auto"
        >
          <p className="font-inter text-[13px] text-warm-gray mb-4">Recibe ofertas especiales en tu correo</p>

          <AnimatePresence mode="wait">
            {subscribed ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-2.5 peanuts-card px-6 py-4"
              >
                <CheckCircle size={17} className="text-peanuts-green" />
                <span className="font-inter text-[13px] font-medium text-charming">
                  ¡Ya formas parte de Lovely A!
                </span>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="flex-1 font-inter text-[13px] text-charming placeholder-warm-gray/40 bg-cream border border-peanuts-green/18 focus:border-peanuts-green rounded-xl px-4 py-3 outline-none transition-colors duration-200"
                />
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 font-inter text-[13px] font-semibold text-cream-light bg-peanuts-green rounded-full px-6 py-3 flex-shrink-0 disabled:opacity-70"
                  whileHover={!loading ? { scale: 1.04, boxShadow: '0 4px 16px rgba(74,122,90,0.35)' } : {}}
                  whileTap={!loading ? { scale: 0.97 } : {}}
                >
                  {loading ? (
                    <motion.div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" animate={{ rotate: 360 }} transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }} />
                  ) : (
                    <> Suscribirse <Send size={12} /> </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
