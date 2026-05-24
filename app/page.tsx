import { Hero } from '@/components/home/Hero'
import { IntroSection } from '@/components/home/IntroSection'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { WeddingEvents } from '@/components/home/WeddingEvents'
import { PackagesPreview } from '@/components/home/PackagesPreview'
import { GalleryPreview } from '@/components/home/GalleryPreview'
import { Testimonials } from '@/components/home/Testimonials'
import { CTASection } from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesPreview />
      <WeddingEvents />
      <PackagesPreview />
      <GalleryPreview />
      <Testimonials />
      <CTASection />
    </>
  )
}