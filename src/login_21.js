import Iniciar_sesion from "./componentes/Iniciar_sesion";

function Login_21(props) {
    return (
      <div>
        <Iniciar_sesion toLogin={props.toLogin} toRecuperar={props.toRecuperar}/>
      </div>
    );
}
export default Login_21;