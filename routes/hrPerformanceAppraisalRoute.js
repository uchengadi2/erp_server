const express = require("express");
const hrPerformanceAppraisalController = require("./../controllers/hrPerformanceAppraisalController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrPerformanceAppraisalController.getAllHrPerformanceAppraisals
  )
  .post(
    authController.restrictTo("user"),
    hrPerformanceAppraisalController.createHrPerformanceAppraisal
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrPerformanceAppraisalController.deleteHrPerformanceAppraisal
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrPerformanceAppraisalController.updateHrPerformanceAppraisal
  )
  .get(hrPerformanceAppraisalController.getHrPerformanceAppraisal);

module.exports = router;
