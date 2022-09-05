const express = require("express");
const accountLedgerCustomerSubLedgerController = require("./../controllers/accountLedgerCustomerSubLedgerController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    accountLedgerCustomerSubLedgerController.getAllAccountLedgerCustomerSubLedgers
  )
  .post(
    authController.restrictTo("user"),
    accountLedgerCustomerSubLedgerController.createAccountLedgerCustomerSubLedger
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    accountLedgerCustomerSubLedgerController.deleteAccountLedgerCustomerSubLedger
  )
  .patch(
    authController.restrictTo("user", "admin"),
    accountLedgerCustomerSubLedgerController.updateAccountLedgerCustomerSubLedger
  )
  .get(
    accountLedgerCustomerSubLedgerController.getAccountLedgerCustomerSubLedger
  );

module.exports = router;
