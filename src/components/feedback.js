import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Feedback() {
    const[name,setname] = useState('');
	const[email,setemail] = useState('');
	const[phone,setphone] = useState('');
	const[feedback,setfeedback] = useState('');

    const feedbackinsert=()=>{

        if (name === "") {
			Swal.fire({
				title: "Validation Message",
				text: "Name Field is Required*",
				icon: "error"
			});
		} else if (email === "" || !email.includes("@")) {
			Swal.fire({
				title: "Validation Message",
				text: "Please enter a valid email address",
				icon: "error"
			});
		} else if (phone === "") {
			Swal.fire({
				title: "Validation Message",
				text: "Phone Field is Required*",
				icon: "error"
			});
		} else if (feedback === "") {
			Swal.fire({
				title: "Validation Message",
				text: "Message Field is Required*",
				icon: "error"
			});
		} else {
			axios.post('http://localhost:4000/feedback', { name, email, phone, feedback })
				.then(response => {
					Swal.fire({
						title: "Validation Message",
						text: "Your Message Has Been Successfully Sent",
						icon: "success"
					});
					// Clear all fields after 3 seconds
					setTimeout(() => {
						setname('');
						setemail('');
						setphone('');
						setfeedback('');
					}, 3000);
				})
				.catch(error => {
					console.error("Error submitting form:", error);
					Swal.fire({
						title: "Error",
						text: "An error occurred while submitting the form",
						icon: "error"
					});
				});
		}
	}

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

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>




<div class="container">
            <h3 className='mt-3'> Feedback Form</h3>

                <input type='text' placeholder='Name' onChange={(e)=>setname(e.target.value)} value={name} className='form-control w-50 mt-3'/>
                <input type='email' placeholder='Email'onChange={(e)=>setemail(e.target.value)} value={email}  className='form-control w-50 mt-3'/>
                <input type='number' placeholder='Phone Number' onChange={(e)=>setphone(e.target.value)} value={phone}  className='form-control w-50 mt-3'/>
                <textarea name="message" id="message" onChange={(e)=>setfeedback(e.target.value)} value={feedback}  class="form-control w-50 mt-3" rows="10" placeholder="Your Feedback (General Feedback, Bug Report,Feature Request)"></textarea>

<br></br>
                <button type="submit" onClick={feedbackinsert} class="btn btn-main-md orange-btn">Submit Feedback</button>
            </div>





       <br>
        </br>
        <br>
        </br>
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

export default Feedback;