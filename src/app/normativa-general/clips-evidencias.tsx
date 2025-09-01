import { Content, ContentFooter, HeaderContent, ListItemContent, SectionContent, SubSectionContent } from "@/components/sections"
import React from "react"

function ClipsEvidencias() {
  return (
    <div className='prose prose-lg max-w-none'>
      {/* Content sections */}
      <div>
        <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Clips-Evidencias'>
          🎥 <span>Clips/Evidencias</span>
        </h2>
        <div className='bg-blue-50 border-l-4 border-blue-400 p-4 mb-6'>
          <p className='text-gray-800 leading-relaxed'>
            Se especifica los términos y condiciones de los clips para usarlos como evidencia en roles. Los clips son fundamentales para garantizar la justicia y transparencia en las decisiones
            administrativas.
          </p>
        </div>
      </div>

      <div className='grid gap-4'>
        <SectionContent reference='1. Definición de Clips/Evidencias'>
          <SubSectionContent reference='Definición de Clips/Evidencias'>
            <HeaderContent title='1. Definición de Clips/Evidencias' id='1'>
              Los Clips son videos para adjuntar como evidencia en caso de un reporte para que luego del rol un árbitro (Staff) pueda dar una decisión si este se ejecutó de manera correcta o
              incorrecta. Estos clips son esenciales para mantener la integridad del roleplay y resolver disputas de manera justa.
            </HeaderContent>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='2. Requisitos de los Clips'>
          <SubSectionContent reference='Requisitos de los Clips'>
            <HeaderContent title='2. Requisitos de los Clips' id='2'>
              Para que un clip sea válido como evidencia, debe cumplir con ciertos estándares técnicos y de calidad que garanticen su autenticidad y utilidad.
            </HeaderContent>

            <Content title='Especificaciones técnicas requeridas:' id='Requisitos' spaced>
              <ListItemContent title='Duración mínima' description='Los clips deben tener un mínimo de 1 MINUTO DE DURACIÓN para proporcionar contexto suficiente.' />
              <ListItemContent title='Audio obligatorio' description='Debe incluir AUDIO claro y sin interrupciones para capturar toda la comunicación relevante.' />
              <ListItemContent title='Sin cortes ni edición' description='No deben presentar CORTES, pausas o ediciones que puedan alterar la secuencia de eventos.' />
              <ListItemContent title='Autenticidad' description='Los clips deben ser REALES y sin ningún tipo de alteración digital o manipulación.' />
            </Content>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='3. Consecuencias por Alteración'>
          <SubSectionContent reference='Consecuencias por Alteración'>
            <HeaderContent title='3. Consecuencias por Alteración' id='3'>
              La integridad de las evidencias es fundamental para el funcionamiento justo del servidor. Cualquier intento de manipular o alterar clips tendrá consecuencias severas.
            </HeaderContent>

            <div className='bg-red-50 border-l-4 border-red-400 p-4 mb-4'>
              <p className=' leading-relaxed'>Si se detecta ALTERACIÓN de clips, será motivo de SANCIÓN al jugador que reporta, sin posibilidad de apelación.</p>
            </div>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='4. Proceso de Reporte'>
          <SubSectionContent reference='Proceso de Reporte'>
            <HeaderContent title='4. Proceso de Reporte' id='4'>
              Para realizar un reporte válido utilizando clips como evidencia, se debe seguir el procedimiento establecido por la administración del servidor.
            </HeaderContent>

            <Content title='Pasos para reportar:' id='Proceso' spaced>
              <ListItemContent title='Canal oficial' description='Para realizar reporte de rol es necesario abrir ticket en "Reportar jugador" en Discord.' />
              <ListItemContent title='Adjuntar evidencia' description='Incluir el clip que cumpla con todos los requisitos técnicos mencionados anteriormente.' />
              <ListItemContent title='Descripción detallada' description='Proporcionar contexto y explicación clara de la situación reportada.' />
            </Content>

            <ContentFooter>
              Recuerda que los reportes falsos o malintencionados también están sujetos a sanciones. Utiliza el sistema de reportes de manera responsable y solo cuando sea necesario para mantener la
              calidad del roleplay.
            </ContentFooter>
          </SubSectionContent>
        </SectionContent>
      </div>
    </div>
  )
}

export default ClipsEvidencias
