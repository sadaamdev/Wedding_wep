'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Star, Award, Users } from 'lucide-react'
import { stats } from '@/lib/data'

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

const teamMembers = [
  {
    name: 'Ahmed Mohamed',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=400&h=400&fit=crop',
  },
  {
    name: 'Fatima Ibrahim',
    role: 'Creative Director',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=400&h=400&fit=crop',
  },
  {
    name: 'Omar Hussein',
    role: 'Head of Events',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=400&h=400&fit=crop',
  },
  {
    name: 'Amina Ali',
    role: 'Lead Designer',
    image: 'https://images.pexels.com/photos-2/11376646/pexels-photo-free-11376646-free.jpeg?w=400&h=400&fit=crop',
  },
]

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We pour our hearts into every celebration, treating each wedding as if it were our own.',
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We strive for perfection in every detail, from the smallest decoration to the grandest gesture.',
  },
  {
    icon: Award,
    title: ' Luxury',
    description: 'We believe every couple deserves a luxurious celebration that exceeds their expectations.',
  },
  {
    icon: Users,
    title: 'Connection',
    description: 'We build lasting relationships with our clients, becoming part of your family story.',
  },
]

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="font-serif text-h1-mobile lg:text-h1 text-white mb-6">
              Crafting Love Stories Since 2010
            </h1>
            <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
              We are passionate about creating magical wedding experiences that celebrate
              love, culture, and family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold font-body text-sm font-medium tracking-widest uppercase mb-4 block">
                Our Story
              </span>
              <h2 className="font-serif text-h2-mobile lg:text-h2 text-primary mb-6">
                A Passion for Creating Beautiful Celebrations
              </h2>
              <div className="space-y-4 font-body text-muted leading-relaxed">
                <p>
                  XULASHO was founded in 2010 with a simple mission: to create unforgettable
                  wedding experiences that honor Somali culture while embracing modern luxury.
                </p>
                <p>
                  What started as a small decoration service has grown into one of the most
                  sought-after wedding and event management companies in Somalia. Our team of
                  passionate professionals brings together decades of experience in event
                  planning, design, and entertainment.
                </p>
                <p>
                  We believe every couple deserves their dream wedding, and we are dedicated to
                  making that dream a reality. From intimate gatherings to grand celebrations,
                  we bring the same level of care, creativity, and attention to detail to every
                  event we create.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/13895241/pexels-photo-13895241.jpeg?w=800&h=1000&fit=crop"
                  alt="XULASHO team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-elegant hidden md:block">
                <p className="font-serif text-4xl text-gold font-semibold">15+</p>
                <p className="font-body text-sm text-muted">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <p className="font-serif text-4xl md:text-5xl text-gold font-semibold mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-sand">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <span className="text-gold font-body text-sm font-medium tracking-widest uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="font-serif text-h2-mobile lg:text-h2 text-primary">
              What Drives Us
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl text-center shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-h4 text-primary mb-3">{value.title}</h3>
                <p className="font-body text-sm text-muted">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <span className="text-gold font-body text-sm font-medium tracking-widest uppercase mb-4 block">
              Our Team
            </span>
            <h2 className="font-serif text-h2-mobile lg:text-h2 text-primary mb-4">
              Meet the People Behind the Magic
            </h2>
            <p className="font-body text-muted max-w-2xl mx-auto">
              Our talented team of wedding professionals is dedicated to making your
              celebration truly unforgettable.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-serif text-h4 text-primary mb-1">{member.name}</h3>
                <p className="font-body text-sm text-gold">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-sand">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-h2-mobile lg:text-h2 text-primary mb-4">
              Let&apos;s Create Your Dream Wedding
            </h2>
            <p className="font-body text-muted mb-8">
              Ready to start planning? Get in touch with our team to discuss your vision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/booking" className="btn-accent">
                Book a Consultation
              </Link>
              <Link href="/contact" className="btn-ghost">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}