import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login/Login";
import Singnup from "./views/Singnup/Singnup";
import Home from "./views/Home/Home";
import { Toaster } from "react-hot-toast";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Products from "./views/Products/Products";
import SingleProduct from "./views/SingleProduct/SingleProduct";
import Navbar from "./components/Navbar/Navbar";
import OrderNow from "./views/OrdeNow/OrderNow";
import PorfileI from "./views/porfileI/porfileI";
import OrderList from "./views/OrderList/OrderList";
import Reviews from "./views/Reviews/Reviews";

function App() {
  return (
    <>
     
          <Toaster />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singnup" element={<Singnup />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/porfileI" element={<PorfileI />} />
            <Route path="/products" element={<Products />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/order/:id" element={<OrderNow />} />  
            <Route path="/listOrder" element={<OrderList />} />
            <Route path="/reviews" element={<Reviews />} />
            
          </Routes>
      
    </>
  );
}

export default App;
