import React from 'react'
import { useState,useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import './Home.css'
import { useNavigate } from 'react-router-dom';
import Product from '../../components/Product/Product';
import Header from '../../components/Header/Header';
const apiUrl = import.meta.env.VITE_API_URL;

function Home() {

  const [featureProduct,setFeatureProduct ] = useState([]);
  const [filterProduct,setFilterProduct] = useState([])
  const navigate = useNavigate();


   
  const loadProducts = async ()=>{

    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      navigate('/login');
      return;
    }
    else{
      const response = await axios.get(`${apiUrl}/api/product/products`,{
        headers: {
            'Authorization': `Bearer ${token}`,
          },
    });

    setFilterProduct(response.data.data);
    }

    


}



//console.log(filterProduct);


useEffect(()=>{
  loadProducts()
},[])

  return (
   <>
    <h1 className='home-hading'>Our Laptop Services</h1>
  <p className='home-p'>Laptops are gaining popularity over the conventional desktop computers due to the convenience and affordability.</p>



  <img className='home-img2' src='https://www.laptopstoreindia.in/wp-content/themes/laptopstore/assets/images/serv-imgz.jpg'/>


  <h1 className='home-hading'>Our Laptop Sales</h1>
  <p className='home-p'>Laptops are gaining popularity over the conventional desktop computers due to the convenience and affordability.</p>


  <div className="section">
   <div className=" grid grid-three-column">
       {
        filterProduct.map((curElem)=>{
          if (curElem.feature) {
            return(
              <Product key={curElem._id} {...curElem}  />
            )
            
          }
        })
       }
      </div>
   </div>


   <h1 className='home-hading'>Our Laptop Brand </h1>

  <div className='home-container'>

  <div className='home-card'>
  <img className='home-img' src='https://www.laptopstoreindia.in/wp-content/uploads/2021/12/laptop-logo-1.png'/>
</div>

<div className='home-card'>
  <img  className='home-img' src='https://www.laptopstoreindia.in/wp-content/uploads/2021/12/laptop-logo-2.png'/>
</div>


<div className='home-card'>
  <img  className='home-img' src='https://www.laptopstoreindia.in/wp-content/uploads/2021/12/laptop-logo-4.png'/>
</div>

  </div>



<Header/>

 
   </>
  )
}

export default Home