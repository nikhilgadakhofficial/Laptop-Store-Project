const express = require('express');
const router = express.Router();


const {getReviews,postReviews} = require('./../controllers/reviewsControllers')
const verifyToken = require('./../middleware/verifyToken');
const authorzeRoles = require('./../middleware/authorzeRoles');


router.get("/getreviews",verifyToken , authorzeRoles("ADMIN"), getReviews);
router.post('/postreviews',  verifyToken , authorzeRoles("ADMIN","USER"), postReviews);

module.exports = router