const express = require('express');
const router = express.Router();

const {productPost,getAllProduct, getProductWithId,putProduct,deleteProduct} = require('./../controllers/productControllers');

const verifyToken = require('./../middleware/verifyToken');
const authorzeRoles = require('./../middleware/authorzeRoles');

router.post("/product",verifyToken , authorzeRoles("ADMIN"), productPost);
router.get('/products',  verifyToken , authorzeRoles("ADMIN","USER"), getAllProduct);
router.get("/product/:id", verifyToken , authorzeRoles("ADMIN","USER"), getProductWithId);
router.put("/product/:id", verifyToken , authorzeRoles("ADMIN"), putProduct);
router.delete("/product/:id", verifyToken , authorzeRoles("ADMIN"), deleteProduct);


module.exports = router