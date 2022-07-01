import { Link } from "react-router-dom";

const Inicio = (props) => {
    return (
        <div>
            <h1 class="text-center">Inicio</h1>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" to={props.toPacientes}>Proximas Citas</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={props.toCalendar}>Calendario de Citas</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={props.toHistorial}>Historial de citas</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={props.toCalendar}>Preguntas públicas de pacientes</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={props.toCalendar}>Preguntas privadas de pacientes</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={props.toModify}>Modificar datos</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={props.toCalendar}>Comentarios de los Pacientes</Link>
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