import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const Index = () => {


    const [users, setUsers] = useState([]);
    
    let test=[];
    const getUsers = async () => {
       return await fetch('https://panorbit.in/api/users.json', {
          
        }).then((res) => res.json())
          .then(data => {
            console.log(data.users);
            
            data.users.map(function(item) {
                
                test.push(item);
            })
            setUsers(test);
        
           
            console.log(users);
            localStorage.setItem('user-info',JSON.stringify(test));
            console.log(JSON.parse(localStorage.getItem('user-info')));
            let user=JSON.parse(localStorage.getItem('user-info'));
        })
    }


    
    


    useEffect(() => {
       
        getUsers();
    }, [setUsers]);


    return (
           
        <div className="container">
             <div>
       <nav class="navigation">
         <h1 align="center"> select an account</h1>
      </nav>
   
      </div>
       
           {
               users.map((curElem) => {
                   return (

                      
                           

<Card  className="card_item" >

<ListGroup>
    <ListGroupItem ><img src={curElem.profilepicture} alt="" /></ListGroupItem>
     <button className="btn" onClick={()=> window.location.href='/homePage/'+curElem.id}>
    {curElem.name}
   </button>
</ListGroup>
</Card>
                      
                   )
               })
           }

       </div>              


)}

export default Index;

