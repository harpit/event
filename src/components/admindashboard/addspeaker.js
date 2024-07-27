import axios from "axios";
import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function AddSpeaker(){
    const[name,setname]=useState('');
    const[simage,setspeakerimage]=useState('');
   








 const addspeaker=async()=>{
    if (name === "")
    {
      Swal.fire({
              title: "Validation Message",
              text: "Name Field iS Required*",
              icon: "error"
            });
    }
    else if(simage ==="")
    {
        Swal.fire({
            title: "Validation Message",
            text: "Image Field iS Required*",
            icon: "error"
          });
    }
    else{
        const formData = new FormData();
        
        formData.append("name",name);
        formData.append("simage",simage);
        try {
             axios.post('http://localhost:4000/addspeaker', formData, {
              headers: { "Content-Type": "multipart/form-data" },
            });
            // Show success message
            Swal.fire({
              title: "Success!",
              text: "Speaker added",
              icon: "success",
              onClose: () => {
                // Reset form fields
                setname('');
              setspeakerimage('');
              }
            });
          } catch (error) {
            console.error(error);
            Swal.fire({
              title: "Error",
              text: "Failed to add Speaker. Please try again later.",
              icon: "error"
            });
          }
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

<div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <form id="talkwithadmin">
              <h1>Add Speaker</h1>

                  

              <br></br>
              <div className="form-outline mb-4">
                <input type="text" className="form-control w-50" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Your Name" />
              </div>
              <div className="form-outline mb-4">
              <input type="file" className="form-control w-50" accept="image/*" onChange={(e)=>setspeakerimage(e.target.files[0])}/>

              </div>
              <div className="form-outline mb-4">
                <button onClick={addspeaker} type="button" className="btn btn-main-md orange-btn">
                    Send Message
                </button>
              </div>
              </form>

             
             
              </div>





              </div>
              </div>

             
   

    
        </div>
    )
}
export default AddSpeaker