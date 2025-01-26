const express = require('express');
const router = express.Router();
const multer = require('multer');

const {signupPost,loginPost,allUsers,deleteUser,getProfile} = require('./../controllers/userControllers')

const verifyToken = require('./../middleware/verifyToken');
const authorzeRoles = require('./../middleware/authorzeRoles');

const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
});
const upload = multer({storage:storage})

router.post("/signup", upload.single('porfileImageUrl'),signupPost);
router.post("/login",loginPost);
router.get("/allusers", verifyToken , authorzeRoles("ADMIN"), allUsers);
router.delete("/user/:id", verifyToken , authorzeRoles("ADMIN"), deleteUser);
router.get('/getProfile',verifyToken,getProfile)


module.exports = router