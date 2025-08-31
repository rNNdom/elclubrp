import { SubSectionContent, HeaderContent, ListItemContent, Content } from "@/components/sections"
import React from "react"

function RobosSucursales(){
    return <div>
    <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Concepto'>
    <span>💵 Reglamento De Robos</span>
    </h2> 
            Es fundamental tener en cuenta que dentro de la ciudad operan dos cuerpos policiales 
            independientes, cada uno con su propio entorno y responsabilidades: la LSPD (Los Santos 
            Police Department) y la LSSD (Los Santos Sheriff Department).
            <br /><br />
            ada cuerpo mantiene 
            jurisdicciones distintas y responde a incidentes según su disponibilidad y zona de cobertura. 
            Para reportar emergencias o solicitar intervención policial, los ciudadanos deberán utilizar 
            los comandos correspondientes: para la LSPD se debe emplear /911, mientras que para la 
            LSSD el comando correcto es /911n. Es de vital importancia enviar los avisos al cuerpo 
            adecuado según la ubicación del incidente, ya que un reporte enviado al organismo 
            incorrecto puede generar demoras en la respuesta y afectar la efectividad del rol.
            <br /><br />
            Además, ambos cuerpos tienen protocolos de actuación propios, por lo que la precisión en la elección 
            del comando contribuye a mantener la coherencia, el realismo y la fluidez en las tramas 
            policiales dentro del servidor.
            <br /><br />
      <SubSectionContent reference='DISPONIBILIDAD DE LSPD '>
        <HeaderContent title='Disponibilidad De LSPD ' id='2..'>
        La disponibilidad de la LSPD se informa mediante un anuncio IC y también se refleja en 
        la pantalla en la esquina superior derecha, donde se indica la cantidad de policías 
        disponibles para acudir a llamados a través de /911 (LSPD) o /911n (LSSD). 
        <br /><br />
        Esta información debe ser actualizada cada 15 minutos por un funcionario disponible, 
        asegurando que los jugadores siempre cuenten con datos precisos sobre la respuesta 
        policial. Además, cualquier ciudadano puede consultar la disponibilidad directamente 
        utilizando el comando /911 o /911 seguido de “Se solicita disponibilidad”.
        <br /><br />

        </HeaderContent>
      </SubSectionContent>       
      <Content title='Rol en curso con baja conectividad:' id='3..'>
              <ListItemContent
                items={[
                    "Si un rol delictual ya ha sido iniciado con un llamado /911 o /911n y la conectividad/disponibilidad policial disminuye durante su",
                    "Fiscalizaciones de facciones policiales: Durante controles policiales o fiscalizaciones activas, los oficiales no podrán ser asaltados, secuestrados ni abatidos, ya que esto se considerará entrar en un rol ajeno, rompiendo la coherencia de la escena. ",
                    "Cantidad de rehenes: Si no se especifica claramente la cantidad de rehenes en el entorno durante un robo, estos no serán considerados para la negociación con la policía, evitando confusiones y decisiones arbitrarias en el desarrollo del rol. ",
                    "Rehenes falsos: El uso de rehenes falsos está estrictamente prohibido. Incurrir en esta práctica invalidará el rol y conllevará sanciones tanto para el asaltante como para el supuesto rehén. Para garantizar el cumplimiento, se permite únicamente tomar como rehén a un NPC, asegurando la coherencia y evitando abusos dentro del servidor. ",
                    "Función de los rehenes: Los rehenes tienen un propósito exclusivamente negociador en los robos (según la Normativa de Negociaciones). Esta mecánica es diferente de los secuestros, los cuales poseen normativas y objetivos independientes que se detallarán más adelante. ",
                    "Robos sin rehenes: En caso de que un robo no incluya rehenes, no existe posibilidad de negociación con la policía, lo que limita las opciones de resolución y obliga a los jugadores a ajustar su estrategia delictual de manera coherente con la situación",
                ]}                
              />
            </Content> 
      <SubSectionContent reference='Robos'>
        <HeaderContent title='Robos' id='4..'>
        Durante la ejecución de robos, los ladrones deben permanecer dentro del recinto en todo 
        momento. Salir antes de lo estipulado los considerará hostiles o tiradores, rompiendo la 
        coherencia del rol y afectando la dinámica de negociación con la policía.
        <br /><br />
        <Content title='Informacion' id='4..1' spaced>
              <ListItemContent
                items={[
                    "Excepciones: La única excepción se da cuando el entorno especifica claramente la presencia de sujetos fuera del recinto, indicando su función específica, como tirador, bloqueador, distractor u otra acción justificada. En estos casos, los roles se desarrollarán conforme a la narrativa establecida. ",
                    "Interacción con la policía: Los ladrones únicamente podrán salir a interactuar con los oficiales una vez que la policía haya llegado al lugar. En este contexto, únicamente un ladrón sale a negociar mientras que otro puede salir de manera puntual para entregar rehenes, garantizando un flujo de rol coherente y seguro. ",
                    "Finalización de la negociación: Al concluir la negociación, los ladrones deben permanecer dentro del recinto hasta recibir la señal de salida oficial, evitando movimientos que rompan la lógica del evento. ",
                    "Tiroteos: En caso de que el robo derive en un tiroteo, los ladrones deben permanecer dentro del recinto hasta que el enfrentamiento comience formalmente, asegurando que la acción siga un desarrollo controlado y narrativamente consistente. ",
                    "Refuerzos: No está permitido solicitar refuerzos para roles de robo donde el entorno no haya especificado la presencia de refuerzos. Por el contrario, los oficiales pueden solicitar refuerzos cuando haya transcurrido el tiempo correspondiente y sea necesario enviar un aviso de refuerzo policial. ",
                    "Tiempos de QRR: El último oficial abatido deberá enviar el QRR exactamente 2 minutos después de haber caído, garantizando que los procedimientos de respuesta y recuperación se mantengan dentro de los márgenes establecidos para roles realistas y equilibrados. ",
                ]}                
              />
            </Content>
        </HeaderContent>
      </SubSectionContent>
      <SubSectionContent reference='Cantidad de Involucrados y Calibre para Robos '>
        <HeaderContent title='Cantidad de Involucrados y Calibre para Robos ' id='5..'>
        Los robos en la ciudad están clasificados en tres niveles de prioridad: baja, media y alta. 
        Cada nivel posee requisitos específicos en cuanto a número de participantes, cantidad de 
        efectivos policiales y calibre de armamento recomendado, con el objetivo de mantener 
        la coherencia del rol, el equilibrio entre delincuentes y policías, y la seguridad de todos los 
        involucrados. 
        </HeaderContent>
        <span className="font-bold">Robo De Baja Prioridad</span>
        <br /><br />
        <Content title='Badulaque' id='5..1' spaced>
              <ListItemContent
                items={[
                   "Delincuentes: entre 1 y 3 participantes.",
                   "Policías: entre 2 y 4 efectivos, respetando siempre la regla del +1. ",
                   "Armamento recomendado: calibre bajo, ideal para enfrentamientos menores y roles de intimidación. ",
                ]}                
              />
            </Content>
            <Content title='Fleecas' id='5..2' spaced>
              <ListItemContent
                items={[
                   "Delincuentes: entre 2 y 4 participantes. ",
                   "Policías: entre 3 y 5 efectivos, siguiendo la regla del +1. ",
                   "Armamento recomendado: calibre medio, permitiendo un desarrollo equilibrado sin escalar a violencia excesiva. ",
                ]}                
              />
            </Content>
            <span className="font-bold">Robo De Media Prioridad</span>
            <br /><br />
            <Content title='Joyería' id='5..3' spaced>
              <ListItemContent
                items={[
                   "Delincuentes: entre 3 y 6 participantes. ",
                   "Policías: entre 4 y 7 efectivos, siguiendo la regla del +1. ",
                   "Armamento recomendado: calibre medio, necesario para afrontar seguridad reforzada y controles internos.",
                ]}                
              />
            </Content>
            <Content title='Banco Paleto' id='5..4' spaced>
              <ListItemContent
                items={[
                   "Delincuentes: entre 2 y 5 participantes. ",
                   "Policías: entre 3 y 6 efectivos, siguiendo la regla del +1. ",
                   "Armamento recomendado: calibre medio, balanceando riesgo y recompensa. ",
                ]}                
              />
            </Content>
            <Content title='Life Invader' id='5..5' spaced>
              <ListItemContent
                items={[
                   "Delincuentes: entre 3 y 6 participantes. ",
                   "Policías: entre 4 y 7 efectivos, siguiendo la regla del +1. ",
                   "Armamento recomendado: calibre medio, diseñado para enfrentamientos tácticos sin escalar demasiado la violencia. ",
                ]}                
              />
            </Content>
            <Content title='Maze Bank' id='5..6' spaced>
              <ListItemContent
                items={[
                   "Delincuentes: entre 3 y 7 participantes. ",
                   "Policías: entre 4 y 8 efectivos, siguiendo la regla del +1. ",
                   "Armamento recomendado: calibre medio, adecuado para roles complejos que involucren negociación, rehenes y enfrentamientos. ",
                ]}                
              />
            </Content>
            <span className="font-bold">Robo De Alta Prioridad</span>
            <br /><br />
            <Content title='Humane' id='5..7' spaced>
              <ListItemContent
                items={[
                   "Delincuentes: entre 5 y 9 participantes. ",
                   "Policías: entre 6 y 10 efectivos, siguiendo la regla del +1. ",
                   "Armamento recomendado: calibre alto, permitiendo un nivel elevado de confrontación y coordinación entre las partes.",
                ]}                
              />
            </Content>
            <Content title='Banco Central' id='5..8' spaced>
              <ListItemContent
                items={[
                   "Delincuentes: entre 6 y 12 participantes. ",
                   "Policías: entre 7 y 13 efectivos, siguiendo la regla del +1. ",
                   "Armamento recomendado: calibre alto, asegurando un desafío significativo y un desarrollo de rol intenso. ",
                ]}                
              />
            </Content>
            <Content title='Reserva Nacional De Oro' id='5..9' spaced>
              <ListItemContent
                items={[
                   "Delincuentes: entre 8 y 15 participantes. ",
                   "Policías: entre 9 y 16 efectivos, siguiendo la regla del +1. ",
                   "Armamento recomendado: calibre alto, diseñado para robos estratégicos de gran escala, con múltiples roles de apoyo, seguridad y negociación. ",
                ]}                
              />
            </Content>
      </SubSectionContent>
      <SubSectionContent reference='Normas Generales sobre el Armamento en Robos '>
        <HeaderContent title='Normas Generales sobre el Armamento en Robos ' id='6..'>
        El armamento utilizado en un robo puede ser elegido libremente por los delincuentes, 
        siempre y cuando su uso esté reflejado claramente en el entorno y se mantenga 
        coherente con el desarrollo del rol. Esto asegura que todos los participantes, tanto policías 
        como delincuentes, actúen dentro de los parámetros establecidos y que la escena conserve 
        su realismo.
        <br /><br />
        <Content title='Tomar En Consideración' id='6..1' spaced>
              <ListItemContent
                items={[
                  "Proporcionalidad del armamento: En caso de que un delincuente haga uso de un arma de calibre superior al del resto de sus compañeros, los efectivos policiales que acudan al lugar podrán utilizar armamento equivalente para mantener la proporcionalidad del enfrentamiento, garantizando un desarrollo equilibrado y justo dentro del rol. ",
                  "Robos de baja prioridad: Para este tipo de eventos, si algún participante porta un arma de calibre alto, la situación será considerada de carácter terrorista, elevando automáticamente la respuesta policial. Esto implica que toda la fuerza disponible podrá intervenir en el evento, incrementando la dificultad y el realismo de la escena, y asegurando que se cumpla la normativa del servidor respecto al uso de armamento. ",
                  "Documentación y coherencia: Es obligatorio que todos los participantes indiquen claramente el tipo de arma utilizada en el entorno y durante la ejecución del rol, evitando confusiones y asegurando que la interacción entre delincuentes y policías se desarrolle de manera transparente y justa. ",
                  "Consecuencias del incumplimiento: El uso de armamento no autorizado o el incumplimiento de las reglas de proporcionalidad podrá derivar en sanciones tanto para los delincuentes como para cualquier oficial que actúe fuera de los parámetros establecidos, asegurando la integridad y equilibrio del sistema de robos dentro del servidor. ",
                ]}                
              />
            </Content>
        </HeaderContent>
      </SubSectionContent>
      
    </div>

}

export default RobosSucursales