
import Especialidad from "./componentes/Especialidad";
import Medico from "./componentes/Medico";


function Perfil_del_doc_pac_25(props) {
    const datosDocs=[{Nombre:"Kelli Elena Bernal Gallardo",Especialidad:"Ginecóloga",Dirección:"Prolongación Ayacucho 494",
                    Horario:"Lunes de 9:00 a.m. - 1:00 p.m.",Modalidad:"Presencial",Precio_consulta:"100 Nuevos Soles",
                    Comentarios:"Ninguno",Calificación:"-"}]
    
  
 
    return (
    <div>
      <h1 class="text-center m-5">Lista de Doctores</h1>
      <div class="div1">
        <div class="mb-2">
          <span>Especialidad</span>
          <Especialidad />
        </div>
        <div class="border-bottom"></div>
        {
          datosDocs.map(datos=>(
            <div class="border border-dark docs mt-2">
              <Medico infoDoc={datos} cambiarInfo={props.cambiarInfo}/>
            </div>
          ))
        }
      </div>

    </div>
    )
  
}
export default Perfil_del_doc_pac_25;