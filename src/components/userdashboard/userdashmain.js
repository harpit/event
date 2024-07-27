import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserDashboard() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/userdetails")
      .then((response) => {
        // Filter users where type is "user"
        const filteredUsers = response.data.filter(user => user.type.toLowerCase() === 'user');
        setUsers(filteredUsers);
        setFilteredUsers(filteredUsers);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    filterUsers(e.target.value);
  };

  const filterUsers = (query) => {
    const filtered = users.filter((user) => {
      return (
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.type.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredUsers(filtered);
  };

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
              <Link to="/userdashboard" class="nav-link ">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p className="text-light">
          Data
                <i></i>
                </p>
              </Link>
              </li>
              <li class="nav-item has-treeview menu-open">
              <Link to="/usereventstatus" class="nav-link ">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p className="text-light">
             Events
                <i></i>
                </p>
              </Link>
              <Link to="/userticketstatus" class="nav-link ">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p className="text-light">
             Tickets Status
                <i></i>
                </p>
              </Link>
           
              </li>
      </ul>
              </nav>
        
      
      
      </div>
      
      </aside>
          {/* Work Start */}
          <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <br />
            <div className="row mb-2">
              <div className="col-lg-12">
                <div className="search-container">
                  <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Search by Name, Email, or Type"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </div>
                <br>
                </br>
                <table className="table table-bordered text-center">
                  <thead>
                    <tr>
                      <th>Name</th>
                     
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user, index) => (
                      <tr key={index}>
                        <td>{user.name}</td>
                        
                        <td>{user.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;