import React from 'react'
import { Link } from 'react-router-dom'


const Navbar =  () =>   {
  return (
  
      
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">My Favorite Videos</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav ml-auto">
                   <li className="nav-item">

                    <Link className="nav-link" to="/newVideo">Create New Video</Link>
                   </li>
                 </ul>
                    

                </div>
              </div>
            </nav>
         
    
  
  )
}

export default Navbar