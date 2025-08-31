import { SectionContent, SubSectionContent, HeaderContent, Content, ListItemContent, ContentFooter } from "@/components/sections"

function Procedimientos(){
    return <div>
        <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Concepto'>
        <span>💊 Procedimientos</span>
        </h2> 
        <SectionContent reference='Uso de Vehículos '>
          <SubSectionContent reference='Uso de Vehículos '>
            <HeaderContent title='Uso de Vehículos ' id='1.'>
            Es obligatorio que todo el personal utilice los vehículos oficiales de la institución para 
            atender emergencias. Estos vehículos están diseñados y equipados específicamente para 
            garantizar una respuesta rápida y segura en situaciones de emergencia.
            <br /><br />
            En caso de que se necesite utilizar un vehículo no oficial, se deberá obtener la autorización 
            previa de administración, siguiendo los procedimientos establecidos. Esta medida asegura 
            el uso adecuado y seguro de los recursos de la institución durante las emergencias.
            </HeaderContent>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Uso de Radio IC'>
          <SubSectionContent reference='Uso de Radio IC'>
            <HeaderContent title='Uso de Radio IC' id='2.'>
            Los EMS están obligados a utilizar radio en todo momento mientras se encuentren en 
            servicio. La comunicación constante a través de la radio es esencial para coordinar la 
            atención a los pacientes y garantizar una respuesta rápida y organizada.
            <br /><br /> 
            No llevar la radio encendida o no usarla adecuadamente durante el servicio puede 
            comprometer la eficiencia del trabajo en equipo y la atención de emergencias. 
            </HeaderContent>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Uso de Sirenas '>
          <SubSectionContent reference='Uso de Sirenas '>
            <HeaderContent title='Uso de Sirenas ' id='3.'>
            <Content title='El uso de sirenas está permitido sólo en los siguientes casos:' id='3.5.1' spaced>
              <ListItemContent
                items={[
                    "Durante el traslado hacia una emergencia.",
                    "Durante el traslado de un paciente al hospital."
                ]}
                
              />
            </Content>
        <ContentFooter> 
        Está prohibido utilizar las sirenas en cualquier otra situación que no sea una emergencia, 
            para evitar malentendidos y asegurar que se utilicen adecuadamente solo cuando sea 
            necesario
        </ContentFooter>
            </HeaderContent>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Procedimientos en Llamados por Tiroteos'>
          <SubSectionContent reference='Procedimientos en Llamados por Tiroteos'>
            <HeaderContent title='Procedimientos en Llamados por Tiroteos' id='4.'>
            En caso de llamadas de emergencia por tiroteos en las que no se conozca el estado del 
            altercado, el personal de EMS debe seguir los siguientes pasos para garantizar la seguridad 
            del equipo y los pacientes: 
            Verificación de zona segura: Antes de ingresar a la zona de conflicto, el personal de EMS 
            debe utilizar el comando /nubecita para solicitar información sobre si la zona es segura 
            para el ingreso del equipo. Esto es crucial para evitar que el personal se exponga a peligros 
            innecesarios.
            <br /><br />
            Zona urbana: Si el tiroteo ocurre en una zona urbana o una zona pública y concurrida, el 
            personal de EMS debe esperar fuera del área del conflicto, en una zona segura, hasta que 
            las autoridades competentes hayan controlado la situación. Una vez que se haya 
            establecido que la zona es segura y que el conflicto ha sido resuelto o está bajo control, el 
            personal de EMS podrá ingresar a la zona roja (perímetro de seguridad) para atender a los 
            heridos.
            <br /><br />
            Zona norte o lugares alejados: Si el tiroteo ocurre en zonas alejadas de la ciudad, como 
            en el norte o en áreas más remotas, el personal de EMS debe abandonar inmediatamente 
            el área y no acercarse hasta que se confirme que la situación ha sido controlada y que es 
            seguro ingresar. En estos casos, la prioridad es proteger al equipo y evitar que se expongan 
            a un peligro potencial.
            <br /><br />
            El personal debe esperar la notificación de las autoridades o de la 
            persona encargada del control de la situación antes de regresar para atender a los heridos.
            <br /><br />
            <ContentFooter>Este protocolo asegura que el personal de EMS se mantenga fuera de peligro y actúe de 
            manera efectiva cuando sea seguro hacerlo, brindando atención médica adecuada a los 
            heridos una vez que la situación esté bajo control. 
        </ContentFooter>
            </HeaderContent>
          </SubSectionContent>
        </SectionContent>
    </div>
        

}

export default Procedimientos