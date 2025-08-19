import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { HeroFooter } from "@/components/hero-footer";
import { ImageCarousel } from "@/components/image-carousel";
import { CircleNavSection } from "@/components/circle-nav-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <HeroFooter />
        
        <ImageCarousel />
        <CircleNavSection />
      </main>
      <Footer />
    </div>
  );
}
