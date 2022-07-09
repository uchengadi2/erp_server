const express = require("express");
const locationController = require("./../controllers/locationController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    locationController.getAllLocations
  )
  .post(
    authController.restrictTo("admin", "accountAdmin"),
    locationController.createLocation
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    locationController.deleteLocation
  )
  .patch(
    authController.restrictTo("user", "admin"),
    locationController.updateLocation
  )
  .get(locationController.getLocation);

module.exports = router;
