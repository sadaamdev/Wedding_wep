'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
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
  GraduationCap
} from 'lucide-react'
import { services } from '@/lib/data'
import { cn } from '@/lib/utils'

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
      staggerChildren: 0.1,
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

export function ServicesPreview() {
  const previewServices = services.slice(0, 6)

  return (
    <section className="section-padding bg-cream">
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
            Our Services
          </span>
          <h2 className="font-serif text-h2-mobile lg:text-h2 text-primary mb-4">
            Complete Somali Wedding Services
          </h2>
          <p className="font-body text-muted max-w-2xl mx-auto">
            From your Henna Night (Qorax Cad) to your Walima celebration, we provide traditional
            and modern services honoring Somali heritage while delivering luxury experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {previewServices.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles
            const isWeddingEvent = service.id === 'wedding-events'
            const isOpeningCeremony = service.id === 'opening-ceremony'
            const isGraduation = service.id === 'graduation-ceremonies'
            const isBirthday = service.id === 'birthday-events'

            const CardContent = () => (
              <>
                {/* Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex-1">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-serif text-h4 text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm text-muted line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                  {(isWeddingEvent || isOpeningCeremony || isGraduation || isBirthday) && (
                    <div className="mt-auto pt-4">
                      <span className="text-gold font-body text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                        View Packages
                        <span>→</span>
                      </span>
                    </div>
                  )}
                </div>
              </>
            )

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group bg-white rounded-2xl overflow-hidden h-full flex flex-col transition-shadow duration-400 hover:shadow-card-hover"
              >
                {isWeddingEvent ? (
                  <Link href="/wedding" className="flex flex-col h-full">
                    <CardContent />
                  </Link>
                ) : isOpeningCeremony ? (
                  <Link href="/opening" className="flex flex-col h-full">
                    <CardContent />
                  </Link>
                ) : isGraduation ? (
                  <Link href="/graduation" className="flex flex-col h-full">
                    <CardContent />
                  </Link>
                ) : isBirthday ? (
                  <Link href="/birthday" className="flex flex-col h-full">
                    <CardContent />
                  </Link>
                ) : (
                  <div className="flex flex-col h-full">
                    <CardContent />
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-ghost">
            View All Services
            <span className="ml-2">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}