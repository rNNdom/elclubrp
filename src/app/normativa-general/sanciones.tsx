import SancionesTable from "@/components/sanciones-table"
import { Content, ContentFooter, HeaderContent, ListItemContent, SectionContent, SubSectionContent } from "@/components/sections"
import React from "react"

function Sanciones() {
  return (
    <div className='prose prose-lg max-w-none'>
      {/* Content sections */}
      <div>
        <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Sanciones'>
          🚩 <span>Sanciones</span>
        </h2>
        <div className='bg-blue-50 border-l-4 border-blue-400 p-4 mb-6'>
          <p className='text-gray-800 leading-relaxed'>
            En este apartado se detallarán las sanciones correspondientes para cada incumplimiento de las normativas del servidor. Todas las reglas establecidas deben ser respetadas para garantizar un
            roleplay justo, equilibrado y realista.
          </p>
        </div>
      </div>

      <div className='grid gap-4'>
        <SectionContent reference='1. Normativa de Sanciones'>
          <SubSectionContent reference='Normativa de Sanciones'>
            <HeaderContent title='1. Normativa de Sanciones' id='1'>
              Cada falta será evaluada según su gravedad y reincidencia, y las sanciones pueden ir desde advertencias hasta expulsiones permanentes, dependiendo del caso. Es responsabilidad de cada
              jugador conocer y respetar estas normas para evitar consecuencias IC y administrativas.
            </HeaderContent>
            <ContentFooter>
              Lee detenidamente este apartado para comprender las penalizaciones aplicables a cada infracción y asegurarte de mantener un juego limpio dentro del servidor. 🚨
            </ContentFooter>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='2. Clasificación de Sanciones'>
          <SubSectionContent reference='Clasificación de Sanciones'>
            <HeaderContent title='2. Clasificación de Sanciones' id='2'>
              Las sanciones se clasifican según su gravedad y duración. Todos los usuarios están sujetos a estas medidas disciplinarias cuando incumplen las normativas del servidor.
            </HeaderContent>

            <Content title='' id='Tipos' spaced>
              <ListItemContent
                title='Tipos de sanciones para todos los usuarios:'
                description=''
                items={[
                  "Warning (LDA): Llamado de atención",
                  "Sanción Leve (L): 1 - 5 horas de BAN",
                  "Sanción Media (M): 5 - 24 horas de BAN",
                  "Sanción Grave (G): 24 - 72 horas de BAN",
                  "Sanción Extrema (E): 5 días de BAN - BAN PERMANENTE"
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='3. Tabla de Infracciones y Sanciones - Parte 1'>
          <SubSectionContent reference='Tabla de Infracciones y Sanciones - Parte 1'>
            <HeaderContent title='3. Tabla de Infracciones y Sanciones - Parte 1' id='3'>
              A continuación se presenta la tabla detallada de infracciones con sus respectivas sanciones y duraciones aplicables.
            </HeaderContent>

            <div className='overflow-x-auto'>
              <SancionesTable />
            </div>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='4. Notas Importantes'>
          <SubSectionContent reference='Notas Importantes'>
            <HeaderContent title='4. Notas Importantes' id='4'>
              Es fundamental comprender que estas sanciones pueden aplicarse de manera progresiva según la reincidencia del jugador y las circunstancias específicas de cada caso.
            </HeaderContent>

            <Content title='Consideraciones adicionales:' id='Notas' spaced>
              <ListItemContent
                title='Evaluación individual'
                description='Cada caso será evaluado individualmente por el equipo administrativo, considerando factores como historial del jugador, gravedad de la falta y contexto.'
              />
              <ListItemContent title='Sanciones progresivas' description='Los jugadores reincidentes pueden recibir sanciones más severas que las indicadas en la tabla base.' />
              <ListItemContent
                title='Apelaciones'
                description='Todas las sanciones pueden ser apeladas a través del sistema oficial de Discord, excepto donde se indique específicamente lo contrario.'
              />
              <div className='space-y-3'>
                <div className='bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 rounded-lg p-4'>
                  <p className='text-green-800 leading-relaxed'>
                    <span className='font-bold'>Warning (LDA):</span> Si la persona es reincidente con baneos (LDA) máximo 3, si el cuarto baneo es (LDA) debe considerarse (L). Si el cuarto baneo es
                    superior a (L) se considerará el mayor.
                  </p>
                </div>

                <div className='bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-lg p-4'>
                  <p className='text-blue-800 leading-relaxed'>
                    <span className='font-bold'>Sanción Leve (L):</span> Si la persona es reincidente con baneos (L) máximo 3, si el cuarto baneo es (L) debe considerarse (M). Si el cuarto baneo es
                    superior a (M), se considerará el mayor.
                  </p>
                </div>

                <div className='bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 rounded-lg p-4'>
                  <p className='text-yellow-800 leading-relaxed'>
                    <span className='font-bold'>Sanción Media (M):</span> Si la persona es reincidente con baneos (M) máximo 3, si el cuarto baneo es (M) debe considerarse (G). Si el cuarto baneo es
                    superior a (G), se considerará el mayor.
                  </p>
                </div>

                <div className='bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-lg p-4'>
                  <p className='text-red-800 leading-relaxed'>
                    <span className='font-bold'>Sanción Grave (G):</span> Si la persona es reincidente con baneos (G) máximo 3, si el cuarto baneo es (G) debe considerarse (E). Si el cuarto baneo es
                    superior a (E), se considerará el mayor.
                  </p>
                </div>
              </div>
            </Content>

            <ContentFooter>
              Recuerda que el objetivo de las sanciones es mantener un ambiente de juego saludable y divertido para todos. El cumplimiento de las normativas es responsabilidad de cada jugador y
              contribuye al bienestar de toda la comunidad.
            </ContentFooter>
          </SubSectionContent>
        </SectionContent>
      </div>
    </div>
  )
}

export default Sanciones
