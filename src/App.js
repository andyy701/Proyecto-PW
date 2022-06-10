import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
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
import Recuperar from './recuperar';
import Registrar_6 from './registrar_6';
import Reserva_cita_27 from './reserva cita_27';
import VisualizarCitas_13 from './visualizarCitas_13';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  
  return (
    <BrowserRouter>
      
      <Routes>
        
        <Route path="/"/>
        <Route path="iniciar_7" element={<Iniciar_7/>}>
           <Route  element={<Registrar_6/>}/>
        </Route>
        
        <Route path="registrar_6" element={<Registrar_6/>}/>
        <Route path="newaccount_22" element={<Newaccount_22/>}/>
        <Route path="login_21" element={<Login_21/>}/>

        <Route path="calendario_9" element={<Calendario_9/>}/>
        <Route path="comentarios_doc_20" element={<Comentarios_doc_20/>}/>
        <Route path="finalizarCita_16" element={<FinalizarCita_16/>}/>
        <Route path="historiaClinica_15" element={<HistoriaClinica_15/>}/>
        <Route path="historicoConsultas_17" element={<HistoricoConsultas_17/>}/>
        <Route path="informacionPaciente_14" element={<InformacionPaciente_14/>}/>
        
        <Route path="inicio_10" element={<Inicio_10/>}/>
        <Route path="inicio_paciente_23" element={<Inicio_paciente_23/>}/>
        
        <Route path="modificar_datos_8" element={<Modificar_datos_8/>}/>
        
        <Route path="pacientes_11" element={<Pacientes_11/>}/>
        <Route path="perfil_del_doc_pac_25" element={<Perfil_del_doc_pac_25/>}/>
        <Route path="perfil_del_doc_pac2" element={<Perfil_del_doc_pac2/>}/>
        <Route path="preg_priv_doc_19" element={<Preg_priv_doc_19/>}/>
        <Route path="preg_pub_doc_18" element={<Preg_pub_doc_18/>}/>
        <Route path="preg_pub_pac_26" element={<Preg_pub_pac_26/>}/>
        <Route path="recuperar" element={<Recuperar/>}/>
        
        <Route path="reserva_cita_27" element={<Reserva_cita_27/>}/>
        <Route path="visualizarCitas_13" element={<VisualizarCitas_13/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
