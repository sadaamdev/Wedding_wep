'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export function Testimonials() {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold font-body text-sm font-medium tracking-widest uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-serif text-h2-mobile lg:text-h2 mb-4">
            What Our Couples Say
          </h2>
          <p className="font-body text-white/60 max-w-2xl mx-auto">
            Honored to have created magical celebrations honoring Somali traditions for so many beautiful couples.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="relative bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-gold/20">
                <Quote size={48} />
              </div>

              {/* Content */}
              <p className="font-body text-white/80 italic mb-8 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-serif text-lg font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="font-body text-sm text-gold">
                    {testimonial.weddingType}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}