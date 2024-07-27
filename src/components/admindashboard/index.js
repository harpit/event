import axios from "axios";
import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  



//Count data and Use effect
const [speakercount ,setspeakercount] = useState(0)
const [eventcount ,seteventcount] = useState(0)
const [usercount ,setusercount] = useState(0)
const [feedbackcount ,setfeedbackcount] = useState(0)
const [schedulecount ,setschedulecount] = useState(0)
const [floorcount ,setfloorcount] = useState(0)
const[contactcount ,setcontactcount] = useState(0)
const [ticketcount ,setticketcount] = useState(0)
const[subscribecount ,setsubscribecount] = useState(0)
useEffect(() => {
  // Fetch data from Express.js server
  axios.get('http://localhost:4000/countdata')
    .then(response => {
      
      setspeakercount(response.data.speakercount);
      seteventcount(response.data.eventcount);
      setusercount(response.data.usercount);
      setfeedbackcount(response.data.feedbackcount);
      setschedulecount(response.data.schedulecount);
      setfloorcount(response.data.floorcount);
      setcontactcount(response.data.contactcount);
setticketcount(response.data.ticketcount)
setsubscribecount(response.data.subscribecount);

    })
  
}, []);

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
    <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
<h1 className="text-center">Annual Report</h1>
<br></br>
<div className="row">

  <div className="col-lg-4 col-md-6 col-sm-12">

<div className="card" id="card1" style={{ maxWidth: '400px' }}>
<Link  to="/userdata">

<h3 className="text-light text-center pt-3">Total Users</h3>
<h3 className="text-light text-center pt-3">{usercount}</h3>
</Link>
</div>
</div>
<div className="col-lg-4 col-md-6 col-sm-12">
<Link  to="/vieweventreq">
<div className="card" id="card1" style={{ maxWidth: '400px' }}>
<h3 className="text-light text-center pt-3">Total Events Request</h3>
<h3 className="text-light text-center pt-3">{eventcount}</h3>

</div>
</Link>
</div>
<div className="col-lg-4 col-md-6 col-sm-12">
<Link  to="/fetchspeaker">
<div className="card" id="card1" style={{ maxWidth: '400px' }}>
<h3 className="text-light text-center pt-3">Total Speakers</h3>
<h3 className="text-light text-center pt-3">{speakercount}</h3>

</div>
</Link>
</div>
<div className="col-lg-4 col-md-6 col-sm-12 mt-1">
<Link  to="/viewfeedback">
<div className="card" id="card1" style={{ maxWidth: '400px' }}>
<h3 className="text-light text-center pt-3">Total Feedback</h3>
<h3 className="text-light text-center pt-3">{feedbackcount}</h3>

</div>
</Link>
</div>
<div className="col-lg-4 col-md-6 col-sm-12 mt-1">
<Link  to="/sheduledatefetch">
<div className="card" id="card1" style={{ maxWidth: '400px' }}>
<h3 className="text-light text-center pt-3">Total Schedule</h3>
<h3 className="text-light text-center pt-3">{schedulecount}</h3>

</div>
</Link>
</div>
<div className="col-lg-4 col-md-6 col-sm-12 mt-1">
<Link  to="/contactview">
<div className="card" id="card1" style={{ maxWidth: '400px' }}>
<h3 className="text-light text-center pt-3">Total Contacts</h3>
<h3 className="text-light text-center pt-3">{contactcount}</h3>

</div>
</Link>
</div>
<div className="col-lg-4 col-md-6 col-sm-12 mt-1">
<Link  to="/adminticket">
<div className="card" id="card1" style={{ maxWidth: '400px' }}>
<h3 className="text-light text-center pt-3">Total Tickets</h3>
<h3 className="text-light text-center pt-3">{ticketcount}</h3>

</div>
</Link>
</div>


<div className="col-lg-4 col-md-6 col-sm-12 mt-1">
<Link  to="/adminfloorplan">
<div className="card" id="card1" style={{ maxWidth: '400px' }}>
<h3 className="text-light text-center pt-3">Total FloorPlan</h3>

<h3 className="text-light text-center pt-3">{floorcount}</h3>

</div>
</Link>

</div>
<div className="col-lg-4 col-md-6 col-sm-12 mt-1">
<Link  to="/viewsubscription">
<div className="card" id="card1" style={{ maxWidth: '400px' }}>
<h3 className="text-light text-center pt-3">Total Subscription</h3>

<h3 className="text-light text-center pt-3">{subscribecount}</h3>

</div>
</Link>

</div>

</div>
<div>

</div>


            </div>
          </div>
        </div>
        {/* Work end */}
      </div>
    </div>
  );
}

export default AdminDashboard;