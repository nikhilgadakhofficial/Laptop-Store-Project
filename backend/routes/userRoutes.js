const express = require('express');
const router = express.Router();

const {signupPost,loginPost,allUsers,deleteUser,getProfile} = require('./../controllers/userControllers')

const verifyToken = require('./../middleware/verifyToken');
const authorzeRoles = require('./../middleware/authorzeRoles');

router.post("/signup",signupPost);
router.post("/login",loginPost);
router.get("/allusers", verifyToken , authorzeRoles("ADMIN"), allUsers);
router.delete("/user/:id", verifyToken , authorzeRoles("ADMIN"), deleteUser);
router.get('/getProfile',verifyToken,getProfile)


module.exports = router