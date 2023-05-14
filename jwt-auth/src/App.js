import './App.css';
import Home from './Home';
import LoginCompo from './LoginCompo';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from './Header';
import { useState } from 'react';
import Register from './Register';


function App() {

  const [logoutUser,setLogoutUser]=useState(false);

  return (

    <div className="App">
      <h2>JWT Authentication</h2>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<><Header logoutUser={logoutUser} setLogoutUser={setLogoutUser}/><Home logoutUser={logoutUser}/></>}/>
         <Route path='/login' element={<LoginCompo setLogoutUser={setLogoutUser} />} />
         <Route path='/register' element={<Register setLogoutUser={setLogoutUser} />} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
