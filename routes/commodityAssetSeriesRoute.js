const express = require("express");
const commodityAssetSeriesController = require("./../controllers/commodityAssetSeriesController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    commodityAssetSeriesController.getAllCommodityAssetSeries
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    commodityAssetSeriesController.createCommodityAssetSeries
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    commodityAssetSeriesController.deleteCommodityAssetSeries
  )
  .patch(
    authController.restrictTo("user", "admin"),
    commodityAssetSeriesController.updateCommodityAssetSeries
  )
  .get(commodityAssetSeriesController.getCommodityAssetSeries);

module.exports = router;
