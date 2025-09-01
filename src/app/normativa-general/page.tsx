"use client"

import Sidebar from "@/components/Sidebar"
import { MenuIcon, XIcon } from "lucide-react"
import { useState } from "react"
import ClipsEvidencias from "./clips-evidencias"
import ConceptosGenerales from "./conceptos-generales"
import NormativasGenerales from "./normativas-generales"
import Sanciones from "./sanciones"

export default function NormativaGeneral() {
  const [selectedOption, setSelectedOption] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [selectedSection, setSelectedSection] = useState<string>("conceptos-generales")
  // Main navigation structure with support for sub-menus
  const navigationSections = [
    {
      id: "conceptos-generales",
      title: "Conceptos Generales",
      icon: "📝",
      items: [
        { id: "Concepto", label: "Conceptos Generales", level: 0 },
        { id: "1.0", label: "1.0 Rol de Interacción", level: 0 },
        { id: "Ejemplos Rol Interacion", label: "Ejemplos", level: 1 },
        { id: "1.0.1", label: "1.0.1 Acuerdo Entre Facciones", level: 1 },
        { id: "Obligaciones y Coordinacion", label: "Interacción Entre Facciones gubernamentales", level: 2 },
        { id: "1.0.2", label: "1.0.2 /ME - Acción del Personaje", level: 1 },
        { id: "1.0.3", label: "1.0.3 /DO - Entornos y Detalles", level: 1 },
        { id: "1.1", label: "1.1 Rol de Interpretación (RDI)", level: 0 },
        { id: "1.1.1", label: "1.1.1 Nombre del Personaje", level: 1 },
        { id: "1.2", label: "1.2 In Character (IC)", level: 0 },
        { id: "1.3", label: "1.3 Out of Character (OOC)", level: 0 },
        { id: "1.4", label: "1.4 MetaGaming (MG)", level: 0 },
        { id: "1.4.1", label: "1.4.1 MetaGaming 2 (MG2)", level: 1 },
        { id: "1.4.2", label: "1.4.2 Ghosting", level: 1 },
        { id: "1.4.3", label: "1.4.3 MetaKill (MK)", level: 1 },
        { id: "1.5", label: "1.5 PowerGaming (PG)", level: 0 },
        { id: "1.5.1", label: "1.5.1 PowerGaming2 (PG2)", level: 1 },
        { id: "1.5.2", label: "1.5.2 Sobrecarga del Inventario", level: 1 },
        { id: "1.6", label: "1.6 Bunny Jump (BJ)", level: 0 },
        { id: "1.7", label: "1.7 Rol de Entorno (RDE)", level: 0 },
        { id: "1.8", label: "1.8 Player Kill (PK)", level: 0 },
        { id: "1.8.1", label: "Tipos de PK", level: 1 },
        { id: "1.9", label: "1.9 Revenge Kill (RK)", level: 0 },
        { id: "2.0", label: "2.0 Player Kill Total (PKT)", level: 0 },
        { id: "2.1", label: "2.1 Team Kill (TK)", level: 0 },
        { id: "2.2", label: "2.2 Character Kill (CK)", level: 0 },
        { id: "2.2.1", label: "Tipos de CK", level: 1 },
        { id: "2.3", label: "2.3 Spawn Kill (SK)", level: 0 },
        { id: "2.4", label: "2.4 Deathmatch (DM)", level: 0 },
        { id: "2.5", label: "2.5 Vehicle Deathmatch (VDM)", level: 0 },
        { id: "2.6", label: "2.6 Car Kill", level: 0 },
        { id: "2.7", label: "2.7 No Valorar Vida", level: 0 },
        { id: "2.8", label: "2.8 Forzar Rol", level: 0 },
        { id: "2.9", label: "2.9 Evasión de Rol", level: 0 },
        { id: "2.9.1", label: "Ejemplos de evasión de rol", level: 1 },
        { id: "3.0", label: "3.0 Actos Sexuales / Violaciones", level: 0 },
        { id: "3.1", label: "3.1 Abuso de Mecánicas, Bugs, Exploits", level: 0 },
        { id: "3.2", label: "3.2 Fair Play", level: 0 },
        { id: "3.3", label: "3.3 Fear Play", level: 0 },
        { id: "3.4", label: "3.4 Múltiples Pj (SLOTS)", level: 0 },
        { id: "3.5", label: "3.5 Reconocimiento de Personas", level: 0 },
        { id: "3.6", label: "3.6 Dupeo", level: 0 },
        { id: "3.7", label: "3.7 CryReport", level: 0 },
        { id: "3.8", label: "3.8 Vacío Legal", level: 0 }
      ]
    },
    // Future sections can be added here
    {
      id: "normativas-generales",
      title: "Normativas Generales",
      icon: "🔍",
      items: [
        { id: "1.", label: "1. Respeto y Cortesía", level: 0 },
        { id: "2.", label: "2. Resolución de Desacuerdos", level: 0 },
        { id: "3.", label: "3. Uso de los Canales de Chat ", level: 0 },
        { id: "4.", label: "4. Prohibición de Explotación de Errores o Trucos", level: 0 },
        { id: "5.", label: "5. Juego Justo", level: 0 },
        { id: "6.", label: "6. Personajes y Comportamiento", level: 0 },
        { id: "7.", label: "7. Interpretación del Rol", level: 0 },
        { id: "mod", label: "Uso de moduladores de voz", level: 0 },
        { id: "8.", label: "8. Protección de Información Personal", level: 0 },
        { id: "9.", label: "9. Cumplimiento de las Reglas", level: 0 },
        { id: "10.", label: "10. Eventos del Servidor", level: 0 },
        { id: "11.", label: "11. Normas para Administradores", level: 0 },
        { id: "12.", label: "12. Resolución de Disputas", level: 0 },
        { id: "13.", label: "13. Actualizaciones y Mantenimiento", level: 0 },
        { id: "14.", label: "14. Prohibición de Abandonar el Juego mediante F8 + Quit", level: 0 },
        { id: "15.", label: "15. Sanciones", level: 0 },
        { id: "16.", label: "16. Prohibición de Ataques a Propiedades sin Rol Previo", level: 0 },
        { id: "17.", label: "17. Límite de Velocidad en Ciudad y Actos Delictuales", level: 0 },
        { id: "18.", label: "18. Control y Fiscalización ", level: 0 },
        { id: "19.", label: "19. Reglas en Actos Delictuales ", level: 0 },
        { id: "19.1.", label: "19.1 En Situaciones De Tiroteo", level: 1 }
      ]
    },
    {
      id: "clips-evidencias",
      title: "Clips y Evidencias",
      icon: "🎥",
      items: [
        { id: "Clips-Evidencias", label: "Clips/Evidencia", level: 0 },
        { id: "1", label: "1. Definición de Clips/Evidencias", level: 0 },
        { id: "2", label: "2. Requisitos de los Clips", level: 0 },
        { id: "3", label: "3. Consecuencias por Alteración", level: 0 },
        { id: "4", label: "4. Proceso de Reporte", level: 0 }
      ]
    },
    {
      id: "sanciones",
      title: "Sanciones",
      icon: "🔨",
      items: [
        { id: "Sanciones", label: "Sanciones", level: 0 },
        { id: "1", label: "1. Normativa de Sanciones", level: 0 },
        { id: "2", label: "2. Clasificación de Sanciones", level: 0 },
        { id: "3", label: "3. Tabla de Infracciones y Sanciones", level: 0 },
        { id: "4", label: "4. Notas Importantes", level: 0 }
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
                    <b className='text-purple-600 '>Normativa</b> <span className='italic'>General</span>
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
              {selectedSection === "conceptos-generales" && <ConceptosGenerales />}
              {selectedSection === "normativas-generales" && <NormativasGenerales />}
              {selectedSection === "clips-evidencias" && <ClipsEvidencias />}
              {selectedSection === "sanciones" && <Sanciones />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
