const express = require("express");
const hrRecruitmentSelectionController = require("./../controllers/hrRecruitmentSelectionController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrRecruitmentSelectionController.getAllHrRecruitmentSelections
  )
  .post(
    authController.restrictTo("user"),
    hrRecruitmentSelectionController.createHrRecruitmentSelection
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrRecruitmentSelectionController.deleteHrRecruitmentSelection
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrRecruitmentSelectionController.updateHrRecruitmentSelection
  )
  .get(hrRecruitmentSelectionController.getHrRecruitmentSelection);

module.exports = router;
