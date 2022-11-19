const express = require("express");
const assetInventoryTypeController = require("./../controllers/assetInventoryTypeController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    assetInventoryTypeController.getAllAssetInventoryTypes
  )
  .post(
    authController.restrictTo("admin"),
    assetInventoryTypeController.createAssetInventoryType
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    assetInventoryTypeController.deleteAssetInventoryType
  )
  .patch(
    authController.restrictTo("user", "admin"),
    assetInventoryTypeController.updateAssetInventoryType
  )
  .get(assetInventoryTypeController.getAssetInventoryType);

module.exports = router;
