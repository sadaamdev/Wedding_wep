'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/252612345678', '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={handleClick}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-elegant hover:shadow-luxury hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} className="md:w-8 md:h-8" />
      </button>
    </motion.div>
  )
}