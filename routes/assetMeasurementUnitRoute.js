const express = require("express");
const assetMeasurementUnitController = require("./../controllers/assetMeasurementUnitController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    assetMeasurementUnitController.getAllAssetMeasurementUnits
  )
  .post(
    authController.restrictTo("user", "admin"),
    assetMeasurementUnitController.createAssetMeasurementUnit
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    assetMeasurementUnitController.deleteAssetMeasurementUnit
  )
  .patch(
    authController.restrictTo("user", "admin"),
    assetMeasurementUnitController.updateAssetMeasurementUnit
  )
  .get(assetMeasurementUnitController.getAssetMeasurementUnit);

module.exports = router;
