const express = require("express");
const cashAccountController = require("./../controllers/cashAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    cashAccountController.getAllCashAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    cashAccountController.createCashAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    cashAccountController.deleteCashAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    cashAccountController.updateCashAccount
  )
  .get(cashAccountController.getCashAccount);

module.exports = router;
