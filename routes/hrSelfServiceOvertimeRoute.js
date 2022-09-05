const express = require("express");
const hrSelfServiceOvertimeController = require("./../controllers/hrSelfServiceOvertimeController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrSelfServiceOvertimeController.getAllHrSelfServiceOvertimes
  )
  .post(
    authController.restrictTo("user"),
    hrSelfServiceOvertimeController.createHrSelfServiceOvertime
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrSelfServiceOvertimeController.deleteHrSelfServiceOvertime
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrSelfServiceOvertimeController.updateHrSelfServiceOvertime
  )
  .get(hrSelfServiceOvertimeController.getHrSelfServiceOvertime);

module.exports = router;
