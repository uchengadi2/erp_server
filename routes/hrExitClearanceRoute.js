const express = require("express");
const hrExitClearanceController = require("./../controllers/hrExitClearanceController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrExitClearanceController.getAllHrExitClearances
  )
  .post(
    authController.restrictTo("user"),
    hrExitClearanceController.createHrExitClearance
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrExitClearanceController.deleteHrExitClearance
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrExitClearanceController.updateHrExitClearance
  )
  .get(hrExitClearanceController.getHrExitClearance);

module.exports = router;
