const express = require("express");
const assetProcurementController = require("./../controllers/assetProcurementController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    assetProcurementController.getAllAssetProcurements
  )
  .post(
    authController.restrictTo("user"),
    assetProcurementController.createAssetProcurement
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    assetProcurementController.deleteAssetProcurement
  )
  .patch(
    authController.restrictTo("user", "admin"),
    assetProcurementController.updateAssetProcurement
  )
  .get(assetProcurementController.getAssetProcurement);

module.exports = router;
