const express = require("express");
const assetRequisitionController = require("./../controllers/assetRequisitionController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    assetRequisitionController.getAllAssetRequisitions
  )
  .post(
    authController.restrictTo("user","admin"),
    assetRequisitionController.createAssetRequisition
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    assetRequisitionController.deleteAssetRequisition
  )
  .patch(
    authController.restrictTo("user", "admin"),
    assetRequisitionController.updateAssetRequisition
  )
  .get(assetRequisitionController.getAssetRequisition);

module.exports = router;
