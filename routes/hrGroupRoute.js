const express = require("express");
const hrGroupController = require("./../controllers/hrGroupController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrGroupController.getAllHrGroups
  )
  .post(authController.restrictTo("user"), hrGroupController.createHrGroup);

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrGroupController.deleteHrGroup
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrGroupController.updateHrGroup
  )
  .get(hrGroupController.getHrGroup);

module.exports = router;
