const express = require('express');
const dotenv = require("dotenv")
const cors = require('cors')
dotenv.config();

const dbConact = require('./config/dbConnect');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const addToCartRouter = require('./routes/addToCartRoutes');
const orderRouter = require("./routes/orderRoutes")
const contactRouter = require('./routes/contactRoutes');
const reviewsRouter = require('./routes/reviewsRouter')
dbConact();

const app = express();
app.use(express.json());
app.use(cors());


app.get("/health",(req, res) => {
    res.json({
        success: true,
        message: "Server is running",
        data: null
    })
})

app.use("/api/users",userRouter);
app.use("/api/product",productRouter);
app.use("/api/addTocart",addToCartRouter);
app.use("/api/orders",orderRouter)
app.use("/api/contact",contactRouter);
app.use("/api/reviews",reviewsRouter);
app.use("/images",express.static('uploads'));

const PORT = process.env.PORT || 8081 ;



app.listen(PORT,()=>{
    console.log(`Server Is running on port ${PORT}`)  
});

