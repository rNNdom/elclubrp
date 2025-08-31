import { SubSectionContent, HeaderContent, Content, ListItemContent, ContentFooter } from "@/components/sections"

function AlertasDerechos(){
    return <div>        
    <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Concepto'>
    <span className="font-bold">📜 Protocolos de Alerta Policial</span>
    </h2>
        <br /><br />
        <Content title='Alerta Verde (Nivel Bajo)' id='1' spaced>
              <ListItemContent
                items={[
                    "La ciudad se encuentra en calma y bajo control. ",
                    "Los oficiales deben mantener sus armas enfundadas y continuar con sus tareas habituales.",
                    "Se permite únicamente el uso de armamento no letal o de bajo calibre.",
                    "Todo el personal debe estar atento, pero sin alterar sus rutinas normales. "
                ]}  
              />
    </Content> 
    <Content title='Alerta Amarilla (Nivel Medio)' id='2' spaced>
              <ListItemContent
                items={[
                    "Existe un aumento en la actividad criminal, como múltiples avisos en poco tiempo.",
                    "También se activa en caso de secuestro de un civil o un oficial de menor rango.",
                    "Todos los oficiales deben suspender tareas secundarias y salir a patrullar activamente.",
                    "Se autorizan controles e identificaciones a civiles sospechosos. ",
                    "El personal debe portar armamento de calibre bajo y medio, pero su uso estará limitado a calibre bajo salvo casos extremos."
                ]}  
              />
    </Content> 
    <Content title='Alerta Naranja (Nivel Alto) ' id='3' spaced>
        Se declara cuando:
              <ListItemContent
                items={[
                    "Ocurre el secuestro de dos o más oficiales, o más",
                    "Se secuestra a un oficial de rango Teniente o superior",
                    "Todos los civiles en las calles deberán identificarse obligatoriamente; la negativa podrá derivar en arresto. ",
                    "Se autoriza a los oficiales a portar y utilizar armamento de calibre medio.",
                    "El equipo SWAT inicia preparativos de despliegue en puntos estratégicos."
                ]}  
              />
    </Content> 
    <Content title='Alerta Roja (Nivel Crítico)' id='4' spaced>
              <ListItemContent
                items={[
                    "Se declara cuando la actividad criminal es incontrolable y representa un riesgo grave para la ciudad.",
                    "Ningún civil debe permanecer en las calles. Aquellos que sean encontrados serán cacheados y detenidos preventivamente.",
                    "Todos los oficiales deberán portar armamento de calibre medio a alto, con autorización para su uso inmediato.",
                    "El equipo SWAT es desplegado completamente."
                ]}  
              />
    </Content>
    <SubSectionContent reference='Derechos Miranda '>
        <HeaderContent title='Derechos Miranda' id='5'>
        <p className="italic">(LOS DERECHOS NO SE PUEDEN MODIFICAR, Y TAMPOCO DEBERÁ FALTAR NINGUNO.)</p>
        <br /><br />
        Los Derechos Miranda protegen a las personas que se encuentran detenidas. Dichos 
        derechos deberán ser leídos ANTES de ser ingresadas a comisaría (máx. 3 veces si el 
        sujeto no comprende), de lo contrario el sujeto tiene todo derecho de reclamarlo, y podrá 
        ser liberado sin ningún cargo en su contra. 
        </HeaderContent>
      </SubSectionContent>
    <SubSectionContent reference='Leer Derechos Miranda '>
        <HeaderContent title='Leer: Derechos Miranda' id='6'>
        <p className="italic">"Tiene derecho a guardar silencio; todo lo que diga podrá ser usado en su contra. Tiene 
        derecho a un abogado, pero este derecho le será revocado si fue sorprendido en flagrante 
        delito. Tiene derecho a agua, comida y asistencia médica en caso de requerirla. Tiene 
        derecho a conocer el delito que se le imputa y la condena correspondiente. Tiene derecho a 
        una llamada telefónica de no más de un minuto en presencia de un oficial de policía y 
        siempre en altavoz." </p>
        </HeaderContent>
      </SubSectionContent>
    </div>
}

export default AlertasDerechos