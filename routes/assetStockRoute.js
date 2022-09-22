const express = require("express");
const assetStockController = require("./../controllers/assetStockController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    assetStockController.getAllAssetStocks
  )
  .post(
    authController.restrictTo("user", "admin"),
    assetStockController.createAssetStock
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    assetStockController.deleteAssetStock
  )
  .patch(
    authController.restrictTo("user", "admin"),
    assetStockController.updateAssetStock
  )
  .get(assetStockController.getAssetStock);

module.exports = router;
