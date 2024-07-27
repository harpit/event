import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Swal from 'sweetalert2';


function UpdateUserData()
{

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [type, settype] = useState('');
    
    const navigate = useNavigate();

    const {id} = useParams();
    useEffect(()=>
    {
        axios.get('http://localhost:4000/getdataupdate/'+id)
        .then(uservalue =>{console.log(uservalue)
    
    setname(uservalue.data.name)
    setemail(uservalue.data.email)
    setpass(uservalue.data.pass)
    settype(uservalue.data.type)
    
    
    })
    },[])
    const savedata = () =>
    {
        axios.put('http://localhost:4000/updatedrecord/'+id, {name,email,pass,type})
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
    navigate('/userdata')
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


<div class="container">
            <h3 className='mt-3'> Update User Information Form</h3>
<ToastContainer/>
                <input type='text' placeholder='Name'
                 value={name} onChange={(e)=>setname(e.target.value)} 
                 className='form-control w-50 mt-3'/>
                <input type='email' placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)} className='form-control w-50 mt-3'/>
                <input type='password' placeholder='Password ' value={pass} onChange={(e)=>setpass(e.target.value)} className='form-control w-50 mt-3'/>
<select onChange={(e)=>settype(e.target.value)} value={type} className='form-control w-50 mt-3'>
<option disabled selected>Choose Type</option>
<option value="user">User</option>
<option value="exhibitor">Exhibitor</option>
</select>
                <button  onClick={savedata} className='btn btn-dark mt-3 mb-3'>Update Record</button>
            </div>


 
        </div>


</div>
</div>


{/* Work end */}

</div>


 
      
    )
}



export default UpdateUserData