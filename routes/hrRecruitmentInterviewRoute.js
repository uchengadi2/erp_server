const express = require("express");
const hrRecruitmentInterviewController = require("./../controllers/hrRecruitmentInterviewController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrRecruitmentInterviewController.getAllHrRecruitmentInterviews
  )
  .post(
    authController.restrictTo("user"),
    hrRecruitmentInterviewController.createHrRecruitmentInterview
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrRecruitmentInterviewController.deleteHrRecruitmentInterview
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrRecruitmentInterviewController.updateHrRecruitmentInterview
  )
  .get(hrRecruitmentInterviewController.getHrRecruitmentInterview);

module.exports = router;
