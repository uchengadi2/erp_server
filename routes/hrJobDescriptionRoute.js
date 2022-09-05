const express = require("express");
const hrJobDescriptionController = require("./../controllers/hrJobDescriptionController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrJobDescriptionController.getAllHrJobDescriptions
  )
  .post(
    authController.restrictTo("user"),
    hrJobDescriptionController.createHrJobDescription
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrJobDescriptionController.deleteHrJobDescription
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrJobDescriptionController.updateHrJobDescription
  )
  .get(hrJobDescriptionController.getHrJobDescription);

module.exports = router;
