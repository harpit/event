import React, { useEffect, useState }  from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import Swal from "sweetalert2";
function UserTicket(){
  // const [ticket, setticket] = useState([])
  const [eventname,seteventname] = useState('');
  const [eventprice,seteventprice] = useState('');
  const [name,setname ]= useState('');
  
 const [email,setemail ]= useState('');
  const {id} = useParams(); 
  useEffect(()=>
    {
        axios.get('http://localhost:4000/vieweventfortickets/'+id)
        .then(userdata =>{console.log(userdata)
  
          seteventname(userdata.data.title)
          seteventprice(userdata.data.ticket)
         
    
    })
    },[])


    const addusertickets = () =>
    {
      if(name =="")
      {
        Swal.fire({
          title: "Validation Message",
          text: "Name Field iS Required*",
          icon: "error"
          });
      }
      else if(email =="" || !email.includes("@"))
      {
        Swal.fire({
          title: "Validation Message",
          text: "Please enter valid email",
          icon: "error"
          });
      }

      else
      {
        axios.post('http://localhost:4000/tickets',{name,email,eventname,eventprice})
		Swal.fire({
			title: "Validation Message",
			text: "Tickets ",
			icon: "success"
		  });
      }
    }





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
<section class="page-title bg-title overlay-dark">
	<div class="container">
		<div class="row">
			<div class="col-12 text-center">
				<div class="title">
					<h3>Buy Ticket</h3>
				</div>
				<ol class="breadcrumb p-0 m-0">
				  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
				  <li class="breadcrumb-item active">Buy Ticket</li>
				</ol>
			</div>
		</div>
	</div>
</section>

{/* <!--====  End of Page Title  ====--> */}


<section class="section contact-form">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="section-title">
					<h3>Buy Ticket <span class="alternate">To Enjoy Events</span></h3>

         
					<p></p>
				</div>
			</div>
		</div>

    
		
			<div class="col-md-6">
				<input type="text" class="form-control main" value={name} onChange={(e)=>setname(e.target.value)}  placeholder="Name"/>
			</div>
			<div class="col-md-6">
				<input type="email" class="form-control main" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email"/>
			</div>
      <div class="col-md-6">
				<input type="text" class="form-control main"   disabled
       
       value={eventname} onChange={(e)=>seteventname(e.target.value)}
       placeholder="Event Name"/>
			</div>
      
			<div class="col-md-6">
				<input type="number" class="form-control main"  disabled
         value={eventprice} onChange={(e)=>seteventprice(e.target.value)}
        placeholder="Ticket Price"/>
			</div>
			<div class="col-6">
				<button type="submit" onClick={addusertickets} class="btn btn-main-md orange-btn">Buy Ticket</button>
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

export default UserTicket;