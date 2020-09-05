const express = require('express');
const userController = require ('../controllers/UserController.js');
const productController = require ('../controllers/ProductController.js');
const router = express.Router();

router.post('/users', userController.Insert);
router.post('/products', productController.Insert);
 
module.exports = router;
