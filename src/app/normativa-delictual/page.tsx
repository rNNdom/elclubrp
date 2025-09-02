"use client"

import { SubSectionContent, HeaderContent, SectionContent, Content, ListItemContent, ContentFooter } from "@/components/sections"
import Sidebar from "@/components/Sidebar"
import { MenuIcon, XIcon } from "lucide-react"
import { useState } from "react"
import ZonasRojas from "./zonas-rojas-naranjas"
import NormativaDelictual from "./normativa-general-delictual"
import OrganizacionesDelictivas from "./organizaciones-delictivas"
import RobosSucursales from "./robos-sucursales"
import ZonasSeguras from "./zonas-seguras"

export default function NormativaGeneral() {
  const [selectedOption, setSelectedOption] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [selectedSection, setSelectedSection] = useState<string>("normativa-general-delictual")
  // Main navigation structure with support for sub-menus
  const navigationSections = [
    {
      id: "normativa-general-delictual",
      title: "Normativa General Delictual",
      icon: "🗡️",
      items: [
        { id: "1", label: "1. Toxicidad Con EMS/LSPD", level: 0 },
        { id: "2", label: "2. Protección al Civil", level: 0 },
        { id: "3", label: "3. Cacheo", level: 0 },
        { id: "4", label: "4. Uso de entornos", level: 0 },
        { id: "4.1", label: "4.1 Ejemplos de entorno correctos", level: 1 },
        { id: "4.2", label: "4.2 Obligatoriedad del Entorno", level: 1 },
        { id: "4.3", label: "4.3 Entorno en laboratorios y farmeo de drogas", level: 1 },
        { id: "4.4", label: "4.4 Entorno en roles espontáneos", level: 1 },
        { id: "4.5", label: "4.5 Errores en el Entorno", level: 1 },
        { id: "vehi-mod", label: "5. Vehículos Modificados", level: 1 },
        { id: "5", label: "6. Búsqueda De Vehiculos", level: 0 },
        { id: "6", label: "7. Búsqueda De Sujetos", level: 0 },
        { id: "7", label: "8. Límite de Velocidad en Ciudad", level: 0 },
        { id: "7.1", label: "Velocidades Permitidas", level: 1 },
        { id: "8", label: "9. Control y Fiscalización", level: 0 },
        { id: "9", label: "10. Reglas en Actos Delictuales", level: 0 },
        { id: "10", label: "11. Persecuciones y Cruce de Frontera", level: 0 },
        { id: "10.1", label: "Condiciones de la Intervención Policial", level: 1 },
        { id: "11", label: "12. Medios de Cruce Alternativos", level: 0 },
        { id: "12", label: "13. Uso de Vestimenta y Fiscalización Policial", level: 0 },
        { id: "13", label: "14. Intento de Detención Vehicular", level: 0 },
        { id: "14", label: "15. Enfrentamientos Armados cerca de Lugares con RDE (Rol de Entorno) Gubernamental", level: 0 },
        { id: "15", label: "16. Tiroteos en Vehículos", level: 0 },
        { id: "16", label: "17. Prioridades y Procedimientos en Entornos Delictuales con Múltiples Sujetos y Vehículos", level: 0 },
        { id: "17", label: "18. Para evitar confusiones y asegurar un desarrollo claro del rol, el entorno enviado debe ser lo más detallado posible, especificando", level: 0 },
        { id: "18", label: "19. Negociaciones", level: 0 },
        { id: "19", label: "20. Secuestros", level: 0 },
        { id: "20", label: "21. Tipos de Secuestro", level: 0 },
        { id: "20.1", label: "Secuestro para uso como rehén en un acto delictivo", level: 1 },
        { id: "20.2", label: "Secuestro con otros fines (tortura, interrogatorio, etc.)", level: 1 },
        { id: "20.3", label: "Secuestro de Oficiales", level: 1 },
        { id: "21", label: "22. Reglas Generales", level: 0 }
      ]
    },
    // Future sections can be added here
    {
      id: "organizacion-delictivas",
      title: "Organizaciones Delictivas",
      icon: "🏯",
      items: [
        { id: "2.", label: "Niveles De OD's", level: 0 },
        { id: "3.", label: "Organización Delictiva Administrativa", level: 0 },
        { id: "4.", label: "Alianzas entre Organizaciones Delictivas", level: 0 },
        { id: "5.", label: "Normativa sobre Infiltración y Suplantación de Organizaciones Delictivas", level: 0 },
        { id: "6.", label: "Infiltración en una Organización Delictiva", level: 0 },
        { id: "7.", label: "Suplantación de una Organización Delictiva", level: 0 },
        { id: "8.", label: "Consideraciones Generales", level: 0 },
        { id: "9.", label: "Normativa CK en Organizaciones Delictuales", level: 0 },
        { id: "10.", label: "Motivos Válidos IC", level: 0 },
        { id: "10.1", label: "Ejemplos de motivos aceptados:", level: 1 },
        { id: "11.", label: "Procedimiento Administrativo", level: 0 },
        { id: "12.", label: "Requisitos para la Solicitud", level: 0 },
        { id: "12.1", label: "El solicitante deberá presentar la mayor cantidad de información posible para respaldar la petición. Entre los requisitos indispensables se encuentran:", level: 1 },
        { id: "13.", label: "Ejecución del CK", level: 0 },
        { id: "13.1", label: "Consideraciones Adicionales", level: 1 },
        { id: "14.", label: "Tipos De Calibre", level: 0 },
        { id: "14.1", label: "Calibres Bajo:", level: 1 },
        { id: "14.2", label: "Calibres Medio:", level: 1 },
        { id: "14.3", label: "Calibres Altos:", level: 1 },
        { id: "15.", label: "Actos Ilegales de Civiles", level: 0 },
        { id: "15.1", label: "Cantidad de participantes", level: 1 },
        { id: "15.2", label: "Tipo de delitos permitidos", level: 1 },
        { id: "16.", label: "Zonas rojas y naranjas para civiles", level: 0 },
        { id: "17.", label: "Colaboración con Organizaciones Delictivas", level: 0 },
        { id: "18.", label: "Consideraciones adicionales", level: 0 }
      ]
    },
    {
      id: "robos-a-sucursales",
      title: "Robos A Sucusales",
      icon: "💵",
      items: [
        { id: "2..", label: "Disponibilidad De LSPD", level: 0 },
        { id: "3..", label: "Rol en curso con baja conectividad:", level: 0 },
        { id: "4..", label: "Robos", level: 0 },
        { id: "4..1", label: "Información", level: 1 },
        { id: "5..", label: "Cantidad de Involucrados y Calibre para Robos", level: 0 },
        { id: "5..1", label: "Badulaque", level: 1 },
        { id: "5..2", label: "Fleecas", level: 1 },
        { id: "5..3", label: "Joyería", level: 1 },
        { id: "5..4", label: "Banco Paleto", level: 1 },
        { id: "5..5", label: "Life Invader", level: 1 },
        { id: "5..6", label: "Maze Bank", level: 1 },
        { id: "5..7", label: "Humane", level: 1 },
        { id: "5..8", label: "Banco Central", level: 1 },
        { id: "5..9", label: "Reserva Nacional De Oro", level: 1 },
        { id: "6..", label: "Normas Generales sobre el Armamento en Robos", level: 1 },
        { id: "6..1", label: "Tomar En Consideración", level: 0 }
      ]
    },
    {
      id: "zona-segura",
      title: "Zonas Segura",
      icon: "🛡️",
      items: [
        { id: "1...", label: "Queda completamente prohibido roles agresivos dentro de ellas, tales como: ", level: 0 },
        { id: "2...", label: "Consideraciones adicionales", level: 0 },
        { id: "3...", label: "Discusiones, riñas y peleas sin armas", level: 0 },
        { id: "4...", label: "Secuestros o asaltos fuera de zonas seguras ", level: 0 },
        { id: "5...", label: "Continuación de roles agresivos dentro de Zonas Seguras", level: 0 },
        { id: "6...", label: "Consideraciones adicionales", level: 0 },
        { id: "7...", label: "Se detallan ZONAS SEGURAS:", level: 0 }
      ]
    },
    {
      id: "zona-roja-naranja",
      title: "Zonas Rojas/Naranjas",
      icon: "💀",
      items: [
        { id: "1....", label: "Zona Roja", level: 0 },
        { id: "2....", label: "Zona Naranja", level: 0 },
        { id: "3....", label: "Actos permitidos en Zonas Rojas y Naranjas ", level: 0 },
        { id: "4....", label: "Actos prohibidos en Zonas Rojas y Naranjas ", level: 0 },
        { id: "5....", label: "Consideraciones adicionales ", level: 0 }
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
                    <b className='text-purple-600 '>Normativa</b> <span className='italic'>Delictual</span>
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
              {selectedSection === "normativa-general-delictual" && <NormativaDelictual />}
              {selectedSection === "organizacion-delictivas" && <OrganizacionesDelictivas />}
              {selectedSection === "robos-a-sucursales" && <RobosSucursales />}
              {selectedSection === "zona-segura" && <ZonasSeguras />}
              {selectedSection === "zona-roja-naranja" && <ZonasRojas />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
