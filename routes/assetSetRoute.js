const express = require("express");
const assetSetController = require("./../controllers/assetSetController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    assetSetController.getAllAssetSets
  )
  .post(
    authController.restrictTo("user", "admin"),
    assetSetController.createAssetSet
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    assetSetController.deleteAssetSet
  )
  .patch(
    authController.restrictTo("user", "admin"),
    assetSetController.updateAssetSet
  )
  .get(assetSetController.getAssetSet);

module.exports = router;
