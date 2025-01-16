import React, { useEffect, useState } from 'react'
import Product from '../../components/Product/Product';
import './../../components/Product/Product.css'
import axios from 'axios'
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
const apiUrl = import.meta.env.VITE_API_URL;
function Products() {

    const [products,setProducts] = useState([])
     const navigate = useNavigate();
    
  
    const loadProducts = async ()=>{

      const token = localStorage.getItem('token');

      if (!token) {
        toast.error('Please login first');
        navigate('/login');
    
      }
      else{
        const response = await axios.get(`${apiUrl}/api/product/products`,{
          headers: {
              'Authorization': `Bearer ${token}`,
            },
      });

      setProducts(response.data.data);
  
if (response.data.success) {
  toast.success(response.data.message);
}
else{
  toast.success(response.data.message);
}

      }
    
         }

    useEffect(()=>{
        loadProducts();
    },[])
  return (
   <>
   <div className="main-product">  
   <div className="section">
   <div className=" grid grid-three-column">
        {products.map((curElem) => {
          return <Product key={curElem._id} {...curElem} />;
        })}
      </div>
   </div>

        </div>

        <Header/>
   </>
  )
}

export default Products