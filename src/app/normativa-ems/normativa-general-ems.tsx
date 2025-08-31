import { Content, ContentFooter, HeaderContent, ListItemContent, SubSectionContent } from "@/components/sections"

function NormativaEMS(){
    return <div>
        <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Concepto'>
        <span>🧑‍⚕️ Normativa General EMS </span>
        </h2> 
        <SubSectionContent reference='Atenciones'>
        <HeaderContent title='Atenciones igualitarias' id='1'>
        Todos los ciudadanos que soliciten ayuda recibirán atención de manera respetuosa y sin 
        discriminación, sin importar su situación política, económica, social, religiosa, emocional, 
        laboral o cualquier otra condición. 
            <br /><br />
            El hospital se compromete a ofrecer un trato igualitario a todos, garantizando que tanto el 
        personal como los pacientes respeten este principio. Cualquier acto de discriminación por 
        parte del personal será sancionado de manera estricta. El objetivo es mantener un 
        ambiente donde todos los pacientes se sientan seguros, respetados y bien atendidos.
            <br /><br />
        </HeaderContent>
      </SubSectionContent>
      <SubSectionContent reference='Servicio'>
        <HeaderContent title='Uniforme de servicio' id='2'>
        Es obligatorio que todo el personal porte el uniforme oficial de la institución, según su 
        rango, mientras esté en servicio realizando funciones de EMS. El uniforme debe ser usado 
        exclusivamente durante las horas laborales y en actividades relacionadas con el trabajo, 
        con el objetivo de mantener una imagen profesional y coherente con la institución. 
        <br /><br />
        Queda prohibido usar el uniforme fuera de servicio, especialmente para actividades 
        personales o ilegales, para evitar cualquier riesgo a la reputación de la institución. Si se 
        detecta que alguien incumple esta norma, se tomarán medidas disciplinarias, que pueden 
        incluir amonestaciones, suspensión o incluso la terminación del contrato, dependiendo de la 
        gravedad del caso.
        </HeaderContent>
      </SubSectionContent>
      <SubSectionContent reference='Mascaras'>
        <HeaderContent title='Uso de Máscaras' id='3'>
        Está prohibido el uso de máscaras dentro del hospital, tanto por parte del personal como de 
        los heridos o civiles. Esta norma se implementa para garantizar una correcta identificación y 
        facilitar la atención médica, así como para prevenir problemas de comunicación o confusión. 
        En cuanto al protocolo en situaciones específicas, se procederá de la siguiente manera:
        <br /><br />
<Content title='Estados Del Paciente:' id='4' spaced>
              <ListItemContent
                items={[
                    "Herido en estado de desmayo: Si un herido que llega al hospital está inconsciente y lleva puesta una máscara, el personal deberá rolear la acción de quitarla utilizando el comando “/me le quita la máscara”. Luego, si es necesario, se le deberá avisar fuera de rol (OOC) al paciente para que se la retire por completo. ",
                    "Herido o civil consciente: Si un herido o civil consciente llega al hospital con una máscara puesta, el personal debe pedirle educadamente que se la retire. En caso de que el paciente se niegue a hacerlo, se procederá a informar a las autoridades del LSPD para que tomen las medidas correspondientes y puedan intervenir si es necesario. "
                ]}                
              />
            </Content>
        <ContentFooter>Además, el personal de EMS sólo podrá usar mascarillas quirúrgicas durante 
        procedimientos médicos para asegurar que se mantenga la higiene y la seguridad tanto 
        para el personal como para los pacientes. 
        </ContentFooter>
        </HeaderContent>
      </SubSectionContent>
    </div>
}

export default NormativaEMS