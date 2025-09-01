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
      <SubSectionContent reference='Servicio'>
        <HeaderContent title='Corrupcion y Vinculacion a ODs' id='3'>
        Está permitido pertenecer a una organización delictual, sin embargo, se deben respetar ciertas 
        normas y reglas, las cuales prohíben realizar algunos actos para respetar el rol del personaje y 
        el entorno del hospital.. 
        <br /><br />
        <br />
        ● NO se podrá ingresar, ni postular a la facción con antecedentes, una vez dentro de la facción 
        solo se aceptarán un máximo de 3 antecedentes en caso de estos ser menores, por ejemplo, robos a badulaques, 
        flecca o joyerías, lo que no significa que queden exentos de investigación y seguimiento. 
        Está prohibido realizar actos delictuales dentro de servicio. (Sanción OOC e IC).
        <br />
        <br />
        ● Los médicos que participen en tiroteos, venta de droga, secuestros, u otro acto ilegal que realicen 
        fuera de servicio puede conllevar una sanción o desvinculación por parte de la jefatura de EMS al ser 
        descubiertos y/o detenidos.
        <br />
        <br />
        ● Está estrictamente prohibido la venta y/o comercialización del equipamiento médico, a excepción 
        de la morfina. (Sanción OOC e IC).
        <br />
        <br />
        ● NO está permitido el priorizar o el atender llamados por pertenecer a la misma organización, 
        de igual manera, no se permite posponer, no realizar o realizar mal el tratamiento a integrantes 
        de organizaciones opuestas, ni la revelación de información personal como DNI o en caso de pertenecer 
        al área psiquiátrica, la información confidencial de un paciente. De ser descubierto realizando 
        dichas acciones tiene que asumir consecuencias.
        (Sanción OOC e IC). 
        <br />
        <br />
        ●Está permitida la corrupción desde el rango cirujano en adelante, ya sea ir a revivir personas fuera 
        del hospital, escabullir gente custodiada por la policia fuera del hospital, mentir en informes a superiores 
        o contrabandear medicina (especificadas en punto 3) importante NO ser descubierto ni detenido, 
        en caso de ser descubierto la sanción puede variar desde desvinculación hasta perpetua.
        <br />
        <br />
        ●Algunas de estas normas y/o reglas se pueden pasar por alto con un rol pactado, del cual los administradores 
        y el jefe de la facción deben estar al tanto. De lo contrario, no será contado como rol pactado y llevará la sanción 
        correspondiente. En caso de tener dudas sobre si una acción está permitida o no, consultar a la administración antes de proceder.
        </HeaderContent>
      </SubSectionContent>
      <SubSectionContent reference='Servicio'>
        <HeaderContent title='Abuso de corrupción y servicio a la comunidad' id='4'>
        Si bien está permitida la corrupción y la vinculación de miembros de la facción a roles criminales, 
        es importante siempre priorizar la atención a la comunidad en general, por lo que se exigirá que todo 
        miembro deba priorizar la atención de su trabajo como médico, estando en servicio no podrá negar la atención 
        ni atender preferentemente a un jugador por sobre otro. 
        </HeaderContent>
      </SubSectionContent>
      <SubSectionContent reference='Mascaras'>
        <HeaderContent title='Uso de Máscaras' id='5'>
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