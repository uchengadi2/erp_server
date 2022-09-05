const express = require("express");
const accountLedgerSupplierSubLedgerController = require("./../controllers/accountLedgerSupplierSubLedgerController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    accountLedgerSupplierSubLedgerController.getAllAccountSupplierLedgerSubLedgers
  )
  .post(
    authController.restrictTo("user"),
    accountLedgerSupplierSubLedgerController.createAccountLedgerSupplierSubLedger
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    accountLedgerSupplierSubLedgerController.deleteAccountLedgerSupplierSubLedger
  )
  .patch(
    authController.restrictTo("user", "admin"),
    accountLedgerSupplierSubLedgerController.updateAccountLedgerSupplierSubLedger
  )
  .get(
    accountLedgerSupplierSubLedgerController.getAccountLedgerSupplierSubLedger
  );

module.exports = router;
