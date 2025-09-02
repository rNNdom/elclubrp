import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className='flex items-center justify-center pb-6'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center justify-center space-y-8'>
          {/* Logo */}
          <div className='relative flex flex-col items-center justify-center space-y-3'>
            {/* Logo container */}
            <div className='relative w-[150px] h-[150px] rounded-full overflow-hidden'>
              {/* Logo image */}
              <Image src='/logo.png' alt='El Club RP Logo' width={150} height={150} className='w-full h-full object-cover' priority />
            </div>
            {/* Copyright text under the logo */}
            <p className='text-black font-montserrat text-sm text-center'>Todos los derechos reservados. El Club RP ©</p>
          </div>

          {/* Social buttons */}
          <div className='flex space-x-6'>
            <Link
              href='https://discord.gg/cgzSFSn9av'
              target='_blank'
              rel='noopener noreferrer'
              className='relative bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 text-white px-8 py-3 rounded-full font-montserrat font-semibold text-sm uppercase tracking-wide transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-400/60 transform hover:scale-105 border border-purple-400/30'
            >
              <span className='relative z-10'>Discord</span>
              <div className='absolute inset-0 rounded-full bg-purple-400/20 blur-sm'></div>
            </Link>

            <Link
              href='https://www.tiktok.com/@elclubrp'
              target='_blank'
              rel='noopener noreferrer'
              className='relative bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 text-white px-8 py-3 rounded-full font-montserrat font-semibold text-sm uppercase tracking-wide transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-400/60 transform hover:scale-105 border border-purple-400/30'
            >
              <span className='relative z-10'>TikTok</span>
              <div className='absolute inset-0 rounded-full bg-purple-400/20 blur-sm'></div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
