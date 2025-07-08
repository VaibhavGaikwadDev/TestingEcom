// const express = require('express');
// const { createProduct, fetchAllProducts, fetchProductById, updateProduct } = require('../controller/Product');
// const { Product } = require('../model/Product');

// const router = express.Router();
// //  /products is already added in base path
// router.post('/', createProduct)
//       .get('/', fetchAllProducts)
//       .get('/:id', fetchProductById)
//       .patch('/:id', updateProduct)
//       // .get('/update/test',async(req,res)=>{
//       //       // For adding discountPrice to existing data : delete this code after use
//       //      const products = await Product.find({});
//       //      for(let product of products){
//       //       product.discountPrice = Math.round(product.price*(1-product.discountPercentage/100))
//       //       await product.save()
//       //       console.log(product.title+ ' updated')
//       //      }
//       //      res.send('ok')
//       // })

      

// exports.router = router;

// ---------------------------------------------------------- 2nd version
const express = require('express');
const {
  createProduct,
  fetchAllProducts,
  fetchProductById,
  updateProduct,
} = require('../controller/Product');

const router = express.Router();

// Routes for product operations
router
  .post('/', createProduct) // Create a new product
  .get('/', fetchAllProducts) // Fetch all products
  .get('/:id', fetchProductById) // Fetch product by ID
  .patch('/:id', updateProduct); // Update product by ID

// Middleware for error handling (can be moved to a separate file)
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

module.exports = { router };
