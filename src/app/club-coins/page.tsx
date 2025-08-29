"use client"

import Sidebar from "@/components/Sidebar"
import { CircleCheckIcon, ClockIcon, CrownIcon, GiftIcon, MenuIcon, ShoppingBagIcon, StarIcon, XIcon, ZapIcon } from "lucide-react"
import { useState } from "react"

export default function ClubCoins() {
  const [selectedOption, setSelectedOption] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  // Main navigation structure
  const navigationSections = [
    {
      id: "club-coins",
      title: "Club Coins",
      icon: "🌟",
      items: [
        { id: "que-son", label: "¿Qué son las Club Coins?", level: 0 },
        { id: "como-conseguir", label: "¿Cómo se consiguen?", level: 0 },
        { id: "como-consultar", label: "¿Cómo consulto mis coins?", level: 0 },
        { id: "para-que-sirven", label: "¿Para qué sirven?", level: 0 },
        { id: "acceso-vip", label: "Acceso VIP", level: 0 }
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

  const toggleSection = (sectionId: string) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null)
    } else {
      setExpandedSection(sectionId)
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
              <span className='text-purple-300'>CLUB</span> <span className='text-orange-300'>COINS</span>
            </h1>
            <p className='text-lg md:text-xl opacity-100 max-w-2xl mx-auto'>La moneda especial de nuestro servidor para premiar tu tiempo en ciudad</p>
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
                    <b className='text-purple-600 '>Club</b> Coins
                  </p>
                </div>
              </div>
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
          />

          {/* Main Content */}
          <div className={`flex-1`}>
            <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
              <div className='prose prose-lg max-w-none'>
                {/* Content sections */}
                <div>
                  <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='que-son'>
                    <span>¿Qué son las Club Coins?</span>
                  </h2>
                  <div className='bg-blue-50 border-l-4 border-blue-400 p-4 mb-6'>
                    <p className='text-gray-800 leading-relaxed'>
                      Las Club Coins son la moneda especial de nuestro servidor, pensada para premiar tu tiempo en ciudad y darte acceso a beneficios exclusivos.
                    </p>
                  </div>
                </div>

                <div className='grid gap-4'>
                  <SectionContent reference='¿Cómo se consiguen?'>
                    <SubSectionContent reference='¿Cómo se consiguen?'>
                      <HeaderContent title='¿Cómo se consiguen?' id='como-conseguir'>
                        Existen varias formas de obtener Club Coins en nuestro servidor. Cada método está diseñado para recompensar diferentes aspectos de tu participación en la comunidad.
                      </HeaderContent>

                      <Content title='Métodos de obtención:' id='metodos-obtencion' spaced>
                        <ListItemContent title='Tiempo en ciudad' description='Por cada hora de juego recibes automáticamente Club Coins.' icon={<ClockIcon className='w-5 h-5 text-blue-600' />} />
                        <ListItemContent
                          title='Recompensa diaria'
                          description='Con el comando /regalito podrás reclamar una cantidad de coins todos los días.'
                          icon={<GiftIcon className='w-5 h-5 text-green-600' />}
                        />
                        <ListItemContent
                          title='Donaciones'
                          description='También puedes obtener Club Coins a través de nuestro sistema de apoyo/donaciones.'
                          icon={<StarIcon className='w-5 h-5 text-yellow-600' />}
                        />
                        <ListItemContent title='Eventos y concursos' description='En actividades especiales se entregarán coins como premios.' icon={<ZapIcon className='w-5 h-5 text-purple-600' />} />
                      </Content>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='¿Cómo consulto mis coins?'>
                    <SubSectionContent reference='¿Cómo consulto mis coins?'>
                      <HeaderContent title='¿Cómo consulto mis coins?' id='como-consultar'>
                        Usa el comando <code className='bg-gray-100 px-2 py-1 rounded text-purple-600 font-mono'>/club</code> en cualquier momento y el sistema te mostrará cuántas Club Coins tienes
                        acumuladas.
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='¿Para qué sirven?'>
                    <SubSectionContent reference='¿Para qué sirven?'>
                      <HeaderContent title='¿Para qué sirven?' id='para-que-sirven'>
                        Las Club Coins se utilizan en una tienda exclusiva, que abre una vez a la semana para todos los jugadores. Allí podrás encontrar productos y servicios únicos que no están
                        disponibles en el juego normal.
                      </HeaderContent>

                      <Content title='Productos disponibles en la tienda:' id='productos-tienda' spaced>
                        <ListItemContent title='Objetos VIP' description='Accesorios y objetos exclusivos para personalizar tu experiencia.' icon={<CrownIcon className='w-5 h-5 text-yellow-600' />} />
                        <ListItemContent
                          title='Vehículos especiales'
                          description='Coches únicos y modificados que no se encuentran en el juego base.'
                          icon={<ShoppingBagIcon className='w-5 h-5 text-blue-600' />}
                        />
                        <ListItemContent title='Cupones de descuento' description='Descuentos en modificaciones y tuneo de vehículos.' icon={<CircleCheckIcon className='w-5 h-5 text-green-600' />} />
                        <ListItemContent
                          title='Cupones para cambio de motor'
                          description='Permisos especiales para cambiar el motor de tu vehículo.'
                          icon={<CircleCheckIcon className='w-5 h-5 text-orange-600' />}
                        />
                        <ListItemContent title='Otras sorpresas exclusivas' description='Contenido especial que se renueva regularmente.' icon={<StarIcon className='w-5 h-5 text-purple-600' />} />
                      </Content>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='Acceso VIP'>
                    <SubSectionContent reference='Acceso VIP'>
                      <HeaderContent title='Acceso VIP' id='acceso-vip'>
                        Si cuentas con un paquete VIP, recibirás una tarjeta de acceso que te permitirá entrar a la tienda en cualquier momento, sin esperar la apertura semanal.
                      </HeaderContent>
                      <ContentFooter>
                        <div className='flex items-center gap-2 mb-2'>
                          <CrownIcon className='w-6 h-6 text-yellow-600' />
                          <span className='font-bold text-yellow-600'>Beneficio VIP:</span>
                        </div>
                        Los jugadores VIP tienen acceso prioritario y exclusivo a la tienda de Club Coins, permitiéndoles comprar en cualquier momento sin restricciones de horario.
                      </ContentFooter>
                    </SubSectionContent>
                  </SectionContent>

                  {/* Call to Action */}
                  <div className='bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 mt-8'>
                    <div className='flex items-center gap-3 mb-4'>
                      <ZapIcon className='w-8 h-8 text-purple-600' />
                      <h3 className='text-xl font-bold text-purple-700'>¡Acumula tus Club Coins!</h3>
                    </div>
                    <p className='text-gray-800 leading-relaxed'>
                      Disfruta de ventajas únicas en la ciudad. Cuanto más tiempo pases jugando y participando en eventos, más Club Coins podrás acumular para acceder a contenido exclusivo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SectionContent = ({ children, reference }: { children: React.ReactNode; reference?: string }) => {
  return (
    <div className='p-4 bg-white rounded-lg gap-4 flex flex-col' data-reference={reference}>
      {children}
    </div>
  )
}

const SubSectionContent = ({ children, reference }: { children: React.ReactNode; reference?: string }) => {
  return (
    <div className={`border-b-1 border-gray-200`} data-reference={reference}>
      {children}
    </div>
  )
}

const HeaderContent = ({ title, children, id }: { title: string; children: React.ReactNode; id: string }) => {
  return (
    <div id={id} className='mb-8'>
      <h2 className='text-2xl font-bold mb-4 text-purple-700'>{title}</h2>
      <div className='bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-4'>
        <p className='text-gray-800 leading-relaxed text-justify'>{children}</p>
      </div>
    </div>
  )
}

const Content = ({ title, children, id, spaced }: { title: string; children: React.ReactNode; id: string; spaced?: boolean }) => {
  return (
    <div id={id} className={`mb-8 ${spaced && "pl-10"}`}>
      <h3 className={`text-xl font-bold mb-4 text-purple-600 `}>{title}</h3>
      <div className={`grid gap-4`}>{children}</div>
    </div>
  )
}

const ListItemContent = ({ title, description, items, icon }: { title?: string; description?: string; items?: string[]; icon?: React.ReactNode }) => {
  return (
    <div className='bg-white border border-purple-200 rounded-lg p-4'>
      {title && (
        <div className='flex items-center gap-3 mb-2'>
          {icon}
          <h4 className='font-bold text-purple-600'>{title}</h4>
        </div>
      )}
      {description && (
        <label className='flex items-center gap-4'>
          <span>
            <CircleCheckIcon className='w-4 h-4 text-purple-600' />
          </span>
          <p className='text-gray-700'>{description}</p>
        </label>
      )}
      {items && (
        <ul className='list-disc list-inside text-gray-700 pl-4 mt-2 space-y-2'>
          {items.map((item, index) => (
            <li className='text-gray-700' key={index}>
              {item.includes(":") ? (
                <>
                  <span className='font-bold'>{item.split(":")[0]}:</span> <span>{item.split(":")[1]}</span>
                </>
              ) : (
                <span>{item}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const ContentFooter = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-slate-100 rounded-lg p-6 mb-4'>
      <label className='flex items-center gap-2 flex-col'>
        <p className='text-gray-800 leading-relaxed'>{children}</p>
      </label>
    </div>
  )
}
