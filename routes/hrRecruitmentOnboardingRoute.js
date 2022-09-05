const express = require("express");
const hrRecruitmentOnboardingController = require("./../controllers/hrRecruitmentOnboardingController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrRecruitmentOnboardingController.getAllHrRecruitmentOnboardings
  )
  .post(
    authController.restrictTo("user"),
    hrRecruitmentOnboardingController.createHrRecruitmentOnboarding
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrRecruitmentOnboardingController.deleteHrRecruitmentOnboarding
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrRecruitmentOnboardingController.updateHrRecruitmentOnboarding
  )
  .get(hrRecruitmentOnboardingController.getHrRecruitmentOnboarding);

module.exports = router;
