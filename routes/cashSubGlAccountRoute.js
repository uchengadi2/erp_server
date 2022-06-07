const express = require("express");
const cashSubGlAccountController = require("./../controllers/cashSubGlAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    cashSubGlAccountController.getAllCashSubGlAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    cashSubGlAccountController.createCashSubGlAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    cashSubGlAccountController.deleteCashSubGlAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    cashSubGlAccountController.updateCashSubGlAccount
  )
  .get(cashSubGlAccountController.getCashSubGlAccount);

module.exports = router;
