'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Star, Building2 } from 'lucide-react'
import { openingPackages } from '@/lib/data'
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

export default function OpeningPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2835438/pexels-photo-2835438.jpeg?w=1920&h=600&fit=crop')`,
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
              Opening Ceremony
            </span>
            <h1 className="font-serif text-h1-mobile lg:text-h1 text-white mb-6">
              Xulasho Wedding & Event Management
            </h1>
            <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
              Make your grand opening unforgettable. From small business launches to corporate events.
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {openingPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                variants={cardVariants}
                className={cn(
                  'group relative rounded-2xl transition-all duration-400 overflow-hidden h-full flex flex-col',
                  pkg.featured
                    ? 'bg-primary text-white shadow-luxury scale-105 ring-2 ring-gold/50'
                    : pkg.popular
                    ? 'bg-white shadow-card hover:shadow-card-hover'
                    : 'bg-white shadow-card hover:shadow-card-hover'
                )}
              >
                {/* Popular/Featured Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gold text-primary font-body text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-wide flex items-center gap-1.5">
                      <Star size={14} fill="currentColor" />
                      Most Popular
                    </span>
                  </div>
                )}
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-gold text-primary font-body text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-wide flex items-center gap-1.5">
                      <Star size={14} fill="currentColor" />
                      Premium VIP
                    </span>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-1 h-full">
                  {/* Top: Icon + Title + Description */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      {index === 0 && <Sparkles className={cn("w-5 h-5", pkg.featured ? "text-gold" : "text-rose-400")} />}
                      {index === 1 && <Sparkles className={cn("w-5 h-5", pkg.featured ? "text-gold" : "text-gold")} />}
                      {index === 2 && <Star className="w-5 h-5 text-gold" />}
                      {index === 3 && <Building2 className={cn("w-5 h-5", pkg.featured ? "text-gold" : "text-blue-500")} />}
                      <span className={cn("font-body text-xs font-medium uppercase tracking-wider", pkg.featured ? "text-white/70" : "text-secondary/60")}>
                        {pkg.tagline}
                      </span>
                    </div>

                    <h3 className={cn("font-serif text-xl mb-2", pkg.featured ? "text-white" : "text-primary")}>
                      {pkg.name}
                    </h3>

                    <p className={cn("font-body text-sm mb-5", pkg.featured ? "text-white/70" : "text-secondary/70")}>
                      {pkg.description}
                    </p>
                  </div>

                  {/* Middle: Features */}
                  <div className="flex-1 mb-6">
                    <h4 className={cn("font-body text-xs font-semibold uppercase tracking-wider mb-3", pkg.featured ? "text-gold" : "text-primary")}>
                      Includes:
                    </h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={cn("w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0", pkg.featured ? "bg-gold" : "bg-gold")} />
                          <span className={cn("font-body text-sm", pkg.featured ? "text-white/80" : "text-secondary")}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom: Price + CTA */}
                  <div className="mt-auto pt-6 border-t border-gray-100/20">
                    <div className="mb-5">
                      <span className={cn("font-serif text-3xl", pkg.featured ? "text-white" : "text-primary")}>
                        {pkg.price > 0 ? formatPrice(pkg.price) : 'Custom'}
                      </span>
                      {pkg.price > 0 && (
                        <span className={cn("font-body text-sm ml-2", pkg.featured ? "text-white/60" : "text-secondary/60")}>
                          starting from
                        </span>
                      )}
                    </div>

                    <Link
                      href="/booking"
                      className={cn(
                        "inline-flex items-center justify-center gap-2 w-full font-body font-semibold py-4 rounded-full transition-colors",
                        pkg.featured
                          ? "bg-gold text-primary hover:bg-gold/90"
                          : "bg-primary text-white hover:bg-primary/90"
                      )}
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
        </div>
      </section>
    </div>
  )
}