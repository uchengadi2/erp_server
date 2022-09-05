const express = require("express");
const hrAppraisalSeasonController = require("./../controllers/hrAppraisalSeasonController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrAppraisalSeasonController.getAllHrAppraisalSeasons
  )
  .post(
    authController.restrictTo("user"),
    hrAppraisalSeasonController.createHrAppraisalSeason
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrAppraisalSeasonController.deleteHrAppraisalSeason
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrAppraisalSeasonController.updateHrAppraisalSeason
  )
  .get(hrAppraisalSeasonController.getHrAppraisalSeason);

module.exports = router;
