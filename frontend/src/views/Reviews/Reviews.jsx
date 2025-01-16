import React from 'react'
import './Reviews.css'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
const apiUrl = import.meta.env.VITE_API_URL;
function Reviews() {

  const [user,setUser] = useState('');
  const navigate = useNavigate();
  
   const [fullName,setFullName] = useState('');
   const [email,setEmail] = useState('');
   const [mobileNo,setMobileNo] = useState('');
   const [message,setMessage] = useState('');
   const [porfileImageUrl ,setPorfileImageUrl ] = useState('')
  
  const getUser = async ()=>{

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login first");
      navigate('/login');
      return;
    }
    

    const response  = await  axios.get(`${apiUrl}/api/users/getProfile`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    setUser(response.data.data);

  }

  const postreviews = async ()=>{

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login first");
      navigate('/login');
      return;
    }

    const response = await axios.post(`${apiUrl}/api/reviews/postreviews`,{
      fullName,
      email,
      mobileNo,
      message,
      porfileImageUrl : user.porfileImageUrl 
    },
    {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }
  )

  if (response.data.success) {
    toast.success(response.data.message);
  }
  else{
   toast.error(response.data.message)
  }

  setEmail('')
  setFullName('')
  setMessage('')
  setMobileNo('')
  setPorfileImageUrl('')
  
  navigate('/about');
  }

  useEffect(()=>{
    getUser()
  },[])
  return (
   <>
  
  <div className="new_home_web">
  <div className="responsive-container-block big-container">
    <img className="imgBG" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw65.png"/>
    <div className="responsive-container-block textContainer">
      <div className="topHead">
        <p className="text-blk heading">
        Add
          <span className="orangeText">
        Review
          </span>
        </p>
        <div className="orangeLine" id="w-c-s-bgc_p-2-dm-id">
        </div>
      </div>
  
    </div>
    <div className="responsive-container-block container">
      <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line" id="i69b">
        <div className="form-box">
          <div className="container-block form-wrapper">
            <div className="responsive-container-block">
              <div className="left4">
                <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt-2">
                  <input className="input" value={fullName} onChange={(e)=>{setFullName(e.target.value)}}  name="FirstName" placeholder="First Name"/>
                </div>
                
                <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                  <input className="input" id="ipmgh-2" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="Email" placeholder="Email Address"/>
                </div>
                <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 lastPhone">
                  <input className="input" value={mobileNo} onChange={(e)=>{setMobileNo(e.target.value)}} id="imgis-2" name="PhoneNumber" placeholder="Phone Number"/>
                </div>
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-2">
                <textarea className="textinput" value={message} onChange={(e)=>{setMessage(e.target.value)}} id="i5vyy-2" placeholder="Message"></textarea>
              </div>
            </div>
            <button className="send" onClick={postreviews} id="w-c-s-bgc_p-1-dm-id">
           POST
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<Header/>
   </>
  )
}

export default Reviews