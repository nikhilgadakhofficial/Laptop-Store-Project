import React from 'react'
import AdminPanel from '../../components/AdminPanel/AdminPanel'
import './AllUser.css'
import axios from 'axios';
import toast from "react-hot-toast";
import { useState,useEffect } from 'react';

function AllUser() {

    const [users,setUsers] = useState([]);
   
  const token = localStorage.getItem('token');

  if (!token) {
    toast.error('Please login first');
    return;
  }

  const getUsers = async ()=>{
  
    const response  = await axios.get('http://localhost:8081/api/users/allusers',
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
               <b>Image</b>
               <b>Name</b>
               <b>Eamil</b>
               <b>Role</b>
            
           </div>
           {users.map((user,index)=>{
             return(
               <div key={index} className="list-table-format">
                 <img src={user.porfileImageUrl} alt="" />
                 <p>{user.fullName}</p>
                 <p>{user.email}</p>
              
                 <p>{user.role}</p>
                 <img style={{width : '30px'}}  alt="" />
                 
               </div>
             )
           })}
         </div>
       </div>
     
   </>
  )
}

export default AllUser