import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function User()
{
    const [user, setuser] = useState([])
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredUser, setFilteredUser] = useState([]);
    useEffect(()=>
    
    {
axios.get('http://localhost:4000/userdetails')
.then(user=>setuser(user.data)).catch(err=>console.log(err))
    
console.log(user);
}

,[])
const handleSearch = (e) => {
  setSearchQuery(e.target.value);
};
const deleteuserrecord=(id)=>{
  axios.delete('http://localhost:4000/userdelete/'+id).then(res=>{console.log(res)
  window.location.reload()
});
}

useEffect(() => {
  const filteredData = user.filter((data) => {
    return (
      data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.type.toLowerCase().includes(searchQuery.toLowerCase()) 
    
    );
  });
  setFilteredUser(filteredData);
}, [searchQuery, user]);



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
    <div className="search-container">
                <input type="text" className="form-control w-50" placeholder="Search by Name, Email or type" value={searchQuery} onChange={handleSearch} />
              </div>
              <br></br>
      <div class="row mb-2">
        <div class="col-lg-12">
        <table className="table table-bordered text-center">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Type</th>
              
                <th>Action</th>
            </tr>
            {
                filteredUser.map((data , index)=>
                <tr>
                    <td>{data.name}</td>

                    <td>{data.email}</td>
                    <td>{data.type}</td>
                  
<td>
    <a className="btn btn-danger text-light"onClick={()=> deleteuserrecord(data._id)}>Delete</a>&nbsp;&nbsp;
    


</td>
                    </tr>)
            }
          </table>

          
 
        </div>
   
      </div>
 
    </div>

       
    </div>
</div>


 {/* Work end */}

</div>
        </div>
    )
}


export default User