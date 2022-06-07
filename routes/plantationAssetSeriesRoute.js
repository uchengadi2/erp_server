const express = require("express");
const PlantationAssetSeriesController = require("./../controllers/plantationAssetSeriesController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    PlantationAssetSeriesController.getAllPlantationAssetSeries
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    PlantationAssetSeriesController.createPlantationAssetSeries
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    PlantationAssetSeriesController.deletePlantationAssetSeries
  )
  .patch(
    authController.restrictTo("user", "admin"),
    PlantationAssetSeriesController.updatePlantationAssetSeries
  )
  .get(PlantationAssetSeriesController.getPlantationAssetSeries);

module.exports = router;
