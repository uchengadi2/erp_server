const express = require("express");
const hrRecruitmentPlacementController = require("./../controllers/hrRecruitmentPlacementController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrRecruitmentPlacementController.getAllHrRecruitmentPlacements
  )
  .post(
    authController.restrictTo("user"),
    hrRecruitmentPlacementController.createHrRecruitmentPlacement
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrRecruitmentPlacementController.deleteHrRecruitmentPlacement
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrRecruitmentPlacementController.updateHrRecruitmentPlacement
  )
  .get(hrRecruitmentPlacementController.getHrRecruitmentPlacement);

module.exports = router;
