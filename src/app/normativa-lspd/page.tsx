"use client"

import { SubSectionContent, HeaderContent, SectionContent, Content, ListItemContent, ContentFooter } from "@/components/sections"
import Sidebar from "@/components/Sidebar"
import { MenuIcon, XIcon } from "lucide-react"
import { useState } from "react"
import NormativaLSPD from "./normativa-general-lspd"
import Negociacionnes from "./negociaciones-lspd"
import Investigacion from "./investigaciones"
import CodigosLSPD from "./codigos-lspd"
import AlertasDerechos from "./alertas-derechos"
import ProcedimientosLSPD from "./procedimientos-operativos"
import ReglasLSPD from "./reglas-lspd"


export default function NormativaGeneral() {
  const [selectedOption, setSelectedOption] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [selectedSection, setSelectedSection] = useState<string>("normativa-general-lspd")
  // Main navigation structure with support for sub-menus
  const navigationSections = [
    {
      id: "normativa-general-lspd",
      title: "Normativa General LSPD",
      icon: "🚨",
      items: [
        { id: "1", label: "Estructura Jerárquica LSPD", level: 0 },
        { id: "2", label: "Uso de Vehículos Policiales", level: 0 },
        { id: "2.1", label: "Vehículos Permitidos", level: 1 },
        { id: "2.2", label: "Restricciones y Condiciones de Uso ", level: 0 },
        { id: "3", label: "Normativa General", level: 0 },
        { id: "4", label: "Corrupción Policial", level: 0 },
        { id: "5", label: "Profesionalismo y Conducta ", level: 0 },
        { id: "6", label: "Respeto a la Autoridad", level: 0 },
        { id: "7", label: "Relación con la Comunidad", level: 0 },
        { id: "8", label: "Requisitos generales", level: 0 },
        { id: "9", label: "Normativa de Ingreso y Ascensos - LSPD", level: 0 },
        { id: "10", label: "Escalafón y Ascensos", level: 0 },
        { id: "10.1", label: "Cadete → Oficial I", level: 1 },
        { id: "10.2", label: "Oficial I → Oficial II ", level: 1 },
        { id: "10.3", label: "Oficial II → Oficial III", level: 1 },
        { id: "10.4", label: "Instructor", level: 1 },
        { id: "10.5", label: "Detective", level: 1 },
        { id: "10.6", label: "Sargento I → Sargento II", level: 1 },
        { id: "10.7", label: "Teniente I → Teniente II", level: 1 },
        { id: "10.8", label: "Capitán I → Capitán II", level: 1 },
        { id: "10.9", label: "Comandante ", level: 1 },       
        { id: "10.10", label: "Comisionado (Máxima Autoridad del LSPD)", level:  1},
        { id: "11", label: "Artículos Importantes", level: 0 }

      ]
    },
    // Future sections can be added here
    {
      id: "procedimientos-lspd",
      title: "Prodecimientos En Operativos",
      icon: "🚔",
      items: [
        { id: "1", label: "Actuar en emergencias", level: 0 },
        { id: "2", label: "Procedimiento de Detención", level: 0 },
        { id: "2.1", label: "Detención de un sujeto no abatido:", level: 1 },
        { id: "2.2", label: "Detención de un sujeto abatido:", level: 1 },
        { id: "2.3", label: "Revisión de pertenencias:", level: 1 },
        { id: "2.4", label: "Ingreso a la cárcel:", level: 1 },
        { id: "3", label: "Uso De Fuerza", level: 0 },
        { id: "4", label: "Arrestos", level: 0 },
        { id: "5", label: "Persecuciones Vehiculares", level: 0 },
        { id: "6", label: "Protocolo de Detención:", level: 0 },
        { id: "6.1", label: "Avisos de Detención:", level: 1 },
        { id: "6.2", label: "Maniobra PITT:", level: 1},
        { id: "6.3", label: "Código Robert:", level: 1 },
        { id: "6.4", label: "Disparar desde un Vehículo:", level: 1 },
        { id: "6.5", label: "Comportamiento en el campo", level: 1 }

      ]
    },
    {
      id: "reglas-lspd",
      title: "Reglas LSPD",
      icon: "👮",
      items: [
        { id: "1", label: "Reglas del cuerpo policial", level: 0 },
        { id: "2", label: "Uniformes y equipos", level: 0 }
        
      ]
    },
    {
      id: "negociaciones-lspd",
      title: "Negociaciones Policiales",
      icon: "⚖️",
      items: [

        { id: "2", label: "Principios Generales:", level: 0 },
        { id: "3", label: "Aspectos Negociables", level: 0 },
        { id: "4", label: "Negociación de Huida Limpia", level: 0 },
        { id: "5", label: "Uso de Rehenes y Consecuencias de su Abatimiento:", level: 0 }, 
        { id: "6", label: "Ruptura de la Negociación", level: 0 }
      ]
    },
    {
      id: "investigaciones",
      title: "Investigaciones",
      icon: "🕵️",
      items: [

        { id: "2", label: "Evidencias e Informes", level: 0 },
        { id: "3", label: "Investigaciones Policiales", level: 0 },
        { id: "4", label: "Interrogatorios", level: 0 },
        { id: "5", label: "Órdenes de Búsqueda y Captura", level: 0 }, 
        { id: "6", label: "Allanamientos", level: 0 },
        { id: "7", label: "CK Policial y Desmantelamiento de Organizaciones", level: 0 },
        { id: "8", label: "CK Policial (Muerte de personaje por rol de fuerza mayor)", level: 1 },
        { id: "9", label: "Desmantelamiento de Organizaciones Criminales", level: 1 },
        { id: "10", label: "Consideraciones Finales", level: 0 }
      ]
    },
    {
      id: "codigos-lspd",
      title: "Codigos",
      icon: "☢️",
      items: [
        { id: "2", label: "Códigos Policiales", level: 0 },
        { id: "3", label: "Códigos Radiales", level: 0 },
        { id: "4", label: "Códigos Penales", level: 0 },
        { id: "5", label: "Otros Códigos", level: 0 }

      ]
    },
    {
      id: "alertas-derechos",
      title: "Aletar y Derechos",
      icon: "📜",
      items: [
        { id: "1", label: "Alerta Verde (Nivel Bajo)", level: 0 },
        { id: "2", label: "Alerta Amarilla (Nivel Medio)", level: 0 },
        { id: "3", label: "Alerta Naranja (Nivel Alto)", level: 0 },
        { id: "4", label: "Alerta Roja (Nivel Crítico)", level: 0 },
        { id: "5", label: "Derechos Miranda", level: 0 },
        { id: "6", label: "Leer Derechos Miranda", level: 0 }
      ]
    },
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
                    <b className='text-purple-600 '>Normativa</b> <span className="italic">LSPD</span>
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
              {selectedSection === "normativa-general-lspd" && < NormativaLSPD/>}
              {selectedSection === "procedimientos-lspd" && < ProcedimientosLSPD/>}
              {selectedSection === "reglas-lspd" && < ReglasLSPD/>}
              {selectedSection === "negociaciones-lspd" && < Negociacionnes/>}
              {selectedSection === "investigaciones" && < Investigacion/>}
              {selectedSection === "codigos-lspd" && < CodigosLSPD/>}
              {selectedSection === "alertas-derechos" && < AlertasDerechos/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}