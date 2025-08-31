import { SubSectionContent, HeaderContent, Content, ListItemContent, ContentFooter } from "@/components/sections"

function Investigacion(){
    return <div>
        <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Concepto'>
        <span className="font-bold">🕵️ Investigaciones</span>
        </h2>
        <Content title='Evidencias e Informes' id='2' spaced>
              <ListItemContent
                items={[
                    "Manejo de Evidencia: Los oficiales deben asegurarse de manejar adecuadamente la evidencia en todas las investigaciones. Esto incluye la recopilación, el almacenamiento y el análisis. Toda evidencia debe quedar notificada en el informe realizado junto con la detención del sospechoso.",
                    "Interrogatorios: Los interrogatorios deben realizarse dentro de los límites legales y sin el uso de violencia o coacción. El respeto a los derechos humanos y la dignidad del detenido es esencial. ",
                    "Informes o denuncias: Toda la información debe quedar estipulada de forma excepcional en la Tablet. Como base de la denuncia debe contener"
                ]}  
              />
              <h1 className="font-bold text-red-600">Fecha - Hora – Nombre Sospechoso/s – Razón de detención – Describir 
              procedimiento - Mención de oficiales involucrados - Evidencia recopilada</h1>
              <h1 className="font-bold">El título del informe corresponde al delito o crimen principal por el cual el 
              sospechoso es formalizado.</h1>
    </Content>
    <br /><br />
    <Content title='1. Investigaciones Policiales ' id='3' spaced>
              <ListItemContent
                items={[
                    "Todas las investigaciones policiales deben estar sustentadas in-character (IC), por lo que está prohibido el uso de información out-of-character (OOC) para mejorar o acelerar el proceso. La Unidad CID (Criminal Investigation Division) será la encargada de llevar a cabo las investigaciones en la LSPD.",
                    "Para iniciar una investigación, se deberá contar con pruebas suficientes, tales como: Denuncias formales presentadas por ciudadanos o instituciones. Evidencias obtenidas a través de patrullajes, cámaras de seguridad, testimonios o procedimientos policiales previos. Análisis de patrones delictivos que permitan conectar casos similares. ",
                ]}  
              />
    <ContentFooter>
    Las investigaciones deberán ser documentadas en un informe policial detallado, que estará 
    disponible para revisión por parte de los altos mandos y la administración del servidor en 
    caso de ser requerido.
    </ContentFooter>
    </Content> 
    <Content title='2. Interrogatorios ' id='4' spaced>
              <ListItemContent
                items={[
                    "Los interrogatorios no podrán ser realizados de forma casual o arbitraria, sino que requerirán de una autorización oficial emitida por la CID y firmada por el rango más alto de la LSPD ",
                    "El documento de autorización deberá contener, al menos: Nombre del sujeto a interrogar, Motivos específicos que justifiquen la acción, Evidencias que respalden la necesidad del interrogatorio."
                ]}  
              />
    <ContentFooter>
    El documento deberá ser mostrado al interrogado en caso de que este lo solicite. Si el 
    sujeto se niega a cooperar, se podrá proceder con una orden judicial para obligarlo a 
    declarar, siempre dentro de los límites del rol. 
    </ContentFooter>
    </Content>
    <Content title='3. Órdenes de Búsqueda y Captura' id='5' spaced>
              <ListItemContent
                items={[
                    "Las órdenes de búsqueda no pueden emitirse por mera sospecha o capricho, sino que deben contar con un sustento real y documentado.",
                    "Una orden de búsqueda y captura podrá emitirse si se cumple al menos uno de los siguientes criterios: Más de 20 condenas acumuladas por delitos. Multas pendientes superiores a $150,000. "
                ]}  
              />
    <ContentFooter>
    En caso de recibir una denuncia contra un sujeto, se podrá emitir una orden de búsqueda, 
    pero no de captura, con el fin de notificarlo sobre la denuncia y citar a declarar.
    <br /><br /> 
    Las órdenes deberán estar registradas formalmente y contar con la aprobación de un alto 
    mando de la LSPD 
    </ContentFooter>
    </Content>
    <Content title='4. Allanamientos ' id='6' spaced>
              <ListItemContent
                items={[
                    "Los allanamientos deberán seguir un procedimiento riguroso y no podrán realizarse sin una orden judicial válida. (Entiéndase por allanamiento, cualquier ingreso a un recinto privado)",
                    "Para solicitar un allanamiento, se debe presentar un informe detallado que contenga: Evidencias que justifiquen la acción (videos, testimonios, registros policiales). Ubicación exacta del inmueble a allanar. Nombre de los sospechosos involucrados en la investigación. Autorización de la CID y firma de un alto mando de la LSPD "
                ]}  
              />
    <ContentFooter>
    El allanamiento deberá ser realizado con la presencia de al menos tres oficiales y deberá 
    ser grabado o registrado IC para evitar abusos.  
    </ContentFooter>
    </Content>
    <h1 className="font-bold" id="7">5. CK Policial y Desmantelamiento de Organizaciones</h1>
    <br /><br />
    <Content title='5.1. CK Policial (Muerte de personaje por rol de fuerza mayor)' id='8' spaced>
    El CK policial solo podrá llevarse a cabo en los siguientes casos:
              <ListItemContent
                items={[
                    "Si el sujeto tiene más de $300,000 en multas acumuladas (sin pagar). ",
                    "Si el sujeto ha sido condenado más de 30 veces por delitos de gravedad media o alta. "
                ]}  
              />
    <ContentFooter>
    El CK deberá ser autorizado por la administración y contar con un rol de peso que lo 
    justifique. No se podrá hacer un CK sin un proceso previo de investigación y 
    documentación IC que respalde la decisión.  
    </ContentFooter>
    </Content>
    <Content title='5.2. Desmantelamiento de Organizaciones Criminales ' id='9' spaced>
    Para desmantelar una organización criminal, se deben cumplir los siguientes requisitos:
              <ListItemContent
                items={[
                    "Identificar al 80% de sus miembros: lo que implica conocer Nombres IC. Al menos dos placas de vehículos por cada miembro (no sirve buscarlos en la tablet, deben tener registro fotográfico). Conexiones entre ellos mediante investigaciones previas.",
                    "Ubicación de la HQ de la organización. ",
                    "Identificación del líder.",
                    "Cada miembro debe contar con al menos 20 condenas por delitos para justificar el desmantelamiento."
                ]}  
              />
    <ContentFooter>
    El procedimiento de desmantelamiento deberá ser aprobado por la administración y se 
    podrá realizar un operativo especial para llevarlo a cabo.  
    </ContentFooter>
    </Content>
    <Content title='Consideraciones Finales' id='10' spaced>
    Para desmantelar una organización criminal, se deben cumplir los siguientes requisitos:
              <ListItemContent
                items={[
                    "Todas las acciones deberán estar correctamente roleadas con /me y /do para garantizar el realismo y evitar el abuso de poder. ",
                    "Cualquier uso indebido de información OOC para favorecer investigaciones IC será motivo de sanción.",
                    "Se recomienda que los procedimientos sean grabados para evitar controversias y asegurar la transparencia en el rol policial. "
                ]}  
              />
    </Content>
    </div>
}

export default Investigacion