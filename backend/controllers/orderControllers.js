
const Order = require('./../models/ordersModel')
const User = require('./../models/userModel');
const postOrder = async (req,res)=>{
    
const {fullName,porfileImageUrl,mobileNo,paymenttype,address,city,state,product,total,quantity,user} = req.body;

    try {

        if (!fullName || !porfileImageUrl || !mobileNo || !paymenttype || !address || !city || !state || !product || !total || !quantity || !user) {
            return res.json({
                success : false,
                message : "All fielde are mandatory"
              })  
        }

        const orderData = await Order.create({
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
        });

        res.json({
            success : true,
            message : "Order Place Successfully",
            data : orderData
        });
        
    } catch (error) {
        res.json({
            success : false,
            message: error.message,
            data: null,
          });
    }
}

const getAllOrders = async (req,res)=>{

    try {
        const allOrder = await Order.find();

        res.json({
            success : true,
            message : " All Order Get  Successfully ",
            data : allOrder
        })
    } catch (error) {
        res.json({
            success : false,
            message: error.message,
            data: null,
          });
    }
}

const getUserOrder = async (req,res)=>{

try {
    
  //  const {orderId} = req.query;



    const found = await User.findById(req.user.id);

   if (!found) {
    return res.json({
        success : false,
        message : "Product Not Found",
        data : null
    });
   }

   const productData = await Order.find({user : req.user.id}).sort({createdAt : -1});

   res.json({
    success : true,
    message : "Product  fetched Successfully",
    data : productData
   })
} catch (error) {
    res.json({
        success : false,
        message: error.message,
        data: null,
      });
}
}

const putStatus = async (req,res)=>{

    const { orderId,status} = req.body;

    try {

        const updateStatus = await Order.findByIdAndUpdate(orderId,{
            status
        });

        res.json({
            success:true,
             message:"Status Updated"
            });
        
    } catch (error) {
        res.json({
            success : false,
            message: error.message,
            data: null,
          });
    }
} 




module.exports = {
    postOrder,
    getAllOrders,
   getUserOrder,
   putStatus
}