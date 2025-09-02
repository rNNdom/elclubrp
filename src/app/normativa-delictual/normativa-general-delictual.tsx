import { SectionContent, SubSectionContent, HeaderContent, ListItemContent, ContentFooter, Content } from "@/components/sections"
import React from "react"
import Image from "next/image"

function NormativaDelictual() {
  return (
    <div className='prose prose-lg max-w-none'>
      <div>
        <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Concepto'>
          🗡️<span> Normativa General Delictual</span>
        </h2>
        <div className='bg-blue-50 border-l-4 border-blue-400 p-4 mb-6'>
          <p className='text-gray-800 leading-relaxed'>
            La normativa delictual establece las reglas fundamentales para el desarrollo de actividades criminales dentro del servidor, garantizando un ambiente de roleplay equilibrado y realista para
            todos los participantes.
          </p>
        </div>
      </div>

      <div className='grid gap-4'>
        <SectionContent reference='Toxicidad Con EMS/LSPD'>
          <SubSectionContent reference='Toxicidad Con EMS/LSPD'>
            <HeaderContent title='1. Toxicidad Con EMS/LSPD' id='1'>
              En nuestra comunidad no toleramos la toxicidad. Si se registra una toxicidad repetitiva ante alguna facción ilegal será <span className='text-red-600 font-bold'>SANCIONADO.</span>{" "}
              (Sanción no apelable en ningún motivo)
              <br />
              <br />
              Si se registra toxicidad por cualquiera de los bandos será sancionado dependiendo la gravedad.
            </HeaderContent>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Protección Civil'>
          <SubSectionContent reference='Protección Civil'>
            <HeaderContent title='2. Protección Al Civil' id='2'>
              La protección civil tiene como objetivo salvaguardar a las personas durante el día o mientras desempeñan un trabajo en el sector público. (Mecánicos, Camioneros, repartidor,
              electricista, minero, petrolero, constructores, leñadores, cazadores, etc.)
            </HeaderContent>
            <Content title='Reglas Generales' id='2.1' spaced>
              <ListItemContent
                items={[
                  "Inicio de robos: Está permitido el inicio de robos a civiles en zonas peligrosas en ciudad (se mostrará abajo la derecha de la pantalla si la zona es peligrosa) y en ZONA NORTE (delimitado por los peajes). Si el rol inicia en unos de estos lugares mencionados y la persona escapa de esta zona el rol deberá seguir, en caso contrario se tomará como evasión de rol.",
                  "Toma de rehenes: Se autoriza la toma de rehenes en la ciudad, y la persona afectada debe acatar esta situación, siempre y cuando se encuentre en desventaja.",
                  "Valoración de vida: La valoración de vida, como principio fundamental, impide que una persona reaccione de manera agresiva cuando se encuentra en desventaja numérica durante un enfrentamiento o situación hostil.",
                  "Desventaja numérica: Se considerará desventaja numérica cuando el número de oponentes supere en al menos un individuo a la persona afectada. En estos casos, la respuesta debe priorizar la preservación de la vida y evitar acciones que pongan en riesgo innecesario la integridad del personaje."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Cacheo'>
          <SubSectionContent reference='Cacheo'>
            <HeaderContent title='3. Cacheo' id='3'>
              Todo cacheo debe ser roleado correctamente siguiendo los procedimientos establecidos y respetando las limitaciones sobre objetos robables.
            </HeaderContent>

            <Content title='Procedimiento' id='3.1' spaced>
              <ListItemContent items={["Todo cacheo debe ser roleado correctamente utilizando los comandos /do y /me", "Está prohibido cachear a personas abatidas que se encuentren en la calle"]} />
            </Content>

            <Content title='Objetos No Robables' id='3.2' spaced>
              <ListItemContent
                items={[
                  "Armamento reglamentario Policia (Porra, Taser y Pistola Glock-17)",
                  "Placas",
                  "Tablets (Policía/EMS)",
                  "Cupones de Tuneos",
                  "Cupones de premios",
                  "Control remoto de televisores",
                  "Comida y bebestibles"
                ]}
              />
            </Content>

            <ContentFooter>
              Cualquier objeto que NO esté en la lista de objetos robables puede ser sustraído pero deberán tener en cuenta la sobrecarga de inventario a la hora de robar.
              <br />
              <br />
              <span className='font-bold'>Robar objetos prohibidos será sancionado administrativamente.</span>
            </ContentFooter>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Uso De Entornos'>
          <SubSectionContent reference='Uso De Entornos'>
            <HeaderContent title='4. Uso De Entornos' id='4'>
              El uso de entorno es OBLIGATORIO para todo acto delictual y se debe de enviar ANTES de iniciar el acto.
              <br />
              <br />
              Al enviar entornos siempre deben se redactados en TERCERA PERSONA (Esto aplica para /911, /911n y /911ems) el cual debe indicar las siguientes especificaciones: Cantidad de sujetos
              realizando acto y su género, el acto el cual está realizando o que le habría sucedido, color de vestimentas, vehículo en el cual se movilizan (modelo y color), en caso de acto delictual
              especificar armamento (calibre) si no se especifica calibre la policía podrá utilizar calibre alto.
            </HeaderContent>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Ejemplos de Entornos'>
          <SubSectionContent reference='Ejemplos de Entornos'>
            <HeaderContent title='4.1 Ejemplos de entornos correctos' id='4.1'>
              A continuación se presentan ejemplos de entornos correctamente redactados que cumplen con todos los requisitos establecidos.
            </HeaderContent>

            <Content title='Ejemplos' id='4.1' spaced>
              <ListItemContent
                items={[
                  "/911 Se verían 3 sujetos vestidos completamente de rojo en un Auto negro robando un banco Fleeca con medio calibre, por favor vengan rápido!",
                  "/911 Alooo, soy la señora Juana de la esquina, veo a 5 sujetos vestidos de azul abatiendo policías con bajo calibre, se movilizaban en una moto deportiva roja.",
                  "/911ems Alo doctores, veo a una mujer vestida de color celeste inconsciente, al parecer se cayó de gran altura, ayúdenla por favor.",
                  "/911ems Hola doctores! Soy la señora Marta y estoy viendo a 2 sujetos abatidos, al parecer les dispararon, estarían vestidos de morado, por favor su ayuda."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Obligatoriedad del Entorno'>
          <SubSectionContent reference='Obligatoriedad del Entorno'>
            <HeaderContent title='4.2 Obligatoriedad del Entorno' id='4.2'>
              Todo acto delictivo requiere el envío de un entorno previo, salvo excepciones establecidas, para asegurar el correcto desarrollo del roleplay.
            </HeaderContent>

            <Content title='El entorno es obligatorio en:' id='4.2' spaced>
              <ListItemContent items={["Venta De Drogas", "Venta De Armas", "Robos", "Secuestros", "Tiroteos", "Cualquier Transacción Que Involucre Objetos De Connotación Ilegal"]} />
            </Content>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Entorno en Laboratorios'>
          <SubSectionContent reference='Entorno en Laboratorios'>
            <HeaderContent title='4.3 Entorno en Laboratorios y Farmeo de Drogas' id='4.3'>
              ➢ En caso de los laboratorios y farmeos de drogas (Zonas Naranjas) se deberá tirar el entorno 100m antes de llegar al lugar y al finalizar deberán esperar 1 minuto antes de salir del
              lugar
              <br />
              <br />➢ El entorno debe incluir las características del vehículo utilizado para que la policía pueda realizar la búsqueda dentro del tiempo máximo establecido.
            </HeaderContent>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Entorno en Roles Espontáneos'>
          <SubSectionContent reference='Entorno en Roles Espontáneos'>
            <HeaderContent title='4.4 Entorno en Roles Espontáneos' id='4.4'>
              ➢ En situaciones imprevistas como tiroteos en los que la policía dispara primero, el entorno debe enviarse máximo 10 segundos después de finalizado el enfrentamiento.
              <br />
              <br />➢ Se deben incluir en el entorno a todos los sujetos no abatidos, permitiendo que la policía realice la búsqueda respetando la regla del +1.
            </HeaderContent>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Errores en el Entorno'>
          <SubSectionContent reference='Errores en el Entorno'>
            <HeaderContent title='4.5 Errores en el Entorno' id='4.5'>
              Si se envía un entorno inicial y luego se envía otro modificando el primero, solo se tomará en cuenta el PRIMER ENTORNO.
              <br />
              <br />
              Si el error en el entorno está relacionado con la cantidad de sujetos o el calibre del arma, los delincuentes deberán compensarlo negociando con los rehenes.
              <br />
              <br />
              Por ejemplo, si en el entorno se mencionó un calibre más alto o más bajo del realmente utilizado, o un número menor de sujetos, los delincuentes deberán usar rehenes para equilibrar la
              situación real derivada del entorno erróneo.
            </HeaderContent>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Vehículos Modificados'>
          <SubSectionContent reference='Vehículos Modificados'>
            <HeaderContent title='5. Vehículos Modificados' id='vehi-mod'>
              Queda prohibido el uso de Nitro, blindaje en carrocería y blindaje en ruedas en los vehículos; si un vehículo es sorprendido con alguna de estas modificaciones y se da a la fuga, se
              colocará en búsqueda por su patente, y en caso de detención, se aplicará una multa y el vehículo será llevado al mecánico para retirar la modificación.
            </HeaderContent>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Búsqueda de Vehículos'>
          <SubSectionContent reference='Búsqueda de Vehículos'>
            <HeaderContent title='6. Búsqueda de Vehículos' id='6'>
              En caso de un rol delictivo donde la policía pierda de vista al perseguido, la búsqueda del vehículo podrá prolongarse por un máximo de 15 minutos. La persona involucrada no podrá
              cambiar de vehículo o guardarlo sin enviar el entorno correspondiente de cambio de vehículo o abandono del mismo. Del mismo modo, si se envía un entorno con la descripción del vehículo,
              la búsqueda se llevará a cabo por el mismo periodo de tiempo.
            </HeaderContent>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Búsqueda de Sujetos'>
          <SubSectionContent reference='Búsqueda de Sujetos'>
            <HeaderContent title='7. Búsqueda de Sujetos' id='6'>
              En caso de un rol delictivo donde los sospechosos logren escapar y sean perdidos de vista, la búsqueda deberá realizarse por un máximo de 15 minutos. Si durante un enfrentamiento varios
              delincuentes son abatidos, pero aún quedan uno o dos en la escena, estos tendrán un plazo de 10 minutos para manifestar su presencia, ya sea siendo vistos o realizando disparos. Si
              transcurrido este tiempo no hay indicios de su continuidad en el rol, se podrá proceder con el procesamiento de los compañeros abatidos.
            </HeaderContent>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Límite de Velocidad en Ciudad'>
          <SubSectionContent reference='Límite de Velocidad en Ciudad'>
            <HeaderContent title='8. Límite de Velocidad en Ciudad' id='7'>
              Las velocidades máximas permitidas varían según la zona para mantener el realismo y la seguridad en el roleplay delictual.
            </HeaderContent>

            <Content title='Velocidades Permitidas' id='7.1' spaced>
              <ListItemContent
                items={[
                  "Zona urbana central (rectángulo azul en el mapa): Máximo 120 km/h (incluye comisaría, hospital, municipalidad y talleres mecánicos). Resto de la ciudad: Máximo 170 km/h",
                  "Carreteras principales (marcadas en amarillo en el mapa): Máximo 300 km/h",
                  "Zonas urbanas en el norte (Paleto y Sandy Shores): Máximo 180 km/h"
                ]}
              />
            </Content>
            <div className='my-6 flex justify-center'>
              <Image src={"/mapa.avif"} alt={"Mapa de velocidades"} width={900} height={900} className='rounded-lg shadow-lg' />
            </div>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Control y Fiscalización'>
          <SubSectionContent reference='Control y Fiscalización'>
            <HeaderContent title='9. Control y Fiscalización' id='8'>
              La policía podrá fiscalizar vehículos que excedan estos límites y utilizar radares para identificar vehículos.
              <br />
              <br />
              Si un vehículo es detectado superando el límite por control, radar o helicóptero, se podrá iniciar una búsqueda por un máximo de 15 minutos.
            </HeaderContent>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Reglas en Actos Delictuales'>
          <SubSectionContent reference='Reglas en Actos Delictuales'>
            <HeaderContent title='10. Reglas en Actos Delictuales' id='9'>
              La velocidad máxima permitida en situaciones delictivas es de 250 km/h, con un margen de error de hasta 10 km/h debido a variaciones por saltos.
              <br />
              <br />
              Si un vehículo supera esta velocidad, la policía podrá desplegar un interceptor.
              <br />
              <br />
              En caso de utilizar un vehículo prohibido para actos delictivos o huir de un control de tránsito, se aplicará una sanción administrativa adicional.
            </HeaderContent>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Persecuciones y Cruce de Frontera'>
          <SubSectionContent reference='Persecuciones y Cruce de Frontera'>
            <HeaderContent title='11. Persecuciones y Cruce de Frontera' id='10'>
              Si un rol se inicia en una zona y, durante la persecución, el delincuente cruza la frontera bloqueada, la policía podrá solicitar apoyo de 2 oficiales adicionales.
            </HeaderContent>

            <Content title='Condiciones de la Intervención Policial en caso de cruzar Frontera' id='10.1' spaced>
              <ListItemContent
                items={[
                  "Frontera bloqueada: Se permite la intervención policial inmediata, ya que el cruce de una frontera con control policial representa un acto de alta gravedad (bloqueo tiene un RDE)",
                  "Frontera no bloqueada: La persecución sigue a cargo de la policía original, pero deberán informar internamente a la policía de la nueva zona"
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Medios de Cruce Alternativos'>
          <SubSectionContent reference='Medios de Cruce Alternativos'>
            <HeaderContent title='12. Medios de Cruce Alternativos' id='11'>
              Si el cruce de frontera se realiza por medios distintos (aéreos, acuáticos u otros que no impliquen atravesar una frontera bloqueada), los delincuentes deberán enviar un entorno. En este
              caso, la policia podra solicitar las unidades que sean necesarias para terminar la persecución.
            </HeaderContent>

            <Content title='' id='11.1' spaced>
              <ListItemContent
                title='Ejemplo'
                description='  Si la persecución inició con 4 oficiales de la LSPD, al cruzar la frontera podrán sumarse 2 
            oficiales de la LSPD extras.'
              />
            </Content>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Uso de Vestimenta y Fiscalización Policial'>
          <SubSectionContent reference='Uso de Vestimenta y Fiscalización Policial'>
            <HeaderContent title='13. Uso de Vestimenta y Fiscalización Policial' id='12'>
              Como se indica en la normativa sobre vestimenta, el uso de cascos y chalecos antibalas presume una intención delictiva y solo está permitido en ciertos lugares. Por lo tanto, llevar
              estos elementos en la ciudad dará lugar a una fiscalización policial completa.
              <br />
              <br />
              Asimismo, el uso de máscara es motivo suficiente para un control policial, el cual puede derivar en la revisión de pertenencias y vehículos si la persona fiscalizada tiene multas
              pendientes.
            </HeaderContent>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Intento de Detención Vehicular con Fines Delictuales'>
          <SubSectionContent reference='Intento de Detención Vehicular con Fines Delictuales'>
            <HeaderContent title='14. Intento de Detención Vehicular con Fines Delictuales' id='13'>
              En caso de que un sujeto intente detener un vehículo con fines delictivos (robo o secuestro), el simple hecho de decir "párate" o "detente" no es una amenaza suficiente para obligar la
              detención.
            </HeaderContent>

            <Content title='Sin embargo:' id='13.1' spaced>
              <ListItemContent
                items={[
                  "Si el sujeto saca un arma por la ventana, esto sí representa un riesgo inmediato, por lo que se debe detener el vehículo en valoración de vida",
                  "Si el conductor no se detiene, el atacante estará facultado para disparar a las ruedas, siempre enviando el entorno correspondiente",
                  "Si el camino es bloqueado con un vehículo y los atacantes bajan apuntando, se debe cooperar, ya que la valoración de vida obliga a acatar la amenaza"
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Enfrentamientos Armados cerca de Lugares con RDE'>
          <SubSectionContent reference='Enfrentamientos Armados cerca de Lugares con RDE'>
            <HeaderContent title='15. Enfrentamientos Armados cerca de Lugares con RDE (Rol de Entorno) Gubernamental' id='14'>
              En caso de un enfrentamiento armado cerca de lugares que cuenten con RDE gubernamental (es decir, zonas con seguridad establecida), se deja claro que esto faculta a la policía a terminar
              el conflicto sin considerar la igualdad numérica de las organizaciones involucradas.
            </HeaderContent>

            <Content title='' id='14.1' spaced>
              <ListItemContent title='Lugares con RDE gubernamental incluyen' items={["Comisarías (incluso aquellas que no están en uso)", "Merryweather y Humane Labs"]} />
            </Content>

            <Content title='' id='14.2' spaced>
              <ListItemContent
                title='Es importante destacar que sólo se considerará como vulneración al RDE el perímetro completo de estas zonas, es decir:'
                items={[
                  "A partir de una cuadra de distancia de la comisaría o cualquier otro área con RDE, las reglas de seguridad no tendrían validez",
                  "En el caso de una comisaría, solo se considera el perímetro completo y las calles que la rodean"
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Tiroteos en Vehículos'>
          <SubSectionContent reference='Tiroteos en Vehículos'>
            <HeaderContent title='16. Tiroteos en Vehículos' id='15'>
              Reglas específicas para el desarrollo de tiroteos que involucren vehículos en movimiento o estacionados.
            </HeaderContent>

            <Content title='' id='15.1' spaced>
              <ListItemContent
                title='Disparos desde un vehículo:'
                items={[
                  "Solo está permitido disparar a las ruedas de otro vehículo cuando se está en movimiento",
                  "Los delincuentes deben enviar el entorno correspondiente antes de iniciar los disparos",
                  "La policía debe seguir su protocolo establecido antes de realizar disparos a las ruedas"
                ]}
              />
            </Content>

            <Content title='' id='15.2' spaced>
              <ListItemContent
                title='Disparos para abatir desde vehículos:'
                items={[
                  "Delincuente: Para disparar a los oficiales, primero deben enviar el entorno, detener el vehículo y bajarse antes de abrir fuego",
                  "Policías: Solo pueden disparar a matar a sospechosos en un vehículo si, tras un choque se bajan a apuntar a los delincuentes estos intentan huir y los oficiales apuntando son los únicos presentes en el lugar. Si hay más oficiales en el lugar y estos permanecen en sus patrullas, la persecución debe continuar en lugar de abrir fuego"
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Prioridades y Procedimientos en Entornos Delictuales'>
          <SubSectionContent reference='Prioridades y Procedimientos en Entornos Delictuales'>
            <HeaderContent title='17. Prioridades y Procedimientos en Entornos Delictuales con Múltiples Sujetos y Vehículos' id='16'>
              En situaciones donde un entorno delictual involucre múltiples sujetos en distintas ubicaciones y vehículos (ejemplo: robo con huida y cómplices externos bloqueando calles), se deberán
              seguir las siguientes prioridades y reglas:
            </HeaderContent>
            <Content title='' id='16.1' spaced>
              <ListItemContent
                title='La prioridad de la persecución policial será sobre los sujetos que huyen del lugar del robo.'
                items={[
                  "La búsqueda de los sujetos externos sólo será prioritaria si estos son identificados como tiradores.",
                  "Si los sujetos externos al robo se involucran activamente en la situación, la policía podrá iniciar su persecución."
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Especificaciones del Entorno Detallado'>
          <SubSectionContent reference='Especificaciones del Entorno Detallado'>
            <HeaderContent title='18. Especificaciones del Entorno Detallado' id='17'>
              Para evitar confusiones y asegurar un desarrollo claro del rol, el entorno enviado debe ser lo más detallado posible, especificando todos los elementos relevantes de la situación
              delictiva.
            </HeaderContent>

            <Content title='Información obligatoria en el entorno:' id='21.1' spaced>
              <ListItemContent
                items={[
                  "Cantidad de sujetos involucrados y vestimenta de los sospechosos",
                  "Armas y calibre portado por cada participante",
                  "Propósito específico de cada sujeto en la escena",
                  "Características de los vehículos utilizados (modelo, color, estado y cualquier distintivo visible como vidrios polarizados, modificaciones o matrículas visibles o alteradas)"
                ]}
              />
            </Content>

            <ContentFooter>
              Una vez enviado el entorno e iniciado el rol delictivo, y teniendo claros los involucrados, no se podrán añadir más personas al rol ya en curso. La única excepción será si uno de los
              sujetos involucrados logra escapar y solicita apoyo, en cuyo caso podrá regresar a buscar a sus compañeros abatidos, siempre que envíe un nuevo entorno que lo indique.
              <br />
              <br />
              En el caso de una persecución iniciada de forma espontánea, como un control de tránsito seguido de una fuga, el sujeto podrá enviar un entorno indicando que, tras un control vehicular,
              se da a la fuga con la intención de reunirse con "X" compañeros para recibir apoyo en un posible tiroteo, respetando siempre la disponibilidad. Si el entorno no es enviado, la policía no
              estará obligada a respetar el +1.
            </ContentFooter>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Negociaciones'>
          <SubSectionContent reference='Negociaciones'>
            <HeaderContent title='19. Negociaciones' id='18'>
              Una vez realizada la negociación con la LSPD/LSSD, se respetará el acuerdo siempre que no se incurra en una falta que lo invalide. La policía deberá emitir avisos antes de tomar medidas
              drásticas de detención, como el uso de pinchos, la maniobra PIT o el código Robert.
              <br />
              <br />
              Si la negociación se rompe por alguna de las causales establecidas, la policía quedará exenta del protocolo de avisos y podrá proceder a la detención por la fuerza. Además, si dentro del
              acuerdo se establece igualdad numérica entre policías y delincuentes, se permitirá la incorporación de un oficial adicional, ya que la ruptura de la negociación anula todos los términos
              pactados. (más información sobre este punto en la normativa policial)
            </HeaderContent>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Secuestros'>
          <SubSectionContent reference='Secuestros'>
            <HeaderContent title='20. Secuestros' id='19'>
              Los secuestros son actividades delictivas que requieren un desarrollo cuidadoso y el cumplimiento de requisitos específicos de disponibilidad según el tipo de objetivo.
            </HeaderContent>

            <Content title='Disponibilidad Policial' id='19.1' spaced>
              <ListItemContent
                items={[
                  "Civiles: Se puede secuestrar siempre que exista disponibilidad policial y se respete el +1 policial. Es decir, si hay 2 secuestradores, deben haber al menos 3 policías disponibles",
                  "Policía/Sheriff: Se requiere un mínimo de 7 efectivos disponibles (contando al secuestrado)",
                  "EMS: Para secuestrar a un EMS, deben haber al menos 7 EMS disponibles"
                ]}
              />
            </Content>

            <ContentFooter>
              <span className='font-bold'>Duración:</span>
              <br />
              El secuestro puede durar un máximo de 30 minutos, salvo que exista un rol de peso previo, en cuyo caso podrá extenderse hasta 45 minutos.
            </ContentFooter>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Tipos de Secuestro'>
          <SubSectionContent reference='Tipos de Secuestro'>
            <HeaderContent title='21. Tipos de Secuestro' id='20'>
              Existen diferentes tipos de secuestro según su propósito y desarrollo dentro del roleplay, cada uno con sus propias reglas y limitaciones específicas.
            </HeaderContent>

            <Content title='' id='20.1' spaced>
              <ListItemContent
                title='Secuestro para uso como rehén en un acto delictivo'
                items={["Debe ser breve", "Solo se requiere enviar el entorno al momento del secuestro sin mayores detalles"]}
              />
            </Content>

            <Content title='' id='20.2' spaced>
              <ListItemContent
                title='Secuestro con otros fines (tortura, interrogatorio, etc.)'
                items={[
                  "Se debe especificar en el entorno que se está secuestrando a alguien y trasladándose a otro lugar",
                  "Debe incluir detalles sobre los sujetos, vehículo y armas",
                  "Durante el traslado, se deben enviar dos entornos adicionales de seguimiento",
                  "Es obligatorio rolear de forma adecuada el sometimiento y la eliminación de comunicaciones",
                  "Para roles sensibles, se debe solicitar autorización. Solo se podrá negar por razones válidas"
                ]}
              />
            </Content>

            <Content title='' id='20.3' spaced>
              <ListItemContent
                title='Secuestro de Oficiales'
                items={[
                  "En caso de secuestro de más de un oficial, ya sea del Sheriff o LSPD, se elevará la alerta en la zona. Esto significa que no será necesario emitir avisos previos para la detención de los sospechosos",
                  "Se debe priorizar la vida de los oficiales secuestrados, por lo que queda prohibido abrir fuego contra el vehículo en movimiento con el objetivo de detenerlo, debido al alto riesgo que esto representa",
                  "Se permitirá el uso de bloqueos estratégicos para impedir su escape. En caso de que un bloqueo sea efectivo y los sospechosos queden rodeados, estos deberán descender del vehículo y proceder a negociar en el lugar, sin posibilidad de continuar hasta su destino"
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Reglas Generales'>
          <SubSectionContent reference='Reglas Generales'>
            <HeaderContent title='22. Reglas Generales' id='21'>
              Reglas adicionales que se aplican a todos los tipos de secuestro dentro del servidor.
            </HeaderContent>

            <Content title='Reglas obligatorias:' id='21.1' spaced>
              <ListItemContent
                items={[
                  "El rehén o sujeto secuestrado debe ir sentado en un asiento del vehículo; está prohibido llevarlo cargado en los hombros",
                  "Si se dispara a un rehén, la negociación se interrumpe y ambas partes deben prepararse para un tiroteo"
                ]}
              />
            </Content>
          </SubSectionContent>
        </SectionContent>
      </div>
    </div>
  )
}

export default NormativaDelictual
