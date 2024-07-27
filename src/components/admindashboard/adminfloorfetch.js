import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminFloorFetch() {
  const [floor, setFloor] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFloor, setFilteredFloor] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/viewfloor')
      .then(response => {
        setFloor(response.data);
        setFilteredFloor(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterFloor = (query) => {
    let filtered = floor.filter((f) => {
      const numberMatch = f.number.toString().toLowerCase().includes(query.toLowerCase());
      const venueMatch = f.venue.toLowerCase().includes(query.toLowerCase());
      const capacityMatch = f.Capacity.toString().toLowerCase().includes(query.toLowerCase());
      // Include floor if the number, venue, or capacity matches the search query
      return numberMatch || venueMatch || capacityMatch;
    });
    setFilteredFloor(filtered);
  };

  useEffect(() => {
    filterFloor(searchQuery);
  }, [searchQuery]);

  const deleteFloorRecord = (id) => {
    axios.delete(`http://localhost:4000/deletefloorrecord/${id}`)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };
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
 <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="search-container">
              <input type="text" className="form-control w-50" placeholder="Search by Floor Number, Venue, or Capacity" value={searchQuery} onChange={handleSearch} />
            </div>
            <br />
            <div className="row">
              {filteredFloor.map((floor) => (
                <div className="col-md-4 mb-4" key={floor._id}>
                  <div className="card">
                    <img className="card-img-top" src={`images/dbimages/${floor.floorimage}`} alt="Floor" style={{ width: "100%", height: "250px", objectFit: "cover" }} />
                    <div className="card-body">
                      <h6 className="card-text">Floor Number: {floor.number}</h6>
                      <h6 className="card-text">Capacity Of People: {floor.Capacity}</h6>
                      <h6 className="card-text">Name Of Venue: {floor.venue}</h6>
                      <button className="btn btn-danger text-light" onClick={() => deleteFloorRecord(floor._id)}>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminFloorFetch;