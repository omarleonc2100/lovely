import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, MessageCircle, ExternalLink } from 'lucide-react'

const schedule = [
  { days: 'Lunes – Sábado', hours: '10:00 – 20:00', open: true },
  { days: 'Domingo',         hours: 'Cerrado',         open: false },
]

const DAYS = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

function isTodayRow(row) {
  const today = DAYS[new Date().getDay()]
  return row.days === 'Domingo' ? today === 'Domingo' : today !== 'Domingo'
}

export default function Location() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="ubicacion" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-block font-quicksand text-[10px] font-semibold text-peanuts-green bg-peanuts-green-pale px-3.5 py-1.5 rounded-full tracking-[0.2em] uppercase border border-peanuts-green/20 mb-5">
              Encuéntranos
            </span>
            <h2 className="font-poppins font-bold text-[30px] sm:text-[38px] lg:text-[42px] text-charming leading-tight mb-7">
              Lovely A te está esperando
            </h2>

            <div className="flex flex-col gap-4 mb-8">
              {[
                { Icon: MapPin,         color: '#4A7A5A', text: 'Calle Miguel Lira y Ortega No. 3-Loc 1 Y 2, Centro, 90000 Tlaxcala de Xicohténcatl, Tlax., México' },
                { Icon: Phone,          color: '#4A7A5A', text: '+52 55 137 41 737', href: 'tel:+5255137417737' },
                { Icon: MessageCircle,  color: '#25D366', text: '+52 55 137 41 737 (WhatsApp)', href: 'https://wa.me/5255137417737' },
              ].map(({ Icon, color, text, href }) => (
                <div key={text} className="flex items-start gap-3.5">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: color + '18' }}>
                    <Icon size={16} style={{ color }} />
                  </div>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="font-inter text-[14px] text-warm-gray hover:text-peanuts-green transition-colors pt-1.5">{text}</a>
                  ) : (
                    <p className="font-inter text-[14px] text-warm-gray leading-relaxed pt-1.5">{text}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Schedule */}
            <div className="mb-8 rounded-2xl overflow-hidden border border-peanuts-green/10">
              <div className="bg-peanuts-green px-5 py-3">
                <p className="font-quicksand font-semibold text-[11px] text-cream-light/80 uppercase tracking-wider">
                  Horarios de Atención
                </p>
              </div>
              {schedule.map(s => {
                const isToday = isTodayRow(s)
                return (
                  <div
                    key={s.days}
                    className={`flex items-center justify-between px-5 py-3.5 border-b last:border-0 ${isToday ? 'border-l-[3px] border-l-peanuts-green bg-peanuts-green-pale' : ''}`}
                    style={{ borderBottomColor: 'rgba(74,122,90,0.08)' }}
                  >
                    <span className={`font-mono text-[13px] ${isToday ? 'text-charming font-semibold' : 'text-warm-gray'}`}>
                      {s.days}
                      {isToday && (
                        <span className="ml-2 font-quicksand text-[10px] font-bold text-peanuts-green bg-peanuts-green/12 px-2 py-0.5 rounded-full">Hoy</span>
                      )}
                    </span>
                    <span className={`font-mono text-[13px] ${s.open ? 'text-charming' : 'text-warm-gray/40'}`}>{s.hours}</span>
                  </div>
                )
              })}
            </div>

            <motion.a
              href="https://maps.app.goo.gl/mY4Ja12geh9rrGJi8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-inter text-[13px] font-semibold text-peanuts-green border-2 border-peanuts-green/40 rounded-full px-6 py-3 hover:bg-peanuts-green hover:border-peanuts-green hover:text-cream-light transition-all duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Cómo llegar <ExternalLink size={13} />
            </motion.a>
          </motion.div>

          {/* Right — map */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div
              className="overflow-hidden rounded-3xl transition-all duration-300 hover:shadow-green-soft"
              style={{ border: '2px solid rgba(74,122,90,0.18)' }}
            >
              <iframe
                title="Lovely A — Ubicación"
                src="https://maps.google.com/maps?q=Calle+Miguel+Lira+y+Ortega+3,+Centro,+Tlaxcala+de+Xicohtencatl,+Tlaxcala,+Mexico&output=embed&z=17"
                width="100%"
                height="380"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="lg:h-[420px] h-[250px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
