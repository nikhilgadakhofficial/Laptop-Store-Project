import React, { useEffect, useState } from 'react'
import './AdminPanel.css'
import {NavLink} from 'react-router-dom'
import add_icon from "/img/add_icon.png";
import order_icon from "/img/order_icon.png";
import axios from 'axios';
import toast from "react-hot-toast";

function AdminPanel() {

  const [user,setUser] = useState('');

  const token = localStorage.getItem('token');

  if (!token) {
    toast.error('Please login first');
    return;
  }


  const getUser = async ()=>{

    const response  = await  axios.get('http://localhost:8081/api/users/getProfile',
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    setUser(response.data.data);

    if (response.data.data.role == 'USER') {
      toast.error("USER NOT ACCESS");
      window.location.href = "/";
    }
    
  }

  


  useEffect(()=>{
    getUser()
  },[])

  return (
   <>
         <div className="sidebar">
         
      
         <div className="navbar">
         <img src={user.porfileImageUrl} alt="" className="profile" />
         <p className='title'> {user.fullName}...❤</p>
         </div>
    
         
           <div className="sidebar-options">
             <NavLink to="/addproduct" className="sidebar-option">
               <img src={add_icon} alt="" />
               <p>Add Items</p>
             </NavLink>
             <NavLink to="/listproduct" className="sidebar-option">
               <img src={order_icon} alt="" />
               <p>List Items</p>
             </NavLink>
             <NavLink to="/orderprduct" className="sidebar-option">
               <img src={order_icon} alt="" />
               <p>Orders</p>
             </NavLink>
           </div>
         </div>
   </>
  )
}

export default AdminPanel