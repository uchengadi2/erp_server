const express = require("express");
const assetTransferController = require("./../controllers/assetTransferController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    assetTransferController.getAllAssetTransfers
  )
  .post(
    authController.restrictTo("user"),
    assetTransferController.createAssetTransfer
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    assetTransferController.deleteAssetTransfer
  )
  .patch(
    authController.restrictTo("user", "admin"),
    assetTransferController.updateAssetTransfer
  )
  .get(assetTransferController.getAssetTransfer);

module.exports = router;
