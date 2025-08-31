import { SubSectionContent, HeaderContent } from "@/components/sections"
import React from "react"

function Sanciones() {
  return <div>
  <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Concepto'>
  <span>🚩 Sanciones</span>
  </h2>    
  <span className="font-bold">Normativa de Sanciones</span>
  <br />
  <br />
En este apartado se detallarán las sanciones correspondientes para cada incumplimiento 
de las normativas del servidor. Todas las reglas establecidas deben ser respetadas para 
garantizar un roleplay justo, equilibrado y realista. 
  <br />
  <br />
  Cada falta será evaluada según su gravedad y reincidencia, y las sanciones pueden ir 
desde advertencias hasta expulsiones permanentes, dependiendo del caso. Es 
responsabilidad de cada jugador conocer y respetar estas normas para evitar 
consecuencias IC y administrativas.
  <br />
  <br />
  Lee detenidamente este apartado para comprender las penalizaciones aplicables a cada 
  infracción y asegurarte de mantener un juego limpio dentro del servidor.🚨
  <br /><br />
<SubSectionContent reference='Sanciones Adm'>
  <HeaderContent title='Sanciones con cárcel administrativa' id='admin'>
  <h1 className="font-bold">Golpear a alguien sin razón repetidamente: 60 Servicios comunitarios .</h1> 
  <br />
  <h1 className="font-bold">No rolear Choque : 60 Servicios comunitarios.</h1> 
  <br />
  <h1 className="font-bold">Powergaming : 120 Servicios comunitarios.</h1> 
  <br />
  <h1 className="font-bold">Acto delictual sin entorno : 120 Servicios comunitarios.</h1> 
  <br />
  <h1 className="font-bold">Buguear animación : 120 Servicios comunitarios. </h1>
  <br />
  <h1 className="font-bold">No respetar RDE: 120 Servicios comunitarios. </h1>
  <br />
  <h1 className="font-bold">Acto delictivo en zona segura: 120 Servicios comunitarios.</h1> 
  <br />
  <h1 className="font-bold">Forzar Rol: 120 Servicios comunitarios. </h1>
  <br />
  <h1 className="font-bold">Evadir Rol: 150 Servicios comunitarios.</h1> 
  <br />
  <h1 className="font-bold">No valoración de vida: 150 Servicios comunitarios. </h1>
  <br />
  <h1 className="font-bold">Abuso de Bug menor: 200 Servicios comunitarios.</h1> 
  </HeaderContent>
</SubSectionContent>
<SubSectionContent reference='Sanciones Ban'>
  <HeaderContent title='Sanciones con Baneo' id='baneo'>
  <h1 className="font-bold">Toxicidad fuera de rol: 1 hora 30 minutos de baneo.</h1> 
  <br />
  <h1 className="font-bold">Deathmatch: 3 horas de baneo.</h1> 
  <br />
  <h1 className="font-bold">Carkill: 2 horas de baneo.</h1> 
  <br />
  <h1 className="font-bold">Tirar Cable: 4 horas de baneo y eliminación de inventario. </h1> 
  <br />
  <h1 className="font-bold">Abuso de Bug Grave: Baneo permanente. </h1>
  <br />
  <h1 className="font-bold">Acoso a un jugador: Baneo Permanente.</h1>
  </HeaderContent>
</SubSectionContent>
</div>

}

export default Sanciones
