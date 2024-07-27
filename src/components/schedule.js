import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Schedule() {
  const [schedule, setSchedule] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSchedule, setFilteredSchedule] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/shedulefetch")
      .then((response) => {
        setSchedule(response.data);
        setFilteredSchedule(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterSchedule(query);
  };

  const filterSchedule = (query) => {
    const filtered = schedule.filter((item) => {
      return (
        item.date.toLowerCase().includes(query.toLowerCase()) ||
        item.time.toLowerCase().includes(query.toLowerCase()) ||
        item.subject.toLowerCase().includes(query.toLowerCase()) ||
        item.venue.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredSchedule(filtered);
  };

    return(
        <div>
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
            <section class="page-title bg-title overlay-dark">
	<div class="container">
		<div class="row">
			<div class="col-12 text-center">
				<div class="title">
					<h3>Event Schedule</h3>
				</div>
				<ol class="breadcrumb p-0 m-0">
				  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
				  <li class="breadcrumb-item active">Event Schedule</li>
				</ol>
			</div>
		</div>
	</div>
</section>


<section className="section schedule">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h3>Event <span className="alternate">Schedule</span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusm tempor incididunt ut labore</p>
              </div>
            </div>
          </div>
          <div className="container  mb-4">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Schedule Speaker by name or description"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </div>
          </div>
          <div className='container-fluid'>
            <div className="row">
              <div className="col-md-12">
                <div className="schedule-contents bg-schedule">
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active schedule-item" id="nov20">
                      {/* Headings */}
                      <ul className="m-0 p-0">
                        <li className="headings row">
                          <div className="col-md-2">Time</div>
                          <div className="col-md-2">Date</div>
                          <div className="col-md-3">Subject</div>
                          <div className="col-md-3">Venue</div>
                          <div className="col-md-2">Speaker</div> {/* Speaker field placed below Venue */}
                        </li>
                        {/* Schedule Details */}
                        {filteredSchedule.map((item, index) => (
                          <li className="schedule-details row" key={index}>
                            <div className="col-md-2">{item.time}</div>
                            <div className="col-md-2">{item.date}</div>
                            <div className="col-md-3">{item.subject}</div>
                            <div className="col-md-3">{item.venue}</div>
                            <div className="col-md-2">{item.speaker}</div> {/* New column for speaker */}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
export default Schedule