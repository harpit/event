import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewEventRequest() {
    const [events, setEvents] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredUser, setFilteredUser] = useState([]);
    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
    };
    
    useEffect(() => {
      const filteredData = events.filter((data) => {
        return (
          data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data.time.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data.venue.toLowerCase().includes(searchQuery.toLowerCase())||  
          data.description.toLowerCase().includes(searchQuery.toLowerCase())

        
        );
      });
      setFilteredUser(filteredData);
    }, [searchQuery, events]);
    useEffect(() => {
        axios.get('http://localhost:4000/viewevent')
            .then(response => setEvents(response.data))
            .catch(err => console.log(err));
    }, []);

    const handleAccept = (id) => {
        axios.put(`http://localhost:4000/acceptevent/${id}`)
            .then(response => {
                console.log(response.data);
                // Update the status of the event in the local state
                const updatedEvents = events.map(event => {
                    if (event._id === id) {
                        event.status = 'Request Accepted';
                    }
                    return event;
                });
                setEvents(updatedEvents);
            })
            .catch(err => console.log(err));
    };

    const handleReject = (id) => {
        axios.put(`http://localhost:4000/rejectevent/${id}`)
            .then(response => {
                console.log(response.data);
                // Update the status of the event in the local state
                const updatedEvents = events.map(event => {
                    if (event._id === id) {
                        event.status = 'Request Rejected';
                    }
                    return event;
                });
                setEvents(updatedEvents);
            })
            .catch(err => console.log(err));
    };
    const deleteeventrecord=(id)=>{
      axios.delete('http://localhost:4000/deleteeventrecord/'+id).then(res=>{console.log(res)
      window.location.reload()
    });
    }
    return (
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
                    <h1>Events Request</h1>
                    <br></br>
                    <div className="search-container">
                <input type="text" className="form-control w-50" placeholder="Search by Name, Email or type" value={searchQuery} onChange={handleSearch} />
              </div>
                      <div className="row">
                        <div className="">
                       
                          <br></br>
                       <br></br>
                        <div className="card-deck">
                       
                            {filteredUser.map((event) => (
                                <div className="card" key={event._id}>
                                <img className="card-img-top" src={`images/dbimages/${event.image}`} width="100%" height="300px" alt="Event" style={{ width: "100%", height: "300px", objectFit: "cover" }}/>
                                <div className="card-body">
                                    <h6 className="card-text">Event Title: {event.title}</h6>
                                    <h6 className="card-text">Event Speaker: {event.speaker}</h6>
                                    <h6 className="card-text">Event Date: {event.date}</h6>
                                    <h6 className="card-text">Event Time: {event.time}</h6>
                                    <h6 className="card-text">Event Venue: {event.venue}</h6>
                                    <h6 className="card-text">Event Description: {event.description}</h6>
                                    <br></br>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <button type="button" onClick={()=> deleteeventrecord(event._id)} className="btn btn-danger">Delete</button>&nbsp;&nbsp;
                                        {/* Conditional rendering of buttons based on event status */}
                                        {event.status === 'Request Accepted' && (
                                            <button type="button" className="btn btn-success" disabled>Request Accepted</button>
                                        )}
                                        {event.status === 'Request Rejected' && (
                                            <button type="button" className="btn btn-danger" disabled>Request Rejected</button>
                                        )}
                                        {event.status !== 'Request Accepted' && event.status !== 'Request Rejected' && (
                                            <div>
                                                <button onClick={() => handleAccept(event._id)} type="button" className="btn btn-success">Accept</button>&nbsp;&nbsp;
                                                <button onClick={() => handleReject(event._id)} type="button" className="btn btn-danger">Reject</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            ))}
                        </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ViewEventRequest