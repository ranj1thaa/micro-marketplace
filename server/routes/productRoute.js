const express = require('express');
const authCheck = require('../middleware/authCheck');
const { createProduct, getProduct, getProducts, updateProduct, deleteProduct, toggleFavorite 
} = require('../controllers/productController');

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/new', authCheck, createProduct);
router.put('/product/:id', authCheck, updateProduct); 
router.post('/:id/favorite', authCheck, toggleFavorite);

module.exports = router;
