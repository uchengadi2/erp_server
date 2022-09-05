const express = require("express");
const hrSelfServiceSalaryAdvanceController = require("./../controllers/hrSelfServiceSalaryAdvanceController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrSelfServiceSalaryAdvanceController.getAllHrSelfServiceSalaryAdvances
  )
  .post(
    authController.restrictTo("user"),
    hrSelfServiceSalaryAdvanceController.createHrSelfServiceSalaryAdvance
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrSelfServiceSalaryAdvanceController.deleteHrSelfServiceSalaryAdvance
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrSelfServiceSalaryAdvanceController.updateHrSelfServiceSalaryAdvance
  )
  .get(hrSelfServiceSalaryAdvanceController.getHrSelfServiceSalaryAdvance);

module.exports = router;
