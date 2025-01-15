import React from "react";
import "./OrderProduct.css";
import AdminPanel from "../../components/AdminPanel/AdminPanel";
import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

function OrderProduct() {
  const [order, setOrder] = useState([]);

  const token = localStorage.getItem("token");

  if (!token) {
    toast.error("Please login first");
    return;
  }

  const getOrder = async () => {
    const response = await axios.get("http://localhost:8081/api/orders/order", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setOrder(response.data.data);

    if (response.data.success) {
      toast.success(response.data.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(
      "http://localhost:8081/api/orders/putorder",
      {
        orderId,
        status: event.target.value,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    
    if (response.data.success) {
      toast.success(response.data.message);
      getOrder();
    }
  };

  console.log(order);

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <>
      <AdminPanel />

      <div className="list add flex-col">
        <p>All Product Order List</p>
        <div className="list-table">
          <div className="list-table-format title">
            <b>User Image</b>
            <b>User Name</b>
            <b>User Mobile No</b>
            <b>Product Image</b>
            <b>Product Name</b>
            <b>Quantity</b>
            <b>Price</b>
            <b>Status</b>
          </div>
          {order.map((order, index) => {
            return (
              <div key={index} className="list-table-format">
                <img
                  src={order.porfileImageUrl}
                  style={{ borderRadius: "50%" }}
                  alt=""
                />
                <p>{order.fullName}</p>
                <p>{order.mobileNo}</p>
                <img src={order.product.productImageUrl} alt="" />
                <p>{order.product.title}</p>
                <p>{order.quantity}</p>
                <p>{order.product.price}</p>
                <select
                  onChange={(event) => statusHandler(event, order._id)}
                  value={order.status}
                >
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default OrderProduct;
