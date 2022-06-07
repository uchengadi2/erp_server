const express = require("express");
const CustomerTransactionalAccountController = require("./../controllers/customerTransactionalAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    CustomerTransactionalAccountController.getAllCustomerTransactionalAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    CustomerTransactionalAccountController.createCustomerTransactionalAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    CustomerTransactionalAccountController.deleteCustomerTransactionalAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    CustomerTransactionalAccountController.updateCustomerTransactionalAccount
  )
  .get(CustomerTransactionalAccountController.getCustomerTransactionalAccount);

module.exports = router;
