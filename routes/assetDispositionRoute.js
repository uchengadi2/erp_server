const express = require("express");
const assetDispositionController = require("./../controllers/assetDispositionController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    assetDispositionController.getAllAssetDispositions
  )
  .post(
    authController.restrictTo("user","admin"),
    assetDispositionController.createAssetDisposition
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    assetDispositionController.deleteAssetDisposition
  )
  .patch(
    authController.restrictTo("user", "admin"),
    assetDispositionController.updateAssetDisposition
  )
  .get(assetDispositionController.getAssetDisposition);

module.exports = router;
