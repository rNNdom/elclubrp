'use client'

import { useState } from 'react'

export default function NormativaGeneral() {
    const [selectedOption, setSelectedOption] = useState(2)
    const [isIndexOpen, setIsIndexOpen] = useState(false)

    const indexItems = [
        { id: 'Concepto', label: 'Conceptos Generales' },
        { id: '1.0', label: 'Rol De Interaccion' },
        { id: 'Ejemplos Rol Interacion', label: 'Ejemplos Rol Interaccion' },
        { id: '1.0.1', label: 'Acuerdo Entre Facciones' },
        { id: 'Obligaciones y Coordinacion', label: 'Interaccion Entre Facciones Gubernamentales' },
        { id: '/me', label: '1.0.2 /ME - Accion Del Personaje' },
        { id: '/do', label: '1.0.3 /DO - Entornos y Detalles' },
        { id: '1.1', label: '1.1 Rol Del Interpretacion (RDI)' },
        { id: '1.1.1', label: '1.1.1 Nombre Del Personaje' },
        { id: '1.2', label: '1.2 In Character (IC)' },
        { id: '1.3', label: '1.3 Out of Character (OOC)' },
        { id: '1.4', label: '1.4 MetaGaming (MG)' },
        { id: '1.4.1', label: '1.4.1 MetaGaming 2 (MG2)' },
        { id: '1.4.2', label: '1.4.2 Ghosting' },
        { id: '1.4.3', label: '1.4.3 MetaKill (MK)' },
        { id: '1.5', label: '1.5 PowerGaming (PG)' },
        { id: '1.5.2', label: '1.5.2 PowerGaming2 (PG2)' },
        { id: '1.5.3', label: '1.5.3 Sobrecarga del Inventario' },
        { id: '1.6', label: '1.6 Bunny Jump (BJ)' },
        { id: '1.7', label: '1.7 Rol De Entorno (RDE)' },
        { id: '1.8', label: '1.8 Player Kill (PK)' },
        { id: '1.8.1', label: '1.8.1 Primera Parte PK' },
        { id: '1.8.2', label: '1.8.2 Segunda Parte PK' },
        { id: '1.8.3', label: '1.8.3 Tercera Parte PK' },
        { id: '1.9', label: '1.9 Regenver Kill (RK)' },
        { id: '2.0', label: '2.0 Player Kill Total (PKT)' },
        { id: '2.1', label: '2.1 Team Kill (TK)' },
        { id: '2.2', label: '2.2 Character Kill (CK)' },
        { id: 'TiposCK', label: 'Tipos De CK' },
        { id: '2.3', label: '2.3 Spawn Kill (SK)' },
        { id: '2.4', label: '2.4 Deathmatch (DM)' },
        { id: '2.5', label: '2.5 Vehicle Deathmatch (VDM)' },
        { id: '2.6', label: '2.6 Car Kill' },
        { id: '2.7', label: '2.7 No Valorar Vida' },
        { id: '2.8', label: '2.8 Forzar Rol' },
        { id: '2.9', label: '2.9 Evasion De Rol' },
        { id: '3.0', label: '3.0 Nunca Parar Rol' },
        { id: '3.1', label: '3.1 Actos Sexuales / Violaciones' },
        { id: '3.2', label: '3.2 Abuso De Mecanicas, Bugs, Exploits' },
        { id: '3.3', label: '3.3 Fair Play' },
        { id: '3.4', label: '3.4 Fear Play' },
        { id: '3.5', label: '3.5 Multiples Pj (SLOTS)' },
        { id: '3.6', label: '3.6 Reconocimiento De Personas' },
        { id: '3.7', label: '3.7 Dupeo' },
        { id: '3.8', label: '3.8 CryReport' },
        { id: '3.9', label: '3.9 Vacio Legal' }
    ]

    const handleGoTo = (id: string, idx: number) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        setSelectedOption(idx + 1)
        setIsIndexOpen(false)
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="relative h-96 flex items-center justify-center" style={{borderRadius: '20px', backgroundImage: 'url(/banner.png)', backgroundSize: 'cover', backgroundPosition: 'center', margin: '20px'}}>
                <div className="relative z-10 flex items-center justify-center h-full"></div>
            </div>

            {/* Navigation Bar overlay to match design */}
            <div className="relative -mt-8 px-6 z-20" style={{marginTop: '2px'}}>
                <div className="relative flex items-center">
                    <div className="relative flex items-center w-full gap-4 ">
                        <div className="relative" onMouseLeave={() => setIsIndexOpen(false)}>
                            <button type="button" aria-haspopup="menu" aria-expanded={isIndexOpen} className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500 " onClick={() => setIsIndexOpen((v) => !v)} title="Índice" />
                            {isIndexOpen && (
                                <div role="menu" className="absolute left-0 mt-2 w-64 rounded-lg border border-purple-200 bg-white/95 backdrop-blur p-2 shadow-xl ">
                                    {indexItems.map((item, idx) => (
                                        <button key={item.id} type="button" role="menuitem" className="block w-full text-left px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-purple-50" onClick={() => handleGoTo(item.id, idx)}>
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <span className="text-purple-600 italic" style={{ fontFamily: 'Montserrat' }}>Menú</span>
                        <div className="h-0.5 w-[550px] bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 rounded-full">
                        </div>

                        <div className="absolute left-1/2 -translate-x-1/2 bg-gray-200 rounded-2xl px-8 py-4 shadow-md" style={{ fontFamily: 'Montserrat' }}>
                            <h1 className="text-2xl text-center">
                                <span className="text-purple-600 font-bold">NORMATIVA</span>{' '}
                                <span className="text-orange-600 italic font-normal">GENERAL</span>
                            </h1>
                        </div>

                        <div className="ml-auto flex gap-3">
                            <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors" style={{ fontFamily: 'Montserrat' }}>
                                Discord
                            </button>
                            <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors" style={{ fontFamily: 'Montserrat' }}>
                                TikTok
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex gap-8 p-8" style={{ fontFamily: 'Montserrat' }}>
                {/* Main Content */}
                <div className="flex-1 space-y-6">
                    <div>
                        <h2 className="text-xl font-bold mb-3" id="Concepto">📝
                        Conceptos Generales</h2>
                        <p className="text-gray-800 leading-relaxed" style={{marginLeft: '40px'}}>
                        Es responsabilidad de cada usuario tener claro cada concepto ya que en todo servidor puede variar algo, mejor prevenir antes que cometer faltas a las normas.
                        </p>
                    </div>
                {/* 1.0 Rol De Interaccion*/}
                    <div id="1.0">
                        <h2 className="text-xl font-bold mb-3">1.0 Rol del Interacción (RDINT) </h2>
                        <p className="text-gray-800 leading-relaxed " style={{marginLeft: '40px'}}>
                        El <span className="leading-relaxed font-bold" >Rol De Interacción (RDINT)</span> es la base de una experiencia inmersiva en el Roleplay. Se refiere a cualquier acción o situación dentro del juego que implique una interacción realista entre jugadores, donde cada uno actúe de acuerdo con la personalidad, historia y habilidades de su personaje.
                        </p>
                    </div>
                {/* 1.0 Rol De Interaccion Ejemplos*/}
                    <div id="Ejemplos Rol Interacion" style={{marginLeft:'40px'}}>
                        <h2 className="text-xl font-bold mb-3">Ejemplos de Rol de Interacción:</h2>
                        <p className="text-gray-800 leading-relaxed" style={{marginLeft: '40px' , marginBottom:'5px'}}>
                        <span className="text-purple-600 leading-relaxed" style={{ fontWeight: "bold" }}> Negociaciones:</span> Tratar con otro jugador para llegar a un acuerdo, ya sea en comercio, conflictos o alianzas entre facciones.
                        </p>
                        <p className="text-gray-800 leading-relaxed" style={{marginLeft: '40px', marginBottom:'5px'}}>
                        <span className="text-purple-600 leading-relaxed" style={{ fontWeight: "bold" }}>Trabajo y actividades:</span> Cumplir con roles laborales como mecánico, policía, médico o cualquier otra profesión del servidor.
                        </p>
                        <p className="text-gray-800 leading-relaxed" style={{marginLeft: '40px', marginBottom:'5px'}}>
                        <span className="text-purple-600 leading-relaxed" style={{ fontWeight: "bold" }}>Delitos con sentido IC:</span> Un robo, secuestro o enfrentamiento criminal debe tener una razón coherente y una buena interpretación.
                        </p>
                        <p className="text-gray-800 leading-relaxed" style={{marginLeft: '40px', marginBottom:'5px',}}>
                        <span className="text-purple-600 leading-relaxed" style={{ fontWeight: "bold" }}>Conflictos entre facciones:</span> Rivalidades o alianzas deben desarrollarse con una justificación IC y sin caer en abusos OOC.
                        </p>
                        <p className="text-gray-800 leading-relaxed" style={{marginLeft: '40px', marginBottom:'5px'}}>
                        <span className="text-purple-600 leading-relaxed" style={{ fontWeight: "bold" }}>Reacciones realistas:</span> Ante situaciones como un asalto, una detención policial o un accidente, se debe actuar de manera acorde a la personalidad y contexto del personaje.
                        </p>
                    </div>
                    <p className="text-gray-800 leading-relaxed">
                        El objetivo del <span className="leading-relaxed font-bold" >RDINT</span> es evitar que los jugadores simplemente realicen acciones mecánicas sin una justificación o contexto, fomentando un ambiente en el que cada interacción sea significativa y aporte al desarrollo del rol en el servidor.
                        </p>
                    {/* 1.0.1 Acuerdo entra Facciones*/}
                    <div id="1.0.1">
                        <h2 className="text-xl font-bold mb-3">1.0.1 Acuerdo entre facciones</h2>
                        <p className="text-gray-800 leading-relaxed" style={{marginLeft: '40px'}}>
                        Las facciones gubernamentales deberán <span className="text-purple-600 leading-relaxed font-bold">respetar</span> los procedimientos establecidos para cada tipo de rol y  <span className="text-purple-600 leading-relaxed font-bold" >colaborar</span> entre sí cuando la situación <span className="text-purple-600 leading-relaxed font-bold" >lo requiera.</span> Es fundamental que <span className="text-purple-600 leading-relaxed font-bold" >trabajen en conjunto</span> para garantizar un desarrollo coherente y realista de las escenas. Cualquier intento de <span className="text-purple-600 leading-relaxed font-bold" >ignorar o evitar</span> un procedimiento que implique el apoyo de otra facción será considerado una falta dentro del rol y tendrá consecuencias IC. 
                        Si esta actitud se mantiene de manera reiterada, la administración tomará medidas disciplinarias contra el responsable, asegurando que se cumplan las normativas y se respete la cohesión del roleo dentro del servidor.
                        </p>
                    {/*Interaccion entre Facciones Gubernamentales*/}
                    </div>
                    <div id="interacion gub">
                        <h2 className="text-xl font-bold mb-3">Interacción entre Facciones Gubernamentales:</h2>
                        <p className="text-gray-800 leading-relaxed" style={{marginLeft: '40px'}}>
                        Las <span className="leading-relaxed font-bold">facciones gubernamentales</span>, como la <span className="leading-relaxed font-bold">Policía, EMS, Bomberos, Sheriff, FBI y otras agencias estatales</span>, deben trabajar en conjunto para garantizar un <span className="leading-relaxed font-bold">rol estructurado, realista y dinámico</span> dentro del servidor. Cada facción tiene un propósito específico, pero todas forman parte de un <span className="leading-relaxed font-bold">sistema interconectado</span>, donde la colaboración es esencial para el desarrollo de escenas coherentes y fluidas.
                       </p>
                    </div>
                    {/*Obligaciones y Coordinacion*/}
                    <div id="Obligaciones y Coordinacion">
                        <h2 className="text-xl font-bold mb-3">📌 Obligaciones y Coordinación entre Facciones</h2>
                        <p className="text-gray-800 leading-relaxed">
                        <span className="text-purple-600 leading-relaxed font-bold" >Fuerzas del orden (Policía, Sheriff, FBI, SWAT):</span>
                        </p>
                            <p className="text-gray-800 leading-relaxed" style={{marginBottom:'5px', marginLeft:'40px'}}>
                            <span className="leading-relaxed font-bold">Responsables</span> de la seguridad pública, investigaciones criminales y aplicación de la ley.
                            Deben <span className="leading-relaxed font-bold">coordinar</span> con EMS y Bomberos en situaciones de emergencias, tiroteos o accidentes.
                            El FBI solo intervendrá en casos de <span className="leading-relaxed font-bold">alta complejidad</span> que requieran una investigación federal.</p>
                        <p className="text-gray-800 leading-relaxed" >
                        <span className="text-purple-600 leading-relaxed" style={{ fontWeight: "bold" }}>EMS y Bomberos:</span>
                        </p>
                            <p className="text-gray-800 leading-relaxed" style={{marginBottom:'5px', marginLeft:'40px'}}>
                            Se encargan de brindar <span className="leading-relaxed font-bold">atención médica y rescate</span> en situaciones de emergencias.
                            Deben <span className="leading-relaxed font-bold">coordinar con la policía</span> para ingresar de forma segura a zonas de riesgo.
                            En incendios o explosiones, los bomberos trabajan junto a la policía para evaluar la seguridad del área.
                            </p>
                        <p className="text-gray-800 leading-relaxed" >
                        <span className="text-purple-600 leading-relaxed" style={{ fontWeight: "bold" }}>Gobierno y Departamento de Justicia:</span>
                        </p>
                            <p className="text-gray-800 leading-relaxed" style={{marginBottom:'5px', marginLeft:'40px'}}>
                            Se encargan de la gestión de <span className="leading-relaxed font-bold">leyes, juicios y sentencias</span> IC.
                            La policía y el FBI deben presentar <span className="leading-relaxed font-bold">pruebas</span> ante los jueces para sustentar casos criminales.
                            La <span className="leading-relaxed font-bold">negativa a comparecer</span> o a seguir el debido proceso puede ser sancionada IC.
                            </p>
                        <p className="text-gray-800 leading-relaxed" >
                        <span className="text-purple-600 leading-relaxed" style={{ fontWeight: "bold" }}>Cooperación en situaciones específicas:</span>
                        </p>
                            <p className="text-gray-800 leading-relaxed" style={{marginBottom:'5px', marginLeft:'40px'}}>
                            <span className="leading-relaxed font-bold">Accidentes y catástrofes:</span> EMS y bomberos atienden heridos, mientras que la policía asegura la zona.
                            </p>
                            <p className="text-gray-800 leading-relaxed"  style={{marginBottom:'5px', marginLeft:'40px'}}>
                            <span className="leading-relaxed font-bold">Secuestros o asaltos:</span> Las fuerzas del orden trabajan en estrategias para resolver la situación sin poner en riesgo a los ciudadanos.
                            </p>
                            <p className="text-gray-800 leading-relaxed"  style={{marginBottom:'5px', marginLeft:'40px'}}>
                            <span className="leading-relaxed font-bold">Investigaciones criminales:</span> El FBI puede coordinar con la policía en casos de crimen organizado o terrorismo.
                            </p>                                           
                    </div>
                    {/* 1.0.2 /ME*/}
                    <div id="/me">
                        <h2 className="text-xl font-bold mb-3">1.0.2 /ME - Acción del personaje</h2>
                        <p className="text-gray-800 leading-relaxed" style={{marginLeft: '40px'}}>
                        Se usa para describir <span className="text-purple-600 leading-relaxed font-bold">acciones físicas que el personaje realiza</span> en <span className="text-purple-600 leading-relaxed font-bold" >primera persona</span>. Esto permite que otros jugadores puedan ver lo que hace el personaje, especialmente cuando no se puede representar físicamente por las mecánicas del juego. Solo debe ser utilizado para <span className="leading-relaxed font-bold" >acciones</span> y no pensamientos del personaje.                        
                        </p>
                    </div>
                    {/* 1.0.2 Ejemplos /ME*/}
                    <h2 className="text-xl font-bold mb-3"><span className="leading-relaxed font-bold" >Ejemplos de /me: </span></h2>
                    <p className="text-gray-800 leading-relaxed" style={{marginLeft: '40px'}}>
                      <span className="text-purple-600 leading-relaxed" style={{ fontWeight: "bold" }}>/me</span> saca su billetera del bolsillo y extrae algunos billetes.
                    </p>
                    <p className="text-gray-800 leading-relaxed" style={{marginLeft: '40px'}}>
                      <span className="text-purple-600 leading-relaxed" style={{ fontWeight: "bold" }}>/me</span> enciende el motor del auto y ajusta el espejo retrovisor. 
                    </p>
                        <p className="text-gray-800 leading-relaxed" style={{marginLeft: '40px'}}>
                       <span className="text-purple-600 leading-relaxed" style={{ fontWeight: "bold" }}>/me</span> toma su radio y presiona el botón para hablar.  
                    </p>
                    {/* 1.0.3 /DO*/}
                    <div id="/do">
                        <h2 className="text-xl font-bold mb-3">1.0.3 /DO - Entorno y detalles adicionaless</h2>
                        <p className="text-gray-800 leading-relaxed" style={{marginLeft: '40px'}}>
                        Se utiliza para describir elementos del entorno, reacciones físicas, efectos de una acción o preguntas sobre la escena en tercera persona. También se usa para consultar a otros jugadores sobre la efectividad de una acción. 
                        </p>
                        <h2 className="text-xl font-bold mb-3">Ejemplos de /do:</h2>
                        <p className="text-gray-800 leading-relaxed" style={{marginLeft: '40px', marginBottom:'5px'}}>
                        <span className="text-purple-600 leading-relaxed" style={{ fontWeight: "bold" }}>/do</span> El motor del auto hace un ruido extraño y parece fallar.</p>
                        <p className="text-gray-800 leading-relaxed" style={{marginLeft: '40px', marginBottom:'5px'}}>
                        <span className="text-purple-600 leading-relaxed" style={{ fontWeight: "bold" }}>/do</span> ¿El policía logra notar el arma oculta bajo la chaqueta?</p>
                        <p className="text-gray-800 leading-relaxed" style={{marginLeft: '40px', marginBottom:'5px'}}>
                        <span className="text-purple-600 leading-relaxed" style={{ fontWeight: "bold" }}>/do</span> El impacto del golpe le deja un gran hematoma en la mejilla.</p>
                    </div>
                    {/* 1.1 Rol De Interpretacion*/}
                    <div id="1.1">
                        <h2 className="text-xl font-bold mb-3">1.1 Rol de Interpretación (RDI)</h2>
                        <p className="text-gray-800 leading-relaxed" style={{marginLeft: '40px'}}>Este se refiere a la capacidad de un jugador para desarrollar y representar su personaje de manera realista y coherente dentro del <span className="text-purple-600 leading-relaxed italic" >roleplay</span>. Esto implica actuar según la personalidad, historia y circunstancias del personaje, manteniendo la inmersión y respetando las reglas del juego. </p>
                        <p className="text-gray-800 leading-relaxed" style={{marginLeft: '40px', marginTop:'10px'}}>El  <span className="leading-relaxed font-bold" >RDI</span> también es fundamental en las <span className="leading-relaxed font-bold" >facciones legales</span>, donde los jugadores deben interpretar correctamente a policías, médicos, jueces, entre otros, respetando protocolos y procedimientos que se aplicarían en la vida real. Del mismo modo, en las <span className="leading-relaxed font-bold" >organizaciones delictuales (OD)</span>, el rol de interpretación implica actuar de manera acorde al mundo criminal, evitando actitudes exageradas o irreales, como atacar sin planificación, cometer delitos sin discreción o actuar como si fueran invencibles.</p>
                    </div>
                    {/**/}
                    <div id="1.1.1">
      <h2 className="text-2xl font-bold mb-4">1.1.1 Nombre del personaje</h2>
      <p style={{marginLeft:'40px'}}>
        El nombre de tu personaje debe cumplir con el formato <b className="text-purple-600">Nombre y Apellido</b>, asegurando coherencia y realismo...
      </p>
      <p style={{marginLeft:'40px'}}>
        Queda estrictamente prohibido el uso de nombres ofensivos, paródicos o que tengan la intención de molestar...
      </p>
      <p style={{marginLeft:'40px'}}>
        En caso de que un nombre incumpla estas normas, la administración podrá solicitar un cambio inmediato...
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4" id="1.2">1.2 In Character (IC)</h2>
      <p style={{marginLeft:'40px'}}>
      Es todo lo que vive y experimenta <span className="text-purple-600 leading-relaxed font-bold" >nuestro personaje</span>, incluyendo su entorno y las situaciones que ocurren en la ciudad donde reside. Comprende <span className="leading-relaxed text-purple-600" >toda la información</span>, vivencias y experiencias que el personaje adquiere a lo largo de su <span className="leading-relaxed text-purple-600" >desarrollo</span> de historia. También abarca sus habilidades y aptitudes, las cuales deben aprenderse e interpretarse de manera coherente dentro del juego. 
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4" id="1.3">1.3 Out of Character (OOC)</h2>
      <p style={{marginLeft:'40px'}}>
      Son todas aquellas acciones que tienen origen <span className="leading-relaxed font-bold text-purple-600" >fuera de la interpretación del juego</span>, o lo que es lo mismo fuera de personaje.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4" id="1.4">1.4 Metagaming (MG)</h2>
      <p style={{marginLeft:'40px'}}>
      Se refiere a cuando un jugador usa <span className="leading-relaxed font-bold text-purple-600">información externa o conocimientos fuera del juego</span>, para influir en las acciones o decisiones dentro del juego. Es decir, si un jugador sabe algo fuera del rol, como una charla entre jugadores, y luego su personaje actúa como si ya supiera esa información, es <span className="leading-relaxed italic text-purple-600" >metagaming</span>. 
      </p>
        <p style={{marginLeft:'40px'}}>Este tipo de comportamiento rompe la inmersión y hace que la experiencia del juego sea menos auténtico, ya que el personaje actúa con conocimientos que no tendría en su mundo, lo que puede arruinar la dinámica y la sorpresa en la historia.</p>
      <h3 className="text-xl font-bold mt-4 mb-2"  id="1.4.1">1.4.1 Metagaming 2 (MG2)</h3>
      <p style={{marginLeft:'40px'}}>Este concepto se define como la confusión de canales In Character (IC) a Out Of Character (OOC).</p>

      <h3 className="text-xl font-bold mt-4 mb-2" id="1.4.2">1.4.2 Ghosting</h3>
      <p style={{marginLeft:'40px'}}>Es una ramificación del MetaGaming. Consiste en que si tu personaje resulta abatido e inconsciente, este entrega información OOC para su rescate. </p>

      <h3 className="text-xl font-bold mt-4 mb-2" id="1.4.3">1.4.3 MetaKill (MK)</h3>
      <p style={{marginLeft:'40px'}}>Se define como la acción de abatir a un usuario, debido a <span className="leading-relaxed font-bold text-purple-600" >motivos o acciones acontecidas fuera</span> de nuestro personaje (OOC).</p>

      <h2 className="text-2xl font-bold mt-6 mb-4" id="1.5">1.5 Powergaming (PG)</h2>
      <p style={{marginLeft:'40px'}}>
      El <span className="leading-relaxed text-purple-600" >powergaming</span> (PG) es cuando un jugador <span className="leading-relaxed font-bold text-purple-600" >actúa de forma exagerada o irrealista</span> dentro del juego, haciendo cosas que, aunque posibles en el mundo virtual, <span className="leading-relaxed text-purple-600" >no tendrían sentido ni lógica en la vida real</span>. Esto se refiere a realizar acciones sin considerar las consecuencias o la coherencia del rol. Por ejemplo, un jugador podría hacer que su personaje maneje un vehículo a altísimas velocidades sin que el vehículo sufra daños, o intentar saltar de manera acrobática sin tener en cuenta lo que realmente pasaría en una situación así. 
      </p>
        <p style={{marginLeft:'40px', marginTop:'10px'}}>
        Sin embargo, esto no significa que no se puedan hacer cosas fuera de lo común; la clave está en hacerlo de manera realista, es decir, si vas a realizar una acción fuera de lo habitual, debes "rolearlas" de forma que tenga sentido dentro del contexto y considere las consecuencias, como daños al vehículo o al personaje. El powergaming ocurre cuando se ignoran esas reacciones lógicas y se actúa solo con el objetivo de ser más poderoso o lograr más sin importar las reglas del juego o la historia.
        </p>
      <h3 className="text-xl font-bold mt-4 mb-2" id="1.5.2">1.5.2 Powergaming 2 (PG2)</h3>
      <p>se define como <span className="leading-relaxed font-bold text-purple-600" >evadir o forzar</span> un rol a beneficio personal.</p>

      <h3 className="text-xl font-bold mt-4 mb-2"  id="1.5.3">1.5.3 Sobrecarga de Inventario</h3>
      <p>Esto significa que <span className="leading-relaxed font-bold text-purple-600" >no puedes llevar una cantidad excesiva de objetos sin usar un bolso o contenedor adecuado</span>. Esta regla aplica para todos y es esencial para mantener el equilibrio y el realismo en el juego. Por ejemplo, un usuario no podría llevar múltiples armas de distintos calibres y sus municiones, multiples chalecos o cantidades exageradas de comida. Esto aplica para <span className="leading-relaxed font-bold text-purple-600" >Facciones y ODs</span>.</p>
    </div>
    <div>
      <h2 className="text-2xl font-bold mt-6 mb-4" id="1.6">1.6 Bunny Jump (JP)</h2>
      <p style={{marginLeft:'40px'}}>La técnica del Bunny Jump implica <span className="leading-relaxed font-bold text-purple-600" >saltar repetidamente de manera continua</span> mientras se avanza en una dirección específica. Al hacerlo, se puede aumentar la velocidad de movimiento y realizar movimientos más rápidos en comparación con simplemente correr.</p>
        <p style={{marginLeft:'40px'}}>Se deberá evitar la utilización de esta técnica para obtener ventaja en situaciones donde rompa la lógica o coherencia de las acciones del personaje, también para evitar situaciones donde pueda obtener ventaja en conflictos armados, donde utilizando esta técnica podría evitar balas. </p>
      <h2 className="text-2xl font-bold mt-6 mb-4"  id="1.7">1.7 Rol de Entorno (RDE)</h2>
      <p style={{marginLeft:'40px'}}>Este consiste en <span className="leading-relaxed font-bold text-purple-600" >interpretar y reaccionar de manera realista a todo lo que rodea a tu personaje</span> dentro del juego, <span className="leading-relaxed text-purple-600" >incluso cuando no hay otros jugadores presentes</span>. Esto implica considerar elementos como el tráfico, las condiciones climáticas, la presencia de cámaras de seguridad o posibles testigos.</p>
        <p style={{marginLeft:'40px'}}>Por ejemplo, si tu personaje sufre un accidente automovilístico en una zona urbana, no sería realista simplemente marcharse sin asumir que alguien podría haber llamado a las autoridades o que habría consecuencias. Del mismo modo, conducir una motocicleta bajo la lluvia a alta velocidad sin ninguna dificultad no reflejaría la realidad.</p>
          <p style={{marginLeft:'40px'}}>También es importante tener en cuenta que, si realizas actos delictivos, siempre habrán testigos que puedan presenciar lo ocurrido. Si cometes un crimen en un hospital, debes asumir que hay pacientes, médicos, enfermeros y camilleros que podrían verlo y reaccionar. Lo mismo sucede en una comisaría: no sería lógico que un personaje simplemente pueda reducir y atacar a un oficial sin considerar que hay otros policías presentes en el edificio. En esencia, el rol de entorno ayuda a mantener la coherencia del juego, asegurando que las acciones de los personajes se desarrollen dentro de un marco lógico y creíble.</p>
      <h2 className="text-2xl font-bold mt-6 mb-4" id="1.8">1.8 Player Kill (PK)</h2>
      <p style={{marginLeft:'40px'}}>Es cuando <span className="leading-relaxed font-bold text-purple-600" >el personaje pierde la memoria de los eventos que llevaron a su muerte o inconsciencia</span> dentro del rol, sin que esto signifique su eliminación total del juego.</p>
        <p style={{marginLeft:'40px'}}>Siguiendo el ejemplo, si tu personaje queda en coma y es reanimado por un médico, deberás rolear una pérdida de memoria parcial. <span className="leading-relaxed text-purple-600" >No podrás recordar quién te atacó, qué sucedió exactamente, cómo ocurrió, cuándo pasó ni dónde estabas en los últimos 15 minutos antes de ser abatido</span>. Esto evita que los jugadores busquen venganza o retomen la situación como si nada hubiera pasado, manteniendo la coherencia del roleplay.</p>
      <h3 className="text-xl font-bold mt-4 mb-2 text-purple-600" id="1.8.1">1.8.1 Primera Fase PK</h3>
      <p style={{marginLeft:'40px'}}>Es cuando tu a personaje ya no le queda vida y pasa al estado de arrastrarse o estar en el suelo donde puedes hablar pero siempre roleando heridas.</p>

      <h3 className="text-xl font-bold mt-4 mb-2 text-purple-600" id="1.8.2">1.8.2 Segunda Fase PK</h3>
      <p style={{marginLeft:'40px'}}>Es cuando tu personaje fue abatido después de estar en el suelo agonizando herido y quedas totalmente inconsciente sin poder hablar ni recordar nada.</p>

      <h3 className="text-xl font-bold mt-4 mb-2 text-purple-600" id="1.8.3">1.8.3 Tercera Fase PK</h3>
      <p style={{marginLeft:'40px'}}>Es cuando tu personaje fue reanimado en el lugar de los hechos, fuiste llevado en ambulancia al hospital o le diste a aparecer en el hospital y no deberás recordar nada tomando siempre en cuenta el punto 1.8</p>

      <h2 className="text-2xl font-bold mt-6 mb-4" id="1.9">1.9 Revenge Kill (RK)</h2>
      <p style={{marginLeft:'40px'}}>Ocurre cuando un jugador <span className="leading-relaxed text-purple-600" >ignora la pérdida de memoria parcial</span> (PK) y <span className="leading-relaxed font-bold text-purple-600" >regresa al lugar donde murió para vengarse de su asesino</span>, atacándolo o perjudicándolo sin un desarrollo de rol adecuado.</p>
      <p style={{marginLeft:'40px'}}>Por ejemplo, si tu personaje fue abatido y luego reanimado por un médico, según las reglas del PK, no debería recordar quién lo atacó ni cómo sucedió. Sin embargo, si decides volver al lugar del incidente y tomar represalias contra la persona que te abatió estarías cometiendo <span className="leading-relaxed italic text-purple-600" >Revenge Kill</span>, ya que tu personaje no debería tener conciencia de lo ocurrido.</p>
    </div>
    <div>
      <h2 className="text-2xl font-bold mt-6 mb-4" id="2.0">2.0 Player Kill Total (PKT)</h2>
      <p style={{marginLeft:'40px'}}>Este es una ramificación del PK. Es cuando un personaje <span className="leading-relaxed font-bold text-purple-600" >pierde por completo la memoria de ciertos eventos importantes de su vida</span>, olvidando su historia, relaciones y cualquier rol que esté directamente relacionado con su asesinato. A diferencia del <span className="leading-relaxed font-bold" >CK (Character Kill)</span>, el personaje no muere definitivamente, sino que sigue existiendo, pero sin recordar los hechos que lo llevaron a esa situación.</p>
        <p style={{marginLeft:'40px'}}>Este tipo de pérdida de memoria también se aplica cuando un personaje ha estado involucrado en grandes roles que están fuertemente conectados con su asesinato. Por ejemplo, si la mayoría de sus interacciones y desarrollo giraban en torno a ese conflicto, o si pertenecía a la misma organización que lo eliminó, es necesario que olvide todos esos roles para poder continuar sin afectar la coherencia del roleplay.</p>
      <h2 className="text-2xl font-bold mt-6 mb-4" id="2.1">2.1 Team Kill (TK)</h2>
      <p style={{marginLeft:'40px'}}>Este ocurre cuando <span className="text-purple-600 leading-relaxed font-bold">abates miembros de tu propia organización/facción</span> sin ningún tipo de rol previo o por mera diversión..</p>

      <h2 className="text-2xl font-bold mt-6 mb-4" id="2.2">2.2 Character Kill (CK)</h2>
      <p style={{marginLeft:'40px'}}>Es la <span className="text-purple-600 leading-relaxed font-bold">MUERTE TOTAL Y DEFINITIVA </span> de tu personaje, lo que significa que ya no podrá ser utilizado nuevamente y su historia llega a su fin de manera permanente. A diferencia del <span className="leading-relaxed font-bold" >PK (Player Kill)</span>, donde solo se pierde la memoria de ciertos eventos, el <span className="leading-relaxed font-bold" >CK</span> implica que el personaje desaparece del mundo del juego, obligando al jugador a crear uno nuevo si desea seguir participando.</p>
        <p style={{marginLeft:'40px'}}>Al realizar un CK no podrás volver a crearte un personaje con el mismo nombre y características que tenía el anterior, tendrá que ser totalmente diferente en todos los aspectos. Lo único que se podrá mantener será el sexo del personaje.</p>
    <h2 className="text-2xl font-bold mt-6 mb-4" id="TiposCK">Tipos de CK: </h2>
        <p style={{marginLeft:'40px'}}>
        <span className="text-purple-600 leading-relaxed font-bold"> Policial:</span> Ocurre cuando una facción legal, como la policía, ejercito o FBI elimina a un personaje de manera definitiva tras un proceso de rol bien desarrollado. Esto suele suceder en casos donde un criminal ha acumulado múltiples delitos graves, exceso de multas sin pagar, entre otros y este ha sido condenado a pena de muerte o cadena perpetua. </p>
        <p style={{marginLeft:'40px'}}>
        <span className="text-purple-600 leading-relaxed font-bold"> Delictual:</span> Se da cuando una organización criminal asesina de manera definitiva a un personaje que pertenece a una facción legal. Puede ocurrir si un policía, fiscal o juez se convierte en un objetivo prioritario debido a sus acciones contra la organización, y la facción criminal logra eliminarlo dentro de un rol justificado y bien estructurado.</p>
        <p style={{marginLeft:'40px'}}>
        <span className="text-purple-600 leading-relaxed font-bold"> Voluntario:</span> Es cuando el propio jugador decide cerrar la historia de su personaje por razones personales o narrativas. Puede hacerlo mediante un rol bien desarrollado, como un asesinato, un accidente fatal o cualquier otro evento que justifique la muerte definitiva del personaje.
        </p>
        <p style={{marginLeft:'40px'}}>
        <span className="text-purple-600 leading-relaxed font-bold"> Administrativo:</span> Es impuesto por los administradores del servidor cuando un jugador ha violado gravemente las normas o ha cometido faltas que ameritan la eliminación de su personaje. También puede aplicarse en casos donde el personaje ha sido involucrado en situaciones incoherentes o que afectan la integridad del roleplay, forzando su eliminación para mantener la calidad del juego.
        </p>
        <p style={{marginLeft:'40px'}}>
        Cada tipo de CK debe ser justificado con un desarrollo de rol adecuado, asegurando que la muerte del personaje tenga sentido dentro de la historia. Todo CK deberá ser aprobado por la Administración previamente presentando todas las pruebas correspondientes.
        </p>
      <h2 className="text-2xl font-bold mt-6 mb-4" id="2.3">2.3 Spawn Kill (SK)</h2>
      <p style={{marginLeft:'40px'}}>Esto se refiere a <span className="leading-relaxed font-bold text-purple-600" >matar a un usuario desde el punto donde se spawnea</span>, ya sea salida de la casa, punto de aparición del hospital, punto de creación de personaje, entre otros.</p>

      <h2 className="text-2xl font-bold mt-6 mb-4" id="2.4">2.4 Deathmatch (DM)</h2>
      <p style={{marginLeft:'40px'}}>Este apartado se refiere a cuando un jugador se dedica a <span className="leading-relaxed font-bold text-purple-600" >agredir o intentar matar al resto de jugadores</span>, con armas o a puños, <span className="leading-relaxed font-bold text-purple-600" >sin motivo suficiente o rol previo.</span></p>

      <h2 className="text-2xl font-bold mt-6 mb-4" id="2.5">2.5 Vehicle Deathmatch (VDM)</h2>
      <p style={{marginLeft:'40px'}}>Este ocurre cuando un jugador <span className="leading-relaxed font-bold text-purple-600" >usa un vehículo para atropellar, dañar o matar</span> a otros sin una razón válida dentro del rol. Esto incluye embestir a personajes sin justificación, atropellar repetidamente sin dar oportunidad de reacción o usar el vehículo como arma principal sin contexto adecuado.</p>
    </div>
    <div>
      <h2 className="text-2xl font-bold mt-6 mb-4" id="2.6">2.6 Car Kill</h2>
      <p style={{marginLeft:'40px'}}>Se considera <span className="leading-relaxed text-purple-600" >Car Kill</span> cuando un jugador <span className="leading-relaxed font-bold text-purple-600" >atropella intencionalmente</span> a otro con el objetivo de matarlo o incapacitarlo, la diferencia con el VDM es la existencia de <span className="leading-relaxed font-bold text-purple-600" >ROL PREVIO</span>.</p>

      <h2 className="text-2xl font-bold mt-6 mb-4" id="2.7">2.7 No Valorar Vida</h2>
      <p style={{marginLeft:'40px'}}>Es el hecho de no <span className="leading-relaxed font-bold text-purple-600" >valorar tu vida</span> cuando estás siendo <span className="leading-relaxed font-bold text-purple-600" >amenazado</span> con armas o recibiendo daño severo de cualquier manera. </p>

      <h2 className="text-2xl font-bold mt-6 mb-4" id="2.8">2.8 Forzar Rol</h2>
      <p style={{marginLeft:'40px'}}><span className="leading-relaxed text-purple-600" >Forzar rol</span> se refiere a la acción de <span className="leading-relaxed font-bold text-purple-600" >imponer una situación o resultado</span> a otro jugador sin darle la oportunidad de reaccionar o decidir cómo responder dentro del rol.</p>

      <h2 className="text-2xl font-bold mt-6 mb-4" id="2.9">2.9 Evasión de Rol</h2>
      <p style={{marginLeft:'40px'}}>La <span className="leading-relaxed text-purple-600" >evasión de rol</span> ocurre cuando un jugador <span className="leading-relaxed font-bold text-purple-600" >evita, interrumpe o abandona una situación </span>de roleplay de manera intencional para no enfrentar las consecuencias IC de sus acciones. En caso de problemas de Internet o desconexión por fuerza mayor, se establece que los jugadores deben continuar el rol inmediatamente al re-conectarse y seguir adelante normalmente.</p>
        <h2 className="font-bold mt-6 mb-4">Ejemplos de evasión de rol:</h2>
        <p style={{marginLeft:'40px'}}>
        <span className="leading-relaxed font-bold" >Desconectarse</span> en medio de un arresto, persecución o cualquier escena activa.
        </p>
        <p style={{marginLeft:'40px'}}>
        <span className="leading-relaxed font-bold" >Ignorar interacciones</span> de otros jugadores, negándose a responder o participar sin justificación.
        </p>
        <p style={{marginLeft:'40px'}}>
        <span className="leading-relaxed font-bold" >No continuar un rol</span> en progreso y fingir que no ocurrió cuando se vuelve a conectar.
        </p>
        <p style={{marginLeft:'40px'}}>
        <span className="leading-relaxed font-bold" >Usar excusas OOC</span> para evadir consecuencias IC, como fingir problemas técnicos sin evidencia
        </p>
      <h2 className="text-2xl font-bold mt-6 mb-4" id="3.0">3.0 Nunca parar rol</h2>
      <p style={{marginLeft:'40px'}}>Incluso si la persona que tienes delante <span className="leading-relaxed font-bold text-purple-600" >está incumpliendo la normativa</span>, tú no debes salirte nunca ni decirle a él/ella que está incumpliendo la normativa. No hagas acciones que provoquen a otras personas a romper el roleplay. Cualquier caso de incumplimiento de normas o reporte hacia otra persona debe hacerse mediante el sistema de reportes del discord y adjuntando pruebas que respalden la denuncia. Nunca se debe hablar fuera del personaje (OOC) dentro del juego para tratar estos asuntos.</p>
    </div>
    <div>
      <h2 className="text-2xl font-bold mt-6 mb-4" id="3.1">3.1 Actos Sexuales / Violaciones</h2>
      <p style={{marginLeft:'40px'}}><span className="leading-relaxed font-bold text-purple-600" >Queda extrictamente prohibido la realización de cualquier rol sexual de manera forzosa</span>. Los actos sexuales únicamente podrán tener lugar con el consentimiento pleno de todos los personajes involucrados.</p>

      <h2 className="text-2xl font-bold mt-6 mb-4" id="3.2">3.2 Abuso de mecánicas, bugs, exploits</h2>
      <p style={{marginLeft:'40px', marginBottom:'20px'}}><span className="leading-relaxed font-bold text-purple-600" >Estrictamente prohibido el abuso de cualquier mecánica del juego para beneficio propio.</span></p>
        <p style={{marginLeft:'40px'}}>Queda completamente <span className="leading-relaxed font-bold text-red-600" >prohibido</span> el uso de bugs o exploits en su beneficio, siendo o no conscientes del uso de el mismo, cualquier sistema que esté implementado por error y se use para favorecerse de forma IC consiguiendo un beneficio considerable para si mismo o un tercero será sancionado. </p>
        <p style={{marginLeft:'40px'}}>El uso de la animación <span className="leading-relaxed font-bold text-purple-600" >/walk flee3, /walk flee4, /walk flee5</span> o cualquiera de las variantes de la misma que genere una ventaja a la hora de correr será <span className="leading-relaxed font-bold text-red-600" >sancionada</span> de manera administrativa.</p>
      <h2 className="text-2xl font-bold mt-6 mb-4" id="3.3">3.3 Fair Play</h2>
      <p style={{marginLeft:'40px'}}>El <span className="leading-relaxed text-purple-600" >Fair Play</span> se refiere al <span className="leading-relaxed font-bold text-purple-600" >juego limpio y al comportamiento ético</span> de los participantes en un entorno de roleplay. Es un principio fundamental que promueve la igualdad, el respeto y la diversión equitativa para todos los jugadores involucrados.</p>
        <p style={{marginLeft:'40px'}}><span className="leading-relaxed font-bold " >Toda la normativa escrita en el presente documento de <span className="leading-relaxed font-bold text-purple-600" >El Club RP</span> busca el fair play entre todo usuario.</span></p>
      <h2 className="text-2xl font-bold mt-6 mb-4" id="3.4">3.4 Fear Play</h2>
      <p style={{marginLeft:'40px'}}>El <span className="leading-relaxed text-purple-600" >Fear Play</span> en el roleplay es el concepto que implica <span className="leading-relaxed font-bold text-purple-600" >interpretar de manera realista</span> el <span className="leading-relaxed text-purple-600" >miedo</span> de un personaje ante situaciones de <span className="leading-relaxed text-purple-600" >peligro</span>, <span className="leading-relaxed text-purple-600" >tensión</span> o <span className="leading-relaxed text-purple-600" >amenaza</span>. Esto significa que los personajes no deben reaccionar de manera irreal o invulnerable ante eventos que pondrían en riesgo su vida o bienestar.</p>

      <h2 className="text-2xl font-bold mt-6 mb-4" id="3.5">3.5 Múltiples Personajes (SLOTS)</h2>
      <p style={{marginLeft:'40px'}}>No está permitido la creación de personajes cuyas historias o escenarios se entrelacen demasiado o destaquen en exceso, ni compartir los mismos vínculos con otros. Así como tampoco podrá tener un personaje perteneciente a una OD y otro perteneciente a una facción legal como la LSPD o la LSSD.</p>
        <p style={{marginLeft:'40px'}}>Esto busca fomentar la diversidad de tramas y experiencias dentro del servidor de roleplay, evitando que los personajes estén demasiado conectados o repitan narrativas similares. </p>
      <h2 className="text-2xl font-bold mt-6 mb-4" id="3.6">3.6 Reconocimiento de Personas</h2>
      <p style={{marginLeft:'40px'}}>No se podrán reconocer a ninguna persona por su <span className="leading-relaxed text-purple-600" >voz ni por sus nombres en el chat</span>. </p>
      <p style={{marginLeft:'40px'}}>No se puede asumir el <span className="leading-relaxed text-purple-600" >género de una persona</span> por medio del chat de voz dentro del juego.</p>
      <p style={{marginLeft:'40px'}}>No se puede asumir la <span className="leading-relaxed text-purple-600" >edad de una persona</span> por medio del chat de voz dentro del juego.</p>
      <p style={{marginLeft:'40px'}}>Se puede reconocer a una persona que atiende en un local o facción si lleva la misma ropa. Esto significa que no solo por llevar una máscara no podrán reconocerte si estás usando la misma ropa para atender a alguien. </p>

      <h2 className="text-2xl font-bold mt-6 mb-4" id="3.7">3.7 Dupeo</h2>
      <p style={{marginLeft:'40px'}}>El <span className="leading-relaxed text-purple-600" >Dupeo</span> es la acción de duplicar objetos, dinero o cualquier recurso del juego mediante el abuso de bugs, exploits o cualquier fallo del sistema.</p>

      <h2 className="text-2xl font-bold mt-6 mb-4" id="3.8">3.8 Cryreport</h2>
      <p style={{marginLeft:'40px'}}>Se considera <span className="leading-relaxed text-purple-600" >Cryreport</span> cuando un jugador realiza reportes constantes y sin fundamentos válidos, con el único propósito de quejarse sin razones justificadas o para perjudicar a otros jugadores.</p>

      <h2 className="text-2xl font-bold mt-6 mb-4" id="3.9">3.9 <span className="leading-relaxed font-bold text-red-600" >Vacío legal</span> en la Normativa</h2>
      <p style={{marginLeft:'40px'}}>Se considera <span className="leading-relaxed font-bold text-purple-600" >vacío legal</span> cualquier situación que no esté contemplada explícitamente en la normativa, pero que pueda afectar la jugabilidad o generar abuso dentro del servidor.</p>
      <p style={{marginLeft:'40px'}}>En caso de dudas o situaciones no reguladas, el equipo administrativo tendrá la última palabra para determinar la acción adecuada. Se recomienda no abusar de estos vacíos, ya que el mal uso de mecánicas no reguladas puede ser sancionado bajo la norma de Lógica de Rol o Sentido Común. Si se detecta un vacío legal, se evaluará su inclusión en futuras actualizaciones de la normativa.</p>
    </div>
                </div>

                {/* Right Sidebar */}
                <div className="w-64">
                    <div className="border border-gray-300 rounded-lg p-4 bg-white">
                        <div className="space-y-2">
                            {indexItems.map((item, idx) => (
                                <div
                                    key={item.id}
                                    className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${
                                        selectedOption === idx + 1 ? 'bg-purple-100 border border-purple-300' : 'hover:bg-gray-50'
                                    }`}
                                    onClick={() => handleGoTo(item.id, idx)}
                                >
                                    <span className="text-gray-700">{item.label}</span>
                                    {selectedOption === idx + 1 && (
                                        <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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
