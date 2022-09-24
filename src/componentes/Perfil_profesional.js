import { Link } from 'react-router-dom';
import logo_doctor from '../logo doctor.png'
const Perfil_Profesional = props => {
  return (
    <div>
      <div className="row mb-1 ">
        <img className="col-4" src={logo_doctor} id="logo-doc" alt=""></img>
          <div className="col-8">
            <div>Nombre: {props.datos.Nombre}</div>
            <div>Especialidad: {props.datos.Especialidad}</div>
          </div>
      </div>
      <div className="border-dark border-top " ></div>
      <div className="row border-top border-dark mt-2 ">
        <div className="border-bottom div1">Dirección: {props.datos.Dirección}</div>
        <div className="border-bottom div1">Horario: {props.datos.Horario}</div>
        <div className="border-bottom div1">Modalidad: {props.datos.Modalidad}</div>
        <div className="border-bottom div1">Precio consulta: {props.datos.Precio_consulta}</div>
        <div className="border-bottom div1">Comentarios: {props.datos.Comentarios}</div>
        <div className="border-bottom div1">Calificación: {props.datos.Calificación}</div>
        
      </div>
      <Link to="reserva_cita_27">Reservar cita</Link>
    </div>
  )
}
export default Perfil_Profesional;