import { SubSectionContent, HeaderContent, ListItemContent, Content } from "@/components/sections"
import React from "react"

function ClipsEvidencias() {
  return (
    <div>
        <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Concepto'>
        <span>🎥 Clips/Evidencias</span>
        </h2> 
        Se especifica los términos y condiciones de los clips para usarlos como 
        evidencia en roles.
        <br />
        <br />
        Los Clips son videos para adjuntar como evidencia en caso de un reporte para que 
        luego del rol un arbitro (Staff) pueda dar una decisión si este se ejecutó de manera 
        correcta o incorrecta.
        <br />
        <br />
        Los clips deben tener un mínimo de 1 MINUTO DE DURACION 
        Debe de tener AUDIO, sin presentar CORTES y deben ser REALES. 
        Si se detecta ALTERACIÓN de estos seria motivo de SANCIÓN al jugador que 
        reporta, sin posibilidad de apelación.
        <br />
        <br />
        <span className="font-bold">Para realizar reporte de rol es necesario abrir ticket 
        en "Reportar jugador" en Discord.</span>
    </div>
  )
}

export default ClipsEvidencias
