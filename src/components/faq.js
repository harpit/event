import React from "react";
import { Link } from "react-router-dom";

function Faq()
{
    return(
        <div>
            {/*================================
=            Page Title            =
=================================*/}
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
					<h3>FAQS</h3>
				</div>
				<ol class="breadcrumb p-0 m-0">
				  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
				  <li class="breadcrumb-item active">FAQS</li>
				</ol>
			</div>
		</div>
	</div>
</section>

{/*====  End of Page Title  ====*/}


{/*=========================
=            FAQ            =
==========================*/}

<section class="section faq">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="section-title">
					<h3>Our <span class="alternate">FAQ</span></h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusm tempor incididunt ut labore dolore magna</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="accordion-block">
					<div id="accordion">
						{/* Collapse */}
						<div class="card">
							{/* Collapse Header */}
							<div class="card-header" id="headingOne">
							  <h5 class="mb-0">
							    <a data-toggle="collapse" href="#collapseOne">
							      <span class="fa fa-plus-circle"></span>Where does it come from?
							    </a>
							  </h5>
							</div>
							{/* Collapse Body */}
							<div id="collapseOne" class="collapse show" data-parent="#accordion">
							  <div class="card-body">
							    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
							  </div>
							</div>
						</div>
						{/* Collapse */}
						<div class="card">
							{/* Collapse Header */}
							<div class="card-header" id="headingOne">
							  <h5 class="mb-0">
							    <a data-toggle="collapse" href="#collapseTwo">
							      <span class="fa fa-plus-circle"></span>Where does it come from?
							    </a>
							  </h5>
							</div>
							{/* Collapse Body */}
							<div id="collapseTwo" class="collapse" data-parent="#accordion">
							  <div class="card-body">
							    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
							  </div>
							</div>
						</div>
						{/* Collapse */}
						<div class="card">
							{/* Collapse Header */}
							<div class="card-header" id="headingOne">
							  <h5 class="mb-0">
							    <a data-toggle="collapse" href="#collapseThree">
							      <span class="fa fa-plus-circle"></span>Where does it come from?
							    </a>
							  </h5>
							</div>
							{/* Collapse Body */}
							<div id="collapseThree" class="collapse" data-parent="#accordion">
							  <div class="card-body">
							    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
							  </div>
							</div>
						</div>
						{/* Collapse */}
						<div class="card">
							{/* Collapse Header */}
							<div class="card-header" id="headingOne">
							  <h5 class="mb-0">
							    <a data-toggle="collapse" href="#collapseFour">
							      <span class="fa fa-plus-circle"></span>Where does it come from?
							    </a>
							  </h5>
							</div>
							{/* Collapse Body */}
							<div id="collapseFour" class="collapse" data-parent="#accordion">
							  <div class="card-body">
							    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
							  </div>
							</div>
						</div>
						{/* Collapse */}
						<div class="card">
							{/* Collapse Header */}
							<div class="card-header" id="headingOne">
							  <h5 class="mb-0">
							    <a data-toggle="collapse" href="#collapseFive">
							      <span class="fa fa-plus-circle"></span>Where does it come from?
							    </a>
							  </h5>
							</div>
							{/* Collapse Body */}
							<div id="collapseFive" class="collapse" data-parent="#accordion">
							  <div class="card-body">
							    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
							  </div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="accordion-block">
					<div id="accordionTwo">
						{/* Collapse */}
						<div class="card">
							{/* Collapse Header */}
							<div class="card-header" id="headingOne">
							  <h5 class="mb-0">
							    <a data-toggle="collapse" href="#collapseSix">
							      <span class="fa fa-plus-circle"></span>Where does it come from?
							    </a>
							  </h5>
							</div>
							{/* Collapse Body */}
							<div id="collapseSix" class="collapse" data-parent="#accordionTwo">
							  <div class="card-body">
							    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
							  </div>
							</div>
						</div>
						{/* Collapse */}
						<div class="card">
							{/* Collapse Header */}
							<div class="card-header" id="headingOne">
							  <h5 class="mb-0">
							    <a data-toggle="collapse" href="#collapseSeven">
							      <span class="fa fa-plus-circle"></span>Where does it come from?
							    </a>
							  </h5>
							</div>
							{/* Collapse Body */}
							<div id="collapseSeven" class="collapse" data-parent="#accordionTwo">
							  <div class="card-body">
							    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
							  </div>
							</div>
						</div>
						{/* Collapse */}
						<div class="card">
							{/* Collapse Header */}
							<div class="card-header" id="headingOne">
							  <h5 class="mb-0">
							    <a data-toggle="collapse" href="#collapseEight">
							      <span class="fa fa-plus-circle"></span>Where does it come from?
							    </a>
							  </h5>
							</div>
							{/* Collapse Body */}
							<div id="collapseEight" class="collapse" data-parent="#accordionTwo">
							  <div class="card-body">
							    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
							  </div>
							</div>
						</div>
						{/* Collapse */}
						<div class="card">
							{/* Collapse Header */}
							<div class="card-header" id="headingOne">
							  <h5 class="mb-0">
							    <a data-toggle="collapse" href="#collapseNine">
							      <span class="fa fa-plus-circle"></span>Where does it come from?
							    </a>
							  </h5>
							</div>
							{/* Collapse Body */}
							<div id="collapseNine" class="collapse" data-parent="#accordionTwo">
							  <div class="card-body">
							    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
							  </div>
							</div>
						</div>
						{/* Collapse */}
						<div class="card">
							{/* Collapse Header */}
							<div class="card-header" id="headingOne">
							  <h5 class="mb-0">
							    <a data-toggle="collapse" href="#collapseTen">
							      <span class="fa fa-plus-circle"></span>Where does it come from?
							    </a>
							  </h5>
							</div>
							{/* Collapse Body */}
							<div id="collapseTen" class="collapse" data-parent="#accordionTwo">
							  <div class="card-body">
							    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
							  </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

{/*====  End of FAQ  ====*/}
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
export default Faq