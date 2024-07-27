import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function ScheduleAndDateAdd()
{

  
const [date,setdate]=useState('');
const [day,setday]=useState('');
const [time,settime]=useState('');
const [subject,setsubject]=useState('');
const [venue,setvenue]=useState('');
const [speaker, setSpeaker] = useState('');
  const [eventSpeakers, setEventSpeakers] = useState([]);

  useEffect(() => {
    // Fetch speaker data
    axios.get('http://localhost:4000/viewspaker')
      .then(response => {
        // Set the fetched speaker data
        setEventSpeakers(response.data);
      })
      .catch(error => console.error(error));
  }, []);
    const Addshedule=()=>{
        if (date==="")
        {
            Swal.fire({
                title: "Validation Message",
                text: "Date Field is Required*",
                icon: "error"
              });   
        }
        else if (day==="")
        {
            Swal.fire({
                title: "Validation Message",
                text: "Day Field is Required*",
                icon: "error"
              });   
        }
        else if (time==="")
        {
            Swal.fire({
                title: "Validation Message",
                text: "Time Field is Required*",
                icon: "error"
              });   
        }
        else if (subject==="")
        {
            Swal.fire({
                title: "Validation Message",
                text: "Subject Field is Required*",
                icon: "error"
              });   
        }
        else if (venue==="")
        {
            Swal.fire({
                title: "Validation Message",
                text: "Venue Field is Required*",
                icon: "error"
              });   
        }
        else if(speaker==="")
        {
          Swal.fire({
                title: "Validation Message",
                text: "Speaker Field is Required*",
                icon: "error"
              });
        }
        else if (speaker==="")
        {
          Swal.fire({
                title: "Validation Message",
                text: "Speaker Field is Required*",
                icon: "error"
              });
        }
        else{
            axios.post('http://localhost:4000/shedule',{date,day,time,subject,venue,speaker})
            Swal.fire({
                title: "Validation Message",
                text: "Shedule Registered",
                icon: "success"
              }); 
        }
    }
        return(
            <div>



<aside class="main-sidebar sidebar-dark-primary elevation-4">

<a href="index3.html" class="brand-link">

<span class="brand-text font-weight-light text-center">Event Sphere</span>
</a>


<div class="sidebar">

<nav class="mt-2">
  <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
   
    <li class="nav-item has-treeview menu-open">
   
      <Link to="/admindashboard" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
      Report
        <i></i>
        </p>
      </Link>
      
      <Link to="/contactview" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
     Contact Data
        <i></i>
        </p>
      </Link>
      </li>
      <li class="nav-item has-treeview menu-open">
      <Link to="/userdata" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
      Registerations
        <i></i>
        </p>
      </Link>
     
      <Link to="/floorplan" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
        Add Floor Plan 
        <i></i>
        </p>
      </Link>
      <Link to="/adminfloorplan" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
        View Floor Plan 
        <i></i>
        </p>
      </Link>
      <Link to="/vieweventreq" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
     Events Request
        <i></i>
        </p>
      </Link>
      <Link to="/viewevent" class="nav-link">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
     Events Detail
        <i></i>
        </p>
      </Link>
      <Link to="/sheduledateadd" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
     Schedule Add
        <i></i>
        </p>
      </Link>
      <Link to="/sheduledatefetch" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
     Schedule Detail
        <i></i>
        </p>
      </Link>
      <Link to="/addspeaker" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
     Add Speaker
        <i></i>
        </p>
      </Link>
       <Link to="/fetchspeaker" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
    View Speaker
        <i></i>
        </p>
      </Link>
    
      <Link to="/adminticket" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
     Tickets
        <i></i>
        </p>
      </Link>

      <Link to="/viewfeedback" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
     View Feedback Record
        <i></i>
        </p>
      </Link>
      <Link to="/viewsubscription" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
     Subscription
        <i></i>
        </p>
      </Link>
      </li>
      
      <li class="nav-item has-treeview menu-open">
     

      </li>
</ul>
      </nav>
 

</div>

</aside>
    {/* Work Start */}
    <div class="content-wrapper">
  
  <div class="content-header">


    <div class="container-fluid">
    <form id="addeventform">
        <h1>Add Schedule</h1>
        <br></br>
    <div data-mdb-input-init class="form-outline mb-4">
    <input 
  type="date" 
  id="inputdate" 
  onChange={(e)=>setdate(e.target.value)} 
  value={date} 
  min={(new Date().getFullYear()) + '-' + ((new Date().getMonth()+1) < 10 ? '0' : '') + (new Date().getMonth()+1) + '-' + ((new Date().getDate()+1) < 10 ? '0' : '') + (new Date().getDate()+1)} 
  class="form-control w-50" 
  placeholder="Date Of Event"
/>  </div>
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="text" onChange={(e)=>setday(e.target.value)} id="form4Example1" value={day} class="form-control w-50" placeholder="Day Of Event"/>
  </div>
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="text" onChange={(e)=>settime(e.target.value)} id="form4Example1" value={time} class="form-control w-50" placeholder="Time Of Event"/>
  </div>
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="text" onChange={(e)=>setsubject(e.target.value)} id="form4Example1" value={subject} class="form-control w-50" placeholder="Title Of Event"/>
  </div>
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="text" onChange={(e)=>setvenue(e.target.value)} id="form4Example1" value={venue} class="form-control w-50" placeholder="Venue Of Event"/>
  </div>
  <div className="form-outline mb-4">
                <label className="form-label" htmlFor="speakerSelect">Select Speaker</label>
                <select id="speakerSelect" className="form-control w-50" value={speaker} onChange={(e) => setSpeaker(e.target.value)}>
                  <option selected>Select Speaker</option>
                  {eventSpeakers.map(speaker => (
                    <option key={speaker._id} value={speaker.name}>{speaker.name}</option>
                  ))}
                </select>
              </div>
<div data-mdb-input-init class="form-outline mb-4">
<button type="button" onClick={Addshedule} class="btn btn-main-md orange-btn">Add Schedule</button>
</div>
    </form>

    </div>   
    </div>
</div>


 {/* Work end */}

            </div>
        )
}
export default ScheduleAndDateAdd