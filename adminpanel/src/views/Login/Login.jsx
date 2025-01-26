import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Login.css'
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const login = async () => {
    const response = await axios.post("http://localhost:8081/api/users/login", {
      email,
      password,
    });
    if (response.data.success) {
      toast.success(response.data.message);
       
      localStorage.setItem('token',(response.data.tokenData));
      console.log(response.data);
      
      if (response.data.data.role == 'USER') {
        toast.error("USER NOT ACCESS");
        navigate('/')
        return
      }

      setTimeout(()=>{
        navigate('/addproduct');
      },3000);
    } else {
      toast.error(response.data.message);
    }
    setEmail('');
    setPassword('');
   
  };

  return (
    <>
      <div className="container">
        <div className="login form">
          <header>Login</header>
          <form>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="button"
              onClick={login}
              className="button"
              value="Login"
            />
          </form>

          
        </div>
      </div>
    </>
  );
}

export default Login;
