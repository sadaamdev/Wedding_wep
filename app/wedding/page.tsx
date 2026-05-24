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

export default function WeddingPage() {
  // Get first 3 packages
  const weddingPackages = packages

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?w=1920&h=600&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary" />

        <div className="relative z-10 container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block text-gold font-body text-sm font-medium tracking-widest uppercase mb-4">
              Wedding Events
            </span>
            <h1 className="font-serif text-h1-mobile lg:text-h1 text-white mb-6">
              Xulasho Wedding & Event Management
            </h1>
            <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
              Choose your perfect wedding package. From intimate ceremonies to grand celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="section-padding -mt-20 relative z-20">
        <div className="container-custom">
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
                  {/* Top: Icon + Title + Description */}
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

                    <p className="font-body text-sm text-secondary/70 mb-5">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Middle: Features */}
                  <div className="flex-1 mb-6">
                    <h4 className="font-body text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                      Includes:
                    </h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                          <span className="font-body text-sm text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom: Price + CTA */}
                  <div className="mt-auto pt-6 border-t border-gray-100">
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
                      href="/booking"
                      className="inline-flex items-center justify-center gap-2 w-full bg-primary text-white font-body font-semibold py-4 rounded-full hover:bg-primary/90 transition-colors"
                    >
                      Book This Package
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* View All Packages Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm uppercase tracking-wide hover:gap-3 transition-all"
            >
              View All Packages
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}