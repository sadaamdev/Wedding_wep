'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Heart, Sparkles, Star } from 'lucide-react'
import { packages } from '@/lib/data'
import { formatPrice } from '@/lib/utils'

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

const cardVariants = {
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

export function WeddingEvents() {
  // Get first 3 packages for the cards
  const weddingPackages = packages.slice(0, 3)

  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold font-body text-sm font-medium tracking-widest uppercase mb-4">
            Wedding Events
          </span>
          <h2 className="font-serif text-h2-mobile lg:text-h2 text-primary mb-6">
            Xulasho Wedding & Event Management
          </h2>
          <p className="font-body text-lg text-secondary/70 max-w-2xl mx-auto">
            Create your perfect wedding with our curated packages. From intimate ceremonies to grand celebrations.
          </p>
        </motion.div>

        {/* Package Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {weddingPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-400 overflow-hidden h-full flex flex-col"
            >
              {/* Card Content */}
              <div className="p-8 flex flex-col flex-1 h-full">
                {/* Top: Icon, Title, Tagline */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    {index === 0 && <Heart className="w-5 h-5 text-rose-400" />}
                    {index === 1 && <Sparkles className="w-5 h-5 text-gold" />}
                    {index === 2 && <Star className="w-5 h-5 text-gold" />}
                    <span className="font-body text-xs font-medium text-secondary/60 uppercase tracking-wider">
                      {index === 0 ? 'Simple & Beautiful' : index === 1 ? 'Elegant Experience' : 'Luxury Celebration'}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-primary mb-2">
                    {pkg.name}
                  </h3>

                  <p className="font-body text-sm text-secondary/70">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Middle: Features Preview */}
                <div className="flex-1 mt-5 mb-6">
                  <ul className="space-y-2.5">
                    {pkg.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                        <span className="font-body text-sm text-secondary">{feature}</span>
                      </li>
                    ))}
                    {pkg.features.length > 4 && (
                      <li className="font-body text-sm text-gold">
                        +{pkg.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Bottom: Price + CTA */}
                <div className="pt-6 border-t border-gray-100 mt-auto">
                  <div className="mb-5">
                    <span className="font-serif text-3xl text-primary">
                      {pkg.price > 0 ? formatPrice(pkg.price) : 'Custom'}
                    </span>
                    {pkg.price > 0 && (
                      <span className="font-body text-sm text-secondary/60 ml-2">
                        starting from
                      </span>
                    )}
                  </div>

                  <Link
                    href="/packages"
                    className="inline-flex items-center justify-center gap-2 w-full bg-primary text-white font-body font-semibold py-3.5 rounded-full hover:bg-primary/90 transition-colors text-sm"
                  >
                    View Package
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 bg-primary text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-colors"
          >
            View All Packages
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}