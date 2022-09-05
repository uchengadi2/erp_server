const express = require("express");
const hrPerformancePerformanceController = require("./../controllers/hrPerformancePerformanceController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrPerformancePerformanceController.getAllHrPerformancePerformances
  )
  .post(
    authController.restrictTo("user"),
    hrPerformancePerformanceController.createHrPerformancePerformance
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrPerformancePerformanceController.deleteHrPerformancePerformance
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrPerformancePerformanceController.updateHrPerformancePerformance
  )
  .get(hrPerformancePerformanceController.getHrPerformancePerformance);

module.exports = router;
