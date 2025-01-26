import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import './Singup.css'
const apiUrl = import.meta.env.VITE_API_URL;

function Singnup() {
  const navigate = useNavigate();
  const [fullName,setFullName] = useState('');
  const [email,setEmail] = useState('');
  const [mobileNo,setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [porfileImageUrl,setPorfileImageUrl] = useState('')


  const singup = async (e)=>{

    e.preventDefault();

    const formData = new FormData();
  
    formData.append('fullName',fullName)
    formData.append('email', email)
    formData.append('mobileNo', mobileNo)
    formData.append('password', password)
    formData.append('porfileImageUrl', porfileImageUrl)

    const response = await axios.post(`${apiUrl}/api/users/signup`,
   formData
    );
  

    if (response.data.success) {
    
      toast.success('Server startd successfully!');
      
      toast.success(response.data.message);
      navigate('/login');
    } else {
       toast.error(response.data.message);
    }
    
  }
  

  return (
   <>
     <form onSubmit={singup}  className="container-login">
    <div className="registration form">
      <header>Signup</header>
      <div>

      <label>Enter the Porfile </label>
      <input 
      className='input'
      type="file" 
        placeholder="Enter your Full Name "
        onChange={(e)=>{setPorfileImageUrl(e.target.files[0])}}
       />

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

       

        <input
         type="submit"
         className="button"
         value="Signup"
        />

      </div>
      <div className="signup">
        <span >Already have an account?
        <Link to="/login">  <label >Login</label></Link>
        </span>
      </div>
    </div>
    </form>
   </>
  )
}

export default Singnup