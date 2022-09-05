const express = require("express");
const assetMaintenanceController = require("./../controllers/assetMaintenanceController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    assetMaintenanceController.getAllAssetMaintenances
  )
  .post(
    authController.restrictTo("user"),
    assetMaintenanceController.createAssetMaintenance
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    assetMaintenanceController.deleteAssetMaintenance
  )
  .patch(
    authController.restrictTo("user", "admin"),
    assetMaintenanceController.updateAssetMaintenance
  )
  .get(assetMaintenanceController.getAssetMaintenance);

module.exports = router;
