const express = require("express");
const assetSetBatchController = require("./../controllers/assetSetBatchController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    assetSetBatchController.getAllAssetSetBatches
  )
  .post(
    authController.restrictTo("user", "admin"),
    assetSetBatchController.createAssetSetBatch
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    assetSetBatchController.deleteAssetSetBatch
  )
  .patch(
    authController.restrictTo("user", "admin"),
    assetSetBatchController.updateAssetSetBatch
  )
  .get(assetSetBatchController.getAssetSetBatch);

module.exports = router;
