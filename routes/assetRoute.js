const express = require("express");
const assetController = require("./../controllers/assetController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(authController.restrictTo("admin", "user"), assetController.getAllAssets)
  .post(authController.restrictTo("user"), assetController.createAsset);

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    assetController.deleteAsset
  )
  .patch(
    authController.restrictTo("user", "admin"),
    assetController.updateAsset
  )
  .get(assetController.getAsset);

module.exports = router;
