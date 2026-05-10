'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1591604466107-3a4a11c595d2?w=1920&h=600&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-h2-mobile lg:text-h2 text-white mb-6">
            Ready to Create Your Dream Wedding?
          </h2>
          <p className="font-body text-lg text-white/80 mb-10">
            Book a free consultation with our wedding experts and let us help you
            create the celebration of your dreams.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/booking"
              className="btn-accent text-base inline-flex items-center gap-2"
            >
              Book Consultation
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="btn-secondary text-base"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}