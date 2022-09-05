const express = require("express");
const assetTypeController = require("./../controllers/assetTypeController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    assetTypeController.getAllAssetTypes
  )
  .post(
    authController.restrictTo("user", "admin"),
    assetTypeController.createAssetType
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    assetTypeController.deleteAssetType
  )
  .patch(
    authController.restrictTo("user", "admin"),
    assetTypeController.updateAssetType
  )
  .get(assetTypeController.getAssetType);

module.exports = router;
