import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function ExhibitorTicket()
{
    const [user, setuser] = useState([])
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredTickets, setFilteredTickets] = useState([]);

  
    useEffect(()=>
    {
        axios.get('http://localhost:4000/ticketdetails')
.then(user=>setuser(user.data)).catch(err=>console.log(err))

    },[])
    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
  };

  const filterTickets = (query) => {
      let filtered = user.filter((ticket) => {
          const nameMatch = ticket.name.toLowerCase().includes(query.toLowerCase());
          const emailMatch = ticket.email.toLowerCase().includes(query.toLowerCase());
          const eventNameMatch = ticket.eventname.toLowerCase().includes(query.toLowerCase());
          const eventPriceMatch = ticket.eventprice.toLowerCase().includes(query.toLowerCase());
          // Add more fields to search here as needed
          return nameMatch || emailMatch || eventNameMatch || eventPriceMatch;
      });
      setFilteredTickets(filtered);
  };

  useEffect(() => {
      filterTickets(searchQuery);
  }, [searchQuery, user]);
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

{/* Work Start */}
<div class="content-wrapper">
  
  <div class="content-header">


    <div class="container-fluid">
    <div className="search-container">
                                <input type="text" className="form-control w-50" placeholder="Search by Name, Email, Event Name, or Event Price" value={searchQuery} onChange={handleSearch} />
                            </div>
                            <br></br>
      <div class="row mb-2">
        <div class="col-lg-12">
        <table className="table table-bordered text-center">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Event Name</th>
                <th>Event Price</th>
              
            </tr>
            {
                filteredTickets.map((data , index)=>
                <tr>
                    <td>{data.name}</td>

                    <td>{data.email}</td>
                    <td>{data.eventname}</td>
                    <td>{data.eventprice}</td>
                 

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
        
    )
}
export default ExhibitorTicket;