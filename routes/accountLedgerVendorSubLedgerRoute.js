const express = require("express");
const accountLedgerVendorSubLedgerController = require("./../controllers/accountLedgerVendorSubLedgerController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    accountLedgerVendorSubLedgerController.getAllAccountVendorLedgerSubLedgers
  )
  .post(
    authController.restrictTo("user"),
    accountLedgerVendorSubLedgerController.createAccountVendorLedgerSubLedger
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    accountLedgerVendorSubLedgerController.deleteAccountVendorLedgerSubLedger
  )
  .patch(
    authController.restrictTo("user", "admin"),
    accountLedgerVendorSubLedgerController.updateAccountVendorLedgerSubLedger
  )
  .get(accountLedgerVendorSubLedgerController.getAccountVendorLedgerSubLedger);

module.exports = router;
