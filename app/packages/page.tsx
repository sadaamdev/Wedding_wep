'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, X, Star } from 'lucide-react'
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

export default function PackagesPage() {
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
              Wedding Packages
            </span>
            <h1 className="font-serif text-h1-mobile lg:text-h1 text-white mb-6">
              Choose Your Perfect Package
            </h1>
            <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
              Carefully curated packages designed to create the celebration of your dreams.
              From intimate ceremonies to grand celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section-padding -mt-20 relative z-20">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                variants={itemVariants}
                className={cn(
                  'relative rounded-2xl transition-all duration-400',
                  pkg.featured
                    ? 'bg-primary text-white shadow-luxury scale-105 md:scale-110 z-10 ring-2 ring-gold/50'
                    : 'bg-white shadow-card hover:shadow-card-hover'
                )}
              >
                {/* Popular/Featured Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-primary font-body text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-wide flex items-center gap-1.5">
                      <Star size={14} fill="currentColor" />
                      Most Popular
                    </span>
                  </div>
                )}
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-gold text-primary font-body text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-wide flex items-center gap-1.5">
                      <Star size={14} fill="currentColor" />
                      Premium VIP
                    </span>
                  </div>
                )}

                {/* Package Content */}
                <div className={cn('p-8', pkg.popular || pkg.featured ? 'pt-12' : '')}>
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
                        'font-serif text-5xl font-semibold',
                        pkg.featured ? 'text-gold' : 'text-primary'
                      )}
                    >
                      {formatPrice(pkg.price)}
                    </span>
                    <p
                      className={cn(
                        'font-body text-sm mt-2',
                        pkg.featured ? 'text-white/50' : 'text-muted-foreground/60'
                      )}
                    >
                      Starting from
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4
                      className={cn(
                        'font-body text-sm font-semibold uppercase tracking-wider mb-4',
                        pkg.featured ? 'text-white/50' : 'text-muted-foreground/60'
                      )}
                    >
                      Included Services
                    </h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, index) => (
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
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/booking"
                    className={cn(
                      'block w-full text-center py-4 rounded-full font-body font-medium transition-all duration-300',
                      pkg.featured
                        ? 'bg-gold text-primary hover:bg-gold-light hover:shadow-glow-gold'
                        : 'bg-primary text-white hover:bg-primary-600 hover:shadow-elegant'
                    )}
                  >
                    Choose Package
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-sand">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-serif text-h3 text-primary mb-4">
                Custom Packages
              </h3>
              <p className="font-body text-muted">
                Need something unique? We offer fully customizable packages tailored to your
                specific needs and budget. Contact us to create your dream celebration.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-serif text-h3 text-primary mb-4">
                Payment Plans
              </h3>
              <p className="font-body text-muted">
                We offer flexible payment plans to make your dream wedding more accessible.
                Speak with our team about financing options.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-h2-mobile lg:text-h2 text-primary mb-4">
              Ready to Start Planning?
            </h2>
            <p className="font-body text-muted mb-8">
              Book a free consultation with our wedding experts and get started on creating
              your perfect celebration.
            </p>
            <Link href="/booking" className="btn-accent">
              Book Your Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}