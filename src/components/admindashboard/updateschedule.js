import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Swal from 'sweetalert2';


function UpdateSheduledata()
{
    const [date,setdate]=useState('');
    const [day,setday]=useState('');
    const [time,settime]=useState('');
    const [subject,setsubject]=useState('');
    const [venue,setvenue]=useState('');
    
    const navigate = useNavigate();

    const {id} = useParams();
    useEffect(()=>
    {
        axios.get('http://localhost:4000/getscheduleupdate/'+id).then(shedulevalue =>{console.log(shedulevalue)
    
    setdate(shedulevalue.data.data)
    setday(shedulevalue.data.day)
    settime(shedulevalue.data.time)
    setsubject(shedulevalue.data.subject)
    setvenue(shedulevalue.data.venue)
    
    
    })
    },[])
    const savedata = () =>
    {
        axios.put('http://localhost:4000/updatedrecordschedule/'+id, {date,day,time,subject,venue})
        toast('Updated', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            
            });
    
    
            setTimeout(()=>
            {
    navigate('/sheduledatefetch')
            },2000)
    
    }
    return(
      <div>
            <div className="wrapper">


            


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
    <ToastContainer/>
    <form id="addeventform">
        <h1>Add Schedule</h1>
        <br></br>
    <div data-mdb-input-init class="form-outline mb-4">
    <input type="date" onChange={(e)=>setdate(e.target.value)} id="form4Example1" value={date} class="form-control" placeholder="Date Of Event"/>
  </div>
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="text" onChange={(e)=>setday(e.target.value)} id="form4Example1" value={day} class="form-control" placeholder="Day Of Event"/>
  </div>
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="text" onChange={(e)=>settime(e.target.value)} id="form4Example1" value={time} class="form-control" placeholder="Time Of Event"/>
  </div>
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="text" onChange={(e)=>setsubject(e.target.value)} id="form4Example1" value={subject} class="form-control" placeholder="Title Of Event"/>
  </div>
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="text" onChange={(e)=>setvenue(e.target.value)} id="form4Example1" value={venue} class="form-control" placeholder="Venue Of Event"/>
  </div>
<div data-mdb-input-init class="form-outline mb-4">
<button type="button" onClick={savedata} class="btn btn-primary">Add Schedule</button>
</div>
    </form>

    </div> 

 
        </div>


</div>
</div>


{/* Work end */}

</div>


 
      
    )
}



export default UpdateSheduledata