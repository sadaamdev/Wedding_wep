import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://xulasho.com'),
  title: 'XULASHO Wedding & Event Management | Luxury Somali Weddings',
  description: 'Creating unforgettable wedding experiences. Premium wedding decoration, photography, videography, and event management services for luxury Somali weddings.',
  keywords: 'wedding, event management, luxury weddings, Somali wedding, wedding decoration, photography, videography, hall decoration, Henna Night, Walima',
  openGraph: {
    title: 'XULASHO Wedding & Event Management',
    description: 'Creating unforgettable wedding experiences honoring Somali traditions',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}