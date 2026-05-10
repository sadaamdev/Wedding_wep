'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  Users,
  Heart,
  MessageCircle,
  Check,
} from 'lucide-react'
import { packages } from '@/lib/data'
import { cn, formatPrice } from '@/lib/utils'

const bookingSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  weddingDate: z.string().min(1, 'Wedding date is required'),
  guestCount: z.string().min(1, 'Guest count is required'),
  package: z.string().min(1, 'Please select a package'),
  additionalRequests: z.string().optional(),
  whatsapp: z.boolean().optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

const steps = [
  { id: 1, title: 'Personal Info', icon: Heart },
  { id: 2, title: 'Event Details', icon: Calendar },
  { id: 3, title: 'Select Package', icon: Users },
  { id: 4, title: 'Confirmation', icon: Check },
]

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      whatsapp: true,
    },
  })

  const selectedPackage = watch('package')

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const onSubmit = (data: BookingFormData) => {
    console.log('Booking submitted:', data)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="container-custom px-4 text-center max-w-2xl"
        >
          <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-8">
            <Check size={40} className="text-gold" />
          </div>
          <h1 className="font-serif text-h1-mobile lg:text-h1 text-primary mb-4">
            Thank You!
          </h1>
          <p className="font-body text-lg text-muted mb-8">
            Your booking request has been submitted successfully. Our team will contact you
            within 24 hours to discuss your wedding details.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/252612345678"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
            <Link href="/" className="btn-ghost">
              Return Home
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/13895241/pexels-photo-13895241.jpeg?w=1920&h=600&fit=crop')`,
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
              Book Now
            </span>
            <h1 className="font-serif text-h1-mobile lg:text-h1 text-white mb-6">
              Start Your Wedding Journey
            </h1>
            <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
              Fill out the form below to book your free consultation. We&apos;ll help you
              create the celebration of your dreams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-white border-b border-border">
        <div className="container-custom px-4">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => setCurrentStep(step.id)}
                  className={cn(
                    'flex items-center gap-2 px-3 md:px-4 py-2 rounded-full transition-all duration-300',
                    currentStep === step.id
                      ? 'bg-gold text-primary'
                      : currentStep > step.id
                      ? 'bg-gold/20 text-gold'
                      : 'bg-sand text-muted'
                  )}
                >
                  <step.icon size={16} />
                  <span className="hidden md:block font-body text-sm font-medium">
                    {step.title}
                  </span>
                </button>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      'w-8 md:w-16 h-0.5 mx-2',
                      currentStep > step.id ? 'bg-gold' : 'bg-border'
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <AnimatePresence mode="wait">
                {/* Step 1: Personal Info */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="font-serif text-h3 text-primary mb-6">
                      Personal Information
                    </h2>
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
                        Phone Number *
                      </label>
                      <input
                        {...register('phone')}
                        className="input-luxury"
                        placeholder="+252 61 234 5678"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-sand rounded-xl">
                      <input
                        {...register('whatsapp')}
                        type="checkbox"
                        id="whatsapp"
                        className="w-5 h-5 accent-gold"
                      />
                      <label htmlFor="whatsapp" className="font-body text-sm text-primary">
                        I prefer to be contacted via WhatsApp
                      </label>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Event Details */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="font-serif text-h3 text-primary mb-6">
                      Event Details
                    </h2>
                    <div>
                      <label className="block font-body text-sm font-medium text-primary mb-2">
                        Wedding Date *
                      </label>
                      <input
                        {...register('weddingDate')}
                        type="date"
                        className="input-luxury"
                      />
                      {errors.weddingDate && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.weddingDate.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-primary mb-2">
                        Expected Guest Count *
                      </label>
                      <select
                        {...register('guestCount')}
                        className="input-luxury"
                      >
                        <option value="">Select guest count</option>
                        <option value="50-100">50 - 100 guests</option>
                        <option value="100-200">100 - 200 guests</option>
                        <option value="200-300">200 - 300 guests</option>
                        <option value="300-500">300 - 500 guests</option>
                        <option value="500+">500+ guests</option>
                      </select>
                      {errors.guestCount && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.guestCount.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-primary mb-2">
                        Additional Requests
                      </label>
                      <textarea
                        {...register('additionalRequests')}
                        rows={4}
                        className="input-luxury resize-none"
                        placeholder="Tell us about your dream wedding..."
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Package Selection */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="font-serif text-h3 text-primary mb-6">
                      Select Your Package
                    </h2>
                    <div className="space-y-4">
                      {packages.map((pkg) => (
                        <button
                          key={pkg.id}
                          type="button"
                          onClick={() => setValue('package', pkg.id)}
                          className={cn(
                            'w-full p-6 rounded-xl text-left transition-all duration-300 border-2',
                            selectedPackage === pkg.id
                              ? 'border-gold bg-gold/5'
                              : 'border-border hover:border-gold/50'
                          )}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-serif text-lg text-primary mb-1">
                                {pkg.name}
                              </h3>
                              <p className="font-body text-sm text-muted">
                                {pkg.description}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-serif text-2xl text-primary font-semibold">
                                {formatPrice(pkg.price)}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                    {errors.package && (
                      <p className="text-red-500 text-sm">{errors.package.message}</p>
                    )}
                  </motion.div>
                )}

                {/* Step 4: Confirmation */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="font-serif text-h3 text-primary mb-6">
                      Confirm Your Booking
                    </h2>
                    <div className="bg-white p-6 rounded-xl shadow-card">
                      <h3 className="font-serif text-lg text-primary mb-4">
                        Booking Summary
                      </h3>
                      <div className="space-y-3 font-body text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted">Name:</span>
                          <span className="text-primary">{watch('name')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted">Email:</span>
                          <span className="text-primary">{watch('email')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted">Phone:</span>
                          <span className="text-primary">{watch('phone')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted">Wedding Date:</span>
                          <span className="text-primary">{watch('weddingDate')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted">Guest Count:</span>
                          <span className="text-primary">{watch('guestCount')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted">Package:</span>
                          <span className="text-primary capitalize">
                            {packages.find(p => p.id === watch('package'))?.name}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="font-body text-sm text-muted text-center">
                      By submitting, you agree to our terms and privacy policy.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-10">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-ghost flex items-center gap-2"
                  >
                    <ArrowLeft size={18} />
                    Back
                  </button>
                ) : (
                  <Link href="/" className="btn-ghost">
                    Cancel
                  </Link>
                )}

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-accent flex items-center gap-2"
                  >
                    Continue
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <button type="submit" className="btn-accent">
                    Submit Booking
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}