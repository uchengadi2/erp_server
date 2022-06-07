const express = require("express");
const FixedAssetDepreciationAccountController = require("./../controllers/fixedAssetDepreciationAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    FixedAssetDepreciationAccountController.getAllFixedAssetDepreciationAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    FixedAssetDepreciationAccountController.createFixedAssetDepreciationAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    FixedAssetDepreciationAccountController.deleteFixedAssetDepreciationAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    FixedAssetDepreciationAccountController.updateFixedAssetDepreciationAccount
  )
  .get(
    FixedAssetDepreciationAccountController.getFixedAssetDepreciationAccount
  );

module.exports = router;
