import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FloorFetch () {
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

  
return(
    <div>
 <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
          <span className="brand-text font-weight-light text-center">Event Sphere</span>
        </a>
        <div className="sidebar">
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li className="nav-item has-treeview menu-open">
                <Link to="/exhibitordashboard" className="nav-link ">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p className="text-light">My Profile<i></i></p>
                </Link>
              </li>
              <li className="nav-item has-treeview menu-open">
                <Link to="/fetchfloor" className="nav-link ">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p className="text-light">Floor Plan<i></i></p>
                </Link>
              </li>
              <li className="nav-item has-treeview menu-open">
                <Link to="/addevent" className="nav-link ">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p className="text-light">Add Events<i></i></p>
                </Link>
              </li>
              <li className="nav-item has-treeview menu-open">
                <Link to="/eventrequesttoadmin" className="nav-link ">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p className="text-light">Request For Events<i></i></p>
                </Link>
                <Link to="/exhibitoreventstatus" className="nav-link ">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p className="text-light">My Events<i></i></p>
                </Link>
                <Link to="/exhibitorticketstatus" className="nav-link ">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p className="text-light">Tickets Status<i></i></p>
                </Link>
              </li>
              <li className="nav-item has-treeview menu-open">
                <Link to="/talkwithadmin" className="nav-link ">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p className="text-light">Communicate With Admin<i></i></p>
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
          <h1>Floor Plan Details</h1>
          <br></br>
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

export default FloorFetch;