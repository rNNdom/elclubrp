import { SubSectionContent, HeaderContent, ListItemContent, Content, SectionContent, ContentFooter } from "@/components/sections"
import React from "react"

export default function OrganizacionesDelictivas() {
  return (
    <div className='prose prose-lg max-w-none'>
      {/* Content sections */}
      <div>
        <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Concepto'>
          🏯 <span>Organizaciones Delictuales</span>
        </h2>
        <div className='bg-blue-50 border-l-4 border-blue-400 p-4 mb-6'>
          <p className='text-gray-800 leading-relaxed'>
            Se entiende por Organización Delictiva (OD) a todo grupo estructurado de personas que, de forma estable y con una jerarquía interna definida, se asocia con el objetivo de llevar a cabo
            actividades ilícitas tanto dentro como fuera de la ciudad.
          </p>
          <p className='text-gray-800 leading-relaxed mt-2'>
            Cada organización delictiva deberá elegir su Rol Delictivo Interno (RDI), el cual no estará condicionado por la cantidad de integrantes ni por el nivel jerárquico, sino exclusivamente por
            la naturaleza del rol que decidan adoptar. Por ejemplo, podrá existir un cártel compuesto únicamente por 7 integrantes, al igual que una banda conformada por 25 miembros, siempre y cuando
            actúen de manera coherente a su rol y mantengan la coherencia en su desarrollo dentro del entorno de rol.
          </p>
          <p className='text-gray-800 leading-relaxed mt-2'>
            Independientemente del RDI seleccionado, toda organización delictiva iniciará en el Nivel 1 dentro de la jerarquía de la ciudad. El progreso en niveles dependerá del impacto, la constancia
            y la calidad de su desarrollo dentro del rol.
          </p>
          <p className='text-gray-800 leading-relaxed mt-2'>
            A cada organización se le asignará una sede (HQ), la cual podrá ser seleccionada por la misma organización o, en caso de no contar con una propuesta adecuada, será facilitada directamente
            por el STAFF.
          </p>
          <p className='text-gray-800 leading-relaxed mt-2'>
            Además, con el inicio de la organización se entregará un paquete inicial, compuesto por armamento básico y vehículos, lo que permitirá a la organización comenzar sus actividades sin
            desbalancear el entorno de rol y asegurando una experiencia equitativa para todos los jugadores.
          </p>
        </div>
      </div>

      <div className='grid gap-4'>
        <SectionContent reference='Niveles de las OD'>
          <SubSectionContent reference='Niveles de las OD'>
            <HeaderContent title='Niveles de las OD' id='2.'>
              Toda organización delictiva comenzará en el Nivel 1 dentro de la jerarquía de la ciudad, y para ascender en dicho escalafón será necesario acumular puntos a través de la realización de
              diversas actividades ilícitas, como la venta de estupefacientes, robos, secuestros, misiones semanales y otras acciones delictivas. Una vez alcanzada la cantidad de puntos requerida, la
              organización avanzará progresivamente al Nivel 2 y posteriormente al Nivel 3, siendo este último el nivel máximo permitido para cualquier organización dentro de la ciudad.
            </HeaderContent>
            <ContentFooter>
              Cabe resaltar que este sistema de puntos no solo regula el crecimiento jerárquico de las organizaciones, sino que además ofrece la posibilidad de obtener recompensas adicionales, ya que
              los puntos acumulados podrán canjearse tanto por beneficios IC (In Character), tales como planos de armamento o puntos de farmeo y proceso, como por beneficios OOC (Out of Character),
              entre los que se incluye la eliminación de strikes, entre otros.
            </ContentFooter>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Organización Delictiva Administrativa'>
          <SubSectionContent reference='Organización Delictiva Administrativa'>
            <HeaderContent title='Organización Delictiva Administrativa' id='3.'>
              La OD Administrativa es considerada una entidad indispensable dentro del ámbito IC. Por lo tanto, queda estrictamente prohibida cualquier acción de rol que comprometa su integridad,
              identidad, o que implique la filtración/venta de información sensible.
            </HeaderContent>
            <Content title='Funciones y responsabilidades de la OD Administrativa' id='3.1' spaced>
              <ListItemContent
                title='Autoridad exclusiva'
                description='La OD Administrativa es la única organización autorizada para asignar misiones delictivas que contemplen excepciones a la normativa general delictiva.'
              />
              <ListItemContent
                title='Entidad de mayor jerarquía'
                description='Constituye la entidad delictiva de mayor jerarquía en la ciudad y posee la exclusividad en la venta de cargamentos de armas a otras organizaciones.'
              />
              <ListItemContent
                title='Cumplimiento obligatorio'
                description='Las organizaciones deberán acatar las órdenes emitidas por la OD Administrativa. En caso de desobediencia, se aplicarán sanciones IC proporcionales a la gravedad de la infracción.'
              />
              <ListItemContent
                title='Requisito de Whitelist'
                description='Para formar parte de una OD —desde el jefe hasta el miembro de menor rango— es obligatorio contar con la Whitelist Oral aprobada.'
              />
            </Content>
            <ContentFooter>
              Por otro lado, cualquier incumplimiento de las normas de rol en el marco de un rol delictivo será sancionado tanto al individuo infractor como a la organización a la que pertenezca.
            </ContentFooter>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Alianzas entre Organizaciones Delictivas'>
          <SubSectionContent reference='Alianzas entre Organizaciones Delictivas'>
            <HeaderContent title='Alianzas entre Organizaciones Delictivas' id='4.'>
              Las alianzas entre Organizaciones Delictivas (OD) están permitidas dentro de la ciudad, pero para que tengan validez oficial será obligatorio informar a la OD Administrativa acerca del
              pacto establecido. Una vez corroborada la información y confirmada su autenticidad, el acuerdo será reconocido formalmente como una alianza legítima dentro del entorno de rol.
            </HeaderContent>
            <Content title='Actividades permitidas en alianzas' id='4.1' spaced>
              <ListItemContent title='Actividades conjuntas' description='Farmeos y procesos coordinados con un máximo de seis integrantes combinados entre ambas organizaciones.' />
              <ListItemContent title='Defensa territorial' description='Defensa activa de territorios aliados y secuestros organizados de manera conjunta.' />
              <ListItemContent title='Acuerdos estratégicos' description='Pactos de no agresión, acuerdos comerciales estratégicos y allanamientos cooperativos.' />
            </Content>
            <ContentFooter>
              Dicho pacto podrá disolverse en cualquier momento si así lo decide alguna de las partes involucradas. La OD Administrativa no asumirá responsabilidad alguna respecto a la ruptura de
              alianzas ni sobre los conflictos que puedan derivar de ellas. Sin embargo, se deja en claro que los robos realizados en conjunto están estrictamente prohibidos, con el fin de evitar
              desbalances en el servidor y garantizar que cada organización mantenga su propia identidad criminal.
            </ContentFooter>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Normativa sobre Infiltración y Suplantación de Organizaciones Delictivas'>
          <SubSectionContent reference='Normativa sobre Infiltración y Suplantación de Organizaciones Delictivas'>
            <HeaderContent title='Normativa sobre Infiltración y Suplantación de Organizaciones Delictivas' id='5.'>
              Con el objetivo de preservar la coherencia del rol, fomentar un desarrollo equilibrado de las tramas criminales y evitar prácticas abusivas que puedan desvirtuar la experiencia dentro
              del servidor, se establecen disposiciones claras respecto a la infiltración y suplantación de organizaciones delictivas.
            </HeaderContent>
            <Content title='Definiciones' id='5.1' spaced>
              <ListItemContent
                title='Infiltración'
                description='La acción de un individuo o grupo que, bajo una identidad encubierta, busca obtener información interna de una organización para luego utilizarla en beneficio propio o de terceros.'
              />
              <ListItemContent
                title='Suplantación'
                description='La creación de identidades falsas o la utilización indebida del nombre, símbolos o reputación de una organización con el fin de engañar a otros jugadores o generar ventajas ilícitas dentro del rol.'
              />
            </Content>
            <ContentFooter>
              Ambas prácticas estarán estrictamente reguladas, de modo que solo podrán llevarse a cabo bajo autorización explícita de la OD Administrativa. En caso de realizarse sin autorización, la
              infiltración o suplantación será considerada una falta grave y derivará en sanciones severas tanto para el jugador infractor como para la organización que se vea beneficiada de forma
              indebida.
            </ContentFooter>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Infiltración en una Organización Delictiva'>
          <SubSectionContent reference='Infiltración en una Organización Delictiva'>
            <HeaderContent title='Infiltración en una Organización Delictiva' id='6.'>
              Un miembro de una organización podrá llevar a cabo un rol de infiltración en otra organización siempre que este se desarrolle de manera seria, coherente y con una progresión narrativa
              clara que justifique cada acción.
            </HeaderContent>
            <Content title='Requisitos para la infiltración' id='6.1' spaced>
              <ListItemContent
                title='Registro obligatorio'
                description='La infiltración deberá registrarse obligatoriamente en la bitácora de la organización infiltrada, creando un registro independiente por cada día de actividad.'
              />
              <ListItemContent title='Formato de bitácora' description='"BITÁCORA DE INFILTRADO - DÍA 1", "DÍA 2", y así consecutivamente hasta un máximo de siete días.' />
              <ListItemContent
                title='Detalles requeridos'
                description='En cada entrada será necesario detallar las acciones realizadas por el infiltrado, la información obtenida, las interacciones relevantes y cualquier hecho significativo.'
              />
            </Content>
            <ContentFooter>
              El tiempo máximo de infiltración será de siete días. La información obtenida deberá provenir exclusivamente de acciones de rol, quedando terminantemente prohibido el uso de metagaming,
              datos externos o terceros ajenos al desarrollo narrativo.
            </ContentFooter>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Suplantación de una Organización Delictiva'>
          <SubSectionContent reference='Suplantación de una Organización Delictiva'>
            <HeaderContent title='Suplantación de una Organización Delictiva' id='7.'>
              Si una organización intenta hacerse pasar por otra con el objetivo de perjudicar o confundir a terceros, será obligatorio documentar previamente la preparación en su propia bitácora.
            </HeaderContent>
            <Content title='Elementos que pueden replicarse' id='7.1' spaced>
              <ListItemContent title='Vehículos habituales' description='Los vehículos que utilizan de manera habitual.' />
              <ListItemContent title='Vestimentas características' description='Las vestimentas características de la organización.' />
              <ListItemContent title='Formas de comunicación' description='Las formas de comunicación reconocibles de la organización.' />
            </Content>
            <ContentFooter>
              Únicamente podrán replicarse estos tres aspectos, quedando prohibida la invención de características que no tengan respaldo en la observación y el registro previo. Este tipo de rol solo
              podrá utilizarse en contextos concretos, tales como secuestros, interrogatorios o engaños puntuales.
            </ContentFooter>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Consideraciones Generales'>
          <SubSectionContent reference='Consideraciones Generales'>
            <HeaderContent title='Consideraciones Generales' id='8.'>
              En todo momento, tanto la infiltración como la suplantación deberán desarrollarse de manera realista, coherente y narrativamente justificada, evitando acciones carentes de lógica o que
              persigan únicamente ventajas mecánicas.
            </HeaderContent>
            <Content title='Supervisión y control' id='8.1' spaced>
              <ListItemContent
                title='Revisión de bitácoras'
                description='La Dirección del servidor podrá revisar las bitácoras en cualquier momento para verificar que los roles se hayan llevado a cabo conforme a lo establecido.'
              />
              <ListItemContent
                title='Sanciones por incumplimiento'
                description='El incumplimiento de esta normativa podrá implicar la anulación del rol y la aplicación de sanciones a los responsables.'
              />
            </Content>
            <ContentFooter>
              Se recomienda a todas las organizaciones delictivas mantener una bitácora clara, ordenada y detallada de sus actividades, con el fin de asegurar la transparencia y la seriedad en el
              desarrollo de las tramas.
            </ContentFooter>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Normativa CK en Organizaciones Delictuales'>
          <SubSectionContent reference='Normativa CK en Organizaciones Delictuales'>
            <HeaderContent title='Normativa CK en Organizaciones Delictuales' id='9.'>
              <span className='font-bold'>
                El Character Kill (CK) dentro de organizaciones delictivas será considerado un recurso excepcional, definitivo y de carácter irreversible, cuyo uso deberá estar siempre debidamente
                justificado y contar con la aprobación previa de la administración.
              </span>
            </HeaderContent>
            <ContentFooter>
              El CK implica la muerte permanente de un personaje, lo que supone un cambio drástico en la narrativa y en las relaciones del entorno criminal, por lo que su autorización se maneja con el
              máximo nivel de seriedad.
            </ContentFooter>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Motivos Válidos IC'>
          <SubSectionContent reference='Motivos Válidos IC'>
            <HeaderContent title='Motivos Válidos IC' id='10.'>
              Un CK delictual únicamente podrá solicitarse cuando existan razones de peso dentro del rol, siempre debidamente documentadas y con coherencia narrativa. La administración analizará caso
              por caso, evaluando la proporcionalidad del motivo y su impacto en la historia.
            </HeaderContent>
            <Content title='Ejemplos de motivos aceptados:' id='10.1' spaced>
              <ListItemContent
                items={[
                  "Traición comprobada hacia la organización o actos de delación a la policía.",
                  "Ajustes de cuentas graves entre organizaciones delictivas.",
                  "Incumplimiento flagrante de pactos o acuerdos previamente establecidos.",
                  "Venganza justificada por actos pasados, siempre con pruebas claras.",
                  "Amenazas comprobadas que pongan en riesgo directo a la organización o a sus líderes.",
                  "Casos de infiltración descubierta que hayan causado daños significativos a la estructura criminal."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Procedimiento Administrativo'>
          <SubSectionContent reference='Procedimiento Administrativo'>
            <HeaderContent title='Procedimiento Administrativo' id='11.'>
              Para solicitar un CK será necesario abrir un ticket en el servidor, donde se presentará toda la información de manera ordenada, clara y verificable.
            </HeaderContent>
            <ContentFooter>
              La administración revisará el caso en profundidad y tendrá la potestad de aprobar, rechazar o solicitar pruebas adicionales antes de otorgar la autorización. Bajo ningún concepto se
              podrá ejecutar un CK sin aprobación expresa.
            </ContentFooter>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Requisitos para la Solicitud'>
          <SubSectionContent reference='Requisitos para la Solicitud'>
            <HeaderContent title='Requisitos para la Solicitud' id='12.'>
              El solicitante deberá presentar la mayor cantidad de información posible para respaldar la petición.
            </HeaderContent>
            <Content title='Requisitos indispensables:' id='12.1' spaced>
              <ListItemContent
                items={[
                  "Nombre y apellido IC del objetivo.",
                  "Fotografía legible de su DNI.",
                  "Identificación de 3 vehículos con fotografía de matrículas. En caso de no contar con ellos, deberá presentar un informe oficial del LSPD con los registros vehiculares.",
                  "Fotografía de la vivienda del objetivo o de cualquier propiedad registrada a su nombre.",
                  "Video o prueba audiovisual que respalde de forma clara las amenazas, traiciones o motivos del CK.",
                  "Número de teléfono IC del objetivo.",
                  "Nombre de la organización delictiva a la que pertenezca y ubicación de su HQ.",
                  "Información sobre personas cercanas al objetivo (aliados, familiares o contactos relevantes).",
                  "Historial de interacciones IC previas que den fundamento al conflicto.",
                  "Un breve plan de ejecución del CK, indicando cómo, dónde y bajo qué circunstancias se planea llevar a cabo."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Ejecución del CK'>
          <SubSectionContent reference='Ejecución del CK'>
            <HeaderContent title='Ejecución del CK' id='13.'>
              Una vez aprobado, el CK deberá realizarse dentro de la ciudad mediante un rol elaborado, coherente y narrativamente sólido. Se recomienda que la ejecución no sea improvisada, sino que
              cuente con preparación previa para garantizar un desarrollo inmersivo.
            </HeaderContent>
            <Content title='Procedimiento post-ejecución' id='13.1' spaced>
              <ListItemContent
                title='Anuncio obligatorio'
                description='Al finalizar, será obligatorio anunciar en el chat OOC la muerte definitiva del personaje, especificando la fecha y hora exacta.'
              />
              <ListItemContent
                title='Registro administrativo'
                description='Todo CK aprobado quedará registrado en la base administrativa para control interno, asegurando que no existan dudas o reclamos posteriores.'
              />
            </Content>
            <Content title='Consideraciones Adicionales' id='13.2' spaced>
              <ListItemContent
                items={[
                  "Un CK nunca podrá ser forzado ni ejecutado de manera aleatoria; siempre deberá existir un desarrollo previo y pruebas contundentes que lo justifiquen.",
                  "La administración podrá cancelar o revocar un CK en cualquier momento si detecta abuso, falta de pruebas, manipulación de rol o incumplimiento de la normativa.",
                  "En caso de que la persona que vaya a ser víctima de un CK solicite simultáneamente un CK contra quien lo inició, ambos serán aprobados, valorándose únicamente aquel que logre ejecutarse primero en el rol.",
                  "El CK deberá siempre aportar valor narrativo, generando consecuencias reales y cambios significativos dentro del entorno criminal de la ciudad.",
                  "La administración tendrá siempre la última palabra en la validación, ejecución y resolución de conflictos relacionados con CK simultáneos o mal ejecutados."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Tipos de calibre'>
          <SubSectionContent reference='Tipos de calibre'>
            <HeaderContent title='Tipos de calibre' id='14.'>
              Clasificación de armamento según su potencia y uso permitido en diferentes zonas de la ciudad.
            </HeaderContent>
            <Content title='Calibre Bajo:' id='14.1' spaced>
              <ListItemContent items={["Pistola 9mm", "Pistola SNS", "Pistola Combat", "Heavy Pistol", "Pistola Ceramic", "Glock 30"]} />
            </Content>
            <Content title='Calibre Medio:' id='14.2' spaced>
              <ListItemContent items={["Pistola APP", "Glock G18C", "TEC-9", "Micro SMG", "SMG", "Combat PDW"]} />
            </Content>
            <Content title='Calibre Alto:' id='14.3' spaced>
              <ListItemContent items={["Escopeta Bomba", "Escopeta Asalto", "Escopeta Combate", "Rifle De Asalto", "Carabina", "Rifle Compacto"]} />
            </Content>
            <ContentFooter>
              <span className='font-bold'>AVISO IMPORTANTE:</span> Se informa que el uso de calibre medio está permitido dentro de la ciudad, mientras que en la zona norte se puede hacer uso de
              calibre alto según las necesidades y regulaciones establecidas. Se recomienda actuar con responsabilidad y atender las normativas correspondientes.
            </ContentFooter>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Actos Ilegales de Civiles'>
          <SubSectionContent reference='Actos Ilegales de Civiles'>
            <HeaderContent title='Actos Ilegales de Civiles' id='15.'>
              Los civiles tendrán la posibilidad de participar en actividades delictivas aun sin pertenecer formalmente a una Organización Delictiva (OD), siempre que dichas acciones respeten las
              siguientes condiciones y limitaciones, con el fin de mantener el equilibrio del rol y evitar abusos en la narrativa criminal.
            </HeaderContent>
            <Content title='Cantidad de participantes' id='15.1' spaced>
              <ListItemContent
                items={[
                  "El número máximo de civiles que podrán intervenir en un mismo delito será de 4 personas.",
                  "En caso de superar este límite, la actividad será considerada ilegal a nivel normativo y dará lugar a sanciones administrativas.",
                  "Se recomienda además que los participantes mantengan coherencia en su relación IC, evitando agrupaciones sin contexto narrativo."
                ]}
              />
            </Content>
            <Content title='Tipo de delitos permitidos' id='15.2' spaced>
              <ListItemContent
                items={[
                  "Los civiles únicamente podrán ejecutar robos de baja prioridad, tales como: asaltos menores, hurtos en negocios pequeños o atracos improvisados en la vía pública",
                  "Se prohíbe terminantemente que los civiles: intenten organizar o participar en delitos de alto calibre como asaltos a bancos, joyerías, cargamentos o secuestros de alto perfil, ya que estos corresponden exclusivamente a organizaciones delictivas consolidadas."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Zonas rojas y naranjas para civiles'>
          <SubSectionContent reference='Zonas rojas y naranjas para civiles'>
            <HeaderContent title='Zonas rojas y naranjas para civiles' id='16.'>
              Regulaciones específicas para actividades de farmeo y uso de armamento en zonas designadas.
            </HeaderContent>
            <Content title='Actividades permitidas:' id='16.1' spaced>
              <ListItemContent
                items={[
                  "Los civiles tendrán permitido realizar actividades de farmeo dentro de las zonas designadas, respetando siempre la limitación de máximo 4 integrantes en conjunto.",
                  "El armamento autorizado para civiles será únicamente de calibre bajo o medio: (ejemplo pistolas, subfusiles básicos).",
                  "El uso de armamento de calibre alto (fusiles de asalto, rifles de francotirador, ametralladoras pesadas, explosivos) queda estrictamente prohibido para los civiles bajo cualquier circunstancia."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Colaboración con Organizaciones Delictivas'>
          <SubSectionContent reference='Colaboración con Organizaciones Delictivas'>
            <HeaderContent title='Colaboración con Organizaciones Delictivas' id='17.'>
              Restricciones sobre la participación de civiles en actividades criminales junto a miembros de Organizaciones Delictivas.
            </HeaderContent>
            <Content title='Prohibiciones:' id='17.1' spaced>
              <ListItemContent
                items={[
                  "Se encuentra terminantemente prohibido que los civiles participen en robos, secuestros, enfrentamientos armados o cualquier tipo de actividad criminal junto a miembros de una Organización Delictiva.",
                  "Esta medida busca preservar la identidad y el poder narrativo de las OD, evitando que civiles funcionen como `refuerzos externos` en tramas que no les corresponden.",
                  "En caso de incumplimiento, las sanciones serán aplicadas tanto a los civiles implicados como al miembro de la OD involucrado, afectando incluso a la organización a la que pertenezca dicho miembro."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Consideraciones adicionales'>
          <SubSectionContent reference='Consideraciones adicionales'>
            <HeaderContent title='Consideraciones adicionales' id='18.'>
              Directrices finales para el desarrollo de actividades delictivas por parte de civiles.
            </HeaderContent>
            <Content title='Recomendaciones:' id='18.1' spaced>
              <ListItemContent
                items={[
                  "Las actividades delictivas de civiles deberán mantener siempre un desarrollo lógico, con motivaciones claras y sin caer en el `rol por rol` o en el abuso de mecánicas.",
                  "Se recomienda que los civiles que deseen dedicarse con frecuencia a estas prácticas busquen eventualmente integrarse a una OD, ya que las limitaciones impuestas son estrictas y buscan fomentar la progresión dentro del rol criminal.",
                  "Todo acto fuera de estas normativas será considerado una infracción grave y derivará en sanciones proporcionales al daño ocasionado."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>
      </div>
    </div>
  )
}
