const express = require("express");
const assetDispositionTypeController = require("./../controllers/assetDispositionTypeController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    assetDispositionTypeController.getAllAssetDispositionTypes
  )
  .post(
    authController.restrictTo("user", "admin"),
    assetDispositionTypeController.createAssetDispositionType
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    assetDispositionTypeController.deleteAssetDispositionType
  )
  .patch(
    authController.restrictTo("user", "admin"),
    assetDispositionTypeController.updateAssetDispositionType
  )
  .get(assetDispositionTypeController.getAssetDispositionType);

module.exports = router;
