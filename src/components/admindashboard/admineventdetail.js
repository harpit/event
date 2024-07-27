import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function EventDetail(){
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
      // Fetch events data from your backend API
      axios.get("http://localhost:4000/viewevent")
          .then(response => {
              // Filter events that have been accepted by the admin
              const acceptedEvents = response.data.filter(event => event.status
                 === 'Request Accepted');
              setEvents(acceptedEvents);
          })
          .catch(error => console.log(error));
  }, []);
 
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
                      <div className="row">
                        <div className="">

                        <h1>Events Details</h1>
                          <br></br>
                          <div className="search-container">
                <input type="text" className="form-control" placeholder="Search anything.." value={searchQuery} onChange={handleSearch} />
              </div><br></br>
                        <div className="card-deck">
    <section className="">
                        {filteredUser.map(event => (
                            <div key={event._id} className="col-md-4 mb-4">
                                <div className="card">
                                    <img src={`images/dbimages/${event.image}`} className="card-img-top" alt={event.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{event.title}</h5>
                                        <p className="card-text">Speaker: {event.speaker}</p>
                                        <p className="card-text">Date: {event.date}</p>
                                        <p className="card-text">Time: {event.time}</p>
                                        <p className="card-text">Venue: {event.venue}</p>
                                        <p className="card-text">Ticket: {event.ticket}</p>

                                        <p className="card-text">Description: {event.description}</p>
  
                                    </div>
                                </div>
                            </div>
                        ))}
                    
                
            </section>
            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>

 {/* Work end */}

</div>
        
    )
}

export default EventDetail;