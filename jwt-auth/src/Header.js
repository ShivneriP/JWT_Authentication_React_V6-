import React from 'react'
import { useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Button } from '@mui/material';

const Header = ({logoutUser,setLogoutUser}) => {

 const[login,SetLogin]=useState("");

 
 
 //to avoid page refresh we have to store the state of login from local storage

 const hydrateStateWithLocalStorage=()=>{

    //The hasOwnProperty() is helper method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
    if(localStorage.hasOwnProperty("login")){
     let value=localStorage.getItem("login");
     try{
        value=JSON.parse(value);
        SetLogin(value);
     }catch(e){
        SetLogin("");
     }
    }
 }


 //without useEffect we can not invoke the login value 
 useEffect(()=>{
   hydrateStateWithLocalStorage();
 }
 ,[logoutUser]);

 const handleLogout=()=>{
   localStorage.removeItem("login");
   setLogoutUser(true);
 }

    return (

    <div> 
        <header style={{marginTop:"20px"}}>
        {!logoutUser && login && login.userLogin?
        (<Button style={{width:"100px"}}variant='contained' color="secondary" onClick={handleLogout}>
         Logout
        </Button>):
        (<Link to="/login">
         <Button style={{width:"100px"}}variant='contained'color="primary">
        Login
        </Button></Link>) 
        
        }
        </header>
    </div>
  )
}
 

export default Header