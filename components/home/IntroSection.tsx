'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export function IntroSection() {
  return (
    <section className="section-padding bg-sand">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-somali-red fill-somali-red" />
            <span className="text-gold font-body text-sm font-medium tracking-widest uppercase">
              Our Philosophy
            </span>
            <Heart className="w-5 h-5 text-somali-red fill-somali-red" />
          </div>

          <blockquote className="font-serif text-h2-mobile lg:text-h2 text-primary leading-tight mb-8">
            <span className="text-gold">"</span>
            Every wedding tells a story of love, family, and heritage. We are honored to be the ones who help write those stories, blending the rich traditions of Somali culture with the luxury and elegance you deserve.
            <span className="text-gold">"</span>
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-0.5 bg-gold/30" />
            <p className="font-body text-muted italic">
              — XULASHO Team
            </p>
            <div className="w-16 h-0.5 bg-gold/30" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}