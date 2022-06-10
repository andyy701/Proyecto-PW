function Recuperar() {
  return (
    <div>
      <h1 class="text-center m-5">Recuperar contraseña</h1>

      <form>

        <div class="text-center m-5">
          <label for="">Correo electrónico:</label>
          <input type="email"/>
        </div>

        <div class="text-center m-5">
          <input type="submit" value="Enviar"/>
        </div>


      </form>

      {/* <script src="bootstrap.bundle.min.js"></script>  */}
      <script src="js/script.js"></script>
    </div>
  );
}
export default Recuperar;