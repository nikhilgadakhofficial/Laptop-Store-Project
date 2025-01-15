import React from 'react'
import about from '/img/about.png'
import './About.css'
import Reviews from '../Reviews/Reviews'
import Header from '../../components/Header/Header'
function About() {
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

    
<div class="responsive-container-block content">
          <p class="text-blk quotes">
            “
          </p>
          <img class="profile-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors3.svg"/>
          <p class="text-blk info">
            Lorem ipsum dolor sit amet
          </p>
          <img class="image-block review" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/t82.jpg"/>
          <p class="text-blk name">
            Jane Doe
          </p>
        </div>

        <div class="responsive-container-block content">
          <p class="text-blk quotes">
            “
          </p>
          <img class="profile-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors3.svg"/>
          <p class="text-blk info">
            Lorem ipsum dolor sit amet
          </p>
          <img class="image-block review" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/t82.jpg"/>
          <p class="text-blk name">
            Jane Doe
          </p>
        </div>


        <div class="responsive-container-block content">
          <p class="text-blk quotes">
            “
          </p>
          <img class="profile-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors3.svg"/>
          <p class="text-blk info">
            Lorem ipsum dolor sit amet
          </p>
          <img class="image-block review" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/t82.jpg"/>
          <p class="text-blk name">
            Jane Doe
          </p>
        </div>

        <div class="responsive-container-block content">
          <p class="text-blk quotes">
            “
          </p>
          <img class="profile-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors3.svg"/>
          <p class="text-blk info">
            Lorem ipsum dolor sit amet
          </p>
          <img class="image-block review" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/t82.jpg"/>
          <p class="text-blk name">
            Jane Doe
          </p>
        </div>

        <div class="responsive-container-block content">
          <p class="text-blk quotes">
            “
          </p>
          <img class="profile-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors3.svg"/>
          <p class="text-blk info">
            Lorem ipsum dolor sit amet
          </p>
          <img class="image-block review" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/t82.jpg"/>
          <p class="text-blk name">
            Jane Doe
          </p>
        </div>
        
</div>

    <Header/>
    </>
  )
}

export default About