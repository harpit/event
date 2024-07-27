import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Speakers() {
  const [speakers, setSpeakers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSpeakers, setFilteredSpeakers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:4000/viewspaker")
      .then((response) => {
        setSpeakers(response.data);
        setFilteredSpeakers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterSpeakers(query);
  };

  const filterSpeakers = (query) => {
    const filtered = speakers.filter((speaker) => {
      const name = speaker.name || ''; 
      return (
        name.toLowerCase().includes(query.toLowerCase()) 
       
      );
    });
    setFilteredSpeakers(filtered);
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
					<h3>Our Speaker</h3>
				</div>
				<ol class="breadcrumb p-0 m-0">
				  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
				  <li class="breadcrumb-item active">Our Speaker</li>
				</ol>
			</div>
		</div>
	</div>
</section>

<section class="section speakers bg-speaker overlay-lighter">
	<div class="container">
		<div class="row">
			<div class="col-12">
				{/* <!-- Section Title --> */}
				<div class="section-title white">
					<h3>Who <span class="alternate">Speaking?</span></h3>
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
              placeholder="Search Speaker by name"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
		<div class="row">
    {filteredSpeakers.map((speaker, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                {/* Speaker Item */}
                <div className="speaker-item">
                  <div className="image">
                    <img
                      src={`images/dbimages/${speaker.simage}`}
                      alt="speaker"
                      className="img-fluid"
                    />
                    <div className="primary-overlay"></div>
                    <div className="socials">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content text-center">
                    <h5>
                      <a href="single-speaker.html">{speaker.name}</a>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
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
export default Speakers