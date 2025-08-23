"use client"

import { useState } from "react"

export default function NormativaDelictual() {
  const [selectedOption, setSelectedOption] = useState(2)
  const [isIndexOpen, setIsIndexOpen] = useState(false)

  const indexItems = [
    { id: "que-es", label: "¿Qué es Lorem Ipsum?" },
    { id: "por-que", label: "¿Por qué lo usamos?" },
    { id: "origen", label: "¿De dónde viene?" }
  ]

  const handleGoTo = (id: string, idx: number) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setSelectedOption(idx + 1)
    setIsIndexOpen(false)
  }

  return (
    <div className='min-h-screen bg-white mx-auto container'>
      {/* Header Section */}
      <div
        className='relative h-96 flex items-center justify-center bg-gray-200'
        style={{ borderRadius: "20px", backgroundImage: "url(/banner.png)", backgroundSize: "cover", backgroundPosition: "center", margin: "20px" }}
      >
        <div className='relative z-10 flex items-center justify-center h-full'></div>
      </div>

      {/* Navigation Bar overlay to match design */}
      <div className='relative -mt-8 px-6 z-20' style={{ marginTop: "2px" }}>
        <div className='relative flex items-center'>
          <div className='relative flex items-center w-full gap-4'>
            <div className='relative' onMouseLeave={() => setIsIndexOpen(false)}>
              <button
                type='button'
                aria-haspopup='menu'
                style={{ fontFamily: "Montserrat" }}
                aria-expanded={isIndexOpen}
                className='w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500'
                onClick={() => setIsIndexOpen((v) => !v)}
                title='Índice'
              />
              {isIndexOpen && (
                <div role='menu' className='absolute left-0 mt-2 w-64 rounded-lg border border-purple-200 bg-white/95 backdrop-blur p-2 shadow-xl'>
                  {indexItems.map((item, idx) => (
                    <button
                      key={item.id}
                      type='button'
                      role='menuitem'
                      className='block w-full text-left px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-purple-50'
                      onClick={() => handleGoTo(item.id, idx)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <span className='text-purple-600 italic' style={{ fontFamily: "Montserrat" }}>
              Menú
            </span>
            <div className='h-0.5 w-[550px] bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 rounded-full' />

            <div className='absolute left-1/2 -translate-x-1/2 bg-gray-200 rounded-2xl px-8 py-4 shadow-md' style={{ fontFamily: "Montserrat" }}>
              <h1 className='text-2xl text-center'>
                <span className='text-purple-600 font-bold'>NORMATIVA</span> <span className='text-orange-600 italic font-normal'>DELICTUAL</span>
              </h1>
            </div>

            <div className='ml-auto flex gap-3'>
              <button className='bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors' style={{ fontFamily: "Montserrat" }}>
                Discord
              </button>
              <button className='bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors' style={{ fontFamily: "Montserrat" }}>
                TikTok
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className='flex gap-8 p-8' style={{ fontFamily: "Montserrat" }}>
        {/* Main Content */}
        <div className='flex-1 space-y-6'>
          <div id='que-es'>
            <h2 className='text-xl font-bold mb-3'>¿Qué es Lorem Ipsum?</h2>
            <p className='text-gray-800 leading-relaxed'>
              Lorem Ipsum es simplemente texto de relleno de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde el año
              1500, cuando un impresor desconocido tomó una galera de tipos y la mezcló para hacer un libro de muestras tipográficas.
            </p>
          </div>

          <div id='por-que'>
            <h2 className='text-xl font-bold mb-3'>¿Por qué lo usamos?</h2>
            <p className='text-gray-800 leading-relaxed'>
              Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página cuando mire su diseño. El punto de usar Lorem Ipsum es que tiene una
              distribución más o menos normal de las letras, al contrario de usar texto como "Contenido aquí, contenido aquí".
            </p>
          </div>

          <div id='origen'>
            <h2 className='text-xl font-bold mb-3'>¿De dónde viene?</h2>
            <p className='text-gray-800 leading-relaxed'>
              Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raíces en una pieza de la literatura latina clásica del año 45 antes de Cristo,
              haciendo que este texto tenga más de 2000 años de antigüedad.
            </p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className='w-64'>
          <div className='border border-gray-300 rounded-lg p-4 bg-white'>
            <div className='space-y-2'>
              {indexItems.map((item, idx) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${
                    selectedOption === idx + 1 ? "bg-purple-100 border border-purple-300" : "hover:bg-gray-50"
                  }`}
                  onClick={() => handleGoTo(item.id, idx)}
                >
                  <span className='text-gray-700'>{item.label}</span>
                  {selectedOption === idx + 1 && (
                    <svg className='w-4 h-4 text-purple-600' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
