const express = require("express");
const SalesTransactionController = require("./../controllers/salesTransactionController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    SalesTransactionController.getAllSalesTransactions
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    SalesTransactionController.createSalesTransaction
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    SalesTransactionController.deleteSalesTransaction
  )
  .patch(
    authController.restrictTo("user", "admin"),
    SalesTransactionController.updateSalesTransaction
  )
  .get(SalesTransactionController.getSalesTransaction);

module.exports = router;
