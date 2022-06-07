const express = require("express");
const FixedAssetMaintenanceAccountController = require("./../controllers/fixedAssetMaintenanceAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    FixedAssetMaintenanceAccountController.getAllFixedAssetMaintenanceAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    FixedAssetMaintenanceAccountController.createFixedAssetMaintenanceAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    FixedAssetMaintenanceAccountController.deleteFixedAssetMaintenanceAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    FixedAssetMaintenanceAccountController.updateFixedAssetMaintenanceAccount
  )
  .get(FixedAssetMaintenanceAccountController.getFixedAssetMaintenanceAccount);

module.exports = router;
