const express = require("express");
const InventorableLivestockAssetSeriesController = require("./../controllers/inventorableLivestockAssetSeriesController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    InventorableLivestockAssetSeriesController.getAllInventorableLivestockAssetSeries
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    InventorableLivestockAssetSeriesController.createInventorableLivestockAssetSeries
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    InventorableLivestockAssetSeriesController.deleteInventorableLivestockAssetSeries
  )
  .patch(
    authController.restrictTo("user", "admin"),
    InventorableLivestockAssetSeriesController.updateInventorableLivestockAssetSeries
  )
  .get(
    InventorableLivestockAssetSeriesController.getInventorableLivestockAssetSeries
  );

module.exports = router;
