const express = require("express");
const assetInventoryMeasurementUnitController = require("./../controllers/assetInventoryMeasurementUnitController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    assetInventoryMeasurementUnitController.getAllAssetInventoryMeasurementUnits
  )
  .post(
    authController.restrictTo("user", "admin"),
    assetInventoryMeasurementUnitController.createAssetInventoryMeasurementUnit
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    assetInventoryMeasurementUnitController.deleteAssetInventoryMeasurementUnit
  )
  .patch(
    authController.restrictTo("user", "admin"),
    assetInventoryMeasurementUnitController.updateAssetInventoryMeasurementUnit
  )
  .get(
    assetInventoryMeasurementUnitController.getAssetInventoryMeasurementUnit
  );

module.exports = router;
