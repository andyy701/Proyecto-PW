import { Outlet } from "react-router-dom";
import Iniciar_sesion from "./componentes/Iniciar_sesion";

function Iniciar_7() {
    return (
      <div>
        <Outlet/>
        <Iniciar_sesion/>
      </div>
    );
}
export default Iniciar_7;