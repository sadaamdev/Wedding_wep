'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Heart, Sparkles, Star, Cake, GraduationCap, Building2 } from 'lucide-react'
import { packages, openingPackages, graduationPackages, birthdayPackages } from '@/lib/data'
import { formatPrice, cn } from '@/lib/utils'

const packageCategories = [
  { id: 'wedding', title: 'Wedding Packages', packages: packages, icon: Heart },
  { id: 'opening', title: 'Opening Ceremony Packages', packages: openingPackages, icon: Building2 },
  { id: 'graduation', title: 'Graduation Packages', packages: graduationPackages, icon: GraduationCap },
  { id: 'birthday', title: 'Birthday Packages', packages: birthdayPackages, icon: Cake },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export default function PackagesPage() {
  const [activeCategory, setActiveCategory] = useState('wedding')

  const currentCategory = packageCategories.find(cat => cat.id === activeCategory)

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
              Our Packages
            </span>
            <h1 className="font-serif text-h1-mobile lg:text-h1 text-white mb-6">
              Choose Your Perfect Package
            </h1>
            <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we have packages to fit your needs and budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white border-b border-border sticky top-0 z-30">
        <div className="container-custom px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {packageCategories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-gold text-primary'
                      : 'bg-sand text-primary hover:bg-gold/10'
                  }`}
                >
                  <Icon size={18} />
                  {category.title.split(' ')[0]}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-serif text-h2-mobile lg:text-h2 text-primary mb-8 text-center">
              {currentCategory?.title}
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentCategory?.packages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  variants={cardVariants}
                  className={cn(
                    'group relative rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-400 overflow-hidden h-full flex flex-col',
                    pkg.featured ? 'bg-primary text-white ring-2 ring-gold' : 'bg-white'
                  )}
                >
                  {/* Card Content */}
                  <div className="p-8 flex flex-col flex-1 h-full">
                    {/* Top: Icon, Title, Description, Tagline */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        {pkg.featured && <Sparkles className="w-5 h-5 text-gold" />}
                        {pkg.popular && <Star className="w-5 h-5 text-gold" />}
                        {!pkg.featured && !pkg.popular && <Heart className="w-5 h-5 text-rose-400" />}
                        <span className="font-body text-xs font-medium text-secondary/60 uppercase tracking-wider">
                          {pkg.featured ? 'Featured' : pkg.popular ? 'Popular' : 'Basic'}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl text-primary mb-2">
                        {pkg.name}
                      </h3>

                      <p className="font-body text-sm text-secondary/70 mb-3">
                        {pkg.description}
                      </p>

                      {pkg.tagline && (
                        <p className="font-body text-xs text-gold font-medium mb-3">
                          {pkg.tagline}
                        </p>
                      )}
                    </div>

                    {/* Middle: Features */}
                    <div className="flex-1 mb-6">
                      <h4 className="font-body text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                        Includes:
                      </h4>
                      <ul className="space-y-2.5">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                            <span className="font-body text-sm text-secondary">{feature}</span>
                          </li>
                        ))}
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
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-sand">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-h2-mobile lg:text-h2 text-primary mb-4">
              Need a Custom Package?
            </h2>
            <p className="font-body text-muted mb-8">
              We can create a personalized package tailored to your specific needs and budget.
              Book a free consultation to discuss your requirements.
            </p>
            <Link
              href="/booking"
              className="btn-accent inline-flex items-center gap-2"
            >
              Book Consultation
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}