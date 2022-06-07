const express = require("express");
const customerLoanAccountController = require("./../controllers/customerLoanAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    customerLoanAccountController.getAllCustomerLoanAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    customerLoanAccountController.createCustomerLoanAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    customerLoanAccountController.deleteCustomerLoanAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    customerLoanAccountController.updateCustomerLoanAccount
  )
  .get(customerLoanAccountController.getCustomerLoanAccount);

module.exports = router;
