const express = require("express");
const hrRecruitmentInitiationController = require("./../controllers/hrRecruitmentInitiationController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrRecruitmentInitiationController.getAllHrRecruitmentInitiations
  )
  .post(
    authController.restrictTo("user"),
    hrRecruitmentInitiationController.createHrRecruitmentInitiation
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrRecruitmentInitiationController.deleteHrRecruitmentInitiation
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrRecruitmentInitiationController.updateHrRecruitmentInitiation
  )
  .get(hrRecruitmentInitiationController.getHrRecruitmentInitiation);

module.exports = router;
