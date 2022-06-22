import { Link } from "react-router-dom";

function Principal() {
    return (
      <div>
        Principal
        <br></br>
        <Link to="iniciar_7">Iniciar sesion como doctor</Link><br></br>
        <Link to="registrar_6">Registrarse como doctor</Link><br></br>
        <Link to="newaccount_22">Registrarse como paciente</Link><br></br>
        <Link to="login_21">Iniciar sesion como paciente</Link>
      </div>
    );
}
export default Principal;