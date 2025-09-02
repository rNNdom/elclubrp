import { ListItemContent, Content } from "@/components/sections"

function ReglasLSPD(){
    return <div>
        <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Concepto'>
        <span className="font-bold">👮 Reglas LSPD </span>
        </h2>
<Content title='Reglas del cuerpo policial ' id='1' spaced>
              <ListItemContent
                items={[ 
                    "Fuera de servicio: Fuera de servicio está permitido portar el arma de servicio y la placa correspondiente de cada oficial desde el rango OFICIAL II. Los rango inferiores a este únicamente pueden portar su placa. Y es obligación para estos dejar todo su equipo en comisaría al salir de servicio. ",
                    "Testigo visual: En caso de estar fuera de servicio y ser testigo de algún hecho delictivo es obligación de cada oficial notificar esto por su radio de servicio. En caso de que el oficial cumpla el rango mínimo para portar su arma de servicio deberá intervenir sin poner su vida en riesgo mientras llegan los refuerzos. Al igual manera los oficiales se ven obligados a prestar declaraciones en caso de ser necesario.",
                    "No se tiene derecho a guardar silencio: Si una investigación es abierta y un oficial es interrogado este no tendrá derecho a guardar silencio. Si decide hacerlo resultará en la desvinculación inmediata del cuerpo con la apertura de una investigación oficial por parte de asuntos internos. Lo que podría resultar en una condena.",
                    "Convivencia: Es obligación para todos los oficiales mantener la sana convivencia, en caso de existir un conflicto entre oficiales se le deberá notificar a un rango superior tal como Sargento II para intentar mediar con el altercado. Si no se encontrase una solución para esta situación se entregará el reporte directamente a asuntos internos.",
                    "Seriedad: La policía es sumamente importante y vulnerable frente a la prensa y ciudadanía. Por lo que es fundamental la seriedad dentro de esta. Esto quiere decir que no se permitirán conductas que no vayan acorde a nuestra responsabilidad, resultando en medidas drásticas como la expulsión del cuerpo o degradación de rango.",
                    "Llamados: Los llamados serán siempre asignados por los Sargentos de turno. Mediante el sistema de Dispatch. Los oficiales que se asignen de manera individual a los llamados serán sancionados. Solo es permitido informar a central sobre la cercanía a la que se encuentran en caso de estar cerca del llamado MAX 700 MTS. (Se debe respetar el +1) ",
                    "Asignación: Los Sargentos de turno designados por el capitán de turno. Deberán asignar a las unidades de patrullaje correspondiente a los oficiales de categoría B2. Quien no respete una asignación directa de un Sargento recibirá una sanción administrativa en el expediente disminuyendo las posibilidades de optar a rangos mayores o el ingreso a las diversas divisiones ofrecidas por la LSPD ",
                    "Ordenes directas: No solo se deberá respetar a los sargentos. Entendemos que los rango superiores tienen el poder de mandar a los inferiores siempre y cuando tengan razones justificadas y sean respetuosos al hacerlo, en caso de que un superior sea hostil o descortés puede ser directamente denunciado a sus superiores. De igual forma el no obedecer una orden directa de un superior resultará en una sanción acorde al desacato",
                    "Evaluación y rangos: Todos los oficiales deberán rendir exámenes de rango para ascender. Para rendir estos exámenes los oficiales serán evaluados constantemente de forma incógnita. Es decir, en cualquier momento podrán estar siendo evaluados sin ser notificados con la intención de ver su desempeño en un turno ordinario sin que sea modificado por interés. Los oficiales que exigen o piden ascensos injustificados “Llevo mucho tiempo” serán aplazados en su evaluación. Estas evaluaciones serán tomadas directamente por el Jefe de policía."
                ]}  
              />
    </Content>
    <Content title='Uniformes y equipos' id='2' spaced>
              <ListItemContent
                items={[
                    "Uniformes: Los oficiales deben llevar siempre el uniforme correspondiente a su rango y función. El uso adicional de armas o equipo especializado, debe ser acorde a la situación, justificado y autorizado por un Sargento de turno o capitán. (Está prohibido desempeñar otro rol mientras se esté con ropa de policía. El incumplimiento será sancionado disciplinariamente) ",
                    "Vehículos de Policía: Los oficiales que sean sorprendidos conduciendo de forma imprudente, no cuidando o haciendo uso incorrecto de las patrullas serán desvinculados sin posibilidad de apelación.",
                    "Armas: Solo está permitido portar bajo calibre, en caso de situaciones de mayor calibre serán notificados y autorizados por un Sargento al mando."
                ]}  
            />
    </Content>
    </div>
}

export default ReglasLSPD