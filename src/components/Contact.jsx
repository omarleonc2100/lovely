import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Send } from 'lucide-react'

const asuntos = [
  'Consulta sobre productos',
  'Envíos y entregas',
  'Cambios y devoluciones',
  'Solicitud personalizada',
  'Otro',
]

const inputBase =
  'w-full font-inter text-[13px] text-charming placeholder-warm-gray/40 bg-cream border border-peanuts-green/15 focus:border-peanuts-green rounded-xl px-4 py-3.5 outline-none transition-all duration-200'

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
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
            Te responderemos en 24 horas
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
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-peanuts-green/12 mx-auto mb-5"
                >
                  <CheckCircle size={32} className="text-peanuts-green" />
                </motion.div>
                <h3 className="font-poppins font-bold text-[20px] text-charming mb-2">Mensaje enviado</h3>
                <p className="font-inter text-[13px] text-warm-gray">
                  Nos pondremos en contacto pronto. ¡Gracias por escribirnos!
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ nombre: '', email: '', asunto: '', mensaje: '' }) }}
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-quicksand text-[10px] font-semibold text-warm-gray uppercase tracking-widest mb-1.5 block">Nombre</label>
                    <input type="text" name="nombre" required value={form.nombre} onChange={handleChange} placeholder="Tu nombre" className={inputBase} />
                  </div>
                  <div>
                    <label className="font-quicksand text-[10px] font-semibold text-warm-gray uppercase tracking-widest mb-1.5 block">Email</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="tu@correo.com" className={inputBase} />
                  </div>
                </div>

                <div>
                  <label className="font-quicksand text-[10px] font-semibold text-warm-gray uppercase tracking-widest mb-1.5 block">Asunto</label>
                  <select name="asunto" required value={form.asunto} onChange={handleChange} className={`${inputBase} cursor-pointer`}>
                    <option value="" disabled>Selecciona un asunto</option>
                    {asuntos.map(a => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>

                <div>
                  <label className="font-quicksand text-[10px] font-semibold text-warm-gray uppercase tracking-widest mb-1.5 block">Mensaje</label>
                  <textarea name="mensaje" required rows={4} value={form.mensaje} onChange={handleChange} placeholder="Cuéntanos qué buscas..." className={`${inputBase} resize-none`} />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 w-full font-inter text-[14px] font-semibold text-cream-light bg-peanuts-green rounded-full py-4 mt-1 transition-all duration-200 disabled:opacity-70"
                  whileHover={!loading ? { scale: 1.02, boxShadow: '0 4px 20px rgba(74,122,90,0.35)' } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                >
                  {loading ? (
                    <motion.div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} />
                  ) : (
                    <> Enviar mensaje <Send size={14} /> </>
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
