import Recordatorio from "./componentes/Recordatorio";

function Pacientes_11() {
  return (
    <div>
      <h1 class="text-center m-5">Pacientes</h1>

      <table class="table table-hover">
        <thead class="thead-dark">
          <tr class="table-primary">
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Historial Médico</th>
            <th>Recomendaciones</th>
            <th>Diagnóstico</th>
            <th>Receta</th>
            <th>Recordatorio</th>
          </tr>
        </thead>
        <tbody >
          <Recordatorio />
          <Recordatorio />
          <Recordatorio />
          <Recordatorio />
        </tbody>
      </table>

      {/* <script src="bootstrap.bundle.min.js"></script>  */}
      <script src="js/script.js"></script>
      
    </div>
  );
}
export default Pacientes_11;