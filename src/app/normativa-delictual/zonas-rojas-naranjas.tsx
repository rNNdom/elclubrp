import { SubSectionContent, HeaderContent, ListItemContent, Content, SectionContent, ContentFooter } from "@/components/sections"
import React from "react"

export default function ZonasRojas() {
  return (
    <div className='prose prose-lg max-w-none'>
      {/* Content sections */}
      <div>
        <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Concepto'>
          <span className='font-bold'>💀 Zona </span>
          <span className='font-bold text-red-600'>Roja </span>
          <span className='font-bold'>y </span>
          <span className='font-bold text-orange-400'>Naranja</span>
        </h2>
        <div className='bg-blue-50 border-l-4 border-blue-400 p-4 mb-6'>
          <p className='text-gray-800 leading-relaxed'>
            Las Zonas Rojas y Zonas Naranjas son áreas específicamente destinadas a actividades ilícitas, tales como cultivo, cosecha y procesamiento de drogas. Por su naturaleza, estos territorios
            representan un punto de interés estratégico tanto para las Organizaciones Delictivas (OD) como para las fuerzas del orden, debido a su vinculación directa con el crimen organizado y otras
            actividades ilegales.
          </p>
          <p className='text-gray-800 leading-relaxed mt-2'>
            En estos lugares, la presencia policial es limitada o incluso inexistente, creando un entorno peligroso y con mayor margen para la vulneración de la ley.
          </p>
        </div>
      </div>

      <div className='grid gap-4'>
        <SectionContent reference='Diferencias entre Zonas Rojas y Zonas Naranjas'>
          <SubSectionContent reference='Diferencias entre Zonas Rojas y Zonas Naranjas'>
            <HeaderContent title='Diferencias entre Zonas Rojas y Zonas Naranjas' id='1.'>
              Las zonas rojas y naranjas tienen características específicas que las distinguen en términos de ubicación, reglas de entorno y respuesta policial.
            </HeaderContent>
            <Content title='Zona Roja' id='1.1' spaced>
              <ListItemContent
                items={[
                  "Son puntos de farmeo ubicados en lugares alejados de ciudades, pueblos o urbanizaciones, diseñados para que las OD operen con mínima interferencia externa.",
                  "Debido a su aislamiento, no es obligatorio el uso de entorno, ya que no existirían terceros que pudieran observar enfrentamientos o la presencia de personas armadas.",
                  "En caso de que se produzcan disparos, la LSPD podrá acudir a la zona sin respetar la regla del +1, garantizando la respuesta inmediata ante incidentes de alto riesgo."
                ]}
              />
            </Content>
            <Content title='Zona Naranja' id='1.2' spaced>
              <ListItemContent
                items={[
                  "Son áreas dedicadas al proceso y farmeo de drogas, pero ubicadas en sectores donde circulan civiles y vehículos con cierta frecuencia, aumentando el riesgo y la necesidad de realismo.",
                  "En estas zonas será obligatorio el uso de entorno, aplicando un radio aproximado de 100 metros desde el punto de llegada, asegurando que los roles se desarrollen de forma coherente y visible para todos los participantes.",
                  "La LSPD no podrá ingresar a interiores dentro de estas zonas, limitando su intervención a vigilancia externa y negociación en caso de conflicto."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Actos permitidos en Zonas Rojas y Naranjas'>
          <SubSectionContent reference='Actos permitidos en Zonas Rojas y Naranjas'>
            <HeaderContent title='Actos permitidos en Zonas Rojas y Naranjas' id='2.'>
              Considerando que estas áreas están bajo dominio de Organizaciones Delictivas y representan un alto riesgo, se permiten ciertas acciones que no serían aceptables en otras zonas de la
              ciudad.
            </HeaderContent>
            <Content title='Acciones autorizadas:' id='2.1' spaced>
              <ListItemContent
                items={[
                  "Uso de fuerza letal sin previo aviso: considerando que estas áreas están bajo dominio de Organizaciones Delictivas y representan un alto riesgo.",
                  "Cacheo de civiles, miembros de OD y oficiales: como parte de operaciones de seguridad y control territorial.",
                  "Búsqueda e identificación de personas: con fines investigativos incluyendo recolección de pruebas o seguimiento de actividades ilícitas."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Actos prohibidos en Zonas Rojas y Naranjas'>
          <SubSectionContent reference='Actos prohibidos en Zonas Rojas y Naranjas'>
            <HeaderContent title='Actos prohibidos en Zonas Rojas y Naranjas' id='3.'>
              Para mantener el equilibrio y evitar abusos, existen restricciones específicas en estas zonas que deben ser respetadas por todos los participantes.
            </HeaderContent>
            <Content title='Restricciones:' id='3.1' spaced>
              <ListItemContent
                items={[
                  "Aprovechar estas zonas para realizar DM: o permanecer inactivo salvo durante actividades de recolección, procesamiento o roles específicos autorizados.",
                  "Campear en zonas rojas: permanecer en un radio de 50 metros sin participar activamente será considerado campeo y sancionado.",
                  "Evadir o interferir: en roles en curso dentro de estas zonas, interrumpiendo la narrativa de los demás jugadores.",
                  "Realizar roles sociales: como reuniones casuales o interacciones amistosas, que no estén relacionadas con la dinámica de criminalidad de la zona."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Consideraciones adicionales'>
          <SubSectionContent reference='Consideraciones adicionales'>
            <HeaderContent title='Consideraciones adicionales' id='4.'>
              Estas regulaciones buscan mantener un equilibrio entre riesgo, realismo y diversión, fomentando la competencia entre OD y la interacción con fuerzas del orden sin comprometer la
              seguridad de los jugadores.
            </HeaderContent>
            <ContentFooter>Cualquier incumplimiento de estas normas será considerado falta grave, pudiendo derivar en sanciones IC y OOC según la gravedad del evento.</ContentFooter>
          </SubSectionContent>
        </SectionContent>
      </div>
    </div>
  )
}
