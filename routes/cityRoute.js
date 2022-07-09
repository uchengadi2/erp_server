const express = require("express");
const cityController = require("./../controllers/cityController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(authController.restrictTo("admin", "user"), cityController.getAllCities)
  .post(
    authController.restrictTo("admin", "accountAdmin"),
    //cashAccountController.setAccountTransactionsAndUserId,
    cityController.createCity
  );

router
  .route("/:id")
  .delete(authController.restrictTo("user", "admin"), cityController.deleteCity)
  .patch(authController.restrictTo("user", "admin"), cityController.updateCity)
  .get(cityController.getCity);

module.exports = router;
