import Inicio from "./componentes/Inicio";
function Inicio_10(props) {
  return (
    <div>
      <Inicio toModify={props.toModify} toCalendar={props.toCalendar} toHistorial={props.toHistorial} toPacientes={props.toPacientes}/>
    </div>
  );
}
export default Inicio_10;