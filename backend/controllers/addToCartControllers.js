const AddToCart = require('./../models/addToCartModel');
const User = require('./../models/userModel');


const postAddToCart = async (req,res)=>{
    const {product,quantity ,user} = req.body;

    try {
        
  if (!product || !quantity || !user) {
          return res.json({
            success : false,
            message : "All fielde are mandatory"
          })  
        }

        const newData = await AddToCart.create({
            product,
            quantity,
            user
        });

        res.status(200).json({
            success : true,
            message : "Product Add To Cart Successful",
            data : newData
        })

    } catch (error) {
        res.send({
            success : false,
            message: error.message,
            data: null,
          });
    }
}

const getAddToCartProduct = async (req,res)=>{

    const {productId} = req.query;

    const found = await User.findById(productId);

   if (!found) {
    return res.json({
        success : false,
        message : "Product Not Found",
        data : null
    });
   }

   const productData = await AddToCart.find({user : productId}).sort({createdAt : -1});

   res.json({
    success : true,
    message : "Product  fetched Successfully",
    data : productData
   })
}

const getAllAddToCartData = async (req,res)=>{

    try {

        const allData = await AddToCart.find();

        res.json({
            success : true,
            message : "All Data fetched Successfully",
            data : allData
        })
        
    } catch (error) {
        res.send({
            success : false,
            message: error.message,
            data: null,
          });
    }
}

const deleteData = async (req,res)=>{

    
    const {id} = req.params;
  
    await AddToCart.deleteOne({_id : id});

    res.json({
        success : true,
        message :"Product Delete Successfully",
        data : null
    })
}

module.exports ={
    postAddToCart,
    getAddToCartProduct,
    getAllAddToCartData,
    deleteData
}