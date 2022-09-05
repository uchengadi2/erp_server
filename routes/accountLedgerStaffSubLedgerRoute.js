const express = require("express");
const accountLedgerStaffSubLedgerController = require("./../controllers/accountLedgerStaffSubLedgerController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    accountLedgerStaffSubLedgerController.getAllAccountLedgerStaffSubLedgers
  )
  .post(
    authController.restrictTo("user"),
    accountLedgerStaffSubLedgerController.createAccountLedgerStaffSubLedger
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    accountLedgerStaffSubLedgerController.deleteAccountLedgerStaffSubLedger
  )
  .patch(
    authController.restrictTo("user", "admin"),
    accountLedgerStaffSubLedgerController.updateAccountLedgerStaffSubLedger
  )
  .get(accountLedgerStaffSubLedgerController.getAccountLedgerStaffSubLedger);

module.exports = router;
