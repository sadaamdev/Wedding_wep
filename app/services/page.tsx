'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Sparkles,
  Building2,
  Camera,
  Video,
  Music,
  Flame,
  Mail,
  Mic2,
  Cake,
  ClipboardCheck,
  Frame,
  Heart,
  GraduationCap,
  ArrowRight,
} from 'lucide-react'
import { services } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Building2,
  Camera,
  Video,
  Music,
  Flame,
  Mail,
  Mic2,
  Cake,
  ClipboardCheck,
  Frame,
  Heart,
  GraduationCap,
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?w=1920&h=600&fit=crop')`,
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
              Our Services
            </span>
            <h1 className="font-serif text-h1-mobile lg:text-h1 text-white mb-6">
              Comprehensive Wedding Services
            </h1>
            <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
              From initial planning to the final dance, we provide everything you need
              for a magical celebration that reflects your unique love story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          >
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Sparkles
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group h-full"
                >
                  <Link href={service.href} className="block h-full">
                    <div className="card-luxury overflow-hidden h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden flex-shrink-0">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col flex-1">
                        <div className="flex-1">
                          <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                            <Icon className="w-7 h-7 text-gold" />
                          </div>
                          <h3 className="font-serif text-h4 text-primary mb-2">
                            {service.title}
                          </h3>
                          <p className="font-body text-muted leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        <div className="mt-auto pt-6">
                          <span className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm uppercase tracking-wide group-hover:gap-3 transition-all duration-300">
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
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
              Need Help Planning Your Wedding?
            </h2>
            <p className="font-body text-muted mb-8">
              Our expert team is here to guide you through every step of the planning process.
              Book a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/booking"
                className="btn-accent inline-flex items-center gap-2"
              >
                Book Consultation
                <ArrowRight size={18} />
              </Link>
              <Link href="/packages" className="btn-ghost">
                View Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}