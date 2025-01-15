import React from 'react'
import './UpdateProduct.css'
import AdminPanel from '../../components/AdminPanel/AdminPanel';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
function UpdateProduct() {
    
const [title,setTitle] = useState('');
const [description,setDescription] = useState('');
const [productImageUrl,setProductImageUrl] = useState('');
const [stock,setStock] = useState('');
const [rating,setRating] = useState('');
const [price,setPrice] = useState('');
const navigate = useNavigate();
  const token = localStorage.getItem('token');

  if (!token) {
    toast.error('Please login first');
    return;
  }

const loadProduct = async (id)=>{

    if (!id) {
        return
    }

  const response  = await axios.get(`http://localhost:8081/api/product/product/${id}`,
  {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }

);

console.log(response.data);


  setTitle(response.data.data.title);
  setDescription(response.data.data.description);
  setProductImageUrl(response.data.data.productImageUrl);
  setPrice(response.data.data.price);
  setRating(response.data.data.rating);
  setStock(response.data.data.stock);


if (response.data.success) {
  toast.success(response.data.message);
}
else{
  toast.success(response.data.message);
}
}

const updateProduct = async ()=>{
  
const response = await axios.put(`http://localhost:8081/api/product/product/${id}`,
  {
   title,
   description,
   price,
   stock,
   rating,
   productImageUrl
  },
  {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }

);

toast.success(response.data.message);

setTimeout(()=>{
  navigate('/listproduct')
},2000)

}
const {id} = useParams();


useEffect(()=>{
loadProduct(id)
},[id]);

  return (
    <>
    <AdminPanel/>
    <div className='add'>
          <div  className="flex-col" >
  
          <div className="add-product-name flex-col">
          <p>Product Url</p>
              <input  type="text" 
              name='name'
               placeholder='Type Here Url'
               value={productImageUrl}
               onChange={(e)=>setProductImageUrl(e.target.value)}
               />
              </div>
  
              <div className="add-product-name flex-col">
                  <p>Product name</p>
                  <input  type="text"
                 placeholder='Type Here' 
                 value={title}
                 onChange={(e)=>setTitle(e.target.value)}
                 />
              </div>
  
              <div className="add-product-description flex-col">
                  <p>Product description</p>
                  <textarea name="description"
                   rows='6'
                    placeholder='Write content here'
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    ></textarea>
              </div>
              
              <div className="add-category-price">
                 
                  <div className="add-price flex-col">
                      <p>Product price</p>
                      <input type="number"
                       name='price' 
                       placeholder=' 120'
                       value={price}
                       onChange={(e)=>setPrice(e.target.value)}
                       />
  
                     <p>Product Stock</p>
                      <input type="number"
                       name='price' 
                       placeholder='4'
                       value={stock}
                       onChange={(e)=>setStock(e.target.value)}
                       />
  
                      <p>Product Rating</p>
                      <input type="number"
                       name='price' 
                       placeholder='5.1'
                       value={rating}
                       onChange={(e)=>setRating(e.target.value)}
                       />
                  </div>
              </div>
              <button type='submit'onClick={updateProduct} className='add-btn'>ADD</button>
          </div>
      </div>
      </>
  )
}

export default UpdateProduct