"use client"

import Sidebar from "@/components/Sidebar"
import { MenuIcon, XIcon } from "lucide-react"
import { useState } from "react"
import AlertasDerechos from "./alertas-derechos"
import CodigosLSPD from "./codigos-lspd"
import Investigacion from "./investigaciones"
import Negociacionnes from "./negociaciones-lspd"
import NormativaLSPD from "./normativa-general-lspd"
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
        { id: "Concepto", label: "Introducción", level: 0 },
        { id: "1", label: "1. Estructura Jerárquica LSPD", level: 0 },
        { id: "1.1", label: "1.1 Rangos y funciones", level: 1 },
        { id: "2", label: "2. Uso de Vehículos Policiales", level: 0 },
        { id: "2.1", label: "2.1 Vehículos Permitidos", level: 1 },
        { id: "2.2", label: "2.2 Restricciones y Condiciones de Uso", level: 1 },
        { id: "3", label: "3. Normativa General", level: 0 },
        { id: "4", label: "4. Corrupción Policial", level: 0 },
        { id: "5", label: "4.1 Profesionalismo y Conducta", level: 1 },
        { id: "6", label: "5. Respeto a la Autoridad", level: 0 },
        { id: "6.1", label: "5.1 Principios fundamentales", level: 1 },
        { id: "7", label: "6. Relación con la Comunidad", level: 0 },
        { id: "7.1", label: "6.1 Directrices de comportamiento", level: 1 },
        { id: "8", label: "7. Requisitos generales", level: 0 },
        { id: "8.1", label: "7.1 Obligaciones básicas", level: 1 },
        { id: "9", label: "8. Normativa de Ingreso y Ascensos - LSPD", level: 0 },
        { id: "9.1", label: "8.1 Ingreso", level: 1 },
        { id: "10", label: "9. Escalafón y Ascensos", level: 0 },
        { id: "10.1", label: "9.1 Cadete → Oficial I", level: 1 },
        { id: "10.2", label: "9.2 Oficial I → Oficial II", level: 1 },
        { id: "10.3", label: "9.3 Oficial II → Oficial III", level: 1 },
        { id: "10.4", label: "9.4 Instructor", level: 1 },
        { id: "10.5", label: "9.5 Detective", level: 1 },
        { id: "10.6", label: "9.6 Sargento I → Sargento II", level: 1 },
        { id: "10.7", label: "9.7 Teniente I → Teniente II", level: 1 },
        { id: "10.8", label: "9.8 Capitán I → Capitán II", level: 1 },
        { id: "10.9", label: "9.9 Comandante", level: 1 },
        { id: "10.10", label: "9.10 Comisionado (Máxima Autoridad del LSPD)", level: 1 },
        { id: "11", label: "10. Artículos Importantes", level: 0 },
        { id: "11.1", label: "10.1 Artículos fundamentales", level: 1 }
      ]
    },
    // Future sections can be added here
    {
      id: "procedimientos-lspd",
      title: "Procedimientos En Operativos",
      icon: "🚔",
      items: [
        { id: "Concepto", label: "Introducción", level: 0 },
        { id: "1", label: "1. Actuar en emergencias", level: 0 },
        { id: "1.1", label: "1.1 Principios fundamentales", level: 1 },
        { id: "2", label: "2. Procedimiento de Detención", level: 0 },
        { id: "2.1", label: "2.1 Detención de un sujeto no abatido", level: 1 },
        { id: "2.2", label: "2.2 Detención de un sujeto abatido", level: 1 },
        { id: "2.3", label: "2.3 Revisión de pertenencias", level: 1 },
        { id: "2.4", label: "2.4 Ingreso a la cárcel", level: 1 },
        { id: "3", label: "3. Uso De Fuerza", level: 0 },
        { id: "3.1", label: "3.1 Escalada de la fuerza", level: 1 },
        { id: "4", label: "4. Arrestos", level: 0 },
        { id: "4.1", label: "4.1 Procedimientos de arresto", level: 1 },
        { id: "5", label: "5. Persecuciones Vehiculares", level: 0 },
        { id: "5.1", label: "5.1 Autorizaciones Para Persecuciones", level: 1 },
        { id: "6", label: "6. Protocolo de Detención", level: 0 },
        { id: "6.1", label: "6.1 Avisos de Detención", level: 1 },
        { id: "6.2", label: "6.2 Maniobra PITT", level: 1 },
        { id: "6.3", label: "6.3 Código Robert", level: 1 },
        { id: "6.4", label: "6.4 Disparar desde un Vehículo", level: 1 },
        { id: "6.5", label: "6.5 Comportamiento en el campo", level: 1 }
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
        { id: "Concepto", label: "Introducción", level: 0 },
        { id: "2", label: "2. Principios Generales", level: 0 },
        { id: "3", label: "3. Reglas sobre Entornos y Negociaciones en Robos", level: 0 },
        { id: "3.1", label: "3.1 Aspectos Negociables", level: 1 },
        { id: "4", label: "4. Negociación de Huida Limpia", level: 0 },
        { id: "5", label: "5. Uso de Rehenes y Consecuencias de su Abatimiento", level: 0 },
        { id: "6", label: "6. Ruptura de la Negociación", level: 0 },
        { id: "6.1", label: "6.1 Causas de ruptura", level: 1 },
        { id: "7", label: "7. Especificaciones de la Negociación", level: 0 }
      ]
    },
    {
      id: "investigaciones",
      title: "Investigaciones",
      icon: "🕵️",
      items: [
        { id: "Concepto", label: "Introducción", level: 0 },
        { id: "2", label: "2. Evidencias e Informes", level: 0 },
        { id: "2.1", label: "2.1 Procedimientos básicos", level: 1 },
        { id: "2.2", label: "2.2 Elementos requeridos en la denuncia", level: 1 },
        { id: "3", label: "3. Investigaciones Policiales", level: 0 },
        { id: "3.1", label: "3.1 Requisitos para iniciar una investigación", level: 1 },
        { id: "4", label: "4. Interrogatorios", level: 0 },
        { id: "4.1", label: "4.1 Documento de autorización", level: 1 },
        { id: "5", label: "5. Órdenes de Búsqueda y Captura", level: 0 },
        { id: "5.1", label: "5.1 Criterios para emitir una orden", level: 1 },
        { id: "6", label: "6. Allanamientos", level: 0 },
        { id: "6.1", label: "6.1 Informe requerido para solicitar un allanamiento", level: 1 },
        { id: "7", label: "7. CK Policial y Desmantelamiento de Organizaciones", level: 0 },
        { id: "7.1", label: "7.1 CK Policial (Muerte de personaje por rol de fuerza mayor)", level: 1 },
        { id: "7.2", label: "7.2 Desmantelamiento de Organizaciones Criminales", level: 1 },
        { id: "8", label: "8. Consideraciones Finales", level: 0 },
        { id: "8.1", label: "8.1 Principios fundamentales", level: 1 }
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
                    <b className='text-purple-600 '>Normativa</b> <span className='italic'>LSPD</span>
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
              {selectedSection === "normativa-general-lspd" && <NormativaLSPD />}
              {selectedSection === "procedimientos-lspd" && <ProcedimientosLSPD />}
              {selectedSection === "reglas-lspd" && <ReglasLSPD />}
              {selectedSection === "negociaciones-lspd" && <Negociacionnes />}
              {selectedSection === "investigaciones" && <Investigacion />}
              {selectedSection === "codigos-lspd" && <CodigosLSPD />}
              {selectedSection === "alertas-derechos" && <AlertasDerechos />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
