import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
       <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               
            <ul  className="nav navbar-nav">
              
                  <button class="btn btn-light"><li class="nav-item"><Link to='/'>Home</Link></li></button> &nbsp; &nbsp; &nbsp;
                  <button class="btn btn-light"><li class="nav-item"><Link to='/fetch'> View buddies</Link></li></button>&nbsp; &nbsp; &nbsp;
                  <button class="btn btn-light"><li class="nav-item"><Link to='/add'>Add buddy</Link></li> </button>&nbsp; &nbsp; &nbsp;
                  <button class="btn btn-light"><li class="nav-item"><Link to='/workout'>Workout Details</Link></li></button> &nbsp; &nbsp; &nbsp;
                  <button class="btn btn-light"><li class="nav-item"><Link to='/posts'>Posts</Link></li></button>  
              
            </ul>
        
        </nav>
        <h1>Workout buddy!!!</h1>
        </div>
      
    );

}

export default Header;