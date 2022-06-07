const express = require("express");
const currentAssetMiscellaneousAccountController = require("./../controllers/currentAssetMiscellaneousAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    currentAssetMiscellaneousAccountController.getAllCurrentAssetMiscellaneousAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    currentAssetMiscellaneousAccountController.createCurrentAssetMiscellaneousAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    currentAssetMiscellaneousAccountController.deleteCurrentAssetMiscellaneousAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    currentAssetMiscellaneousAccountController.updateCurrentAssetMiscellaneousAccount
  )
  .get(
    currentAssetMiscellaneousAccountController.getCurrentAssetMiscellaneousAccount
  );

module.exports = router;
