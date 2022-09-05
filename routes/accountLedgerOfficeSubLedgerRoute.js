const express = require("express");
const accountLedgerOfficeSubLedgerController = require("./../controllers/accountLedgerOfficeSubLedgerController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    accountLedgerOfficeSubLedgerController.getAllAccountLedgerOfficeSubLedgers
  )
  .post(
    authController.restrictTo("user"),
    accountLedgerOfficeSubLedgerController.createAccountLedgerOfficeSubLedger
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    accountLedgerOfficeSubLedgerController.deleteAccountLedgerOfficeSubLedger
  )
  .patch(
    authController.restrictTo("user", "admin"),
    accountLedgerOfficeSubLedgerController.updateAccountLedgerOfficeSubLedger
  )
  .get(accountLedgerOfficeSubLedgerController.getAccountLedgerOfficeSubLedger);

module.exports = router;
