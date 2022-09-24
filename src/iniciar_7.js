
import IniciarSesion from "./componentes/Iniciar_sesion";


function Iniciar_7(props) {
    return (
      <div>
        <IniciarSesion toLogin="inicio_10" toRecuperar="recuperar_doc" toRegistrar={props.toRegistrar}/>
        
      </div>
    );
}
export default Iniciar_7;