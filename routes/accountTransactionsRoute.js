const express = require("express");
const accountTransactionsController = require("./../controllers/accountTransactionsController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    accountTransactionsController.getAllAccountTransactions
  )
  .post(
    authController.restrictTo("user"),
    accountTransactionsController.setAccountTransactionsAndUserId,
    accountTransactionsController.createAccountTransaction
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    accountTransactionsController.deleteAccountTransaction
  )
  .patch(
    authController.restrictTo("user", "admin"),
    accountTransactionsController.updateAccountTransaction
  )
  .get(accountTransactionsController.getAccountTransaction);

module.exports = router;
