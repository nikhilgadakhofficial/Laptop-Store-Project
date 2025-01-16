
import { Routes, Route } from 'react-router-dom';
import Login from "./views/Login/Login";
import AddProduct from "./views/AddProduct/AddProduct";
import ListProduct from "./views/ListProduct/ListProduct";
import AdminPanel from '././components/AdminPanel/AdminPanel' 
import UpdateProduct from '././views/UpdateProduct/UpdateProduct'
import { Toaster } from "react-hot-toast";
import OrderProduct from "./views/OrderProduct/OrderProduct";
import AllUser from './views/AllUser/AllUser';
import AllConatUser from './views/AllConatUser/AllConatUser';

function App() {
  

  return (

 <div>
      <hr/>
      <div className="app-content">
        <Toaster/>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/listproduct' element={<ListProduct />} />
        <Route path='/orderprduct' element={<OrderProduct />} />
       <Route path="/update/:id" element={<UpdateProduct/>}/>
       <Route path="/alluser" element={<AllUser/>}/>
       <Route path="/allcontact" element={<AllConatUser/>}/>
        </Routes>
      </div>
    </div>

  )
}

export default App
 