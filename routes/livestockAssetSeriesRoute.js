const express = require("express");
const LivestockAssetSeriesController = require("./../controllers/livestockAssetSeriesController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    LivestockAssetSeriesController.getAllLivestockAssetSeries
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    LivestockAssetSeriesController.createLivestockAssetSeries
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    LivestockAssetSeriesController.deleteLivestockAssetSeries
  )
  .patch(
    authController.restrictTo("user", "admin"),
    LivestockAssetSeriesController.updateLivestockAssetSeries
  )
  .get(LivestockAssetSeriesController.getLivestockAssetSeries);

module.exports = router;
