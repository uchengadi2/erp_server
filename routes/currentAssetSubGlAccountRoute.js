const express = require("express");
const currentAssetSubGlAccountController = require("./../controllers/currentAssetSubGlAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    currentAssetSubGlAccountController.getAllCurrentAssetSubGlAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    currentAssetSubGlAccountController.createCurrentAssetSubGlAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    currentAssetSubGlAccountController.deleteCurrentAssetSubGlAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    currentAssetSubGlAccountController.updateCurrentAssetSubGlAccount
  )
  .get(currentAssetSubGlAccountController.getCurrentAssetSubGlAccount);

module.exports = router;
