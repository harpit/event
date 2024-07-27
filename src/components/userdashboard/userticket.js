import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BOOKTicket() {
  const [tickets, setTickets] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/ticketdetails")
      .then((response) => {
        setTickets(response.data);
        setFilteredTickets(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    filterTickets(e.target.value);
  };

  const filterTickets = (query) => {
    const filtered = tickets.filter((ticket) => {
      return (
        ticket.name.toLowerCase().includes(query.toLowerCase()) ||
        ticket.eventname.toLowerCase().includes(query.toLowerCase()) ||
        ticket.eventprice.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredTickets(filtered);
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
            <Link to="/userdashboard" class="nav-link ">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p className="text-light">
        Data
              <i></i>
              </p>
            </Link>
            </li>
            <li class="nav-item has-treeview menu-open">
            <Link to="/usereventstatus" class="nav-link ">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p className="text-light">
           Events
              <i></i>
              </p>
            </Link>
            <Link to="/bookticketstatus" class="nav-link ">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p className="text-light">
           Tickets Status
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
            <br />
            <div className="row mb-2">
              <div className="col-lg-12">
                <div className="search-container">
                  <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Search by Name, Event Name, or Event Price"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </div>
                <br></br>
                <table className="table table-bordered text-center">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Event Name</th>
                      <th>Event Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTickets.map((ticket, index) => (
                      <tr key={index}>
                        <td>{ticket.name}</td>
                        <td>{ticket.eventname}</td>
                        <td>{ticket.eventprice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BOOKTicket;