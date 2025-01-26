const Product = require('./../models/productModel');

const productPost = async (req,res)=>{
    const {title,feature,description,price,stars,stock,category,reviews} = req.body;

    try {
        
  if (!title || !description  || !price || !stock ||!category || !reviews || !stars) {
          return res.json({
            success : false,
            message : "All fielde are mandatory"
          })  
        }

        let image_filename =  `${req.file.filename}`;

        const productData = new Product({
            title,
            description,
            productImageUrl : image_filename,
            price,
            stars,
            stock,
            category,
            reviews,
            feature   
         });

        const newData = await productData.save()

        res.status(200).json({
            success : true,
            message : "Product Create Successful",
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

const getAllProduct = async (req,res)=>{

    try {

        const allProduct = await Product.find();

        res.json({
            success : true,
            message : "All Product Fetched Successfully",
            data : allProduct
        })
        
    } catch (error) {
        res.send({
            success : false,
            message: error.message,
            data: null,
          });
    }
}

const getProductWithId = async (req,res)=>{

    const {id} = req.params;
    console.log(id);
    

    try {

        const productWithId = await Product.findOne({ _id : id});

        console.log(productWithId);
        

        if (productWithId) {
            res.json({
                success : true,
                message : "Product fetched successfully",
                data : productWithId
            })
        }else {
            res.statusCode = 400;
            return res.send({
              message: "The Product not fount",
            });
          }
        
    } catch (error) {
        res.send({
            success : false,
            message: error.message,
            data: null,
          });
    }
}

const putProduct = async (req,res)=>{
    const {id } = req.params;
    const {title,description,price,stars,stock,reviews,category} = req.body;

    try {

        let image_filename =  `${req.file.filename}`;

        await Product.updateOne({_id : id},{
            $set : {
                title,
                description,
                productImageUrl : image_filename,
                price,
                stars,
                stock,
                reviews,
                category
            }
        });

        return res.json({
            success : true,
            message: "Product Update successfully",
          });
        
    } catch (error) {
        res.json({
            success : false,
            message: error.message,
            data: null,
          });
    }
}


const deleteProduct = async (req,res)=>{
    const {id} = req.params;
       console.log(id);
       
    try {
        await Product.deleteOne({_id : id});

        return res.json({
            success : true,
            message : "Product Delete successfully"
        })
    } catch (error) {
        res.json({
            success : false,
            message: error.message,
            data: null,
          });
    }
}



module.exports = {
    productPost,
    getAllProduct,
    getProductWithId,
    putProduct,
    deleteProduct
}