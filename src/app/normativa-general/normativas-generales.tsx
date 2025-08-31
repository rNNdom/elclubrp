import { HeaderContent, SectionContent, SubSectionContent, Content } from "@/components/sections"
import React from "react"
import Image from "next/image"

function NormativasGenerales() {
  return <div>
        <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Concepto'>
        🔍 <span>Normativas Generales</span>
        </h2>                  
<SectionContent reference='1. Respeto y Cortesía '>
  <SubSectionContent reference='Respeto y Cortesía '>
    <HeaderContent title='1. Respeto y Cortesía' id='1.'>
      Se espera que todos los miembros de la comunidad se traten con respeto y cortesía 
      en todo momento. Es importante recordar que dentro del juego, los personajes 
      pueden tener conductas no tan correctas, pero estas deben ser interpretadas dentro 
      del contexto del rol y presentadas de manera adecuada. .{" "}
    </HeaderContent>
  </SubSectionContent>
</SectionContent>
<SectionContent reference='2. Resolución de Desacuerdos: '>
  <SubSectionContent reference='Resolución de Desacuerdos'>
    <HeaderContent title='2. Resolución de Desacuerdos: ' id='2.'>                       
      En caso de dudas o situaciones no reguladas, el equipo administrativo tendrá la última palabra para determinar la acción adecuada. Se recomienda no abusar de estos vacíos, ya
      que el mal uso de mecánicas no reguladas puede ser sancionado bajo la norma de Lógica de Rol o Sentido Común. Si se detecta un vacío legal, se evaluará su inclusión en futuras
      actualizaciones de la normativa.{" "}
    </HeaderContent>
  </SubSectionContent>
</SectionContent>
<SectionContent reference='3. Uso de los Canales de Chat'>
  <SubSectionContent reference='Uso de los Canales de Chat'>
    <HeaderContent title='3. Uso de los Canales de Chat' id='3.'>
      Canal Twitter (IC): Destinado exclusivamente para la comunicación dentro del rol. 
      Queda prohibido fomentar la toxicidad o usarlo para discusiones fuera de contexto. 
      Canales /me y /do: Deben utilizarse únicamente para sus respectivos propósitos 
      narrativos, asegurando el correcto desarrollo del rol. 
      Canal OOC: Su uso se limita a señalar aspectos puntuales que requieran aclaración 
      inmediata. No se permiten reclamos ni discusiones en este canal; cualquier 
      inconveniente debe resolverse mediante un reporte formal.  {" "}
    </HeaderContent>
  </SubSectionContent>
</SectionContent>
<SectionContent reference='4. Prohibición de Explotación de Errores o Trucos:'>
  <SubSectionContent reference='Prohibición de Explotación de Errores o Trucos:'>
    <HeaderContent title='4. Prohibición de Explotación de Errores o Trucos:' id='4.'>
      Queda prohibido el uso de errores del juego, trampas o cualquier otro método que 
      otorgue ventajas desleales. Los jugadores que detecten fallos deben informar de 
      inmediato al equipo del servidor. {" "}
    </HeaderContent>
  </SubSectionContent>
</SectionContent>
<SectionContent reference='5. Juego Justo: '>
  <SubSectionContent reference='Juego Justo: '>
    <HeaderContent title='5. Juego Justo: ' id='5.'>
      Está prohibido el uso de hacks, cheats o cualquier software que otorgue ventajas 
      desleales. Esto incluye complementos tales como Citizen, mira externa, aimbots, 
      trasers, etc. La infracción de esta norma resultará en una amonestación verbal o 
      expulsión permanente.{" "}
    </HeaderContent>
  </SubSectionContent>
</SectionContent>
<SectionContent reference='6. Personajes y Comportamiento: '>
  <SubSectionContent reference='Personajes y Comportamiento: '>
    <HeaderContent title='6. Personajes y Comportamiento: ' id='6.'>
      Los jugadores deben actuar de manera consistente con el entorno del juego. No se 
      permite la creación de personajes que promuevan el odio, la violencia, o que 
      interfieran de forma significativa con la experiencia de otros jugadores.{" "}
    </HeaderContent>
  </SubSectionContent>
</SectionContent>
<SectionContent reference='7. Interpretación del Rol: '>
  <SubSectionContent reference='Interpretación del Rol: '>
    <HeaderContent title='7. Interpretación del Rol: ' id='7.'>
      Mantén la coherencia con el rol en todo momento. Actúa y responde de acuerdo con 
      las circunstancias y características del personaje que estás interpretando. Esto 
      incluye su acento, historia, origen y personalidad, asegurando así una 
      representación auténtica y realista.{" "}
    </HeaderContent>
  </SubSectionContent>
</SectionContent>
<SectionContent reference='Uso de moduladores de voz'>
  <SubSectionContent reference='Uso de moduladores de voz'>
    <HeaderContent title='Uso de moduladores de voz' id='mod'>
    En nuestro servidor está permitido y respaldado el uso de moduladores de voz para aquellas personas que decidan rolear un personaje de sexo opuesto.
    No se tolerará bajo ninguna circunstancia el acoso, burla o discriminación hacia los jugadores que hagan uso de estas herramientas. Cualquier actitud negativa de este tipo será considerada una falta grave y conllevará sanciones estrictas.
  <br />
  <br />
    Queremos dejar en claro que en esta comunidad no se promueve la homofobia, la transfobia ni ningún tipo de discriminación. El respeto mutuo es un pilar fundamental para el correcto desarrollo del rol y la sana convivencia entre todos los jugadores. .{" "}
    </HeaderContent>
  </SubSectionContent>
</SectionContent>
<SectionContent reference='8. Protección de Información Personal: '>
  <SubSectionContent reference='Protección de Información Personal: '>
    <HeaderContent title='8. Protección de Información Personal: ' id='8.'>
      Está prohibido divulgar la información personal de otros jugadores sin su 
      autorización explícita. Esto incluye nombres reales, direcciones, números de 
      teléfono, correos electrónicos u otros datos personales identificables. {" "}
    </HeaderContent>
  </SubSectionContent>
</SectionContent>
<SectionContent reference='9. Cumplimiento de las Reglas: '>
  <SubSectionContent reference='Cumplimiento de las Reglas: '>
    <HeaderContent title='9. Cumplimiento de las Reglas: ' id='9.'>
      Todos los jugadores deben adherirse a estas normas en todo momento. El 
      incumplimiento puede resultar en sanciones que van desde advertencias hasta la 
      expulsión permanente del servidor, dependiendo de la gravedad de la falta y del 
      historial del jugador. {" "}
    </HeaderContent>
  </SubSectionContent>
</SectionContent>
<SectionContent reference='10. Eventos del Servidor: '>
  <SubSectionContent reference='Eventos del Servidor: '>
    <HeaderContent title='10. Eventos del Servidor: ' id='10.'>
      Participar en eventos organizados por los administradores del servidor, tales como 
      misiones especiales, incursiones coordinadas y desafíos únicos es todo voluntario. {" "}
    </HeaderContent>
  </SubSectionContent>
</SectionContent>
<SectionContent reference='11. Normas para Administradores:'>
  <SubSectionContent reference='Normas para Administradores:'>
    <HeaderContent title='11. Normas para Administradores:' id='11.'>
      Los administradores deben ser imparciales y no favorecer a ningún jugador o grupo.{" "}
    </HeaderContent>
  </SubSectionContent>
</SectionContent>
<SectionContent reference='12. Resolución de Disputas: '>
  <SubSectionContent reference='Resolución de Disputas: '>
    <HeaderContent title='12. Resolución de Disputas: ' id='12.'>
      Los administradores tienen la autoridad para resolver conflictos y tomar decisiones 
      en favor del bienestar del servidor. {" "}
    </HeaderContent>
  </SubSectionContent>
</SectionContent>
<SectionContent reference='13. Actualizaciones y Mantenimiento: '>
  <SubSectionContent reference='Actualizaciones y Mantenimiento: '>
    <HeaderContent title='13. Actualizaciones y Mantenimiento: ' id='13.'>
      Mantén el servidor actualizado y realiza el mantenimiento necesario para garantizar 
      una experiencia de juego sin problemas. {" "}
    </HeaderContent>
  </SubSectionContent>
</SectionContent>
<SectionContent reference='14. Prohibición de Abandonar el Juego mediante F8 + Quit: '>
  <SubSectionContent reference='Prohibición de Abandonar el Juego mediante F8 + Quit: '>
    <HeaderContent title='14. Prohibición de Abandonar el Juego mediante F8 + Quit: ' id='14.'>
    Está estrictamente prohibido abandonar el juego utilizando el comando F8 + Quit 
    durante cualquier situación de rol activa, como enfrentamientos, persecuciones, 
    interacciones sociales importantes o cualquier otra circunstancia que pueda afectar 
    la experiencia de otros jugadores. {" "}
    </HeaderContent>
  </SubSectionContent>
</SectionContent>
<SectionContent reference='15. Sanciones: '>
  <SubSectionContent reference='Sanciones: '>
    <HeaderContent title='15. Sanciones: ' id='15.'>
    El incumplimiento de esta norma será sancionado según la gravedad, pudiendo 
    incluir advertencias, suspensión temporal de la cuenta o expulsión definitiva de la 
    comunidad. {" "}
    </HeaderContent>
  </SubSectionContent>
</SectionContent>
<SectionContent reference='16. Prohibición de Ataques a Propiedades sin Rol Previo:'>
  <SubSectionContent reference='Prohibición de Ataques a Propiedades sin Rol Previo:'>
    <HeaderContent title='16. Prohibición de Ataques a Propiedades sin Rol Previo:' id='16.'>
    No está permitido atacar casas o comunidades sin haber desarrollado previamente 
    un rol significativo que justifique dicho ataque. {" "}
    </HeaderContent>
  </SubSectionContent>
</SectionContent>
<SectionContent reference='17. Límite de Velocidad en Ciudad y Actos Delictuales'>
  <SubSectionContent reference='Límite de Velocidad en Ciudad y Actos Delictuales'>
    <HeaderContent title='17. Límite de Velocidad en Ciudad y Actos Delictuales' id='17.'>
    Velocidades Permitidas
    <br />
    <br />
    Zona urbana central (rectángulo azul en el mapa): Máximo 100 km/h (incluye 
    comisaría, hospital, municipalidad y talleres mecánicos). 
    Resto de la ciudad: Máximo 150 km/h. 
    Carreteras principales (marcadas en amarillo en el mapa): Máximo 250 km/h. 
    Zonas urbanas en el norte (Paleto y Sandy Shores): Máximo 150 km/h. {" "}
    </HeaderContent>
  </SubSectionContent>
</SectionContent>
<SectionContent reference='Control y Fiscalización '>
  <SubSectionContent reference='Control y Fiscalización '>
    <HeaderContent title='Control y Fiscalización ' id='18.'>
    La policía podrá fiscalizar vehículos que excedan estos límites y utilizar radares 
    para identificar vehículos. 
    Si un vehículo es detectado superando el límite por control, radar o helicóptero, se 
    podrá iniciar una búsqueda por un máximo de 15 minutos. {" "}
    </HeaderContent>
  </SubSectionContent>
</SectionContent>
<SectionContent reference='Reglas en Actos Delictuales '>
  <SubSectionContent reference='Reglas en Actos Delictuales '>
    <HeaderContent title='Reglas en Actos Delictuales ' id='19.'>
    La velocidad máxima permitida en situaciones delictivas es de 250 km/h, con un 
    margen de error de hasta 10 km/h debido a variaciones por saltos. 
    Si un vehículo supera esta velocidad, la policía podrá desplegar un interceptor. 
    En caso de utilizar un vehículo prohibido para actos delictivos o huir de un 
    control de tránsito, se aplicará sanción administrativa adicional. {" "}
    </HeaderContent>
    </SubSectionContent>
  </SectionContent>
  <Image src={"/mapa.avif"} alt={"Mapa"} width={900} height={900}></Image>
  <SectionContent reference='En situaciones de tiroteo '>
  <SubSectionContent reference='En situaciones de tiroteo'>
    <HeaderContent title='En situaciones de tiroteo, queda estrictamente 
    prohibido realizar las dos acciones mostradas en 
    las imágenes adjuntas:' id='20.'>
    <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Concepto'>
        <span>Disparar mientras se está apoyado en una pared sin asomar.</span>
    </h2>
    <Image src={"/disparar1.png"} alt={"Mapa"} width={900} height={900}></Image>
    <br />
    <h1 className="font-bold">Se debe sacar el cuerpo completamente al disparar</h1>
    <br />
    <br />
    <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Concepto'>
        <span>Disparar estando agachado.</span>
    </h2> 
    <Image src={"/disparar2.png"} alt={"Mapa"} width={900} height={900}></Image>
    <br />
    <h1 className="font-bold">Debe estar de pie completamente al disparar</h1>
    <br />
    <br />
    Estas acciones pueden afectar la hitbox de los 
    personajes en determinadas circunstancias, lo que 
    genera una ventaja injusta al reducir el impacto de 
    las balas y provocar el tanqueo de disparos. 
    </HeaderContent>
    </SubSectionContent>
  </SectionContent>
</div>
}

export default NormativasGenerales
