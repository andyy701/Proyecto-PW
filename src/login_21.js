import Iniciar_sesion from "./componentes/Iniciar_sesion";

function Login_21(props) {
    return (
      <div>
        <Iniciar_sesion toLogin="inicio_paciente_23" toRecuperar="recuperar_pac" toRegistrar={props.toRegistrar}/>
      </div>
    );
}
export default Login_21;

