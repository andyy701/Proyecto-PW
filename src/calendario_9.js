// import React from 'react';
// import './App.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';

export default function Calendario_9() {
  return (

    <div>
      <FullCalendar
        plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek"
        }}
        businessHours = {{
          startTime: "7:00",
          endTime: "19:00",
          daysOfWeek:[1,2,3,4,5]
        }}
        timeZone="local"
        events={[
          {title: "Cita con Diego",start:"2022-07-04T07:30:00",end:"2022-07-04T07:45:00",backgroundColor:"green"},
          {title: "Cita con Andy",start:"2022-07-12T08:45:00",end:"2022-07-12T09:00:00"},
          {title: "Cita con Angel",start:"2022-07-14T09:15:00",end:"2022-07-14T09:30:00",backgroundColor:"red"},
          {title: "Cita con Rossana",start:"2022-07-08T08:00:00",end:"2022-07-08T08:15:00",backgroundColor:"blue"}
        ]}
      /> 
    </div>


    // <div>
    //   <h1 className="title text-center m-5">Horario de atención</h1>

    //   <div className="container m-5">
    //     <div className="row justify-content-center">
    //       <div className="col-5">
    //         <label for="">Enlace de reunión:</label>
    //         <input type="url" value="https://ulima-edu-pe.zoom.us/j/97234952805?pwd=M3llQkcwZ0VBaDA2eHlOYmQ3WXRYUT09#success"/>
    //       </div>
    //     </div>

    //   </div>

    //   <div className="container m-5">
    //     <div className="row">
    //       <div className="col">
    //         <label for="">Fecha: </label>
    //         <input type="date" id='date' />
    //       </div>
    //       <div className="col">
    //         <label for="">Desde: </label>
    //         <input type="time" id='starttime' />
    //       </div>
    //       <div className="col">
    //         <label for="">Hasta: </label>
    //         <input type="time" id='endtime' />
    //       </div>
    //       <div className="col">
    //         <button className="btn btn-success">Agregar</button>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="calendar-container">

    //     <div className="header">
    //       <ul className="weekdays">
    //         <li>Domingo</li>
    //         <li>Lunes</li>
    //         <li>Martes</li>
    //         <li>Miércoles</li>
    //         <li>Jueves</li>
    //         <li>Viernes</li>
    //         <li>Sábado</li>
    //       </ul>
    //       <ul className="daynumbers">
    //         <li>15</li>
    //         <li>16</li>
    //         <li>17</li>
    //         <li>18</li>
    //         <li>19</li>
    //         <li>20</li>
    //         <li>21</li>
    //       </ul>
    //     </div>

    //     <div className="timeslots-container">
    //       <ul className="timeslots">
    //         <li>9<sup>am</sup></li>
    //         <li>10<sup>am</sup></li>
    //         <li>11<sup>am</sup></li>
    //         <li>12<sup>am</sup></li>
    //         <li>1<sup>pm</sup></li>
    //         <li>2<sup>pm</sup></li>
    //         <li>3<sup>pm</sup></li>
    //         <li>4<sup>pm</sup></li>
    //         <li>5<sup>pm</sup></li>
    //       </ul>
    //     </div>

    //     <div className="event-container">

    //        {/* <div className="slot slot-1"> 
    //         <div className="event-status"></div>
    //         <span>event a</span>
    //       </div>

    //       <div className="slot slot-2">
    //         <div className="event-status"></div>
    //         <span>event b</span>
    //       </div>

    //       <div className="slot slot-3">
    //         <div className="event-status"></div>
    //         <span>event c</span>
    //       </div>

    //       <div className="slot slot-4">
    //         <div className="event-status"></div>
    //         <span>event d</span>
    //       </div> */}

    //     </div>
    //   </div>


    //   {/*  <script src="bootstrap.bundle.min.js"></script> */}
    //   <script src="js/calendar.js"></script>
    // </div>
    
  );
}