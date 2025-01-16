import React from "react";
import "./OrederNow.css";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios  from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;

function OrderNow() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [fullName,setFullName] = useState('');
  const [porfileImageUrl,setPorfileImageUrl] = useState('');
  const [mobileNo,setMobileNo] = useState('');
  const [user,setUser] = useState();
  const [address,setAddress] = useState('');
  const [paymenttype,setPaymenttype] = useState('Cash On Delivery');
  const [city,setCity] = useState('');
  const [state,setState]= useState('');
  const [quantity,setQuantity] = useState('1');
  const [total,setTotal] = useState('');
  const [product,setProduct] = useState('');




  const loadProduct = async ()=>{

    const token = localStorage.getItem('token');

  if (!token) {
    toast.error('Please login first');
    navigate('/login');
    return;
  }

    
    const response = await axios.get(`${apiUrl}/api/product/product/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data.success) {
      setProduct(response.data.data);
    } else {
      toast.success(response.data.message);
    }

  }

  const getUser = async () => {
    const token = localStorage.getItem('token');

  if (!token) {
    toast.error('Please login first');
    navigate('/login');
    return;
  }

    const response = await axios.get(
      `${apiUrl}/api/users/getProfile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setFullName(response.data.data.fullName);
    setPorfileImageUrl(response.data.data.porfileImageUrl);
    setMobileNo(response.data.data.mobileNo);
    setUser(response.data.data._id);
  };

 const orderProduct = async ()=>{
  
   const response = await axios.post(`${apiUrl}/api/orders/order`,
    {
      fullName ,
      porfileImageUrl,
      mobileNo,
      paymenttype,
      address,
      city,
      state,
      product,
      quantity,
      total,
      user
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
   );

   
  const totalbill = parseInt(product.price) * parseInt(quantity);

  setTotal(totalbill);

   if (response.data.success) {
     toast.success(response.data.message);
   }
   else{
    toast.error(response.data.message)
   }

 }


  useEffect(() => {
    getUser();
    loadProduct()
  }, []);

  return (
    <>
      <div className="container-order">
        <div className="title">
          <h2>Product Order </h2>
        </div>
        <div className="d-flex">
          <form>

            <label>
              <span className="fname">
                First Name <span className="required">*</span>
              </span>
              <input type="text"
              className="input-order"
              value={fullName} 
              onChange={(e)=>{setFullName(e.target.value)}}
              />
          
            </label>

            
            <label>
              <span>
                Phone <span className="required">*</span>
              </span>
              <input type="text"
                className="input-order"
               value={mobileNo}
               placeholder={mobileNo}
              onChange={(e)=>{setMobileNo(e.target.value)}}/>
            </label>

        
            <label>
              <span>
                Street Address <span className="required">*</span>
              </span>
              <input
                type="text"
                  className="input-order"
                value={address}
                onChange={(e)=>{setAddress(e.target.value)}}
              />
            </label>

            <label>
              <span>
                 City <span className="required">*</span>
              </span>
              <input type="text"
                className="input-order"
              value={city}
              onChange={(e)=>{setCity(e.target.value)}}
              />
            </label>

            <label>
              <span>
                State  <span className="required">*</span>
              </span>
              <input type="text" 
                className="input-order"
              value={state}
              onChange={(e)=>{setState(e.target.value)}}
              />
            </label>

        

            <label>
              <span>
              Quantity<span className="required">*</span>
              </span>
              <input type="email"
                className="input-order"
              value={quantity}
              onChange={(e)=>{setQuantity(e.target.value)}}
             />
            </label>
          </form>

          <div className="Yorder">
            <table>
              <tr>
                <th colspan="2">Your order</th>
              </tr>
              <tr>
                <td>Product Name x {quantity}(Qty)</td>
                <td>{product.price}</td>
              </tr>
              <tr>
                <td>Subtotal</td>
                <td>{total}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free shipping</td>
              </tr>
            </table>
            <br />
            <div>
              <input type="text"
                className="input-order"
                placeholder="Cash On Delivery"
              value={paymenttype}
              onChange={(e)=>{setPaymenttype(e.target.value)}}
               
              />
            </div>

            <button type="sambit" onClick={orderProduct}>Place Order</button>
          </div>
        </div>
      </div>
      <h1>jofif</h1>
    </>
  );
}

export default OrderNow;
