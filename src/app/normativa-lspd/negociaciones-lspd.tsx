import { ListItemContent, Content, ContentFooter} from "@/components/sections"


function Negociacionnes(){
    return <div>
        <h2 className='text-2xl font-bold mb-6 flex items-center gap-3' id='Concepto'>
        <span className="font-bold">⚖️ Normativa de Negociaciones Policiales  </span>
        </h2>
Las negociaciones se realizarán bajo un esquema 1 a 1, es decir, una demanda por cada 
rehén, respetando el límite máximo de rehenes permitido en robos, el cual será equivalente 
a la cantidad de ladrones menos uno (Ejemplo: si hay 4 ladrones, el máximo de rehenes 
permitidos será 3).
<br /><br />
En el caso de rehenes que sean miembros de una facción legal (LSPD, EMS), se podrá 
considerar hasta dos demandas según la importancia del sujeto, siempre y cuando el 
secuestro haya sido realizado de manera correcta y respetando el número mínimo de 
miembros activos de dicha facción requerido para llevarlo a cabo
<br /><br />
        <h1 className="font-bold" id="2">Principios Generales:</h1>
        <br /><br />
        Las negociaciones tienen como objetivo principal la preservación de la vida del rehén. En 
        ausencia de un rehén, se procederá a un tiroteo.
        <br /><br />
        <h1 className="font-bold text-blue-400">Reglas sobre Entornos y Negociaciones en Robos </h1>
        <br /><br />
        <Content title='Aspectos Negociables' id='3' spaced>
        Las concesiones en una negociación sólo podrán solicitarse a cambio de rehenes. No se 
        aceptarán demandas que no involucren su liberación. Se podrá negociar lo siguiente: 
              <ListItemContent
                items={[
                    "Inmunidad de escape (Huida limpia): No se podrá obstaculizar el vehículo de escape en el inicio de la huida. Se otorgará 1 segundo de inmunidad desde el momento en que todos los delincuentes estén dentro del vehículo y éste inicie su marcha. ",
                    "Restricción de vehículos: Se podrá solicitar la retirada de ciertos vehículos policiales, como helicópteros o vehículos de alto rendimiento, siempre que sea parte del acuerdo.",
                    "Cantidad de Vehículos para Huida: En el caso de ser más de 4 sujetos en el acto delictual y requerir más de 1 vehículo para huir se debe negociar la utilización de más de uno. ",
                    "Igualdad numérica: Se podrá negociar la cantidad de oficiales que participarán en el procedimiento, asegurando un equilibrio con los delincuentes.",
                    "Igualdad de calibre: Se podrá establecer qué tipo de armamento será utilizado en el enfrentamiento.",
                    "Segundos de ventaja: Se podrá negociar el tiempo adicional que tendrán los delincuentes antes de que la policía inicie la persecución. ",
                 ]}  
              />
    </Content>
    <h1 className="font-bold" id="4">Negociación de Huida Limpia </h1>
    <br /><br />
    Si se negocia una huida limpia, el acuerdo debe respetarse durante al menos 10 
    segundos desde el inicio de la huida.
    <br /><br />
    Durante este tiempo, no se podrá enviar un entorno de tiroteo ni abrir fuego contra los vehículos o los oficiales.
    <br /><br />
    <h1 className="font-bold" id="5">Uso de Rehenes y Consecuencias de su Abatimiento:</h1>
    <br /><br />
    Si, por decisión deliberada de los delincuentes, un rehén es abatido dentro del lugar del 
    robo, la policía no podrá romper la negociación si aún hay civiles en calidad de rehenes 
    en el interior. 
    <br /><br />
    Sin embargo, la negociación se considerará hostil. En este caso, la policía deberá permitir la 
    salida de los delincuentes sin usar pinchos o disparar a los neumáticos.
    <br /><br />
    La persecución comenzará inmediatamente después, sin avisos previos.
    <br /><br />
    <Content title='Ruptura de la Negociación' id='6' spaced>
    La negociación quedará automáticamente invalidada si los delincuentes: 
              <ListItemContent
                items={[
                    "Disparan a policías o a sus vehículos. ",
                    "Atropellan a civiles o policías intencionalmente. Ingresan a una zona segura (hospital, comisaría, etc.). Rompen las condiciones establecidas en la negociación."
                ]}  
              />
    <ContentFooter>
    En caso de ingresar a una zona considerada de alta seguridad según las reglas de 
    entorno (RDE), como comisarías, instalaciones de Humane Labs, aeropuertos, 
    bancos o bases de Merryweather, se deberá interpretar adecuadamente la presencia 
    de seguridad en el área. Cualquier acción dentro de estos lugares debe realizarse de 
    manera coherente con el entorno, asumiendo la existencia de vigilancia, personal 
    armado y protocolos de seguridad estrictos. 
    </ContentFooter>
    <ContentFooter>
    En caso de ruptura de la negociación, la policía podrá actuar sin previo aviso, utilizando 
    fuerza letal si es necesario. Además, si dentro del acuerdo se había establecido igualdad de 
    policías y delincuentes, la policía tendrá derecho a agregar un oficial extra. 
    Si la negociación se rompe con un rehén aún en peligro, el equipo táctico priorizará su 
    seguridad, utilizando los métodos más adecuados para neutralizar la amenaza. 
    </ContentFooter>
    </Content>
    <h1 className="font-bold">Especificaciones de la Negociación </h1>
    <br /><br />
    Cada rehén solo podrá intercambiarse por una concesión. Los rehenes serán liberados uno 
    por uno, permitiendo que un oficial los registre para asegurar que no porten parte del botín 
    ni armas. Si el negociador tiene dudas sobre el acuerdo, podrá consultar con un superior 
    antes de aceptarlo. 
    </div>
}

export default Negociacionnes