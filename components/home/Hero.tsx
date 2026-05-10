'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, Sparkles, Heart } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://afrikhotel.so/wp-content/uploads/2015/07/somali-wedding-1024x684.jpg')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating decorative elements - Somali colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-2 h-2 bg-somali-blue/40 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-40 right-20 w-3 h-3 bg-somali-red/30 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-40 left-1/4 w-2 h-2 bg-somali-green/40 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-gold/40 rounded-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
        >
          <Heart size={16} className="text-somali-red" />
          <span className="text-white/90 font-body text-sm tracking-wide">
            Premium Somali Wedding Specialists
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-hero-mobile lg:text-hero text-white mb-6 max-w-4xl mx-auto"
        >
          Celebrating Love with
          <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-somali-blue via-gold to-somali-red">
            Somali Tradition & Luxury
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
        >
          From your Henna Night to your Walima, we honor your heritage while creating
          modern luxury celebrations. Where culture meets elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/booking"
            className="btn-accent text-base px-10 py-4"
          >
            Book Consultation
          </Link>
          <Link
            href="/packages"
            className="btn-secondary text-base px-10 py-4"
          >
            View Packages
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/60 cursor-pointer"
        >
          <span className="font-body text-xs tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}