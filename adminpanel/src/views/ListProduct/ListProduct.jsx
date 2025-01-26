import React, { useEffect, useState } from 'react'
import AdminPanel from './../../components/AdminPanel/AdminPanel'
import './ListProduct.css'
import axios from 'axios';
import toast from "react-hot-toast";
import delet from '/img/delete.png';
import pen from '/img/pen.png'
import { Link } from 'react-router-dom';

function ListProduct() {

  const [product,setProduc] = useState([]);
   
  const token = localStorage.getItem('token');

  if (!token) {
    toast.error('Please login first');
    return;
  }

  const getProduct = async ()=>{
  
    const response  = await axios.get('http://localhost:8081/api/product/products',
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );
       
setProduc(response.data.data);

if (response.data.success) {
  toast.success(response.data.message);
}
else{
  toast.success(response.data.message);
}

  }

  const deletProduct = async(id)=>{

    const response = await axios.delete(`http://localhost:8081/api/product/product/${id}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    
if (response.data.success) {
  toast.success(response.data.message);
  getProduct();
}
else{
  toast.success(response.data.message);
}

  }

  useEffect(()=>{
    getProduct()
    
  },[])
  return (
    <>
    <AdminPanel/>
    
    <div className='list add flex-col'>
      <p>All Product List</p>
      <div className="list-table">
        <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Price</b>
            <b>Stock</b>
            <b>Delete</b>
            <b>Edit</b>
        </div>
        {product.map((product,index)=>{
          return(
            <div key={index} className="list-table-format">
              <img src={`http://localhost:8081/images/${product.productImageUrl}`} alt="" />
              
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{product.stock}</p>
              <img style={{width : '30px'}} onClick={()=>{deletProduct(product._id)}} src={delet} alt="" />
              
             <Link to={`/update/${product._id}`} > <img style={{width : '30px'}}  src={pen} alt="" /></Link>
            </div>
          )
        })}
      </div>
    </div>
  
    </>
  )
}

export default ListProduct