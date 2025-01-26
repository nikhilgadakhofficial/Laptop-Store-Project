import React, { useEffect, useState } from 'react'
import './SingleProduct.css'
import {NavLink, useParams} from 'react-router-dom'
import axios from 'axios'
import toast from "react-hot-toast";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Stars from '../../components/Stars/Stars';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
const apiUrl = import.meta.env.VITE_API_URL;
function SingleProduct() {

  const [product,setProduct] = useState('')
  const navigate = useNavigate();
  const {id} = useParams();

  const loadSingleProduct = async ()=>{
    
    const token = localStorage.getItem('token');

    if (!token) {
      toast.error('Please login first');
      navigate('/login');
      return;
    }
  
    const response = await axios.get(`${apiUrl}/api/product/product/${id}`,
     {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
     }
    );

      
if (response.data.success) {
  toast.success(response.data.message);
  setProduct(response.data.data);
}
else{
  toast.success(response.data.message);
}
  }

  useEffect(()=>{
    loadSingleProduct()
  },[])

  return (
   <>
    <div className="container">
        <div className="grid grid-two-column">
          {/* product Images  */}

          <div className="product_images">
 
          <img className='img' src={`${apiUrl}/images/${product.productImageUrl}`}></img>
         
          </div>

       

          {/* product dAta  */}
          <div className="product-data">
            <h2>{product.title}</h2>
         
           <Stars reviews={product.reviews} stars={product.stars}/>
           
            <p className="product-data-price">
              MRP:
              <del>
                price={parseInt(product.price )+ 2500} 
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day:  price={product.price} 
            </p>
            <p>{product.description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Thapa Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {product.stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
             
          
            </div>
            <hr/>
           <NavLink to={`/order/${product._id}`}>
           <button className='btn2'>Order Now</button>
           </NavLink>
          </div>
        </div>
        
      </div>

      <Header/>
   </>
  )
}

export default SingleProduct