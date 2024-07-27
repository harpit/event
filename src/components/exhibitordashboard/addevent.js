import axios from "axios";
import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function AddEvent() {
const [name, setname]=useState('');
const [title, settitle]=useState('');
const [speaker, setspeaker]=useState('');
const [eventSpeakers, setEventSpeakers] = useState([]);
const [description, setdescription]=useState('');
const [date, setdate]=useState('');
const [time, settime]=useState('');
const [venue, setvenue]=useState('');
const [image , setimage] = useState('');
const [ticket, setticket] = useState('');
const [scheduleDates, setScheduleDates] = useState([]);
const [scheduletime, setScheduletime] = useState([]);
const [schedulevenue, setSchedulevenue] = useState([]);

useEffect(() => {
  // Fetch speaker data
  axios.get('http://localhost:4000/viewspaker')
    .then(response => {
      // Set the fetched speaker data
      setEventSpeakers(response.data);
    })
    .catch(error => console.error(error));
}, []);
useEffect(() => {
  axios.get('http://localhost:4000/shedulefetch')
      .then(response => {
          setScheduleDates(response.data.map(schedule => schedule.date));
          setScheduletime(response.data.map(schedule => schedule.time));
          setSchedulevenue(response.data.map(schedule => schedule.venue));

      })
      .catch(error => console.error(error));
}, []);

const addevent= async()=>{
  if (name === "")
  {
    Swal.fire({
			title: "Validation Message",
			text: "Name Field iS Required*",
			icon: "error"
		  });
  }
  else if (title === "")
  {
    Swal.fire({
			title: "Validation Message",
			text: "Title Field iS Required*",
			icon: "error"
		  });
  }
  else  if (speaker === "")
  {
    Swal.fire({
			title: "Validation Message",
			text: "speaker Field iS Required*",
			icon: "error"
		  });
  }
  else if (description === "")
  {
    Swal.fire({
			title: "Validation Message",
			text: "Description Field iS Required*",
			icon: "error"
		  });
  }
  else if (date === "")
  {
    Swal.fire({
			title: "Validation Message",
			text: "Date Field iS Required*",
			icon: "error"
		  });
  }
  else if (time === "")
  {
    Swal.fire({
			title: "Validation Message",
			text: "Time Field iS Required*",
			icon: "error"
		  });
  }
  else if (venue === "")
  {
    Swal.fire({
			title: "Validation Message",
			text: "Venue Field iS Required*",
			icon: "error"
		  });
  }
  else if (image === "")
  {
    Swal.fire({
			title: "Validation Message",
			text: "Image Field iS Required*",
			icon: "error"
		  });
  }
  else if (ticket === "")
  {
    Swal.fire({
			title: "Validation Message",
			text: "Ticket Field iS Required*",
			icon: "error"
		  });
  }
  else{
    // axios.post('http://localhost:4000/addevent',{name,title,speaker,description,date,time,venue})
    // Swal.fire({
		// 	title: "Validation Message",
		// 	text: "form done",
		// 	icon: "success"
		//   });
    const formData = new FormData();
  formData.append("image",image);
  formData.append("name",name);
  formData.append("title",title);
  formData.append("speaker",speaker);
  formData.append("description",description);
  formData.append("date",date);
  formData.append("time",time);
  formData.append("venue",venue);
  formData.append("ticket",ticket);


  //   const result = await axios.post('http://localhost:4000/addevent',
  // formData,{
  //   headers : {"Content-Type" : "multipart/form-data" },
  // })
  // console.log(result);
    
  
  try {
    await axios.post('http://localhost:4000/addevent', formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    // Show success message
    Swal.fire({
      title: "Success!",
      text: "Event request has been sent to admin. Thank you for choosing us.",
      icon: "success",
      onClose: () => {
        // Reset form fields
        setname('');
        settitle('');
        setspeaker('');
        setdescription('');
        setdate('');
        settime('');
        setvenue('');
        setimage('');
        setticket('');
      }
    });
  } catch (error) {
    console.error(error);
    Swal.fire({
      title: "Error",
      text: "Failed to add event. Please try again later.",
      icon: "error"
    });
  }
}
}


  return (
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
            <form id="addeventform">
              <h1>Add Event</h1>
              <br />
              <div className="form-outline mb-4">
                <input type="text" className="form-control w-50" value={name}  onChange={(e)=>setname(e.target.value)} placeholder="Exhibitor Name" />
              </div>
              <div className="form-outline mb-4">
                <input type="text" className="form-control w-50" value={title}  onChange={(e)=>settitle(e.target.value)} placeholder="Event Title" />
              </div>
             
              <div className="form-outline mb-4">
                <input type="text" className="form-control w-50" value={description}  onChange={(e)=>setdescription(e.target.value)} placeholder="Event Description" />
              </div>
              <div className="form-outline mb-4">
                <input type="number" className="form-control w-50" value={ticket}  onChange={(e)=>setticket(e.target.value)} placeholder="Give Ticket Price For Your Event"/>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="customFile">Select Date That Best Suits For The Events</label>
                <select className="form-control w-50" value={date} onChange={(e) => setdate(e.target.value)}>
                  <option selected>Select Date</option>
                  {scheduleDates.map(scheduleDate => (
                        <option key={scheduleDate} value={scheduleDate}>{scheduleDate}</option>
                    ))}
                </select>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="speakerSelect">Select Speaker</label>
                <select id="speakerSelect" className="form-control w-50" value={speaker} onChange={(e) => setspeaker(e.target.value)}>
                  <option selected>Select Speaker</option>
                  {eventSpeakers.map(speaker => (
                    <option key={speaker._id} value={speaker.name}>{speaker.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="customFile">Select Time That Best Suits For The Events</label>
                <select className="form-control w-50" value={date} onChange={(e) => settime(e.target.value)}>
                  <option selected>Select Time</option>
                  {scheduletime.map(scheduleTime => (
                        <option key={scheduleTime} value={scheduleTime}>{scheduleTime}</option>
                    ))}
                </select>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="customFile">Select Venue That Best Suits For The Events</label>
                <select className="form-control w-50" value={venue} onChange={(e) => setvenue(e.target.value)}>
                  <option selected>Select Venue</option>
                  {schedulevenue.map(schedulevenues => (
                        <option key={schedulevenues} value={schedulevenues}>{schedulevenues}</option>
                    ))}
                </select>
              </div>
              <div className="form-outline mb-4">
                <input type="file" className="form-control w-50" accept="image/*" onChange={(e)=>setimage(e.target.files[0])}/>
              </div>
              <div className="form-outline mb-4">
                <button type="button" onClick={addevent} className="btn btn-primary">Add Event</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEvent;
