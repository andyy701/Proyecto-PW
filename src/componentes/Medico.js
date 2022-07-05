import logo_doctor from "../logo doctor.png"
import { Link } from "react-router-dom";
const Medico=(props)=>{
    const cambiarEstado=_=>{
      props.cambiarInfo([props.infoDoc])
    }
    return(
      <div>
        <div class="row">
                {/* <img class="col-5 div1" src="logo doctor.png" id="logo-doc"></img> */}
                <img src={logo_doctor} id="logo-doc"></img>
                <div class="col-7">
                    <div className="doc-a">
                      <Link to="perfil_del_doc_pac2" onClick={cambiarEstado}>Dra. Kelli Elena Bernal Gallardo</Link>
                    </div>
                    <div>
                        Ginecóloga
                    </div>
                </div>
            </div>
      </div>
    )
}
export default Medico;