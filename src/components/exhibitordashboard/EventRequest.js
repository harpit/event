import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EventRequest() {
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

    return (
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
                      <div className="row">
                        <div className="">
                        <h1>Events Request</h1>
                          <br></br>
                          <div className="search-container">
                <input type="text" className="form-control w-50" placeholder="Search by title,speaker,date,time,venue or description" value={searchQuery} onChange={handleSearch} />
              </div><br></br>

                        <div className="card-deck">
                            {filteredUser.map((event) => (
                                <div className="card" key={event._id}>
                                    <img className="card-img-top" src={`images/dbimages/${event.image}`} alt="Event"  style={{ width: "100%", height: "300px", objectFit: "cover" }}/>
                                    <div className="card-body">
                                        <h6 className="card-text">Event Title: {event.title}</h6>
                                        <h6 className="card-text">Event Speaker: {event.speaker}</h6>
                                        <h6 className="card-text">Event Date: {event.date}</h6>
                                        <h6 className="card-text">Event Time: {event.time}</h6>
                                        <h6 className="card-text">Event Venue: {event.venue}</h6>
                                        <h6 className="card-text">Event Description: {event.description}</h6>

                                        {event.status === 'Request Accepted' && (
                                            <button type="button" className="btn btn-success" disabled>Request Accepted</button>
                                        )}
                                        {event.status === 'Request Rejected' && (
                                            <button type="button" className="btn btn-danger" disabled>Request Rejected</button>
                                        )}
                                        {event.status === 'Pending' && (
                                            <button type="button" className="btn btn-primary" disabled>Pending</button>
                                        )}
                                     
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

export default EventRequest;