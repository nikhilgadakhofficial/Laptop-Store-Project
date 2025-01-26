const express = require('express');
const router = express.Router();
const multer = require('multer');

const {productPost,getAllProduct, getProductWithId,putProduct,deleteProduct} = require('./../controllers/productControllers');

const verifyToken = require('./../middleware/verifyToken');
const authorzeRoles = require('./../middleware/authorzeRoles');

const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
});
const upload = multer({storage:storage})

router.post("/product", upload.single('productImageUrl'), verifyToken , authorzeRoles("ADMIN"), productPost);
router.get('/products',  verifyToken , authorzeRoles("ADMIN","USER"), getAllProduct);
router.get("/product/:id", verifyToken , authorzeRoles("ADMIN","USER"), getProductWithId);
router.put("/product/:id",upload.single('productImageUrl'), verifyToken , authorzeRoles("ADMIN"), putProduct);
router.delete("/product/:id", verifyToken , authorzeRoles("ADMIN"), deleteProduct);


module.exports = router