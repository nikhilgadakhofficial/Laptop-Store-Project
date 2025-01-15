const express = require('express');
const router = express.Router();

const {postAddToCart,getAddToCartProduct,getAllAddToCartData,deleteData} = require('./../controllers/addToCartControllers');

const verifyToken = require('./../middleware/verifyToken');
const authorzeRoles = require('./../middleware/authorzeRoles');

router.post("/addToCart",verifyToken , authorzeRoles("ADMIN","USER"), postAddToCart);
router.get('/addToCart',verifyToken , authorzeRoles("ADMIN","USER"), getAddToCartProduct);
router.get('/alladdToCartData',verifyToken , authorzeRoles("ADMIN","USER"),  getAllAddToCartData);
router.delete('/deleteAddToCart/:id',verifyToken , authorzeRoles("ADMIN","USER"), deleteData)

module.exports = router;