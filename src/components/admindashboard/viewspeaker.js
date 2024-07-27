import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
function ViewSpeaker()
{
    const [schedule, setshedule] = useState([])
    const {id} = useParams();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredUser, setFilteredUser] = useState([]);
    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
    };
    
    useEffect(() => {
      const filteredData = schedule.filter((data) => {
        return (
         
          data.name.toLowerCase().includes(searchQuery.toLowerCase()) 
          
         
        
        );
      });
      setFilteredUser(filteredData);
    }, [searchQuery, schedule]);
   

    useEffect(()=>
    
    {
axios.get('http://localhost:4000/viewspaker')
.then(schedule=>setshedule(schedule.data)).catch(err=>console.log(err))
    
console.log(schedule);
}
    ,[])
    const deletespeakerecord=(id)=>{
      axios.delete('http://localhost:4000/deletespeakerrecord/'+id).then(res=>{console.log(res)
      window.location.reload()
    });
  }
    return(
        <div>
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
        <div className="content-wrapper">
                <div className="content-header">
                  <div className="container-fluid">
                  
                  <div className="search-container">
                <input type="text" className="form-control w-50" placeholder="Search by Name" value={searchQuery} onChange={handleSearch} />
              </div><br></br>
                  <div className="row">
                        <div className="">
                        <div className="card-deck">
                            {filteredUser.map((data) => (
                                <div className="card" key={data._id}>
                                    <img className="card-img-top" src={`images/dbimages/${data.simage}`} width="100%" height="350px" alt="Event"  style={{ width: "100%", height: "350px", objectFit: "cover" }}/>
                                    <div className="card-body">
                                        <h5 className="card-text">Speaker Name: {data.name}</h5>
                              
                                               
                                                
                                        <a className="btn btn-danger text-light"onClick={()=> deletespeakerecord(data._id)}>Delete</a>                                            </div>
                                      
                                    </div>
                            ))}
                        </div>
                        </div>
                      </div>

                      </div>
        
        
        
        
        
                      </div>
                      </div>
        
                     
           
        
            
                </div>
    )
}

export default ViewSpeaker;