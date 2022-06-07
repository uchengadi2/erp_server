const express = require("express");
const currentAssetDepreciationAccountController = require("./../controllers/currentAssetDepreciationAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    currentAssetDepreciationAccountController.getAllCurrentAssetDepreciationAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    currentAssetDepreciationAccountController.createCurrentAssetDepreciationAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    currentAssetDepreciationAccountController.deleteCurrentAssetDepreciationAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    currentAssetDepreciationAccountController.updateCurrentAssetDepreciationAccount
  )
  .get(
    currentAssetDepreciationAccountController.getCurrentAssetDepreciationAccount
  );

module.exports = router;
