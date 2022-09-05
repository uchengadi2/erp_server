const express = require("express");
const hrOvertimeRateController = require("./../controllers/hrOvertimeRateController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrOvertimeRateController.getAllHrOvertimeRates
  )
  .post(
    authController.restrictTo("user"),
    hrOvertimeRateController.createHrOvertimeRate
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrOvertimeRateController.deleteHrOvertimeRate
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrOvertimeRateController.updateHrOvertimeRate
  )
  .get(hrOvertimeRateController.getHrOvertimeRate);

module.exports = router;
