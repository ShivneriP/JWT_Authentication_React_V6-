import React from 'react'
import { Link } from 'react-router-dom';
 

const Home = () => {
  const isLoginTrue=JSON.parse(localStorage.getItem("login"));
  const user=JSON.parse(localStorage.getItem('user'));

  console.log(user);
  const userNotLogin=()=>(
    <>
    <h2>It Seems like you are not Logged In</h2>

     <h3>If You have Account,please <Link to="/login">Login</Link>
     </h3> 

     <h3>
      Don't have account ,Please <Link to="/register">Register</Link>
     </h3>

    </>
)
  return (
    <div>
         
             {isLoginTrue && isLoginTrue.userLogin ?
             (
             <h2>Welcome Back user</h2>
             ):
             (
             <>{userNotLogin()} </>
             )
}
         
    </div>
  )
}

export default Home;