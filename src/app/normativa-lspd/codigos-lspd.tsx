import { SubSectionContent, HeaderContent, ListItemContent, ContentFooter, Content } from "@/components/sections"


function CodigosLSPD(){
    return <div>
        <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Concepto'>
        <span className="font-bold">☢️ Códigos</span>
        </h2>
        <h1 className="font-bold">Los <span className="font-bold text-red-600">CÓDIGOS RADIALES POLICIALES</span> son sistemas de comunicación que utilizamos 
        con claves numéricas o frases cortas para transmitir información de manera rápida, 
        clara y eficiente, especialmente en operaciones de emergencia. A continuación 
        haremos mención de los siguientes códigos que serán utilizados en nuestra 
        comisaría.</h1>
        <br /><br />
        <Content title='Códigos Policiales:' id='2' spaced>
              <ListItemContent
                items={[
                    "10-00: Proceder con precaución",
                    "10-04: Información copiada/recibida.",
                    "10-05: Negativo.",
                    "10-06: Ocupado/a.",
                    "10-08: En espera de asignación.",
                    "10-09: Repetir el último mensaje.",
                    "10-10: Fuera de servicio.",
                    "10-20: Ubicación/Posición.",
                    "10-22: En camino a comisaría.",
                    "10-23: Mantenerse a la espera",
                    "10-26: Desatender el último reporte.",
                    "10-31: Persona sospechosa / implicada.",
                    "10-32: Se requiere una unidad policial adicional.",
                    "10-40: Informe de situación. ",
                    "10-49: Agente caído / herido.  ",
                    "10-50: Venta de droga.",
                    "10-74: Negativo.  ",
                    "10-80: Reunirse en… ",
                    "10-86: Control de tráfico.",
                    "10-90: Falsa Alarma ",
                    "10-97: Llegada a la zona. ",
                    "10-99: Aviso finalizado.",
                    "10-200: Solicitud de refuerzos urgente."                   
                ]}  
              />
            </Content>
            <Content title='Códigos Radiales' id='3' spaced>
              <ListItemContent
                items={[
                    "Código 0: Llamado urgente, dejar trabajos e asistir a situación ",
                    "Código 2: Respondiendo al aviso con luces. Se respeta el tráfico si fuese necesario, no es una emergencia urgente. ",
                    "Código 3: Respondiendo al aviso con luces y sirenas. No se respeta el tráfico, pero se procede con cautela en cruces e intersecciones, es una emergencia urgente.",
                    "Código 4: Situación controlada. ",
                    "Código 4 Adam: Búsqueda de persona o vehículo sospechoso, se reporta todos los datos relevantes que se sepan.",
                    "Código 5: Mantenerse fuera de la zona, no pasar hasta nuevo aviso.  ",
                    "Código 6: En investigación.",
                    "Código 6 Adam: Emergencia urgente, se requieren todas las unidades en el lugar. (Todas las unidades deberán de dejar sus asignaciones y asistir al lugar, se procede en código 3) ",
                    "Código 7: Pausa/Descanso.",
                    "Código 8: Se requiere ambulancia. ",
                    "Código Charlie: Silencio en radio. ",
                    "Código 37: Vehículo robado. ",
                    "Código 77: Alerta, posible emboscada.",
                    "Código Pit: Inmovilizar vehículos durante una persecución.",
                    "Código 100: En posición de bloqueo."
                ]}  
              />
            </Content>
            <Content title='Códigos Penales' id='4' spaced>
              <ListItemContent
                items={[
                    "BYC: Búsqueda y Captura.",
                    "148: Resistencia al arresto.",
                    "207: Secuestro.",
                    "210: Parada de tráfico.",
                    "211: Robo a mano armada. ",
                    "215: Tiroteo en curso. ",
                    "245: Asalto con armas Mortal",
                    "254-Víctor: Persecución en vehículo. ",                  
                    "254-Papa: Persecución a pie. ",
                    "288: Conducta obscena/alteración ",
                    "311: Exhibicionismo.",
                    "320: Venta de droga.",
                    "415: Disturbios/peleas  ",
                    "417: Persona armada. ",
                    "444: Disparos con agentes implicados.",
                    "459: Allanamiento. ",
                    "487: Robo mayor.",
                    "487: Robo de vehículo.",
                    "488: Robo menor o mediano.",
                    "510: Carrera o exceso de velocidad.",
                    "QRR: Agente solicita ayuda inmediata."
                ]}  
              />
            </Content>
            <Content title='Otros Códigos' id='5' spaced>
              <ListItemContent
                items={[
                    "Clave Robert: Si la vida del oficial está en peligro o recibe disparos, puede activarse de inmediato, sin necesidad de cumplir las advertencias. ",
                    "Shorts fired: Disparos efectuados. ",
                    "Identificación de unidades:",
                    "UNION: - Unidad vehicular uni tripulada (un ocupante).",
                    "ADAM: – Unidad vehicular (dos ocupantes).",
                    "MARY: - Unidad motocicleta.  ",
                    "HALCÓN: - Unidad aérea (helicópteros). "
                ]}  
              />
            </Content>
    </div>
}

export default CodigosLSPD