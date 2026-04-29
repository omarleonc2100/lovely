import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, MessageCircle, ChevronDown } from 'lucide-react'

const asuntos = [
  'Consulta sobre productos',
  'Envíos y entregas',
  'Cambios y devoluciones',
  'Solicitud personalizada',
  'Otro',
]

const countryCodes = [
  { code: '+52', flag: '🇲🇽', label: 'México' },
  { code: '+1',  flag: '🇺🇸', label: 'EUA' },
  { code: '+1',  flag: '🇨🇦', label: 'Canadá' },
  { code: '+34', flag: '🇪🇸', label: 'España' },
  { code: '+57', flag: '🇨🇴', label: 'Colombia' },
  { code: '+54', flag: '🇦🇷', label: 'Argentina' },
  { code: '+56', flag: '🇨🇱', label: 'Chile' },
  { code: '+51', flag: '🇵🇪', label: 'Perú' },
]

const inputBase =
  'w-full font-inter text-[13px] text-charming placeholder-warm-gray/40 bg-cream border border-peanuts-green/15 focus:border-peanuts-green rounded-xl px-4 py-3.5 outline-none transition-all duration-200'

function buildWhatsAppMessage({ nombre, countryCode, telefono, asunto, mensaje }) {
  const lines = [
    `Hola, Lovely A`,
    ``,
    `*Nombre:* ${nombre}`,
    `*Teléfono:* ${countryCode} ${telefono}`,
    `*Asunto:* ${asunto}`,
    ``,
    `*Mensaje:*`,
    mensaje,
    ``,
    `Quedo en espera de su respuesta. ¡Gracias!`,
  ]
  return encodeURIComponent(lines.join('\n'))
}

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', countryCode: '+52', telefono: '', asunto: '', mensaje: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    const text = buildWhatsAppMessage(form)
    setTimeout(() => {
      window.open(`https://wa.me/5215513741737?text=${text}`, '_blank')
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-cream-warm">
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
            Ponte en Contacto
          </span>
          <h2 className="font-poppins font-bold text-[30px] sm:text-[40px] lg:text-[46px] text-charming mb-3">
            Cuéntanos cómo podemos ayudarte
          </h2>
          <p className="font-inter text-[14px] text-warm-gray">
            Te responderemos por WhatsApp a la brevedad
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-[580px] mx-auto"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="peanuts-card p-10 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 18, delay: 0.1 }}
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366]/12 mx-auto mb-5"
                >
                  <CheckCircle size={32} className="text-[#25D366]" />
                </motion.div>
                <h3 className="font-poppins font-bold text-[20px] text-charming mb-2">WhatsApp abierto</h3>
                <p className="font-inter text-[13px] text-warm-gray">
                  Tu mensaje fue preparado. ¡Envíalo y te responderemos pronto!
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ nombre: '', countryCode: '+52', telefono: '', asunto: '', mensaje: '' }) }}
                  className="mt-5 font-inter text-[12px] font-semibold text-peanuts-green hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="peanuts-card p-6 sm:p-8 flex flex-col gap-5"
              >
                {/* Nombre */}
                <div>
                  <label className="font-quicksand text-[10px] font-semibold text-warm-gray uppercase tracking-widest mb-1.5 block">Nombre</label>
                  <input type="text" name="nombre" required value={form.nombre} onChange={handleChange} placeholder="Tu nombre completo" className={inputBase} />
                </div>

                {/* Phone with country code */}
                <div>
                  <label className="font-quicksand text-[10px] font-semibold text-warm-gray uppercase tracking-widest mb-1.5 block">Teléfono</label>
                  <div className="flex gap-2">
                    <div className="relative flex-shrink-0">
                      <select
                        name="countryCode"
                        value={form.countryCode}
                        onChange={handleChange}
                        className="appearance-none font-inter text-[13px] text-charming bg-cream border border-peanuts-green/15 focus:border-peanuts-green rounded-xl pl-3 pr-8 py-3.5 outline-none transition-all duration-200 cursor-pointer"
                      >
                        {countryCodes.map((c, i) => (
                          <option key={`${c.code}-${i}`} value={c.code}>
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none" />
                    </div>
                    <input
                      type="tel"
                      name="telefono"
                      required
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="55 1234 5678"
                      className={`${inputBase} flex-1`}
                    />
                  </div>
                </div>

                {/* Asunto */}
                <div>
                  <label className="font-quicksand text-[10px] font-semibold text-warm-gray uppercase tracking-widest mb-1.5 block">Asunto</label>
                  <select name="asunto" required value={form.asunto} onChange={handleChange} className={`${inputBase} cursor-pointer`}>
                    <option value="" disabled>Selecciona un asunto</option>
                    {asuntos.map(a => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="font-quicksand text-[10px] font-semibold text-warm-gray uppercase tracking-widest mb-1.5 block">Mensaje</label>
                  <textarea name="mensaje" required rows={4} value={form.mensaje} onChange={handleChange} placeholder="Cuéntanos qué buscas o en qué podemos ayudarte..." className={`${inputBase} resize-none`} />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2.5 w-full font-inter text-[14px] font-semibold text-white bg-[#25D366] rounded-full py-4 mt-1 transition-all duration-200 disabled:opacity-70"
                  whileHover={!loading ? { scale: 1.02, boxShadow: '0 4px 20px rgba(37,211,102,0.35)' } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                >
                  {loading ? (
                    <motion.div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} />
                  ) : (
                    <> <MessageCircle size={15} /> Enviar por WhatsApp </>
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
