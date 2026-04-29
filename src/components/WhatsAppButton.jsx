import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5215513741737"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 flex items-center justify-center w-[54px] h-[54px] rounded-full text-white"
      style={{ background: '#25D366', zIndex: 60, boxShadow: '0 4px 20px rgba(37,211,102,0.35)' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 240, damping: 18 }}
      whileHover={{ scale: 1.1, boxShadow: '0 6px 28px rgba(37,211,102,0.5)' }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={24} />
    </motion.a>
  )
}
