import { CircleNavSection } from "@/components/circle-nav-section"
import { Hero } from "@/components/hero"
import { HeroFooter } from "@/components/hero-footer"
import { ImageCarousel } from "@/components/image-carousel"
import { Separator } from "@/components/separator"

export default function Home() {
  return (
    <div className='mx-auto min-h-screen bg-white font-montserrat'>
      <Hero />
      <HeroFooter />
      <ImageCarousel />
      <CircleNavSection />
    </div>
  )
}
