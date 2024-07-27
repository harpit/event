import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function AddFloorPlan(){

    const [venue, setvenue]=useState('');
    const [number, setnumber]=useState('');
    const [Capacity, setcapacity]=useState('');
    const [floorimage, setfloorimage]=useState('');



    const [schedulevenue, setSchedulevenue] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/shedulefetch')
            .then(response => {
                setSchedulevenue(response.data.map(schedule => schedule.venue));
      
            })
            .catch(error => console.error(error));
      }, []);
      
      const addfloorplan=async () => {
        if (number === "")
  {
    Swal.fire({
			title: "Validation Message",
			text: "Number Field Is Required*",
			icon: "error"
		  });
  }
  else if (Capacity === "")
  {
    Swal.fire({
            title: "Validation Message",
            text: "Capacity Field Is Required*",
            icon: "error"
    });
  }
  else if (venue === "")
  {
    Swal.fire({
			title: "Validation Message",
			text: "Venue Field Is Required*",
			icon: "error"
		  });
  }

  else{
    //   axios.post('http://localhost:4000/floorplan',{number,Capacity,venue})
    //  Swal.fire({
	// 	 	title: "Validation Message",
	// 	 	text: "Floor Plan Added",
	// 	 	icon: "success"
	// 	   });
  const formdata = new FormData();
  formdata.append("number",number);
  formdata.append("Capacity",Capacity);
  formdata.append("venue",venue);
  formdata.append("floorimage",floorimage);
 
    await axios.post('http://localhost:4000/floorplan', formdata, {
      headers: { "Content-Type": "multipart/form-data" },
    },
    Swal.fire({
      title: "Message",
      text: "Floor Added Successfully",
      icon: "success"
      })
    )
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

<div class="content-wrapper">
  
  <div class="content-header">


    <div class="container-fluid">
    <form id="addeventform">
        <h1>Add Floor Plan</h1>
        <br></br>
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="number" id="form4Example1" value={number} onChange={(e) => setnumber(e.target.value)} class="form-control w-50" placeholder="Floor Number"/>
  </div>
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="number"  id="form4Example1"value={Capacity} onChange={(e) => setcapacity(e.target.value)}  class="form-control w-50" placeholder="Capacity Of people"/>
  </div>
  <div className="form-outline mb-4">
                <label className="form-label" htmlFor="customFile">Select Venue That Best Suits For The Events</label>
                <select className="form-control w-50" value={venue} onChange={(e) => setvenue(e.target.value)}>
                  <option selected>Select Venue</option>
                  {schedulevenue.map(schedulevenues => (
                        <option key={schedulevenues} value={schedulevenues}>{schedulevenues}</option>
                    ))}
                </select>
              </div>
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="file" id="form4Example1" accept="image/*"  onChange={(e) => setfloorimage(e.target.files[0])} class="form-control w-50"/>
  </div>
<div data-mdb-input-init class="form-outline mb-4">
<button type="button" onClick={addfloorplan} class="btn btn-main-md orange-btn">Add Floor</button>

</div>
    </form>

    </div>   
    </div>
</div>

        </div>
    )
}

export default AddFloorPlan;