import React from 'react'
import AdminPanel from '../../components/AdminPanel/AdminPanel'
import './../AllUser/AllUser.css'
import axios from 'axios';
import toast from "react-hot-toast";
import { useState,useEffect } from 'react';

function AllConatUser() {

    const [users,setUsers] = useState([]);
   
  const token = localStorage.getItem('token');

  if (!token) {
    toast.error('Please login first');
    return;
  }

  const getUsers = async ()=>{
  
    const response  = await axios.get('http://localhost:8081/api/contact/getcontact',
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );
       
setUsers(response.data.data);

if (response.data.success) {
  toast.success(response.data.message);
}
else{
  toast.success(response.data.message);
}

  }

  useEffect(()=>{
    getUsers()
  },[])
  return (
   <>
   <AdminPanel/>
    <div className='list add flex-col'>
         <p>All Product List</p>
         <div className="list-table">
           <div className="list-table-format title">
               
               <b>Name</b>
               <b>Eamil</b>
               <b>message</b>
               <b>Mobile No</b>
            
           </div>
           {users.map((user,index)=>{
             return(
               <div key={index} className="list-table-format">
               
                 <p>{user.fullName}</p>
                 <p>{user.email}</p>
             
                 <p>{user.message}</p>
                 <p>{user.mobileNo}</p>
                 <img style={{width : '30px'}}  alt="" />
                 
               </div>
             )
           })}
         </div>
       </div>
     
   </>
  )
}

export default AllConatUser