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
                            <Link class="nav-link" to={props.toPregPubDoc}>Preguntas públicas de pacientes</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={props.toPregPrivDoc}>Preguntas privadas de pacientes</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={props.toModify}>Modificar datos</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={props.toComentariosDoc}>Comentarios de los Pacientes</Link>
                        </li>
                    </ul>
                </div>
                  
              {/* faltan estos como links no en el navbar: 
              toFinalizarCita="finalizarCita_16" 
              toHistoriaClinica="historiaClinica_15" toHistoricoConsultas="historicoConsultas_17" toInfoPac="informacionPaciente_14" */}
              
            </nav>


            {/* <script src="bootstrap.bundle.min.js"></script>  */}
            <script src="js/script.js"></script>
        </div>
    )
}

export default Inicio;