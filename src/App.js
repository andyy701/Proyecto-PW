import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calendario9 from './calendario_9';
import ComentariosDoc20 from './comentarios doc_20';
import FinalizarCita16 from './finalizarCita_16';
import HistoriaClinica15 from './historiaClinica_15';
import HistoricoConsultas17 from './historicoConsultas_17';
import InformacionPaciente14 from './informacionPaciente_14';
import Iniciar7 from './iniciar_7';
import Inicio10 from './inicio_10';
import InicioPaciente23 from './inicio_paciente_23';
import Login21 from './login_21';
import ModificarDatos8 from './modificar_datos_8';
import Newaccount22 from './newaccount_22';
import Pacientes11 from './pacientes_11';
import PerfilDelDocPac25 from './perfil del doc-pac_25';
import PerfilDelDocPac2 from './perfil del doc-pac2';
import PregPrivDoc19 from './preg priv doc_19';
import PregPubDoc18 from './preg pub doc_18';
import PregPubPac26 from './preg pub pac_26';
import RecuperarDoc from './recuperar_doc';
import RecuperarPac from './recuperar_pac';
import Registrar6 from './registrar_6';
import ReservaCita27 from './reserva cita_27';
import VisualizarCitas13 from './visualizarCitas_13';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import Principal from './principal';
import { useState } from 'react';
function App() {

  const rutas = [{ path: "comentarios_doc_20", element: <ComentariosDoc20 /> },
                 { path: "modificar_datos_8", element: <ModificarDatos8 /> },
                 { path: "calendario_9", element: <Calendario9 /> },
                 { path: "visualizarCitas_13", element: <VisualizarCitas13 /> },
                 { path: "preg_priv_doc_19", element: <PregPrivDoc19 /> },
                 { path: "preg_pub_doc_18", element: <PregPubDoc18 /> },
                 { path: "finalizarCita_16", element: <FinalizarCita16 /> },
                 { path: "historiaClinica_15", element: <HistoriaClinica15 /> },
                 { path: "historicoConsultas_17", element: <HistoricoConsultas17 /> },
                 { path: "informacionPaciente_14", element: <InformacionPaciente14 /> },
                 { path: "pacientes_11", element: <Pacientes11 /> }]

  const [mostrarInfo, setMostrarInfo] = useState({});


  return (

    
    <Router>

      <Routes>

        <Route path="/">
          <Route index element={<Principal />} />

        
          <Route path="iniciar_7" id="1">
            <Route index element={<Iniciar7 toRegistrar="registrar_6" />} />
            <Route path="registrar_6" element={<Registrar6 toRegistrar="/iniciar_7" />} />
            <Route path="inicio_10">

              <Route index element={<Inicio10 />} />
              {
                rutas.map((ruta) => (
                  <Route path={ruta.path} element={ruta.element} />
                ))
              }

              <Route index element={<Inicio10 toModify="modificar_datos_8" toCalendar="calendario_9" toHistorial="visualizarCitas_13" toPacientes="pacientes_11"/>} />
              <Route path="comentarios_doc_20" element={<ComentariosDoc20 />} />
              <Route path="modificar_datos_8" element={<ModificarDatos8/>} />
              <Route path="calendario_9" element={<Calendario9/>} />
              <Route path="visualizarCitas_13" element={<VisualizarCitas13 />} />
              <Route path="preg_priv_doc_19" element={<PregPrivDoc19 />} />
              <Route path="preg_pub_doc_18" element={<PregPubDoc18 />} />
              <Route path="finalizarCita_16" element={<FinalizarCita16 />} />
              <Route path="historiaClinica_15" element={<HistoriaClinica15 />} />
              <Route path="historicoConsultas_17" element={<HistoricoConsultas17 />} />
              <Route path="informacionPaciente_14" element={<InformacionPaciente14 />} />
              <Route path="pacientes_11" element={<Pacientes11 />} />

            </Route>
            <Route path="recuperar_doc" element={<RecuperarDoc />} />
          </Route>



          <Route path="registrar_6" id="2">
            <Route index element={<Registrar6 toRegistrar="iniciar_7" />} />
            <Route path="iniciar_7" >
              <Route index element={<Iniciar7 toRegistrar="/registrar_6" />} />
              <Route path="inicio_10">
                <Route index element={<Inicio10 />} />
                {
                  rutas.map((ruta) => (
                    <Route path={ruta.path} element={ruta.element} />
                  ))
                }
              </Route>
              <Route path="recuperar_doc" element={<RecuperarDoc />} />
            </Route>
          </Route>

          <Route path="newaccount_22" id="3">
            <Route index element={<Newaccount22 toRegistrar="login_21" />} />
            <Route path="login_21" >
              <Route index element={<Login21 toRegistrar="/newaccount_22" />} />
              <Route path="inicio_paciente_23">
                <Route index element={<InicioPaciente23 />} />
                <Route path="perfil_del_doc_pac_25">
                  <Route index element={<PerfilDelDocPac25 cambiarInfo={setMostrarInfo} />} />
                  <Route path="perfil_del_doc_pac2">
                    <Route index element={<PerfilDelDocPac2 info={mostrarInfo} />} />
                    <Route path="reserva_cita_27" element={<ReservaCita27 />} />
                  </Route>
                </Route>
                <Route path="preg_pub_pac_26" element={<PregPubPac26 />} />
              </Route>
              <Route path="recuperar_pac" element={<RecuperarPac />} />
            </Route>
          </Route>

          <Route path="login_21" id="4">
            <Route index element={<Login21 toRegistrar="newaccount_22" />} />
            <Route path="newaccount_22" element={<Newaccount22 toRegistrar="/login_21" />} />
            <Route path="inicio_paciente_23">
              <Route index element={<InicioPaciente23 />} />
              <Route path="perfil_del_doc_pac_25">
                <Route index element={<PerfilDelDocPac25 cambiarInfo={setMostrarInfo} />} />
                <Route path="perfil_del_doc_pac2">
                  <Route index element={<PerfilDelDocPac2 info={mostrarInfo} />} />
                  <Route path="reserva_cita_27" element={<ReservaCita27 />} />
                </Route>
              </Route>
              <Route path="preg_pub_pac_26" element={<PregPubPac26 />} />
            </Route>
            <Route path="recuperar_pac" element={<RecuperarPac />} />
          </Route>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
