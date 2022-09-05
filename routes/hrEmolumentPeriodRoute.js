const express = require("express");
const hrEmolumentPeriodController = require("./../controllers/hrEmolumentPeriodController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrEmolumentPeriodController.getAllHrEmolumentPeriods
  )
  .post(
    authController.restrictTo("user"),
    hrEmolumentPeriodController.createHrEmolumentPeriod
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrEmolumentPeriodController.deleteHrEmolumentPeriod
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrEmolumentPeriodController.updateHrEmolumentPeriod
  )
  .get(hrEmolumentPeriodController.getHrEmolumentPeriod);

module.exports = router;
