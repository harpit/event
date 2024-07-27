import React from "react";
import { Link } from "react-router-dom";
function Pricing()
{
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
					<h3>Pricing Table</h3>
				</div>
				<ol class="breadcrumb p-0 m-0">
				  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
				  <li class="breadcrumb-item active">Pricing Table</li>
				</ol>
			</div>
		</div>
	</div>
</section>


<section class="section pricing">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="section-title">
					<h3>Get <span class="alternate">ticket</span></h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 col-md-6">
				{/* Pricing Item */}
				<div class="pricing-item">
					<div class="pricing-heading">
						{/* Title */}
						<div class="title">
							<h6>Starter</h6>
						</div>
						{/* Price */}
						<div class="price">
							<h2>39.00<span>$</span></h2>
							<p>/Person</p>
						</div>
					</div>
					<div class="pricing-body">
						{/* Feature List */}
						<ul class="feature-list m-0 p-0">
							<li><p><span class="fa fa-check-circle available"></span>1 Comfortable Seats</p></li>
							<li><p><span class="fa fa-check-circle available"></span>Free Lunch and Coffee</p></li>
							<li><p><span class="fa fa-times-circle unavailable"></span>Certificate</p></li>
							<li><p><span class="fa fa-times-circle unavailable"></span>Easy Access</p></li>
						</ul>
					</div>
					<div class="pricing-footer text-center">
					<Link to={'/event'} class="btn btn-main-md orange-btn">Buy ticket</Link>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6">
				{/* Pricing Item */}
				<div class="pricing-item featured">
					<div class="pricing-heading">
						{/* Title */}
						<div class="title">
							<h6>Standard</h6>
						</div>
						{/* Price */}
						<div class="price">
							<h2>49.00<span>$</span></h2>
							<p>/Person</p>
						</div>
					</div>
					<div class="pricing-body">
						{/* Feature List */}
						<ul class="feature-list m-0 p-0">
							<li><p><span class="fa fa-check-circle available"></span>1 Comfortable Seats</p></li>
							<li><p><span class="fa fa-check-circle available"></span>Free Lunch and Coffee</p></li>
							<li><p><span class="fa fa-check-circle available"></span>Certificate</p></li>
							<li><p><span class="fa fa-times-circle unavailable"></span>Easy Access</p></li>
						</ul>
					</div>
					<div class="pricing-footer text-center">
					<Link to={'/event'} class="btn btn-main-md orange-btn">Buy ticket</Link>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 m-auto">
				{/* Pricing Item */}
				<div class="pricing-item">
					<div class="pricing-heading">
						{/* Title */}
						<div class="title">
							<h6>Platinum</h6>
						</div>
						{/* Price */}
						<div class="price">
							<h2>99.00<span>$</span></h2>
							<p>/Person</p>
						</div>
					</div>
					<div class="pricing-body">
						{/* Feature List */}
						<ul class="feature-list m-0 p-0">
							<li><p><span class="fa fa-check-circle available"></span>1 Comfortable Seats</p></li>
							<li><p><span class="fa fa-check-circle available"></span>Free Lunch and Coffee</p></li>
							<li><p><span class="fa fa-check-circle available"></span>Certificate</p></li>
							<li><p><span class="fa fa-check-circle available"></span>Easy Access</p></li>
						</ul>
					</div>
					<div class="pricing-footer text-center">
					<Link to={'/event'} class="btn btn-main-md orange-btn">Buy ticket</Link>
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
export default Pricing