import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react'
import { navLinks } from '@/lib/data'

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <span className="font-serif text-3xl font-semibold tracking-wide">
                  XULASHO
                </span>
              </Link>
              <p className="text-white/70 font-body text-sm leading-relaxed mb-6">
                Creating unforgettable wedding experiences with elegance, sophistication, and cultural authenticity since 2010.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-primary transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-primary transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-primary transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-gold font-body text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-serif text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-gold font-body text-sm transition-colors duration-300"
                  >
                    Henna Night (Qorax Cad)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-gold font-body text-sm transition-colors duration-300"
                  >
                    Wedding Decoration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-gold font-body text-sm transition-colors duration-300"
                  >
                    Photography & Videography
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-gold font-body text-sm transition-colors duration-300"
                  >
                    Daanto & Jileeco
                  </Link>
                </li>
                <li>
                  <Link
                    href="/packages"
                    className="text-white/70 hover:text-gold font-body text-sm transition-colors duration-300"
                  >
                    Wedding Packages
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 font-body text-sm">
                    Mogadishu, Somalia
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-gold flex-shrink-0" />
                  <a
                    href="tel:+252612345678"
                    className="text-white/70 hover:text-gold font-body text-sm transition-colors duration-300"
                  >
                    +252 61 234 5678
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-gold flex-shrink-0" />
                  <a
                    href="mailto:hello@xulasho.com"
                    className="text-white/70 hover:text-gold font-body text-sm transition-colors duration-300"
                  >
                    hello@xulasho.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 font-body text-sm">
                    Sun - Thu: 9:00 AM - 6:00 PM
                    <br />
                    Fri - Sat: By Appointment
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 font-body text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} XULASHO Wedding & Event Management. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-white/50 hover:text-gold font-body text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/50 hover:text-gold font-body text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}