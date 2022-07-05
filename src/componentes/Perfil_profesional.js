import logo_doctor from '../logo doctor.png'
const Perfil_Profesional = props => {
  return (
    <div>
      <div className="row mb-1 ">
        <img className="col-4" src={logo_doctor} id="logo-doc"></img>
          <div className="col-8">
            <div>Nombre: Kelli Elena Bernal Gallardo</div>
            <div>Especialidad: Ginecóloga</div>
          </div>
      </div>
      <div className="border-dark border-top " ></div>
      <div className="row border-top border-dark mt-2 ">
        <div className="border-bottom"><div className="div1">Direccion: Prolongación Ayacucho 494</div></div>
        <div className="border-bottom"><div className="div1">Horario: Lunes de 9:00 a.m. - 1:00 p.m.</div></div>
        <div className="border-bottom"><div className="div1">Modalidad: Presencial</div></div>
        <div className="border-bottom"><div className="div1">Precio consulta: 100 Nuevos Soles</div></div>
        <div className="border-bottom"><div className="div1">Comentarios: Ninguno</div></div>
        <div className="border-bottom"><div className="div1">Calificación: -</div></div>
      </div>
      <div>{console.log(props.datos)}</div>
    </div>
  )
}
export default Perfil_Profesional;