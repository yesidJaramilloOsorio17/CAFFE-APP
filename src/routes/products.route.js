const express = require('express');
//controllers
const productController = require('./../controllers/products.controller');

//middlewares
const validationMiddleware = require('./../middlewares/validations.middleware');

const router = express.Router();

router
  .route('/')
  .get(productController.findProducts)
  .post(validationMiddleware.validProduct, productController.createProduct);

router.get('/:id', productController.findProduct);

router.patch('/:id', productController.updatedProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;
