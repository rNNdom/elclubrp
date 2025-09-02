import { ListItemContent, Content, HeaderContent, SubSectionContent, ContentFooter, SectionContent } from "@/components/sections"
import React from "react"

export default function NormativaLSPD() {
  return (
    <div className='prose prose-lg max-w-none'>
      {/* Content sections */}
      <div>
        <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Concepto'>
          <span className='font-bold'>🚨 Normativa General Policial</span>
        </h2>
        <div className='bg-blue-50 border-l-4 border-blue-400 p-4 mb-6'>
          <p className='text-gray-800 leading-relaxed'>Sección donde podrás encontrar la NORMATIVA POLICIAL.</p>
          <p className='text-gray-800 leading-relaxed mt-2'>
            Esta normativa es de conocimiento público para toda la ciudadanía. No obstante, la institución policial puede contar con un reglamento interno de comportamiento, siempre que este no afecte
            su relación con la ciudad. Dicho reglamento interno pueden incluir normas sobre vestimenta o protocolos de actuación dentro de la institución.
          </p>
        </div>
      </div>

      <div className='grid gap-4'>
        <SectionContent reference='Estructura Jerárquica LSPD'>
          <SubSectionContent reference='Estructura Jerárquica LSPD'>
            <HeaderContent title='Estructura Jerárquica LSPD' id='1'>
              La estructura jerárquica del LSPD define los rangos, responsabilidades y funciones de cada miembro del cuerpo policial.
            </HeaderContent>
            <Content title='Rangos y funciones:' id='1.1' spaced>
              <ListItemContent
                items={[
                  "Cadete: En formación, debe acatar órdenes y aprender sobre el proceder.",
                  "Oficial I, II, III: Categoría B2. Oficiales de patrullaje, control de tránsito, detenciones y respuestas a emergencias",
                  "Detective (CID): Categoría B2. Oficiales de patrullaje, control de tránsito, detenciones y respuestas a emergencias",
                  "Sargento I, II: Supervisión de oficiales (B2) coordinación de operativos y manejo del personal.",
                  "Teniente I, II: Organización de patrullas, informes de operativos, y liderazgo en intervenciones.",
                  "Capitán I: Administración interna, planificación estratégica. Y dirección de la comisaría.",
                  "Capitán II: (Máximo rango dentro de comisaría): Jefe de la comisaría, responsable de la gestión operativa y administrativa. Representación institucional y enlace con autoridades superiores.",
                  "Comandante: (Máximo rango dentro de comisaría): Jefe de la comisaría, responsable de la gestión operativa y administrativa. Representación institucional y enlace con autoridades superiores.",
                  "Comisionado: (Máximo rango dentro de comisaría): Jefe de la comisaría, responsable de la gestión operativa y administrativa. Representación institucional y enlace con autoridades superiores."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Uso de Vehículos Policiales'>
          <SubSectionContent reference='Vehículos'>
            <HeaderContent title='Uso de Vehículos Policiales' id='2'>
              El uso de vehículos por parte de la LSPD y la LSSD debe seguir un criterio lógico y adecuado a la situación.
            </HeaderContent>
            <Content title='Vehículos Permitidos' id='2.1' spaced>
              <ListItemContent items={["LSPD: Patrullas estándar y SUV.", "Motos: Su uso está permitido dentro de la normalidad."]} />
            </Content>
            <Content title='Restricciones y Condiciones de Uso' id='2.2' spaced>
              <ListItemContent
                items={[
                  "Interceptor: Sólo podrá ser utilizado en persecuciones originadas por carreras ilegales o cuando el vehículo perseguido supere significativamente la velocidad de las patrullas.",
                  "Helicóptero: Destinado a patrullajes aéreos, podrá involucrarse en robos a partir de bancos Fleeca en adelante. En ventas de drogas, solo podrá identificar el vehículo, sin participar en la persecución. En tiroteos entre organizaciones, podrá vigilar desde el aire, respetando la normativa sobre intervención policial en estos casos.",
                  "Vehículos blindados u otros especiales: Sólo podrán ser utilizados en situaciones específicas y sin afectar el fairplay del rol."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Normativa General'>
          <SubSectionContent reference='Normativa General'>
            <HeaderContent title='Normativa General' id='3'>
              Toda intervención policial que implique interacción con civiles, ya sea en procedimientos de detención o arresto, debe realizarse con vehículos que lleven los logos oficiales de la
              institución correspondiente.
            </HeaderContent>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Corrupción Policial'>
          <SubSectionContent reference='Corrupción Policial'>
            <HeaderContent title='Corrupción Policial' id='4'>
              La corrupción está permitida únicamente a partir del rango de Teniente (rango 6 en adelante) y requiere autorización de la administración. Para ello, es obligatorio abrir un ticket y
              solicitar la aprobación, presentando un planteamiento de rol sólido que justifique este tipo de interpretación.
            </HeaderContent>
            <Content title='Profesionalismo y Conducta' id='5' spaced>
              <ListItemContent
                items={[
                  "Actitud profesional: Todos los oficiales deben actuar de manera profesional en todo momento. Esto implica hablar con claridad, mantener la calma en situaciones tensas y comportarse de acuerdo con el rol de un oficial de policía.",
                  "Respeto mutuo: Tratar a todos los jugadores con respeto, tanto a aquellos en el rol de ciudadanos como a los de criminales, sin importar la situación.",
                  "Evitar conflictos innecesarios: No crear ni incitar conflictos que no tengan base en el rol. El objetivo es contribuir a la experiencia de roleplay de todos los participantes.",
                  "Autocontrol emocional: Los oficiales no deben actuar por impulso ni por emociones personales. La toma de decisiones debe estar siempre basada en la situación y no en resentimientos o prejuicios.",
                  "Compañerismo: Un policía nunca deberá abandonar a un compañero independiente de la situación en la que se encuentren y siempre deberá valorar su vida y la de sus compañeros.",
                  "No Acoso: LEY sobre prevención, investigación y sanción del acoso laboral, sexual o de violencia en el trabajo."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Respeto a la Autoridad'>
          <SubSectionContent reference='Respeto a la Autoridad'>
            <HeaderContent title='Respeto a la Autoridad' id='6'>
              La jerarquía y el respeto a superiores son fundamentales para mantener el orden y la disciplina dentro del cuerpo policial.
            </HeaderContent>
            <Content title='Principios fundamentales:' id='6.1' spaced>
              <ListItemContent
                items={[
                  "Jerarquía y respeto a superiores: Los oficiales deben respetar la jerarquía dentro del cuerpo policial. En caso de duda sobre la actuación, el oficial debe seguir las órdenes de su superior.",
                  "Acatar las directrices: Los oficiales deben seguir las normativas y procedimientos establecidos por la administración del servidor y por sus superiores jerárquicos."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Relación con la Comunidad'>
          <SubSectionContent reference='Relación con la Comunidad'>
            <HeaderContent title='Relación con la Comunidad' id='7'>
              La policía debe priorizar una relación positiva y de confianza con la comunidad, asegurando un trato respetuoso y equitativo hacia todos los ciudadanos.
            </HeaderContent>
            <Content title='Directrices de comportamiento:' id='7.1' spaced>
              <ListItemContent
                items={[
                  "No se debe asumir que una persona es delincuente únicamente por su vestimenta, evitando prejuicios basados en la apariencia.",
                  "El uso de máscaras o equipo táctico en situaciones no justificadas puede ser considerado sospechoso y amerita una intervención preventiva dentro del marco legal.",
                  "Los oficiales deben recordar que su principal función es servir y proteger, manteniendo una comunicación cordial y cercana con la comunidad, fomentando el respeto mutuo y actuando con profesionalismo en todo momento."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Requisitos generales'>
          <SubSectionContent reference='Requisitos generales'>
            <HeaderContent title='Requisitos generales' id='8'>
              Los requisitos generales establecen las bases fundamentales que todo miembro del LSPD debe cumplir para mantener la integridad y profesionalismo de la institución.
            </HeaderContent>
            <Content title='Obligaciones básicas:' id='8.1' spaced>
              <ListItemContent
                items={[
                  "Normas: Se deberá respetar la normativa del servidor y del rol policial en todo momento. Romper cualquiera de estas resultara en sanción acorde.",
                  "Mantener seriedad: Dentro del rol como policía sé esta obligado a mantener la seriedad en todo momento evitando actitudes Anti-RP.",
                  "Uniforme y equipo: El uso del uniforme y equipo están sujetos al rango y contexto en el que se encuentre.",
                  "Código penal: Es requisito tener conocimiento mínimo sobre el código penal y el reglamento de transito establecido por la normativa general del servidor.",
                  "Corrupción: Queda estrictamente prohibida la corrupción dentro de la facción para rangos inferiores a Teniente I. Sin un rol adecuado y previamente aprobado por Administración."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Normativa de Ingreso y Ascensos - LSPD'>
          <SubSectionContent reference='Normativa de Ingreso y Ascensos - LSPD'>
            <HeaderContent title='Normativa de Ingreso y Ascensos - LSPD' id='9'>
              El proceso de ingreso y ascenso dentro del LSPD está regulado por normativas específicas que garantizan la calidad y profesionalismo de los miembros de la institución.
            </HeaderContent>
            <Content title='Ingreso' id='9.1' spaced>
              <ListItemContent
                items={[
                  "Todo aspirante ingresa al LSPD como Cadete, previa entrevista y evaluación inicial.",
                  "Durante un período de 2 semanas, el Cadete será asignado a un Instructor, quien evaluará sus capacidades, conocimientos y conducta."
                ]}
              />
            </Content>
            <ContentFooter>En caso de no aprobar: Se otorgará 1 semana adicional de evaluación. Si no cumple los estándares, será dado de baja.</ContentFooter>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Escalafón y Ascensos'>
          <SubSectionContent reference='Escalafón y Ascensos'>
            <HeaderContent title='Escalafón y Ascensos' id='10'>
              El escalafón define la progresión profesional dentro del LSPD, con requisitos específicos para cada nivel de ascenso.
            </HeaderContent>
            <Content title='Cadete → Oficial I' id='10.1' spaced>
              <ListItemContent items={["Requisito: Finalizar el período de instrucción y aprobar la evaluación.", "Funciones: patrullaje, tránsito y apoyo en operativos básicos."]} />
            </Content>
            <Content title='Oficial I → Oficial II' id='10.2' spaced>
              <ListItemContent
                items={["Requisitos: demostrar constancia, buena conducta y conocimientos adecuados del protocolo policial.", "Funciones: mayor autonomía en patrullajes y operativos."]}
              />
            </Content>
            <Content title='Oficial II → Oficial III' id='10.3' spaced>
              <ListItemContent
                items={[
                  "Requisitos: Aprobar la evaluación de Instructor. Pertenecer activamente a una división (ej. Tránsito, SWAT, Investigaciones, etc.).",
                  "Funciones: pieza clave de la estructura, con posibilidad de acceder a cargos de responsabilidad."
                ]}
              />
            </Content>
            <Content title='Instructor' id='10.4' spaced>
              <ListItemContent items={["Acceso: tras aprobar el examen de Instructor.", "Funciones: Formar cadetes. Evaluarlos. Guiarlos en su proceso."]} />
            </Content>
            <ContentFooter>Desde este rango se puede optar a divisiones especializadas y preparar el camino hacia Detective.</ContentFooter>
            <Content title='Detective' id='10.5' spaced>
              <ListItemContent items={["Acceso: desde Oficial II o III que cumpla los requisitos.", "Funciones: investigaciones, crimen organizado y casos especiales."]} />
            </Content>
            <Content title='Sargento I → Sargento II' id='10.6' spaced>
              <ListItemContent
                items={[
                  "Requisitos: Aprobar examen de ascenso autorizado por la Jefatura (mínimo Capitán II). Para Sargento II: aprobar el examen de Formador.",
                  "Funciones: supervisar oficiales, organizar patrullas y asistir a Tenientes en operativos."
                ]}
              />
            </Content>
            <Content title='Teniente I → Teniente II' id='10.7' spaced>
              <ListItemContent
                items={[
                  "Requisitos: Aprobar examen de liderazgo y estrategia. Para Teniente II: postular y ser aceptado en la jefatura de una división.",
                  "Funciones: organización avanzada de operativos, dirección de equipos y coordinación de divisiones."
                ]}
              />
            </Content>
            <Content title='Capitán I → Capitán II' id='10.8' spaced>
              <ListItemContent
                items={[
                  "Capitán I: encargado directo de una división, supervisa a Tenientes y Sargentos.",
                  "Capitán II: coordinador general entre divisiones, con facultad de autorizar ascensos hasta Sargento I."
                ]}
              />
            </Content>
            <Content title='Comandante' id='10.9' spaced>
              <ListItemContent
                items={[
                  "Funciones: Auditar divisiones Revisar y aprobar ascensos a cargos altos Mantener la disciplina institucional.",
                  "Requisitos: Haber servido como Capitán II con historial impecable. Aprobar la evaluación de liderazgo estratégico. Contar con aprobación de la Jefatura General."
                ]}
              />
            </Content>
            <Content title='Comisionado (Máxima Autoridad del LSPD)' id='10.10' spaced>
              <ListItemContent
                items={[
                  "Funciones: Representar oficialmente a la institución frente al gobierno y otras agencias. Definir políticas generales, reglamentos internos y lineamientos estratégicos. Supervisar y coordinar con Comandantes y Capitanes II. No mantiene trato directo con cadetes ni oficiales de bajo rango; su rol es administrativo, estratégico y de supervisión.",
                  "Requisitos: Haber pasado por toda la cadena de mando, al menos hasta Comandante. Poseer una trayectoria ejemplar dentro del cuerpo policial. Ser nombrado por decisión de la Jefatura General y aprobado por el Gobierno del Estado."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Artículos Importantes'>
          <SubSectionContent reference='Artículos Importantes'>
            <HeaderContent title='Artículos Importantes' id='11'>
              Los artículos importantes establecen las reglas fundamentales que rigen el comportamiento y procedimientos de todos los miembros del LSPD.
            </HeaderContent>
            <Content title='Artículos fundamentales:' id='11.1' spaced>
              <ListItemContent
                items={[
                  "Artículo 1: En caso de robo, los policías deberán estar abiertos a la negociación según las leyes de la ciudad y las condiciones planteadas.",
                  "Artículo 2: Los policías no pueden usar vehículos civiles o de otros servicios públicos mientras están en servicio.",
                  "Artículo 3: El arma de servicio solo podrá usarse si está en peligro la vida del oficial, un compañero o un civil.",
                  "Artículo 4: Los policías que descuiden los vehículos oficiales serán degradados o desvinculados.",
                  "Artículo 5: Los oficiales solo podrán entrar o salir de servicio en la comisaría y deberán notificarlo adecuadamente (menú F7 con código radial 10-10).",
                  "Artículo 6: Si un oficial es abatido en un rol, deberá interpretar sus heridas de manera realista. Un compañero o EMS podrá recordarle las circunstancias en las que quedó inconsciente. Una vez dado de alta, el oficial podrá solicitar transporte o esperar asistencia.",
                  "Artículo 7: Todo material confiscado en un procedimiento debe ser registrado en la denuncia correspondiente.",
                  "Artículo 8: Los vehículos de persecución solo podrán usarse con autorización de un alto mando. El uso indebido será motivo de sanción.",
                  "Artículo 9: Todo policía debe estar en la radio 'esperando asignación' antes de patrullar. Si no hay alto mando disponible, se deberá patrullar en el canal correspondiente hasta recibir una asignación."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>
      </div>
    </div>
  )
}
