import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Login.css'
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;

function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();




  const login = async () => {
    const response = await axios.post(`${apiUrl}/api/users/login`, {
      email,
      password,
    });

    if (response.data.success) {
      
      toast.success(response.data.message);
       
      localStorage.setItem('token',(response.data.tokenData));
     // console.log(response.data);
      setTimeout(()=>{
        navigate('/');
      },3000);
    } else {
      toast.error(response.data.message);
    }

    setEmail('');
    setPassword('');
  };


  return (
    <>
      <div className="container-login">
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

          <div className="signup">
            <span className="signup">
              Don't have an account?
              <Link to="/singnup">
                <label className="check" htmlFor="check">Signup</label>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
