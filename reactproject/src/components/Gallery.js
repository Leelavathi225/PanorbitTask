import React from 'react'
import {Navbar, Nav, NavDropdown, } from 'react-bootstrap'
import { useState } from "react"
import {  useNavigate } from "react-router-dom"

export default function Gallery() {

    const [toggle, setToggle] = useState(true);
    let user=JSON.parse(localStorage.getItem('user-info'))
   
    const navigate = useNavigate();
    let currentLocation=JSON.parse(localStorage.getItem('currentlocation'));
    console.log(currentLocation);
    
   
    let user_id=currentLocation.split("/").pop();
    let new_user=user_id -1;
    console.log(new_user);
   
   let profilepicture=user[new_user].profilepicture;
   
    let userName=user[new_user].username;
   
    function logOut(){
        //localStorage.clear();
        navigate('/');
    }


    return (
        <div>
        <Navbar bg="dark" variant="dark"  expand="md">
        
        <Nav className="nav-link-custom">
          {
              localStorage.getItem('user-info') ?
              <>
              <Nav.Link className="nav-link-custom" href={currentLocation}>Profile</Nav.Link>
              
              <Nav.Link className="nav-link-custom" href="/gallery">Gallery</Nav.Link>
              
              <Nav.Link className="nav-link-custom" href="/posts">Posts</Nav.Link>
             
              <Nav.Link className="nav-link-custom" href="/ToDo">ToDo</Nav.Link>
              
              </>
              :
              <>
              
              </>
          }
          
        </Nav>
       
        <Nav className='nav-link-profile'>
            
            <img src={profilepicture} alt="" width="30" height="30" />
            
           <NavDropdown class="nav-logout" title={user && userName}>
           <NavDropdown.Item onClick={logOut}>LogOut</NavDropdown.Item>
           </NavDropdown>
         </Nav>
        
      
      </Navbar>
        <div>
        <h2 align="center">Coming soon</h2>
    </div>
    </div>
    )
}



