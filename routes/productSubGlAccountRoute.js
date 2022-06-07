const express = require("express");
const ProductSubGlAccountController = require("./../controllers/productSubGlAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    ProductSubGlAccountController.getAllProductSubGlAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    ProductSubGlAccountController.createProductSubGlAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    ProductSubGlAccountController.deleteProductSubGlAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    ProductSubGlAccountController.updateProductSubGlAccount
  )
  .get(ProductSubGlAccountController.getProductSubGlAccount);

module.exports = router;
