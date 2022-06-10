function Reserva_cita_27() {
  return (
    <div>
      <div class="div1">
        <h2>Reserva de cita</h2>
        <div class="border-top"></div>
        <div>
          <div>¿Para quien es la cita?</div>
          <div class="container mt-2">
            <div class="row">
              <button class="col-6">Para mi</button>
              <button class="col-6">Otra persona</button>
            </div>
          </div>
        </div>
        <div>
          <div>Pago</div>
          <div class="row div1">
            <input class="col-6"/>
            <select class="col-2">
                <option>Credito</option>
                <option>Debito</option>
            </select>
          </div>
          <div>
            <div>Medicamentos</div>
            <select>
              <option>Enviar a casa</option>
              <option>Comprar por mi cuenta</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Reserva_cita_27;