import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function Signup() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [type, settype] = useState('');
  const navigate = useNavigate();

  const insertrecord = () => {
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
		} else if (pass === "") {
			Swal.fire({
				title: "Validation Message",
				text: "password Field is Required*",
				icon: "error"
			});
		} else if (type === "") {
			Swal.fire({
				title: "Validation Message",
				text: "Type Field is Required*",
				icon: "error"
			});
		} 

     

    else {
			axios.post('http://localhost:4000', { name, email, pass, type })
      Swal.fire({
        title: "Validation Message",
        text: "Feedback done",
        icon: "success"
      },
      

			
					// Clear all fields after 3 seconds
					setTimeout(() => {
						setname('');
						setemail('');
						setpass('');
						settype('');
           navigate('/login')
					}, 3000));
				
					}
	}
  return (
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
            <h3 className='mt-3'> Signup Form</h3>

                <input type='text' placeholder='Name' value={name} onChange={(e)=>setname(e.target.value)} className='form-control w-50 mt-3'/>
                <input type='email' placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)} className='form-control w-50 mt-3'/>
                <input type='password' placeholder='Password' value={pass} onChange={(e)=>setpass(e.target.value)} className='form-control w-50 mt-3'/>
<select onChange={(e)=>settype(e.target.value)} className='form-control w-50 mt-3'>
<option disabled selected value={type} >Choose Type</option>
<option value="user">User</option>
<option value="exhibitor">Exhibitor</option>
</select>
<br></br>
                <button onClick={insertrecord}type="submit" class="btn btn-main-md orange-btn">Add Record</button>
            </div>

<br></br>
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


export default Signup