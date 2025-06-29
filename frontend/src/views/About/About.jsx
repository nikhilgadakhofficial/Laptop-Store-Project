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
    else{
      const response = await axios.get(`${apiUrl}/api/reviews/getreviews`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );
    
    
      if (response.data.success) {
        toast.success(response.data.message);
        setReviews(response.data.data)
      }
      else{
       toast.error(response.data.message)
      }
    
    }

  }

  console.log(review);
  

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
          <img className="profile-img" src="data:image/jpeg;base64,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"/>
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