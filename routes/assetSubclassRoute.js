const express = require("express");
const assetSubclassController = require("./../controllers/assetSubclassController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    assetSubclassController.getAllAssetSubclasses
  )
  .post(
    authController.restrictTo("admin", "user"),
    assetSubclassController.createAssetSubclass
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    assetSubclassController.deleteAssetSubclass
  )
  .patch(
    authController.restrictTo("user", "admin"),
    assetSubclassController.updateAssetSubclass
  )
  .get(assetSubclassController.getAssetSubclass);

module.exports = router;
