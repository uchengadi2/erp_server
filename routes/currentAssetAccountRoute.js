const express = require("express");
const currentAssetAccountController = require("./../controllers/currentAssetAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    currentAssetAccountController.getAllCurrentAssetAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    currentAssetAccountController.createCurrentAssetAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    currentAssetAccountController.deleteCurrentAssetAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    currentAssetAccountController.updateCurrentAssetAccount
  )
  .get(currentAssetAccountController.getCurrentAssetAccount);

module.exports = router;
