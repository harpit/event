import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function Login()
{
const [loginemail, setloginemail] = useState('');
const [loginpass, setloginpass] = useState('');


const navigate = useNavigate();

const loginrecord = () =>

{
  if (!loginemail || !loginpass) {
    Swal.fire({
      title: "Validation Message",
      text: "Both email and password are required",
      icon: "error"
    });
    return; // Exit the function if any field is empty
  }
axios.post('http://localhost:4000/login',{loginemail,loginpass}).then(
    result => {console.log(result)
    
    
    if(result.data ==='userdata')
    {
        navigate('/userdashboard');
    }
    else if(result.data === 'exhibitordata')
    {
        navigate('/exhibitordashboard')
    }
    
    else if(result.data === 'email not found!')
    {
      Swal.fire({
				title: "Validation Message",
				text: "Email not found",
				icon: "error"
			});
    }
    else if(result.data === 'incorrect password')
    {
      Swal.fire({
        title: "Validation Message",
        text: "Incorrect Password",
        icon: "error"
      });
    }
    }
    
)
   

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
            <div class="container mt-5">
                <h3> Login Form</h3>
                <input type='email' placeholder='Email' onChange={(e)=>setloginemail(e.target.value)} className='form-control w-50 mt-3' required/>
                <input type='password' placeholder='Password ' onChange={(e)=>setloginpass(e.target.value)} className='form-control w-50 mt-3' required/>
<br></br>
                <button onClick={loginrecord} className='btn btn-main-md orange-btn'>Login Here</button>
                <br></br>
                <h5>Don't have an account? <Link to="/signup" style={{ fontWeight: 'bold', color: 'orange', textDecoration: 'underline' }}>Sign Up</Link></h5>  
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


export default Login