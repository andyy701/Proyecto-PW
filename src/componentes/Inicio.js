import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Inicio = (props) => {
    const navbars={inicio_10:[{text:"Proximas Citas",to:props.toPacientes},{text:"Calendario de Citas",to:props.toCalendar},
                   {text:"Historial de citas",to:props.toHistorial},{text:"Preguntas públicas de pacientes",to:props.toPregPubDoc},
                   {text:"Preguntas privadas de pacientes",to:props.toPregPrivDoc},{text:"Modificar datos",to:props.toModify},
                   {text:"Comentarios de los Pacientes",to:props.toComentariosDoc}],
                   inicio_paciente_23:[{text:"Lista de Doctores",to:props.toPerfilDocPac},
                   {text:"Preguntar al doctor",to:props.toPregPubPac}]};
    
    
    return (
        <div>
            <h1 class="text-center">Inicio</h1>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNav">
                    
                    <ul class="navbar-nav">
                        
                        {
                            navbars[props.Inicio].map(enlace=>(
                                <li class="nav-item">
                                 <Link class="nav-link" to={enlace.to}>{enlace.text}</Link>
                                </li>
                            ))
                        } 
                        
                        
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