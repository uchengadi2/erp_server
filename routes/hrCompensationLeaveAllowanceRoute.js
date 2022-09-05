const express = require("express");
const hrCompensationLeaveAllowanceController = require("./../controllers/hrCompensationLeaveAllowanceController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrCompensationLeaveAllowanceController.getAllHrCompensationLeaveAllowances
  )
  .post(
    authController.restrictTo("user"),
    hrCompensationLeaveAllowanceController.createHrCompenaationLeaveAllowance
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrCompensationLeaveAllowanceController.deleteHrCompensationLeaveAllowance
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrCompensationLeaveAllowanceController.updateHrCompensationLeaveAllowance
  )
  .get(hrCompensationLeaveAllowanceController.getHrCompensationLeaveAllowance);

module.exports = router;
