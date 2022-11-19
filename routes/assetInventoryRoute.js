const express = require("express");
const assetInventoryController = require("./../controllers/assetInventoryController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    assetInventoryController.getAllAssetInventories
  )
  .post(
    authController.restrictTo("user", "admin"),
    assetInventoryController.createAssetInventory
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    assetInventoryController.deleteAssetInventory
  )
  .patch(
    authController.restrictTo("user", "admin"),
    assetInventoryController.updateAssetInventory
  )
  .get(assetInventoryController.getAssetInventory);

module.exports = router;
