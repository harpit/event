import axios from "axios";
import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";

function ScheduleFetch()
{

    const [schedule, setshedule] = useState([])
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredUser, setFilteredUser] = useState([]);
    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
    };
    
    useEffect(() => {
      const filteredData = schedule.filter((data) => {
        return (
         
          data.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data.day.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data.time.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data.subject.toLowerCase().includes(searchQuery.toLowerCase())||
          data.venue.toLowerCase().includes(searchQuery.toLowerCase())
         
        
        );
      });
      setFilteredUser(filteredData);
    }, [searchQuery, schedule]);
    useEffect(()=>
    
    {
axios.get('http://localhost:4000/sheduledatefetch')
.then(schedule=>setshedule(schedule.data)).catch(err=>console.log(err))
    
console.log(schedule);
}
    

    ,[])

    const deleterecord=(id)=>{
      axios.delete('http://localhost:4000/deleteshedulerecord/'+id).then(res=>{console.log(res)
      window.location.reload()
    });
    }
    

    return(
        <div>
            <div className="wrapper">
            <aside class="main-sidebar sidebar-dark-primary elevation-4">

<a href="index3.html" class="brand-link">

<span class="brand-text font-weight-light text-center">Event Sphere</span>
</a>


<div class="sidebar">

<nav class="mt-2">
  <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
   
    <li class="nav-item has-treeview menu-open">
   
      <Link to="/admindashboard" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
      Report
        <i></i>
        </p>
      </Link>
      
      <Link to="/contactview" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
     Contact Data
        <i></i>
        </p>
      </Link>
      </li>
      <li class="nav-item has-treeview menu-open">
      <Link to="/userdata" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
      Registerations
        <i></i>
        </p>
      </Link>
     
      <Link to="/floorplan" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
        Add Floor Plan 
        <i></i>
        </p>
      </Link>
      <Link to="/adminfloorplan" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
        View Floor Plan 
        <i></i>
        </p>
      </Link>
      <Link to="/vieweventreq" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
     Events Request
        <i></i>
        </p>
      </Link>
      <Link to="/viewevent" class="nav-link">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
     Events Detail
        <i></i>
        </p>
      </Link>
      <Link to="/sheduledateadd" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
     Schedule Add
        <i></i>
        </p>
      </Link>
      <Link to="/sheduledatefetch" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
     Schedule Detail
        <i></i>
        </p>
      </Link>
      <Link to="/addspeaker" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
     Add Speaker
        <i></i>
        </p>
      </Link>
       <Link to="/fetchspeaker" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
    View Speaker
        <i></i>
        </p>
      </Link>
    
      <Link to="/adminticket" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
     Tickets
        <i></i>
        </p>
      </Link>

      <Link to="/viewfeedback" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
     View Feedback Record
        <i></i>
        </p>
      </Link>
      <Link to="/viewsubscription" class="nav-link ">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p className="text-light">
     Subscription
        <i></i>
        </p>
      </Link>
      </li>
      
      <li class="nav-item has-treeview menu-open">
     

      </li>
</ul>
      </nav>
 

</div>

</aside>
    {/* Work Start */}
  <div class="content-wrapper">
  
  <div class="content-header">


    <div class="container-fluid">
    <div className="search-container">
                <input type="text" className="form-control w-50" placeholder="Search here.." value={searchQuery} onChange={handleSearch} />
              </div>
              <br></br>
      <div class="row mb-2">
        <div class="col-lg-12">
        <table className="table table-bordered text-center">
            <tr>
                <th>Date</th>
                <th>Day</th>
                <th>Time</th>
                <th>Title</th>
                <th>Venue</th>
                <th>Speaker</th>
                <th>Action</th>
            </tr>
            {
                filteredUser.map((data , index)=>
                <tr>
                    <td>{data.date}</td>

                    <td>{data.day}</td>
                    <td>{data.time}</td>
                    <td>{data.subject}</td>
                    <td>{data.venue}</td>
                    <td>{data.speaker}</td>
<td>
    <a className="btn btn-danger text-light" onClick={()=> deleterecord(data._id)}>Delete</a>
&nbsp;&nbsp;
<Link to={`/updateshedule/${data._id}`} className="btn btn-primary text-light">Update</Link>
</td>
                    </tr>)
            }
          </table>

          
        
        </div>
   
      </div>
 
    </div>

       
    </div>
</div>


 {/* Work end */}

</div>
</div>
    )
}
export default ScheduleFetch