import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';
import './Singup.css'
const apiUrl = import.meta.env.VITE_API_URL;
function Singnup() {

  const [fullName,setFullName] = useState('');
  const [email,setEmail] = useState('');
  const [mobileNo,setMobileNo] = useState('');
  const [password, setPassword] = useState('');


  const singup = async ()=>{

    const response = await axios.post(`${apiUrl}/api/users/signup`,
      {
        fullName,
        email,
        mobileNo,
        password
      }
    );

    if (response.data.success) {
      toast.success(response.data.message);
      window.location.href = "/login";
    }
    else{
      toast.console.error();
      toast.error(response.data.message);
   
    }
    
  }

  return (
   <>
     <div className="container-login">
    <div className="registration form">
      <header>Signup</header>
      <form>

        <input type="text" 
        placeholder="Enter your Full Name "
        value={fullName}
        onChange={(e)=>{setFullName(e.target.value)}}
       />

       
        <input type="text" 
        placeholder="Enter your Mobile No "
        value={mobileNo}
        onChange={(e)=>{setMobileNo(e.target.value)}}
       />

        <input type="text"
        placeholder="Enter your email"
        value={email}
        onChangeCapture={(e)=>{setEmail(e.target.value)}}
       />

        <input type="password" 
        placeholder="Create a password"
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
      />

       

        <input type="button"
         className="button"
         onClick={singup}
         value="Signup"
        />

      </form>
      <div className="signup">
        <span >Already have an account?
        <Link to="/login">  <label >Login</label></Link>
        </span>
      </div>
    </div>
    </div>
   </>
  )
}

export default Singnup