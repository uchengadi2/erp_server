const express = require("express");
const assetMovementController = require("./../controllers/assetMovementController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    assetMovementController.getAllAssetMovements
  )
  .post(
    authController.restrictTo("user"),
    assetMovementController.createAssetMovement
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    assetMovementController.deleteAssetMovement
  )
  .patch(
    authController.restrictTo("user", "admin"),
    assetMovementController.updateAssetMovement
  )
  .get(assetMovementController.getAssetMovement);

module.exports = router;
