import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Events() {
    const [events, setEvents] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredEvents, setFilteredEvents] = useState([]);

    useEffect(() => {
        // Fetch events data from your backend API
        axios.get("http://localhost:4000/viewevent")
            .then(response => {
                // Filter events that have been accepted by the admin
                const acceptedEvents = response.data.filter(event => event.status === 'Request Accepted');
                setEvents(acceptedEvents);
                setFilteredEvents(acceptedEvents);
            })
            .catch(error => console.log(error));
    }, []);

    // Function to handle search input change
    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        filterEvents(query);
    };

    // Function to filter events based on search query
    const filterEvents = (query) => {
        const filtered = events.filter(event => 
            event.title.toLowerCase().includes(query.toLowerCase()) ||
            event.speaker.toLowerCase().includes(query.toLowerCase()) ||
            event.date.toLowerCase().includes(query.toLowerCase()) ||
            event.venue.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredEvents(filtered);
    };
    return(
        <div>
        {/* <!--================================
        =            Page Title            =
        =================================--> */}
              <nav class="navbar main-nav border-less fixed-top navbar-expand-lg p-0">
          <div class="container-fluid p-0">
              {/* logo */}
              <Link class="navbar-brand" to="/">
                <img src="images/logo.png" alt="logo"/>
              </Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="fa fa-bars"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item dropdown active dropdown-slide">
                  <Link class="nav-link" to="/"  data-toggle="dropdown">Home
                  </Link>
                 
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/about">AboutUs</Link>
                  </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/speaker">Speakers
                   
                  </Link>
                </li>
              
                <li class="nav-item">
                  <Link class="nav-link" to="/schedule">Schedule</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/event">Events</Link>
                  </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/gallery">Gallery
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/pricing">Pricing
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/faq">FAQ
                    </Link>
                  </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact">Contact</Link>
                </li>
                <li class="nav-item">
          <Link class="nav-link" to="/feedback">Feedback</Link>
        </li>
		<li class="nav-item">
          <Link class="nav-link" to="/login">Login</Link>
        </li>
              </ul>
              
              </div>
          </div>
        </nav>

        <section className="section event-contact mt-5">
        <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                    <h1>Events</h1>
                    <br></br>
                    <div className="search-container">
                <input type="text" className="form-control w-50" placeholder="Search Here.." value={searchQuery} onChange={handleSearch} />
              </div>
                      <div className="row">
                        <div className="">
                       
                          <br></br>
                       <br></br>
                        <div className="card-deck">
                       
                            {filteredEvents.map((event) => (
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
                                       
                                    </div>
                                    <Link to={`/userticket/${event._id}`} 
  className="btn btn-main-md orange-btn">Buy Ticket</Link>

                                </div>
                            </div>
                            
                            ))}
                        </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            </section>

        
        {/* <!--====  End of Page Title  ====--> */}
        
        
        <section class="section contact-form">
            <div className="container">

                </div>
        </section>
        
        <footer class="footer-main">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="block text-center">
                    <div class="footer-logo">
                      <img src="images/footer-logo.png" alt="logo" class="img-fluid"/>
                    </div>
                    <ul class="social-links-footer list-inline">
                      <li class="list-inline-item">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#"><i class="fa fa-twitter"></i></a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#"><i class="fa fa-instagram"></i></a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#"><i class="fa fa-rss"></i></a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#"><i class="fa fa-vimeo"></i></a>
                      </li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            </div>
        </footer>
        {/* Subfooter */}
        <footer class="subfooter">
          <div class="container">
            <div class="row">
              <div class="col-md-6 align-self-center">
                <div class="copyright-text">
                  <p><a href="#">Eventre</a> &#169; 2017 All Right Reserved</p>
                </div>
              </div>
              <div class="col-md-6">
                  <a href="#" class="to-top"><i class="fa fa-angle-up"></i></a>
              </div>
            </div>
          </div>
        </footer>
        </div>
    )
}
export default Events