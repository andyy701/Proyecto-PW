
import Iniciar_Sesion from "./componentes/Iniciar_sesion";


function Iniciar_7(props) {
    return (
      <div>
        <Iniciar_Sesion toLogin="inicio_10" toRecuperar="recuperar_doc" toRegistrar={props.toRegistrar}/>
        
      </div>
    );
}
export default Iniciar_7;