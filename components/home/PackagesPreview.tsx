'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { packages } from '@/lib/data'
import { formatPrice, cn } from '@/lib/utils'

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

export function PackagesPreview() {
  return (
    <section className="section-padding bg-sand">
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
            Wedding Packages
          </span>
          <h2 className="font-serif text-h2-mobile lg:text-h2 text-primary mb-4">
            Choose Your Perfect Package
          </h2>
          <p className="font-body text-muted max-w-2xl mx-auto">
            Select from our carefully curated packages honoring Somali traditions while
            delivering modern luxury for your special day.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              className={cn(
                'relative rounded-2xl p-8 transition-all duration-400',
                pkg.featured
                  ? 'bg-primary text-white shadow-luxury scale-105 md:scale-110 z-10'
                  : 'bg-white shadow-card hover:shadow-card-hover'
              )}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-primary font-body text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package Name */}
              <div className="text-center mb-6">
                <h3
                  className={cn(
                    'font-serif text-h3 font-semibold mb-2',
                    pkg.featured ? 'text-white' : 'text-primary'
                  )}
                >
                  {pkg.name}
                </h3>
                <p
                  className={cn(
                    'font-body text-sm',
                    pkg.featured ? 'text-white/70' : 'text-muted'
                  )}
                >
                  {pkg.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <span
                  className={cn(
                    'font-serif text-4xl font-semibold',
                    pkg.featured ? 'text-gold' : 'text-primary'
                  )}
                >
                  {formatPrice(pkg.price)}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.slice(0, 5).map((feature, index) => (
                  <li
                    key={index}
                    className={cn(
                      'flex items-start gap-3 font-body text-sm',
                      pkg.featured ? 'text-white/80' : 'text-muted'
                    )}
                  >
                    <Check
                      size={18}
                      className={cn(
                        'flex-shrink-0 mt-0.5',
                        pkg.featured ? 'text-gold' : 'text-gold'
                      )}
                    />
                    {feature}
                  </li>
                ))}
                {pkg.features.length > 5 && (
                  <li
                    className={cn(
                      'font-body text-sm',
                      pkg.featured ? 'text-white/60' : 'text-muted-foreground/60'
                    )}
                  >
                    +{pkg.features.length - 5} more features
                  </li>
                )}
              </ul>

              {/* CTA */}
              <Link
                href="/booking"
                className={cn(
                  'block w-full text-center py-4 rounded-full font-body font-medium transition-all duration-300',
                  pkg.featured
                    ? 'bg-gold text-primary hover:bg-gold-light'
                    : 'bg-primary text-white hover:bg-primary-600'
                )}
              >
                Choose Package
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Packages Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/packages" className="btn-ghost">
            View Full Package Details
            <span className="ml-2">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}