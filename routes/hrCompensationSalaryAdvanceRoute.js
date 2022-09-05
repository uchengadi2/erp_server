const express = require("express");
const hrCompensationSalaryAdvanceController = require("./../controllers/hrCompensationSalaryAdvanceController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrCompensationSalaryAdvanceController.getAllHrCompensationSalaryAdvances
  )
  .post(
    authController.restrictTo("user"),
    hrCompensationSalaryAdvanceController.createHrCompenaationSalaryAdvance
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrCompensationSalaryAdvanceController.deleteHrCompensationSalaryAdvance
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrCompensationSalaryAdvanceController.updateHrCompensationSalaryAdvance
  )
  .get(hrCompensationSalaryAdvanceController.getHrCompensationSalaryAdvance);

module.exports = router;
