"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    { src: "/foto1.png", alt: "Imagen del servidor 1" },
    { src: "/foto2.png", alt: "Imagen del servidor 2" },
    { src: "/foto3.png", alt: "Imagen del servidor 3" },
    { src: "/foto4.png", alt: "Imagen del servidor 4" },
    { src: "/foto5.png", alt: "Imagen del servidor 5" },
    { src: "/foto6.png", alt: "Imagen del servidor 6" }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section className='py-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          {/* Left side - Carousel */}
          <div className='relative'>
            <div className='rounded-3xl overflow-hidden shadow-2xl relative'>
              <div
                className='h-96 bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out'
                style={{
                  backgroundImage: `url('${images[currentIndex].src}')`
                }}
              >
                {/* Purple overlay for consistency */}
                <div className='absolute rounded-3xl inset-0 bg-purple-900/30'></div>

                {/* Navigation buttons */}
                <button
                  onClick={prevSlide}
                  className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10 cursor-pointer'
                  aria-label='Imagen anterior'
                >
                  <ChevronLeft className='h-5 w-5' />
                </button>

                <button
                  onClick={nextSlide}
                  className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10 cursor-pointer'
                  aria-label='Siguiente imagen'
                >
                  <ChevronRight className='h-5 w-5' />
                </button>
              </div>

              {/* Dots indicator */}
              <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10'>
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/70"}`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className='space-y-6'>
            <div className='space-y-4'>
              <p className='text-gray-700 text-lg leading-relaxed font-montserrat'>
                Es importante <span className='font-semibold text-gray-900'>conocer y respetar las normas</span> para que todos podamos disfrutar de una buena experiencia de juego. Si eres nuevo, te
                recomendamos <span className='font-semibold text-gray-900'>leer las reglas y familiarizarte con la comunidad</span>. Si tienes dudas, el equipo de{" "}
                <span className='font-semibold text-gray-900'>staff está disponible</span> para ayudarte.
              </p>
            </div>

            <div className='space-y-2'>
              <p className='text-2xl font-bold text-gray-900 font-montserrat'>
                Esperamos que <span className='text-purple-600'>te diviertas</span>, que crees
                <span className='text-purple-600'> grandes historias</span> y que <span className='text-purple-600'>disfrutes del rol</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
