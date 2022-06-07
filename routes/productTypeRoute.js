const express = require("express");
const ProductTypeController = require("./../controllers/productTypeController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    ProductTypeController.getAllProductTypes
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    ProductTypeController.createProductType
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    ProductTypeController.deleteProductType
  )
  .patch(
    authController.restrictTo("user", "admin"),
    ProductTypeController.updateProductType
  )
  .get(ProductTypeController.getProductType);

module.exports = router;
