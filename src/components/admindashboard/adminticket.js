import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminTicket() {
    const [tickets, setTickets] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredTickets, setFilteredTickets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/ticketdetails')
            .then(response => {
                setTickets(response.data);
                setFilteredTickets(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filterTickets = (query) => {
        let filtered = tickets.filter((ticket) => {
            const nameMatch = ticket.name.toLowerCase().includes(query.toLowerCase());
            const emailMatch = ticket.email.toLowerCase().includes(query.toLowerCase());
            const eventNameMatch = ticket.eventname.toLowerCase().includes(query.toLowerCase());
            const eventPriceMatch = ticket.eventprice.toLowerCase().includes(query.toLowerCase());
            // Add more fields to search here as needed
            return nameMatch || emailMatch || eventNameMatch || eventPriceMatch;
        });
        setFilteredTickets(filtered);
    };

    useEffect(() => {
        filterTickets(searchQuery);
    }, [searchQuery, tickets]);

    const deleterecord = (id) => {
        axios.delete(`http://localhost:4000/ticketdelete/${id}`)
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(err => console.log(err));
    };

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
                            <div className="search-container">
                                <input type="text" className="form-control w-50" placeholder="Search by Name, Email, Event Name, or Event Price" value={searchQuery} onChange={handleSearch} />
                            </div>
                            <br />
                            <div className="row mb-2">
                                <div className="col-lg-12">
                                    <table className="table table-bordered text-center">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Event Name</th>
                                                <th>Event Price</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredTickets.map((ticket, index) => (
                                                <tr key={index}>
                                                    <td>{ticket.name}</td>
                                                    <td>{ticket.email}</td>
                                                    <td>{ticket.eventname}</td>
                                                    <td>{ticket.eventprice}</td>
                                                    <td>
                                                        <button className="btn btn-danger text-light" onClick={() => deleterecord(ticket._id)}>Delete</button>
                                                    </td>
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
        </div>
    );
}

export default AdminTicket;