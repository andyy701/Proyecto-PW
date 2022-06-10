const Recordatorio = _ => {
  return (
    <div>
      <tr >
        <td >Diego</td>
        <td>20/05/22</td>
        <td><button class="btn btn-info"><a class="text-decoration-none text-dark" href="hm.html">Ver</a></button></td>
        <td>Evitar bebidas estimulantes: café, té y bebidas carbonatadas. Evitar el alcohol y el tabaco. Evitar alimentos grasos y picantes. Consumir frutas y verduras preferiblemente cocidas, evitando su ingestión en crudo.</td>
        <td>Gastritis</td>
        <td>Omeprazol una vez al día antes de una comida.</td>
        <td><button class="btn btn-secondary" id="recordatorio">Enviar</button></td>
      </tr>
    </div>
  )
}
export default Recordatorio;