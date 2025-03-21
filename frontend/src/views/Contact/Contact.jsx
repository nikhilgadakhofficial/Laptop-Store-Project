import React, { useEffect } from 'react'
import './Contact.css'
import { NavLink } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { useState } from 'react'
import axios from 'axios'
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;
function Contact() {

  const navigate = useNavigate();

 const [fullName,setFullName] = useState('');
 const [email,setEmail] = useState('');
 const [mobileNo,setMobileNo] = useState('');
 const [message,setMessage] = useState('');


  const token = localStorage.getItem("token");
  if (!token) {
    toast.error("Please login first");
    navigate('/login');
    return;
  }



 
 const createContact = async ()=>{


  const response = await axios.post(`${apiUrl}/api/contact/contact`,
    {
      fullName,
      email,
      mobileNo,
      message
    },
    {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }
  );
  
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

 }
 

   
  return (
   <>
   <div className="contact_us_2">
  <div className="responsive-container-block big-container">
    <div className="blueBG">
    </div>
    <div className="responsive-container-block container">
      <div className="form-box">
        <div className="container-block form-wrapper">
          <p className="text-blk contactus-head">
            Get in Touch
          </p>
          <p className="text-blk contactus-subhead">
            Nunc erat cursus tellus gravida.
          </p>
          <div className="responsive-container-block">
            <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
              <p className="text-blk input-title">
                FIRST NAME
              </p>
              <input className="input" value={fullName} onChange={(e)=>{setFullName(e.target.value)}} placeholder="Please enter first name..."/>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <p className="text-blk input-title">
                EMAIL
              </p>
              <input className="input" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Please enter email..."/>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <p className="text-blk input-title">
                PHONE NUMBER
              </p>
              <input className="input" value={mobileNo} onChange={(e)=>{setMobileNo(e.target.value)}} placeholder="Please enter phone number..."/>
            </div>
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
              <p className="text-blk input-title">
                WHAT DO YOU HAVE IN MIND
              </p>
              <textarea className="textinput" value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder="Please enter query..."></textarea>
            </div>
          </div>
          <button type='button' onClick={createContact} className="submit-btn">
            Submit
          </button>
        </div>
        <div className="social-media-links">
          <NavLink to="#" id="ix94i-2">
            <img className="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"/>
          </NavLink>
          <NavLink to="#">
            <img className="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"/>
          </NavLink>
          <NavLink to="#">
            <img className="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"/>
          </NavLink>
          <NavLink to="#" id="izldf-2">
            <img className="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"/>
        </NavLink>
        </div>
      </div>
    </div>
  </div>
</div>
<Header/>
   </>
  )
}

export default Contact