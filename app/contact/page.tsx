'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  Send,
  Check,
} from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

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
              Contact Us
            </span>
            <h1 className="font-serif text-h1-mobile lg:text-h1 text-white mb-6">
              Get in Touch
            </h1>
            <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
              Have a question or want to discuss your wedding? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-h2-mobile lg:text-h2 text-primary mb-2">
                Send Us a Message
              </h2>
              <p className="font-body text-muted mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block font-body text-sm font-medium text-primary mb-2">
                    Your Name *
                  </label>
                  <input
                    {...register('name')}
                    className="input-luxury"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="input-luxury"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-primary mb-2">
                    Subject *
                  </label>
                  <input
                    {...register('subject')}
                    className="input-luxury"
                    placeholder="How can we help?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className="input-luxury resize-none"
                    placeholder="Tell us more about your wedding..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="btn-accent w-full justify-center items-center gap-2"
                >
                  {isSubmitted ? (
                    <>
                      <Check size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-h2-mobile lg:text-h2 text-primary mb-2">
                  Contact Information
                </h2>
                <p className="font-body text-muted">
                  Reach out to us directly through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-card">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-primary mb-1">
                      Our Location
                    </h3>
                    <p className="font-body text-muted">
                      Mogadishu, Somalia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-card">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-primary mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+252612345678"
                      className="font-body text-muted hover:text-gold transition-colors"
                    >
                      +252 61 234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-card">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-primary mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@xulasho.com"
                      className="font-body text-muted hover:text-gold transition-colors"
                    >
                      hello@xulasho.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-card">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-primary mb-1">
                      Office Hours
                    </h3>
                    <p className="font-body text-muted">
                      Sun - Thu: 9:00 AM - 6:00 PM
                      <br />
                      Fri - Sat: By Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="p-6 bg-primary rounded-xl">
                <h3 className="font-serif text-lg text-white mb-3">
                  Prefer WhatsApp?
                </h3>
                <p className="font-body text-white/70 text-sm mb-4">
                  Chat with us directly for quick responses.
                </p>
                <a
                  href="https://wa.me/252612345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-body font-medium hover:bg-[#20BD5A] transition-colors"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-serif text-lg text-primary mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-all duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-all duration-300"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-all duration-300"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}