const express = require("express");
const hrOrganizationLevelController = require("./../controllers/hrOrganizationLevelController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrOrganizationLevelController.getAllHrOrganizationLevels
  )
  .post(
    authController.restrictTo("user"),
    hrOrganizationLevelController.createHrOrganizationLevel
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrOrganizationLevelController.deleteHrOrganizationLevel
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrOrganizationLevelController.updateHrOrganizationlevel
  )
  .get(hrOrganizationLevelController.getHrOrganizationLevel);

module.exports = router;
