const express = require("express");
const accountLedgerStockSubLedgerController = require("./../controllers/accountLedgerStockSubLedgerController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    accountLedgerStockSubLedgerController.getAllAccountStockLedgerSubLedgers
  )
  .post(
    authController.restrictTo("user"),
    accountLedgerStockSubLedgerController.createAccountStockLedgerSubLedger
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    accountLedgerStockSubLedgerController.deleteAccountStockLedgerSubLedger
  )
  .patch(
    authController.restrictTo("user", "admin"),
    accountLedgerStockSubLedgerController.updateAccountStockLedgerSubLedger
  )
  .get(accountLedgerStockSubLedgerController.getAccountStockLedgerSubLedger);

module.exports = router;
