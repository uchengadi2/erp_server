const express = require("express");
const CustomerSubGlAccountController = require("./../controllers/customerSubGlAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    CustomerSubGlAccountController.getAllCustomerSubGlAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    CustomerSubGlAccountController.createCustomerSubGlAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    CustomerSubGlAccountController.deleteCustomerSubGlAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    CustomerSubGlAccountController.updateCustomerSubGlAccount
  )
  .get(CustomerSubGlAccountController.getCustomerSubGlAccount);

module.exports = router;
