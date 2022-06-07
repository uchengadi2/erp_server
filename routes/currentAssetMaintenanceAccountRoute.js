const express = require("express");
const currentAssetMaintenanceAccountController = require("./../controllers/currentAssetMaintenanceAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    currentAssetMaintenanceAccountController.getAllCurrentAssetMaintenanceAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    currentAssetMaintenanceAccountController.createCurrentAssetMaintenanceAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    currentAssetMaintenanceAccountController.deleteCurrentAssetMaintenanceAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    currentAssetMaintenanceAccountController.updateCurrentAssetMaintenanceAccount
  )
  .get(
    currentAssetMaintenanceAccountController.getCurrentAssetMaintenanceAccount
  );

module.exports = router;
