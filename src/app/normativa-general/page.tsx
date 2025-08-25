"use client"

import Sidebar from "@/components/Sidebar"
import { CircleCheckIcon, InfoIcon, MenuIcon, XIcon } from "lucide-react"
import { useState } from "react"

export default function NormativaGeneral() {
  const [selectedOption, setSelectedOption] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(["general"]))

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
      items: [{ id: "coming-soon-1", label: "Próximamente...", level: 0 }]
    },
    {
      id: "clips-evidencias",
      title: "Clips y Evidencias",
      icon: "🎥",
      items: [{ id: "coming-soon-2", label: "Próximamente...", level: 0 }]
    },
    {
      id: "sanciones",
      title: "Sanciones",
      icon: "🔨",
      items: [{ id: "coming-soon-2", label: "Próximamente...", level: 0 }]
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
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
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
                    <b className='text-purple-600 '>Normativa</b> General
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
            expandedSections={expandedSections}
            selectedOption={selectedOption}
            handleItemClick={handleGoTo}
          />

          {/* Main Content */}
          <div className={`flex-1`}>
            <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
              <div className='prose prose-lg max-w-none'>
                {/* Content sections */}
                <div>
                  <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Concepto'>
                    📝 <span>Conceptos Generales</span>
                  </h2>
                  <div className='bg-blue-50 border-l-4 border-blue-400 p-4 mb-6'>
                    <p className='text-gray-800 leading-relaxed'>
                      Es responsabilidad de cada usuario tener claro cada concepto ya que en todo servidor puede variar algo, mejor prevenir antes que cometer faltas a las normas.
                    </p>
                  </div>
                </div>

                <div className='grid gap-4'>
                  <SectionContent reference='1.0 Rol de Interacción'>
                    <SubSectionContent reference='Rol de Interacción'>
                      <HeaderContent title='1.0 Rol de Interacción (RDINT)' id='1.0'>
                        El <span className='font-bold text-purple-600'>Rol de Interacción (RDINT)</span> es la base de una experiencia inmersiva en el Roleplay. Se refiere a cualquier acción o
                        situación dentro del juego que implique una interacción realista entre jugadores, donde cada uno actúe de acuerdo con la personalidad, historia y habilidades de su personaje.
                      </HeaderContent>

                      <Content title='Ejemplos de Rol de Interacción:' id='Ejemplos Rol Interacion' spaced>
                        <ListItemContent title='Negociaciones' description='Tratar con otro jugador para llegar a un acuerdo, ya sea en comercio, conflictos o alianzas entre facciones.' />
                        <ListItemContent title='Trabajo y actividades' description='Cumplir con roles laborales como mecánico, policía, médico o cualquier otra profesión del servidor.' />
                        <ListItemContent title='Delitos con sentido IC' description='Un robo, secuestro o enfrentamiento criminal debe tener una razón coherente y una buena interpretación.' />
                        <ListItemContent title='Conflictos entre facciones' description='Rivalidades o alianzas deben desarrollarse con una justificación IC y sin caer en abusos OOC.' />
                        <ListItemContent
                          title='Reacciones realistas'
                          description='Ante situaciones como un asalto, una detención policial o un accidente, se debe actuar de manera acorde a la personalidad y contexto del personaje.'
                        />
                      </Content>
                      <ContentFooter>
                        El objetivo del RDINT es evitar que los jugadores simplemente realicen acciones mecánicas sin una justificación o contexto, fomentando un ambiente en el que cada interacción
                        sea significativa y aporte al desarrollo del rol en el servidor.
                      </ContentFooter>
                    </SubSectionContent>
                    <SubSectionContent reference='Acuerdo Entre Facciones'>
                      <HeaderContent title='1.0.1 Acuerdo Entre Facciones' id='1.0.1'>
                        Las facciones gubernamentales deberán respetar los procedimientos establecidos para cada tipo de rol y colaborar entre sí cuando la situación lo requiera. Es fundamental que
                        trabajen en conjunto para garantizar un desarrollo coherente y realista de las escenas. Cualquier intento de ignorar o evitar un procedimiento que implique el apoyo de otra
                        facción será considerado una falta dentro del rol y tendrá consecuencias IC. Si esta actitud se mantiene de manera reiterada, la administración tomará medidas disciplinarias
                        contra el responsable, asegurando que se cumplan las normativas y se respete la cohesión del roleo dentro del servidor.
                        <br />
                        Si esta actitud se mantiene de manera reiterada, la administración tomará medidas disciplinarias contra el responsable, asegurando que se cumplan las normativas y se respete la
                        cohesión del roleo dentro del servidor.
                      </HeaderContent>
                      <Content title='Interacción entre facciones gubernamentales' id='Obligaciones y Coordinacion' spaced>
                        Las facciones gubernamentales, como la Policía, EMS, Bomberos, Sheriff, FBI y otras agencias estatales, deben trabajar en conjunto para garantizar un rol estructurado, realista
                        y dinámico dentro del servidor. Cada facción tiene un propósito específico, pero todas forman parte de un sistema interconectado, donde la colaboración es esencial para el
                        desarrollo de escenas coherentes y fluidas.
                        <ListItemContent
                          title='Fuerzas del orden (Policía, Sheriff, FBI, SWAT)'
                          description='Tratar con otro jugador para llegar a un acuerdo, ya sea en comercio, conflictos o alianzas entre facciones.'
                          items={[
                            "Responsables de la seguridad pública, investigaciones criminales y aplicación de la ley",
                            "Deben coordinar con EMS y Bomberos en situaciones de emergencias, tiroteos o accidentes.",
                            "El FBI solo intervendrá en casos de alta complejidad que requieran una investigación federal."
                          ]}
                        />
                        <ListItemContent
                          title='EMS y Bomberos'
                          description='Cumplir con roles laborales como mecánico, policía, médico o cualquier otra profesión del servidor.'
                          items={[
                            "Se encargan de brindar atención médica y rescate en situaciones de emergencias.",
                            "Deben coordinar con la policía para ingresar de forma segura a zonas de riesgo.",
                            "En incendios o explosiones, los bomberos trabajan junto a la policía para evaluar la seguridad del área."
                          ]}
                        />
                        <ListItemContent
                          title='Gobierno y Departamento de Justicia'
                          description='Un robo, secuestro o enfrentamiento criminal debe tener una razón coherente y una buena interpretación.'
                          items={[
                            "Se encargan de la gestión de leyes, juicios y sentencias IC.",
                            "La policía y el FBI deben presentar pruebas ante los jueces para sustentar casos criminales.",
                            "La negativa a comparecer o a seguir el debido proceso puede ser sancionada IC."
                          ]}
                        />
                        <ListItemContent
                          title='Cooperación en situaciones específicas'
                          description='Rivalidades o alianzas deben desarrollarse con una justificación IC y sin caer en abusos OOC.'
                          items={[
                            "Accidentes y catástrofes: EMS y bomberos atienden heridos, mientras que la policía asegura la zona.",
                            "Secuestros o asaltos: Las fuerzas del orden trabajan en estrategias para resolver la situación sin poner en riesgo a los ciudadanos.",
                            "Investigaciones criminales: El FBI puede coordinar con la policía en casos de crimen organizado o terrorismo."
                          ]}
                        />
                      </Content>
                    </SubSectionContent>
                    <SubSectionContent reference='Acción del Personaje /ME'>
                      <HeaderContent title='1.0.2 /ME - Acción del Personaje' id='1.0.2'>
                        Se usa para describir acciones físicas que el personaje realiza en primera persona. Esto permite que otros jugadores puedan ver lo que hace el personaje, especialmente cuando
                        no se puede representar físicamente por las mecánicas del juego. Solo debe ser utilizado para acciones y no pensamientos del personaje.
                      </HeaderContent>
                      <Content title='Ejemplos de /ME:' id='Ejemplos /ME' spaced>
                        <ListItemContent title='Acciones físicas' description='/me saca su billetera del bolsillo y extrae algunos billetes.' />
                        <ListItemContent title='Acciones de combate' description='/me enciende el motor del auto y ajusta el espejo retrovisor.' />
                        <ListItemContent title='Acciones de interacción' description='/me toma su radio y presiona el botón para hablar.' />
                      </Content>
                    </SubSectionContent>
                    <SubSectionContent reference='Entornos y Detalles /DO'>
                      <HeaderContent title='1.0.3 /DO - Entornos y Detalles' id='1.0.3'>
                        Se utiliza para describir elementos del entorno, reacciones físicas, efectos de una acción o preguntas sobre la escena en tercera persona. También se usa para consultar a otros
                        jugadores sobre la efectividad de una acción.
                      </HeaderContent>
                      <Content title='Ejemplos de /DO:' id='Ejemplos /DO' spaced>
                        <ListItemContent title='Elementos del entorno' description='/do El motor del auto hace un ruido extraño y parece fallar.' />
                        <ListItemContent title='Reacciones físicas' description=' /do ¿El policía logra notar el arma oculta bajo la chaqueta?.' />
                        <ListItemContent title='Efectos de una acción' description='/do El impacto del golpe le deja un gran hematoma en la mejilla..' />
                      </Content>
                    </SubSectionContent>
                  </SectionContent>
                  <SectionContent reference='1.1 Rol de Interpretación (RDI)'>
                    <SubSectionContent reference='Rol de Interpretación (RDI)'>
                      <HeaderContent title='1.1 Rol de Interpretación (RDI)' id='1.1'>
                        Este se refiere a la capacidad de un jugador para desarrollar y representar su personaje de manera realista y coherente dentro del roleplay. Esto implica actuar según la
                        personalidad, historia y circunstancias del personaje, manteniendo la inmersión y respetando las reglas del juego. El RDI también es fundamental en las facciones legales, donde
                        los jugadores deben interpretar correctamente a policías, médicos, jueces, entre otros, respetando protocolos y procedimientos que se aplicarían en la vida real. Del mismo
                        modo, en las organizaciones delictuales (OD), el rol de interpretación implica actuar de manera acorde al mundo criminal, evitando actitudes exageradas o irreales, como atacar
                        sin planificación, cometer delitos sin discreción o actuar como si fueran invencibles.
                      </HeaderContent>
                    </SubSectionContent>
                    <SubSectionContent reference='Nombre del Personaje'>
                      <HeaderContent title='1.1.1 Nombre del Personaje' id='1.1.1'>
                        El nombre de tu personaje debe cumplir con el formato Nombre y Apellido, asegurando coherencia y realismo. No se permiten nombres inventados que no tengan sentido dentro del
                        rol o que rompan la inmersión del juego. Queda estrictamente prohibido el uso de nombres ofensivos, paródicos o que tengan la intención de molestar a otros jugadores. Los
                        nombres deben ser apropiados y adecuados al contexto del rol, evitando memes o combinaciones irreales. En caso de que un nombre incumpla estas normas, la administración podrá
                        solicitar un cambio inmediato. Si el jugador se niega a hacerlo, se aplicarán sanciones correspondientes, que pueden incluir modificaciones forzadas o restricciones dentro del
                        servidor.
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='1.2 In Character (IC)'>
                    <SubSectionContent reference='In Character (IC)'>
                      <HeaderContent title='1.2 In Character (IC)' id='1.2'>
                        Es todo lo que vive y experimenta nuestro personaje, incluyendo su entorno y las situaciones que ocurren en la ciudad donde reside. Comprende toda la información, vivencias y
                        experiencias que el personaje adquiere a lo largo de su desarrollo de historia. También abarca sus habilidades y aptitudes, las cuales deben aprenderse e interpretarse de
                        manera coherente dentro del juego.
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='1.3 Out of Character (OOC)'>
                    <SubSectionContent reference='Out of Character (OOC)'>
                      <HeaderContent title='1.3 Out of Character (OOC)' id='1.3'>
                        Son todas aquellas acciones que tienen origen fuera de la interpretación del juego, o lo que es lo mismo fuera de personaje. Los comentarios OOC dentro de un rol, deben aportar
                        exclusivamente al curso del mismo, ya sea informativo, de humor, de reacción a algo que ocurrió en el rol, etc. No deben ser utilizados para pedir ayuda, para hablar de
                        personajes que no están en el rol, para hablar de cosas que no tienen que ver con el rol, etc.
                      </HeaderContent>
                      <Content title='Ejemplos de OOC:' id='Ejemplos OOC' spaced>
                        <ListItemContent title='Acciones fuera de personaje' description='/ooc Ocurrió algo acá en mi casa, dame un segundo.' />
                        <ListItemContent title='Acciones fuera de personaje' description='/ooc Llegó la comida, voy y vuelvo.' />
                      </Content>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='1.4 Metagaming'>
                    <SubSectionContent reference='Metagaming'>
                      <HeaderContent title='1.4 Metagaming (MG)' id='1.4'>
                        Se refiere a cuando un jugador usa información externa o conocimientos fuera del juego, para influir en las acciones o decisiones dentro del juego. Es decir, si un jugador sabe
                        algo fuera del rol, como una charla entre jugadores, y luego su personaje actúa como si ya supiera esa información, es metagaming. Este tipo de comportamiento rompe la
                        inmersión y hace que la experiencia del juego sea menos auténtico, ya que el personaje actúa con conocimientos que no tendría en su mundo, lo que puede arruinar la dinámica y
                        la sorpresa en la historia.
                      </HeaderContent>
                    </SubSectionContent>
                    <SubSectionContent reference='Metagaming 2 (MG)'>
                      <HeaderContent title='1.4.1 Metagaming 2 (MG)' id='1.4.1'>
                        Este concepto se define como la confusión de canales In Character (IC) a Out Of Character (OOC).
                      </HeaderContent>
                    </SubSectionContent>
                    <SubSectionContent reference='Ghosting'>
                      <HeaderContent title='1.4.2 Ghosting' id='1.4.2'>
                        Es una ramificación del MetaGaming. Consiste en que si tu personaje resulta abatido e inconsciente, este entrega información OOC para su rescate.
                      </HeaderContent>
                    </SubSectionContent>
                    <SubSectionContent reference='MetaKill (MK)'>
                      <HeaderContent title='1.4.3 MetaKill (MK)' id='1.4.3'>
                        Se define como la acción de abatir a un usuario, debido a motivos o acciones acontecidas fuera de nuestro personaje (OOC).
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='1.5 PowerGaming (PG)'>
                    <SubSectionContent reference='1.5 PowerGaming (PG)'>
                      <HeaderContent title='1.5 PowerGaming (PG)' id='1.5'>
                        El powergaming (PG) es cuando un jugador actúa de forma exagerada o irrealista dentro del juego, haciendo cosas que, aunque posibles en el mundo virtual, no tendrían sentido ni
                        lógica en la vida real. Esto se refiere a realizar acciones sin considerar las consecuencias o la coherencia del rol. Por ejemplo, un jugador podría hacer que su personaje
                        maneje un vehículo a altísimas velocidades sin que el vehículo sufra daños, o intentar saltar de manera acrobática sin tener en cuenta lo que realmente pasaría en una situación
                        así. Sin embargo, esto no significa que no se puedan hacer cosas fuera de lo común; la clave está en hacerlo de manera realista, es decir, si vas a realizar una acción fuera de
                        lo habitual, debes "rolearlas" de forma que tenga sentido dentro del contexto y considere las consecuencias, como daños al vehículo o al personaje. El powergaming ocurre cuando
                        se ignoran esas reacciones lógicas y se actúa solo con el objetivo de ser más poderoso o lograr más sin importar las reglas del juego o la historia.{" "}
                      </HeaderContent>
                    </SubSectionContent>
                    <SubSectionContent reference='1.5.1 PowerGaming 2 (PG)'>
                      <HeaderContent title='1.5.1 PowerGaming 2 (PG)' id='1.5.1'>
                        Se define como evadir o forzar un rol a beneficio personal.
                      </HeaderContent>
                    </SubSectionContent>
                    <SubSectionContent reference='1.5.2 Sobrecarga del Inventario'>
                      <HeaderContent title='1.5.2 Sobrecarga del Inventario' id='1.5.2'>
                        Esto significa que no puedes llevar una cantidad excesiva de objetos sin usar un bolso o contenedor adecuado. Esta regla aplica para todos y es esencial para mantener el
                        equilibrio y el realismo en el juego. Por ejemplo, un usuario no podría llevar múltiples armas de distintos calibres y sus municiones, multiples chalecos o cantidades
                        exageradas de comida. Esto aplica para Facciones y ODs.
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='1.6 Bunny Jump (BJ)'>
                    <SubSectionContent reference='Bunny Jump (BJ)'>
                      <HeaderContent title='1.6 Bunny Jump (BJ)' id='1.6'>
                        La técnica del Bunny Jump implica saltar repetidamente de manera continua mientras se avanza en una dirección específica. Al hacerlo, se puede aumentar la velocidad de
                        movimiento y realizar movimientos más rápidos en comparación con simplemente correr. Se deberá evitar la utilización de esta técnica para obtener ventaja en situaciones donde
                        rompa la lógica o coherencia de las acciones del personaje, también para evitar situaciones donde pueda obtener ventaja en conflictos armados, donde utilizando esta técnica
                        podría evitar balas.
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='1.7 Rol de Entorno (RDE)'>
                    <SubSectionContent reference='1.7 Rol de Entorno (RDE)'>
                      <HeaderContent title='1.7 Rol de Entorno (RDE)' id='1.7'>
                        Este consiste en interpretar y reaccionar de manera realista a todo lo que rodea a tu personaje dentro del juego, incluso cuando no hay otros jugadores presentes. Esto implica
                        considerar elementos como el tráfico, las condiciones climáticas, la presencia de cámaras de seguridad o posibles testigos. Por ejemplo, si tu personaje sufre un accidente
                        automovilístico en una zona urbana, no sería realista simplemente marcharse sin asumir que alguien podría haber llamado a las autoridades o que habría consecuencias. Del mismo
                        modo, conducir una motocicleta bajo la lluvia a alta velocidad sin ninguna dificultad no reflejaría la realidad. También es importante tener en cuenta que, si realizas actos
                        delictivos, siempre habrán testigos que puedan presenciar lo ocurrido. Si cometes un crimen en un hospital, debes asumir que hay pacientes, médicos, enfermeros y camilleros que
                        podrían verlo y reaccionar. Lo mismo sucede en una comisaría: no sería lógico que un personaje simplemente pueda reducir y atacar a un oficial sin considerar que hay otros
                        policías presentes en el edificio. En esencia, el rol de entorno ayuda a mantener la coherencia del juego, asegurando que las acciones de los personajes se desarrollen dentro
                        de un marco lógico y creíble.
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='1.8 Player Kill (PK)'>
                    <SubSectionContent reference='Player Kill (PK)'>
                      <HeaderContent title='1.8 Player Kill (PK)' id='1.8'>
                        Es cuando el personaje pierde la memoria de los eventos que llevaron a su muerte o inconsciencia dentro del rol, sin que esto signifique su eliminación total del juego.
                        Siguiendo el ejemplo, si tu personaje queda en coma y es reanimado por un médico, deberás rolear una pérdida de memoria parcial. No podrás recordar quién te atacó, qué sucedió
                        exactamente, cómo ocurrió, cuándo pasó ni dónde estabas en los últimos 15 minutos antes de ser abatido. Esto evita que los jugadores busquen venganza o retomen la situación
                        como si nada hubiera pasado, manteniendo la coherencia del roleplay.
                      </HeaderContent>
                      <Content title='Tipos de PK:' id='1.8.1' spaced>
                        <ListItemContent
                          title='Primera Fase'
                          description='Es cuando tu a personaje ya no le queda vida y pasa al estado de arrastrarse o estar en el suelo donde puedes hablar pero siempre roleando heridas.'
                        />
                        <ListItemContent
                          title='Segunda Fase'
                          description='Es cuando tu personaje fue abatido después de estar en el suelo agonizando herido y quedas totalmente inconsciente sin poder hablar ni recordar nada.'
                        />
                        <ListItemContent
                          title='Tercera Fase'
                          description='Es cuando tu personaje fue reanimado en el lugar de los hechos, fuiste llevado en ambulancia al hospital o le diste a aparecer en el hospital y no deberás recordar nada tomando siempre en cuenta el punto 1.8'
                        />
                      </Content>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='1.9 Revenge Kill (RK)'>
                    <SubSectionContent reference='Revenge Kill (RK)'>
                      <HeaderContent title='1.9 Revenge Kill (RK)' id='1.9'>
                        Ocurre cuando un jugador ignora la pérdida de memoria parcial (PK) y regresa al lugar donde murió para vengarse de su asesino, atacándolo o perjudicándolo sin un desarrollo de
                        rol adecuado. Por ejemplo, si tu personaje fue abatido y luego reanimado por un médico, según las reglas del PK, no debería recordar quién lo atacó ni cómo sucedió. Sin
                        embargo, si decides volver al lugar del incidente y tomar represalias contra la persona que te abatió estarías cometiendo Revenge Kill, ya que tu personaje no debería tener
                        conciencia de lo ocurrido.
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='2.0 Player Kill Total (PKT)'>
                    <SubSectionContent reference='Player Kill Total (PKT)'>
                      <HeaderContent title='2.0 Player Kill Total (PKT)' id='2.0'>
                        Este es una ramificación del PK. Es cuando un personaje pierde por completo la memoria de ciertos eventos importantes de su vida, olvidando su historia, relaciones y cualquier
                        rol que esté directamente relacionado con su asesinato. A diferencia del CK (Character Kill), el personaje no muere definitivamente, sino que sigue existiendo, pero sin
                        recordar los hechos que lo llevaron a esa situación. Este tipo de pérdida de memoria también se aplica cuando un personaje ha estado involucrado en grandes roles que están
                        fuertemente conectados con su asesinato. Por ejemplo, si la mayoría de sus interacciones y desarrollo giraban en torno a ese conflicto, o si pertenecía a la misma organización
                        que lo eliminó, es necesario que olvide todos esos roles para poder continuar sin afectar la coherencia del roleplay.
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='2.1 Team Kill (TK)'>
                    <SubSectionContent reference='Team Kill (TK)'>
                      <HeaderContent title='2.1 Team Kill (TK)' id='2.1'>
                        Este ocurre cuando abates miembros de tu propia organización/facción sin ningún tipo de rol previo o por mera diversión.{" "}
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='2.2 Character Kill (CK)'>
                    <SubSectionContent reference='Character Kill (CK)'>
                      <HeaderContent title='2.2 Character Kill (CK)' id='2.2'>
                        Es la <b className='text-purple-700'>MUERTE TOTAL Y DEFINITIVA</b> de tu personaje, lo que significa que ya no podrá ser utilizado nuevamente y su historia llega a su fin de
                        manera permanente. A diferencia del <b>PK (Player Kill)</b>, donde solo se pierde la memoria de ciertos eventos, el CK implica que el personaje desaparece del mundo del juego,
                        obligando al jugador a crear uno nuevo si desea seguir participando. Al realizar un CK no podrás volver a crearte un personaje con el mismo nombre y características que tenía
                        el anterior, tendrá que ser totalmente diferente en todos los aspectos. Lo único que se podrá mantener será el sexo del personaje.
                      </HeaderContent>
                      <Content title='Tipos de CK:' id='2.2.1' spaced>
                        <ListItemContent
                          title='Policial'
                          description='Ocurre cuando una facción legal, como la policía, ejercito o FBI elimina a un personaje de manera definitiva tras un proceso de rol bien desarrollado. Esto suele suceder en casos donde un criminal ha acumulado múltiples delitos graves, exceso de multas sin pagar, entre otros y este ha sido condenado a pena de muerte o cadena perpetua.'
                        />
                        <ListItemContent
                          title='Delictual'
                          description='Se da cuando una organización criminal asesina de manera definitiva a un personaje que pertenece a una facción legal. Puede ocurrir si un policía, fiscal o juez se convierte en un objetivo prioritario debido a sus acciones contra la organización, y la facción criminal logra eliminarlo dentro de un rol justificado y bien estructurado.'
                        />
                        <ListItemContent
                          title='Voluntario'
                          description='Es cuando el propio jugador decide cerrar la historia de su personaje por razones personales o narrativas. Puede hacerlo mediante un rol bien desarrollado, como un asesinato, un accidente fatal o cualquier otro evento que justifique la muerte definitiva del personaje.'
                        />
                        <ListItemContent
                          title='Administrativo'
                          description='Es impuesto por los administradores del servidor cuando un jugador ha violado gravemente las normas o ha cometido faltas que ameritan la eliminación de su personaje. También puede aplicarse en casos donde el personaje ha sido involucrado en situaciones incoherentes o que afectan la integridad del roleplay, forzando su eliminación para mantener la calidad del juego.'
                        />
                      </Content>
                      <ContentFooter>
                        Cada tipo de CK debe ser justificado con un desarrollo de rol adecuado, asegurando que la muerte del personaje tenga sentido dentro de la historia. Todo CK deberá ser aprobado
                        por la Administración previamente presentando todas las pruebas correspondientes.
                      </ContentFooter>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='2.3 Spawn Kill (SK)'>
                    <SubSectionContent reference='Spawn Kill (SK)'>
                      <HeaderContent title='2.3 Spawn Kill (SK)' id='2.3'>
                        Esto se refiere a matar a un usuario desde el punto donde se spawnea, ya sea salida de la casa, punto de aparición del hospital, punto de creación de personaje, entre otros.
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='2.4 Deathmatch (DM)'>
                    <SubSectionContent reference='Deathmatch (DM)'>
                      <HeaderContent title='2.4 Deathmatch (DM)' id='2.4'>
                        Este apartado se refiere a cuando un jugador se dedica a agredir o intentar matar al resto de jugadores, con armas o a puños, sin motivo suficiente o rol previo.
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='2.5 Vehicle Deathmatch (VDM)'>
                    <SubSectionContent reference='Vehicle Deathmatch (VDM)'>
                      <HeaderContent title='2.5 Vehicle Deathmatch (VDM)' id='2.5'>
                        Este ocurre cuando un jugador usa un vehículo para atropellar, dañar o matar a otros sin una razón válida dentro del rol. Esto incluye embestir a personajes sin justificación,
                        atropellar repetidamente sin dar oportunidad de reacción o usar el vehículo como arma principal sin contexto adecuado.
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='2.6 Car Kill'>
                    <SubSectionContent reference='Car Kill'>
                      <HeaderContent title='2.6 Car Kill' id='2.6'>
                        Se considera Car Kill cuando un jugador atropella intencionalmente a otro con el objetivo de matarlo o incapacitarlo, la diferencia con el VDM es la existencia de ROL PREVIO.
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='2.7 No valorar vida'>
                    <SubSectionContent reference='No valorar vida'>
                      <HeaderContent title='2.7 No valorar vida' id='2.7'>
                        Es el hecho de no valorar tu vida cuando estás siendo amenazado con armas o recibiendo daño severo de cualquier manera.
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='2.8 Forzar rol'>
                    <SubSectionContent reference='Forzar rol'>
                      <HeaderContent title='2.8 Forzar rol' id='2.8'>
                        Forzar rol se refiere a la acción de imponer una situación o resultado a otro jugador sin darle la oportunidad de reaccionar o decidir cómo responder dentro del rol.
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='2.9 Evasión de Rol'>
                    <SubSectionContent reference='Evasión de Rol'>
                      <HeaderContent title='2.9 Evasión de Rol' id='2.9'>
                        La evasión de rol ocurre cuando un jugador evita, interrumpe o abandona una situación de roleplay de manera intencional para no enfrentar las consecuencias IC de sus acciones.
                        En caso de problemas de Internet o desconexión por fuerza mayor, se establece que los jugadores deben continuar el rol inmediatamente al re-conectarse y seguir adelante
                        normalmente.
                      </HeaderContent>
                      <Content title='Ejemplos de evasión de rol:' id='2.9.1' spaced>
                        <ListItemContent title='Desconección:' description='Desconectarse en medio de un arresto, persecución o cualquier escena activa.' />
                        <ListItemContent title='Ignorar interacciones:' description='Ignorar interacciones de otros jugadores, negándose a responder o participar sin justificación.' />
                        <ListItemContent title='No continuar rol en progreso:' description='No continuar un rol en progreso y fingir que no ocurrió cuando se vuelve a conectar.' />
                        <ListItemContent title='Negar responsabilidad:' description='Usar excusas OOC para evadir consecuencias IC, como fingir problemas técnicos sin evidencia.' />
                      </Content>
                      <ContentFooter>
                        Incluso si la persona que tienes delante está incumpliendo la normativa, tú no debes salirte nunca ni decirle a él/ella que está incumpliendo la normativa. No hagas acciones
                        que provoquen a otras personas a romper el roleplay. Cualquier caso de incumplimiento de normas o reporte hacia otra persona debe hacerse mediante el sistema de reportes del
                        discord y adjuntando pruebas que respalden la denuncia. Nunca se debe hablar fuera del personaje (OOC) dentro del juego para tratar estos asuntos.
                      </ContentFooter>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='3.0 Actos Sexuales / Violaciones'>
                    <SubSectionContent reference='Actos Sexuales / Violaciones'>
                      <HeaderContent title='3.0 Actos Sexuales / Violaciones' id='3.0'>
                        Queda terminantemente prohibido la realización de cualquier rol sexual de manera forzosa. Los actos sexuales únicamente podrán tener lugar con el consentimiento pleno de todos
                        los personajes involucrados.
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='3.1 Abuso de Mecánicas, Bugs, Exploits'>
                    <SubSectionContent reference='Abuso de Mecánicas, Bugs, Exploits'>
                      <HeaderContent title='3.1 Abuso de Mecánicas, Bugs, Exploits' id='3.1'>
                        Se encuentra estrictamente prohibido el abuso de cualquier mecánica del juego para beneficio propio. Queda completamente prohibido el uso de bugs o exploits en su beneficio,
                        siendo o no conscientes del uso de el mismo, cualquier sistema que esté implementado por error y se use para favorecerse de forma IC consiguiendo un beneficio considerable para
                        si mismo o un tercero será sancionado. El uso de las animaciones <b>/walk flee3, /walk flee4, /walk flee5</b> o cualquiera de las variantes de la misma que genere una ventaja a
                        la hora de correr será <b className='text-red-500'>sancionada</b> de manera administrativa.
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='3.2 Fair Play'>
                    <SubSectionContent reference='Fair Play'>
                      <HeaderContent title='3.2 Fair Play' id='3.2'>
                        El Fair Play se refiere al juego limpio y al comportamiento ético de los participantes en un entorno de roleplay. Es un principio fundamental que promueve la igualdad, el
                        respeto y la diversión equitativa para todos los jugadores involucrados. Toda la normativa escrita en el presente documento de El Club RP busca el fair play entre todo usuario.
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='3.3 Fear Play'>
                    <SubSectionContent reference='Fear Play'>
                      <HeaderContent title='3.3 Fear Play' id='3.3'>
                        El Fear Play en el roleplay es el concepto que implica interpretar de manera realista el miedo de un personaje ante situaciones de peligro, tensión o amenaza. Esto significa
                        que los personajes no deben reaccionar de manera irreal o invulnerable ante eventos que pondrían en riesgo su vida o bienestar.
                      </HeaderContent>
                      <Content title='Ejemplos de Fear Play:' id='3.3.1' spaced>
                        <ListItemContent
                          title='Estás siendo amenazado:'
                          description='Si estás siendo amenazado con un arma, no deberías reaccionar de manera irrealista como si no te importara tu vida.'
                        />
                        <ListItemContent
                          title='Estás siendo testigo de un crimen:'
                          description='Si estás siendo testigo de un crimen, no deberías actuar como si fueras un superhéroe y salvar a todos los involucrados, sino primero llamar a las autoridades. '
                        />
                      </Content>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='3.4 Múltiples Pj (SLOTS)'>
                    <SubSectionContent reference='Múltiples Pj (SLOTS)'>
                      <HeaderContent title='3.4 Múltiples Pj (SLOTS)' id='3.4'>
                        No está permitido la creación de personajes cuyas historias o escenarios se entrelacen demasiado o destaquen en exceso, ni compartir los mismos vínculos con otros. Así como
                        tampoco podrá tener un personaje perteneciente a una OD y otro perteneciente a una facción legal como la LSPD o la LSSD. Esto busca fomentar la diversidad de tramas y
                        experiencias dentro del servidor de roleplay, evitando que los personajes estén demasiado conectados o repitan narrativas similares.
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='3.5 Reconocimiento de Personas'>
                    <SubSectionContent reference='Reconocimiento de Personas'>
                      <HeaderContent title='3.5 Reconocimiento de Personas' id='3.5'>
                        El reconocimiento de personas es el acto de identificar y reconocer a otros jugadores dentro del juego.
                      </HeaderContent>
                      <Content title='Ejemplos de Reconocimiento de Personas:' id='3.5.1' spaced>
                        <ListItemContent
                          items={[
                            "Incorrecto: No se podrán reconocer a ninguna persona por su voz ni por sus nombres en el chat.",
                            "Incorrecto: No se puede asumir el género de una persona por medio del chat de voz dentro del juego.",
                            "Incorrecto: No se puede asumir la edad de una persona por medio del chat de voz dentro del juego.",
                            "Correcto: Se puede reconocer a una persona que atiende en un local o facción si lleva la misma ropa. Esto significa que no solo por llevar una máscara no podrán reconocerte si estás usando la misma ropa para atender a alguien. "
                          ]}
                        />
                      </Content>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='3.6 Dupeo'>
                    <SubSectionContent reference='Dupeo'>
                      <HeaderContent title='3.6 Dupeo' id='3.6'>
                        El Dupeo es la acción de duplicar objetos, dinero o cualquier recurso del juego mediante el abuso de bugs, exploits o cualquier fallo del sistema.
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='3.7 Cryreport'>
                    <SubSectionContent reference='Cryreport'>
                      <HeaderContent title='3.7 Cryreport' id='3.7'>
                        Se considera Cryreport cuando un jugador realiza reportes constantes y sin fundamentos válidos, con el único propósito de quejarse sin razones justificadas o para perjudicar a
                        otros jugadores.
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>

                  <SectionContent reference='3.8 Vacíos legales'>
                    <SubSectionContent reference='Vacíos legales'>
                      <HeaderContent title='3.8 Vacíos legales' id='3.8'>
                        Se considera vacío legal cualquier situación que no esté contemplada explícitamente en la normativa, pero que pueda afectar la jugabilidad o generar abuso dentro del servidor.
                        <br />
                        <br />
                        En caso de dudas o situaciones no reguladas, el equipo administrativo tendrá la última palabra para determinar la acción adecuada. Se recomienda no abusar de estos vacíos, ya
                        que el mal uso de mecánicas no reguladas puede ser sancionado bajo la norma de Lógica de Rol o Sentido Común. Si se detecta un vacío legal, se evaluará su inclusión en futuras
                        actualizaciones de la normativa.{" "}
                      </HeaderContent>
                    </SubSectionContent>
                  </SectionContent>
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
const ListItemContent = ({ title, description, items }: { title?: string; description?: string; items?: string[] }) => {
  return (
    <div className='bg-white border border-purple-200 rounded-lg p-4 '>
      {title && <h4 className='font-bold text-purple-600 mb-2'>{title}</h4>}
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
        <span className='flex items-center justify-start gap-2 w-full'>
          <InfoIcon className='w-5 h-5 text-blue-400' />
          <p className='text-blue-400 font-bold'>Nota:</p>
        </span>
        <p className='text-gray-800 leading-relaxed'>{children}</p>
      </label>
    </div>
  )
}
