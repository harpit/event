import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function Index()
{
	const [schedule, setshedule] = useState([])
	const [newsemail,setnewsemail] = useState('');
    const {id} = useParams();
    const subscribe = () => {

		if (newsemail === "" || !newsemail.includes("@")) {
			Swal.fire({
				title: "Validation Message",
				text: "Please enter a valid email address",
				icon: "error"
			});
		}

		else {
			axios.post('http://localhost:4000/subscribe', {newsemail})
				.then(response => {
					Swal.fire({
						title: "Validation Message",
						text: "Your Message Has Been Successfully Sent",
						icon: "success"
					});
					// Clear all fields after 3 seconds
					setTimeout(() => {
						
						setnewsemail('');
						
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
    useEffect(()=>
    
    {
axios.get('http://localhost:4000/viewspaker')
.then(schedule=>setshedule(schedule.data)).catch(err=>console.log(err))
    
console.log(schedule);
}
    ,[])
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
    
{/* 
<!--============================
=            Banner            =
=============================--> */}

<section class="banner bg-banner-one overlay">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				{/* <!-- Content Block --> */}
				<div class="block">
					{/* <!-- Coundown Timer --> */}
					<div class="timer"></div>
					<h1>Event</h1>
					<h2>Managment 2024</h2>
					<h6>02-05 July 2024 Pakistan</h6>
					{/* <!-- Action Button --> */}
					<Link to={'/event'} class="btn btn-main-md orange-btn">Buy ticket</Link>
				</div>
			</div>
		</div>
	</div>
</section>
	
{/* <!--====  End of Banner  ====-->

<!--===========================
=            About            =
============================--> */}

<section class="section about">
	<div class="container">
		<div class="row">
			<div class="col-lg-4 col-md-6 align-self-center">
				<div class="image-block bg-about">
					<img class="img-fluid" src="images/speakers/featured-speaker.jpg" alt=""/>
				</div>
			</div>
			<div class="col-lg-8 col-md-6 align-self-center">
				<div class="content-block">
					<h2>About The <span class="alternate">Eventre</span></h2>
					<div class="description-one">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco.
						</p>
					</div>
					<div class="description-two">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmtempor incididunt ut labore et dolore magna aliq enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
					</div>
					<ul class="list-inline">
						<li class="list-inline-item">
							<Link to={'/event'} class="btn btn-main-md orange-btn">Buy ticket</Link>
						</li>
					
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

{/* <!--====  End of About  ====-->

<!--==============================
=            Speakers            =
===============================--> */}

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
		<div class="row">
		{schedule.map((data) => (

			<div class="col-lg-3 col-md-4 col-sm-6">

				{/* <!-- Speaker 1 --> */}
				<div class="speaker-item">
					<div class="image">
					<img src={`images/dbimages/${data.simage}`} alt="speaker" className="img-fluid"/>
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-linkedin"></i></a></li>
								<li class="list-inline-item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
					<h5><a href="single-speaker.html">{data.name}</a></h5>
                                       
					</div>
				</div>
			</div>
		     ))}
		</div>
	</div>
</section>

{/* <!--====  End of Speakers  ====-->







<!--===========================================
=            Call to Action Ticket            =
============================================--> */}

<section class="cta-ticket bg-ticket overlay-dark">
	<div class="container">
		<div class="row">
			<div class="col-md-8">
				<div class="content-block">
					<h2>Get Ticket <span class="alternate">Now!</span></h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmtempor incidi</p>
					<Link to={'/event'} class="btn btn-main-md orange-btn">Buy ticket</Link>
				</div>
			</div>
		</div>
	</div>
	<div class="image-block"><img src="images/speakers/speaker-ticket.png" alt="" class="img-fluid"/></div>
</section>

{/* <!--====  End of Call to Action Ticket  ====-->

<!--==============================
=            Sponsors            =
===============================--> */}

<section class="sponsors section bg-sponsors overlay-white">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="section-title">
					<h3>Our <span class="alternate">Sponsors</span></h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore dolore</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<div class="sponsor-title text-center">
					<h5>Platinum Sponsors</h5>
				</div>
				<div class="block text-center">
					<ul class="list-inline sponsors-list">
						<li class="list-inline-item">
							<div class="image-block text-center">
								<a href="#">
									<img src="images/sponsors/pt-spon-two.png" alt="sponsors-logo" class="img-fluid"/>
								</a>
							</div>
						</li>
						<li class="list-inline-item">
							<div class="image-block text-center">
								<a href="#">
									<img src="images/sponsors/pt-spon-two.png" alt="sponsors-logo" class="img-fluid"/>
								</a>
							</div>
						</li>
						<li class="list-inline-item">
							<div class="image-block text-center">
								<a href="#">
									<img src="images/sponsors/pt-spon-three.png" alt="sponsors-logo" class="img-fluid"/>
								</a>
							</div>
						</li>
						<li class="list-inline-item">
							<div class="image-block text-center">
								<a href="#">
									<img src="images/sponsors/pt-spon-four.png" alt="sponsors-logo" class="img-fluid"/>
								</a>
							</div>
						</li>
					</ul>
				</div>
				<div class="sponsor-title text-center">
					<h5>Gold Sponsors</h5>
				</div>
				<div class="block text-center">
					<ul class="list-inline sponsors-list">
						<li class="list-inline-item">
							<div class="image-block text-center">
								<a href="#">
									<img src="images/sponsors/gl-spon-one.png" alt="sponsors-logo" class="img-fluid"/>
								</a>
							</div>
						</li>
						<li class="list-inline-item">
							<div class="image-block text-center">
								<a href="#">
									<img src="images/sponsors/gl-spon-two.png" alt="sponsors-logo" class="img-fluid"/>
								</a>
							</div>
						</li>
						<li class="list-inline-item">
							<div class="image-block text-center">
								<a href="#">
									<img src="images/sponsors/gl-spon-three.png" alt="sponsors-logo" class="img-fluid"/>
								</a>
							</div>
						</li>
					</ul>
				</div>
				
			</div>
		</div>
	</div>
</section>
{/* 
<!--====  End of Sponsors  ====-->

<!--================================
=            News Posts            
=================================--> */}

<section class="news section">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="section-title">
					<h3>Eventre <span class="alternate">News</span></h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore dolore</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 col-md-6 col-sm-8 col-10 m-auto">
				<div class="blog-post">
					<div class="post-thumb">
						<a href="news-single.html">
							<img src="images/news/post-thumb-one.jpg" alt="post-image" class="img-fluid"/>
						</a>
					</div>
					<div class="post-content">
						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="post-title">
							<h2><a href="news-single.html">Elementum purus id ultrices.</a></h2>
						</div>
						<div class="post-meta">
							<ul class="list-inline">
								<li class="list-inline-item">
									<i class="fa fa-user-o"></i>
									<a href="#">Admin</a>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-heart-o"></i>
									<a href="#">350</a>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-comments-o"></i>
									<a href="#">30</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-8 col-10 m-auto">
				<div class="blog-post">
					<div class="post-thumb">
						<a href="news-single.html">
							<img src="images/news/post-thumb-two.jpg" alt="post-image" class="img-fluid"/>
						</a>
					</div>
					<div class="post-content">
						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="post-title">
							<h2><a href="news-single.html">Elementum purus id ultrices.</a></h2>
						</div>
						<div class="post-meta">
							<ul class="list-inline">
								<li class="list-inline-item">
									<i class="fa fa-user-o"></i>
									<a href="#">Admin</a>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-heart-o"></i>
									<a href="#">350</a>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-comments-o"></i>
									<a href="#">30</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 m-md-auto col-sm-8 col-10 m-auto">
				<div class="blog-post">
					<div class="post-thumb">
						<a href="news-single.html">
							<img src="images/news/post-thumb-three.jpg" alt="post-image" class="img-fluid"/>
						</a>
					</div>
					<div class="post-content">
						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="post-title">
							<h2><a href="news-single.html">Elementum purus id ultrices.</a></h2>
						</div>
						<div class="post-meta">
							<ul class="list-inline">
								<li class="list-inline-item">
									<i class="fa fa-user-o"></i>
									<a href="#">Admin</a>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-heart-o"></i>
									<a href="#">350</a>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-comments-o"></i>
									<a href="#">30</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

{/* <!--====  End of News Posts  ====-->

<!--==============================================
=            Call to Action Subscribe            =
===============================================--> */}

<section class="cta-subscribe bg-subscribe overlay-dark">
	<div class="container">
		<div class="row">
			<div class="col-md-6 mr-auto">
				<div class="content">
					<h3>Subscribe to Our <span class="alternate">Newsletter</span></h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor</p>
				</div>
			</div>
			<div class="col-md-6 ml-auto align-self-center">
				<form action="#" class="row">
					<div class="col-lg-8 col-md-12">
						<input type="email" onChange={(e)=>setnewsemail(e.target.value)} value={newsemail} class="form-control main white mb-lg-0" placeholder="Email"/>
					</div>
					<div class="col-lg-4 col-md-12">
						<div class="subscribe-button">
							<button class="btn btn-main-md orange-btn" onClick={subscribe}>Subscribe</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>

{/* <!--====  End of Call to Action Subscribe  ====--> */}
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

export default Index
    