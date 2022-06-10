import Especialidad from "./componentes/Especialidad";
import Medico from "./componentes/Medico";

function Perfil_del_doc_pac_25() {
  return (
    <div>
      <h1 class="text-center m-5">Lista de Doctores</h1>
      <div class="div1">
        <div class="mb-2">
          <span>Especialidad</span>
          <Especialidad />
        </div>
        <div class="border-bottom mb-2"></div>
        <div class="border border-dark docs">
          <Medico/>
        </div>
        <div class="border border-dark docs mt-2">
          <Medico/>
        </div>
      </div>

    </div>
  );
}
export default Perfil_del_doc_pac_25;