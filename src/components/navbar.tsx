"use client"
import { Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

enum navBarItems {
  clubCoins = "clubCoins",
  normativaGeneral = "normativaGeneral",
  normativaDelictual = "normativaDelictual",
  normativaLSPD = "normativaLSPD",
  normativaEMS = "normativaEMS"
}
export function Navbar() {
  const [isSelected, setIsSelected] = useState<navBarItems | null>(null)
  const selectedStyle = "text-white hover:text-gray-200 px-3 py-2 text-sm font-semibold border-b-2 border-t-2 border-white font-montserrat uppercase tracking-wide rounded-full bg-purple-700/30"
  const unselectedStyle = "text-white hover:text-gray-200 px-3 py-2 text-sm font-medium font-montserrat uppercase tracking-wide "
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 to-purple-600 shadow-lg'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo/Brand */}
          <div className='flex-shrink-0'>
            <Link href='/' className='text-white font-bold text-2xl font-montserrat' onClick={() => setIsSelected(null)}>
              El Club RP
            </Link>
          </div>

          <div className='flex items-center gap-4'>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                <Link href='/club-coins' className={isSelected === navBarItems.clubCoins ? selectedStyle : unselectedStyle} onClick={() => setIsSelected(navBarItems.clubCoins)}>
                  Club Coins
                </Link>
                <Link href='/normativa-general' className={isSelected === navBarItems.normativaGeneral ? selectedStyle : unselectedStyle} onClick={() => setIsSelected(navBarItems.normativaGeneral)}>
                  Normativa General
                </Link>
                <Link
                  href='/normativa-delictual'
                  className={isSelected === navBarItems.normativaDelictual ? selectedStyle : unselectedStyle}
                  onClick={() => setIsSelected(navBarItems.normativaDelictual)}
                >
                  Normativa Delictual
                </Link>
                <Link href='/normativa-lspd' className={isSelected === navBarItems.normativaLSPD ? selectedStyle : unselectedStyle} onClick={() => setIsSelected(navBarItems.normativaLSPD)}>
                  Normativa LSPD
                </Link>
                <Link href='/normativa-ems' className={isSelected === navBarItems.normativaEMS ? selectedStyle : unselectedStyle} onClick={() => setIsSelected(navBarItems.normativaEMS)}>
                  Normativa EMS
                </Link>
              </div>
            </div>

            <div className='flex items-center'>
              <button className='bg-white cursor-pointer hover:bg-gray-200 text-purple-700 p-2 rounded-full transition-colors'>
                <Search className='h-5 w-5 ' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
