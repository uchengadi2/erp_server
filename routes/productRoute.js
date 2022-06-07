const express = require("express");
const ProductController = require("./../controllers/productController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    ProductController.getAllProducts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    ProductController.createProduct
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    ProductController.deleteProduct
  )
  .patch(
    authController.restrictTo("user", "admin"),
    ProductController.updateProduct
  )
  .get(ProductController.getProduct);

module.exports = router;
