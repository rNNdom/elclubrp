import { SubSectionContent, HeaderContent, ListItemContent, Content } from "@/components/sections"
import React from "react"

function ClipsEvidencias() {
  return (
    <div>
      <SubSectionContent reference='Acción del Personaje /ME'>
        <HeaderContent title='1.0.2 /ME - Acción del Personaje' id='1.0.2'>
          Se usa para describir acciones físicas que el personaje realiza en primera persona. Esto permite que otros jugadores puedan ver lo que hace el personaje, especialmente cuando no se puede
          representar físicamente por las mecánicas del juego. Solo debe ser utilizado para acciones y no pensamientos del personaje.
        </HeaderContent>
        <Content title='Ejemplos de /ME:' id='Ejemplos /ME' spaced>
          <ListItemContent title='Acciones físicas' description='/me saca su billetera del bolsillo y extrae algunos billetes.' />
          <ListItemContent title='Acciones de combate' description='/me enciende el motor del auto y ajusta el espejo retrovisor.' />
          <ListItemContent title='Acciones de interacción' description='/me toma su radio y presiona el botón para hablar.' />
        </Content>
      </SubSectionContent>
    </div>
  )
}

export default ClipsEvidencias
