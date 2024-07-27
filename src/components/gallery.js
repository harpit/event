import React from "react";
import { Link } from "react-router-dom";
function Gallery()
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
					<h3>Our Gallery</h3>
				</div>
				<ol class="breadcrumb p-0 m-0">
				  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
				  <li class="breadcrumb-item active">Our Gallery</li>
				</ol>
			</div>
		</div>
	</div>
</section>


<section class="section gallery">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="controls">
		            <button type="button" class="control mixitup-control-active" data-filter="all">All</button>
		            <button type="button" class="control" data-filter=".conference">Conference</button>
		            <button type="button" class="control" data-filter=".meeting">Meeting</button>
		            <button type="button" class="control" data-filter=".events">Events</button>
		            <button type="button" class="control" data-filter=".party">Party</button>
		            <button type="button" class="control" data-filter=".concert">Concert</button>
		        </div>
		        <div class="gallery-wrapper less-gutter">
		        	<div class="gallery-item mix meeting">
		        		<div class="image-block">
			        		<div class="image">
			        			<img src="images/gallery/gallery-less-one.jpg" alt="gallery-image" class="img-fluid"/>
			        			<div class="primary-overlay">
			        				<a class="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-popup-one.jpg"><i class="fa fa-picture-o"></i></a>
			        			</div>
			        		</div>
		        		</div>
		        	</div>
		        	<div class="gallery-item mix party events">
		        		<div class="image-block">
			        		<div class="image">
			        			<img src="images/gallery/gallery-less-two.jpg" alt="gallery-image" class="img-fluid"/>
			        			<div class="primary-overlay">
			        				<a class="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-popup-two.jpg"><i class="fa fa-picture-o"></i></a>
			        			</div>
			        		</div>
		        		</div>
		        	</div>
		        	<div class="gallery-item mix meeting party">
		        		<div class="image-block">
			        		<div class="image">
			        			<img src="images/gallery/gallery-less-three.jpg" alt="gallery-image" class="img-fluid"/>
			        			<div class="primary-overlay">
			        				<a class="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-popup-three.jpg"><i class="fa fa-picture-o"></i></a>
			        			</div>
			        		</div>
		        		</div>
		        	</div>
		        	<div class="gallery-item mix meeting concert">
		        		<div class="image-block">
			        		<div class="image">
			        			<img src="images/gallery/gallery-less-four.jpg" alt="gallery-image" class="img-fluid"/>
			        			<div class="primary-overlay">
			        				<a class="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-popup-four.jpg"><i class="fa fa-picture-o"></i></a>
			        			</div>
			        		</div>
		        		</div>
		        	</div>
		        	<div class="gallery-item mix concert party">
		        		<div class="image-block">
			        		<div class="image">
			        			<img src="images/gallery/gallery-less-five.jpg" alt="gallery-image" class="img-fluid"/>
			        			<div class="primary-overlay">
			        				<a class="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-popup-five.jpg"><i class="fa fa-picture-o"></i></a>
			        			</div>
			        		</div>
		        		</div>
		        	</div>
		        	<div class="gallery-item mix events conference">
		        		<div class="image-block">
			        		<div class="image">
			        			<img src="images/gallery/gallery-less-six.jpg" alt="gallery-image" class="img-fluid"/>
			        			<div class="primary-overlay">
			        				<a class="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-popup-six.jpg"><i class="fa fa-picture-o"></i></a>
			        			</div>
			        		</div>
		        		</div>
		        	</div>
		        	<div class="gallery-item mix party conference">
		        		<div class="image-block">
			        		<div class="image">
			        			<img src="images/gallery/gallery-less-seven.jpg" alt="gallery-image" class="img-fluid"/>
			        			<div class="primary-overlay">
			        				<a class="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-popup-seven.jpg"><i class="fa fa-picture-o"></i></a>
			        			</div>
			        		</div>
		        		</div>
		        	</div>
		        	<div class="gallery-item mix events conference">
		        		<div class="image-block">
			        		<div class="image">
			        			<img src="images/gallery/gallery-less-eight.jpg" alt="gallery-image" class="img-fluid"/>
			        			<div class="primary-overlay">
			        				<a class="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-popup-eight.jpg"><i class="fa fa-picture-o"></i></a>
			        			</div>
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
export default Gallery