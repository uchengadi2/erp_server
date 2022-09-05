const express = require("express");
const accountLedgerAssetSubLedgerController = require("./../controllers/accountLedgerAssetSubLedgerController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    accountLedgerAssetSubLedgerController.getAllAccountAssetLedgerSubLedgers
  )
  .post(
    authController.restrictTo("user"),
    accountLedgerAssetSubLedgerController.createAccountAssetLedgerSubLedger
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    accountLedgerAssetSubLedgerController.deleteAccountAssetLedgerSubLedger
  )
  .patch(
    authController.restrictTo("user", "admin"),
    accountLedgerAssetSubLedgerController.updateAccountAssetLedgerSubLedger
  )
  .get(accountLedgerAssetSubLedgerController.getAccountAssetLedgerSubLedger);

module.exports = router;
