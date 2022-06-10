function Modificar_datos_8() {
  return (
    <div>
      <h1 class="text-center m-5">Modificar datos</h1>

      <form>
        <div class="text-center m-4">
          <label for="">Nuevo correo electrónico:</label>
          <input type="email" value="nombre@gmail.com"/>
        </div>
        <div class="text-center m-4">
          <label for="">Número de Whatsapp:</label>
          <input type="tel" value="987654321"/>
        </div>

        <div class="text-center m-4">
          <label for="">Precio por consulta presencial:</label>
          <input type="number" value="100"/>
        </div>
        <div class="text-center m-4">
          <label for="">Precio por consulta online:</label>
          <input type="number" value="90"/>
        </div>
        <div class="text-center m-4">
          <input class="btn btn-primary" type="submit" value="Guardar"/>
        </div>

      </form>

       {/* <script src="bootstrap.bundle.min.js"></script>  */}
      <script src="js/script.js"></script>
    </div>
  );
}
export default Modificar_datos_8;