import { Content, ContentFooter, HeaderContent, ListItemContent, SectionContent, SubSectionContent } from "@/components/sections"

function ReglasEMS(){
    return <div>
        <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Concepto'>
        <span>⚕️ Reglas EMS</span>
        </h2> 
        Es fundamental que todo el personal médico de la facción EMS lea y se familiarice con las 
        normas generales de la ciudad y las reglas internas establecidas para el servicio. Conocer 
        estas normativas es esencial para saber cómo actuar correctamente en situaciones críticas 
        y mantener un comportamiento adecuado y profesional en todo momento.
        <br /><br /> 
        Cumplir con estas reglas garantiza una atención eficiente, un ambiente de trabajo 
        armonioso y el buen funcionamiento de la institución. Cada miembro del equipo debe 
        comprometerse a entender y seguir las normas para asegurar la calidad del servicio y la 
        reputación de la facción EMS.
        <br /><br />
        <SectionContent reference='Notificaciones por Ausencias'>
          <SubSectionContent reference='Notificaciones por Ausencias'>
            <HeaderContent title='Notificaciones por Ausencias' id='1..'>
            Cualquier miembro del personal EMS que necesite ausentarse por al menos 5 días hábiles 
            debe informar su ausencia a través de Discord, para mantener una correcta coordinación y 
            asegurar la cobertura adecuada de los turnos. 
            <br /><br />
            En caso de ausencias prolongadas, es decir, más de 2 semanas consecutivas 
            (excluyendo vacaciones), se podría considerar la pérdida de rango o la expulsión del cuerpo 
            EMS, dependiendo de la situación y la justificación de la ausencia. Esta medida busca 
            garantizar que el personal esté disponible y comprometido con sus responsabilidades 
            dentro de la institución. 
            </HeaderContent>
          </SubSectionContent>
        </SectionContent>
        <SectionContent reference='Reingreso de Ex-EMS '>
          <SubSectionContent reference='Reingreso de Ex-EMS '>
            <HeaderContent title='Reingreso de Ex-EMS' id='2..'>
            Aquellos que hayan sido parte del cuerpo EMS anteriormente y deseen regresar, recibirán 
            un reconocimiento de hasta 2 rangos por debajo del que poseían al retirarse, siempre y 
            cuando mantengan el mismo personaje. Esto les permite reintegrarse al equipo con un nivel 
            de experiencia previa.  
            <br /><br />
            Para aquellos que sean personajes nuevos, el ingreso al cuerpo EMS comenzará desde el 
            rango de paramédico, sin importar su experiencia anterior fuera del rol. Es importante 
            destacar que ningún rol garantiza un rango elevado desde el inicio, y el ascenso dependerá 
            del desempeño, la dedicación y el cumplimiento de las normas dentro de la 
            institución. . 
            </HeaderContent>
          </SubSectionContent>
        </SectionContent>
    </div>
}
export default ReglasEMS