const express = require("express");
const hrCompensationSalaryController = require("./../controllers/hrCompensationSalaryController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrCompensationSalaryController.getAllHrCompensationSalaries
  )
  .post(
    authController.restrictTo("user"),
    hrCompensationSalaryController.createHrCompenaationSalary
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrCompensationSalaryController.deleteHrCompensationSalary
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrCompensationSalaryController.updateHrCompensationSalary
  )
  .get(hrCompensationSalaryController.getHrCompensationSalary);

module.exports = router;
