import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import toast from 'react-hot-toast'
import './Porfile.css'
import { RiLogoutCircleLine } from "react-icons/ri";
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;
function Porfilel() {

  const [user,setUser] = useState('');
  const [order,setOrder] = useState([]);
  const navigate = useNavigate();
  

  const getUser = async ()=>{
    const token = localStorage.getItem('token');

    if (!token) {
      toast.error('Please login first');
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

    if (response.data.success) {
      toast.success(response.data.message)

    }
    else{
      toast.error(response.data.message);
    }

  }



  const loadOrderData = async ()=>{
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }
    
    const response = await axios.get(`${apiUrl}/api/orders/userorder`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );
    setOrder(response.data.data);
  }
  
  

  useEffect(()=>{
    getUser();
   loadOrderData()
  },[])

  return (
    <> 
        
        <div>
          
          
        <div className="navbar-f">
            <h1>Porfile</h1>
             </div>

             <h1>Hello 👋 {user.fullName}</h1>
       
          <div className='cont'>
      

              <div className='cont-card'>
                
              <div className='cont-c'>
              <img className='por-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTls-2a0CNFMhK869d1mlRIDgWmfO1VZv2Pzw&s' />
              </div>
<hr/>
                <div className='cont-c'>
                <img className='por-img2' src={`${apiUrl}/images/${user.porfileImageUrl}`} />
                <h1 className='h1'> Name : <span className='span'>{user.fullName}</span></h1>
                <h1 className='h1'> Mobile No : <span  className='span'>{user.mobileNo}</span></h1>
                <h1 className='h1'> Email : <span  className='span'>{user.email}</span></h1>
                <RiLogoutCircleLine  onClick={()=>{
                  localStorage.clear()
                  toast.success("Logout Successfully");
          setTimeout(() => {
            window.location.href = "/login";
          }, 1000)
                }} className='con-log' />
                </div>
              </div>
          </div>
        </div>



        <div className='list-c'>        
  <div className='list add flex-col'>
      <p className='h11'>All Product List</p>
      <div className="list-table">
        <div className="list-table-format title">
            <b>Product Name</b>
            <b>Payment Type</b>
            <b>Quantity</b>
            <b>Total</b>
            <b>Image</b>
            <b>Status</b>
        </div>
        {order.map((product,index)=>{
          return(
            <div key={index} className="list-table-format">
             <p className='p1'>{product.product.title}</p>
              <p className='p1'>{product.paymenttype}</p>
              <p className='p1'>{product.quantity}</p>
              <p className='p1'>{product.total}</p>
              <img style={{width : '100px'}} className='nn'  src={`${apiUrl}/images/${product.product.productImageUrl}`} alt="" />
              <p className='p1'>{product.status}</p>

        
            </div>
          )
        })}
      </div>
    </div>
       </div>
  <Header/>
          </>
  )
}

export default Porfilel