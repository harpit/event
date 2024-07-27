import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

function Talk() {
  const[name,setname] =useState('');
  const[message,setmessage] =useState('');

  const sendmsg = () => {
    if (name === "") {
      Swal.fire({
        title: "Validation Message",
        text: "Name Field is Required*",
        icon: "error"
      });
    } else if (message === "") {
      Swal.fire({
        title: "Validation Message",
        text: "Message Field is Required*",
        icon: "error"
      });
    } else {
      const service_id = 'service_2exs36t';
      const template_id = 'template_3tcsnc5';
      const public_key = '8kIjQoGAs_vK4pQj5';
      const template_params = {
        name: name,
        to_name: 'Mouaviz',
        message: message
      }
  
      emailjs.send(service_id, template_id, template_params, public_key)
        .then((response) => {
          console.log("email sent successfully");
          Swal.fire({
            title: "Success",
            text: "Message Sent Successfully",
            icon: "success"
          });
          // Clear fields after 2 seconds
          setTimeout(() => {
            setname('');
            setmessage('');
          }, 2000);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          Swal.fire({
            title: "Error",
            text: "Failed to send message",
            icon: "error"
          });
        });
    }
  }
  
return(
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
          <span className="brand-text font-weight-light text-center">Event Sphere</span>
        </a>
        <div className="sidebar">
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li className="nav-item has-treeview menu-open">
                <Link to="/exhibitordashboard" className="nav-link ">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p className="text-light">My Profile<i></i></p>
                </Link>
              </li>
              <li className="nav-item has-treeview menu-open">
                <Link to="/fetchfloor" className="nav-link ">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p className="text-light">Floor Plan<i></i></p>
                </Link>
              </li>
              <li className="nav-item has-treeview menu-open">
                <Link to="/addevent" className="nav-link ">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p className="text-light">Add Events<i></i></p>
                </Link>
              </li>
              <li className="nav-item has-treeview menu-open">
                <Link to="/eventrequesttoadmin" className="nav-link ">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p className="text-light">Request For Events<i></i></p>
                </Link>
                <Link to="/exhibitoreventstatus" className="nav-link ">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p className="text-light">My Events<i></i></p>
                </Link>
                <Link to="/exhibitorticketstatus" className="nav-link ">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p className="text-light">Tickets Status<i></i></p>
                </Link>
              </li>
              <li className="nav-item has-treeview menu-open">
                <Link to="/talkwithadmin" className="nav-link ">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p className="text-light">Communicate With Admin<i></i></p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <form id="talkwithadmin">
              <h1>Communicate With Admin</h1>
              <br></br>
              <div className="form-outline mb-4">
                <input type="text" className="form-control w-50" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Your Name" />
              </div>
              <div className="form-outline mb-4">
              <textarea name="message" id="message" class="form-control w-50" value={message}  onChange={(e)=>setmessage(e.target.value)} rows="10" placeholder="Your Message"></textarea>
              </div>
              <div className="form-outline mb-4">
                <button onClick={sendmsg} type="button" className="btn btn-primary">
                    Send Message
                </button>
              </div>
              </form>
              </div>
              </div>
    </div>
    </div>
)}


export default Talk