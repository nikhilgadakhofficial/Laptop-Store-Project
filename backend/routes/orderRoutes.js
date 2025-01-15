const express = require('express');
const router = express.Router();

const {postOrder,getAllOrders,getUserOrder,putStatus} = require('./../controllers/orderControllers')

const verifyToken = require('./../middleware/verifyToken');
const authorzeRoles = require('./../middleware/authorzeRoles');

router.post('/order', verifyToken , authorzeRoles("ADMIN","USER"), postOrder);
router.get('/order',  verifyToken , authorzeRoles("ADMIN"), getAllOrders);
router.get('/userorder', verifyToken , authorzeRoles("ADMIN","USER"), getUserOrder);
router.post('/putorder', verifyToken, authorzeRoles("ADMIN"),putStatus);

module.exports = router