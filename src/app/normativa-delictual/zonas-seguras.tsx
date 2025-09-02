import { SubSectionContent, HeaderContent, ListItemContent, Content, SectionContent, ContentFooter } from "@/components/sections"
import React from "react"

export default function ZonasSeguras() {
  return (
    <div className='prose prose-lg max-w-none'>
      {/* Content sections */}
      <div>
        <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Concepto'>
          🛡️ <span className='font-bold'>Zonas</span>
          <span className='font-bold text-green-600'> Seguras</span>
        </h2>
        <div className='bg-blue-50 border-l-4 border-blue-400 p-4 mb-6'>
          <p className='text-gray-800 leading-relaxed'>
            Se entiende como ZONA SEGURA aquellos lugares destinados a la recreación, interacción social y comercio, tales como plazas, parques, cafés, centros comerciales y otros espacios abiertos al
            público donde los ciudadanos puedan desenvolverse libremente sin riesgo de confrontación.
          </p>
          <p className='text-gray-800 leading-relaxed mt-2'>
            Estas zonas tienen como objetivo garantizar un entorno seguro y propicio para la interacción entre jugadores, fomentando la convivencia y la narrativa social dentro del servidor.
          </p>
        </div>
      </div>

      <div className='grid gap-4'>
        <SectionContent reference='Reglamento de Zonas Seguras'>
          <SubSectionContent reference='Reglamento de Zonas Seguras'>
            <HeaderContent title='Reglamento de Zonas Seguras' id='1.'>
              Las zonas seguras están diseñadas para ser espacios donde los jugadores puedan conversar, socializar y desarrollar tramas sociales, evitando interrupciones violentas que rompan la
              coherencia del entorno.
            </HeaderContent>
            <Content title='Queda completamente prohibido roles agresivos dentro de ellas, tales como:' id='1.1' spaced>
              <ListItemContent items={["Robo de pertenencias.", "Abatir a otro ciudadano", "Uso y venta de armas", "Venta de drogas", "Roles de acoso"]} />
            </Content>
            <ContentFooter>
              Se recomienda a todos los participantes respetar estos espacios, fomentando la inclusión y la convivencia positiva, así como la creatividad en roles no agresivos, como reuniones,
              actividades comerciales, eventos sociales o interacciones de carácter amistoso. Cualquier incumplimiento de esta normativa será considerado una falta grave y podrá derivar en sanciones
              OOC y IC, con el fin de proteger la integridad de estos espacios y asegurar una experiencia segura para todos los jugadores.
            </ContentFooter>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Roles semi-agresivos permitidos'>
          <SubSectionContent reference='Roles semi-agresivos permitidos'>
            <HeaderContent title='Dentro de ellas puedes llevar a cabo roles semi-agresivos tales como:' id='2.'>
              Se permiten ciertos tipos de interacciones que no comprometen la seguridad fundamental de la zona, siempre que se mantengan dentro de límites razonables.
            </HeaderContent>
            <Content title='Discusiones, riñas y peleas sin armas' id='2.1' spaced>
              <ListItemContent
                items={[
                  "Se permite el desarrollo de discusión, riñas o peleas físicas siempre que no involucren el uso de armas ni resulten en el abatimiento de otro jugador. Estas interacciones deben mantenerse dentro de los límites del rol y respetar la integridad de los participantes, evitando daños que rompan la coherencia del servidor."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Excepciones para roles agresivos'>
          <SubSectionContent reference='Excepciones para roles agresivos'>
            <HeaderContent title='Secuestros o asaltos fuera de zonas seguras' id='3.'>
              En el caso de que un rol de secuestro o asalto se inicie fuera de una Zona Segura, y uno de los involucrados intente evadir el rol utilizando la zona segura como refugio (considerado
              PG2), el rol deberá continuar normalmente, respetando la narrativa y las consecuencias del enfrentamiento.
            </HeaderContent>
            <ContentFooter>
              Esta medida asegura que los jugadores no puedan eludir conflictos mediante el abuso de áreas protegidas y mantiene la coherencia de los eventos delictivos en el servidor.
            </ContentFooter>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Continuación de roles agresivos'>
          <SubSectionContent reference='Continuación de roles agresivos'>
            <HeaderContent title='Continuación de roles agresivos dentro de Zonas Seguras' id='4.'>
              Si un enfrentamiento o situación de rol se inicia fuera de una Zona Segura, pero uno de los participantes ingresa a ella con la intención de evadir el conflicto, el otro participante
              está facultado para continuar con el rol agresivo, incluso dentro de los límites de la Zona Segura.
            </HeaderContent>
            <ContentFooter>
              Esta excepción solo aplica cuando se evidencia claramente que la entrada a la zona protegida tuvo como único objetivo evadir el rol ya iniciado, evitando abusos y garantizando que los
              conflictos se desarrollen de manera justa y coherente.
            </ContentFooter>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Consideraciones adicionales'>
          <SubSectionContent reference='Consideraciones adicionales'>
            <HeaderContent title='Consideraciones adicionales' id='5.'>
              Estas reglas buscan equilibrar la seguridad de las zonas protegidas con la continuidad del rol agresivo iniciado legítimamente, evitando que los jugadores utilicen espacios seguros como
              un "escudo" para interrumpir la narrativa.
            </HeaderContent>
            <ContentFooter>
              Cualquier abuso o interpretación incorrecta de esta excepción será revisada por la administración, pudiendo derivar en sanciones OOC o IC según la gravedad del caso.
            </ContentFooter>
          </SubSectionContent>
        </SectionContent>

        <SectionContent reference='Zonas Seguras específicas'>
          <SubSectionContent reference='Zonas Seguras específicas'>
            <HeaderContent title='Se detallan ZONAS SEGURAS:' id='6.'>
              Lista de ubicaciones específicas consideradas zonas seguras dentro de la ciudad.
            </HeaderContent>
            <Content title='Ubicaciones protegidas:' id='6.1' spaced>
              <ListItemContent
                items={[
                  "Garajes de toda la ciudad",
                  "Concesionarios",
                  "Locales",
                  "Zonas de trabajo (Locales de comida, mecánicos, servicios)",
                  "Mecánicos",
                  "Hospital",
                  "Comisarías",
                  "Gimnasios",
                  "Tienda de ropa/Peluquería"
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>
      </div>
    </div>
  )
}
