import Comentario from "./componentes/Comentario";

function Comentarios_doc_20() {
  return (
    <div>
      <h1 class="text-center">Comentarios de los Pacientes</h1>
      <div class="div1">
        <select class="mb-2">
          <option>*****</option>
          <option>****</option>
          <option>***</option>
          <option>**</option>
          <option>*</option>
        </select>
        <div class="border-top">
          <div class="row">
            <div class="mt-2 col-6">
              Comentarios
            </div>
            <div class="col-1">
              Calificación
            </div>
          </div>
          <Comentario />
          <Comentario />
        </div>
      </div>
      
    </div>
  );
}
export default Comentarios_doc_20;