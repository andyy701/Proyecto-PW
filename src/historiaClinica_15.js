import HistoriaClinicaDelPaciente from "./componentes/Historia_clinica_del_paciente";
import Atencion from "./componentes/Atencion";

function HistoriaClinica15() {
  return (
    <div>
      <HistoriaClinicaDelPaciente />
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
export default HistoriaClinica15;