const Inicio = _ => {
    return (
        <div>
            <h1 class="text-center">Inicio</h1>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="pacientes.html">Proximas Citas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="calendario.html">Calendario de Citas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Historial de citas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="preg priv doc.html">Preguntas públicas de pacientes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="preg pub doc.html">Preguntas privadas de pacientes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="modificar_datos.html">Modificar datos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="comentarios doc.html">Comentarios de los Pacientes</a>
                        </li>
                    </ul>
                </div>
                {/* <a href="pacientes.html">Proximas Citas</a> 
                    <a href="calendario.html">Calendario de Citas</a>
                    <a href="">Historial de citas</a>
                    <a href="">Preguntas de pacientes</a>
                    <a href="modificar_datos.html">Modificar datos</a> */}
            </nav>


            {/* <script src="bootstrap.bundle.min.js"></script>  */}
            <script src="js/script.js"></script>
        </div>
    )
}

export default Inicio;