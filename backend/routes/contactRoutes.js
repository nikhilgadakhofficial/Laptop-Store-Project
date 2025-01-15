const express = require('express');
const router = express.Router();

const {postContact,getContact} = require('./../controllers/contactControllers')

const verifyToken = require('./../middleware/verifyToken');
const authorzeRoles = require('./../middleware/authorzeRoles');


router.get("/getcontact",verifyToken , authorzeRoles("ADMIN"), getContact);
router.post('/contact',  verifyToken , authorzeRoles("ADMIN","USER"), postContact);

module.exports = router;