import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calendario_9 from './calendario_9';
import Comentarios_doc_20 from './comentarios doc_20';
import FinalizarCita_16 from './finalizarCita_16';
import HistoriaClinica_15 from './historiaClinica_15';
import HistoricoConsultas_17 from './historicoConsultas_17';
import InformacionPaciente_14 from './informacionPaciente_14';
import Iniciar_7 from './iniciar_7';
import Inicio_10 from './inicio_10';
import Inicio_paciente_23 from './inicio_paciente_23';
import Login_21 from './login_21';
import Modificar_datos_8 from './modificar_datos_8';
import Newaccount_22 from './newaccount_22';
import Pacientes_11 from './pacientes_11';
import Perfil_del_doc_pac_25 from './perfil del doc-pac_25';
import Perfil_del_doc_pac2 from './perfil del doc-pac2';
import Preg_priv_doc_19 from './preg priv doc_19';
import Preg_pub_doc_18 from './preg pub doc_18';
import Preg_pub_pac_26 from './preg pub pac_26';
import Recuperar_doc from './recuperar_doc';
import Recuperar_pac from './recuperar_pac';
import Registrar_6 from './registrar_6';
import Reserva_cita_27 from './reserva cita_27';
import VisualizarCitas_13 from './visualizarCitas_13';
import 'bootstrap/dist/css/bootstrap.css';
import Principal from './principal';
function App() {

  return (
    <Router>

      <Routes>

        <Route path="/">
          <Route index element={<Principal />} />

          <Route path="iniciar_7">
            <Route index element={<Iniciar_7 toLogin="inicio_10" toRecuperar="recuperar_doc"/>} />
            <Route path="registrar_6" element={<Registrar_6 />} />
            <Route path="inicio_10">
              <Route index element={<Inicio_10 toModify="modificar_datos_8" toCalendar="calendario_9" toHistorial="visualizarCitas_13" toPacientes="pacientes_11"/>} />
              <Route path="comentarios_doc_20" element={<Comentarios_doc_20 />} />
              <Route path="modificar_datos_8" element={<Modificar_datos_8/>} />
              <Route path="calendario_9" element={<Calendario_9 />} />
              <Route path="visualizarCitas_13" element={<VisualizarCitas_13 />} />
              <Route path="preg_priv_doc_19" element={<Preg_priv_doc_19 />} />
              <Route path="preg_pub_doc_18" element={<Preg_pub_doc_18 />} />
              <Route path="finalizarCita_16" element={<FinalizarCita_16 />} />
              <Route path="historiaClinica_15" element={<HistoriaClinica_15 />} />
              <Route path="historicoConsultas_17" element={<HistoricoConsultas_17 />} />
              <Route path="informacionPaciente_14" element={<InformacionPaciente_14 />} />
              <Route path="pacientes_11" element={<Pacientes_11 />} />
            </Route>
            <Route path="recuperar_doc" element={<Recuperar_doc />} />
          </Route>

          <Route path="registrar_6" >
            <Route index element={<Registrar_6 />} />
            <Route path="iniciar_7" element={<Iniciar_7 />} />
          </Route>

          <Route path="newaccount_22">
            <Route index element={<Newaccount_22 />} />
            <Route path="login_21" element={<Login_21 />} />
          </Route>

          <Route path="login_21" >
            <Route index element={<Login_21 toLogin="inicio_paciente_23" toRecuperar="recuperar_pac"/>} />
            <Route path="newaccount_22" element={<Newaccount_22 />} />
            <Route path="inicio_paciente_23">
              <Route index element={<Inicio_paciente_23 />} />
              <Route path="perfil_del_doc_pac_25">
                <Route index element={<Perfil_del_doc_pac_25 />}/>
                <Route path="perfil_del_doc_pac2">
                  <Route index element={<Perfil_del_doc_pac2 />}/>
                  <Route path="reserva_cita_27" element={<Reserva_cita_27 />} />
                </Route>
              </Route>
              <Route path="preg_pub_pac_26" element={<Preg_pub_pac_26 />} />
            </Route>
            <Route path="recuperar_pac" element={<Recuperar_pac />} />
          </Route>
        </Route>



        
      </Routes>
    </Router>
  );
}

export default App;
