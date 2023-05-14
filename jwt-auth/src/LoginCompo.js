import React, { useState } from 'react'
import { TextField, colors } from "@mui/material";
import {Button} from "@mui/material";
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';


const LoginCompo = ({setLogoutUser}) => {
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const[error,setError]=useState("");
     
    let navigate=useNavigate();

    const handleLogin=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/api/auth/login",
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
    <form onSubmit={handleLogin}>
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

    <Button variant='contained' color='primary' type='submit'>Login</Button>
    </form>
    <p>If You Don't have an account please <Link to="/register">Register</Link></p>
    </div>
    )
}

export default LoginCompo