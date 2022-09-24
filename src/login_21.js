import IniciarSesion from "./componentes/Iniciar_sesion";

function Login_21(props) {
    return (
      <div>
        <IniciarSesion toLogin="inicio_paciente_23" toRecuperar="recuperar_pac" toRegistrar={props.toRegistrar}/>
      </div>
    );
}
export default Login_21;

