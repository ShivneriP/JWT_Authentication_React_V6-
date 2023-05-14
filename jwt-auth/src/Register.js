import React, { useState } from 'react'
import { TextField, colors } from "@mui/material";
import {Button} from "@mui/material";
import { useNavigate} from 'react-router-dom';
import axios from 'axios';


const Register = ({setLogoutUser}) => {
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const[error,setError]=useState("");
     
    let navigate=useNavigate();

    const handleRgister=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/api/auth/register",
                {
                email,
                password
                }
        ).then((response)=>{
            console.log("response",response)
            localStorage.setItem("login",JSON.stringify(
                {
                    userLogin:true,
                    token:response.data.access_token,
                }
            ));
            setError("");
            setEmail("");
            setPassword("");
            setLogoutUser(false);
            navigate("/")
        })
        .catch(error=>setError(error.response.data.message));
    }


  return (
    <div>
    {error && <p style={{color:'red'}}>{error}</p>}
    <form onSubmit={handleRgister}>
    <TextField placeholder='Name' 
    id='userName' 
    label='User Name' 
    value={email} 
    onChange={(e)=>setEmail(e.target.value) } 
    type='text' /> 

    <br/><br/>

    <TextField placeholder='Password' 
    id='password' 
    label='Password'
    type='password'
    value={password} 
    onChange={(e)=>setPassword(e.target.value)} /> 
    <br/><br/>

    <Button variant='contained' color='primary' type='submit'>Rgister</Button>
    </form>
    
    </div>
    )
}

export default Register