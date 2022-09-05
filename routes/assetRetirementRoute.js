const express = require("express");
const assetRetirementController = require("./../controllers/assetRetirementController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    assetRetirementController.getAllAssetRetirements
  )
  .post(
    authController.restrictTo("user"),
    assetRetirementController.createAssetRetirement
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    assetRetirementController.deleteAssetRetirement
  )
  .patch(
    authController.restrictTo("user", "admin"),
    assetRetirementController.updateAssetRetirement
  )
  .get(assetRetirementController.getAssetRetirement);

module.exports = router;
