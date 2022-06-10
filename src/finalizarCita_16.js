function FinalizarCita_16() {
  return (
    <div>
      <div class="titulo">
        <h1>Término de la Cita</h1>
      </div>
      <form>
        <h2>Diagnóstico del Cliente</h2>
        <fieldset>
          <div class="form group col-md-4">
            <label for="txtDiagnostico">Diagnóstico detectado</label>
            <textarea class="form-control" rows="8" id="txtDiagnostico"></textarea>
          </div>
        </fieldset>
        <h2>Receta</h2>
        <fieldset>
          <div class="form-row">
            <div class="form-group col-md-3">
              <label for="txtMedicina">Nombre del medicamento:</label>
              <input type="text" id="txtMedicina" class="form-control"/>
            </div>
            <div class="form-group col-md-2">
              <label for="dbDias">Veces por semana:</label>
              <select class="form-control" id="dbDias">
                <option selected>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="dbHoras">Cada cuántas horas:</label>
              <select class="form-control" id="dbHoras">
                <option selected>0</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
                <option >4</option>
                <option >5</option>
                <option >6</option>
                <option >7</option>
                <option >8</option>
                <option >9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>
          </div>
        </fieldset>
        <h2>Siguiente cita</h2>
        <fieldset>
          <div class="form-group col-md-2">
            <label id="fechaNueva">Fecha acordada:</label>
            <input class="form-control" type="datetime-local" id="fechaNueva"/>
          </div>
        </fieldset>
        <button class="btn btn-primary" type="submit" id="btnTerminar">Finalizar</button>
      </form>
    </div>
  );
}
export default FinalizarCita_16;