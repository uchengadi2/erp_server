const express = require("express");
const charcoalAssetSeriesController = require("./../controllers/charcoalAssetSeriesController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    charcoalAssetSeriesController.getAllCharcoalAssetSeries
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    charcoalAssetSeriesController.createCharcoalAssetSeries
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    charcoalAssetSeriesController.deleteCharcoalAssetSeries
  )
  .patch(
    authController.restrictTo("user", "admin"),
    charcoalAssetSeriesController.updateCharcoalAssetSeries
  )
  .get(charcoalAssetSeriesController.getCharcoalAssetSeries);

module.exports = router;
