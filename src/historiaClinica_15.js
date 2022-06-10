import Historia_clinica_del_paciente from "./componentes/Historia_clinica_del_paciente";
import Atencion from "./componentes/Atencion";

function HistoriaClinica_15() {
  return (
    <div>
      <Historia_clinica_del_paciente />
      <h2>LISTADO DE ATENCIONES</h2>
      <div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Número de Cita</th>
              <th scope="col">Fecha de Cita</th>
              <th scope="col">Cita Cancelada</th>
            </tr>
          </thead>
          <tbody>
            <Atencion/>
            <Atencion/>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default HistoriaClinica_15;