import React, { useState } from 'react'
import AdminPanel from '../../components/AdminPanel/AdminPanel'
import './AddProduct.css'
import axios from 'axios';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

function AddProduct() {

const [title,setTitle] = useState();
const [description,setDescription] = useState();
const [productImageUrl,setProductImageUrl] = useState(null);
const [stock,setStock] = useState();
const [stars,setStars] = useState();
const [price,setPrice] = useState();
const [category,setCategory] = useState();
const [reviews , setReviews] = useState();
const navigate = useNavigate();

// const [data , setData ] = useState(
//   {
//     title : '',
//     description : '',
//     stock : '',
//     stars : '',
//     price : '',
//     category : '',
//     reviews : ''
//   }
// )

// const onChangeHandler = (e) =>{
//   const name = e.target.name;
//   const value = e.target.value;
//   setData(data=>({...data,[name]:value}))
// }


  const token = localStorage.getItem('token');

  if (!token) {
    toast.error('Please login first');
    return;
  }


const addProduct = async (e)=>{

  e.preventDefault();

  const formData = new FormData();

  formData.append('title',title)
  formData.append('description', description)
  formData.append('stock', stock)
  formData.append('stars', stars)
  formData.append('price', price)
  formData.append('category',category)
  formData.append('reviews', reviews)
  formData.append('productImageUrl', productImageUrl);


  const response  = await axios.post('http://localhost:8081/api/product/product',
  formData,
  {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }
);

if (response.data.success) {
  toast.success(response.data.message);
  navigate('/listproduct')
}
else{
  toast.success(response.data.message);
}
}

  return (
    <>
  <AdminPanel/>
  <div className='add'>
        <form onSubmit={addProduct}  className="flex-col" >

        <div className="add-product-name flex-col">
        <p>Product Url</p>
            <input  type="file" 
       
             placeholder='Type Here Url'
         
             onChange={(e)=>setProductImageUrl(e.target.files[0])}
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

            <div className="add-product-name flex-col">
                <p>Product Category</p>
                <input  type="text"
               placeholder='Type Here' 
               value={category}
               onChange={(e)=>{setCategory(e.target.value)}}
               />
            </div>

            <div className="add-product-description flex-col">
                <p>Product description</p>
                <textarea name="description"
                 rows='6'
                  placeholder='Write content here'
                  value={description}
                  onChange={(e)=>{setDescription(e.target.value)}}
                  ></textarea>
            </div>
            
            <div className="add-category-price">
               
                <div className="add-price flex-col">
                    <p>Product price</p>
                    <input type="number"
                     name='price' 
                     placeholder=' 30000'
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

                    <p>Product Stars</p>
                    <input type="number"
                     name='price' 
                     placeholder='5.1'
                     value={stars}
                     onChange={(e)=>{setStars(e.target.value)}}
                     />

                    <p>Product Reviews</p>
                    <input type="number"
                     name='price' 
                     placeholder='55'
                     value={reviews}
                     onChange={(e)=>setReviews(e.target.value)}
                     />
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
    </div>
    </>
  )
}

export default AddProduct