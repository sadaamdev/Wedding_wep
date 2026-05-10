'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

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
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const galleryItems = [
  { src: 'https://images.pexels.com/photos/13895241/pexels-photo-13895241.jpeg?w=800&h=600&fit=crop', alt: 'Romantic Couple Portrait', category: 'Photography' },
  { src: 'https://images.pexels.com/photos/3013841/pexels-photo-3013841.jpeg?w=800&h=600&fit=crop', alt: 'Outdoor Wedding Couple', category: 'Photography' },
  { src: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?w=800&h=600&fit=crop', alt: 'Luxury Gold Decoration', category: 'Decoration' },
  { src: 'https://images.pexels.com/photos/3665416/pexels-photo-3665416.jpeg?w=800&h=600&fit=crop', alt: 'Bride Getting Ready', category: 'Photography' },
  { src: 'https://images.pexels.com/photos/11376646/pexels-photo-11376646.jpeg?w=800&h=600&fit=crop', alt: 'Wedding Cake Gold Theme', category: 'Cakes' },
  { src: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?w=800&h=600&fit=crop', alt: 'Elegant Hall Setup', category: 'Halls' },
]

export function GalleryPreview() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    const newIndex = direction === 'prev'
      ? (selectedImage - 1 + galleryItems.length) % galleryItems.length
      : (selectedImage + 1) % galleryItems.length
    setSelectedImage(newIndex)
  }

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
            Our Gallery
          </span>
          <h2 className="font-serif text-h2-mobile lg:text-h2 text-primary mb-4">
            Captured Moments of Love
          </h2>
          <p className="font-body text-muted max-w-2xl mx-auto">
            Explore our collection of breathtaking wedding celebrations and
            stunning decorations from our past events.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                'relative overflow-hidden rounded-xl group cursor-pointer',
                index === 0 || index === 3 ? 'md:row-span-2 md:aspect-[3/4]' : 'aspect-[4/5]'
              )}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-gold/90 text-primary font-body text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide">
                  {item.category}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-serif text-lg text-center px-4">{item.alt}</p>
                <span className="text-white/70 font-body text-sm mt-1">Click to enlarge</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Gallery Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/gallery" className="btn-ghost">
            View Full Gallery
            <span className="ml-2">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('prev') }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('next') }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryItems[selectedImage].src}
                alt={galleryItems[selectedImage].alt}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 text-center py-4 bg-gradient-to-t from-primary/80 to-transparent">
                <p className="text-white font-serif text-lg">{galleryItems[selectedImage].alt}</p>
                <span className="text-gold font-body text-sm">{galleryItems[selectedImage].category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}