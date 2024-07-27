import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ExhibitorDashboard()
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


useEffect(() => {
  const filteredData = user.filter((data) => {
    return (
      data.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      data.type.toLowerCase() === 'exhibitor'
    );
  });
  setFilteredUser(filteredData);
}, [searchQuery, user]);


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
        <Link to="/exhibitordashboard" class="nav-link ">
          <i class="nav-icon fas fa-tachometer-alt"></i>
          <p className="text-light">
       My Profile
          <i></i>
          </p>
        </Link>
        
        </li>
        <li className="nav-item has-treeview menu-open">
                <Link to="/fetchfloor" className="nav-link ">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p className="text-light">Floor Plan<i></i></p>
                </Link>
              </li>
        <li class="nav-item has-treeview menu-open">
        <Link to="/addevent" class="nav-link ">
          <i class="nav-icon fas fa-tachometer-alt"></i>
          <p className="text-light">
       Add Events
          <i></i>
          </p>
        </Link>
        </li>
        
        <li class="nav-item has-treeview menu-open">
        <Link to="/eventrequesttoadmin" class="nav-link ">
          <i class="nav-icon fas fa-tachometer-alt"></i>
          <p className="text-light">
      Request For Events
          <i></i>
          </p>
        </Link>
        <Link to="/exhibitoreventstatus" class="nav-link ">
          <i class="nav-icon fas fa-tachometer-alt"></i>
          <p className="text-light">
      My Events
          <i></i>
          </p>
        </Link>
        <Link to="/exhibitorticketstatus" class="nav-link ">
          <i class="nav-icon fas fa-tachometer-alt"></i>
          <p className="text-light">
       Tickets Status
          <i></i>
          </p>
        </Link>
   
        </li>
        <li class="nav-item has-treeview menu-open">
        <Link to="/talkwithadmin" class="nav-link ">
          <i class="nav-icon fas fa-tachometer-alt"></i>
          <p className="text-light">
       Communicate With Admin
          <i></i>
          </p>
        </Link>
        </li>
</ul>
        </nav>
 

</div>

</aside>
    {/* Work Start */}
    <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="search-container">
              <input type="text" className="form-control w-25" placeholder="Search by Name or Type" value={searchQuery} onChange={handleSearch} />
            </div>
            <br />
            <div className="row mb-2">
              <div className="col-lg-12">
                <table className="table table-bordered text-center">
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                  </tr>
                  {filteredUser.map((data, index) => (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.type}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExhibitorDashboard