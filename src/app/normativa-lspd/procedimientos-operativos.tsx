import { SubSectionContent, HeaderContent, Content, ListItemContent, ContentFooter } from "@/components/sections"

function ProcedimientosLSPD(){
    return <div>
        <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Concepto'>
        <span className="font-bold">🚔 Procedimiento en operativos </span>
        </h2>
        <SubSectionContent reference='Actuar en emergencias'>
        <HeaderContent title='Actuar en emergencias ' id='1'>
        • Priorización de situaciones: En situaciones de emergencia, los oficiales deben actuar 
rápidamente y priorizar la seguridad pública. El comportamiento debe ser racional y siempre 
considerar la seguridad de los civiles y otros oficiales.
<br /><br />
• Comunicación: Los oficiales deben usar las comunicaciones de radio de manera efectiva 
y no abusiva. Deben dar actualizaciones sobre la situación en curso y seguir las 
instrucciones de sus supervisores. 
        </HeaderContent>
      </SubSectionContent>
      <SubSectionContent reference='Procedimiento de Detención '>
        <HeaderContent title='Procedimiento de Detención ' id='2'>
        <Content title='Detención de un sujeto no abatido: ' id='2.1' spaced>
              <ListItemContent
                items={[
                    "Se procede a esposarlo.",
                    "Se traslada a la comisaría.",
                    "Antes de ingresar, se le deben leer sus derechos y preguntar si los comprende.",
                    "Si el sujeto afirma, se procede con el ingreso. ",
                    "Si no responde o no confirma, se pueden leer nuevamente hasta un máximo de tres veces; si sigue sin responder, se considerarán aceptados. "
                ]}  
              />
    </Content>
    <Content title='Detención de un sujeto abatido: ' id='2.2' spaced>
              <ListItemContent
                items={[
                    "Lo primero es trasladarlo a recibir atención médica.",
                    "No se esposa a sujetos abatidos hasta que hayan sido atendidos por personal médico."
                ]}  
              />
    </Content>
    <Content title='Revisión de pertenencias:' id='2.3' spaced>
              <ListItemContent
                items={[ 
                    "Se realiza una vez que el sujeto ha ingresado a la comisaría.",
                    "Todo el procedimiento debe ser correctamente roleado con los respectivos /me y /do."
                ]}  
              />
    </Content>
    <Content title='Ingreso a la cárcel: ' id='2.4' spaced>
              <ListItemContent
                items={[ 
                    "Antes de ser enviado a la cárcel y si el sujeto no hace la pregunta, la policía está obligada a informar los delitos, el valor de la multa y la condena que recibirá.",
                    "Luego de identificar al detenido, se procede a registrar la denuncia y aplicar la multa correspondiente. ",
                    "Posteriormente, es enviado a la cárcel. ",
                ]}  
              />
    </Content>
    <ContentFooter>
    En casos de robos de alta categoría (Banco Central, Yate, Humane, etc.), los 
    detenidos serán trasladados mediante rol a la cárcel, permitiendo la 
    posibilidad de un rescate en el proceso. 
    </ContentFooter>
        </HeaderContent>
      </SubSectionContent>
      <Content title='Uso De Fuerza ' id='3' spaced>
              <ListItemContent
                items={[
                    "Escalada de la fuerza: El uso de la fuerza debe ser proporcional al nivel de amenaza que representa el sospechoso. ",
                    "Verbal: Si es posible, primero se debe intentar mediar con el sospechoso..",
                    "No letal: En caso de resistencia o peligro moderado, el oficial puede recurrir al uso de su taser, técnicas de sujeción o la porra, según corresponda.",
                    "Letal: Solo se debe usar fuerza letal si hay una amenaza inminente para la vida de los oficiales o los civiles. El uso de armas de fuego debe ser siempre la última opción. (En un tiroteo está prohibido rematar si el sujeto no está dando información por radio)",
                    "Revisión de la situación: Después de cada uso de la fuerza, el oficial debe asegurarse que la amenaza fue neutralizada "
                ]}  
              />
    </Content>
    <ContentFooter>
Los oficiales solo podrán disparar primero en caso de inminente peligro, es decir, si 
un sujeto armado está apuntando o se observa claramente su intención de disparar 
o realizar un acto que ponga en riesgo la vida de oficiales o civiles. 
Si el sujeto levanta las manos, no podrá ser abatido y se puede proceder a 
esposar.  
    </ContentFooter>
    <Content title='Arrestos' id='4' spaced>
              <ListItemContent
                items={[
                    "Causa razonable: Los arrestos deben basarse en causas legales y razonables. Los oficiales deben identificar claramente los cargos o las razones para arrestar al individuo. ",
                    "Uso de esposas: Si un arresto es realizado, el oficial debe esposar al detenido de manera segura, sin causar daño innecesario (Los muertos no deben esposarse). ",
                    "Lectura de derechos: El oficial debe informar al detenido sobre sus derechos Miranda si la detención va a proceder a un arresto formal (derecho a un abogado, derecho a permanecer en silencio, etc.). ",
                    "Detenciones ilegales: Cualquier arresto sin causa probable o sin pruebas razonables de un delito puede dar lugar a sanciones graves. Comenzando desde suspensión sin paga. Hasta una desvinculación con apertura de una investigación de parte de asuntos internos. "
                ]}  
              />
    </Content>
    <SubSectionContent reference='Persecuciones Vehiculares '>
        <HeaderContent title='Persecuciones Vehiculares  ' id='5'>
        <h1 className="font-bold">Autorizaciones Para Persecuciones</h1>
        <br />
        Las persecuciones vehiculares solo deben iniciarse si se cumplen ciertos criterios, como un 
        delito o crimen en curso (robo, asesinato, etc.). Los oficiales deben evaluar el riesgo de la 
        persecución en función del tráfico y la seguridad pública.
        <br /><br />
        <h1 className="font-bold">Persecución espontánea</h1>
        <br />
        Durante una persecución espontánea, la policía deberá respetar la regla del +1 en función 
        del vehículo perseguido. Si el vehículo es de dos puertas, podrán participar en la 
        persecución un máximo de tres oficiales. Si el vehículo es de cuatro puertas, el límite será 
        de cinco oficiales
        <ContentFooter>
        En caso de que los sospechosos desciendan del vehículo y 
        abran fuego contra los oficiales, el uso del calibre policial 
        dependerá del tipo de armamento recibido:
        <br /><br />
        En la ciudad: Si los disparos no provienen de armas automáticas, se utilizará calibre bajo. 
        Si los disparos son automáticos, se podrá emplear calibre medio.
        <br /><br />
        En el norte: Se aplicará el mismo criterio, pero en lugar de calibre medio, se 
        permitirá el uso de calibre alto. 
        </ContentFooter>
        </HeaderContent>
      </SubSectionContent>
      <SubSectionContent reference='Protocolo de Detención:'>
        <HeaderContent title='Protocolo de Detención:' id='6'>
        <Content title='Avisos de Detención:' id='6.1' spaced>
              <ListItemContent
                items={[
                    "Durante la persecución, se emitirán tres avisos de detención, cada uno repetido tres veces con intervalos de 10 segundos entre cada repetición.",
                    "Esto significa que el proceso completo de avisos tomará aproximadamente 1 minuto con 30 segundos. ",
                    "Desde el inicio de los avisos, queda habilitado el Código 100 para reforzar la persecución."
                ]}  
              />
    </Content>
    <Content title='Maniobra PITT:' id='6.2' spaced>
              <ListItemContent
                items={[
                    "Si el sospechoso no se detiene tras los avisos, se informará que se procederá con la maniobra PITT. ",
                    "Se podrán realizar hasta tres (3) maniobras PITT correctamente ejecutadas antes de solicitar Código Robert. ",
                    "IMPORTANTE: Una PITT mal ejecutada (fallida o con un impacto excesivo) no será considerada válida para este conteo. ",
                    "Toda maniobra PITT debe buscar detener el vehículo sin causar un daño mayor."
                ]}  
              />
    </Content>
    <ContentFooter>
    Esta maniobra sólo se podrá usar cuando la persecución no exceda los 200 
    km/h en caso de excederse se pedirá permiso para el uso de Interceptor con 
    grappler 
    </ContentFooter>
    <Content title='Código Robert: ' id='6.3' spaced>
              <ListItemContent
                items={[
                    "Si tras las tres PITT bien ejecutadas el sospechoso sigue sin detenerse, se podrá solicitar autorización para el Código Robert. Es obligatorio recibir la aprobación antes de ejecutarlo. "
                ]}  
              />
    </Content>
    <Content title='Disparar desde un Vehículo: ' id='6.4' spaced>
              <ListItemContent
                items={[
                    "Está prohibido disparar a matar desde un vehículo en movimiento. Solo se permite abrir fuego exclusivamente a las llantas del vehículo si los sospechosos representan un peligro y Central lo autoriza. Solo se puede disparar si el vehículo se encuentra a una velocidad inferior a 60 km/h. "
                ]}  
              />
    </Content>
        </HeaderContent>
      </SubSectionContent>
      <Content title='Comportamiento en el campo' id='6.5' spaced>
              <ListItemContent
                items={[
                    "Actitud de Equipo: Los oficiales deben trabajar como parte de un equipo. Las decisiones deben ser tomadas en conjunto y siempre debe prevalecer la seguridad y el bienestar de todos los involucrados.",
                    "Reportes y Supervisión: Todos los oficiales deben mantener registros de sus actividades, especialmente cuando estén involucrados en situaciones delicadas o que puedan ser objeto de revisión. "
                ]}  
              />
    </Content>
    </div>

}

export default ProcedimientosLSPD