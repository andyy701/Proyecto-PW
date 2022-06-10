const Iniciar_sesion = _ => {
  return (
    <div>
      <div>
        <h1 class="text-center m-5">Inicio de sesión</h1>
        {/* <form>  */}

        <div class="text-center m-5">
          <label for="">Correo electrónico:</label>
          <input type="email" />
        </div>
        <div class="text-center m-5">

          <label class="" for="">Contraseña:</label>



          <input class="" type="text" />


        </div>

        {/*  <input type="submit" value="Iniciar sesión"> */}
        {/* <a href="inicio.html"> 
          <button>Iniciar sesión</button>
        </a> */}
        <div class="text-center m-5">
          <button class=""><a href="inicio.html" class="text-decoration-none ">Iniciar sesión</a></button>
        </div>
        {/* <!-- </form> --> */}
      </div>
      <div class="text-center m-5">
        <a href="registrar_6.html">Crear nueva cuenta</a>
      </div>




      {/* <!-- <script src="bootstrap.bundle.min.js"></script> --> */}
      <script src="js/script.js"></script>
    </div>
  )
}
export default Iniciar_sesion;