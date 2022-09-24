import { Link } from "react-router-dom";
import Historia_clinica_del_paciente from "./componentes/Historia_clinica_del_paciente";

function InformacionPaciente_14() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark" id="barra">
        <Link class="navbar-brand" >Barra de Navegación</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" >Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" >Solicitar Cita</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" >Acerca de Nosotros</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link disabled" >Regresar</Link>
            </li>
          </ul>
        </div>
      </nav>
      <header>
        <h1>INFORMACIÓN DEL PACIENTE</h1>
      </header>
      <div class="datosPersonales">
        <h2>DATOS PERSONALES</h2>
        <ul>
          <li>Número de historia: 161181</li>

          <li>Fecha de ingreso: 21 de enero de 2021 </li>

          <li>DNI ó C.I: 15.166.728</li>

          <li>Apellidos: Nouel Navarro</li>

          <li>Nombres: Orlando David</li>

          <li>Edad: 35</li>

          <li>Sexo: Masculino </li>

          <li>Ocupación: Abogado </li>

          <li>Fecha de Nacimiento: 17 de diciembre de 1976 </li>

          <li>Estado Civil: Soltero </li>

          <li>Nacionalidad: venezolano </li>

          <li>Dirección de residencia: Santa Paula, Caracas. Venezuela.</li>

          <li>Grado de instrucción: bachiller y profesional graduado universitario </li>

          <li>Motivo de hospitalización: Mareos, vómitos después de comer. Y fuertes dolores de cabeza.</li>

          <li>Enfermedad actual: Paciente masculino (de 35 años de edad) sin antecedentes. Ingresa al área de emergencia, acompañado de 2 familiares (madre y pareja) el día 21 de enero 2021, a las 9:00 pm, por un dolor fuerte de abdomen y estomacal. De inicio súbito y carácter cólico (que no cede al uso de medicamentos antiespasmódicos, ingeridos sin receta médica) como la buscapina.</li>

          <li>El dolor aumentó por ingerir platos de comidas grasosas. Es por ello que, presenta síntomas como: vómitos, náuseas, escalofríos en brazos, ambas piernas y dolor de cabeza, frecuente.</li>

          <li>Personal de guardia en la clínica en ese momento, le realizaron diversos exámenes de laboratorio y estudios como eco abdominal, tomografía de cráneo, rayos x del tórax, entre otros, con el fin de evaluar todos sus órganos.</li>
        </ul>

        <h2>
          Antecedentes del malestar actual
        </h2>

        <ul>
          <li>El paciente (adulto) de nombre Orlando David, cuenta que hace aproximadamente 3 meses, comenzó a sentir malestares de tipo cólico en el estómago, a nivel del abdomen, de baja intensidad (4/10). Informa que dura varias horas. Manifiesta “siento ardor en las paredes de la barriga”.</li>
          <li>No tuvo vómitos imprevistos. Indica que tomó un té de manzanilla caliente para aliviar un poco el dolor, sin embargo en días posteriores reapareció la dolencia.</li>
        </ul>

        <h2>Antecedentes familiares</h2>

        <ul>
          <li>Madre: Viva, adulto mayor de 65 años de edad (estado de salud sana)</li>
          <li>Padre: Falleció hace 10 años por la enfermedad cáncer de colon. Padeció unos 3 años con la misma.</li>
        </ul>

        <h2>
          Antecedentes personales
        </h2>

        <ul>
          <li>Hábitos: Señala que cada 15 días toma alcohol (copas de vino o tragos de whisky) en reuniones sociales, entre amigos o familiares. Específicamente los fines de semana.</li>

          <li>Cigarrillo o tabaco: niega. No es fumador, ni lo fue en la adolescencia. Indica que nunca le ha llamado la atención unirse a vicios.</li>

          <li>Drogas: Niega consumo</li>

          <li>El paciente vive con su pareja actual. Mujer, de 33 años de edad. Venezolana, profesional de la administración. Tienen una relación estable de 10 años, con planes a futuro de formar una familia.</li>
        </ul>

        <h2>
          Hábitos fisiológicos
        </h2>

        <ul>
          <li>Alimentación: Realiza las 3 comidas diarias (desayuno, almuerzo y cena) una sola merienda, por la tarde.</li>

          <li>Sueño: sufre de insomnio, ocasionalmente </li>

          <li>Sexualidad: Normal, con pareja estable.</li>

          <li>Ejercicios: practica como deporte fútbol de campo y fútbol sala, desde los 10 años de edad. Por lo tanto, ha sido un deportista activo. Actualmente enseña a un grupo de niños en una escuela especializada y en campamentos durante las vacaciones escolares. </li>

          <li>Alergias: Informa que es alérgico al polvo. Presenta estornudos recurrentes cuando limpian a su alrededor o arregla su closet de ropa personal.</li>
        </ul>
      </div>
      <Historia_clinica_del_paciente />
    </div>
  );
}
export default InformacionPaciente_14;