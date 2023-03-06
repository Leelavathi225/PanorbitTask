import { useState ,useEffect} from "react"
import {  useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Navbar, Nav, NavDropdown, } from 'react-bootstrap'

function Profile(){
    const [toggle, setToggle] = useState(false);
    
    let user=JSON.parse(localStorage.getItem('user-info'))
    
    const navigate = useNavigate();
   
    let currentloc=document.URL;
   let user_id=currentloc.split("/").pop();
    let new_user=user_id -1;
   let profilepicture=user[new_user].profilepicture;
    let userName=user[new_user].username;
    
    localStorage.setItem('username',JSON.stringify(userName));
    localStorage.setItem('profilePicture',JSON.stringify(profilepicture));
   
    function logOut(){
       
        navigate('/');
    }
    useEffect(() => {
        localStorage.setItem('currentlocation',JSON.stringify(document.URL));
       
    }, [])


    
return (
    
    <div>
        
        <Navbar bg="dark" variant="dark"  expand="md">
        
          <Nav className="nav-link-custom">
            {
                localStorage.getItem('user-info') ?
                <>
                <Nav.Link className="nav-link-custom" href={currentloc}>Profile</Nav.Link>
                
                <Nav.Link className="nav-link-custom" href="/gallery">Gallery</Nav.Link>
                
                <Nav.Link className="nav-link-custom" href="/posts">Posts</Nav.Link>
               
                <Nav.Link className="nav-link-custom" href="/ToDo">ToDo</Nav.Link>
                
                </>
                :
                <>
                
                </>
            }
            
          </Nav>
         
          
          {localStorage.getItem('user-info')?
          <Nav className='nav-link-profile'>
            
             <img src={profilepicture} alt="" width="30" height="30" object-fit="cover"
            border-radius="50%"/>
             
            <NavDropdown class="nav-logout" title={user && userName}>
            <NavDropdown.Item onClick={logOut}>LogOut</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          :null}
        </Navbar>
       
       <div class="container"> 
       <div class="box">

         <div class="box1">
       <img src={profilepicture} alt="" width="300" height="300" border-radius="50%" padding="20px"/>
       <h4>{user[new_user].name}</h4>
       <h4>Username:{user[new_user].username}</h4>
       <h4>Email:{user[new_user].email}</h4>
       <h4>Phone:{user[new_user].phone}</h4>
       <h4>website:{user[new_user].website}</h4>
       <hr></hr>
                 <h3 align="center">Company</h3>
        <h4>Name:{user[new_user].company.name}</h4>
       <h4>catchphrase:{user[new_user].company.catchPhrase}</h4>
       <h4>bs:{user[new_user].company.bs}</h4>          
       </div>
       <div id = "vertical"></div>
       <div class="box2">
           <h3 align="center">Address</h3>
          
           <div align="center">
           <h4 >Street: {user[new_user].address.street} </h4>
           <h4  >Suite: {user[new_user].address.suite} </h4>
           <h4  >City : {user[new_user].address.city} </h4>
           <h4  >ZipCode: {user[new_user].address.zipcode} </h4>
           </div>
       </div>
       
       <div className="card_item" >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
        width="600"
        align="bottom"
        height="450"
        
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
       
    </div>
   </div>

   
   <div className="chat-body">
   <button  className="open-button" onClick={() => setToggle(!toggle)}>Chats</button>
    </div>
    {toggle && (
    <div class="chat-popup" >
  <form class="form-container">
    <h3 align="center">Chats</h3>
  <div id="scrolling">
  <ul class="list-group">
         
          <li class="list-group-item"><img src={user[9].profilepicture} width="30" height="30"/>
          <h6>{user[9].name}</h6></li>
          <li class="list-group-item"><img src={user[8].profilepicture} width="30" height="30"/>
          <h6>{user[8].name}</h6></li>
          <li class="list-group-item"><img src={user[7].profilepicture} width="30" height="30"/>
          <h6>{user[8].name}</h6></li>
          <li class="list-group-item"><img src={user[6].profilepicture} width="30" height="30"/>
          <h6>{user[8].name}</h6></li>
          <li class="list-group-item"><img src={user[5].profilepicture} width="30" height="30"/>
          <h6>{user[8].name}</h6></li>
          <li class="list-group-item"><img src={user[4].profilepicture} width="30" height="30"/>
          <h6>{user[8].name}</h6></li>
          <li class="list-group-item"><img src={user[3].profilepicture} width="30" height="30"/>
          <h6>{user[8].name}</h6></li>
          <li class="list-group-item"><img src={user[2].profilepicture} width="30" height="30"/>
          <h6>{user[8].name}</h6></li>
          <li class="list-group-item"><img src={user[1].profilepicture} width="30" height="30"/>
          <h6>{user[8].name}</h6></li>
          <li class="list-group-item"><img src={user[0].profilepicture} width="30" height="30"/>
          <h6>{user[8].name}</h6></li>
        </ul>
        </div>
    <button type="button" class="btn cancel" onClick={() => setToggle(!toggle)} >Close</button>
  </form>
</div>
 )}
</div>


    
    
)
        }
        export default Profile
