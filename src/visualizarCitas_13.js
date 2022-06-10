import Cita from "./componentes/Cita";

function VisualizarCitas_13() {
  return (
    <div>
      <h1 class="Titulo">Citas separadas</h1>
      <div class="form-group col-md-2">
        <label for="fechaCita">Seleccione una fecha a visualizar:</label>
        <input type="date" class="form-control" id="fechaCita"/>
      </div>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">DNI</th>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Hora</th>
            </tr>
          </thead>
          <tbody>
            <Cita />
            <Cita />
            <Cita />
            <Cita />
          </tbody>
        </table>
      </div>
     
    </div>
  );
}
export default VisualizarCitas_13;