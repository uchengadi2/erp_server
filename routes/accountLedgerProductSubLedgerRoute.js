const express = require("express");
const accountLedgerProductSubLedgerController = require("./../controllers/accountLedgerProductSubLedgerController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    accountLedgerProductSubLedgerController.getAllAccountLedgerProductSubLedgers
  )
  .post(
    authController.restrictTo("user"),
    accountLedgerProductSubLedgerController.createAccountLedgerProductSubLedger
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    accountLedgerProductSubLedgerController.deleteAccountLedgerProductSubLedger
  )
  .patch(
    authController.restrictTo("user", "admin"),
    accountLedgerProductSubLedgerController.updateAccountLedgerProductSubLedger
  )
  .get(
    accountLedgerProductSubLedgerController.getAccountLedgerProductSubLedger
  );

module.exports = router;
