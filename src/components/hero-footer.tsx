import { cn } from "@/lib/utils"

interface HeroFooterProps {
  className?: string
}

export function HeroFooter({ className }: HeroFooterProps) {
  return (
    <section className={cn("relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden", className)}>
      <div className='relative max-w-5xl mx-auto text-center'>
        <h2 className='text-xl md:text-2xl lg:text-3xl text-gray-900 mb-4 font-montserrat font-bold leading-tight'>
          Un mundo{" "}
          <span className='relative'>
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>distinto</span>
          </span>
          , una experiencia <span className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>única</span>.
        </h2>

        {/* Tagline with special styling */}
        <div className='relative'>
          <p className='text-lg md:text-xl text-gray-900 font-montserrat font-bold tracking-wide'>
            Lo que pasa en{" "}
            <span className='relative inline-block'>
              <span className='bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent'>el club</span>
            </span>
            , queda en{" "}
            <span className='relative inline-block'>
              <span className='bg-gradient-to-r  from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent'>
                <b>EL CLUB</b>
              </span>
              <span className='absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-700 to-gray-900'></span>
            </span>
            .
          </p>
        </div>
        <p className='pt-4 text-base md:text-lg text-gray-700 font-montserrat font-medium'>Tu historia comienza aquí.</p>
      </div>
    </section>
  )
}
