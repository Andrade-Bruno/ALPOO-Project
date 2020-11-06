const express = require('express');
const userController = require ('../controllers/UserController.js');
const productController = require ('../controllers/ProductController.js');
const router = express.Router();

router.post('/users', userController.Insert);
router.get('/users', userController.SelectAll);
router.get('/users/:id', userController.SelectDetail);
router.put('/users/:id', userController.Update);
router.delete('/users/:id', userController.Delete);

router.post('/products', productController.Insert);
router.get('/products', productController.SelectAll);
router.get('/products/:id', productController.SelectDetail);
router.put('/products/:id', productController.Update);
router.delete('/products/:id', productController.Delete);
 
module.exports = router;