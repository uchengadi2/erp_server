const express = require("express");
const hrCompensationOvertimeController = require("./../controllers/hrCompensationOvertimeController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrCompensationOvertimeController.getAllHrCompensationOvertimes
  )
  .post(
    authController.restrictTo("user"),
    hrCompensationOvertimeController.createHrCompenaationOvertime
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrCompensationOvertimeController.deleteHrCompensationOvertime
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrCompensationOvertimeController.updateHrCompensationOvertime
  )
  .get(hrCompensationOvertimeController.getHrCompensationOvertime);

module.exports = router;
