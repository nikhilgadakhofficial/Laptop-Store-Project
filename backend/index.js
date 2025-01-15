const express = require('express');
const dotenv = require("dotenv")
const cors = require('cors')
dotenv.config();

const dbConact = require('./config/dbConnect');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const addToCartRouter = require('./routes/addToCartRoutes');
const orderRouter = require("./routes/orderRoutes")
const contactRouter = require('./routes/contactRoutes')
dbConact();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users",userRouter);
app.use("/api/product",productRouter);
app.use("/api/addTocart",addToCartRouter);
app.use("/api/orders",orderRouter)
app.use("/api/contact",contactRouter);

const PORT = process.env.PORT || 8081 ;

//https://laptop-store-project-tdzp.onrender.com

app.listen(PORT,()=>{
    console.log(`Server Is running on port ${PORT}`)  
});

