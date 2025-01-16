import React from 'react'
import about from '/img/about.png'
import './About.css'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;
import Header from '../../components/Header/Header'

function About() {

  const [review , setReviews] = useState([])
 const navigate = useNavigate();

  const getreviews = async ()=>{

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login first");
      navigate('/login');
      return;
    }

    const response = await axios.get(`${apiUrl}/api/reviews/getreviews`,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }
  )

  if (response.data.success) {
    toast.success(response.data.message);
    setReviews(response.data.data)
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
    getreviews()
  },[])

  
  return (
    <>
    <div className='container-about'>


      <div className='card-about'>
        <h1 className='about-h'>About Us </h1>
        <p className='about-p'>Gone are the days when shoppers would be satisfied seeing some decent products and for the obvious lack of choice, buy them off the shelves anyway. This is the time when brands are locked in fierce competition and each one of them has to offer something valuable to the customer.
Shoppers are worried more than ever about sustainability, ethics, culture and the process through which products are manufactured and marketed. </p>
      </div>

      <div className='card-about'>
        <img className='about-img' src={about}/>
      </div>

    </div>

    <h1>Our Customer Reviews</h1>

    

      <div className='swiper-wrapper'>
      {
  review.map((reviews)=>{

    return(
      <div className="responsive-container-block content">
          <p className="text-blk quotes">
            “
          </p>
          <img className="profile-img" src={reviews.porfileImageUrl}/>
          <p className="text-blk info">
          {reviews.message}
          </p>
          <img className="image-block review" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/t82.jpg"/>
          <p className="text-blk name">
          {reviews.fullName}
          </p>
        </div>  
    )
  })
}


</div>
 
    <Header/>
    </>
  )
}

export default About