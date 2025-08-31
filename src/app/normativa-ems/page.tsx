"use client"

import { SubSectionContent, HeaderContent, SectionContent, Content, ListItemContent, ContentFooter } from "@/components/sections"
import Sidebar from "@/components/Sidebar"
import { MenuIcon, XIcon } from "lucide-react"
import { useState } from "react"
import NormativaEMS from "./normativa-general-ems"
import Procedimientos from "./procedimientos"
import ReglasEMS from "./reglas-ems"


export default function NormativaGeneral() {
  const [selectedOption, setSelectedOption] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [selectedSection, setSelectedSection] = useState<string>("normativa-general-ems")
  // Main navigation structure with support for sub-menus
  const navigationSections = [
    {
      id: "normativa-general-ems",
      title: "Normativa General EMS",
      icon: "🧑‍⚕️",
      items: [
        { id: "1", label: "Atenciones igualitarias", level: 0 },
        { id: "2", label: "Uniforme de servicio", level: 0 },
        { id: "3", label: "Uso de Máscaras", level: 0 },
        { id: "4", label: "Estados Del Paciente:", level: 0 }
      
      ]
    },
    // Future sections can be added here
    {
      id: "procedimientos",
      title: "Prodecimientos",
      icon: "💊",
      items: [       
        { id: "1.", label: "Uso de Vehículos", level: 0 },
        { id: "2.", label: "Uso de Radio IC", level: 0 },
        { id: "3.", label: "Uso de Sirenas", level: 0 },
        { id: "4.", label: "Procedimientos en Llamados por Tiroteos", level: 0 }]
    },
    {
      id: "reglas-ems",
      title: "Reglas EMS",
      icon: "⚕️",
      items: [
        { id: "1..", label: "Notificaciones por Ausencias", level: 0 },
        { id: "2..", label: "Reingreso de Ex-EMS", level: 0 }
      ]

      
    }
  ]

  const handleGoTo = (id: string, itemIdx: number) => {
    const el = document.getElementById(id)
    if (el) {
      // Navbar height
      const headerOffset = 160
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
    setSelectedOption(itemIdx)
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  const toggleSection = (sectionId: string) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null)
    } else {
      setExpandedSection(sectionId)
      scrollToTop()
    }
  }

  return (
    <div className='min-h-screen bg-gray-50' style={{ fontFamily: "Montserrat" }}>
      {/* Header Banner */}
      <div className='relative h-80 md:h-96'>
        <div className='absolute inset-0 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url(/banner.png)" }} />
        <div className='absolute inset-0 bg-black/50' />
        <div className='relative z-10 flex items-center justify-center h-full'>
          <div className='text-center text-white px-4'>
            <h1 className='text-3xl md:text-5xl font-bold mb-4'>
              <span className='text-purple-300'>NORMATIVAS</span> <span className='text-orange-300'>EL CLUB RP</span>
            </h1>
            <p className='text-lg md:text-xl opacity-100 max-w-2xl mx-auto '>Documentación completa de reglas y procedimientos del servidor</p>
          </div>
        </div>
      </div>

      {/* Sticky Navigation Header */}
      <div className='sticky top-15 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm'>
        <div className='container mx-auto px-4 py-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center w-full'>
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className=' p-2 rounded-full transition-colors bg-purple-600 hover:bg-gray-300 cursor-pointer ' aria-label='Toggle navigation'>
                {isSidebarOpen ? <XIcon className='w-5 h-5 text-white' /> : <MenuIcon className='w-5 h-5 text-white' />}
              </button>

              <div className='border-b-2 border-purple-600 w-full'></div>
              <div className='w-full flex justify-start'>
                <div className='bg-gray-200 p-4 rounded-lg'>
                  <p className='text-2xl text-orange-400 uppercase '>
                    <b className='text-purple-600 '>Normativa</b> <span className="italic">EMS</span>
                  </p>
                </div>
              </div>
              <div className='w-1/3'></div>
            </div>
            <div className='flex gap-3'>
              <a
                href='https://discord.gg/cgzSFSn9av'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors text-sm'
              >
                Discord
              </a>
              <a
                href='https://discord.gg/cgzSFSn9av'
                target='_blank'
                className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all text-sm'
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 py-6'>
        <div className='flex gap-8'>
          {/* Sidebar Navigation */}
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            navigationSections={navigationSections}
            toggleSection={toggleSection}
            expandedSection={expandedSection}
            selectedOption={selectedOption}
            handleItemClick={handleGoTo}
            setSelectedSection={setSelectedSection}
          />

          {/* Main Content */}
          <div className={`flex-1`}>
          <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
              {selectedSection === "normativa-general-ems" && < NormativaEMS/>}
              {selectedSection === "procedimientos" && < Procedimientos/>}
              {selectedSection === "reglas-ems" && < ReglasEMS/>}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}