const express = require("express");
const hrSalaryGradeDeductableController = require("./../controllers/hrSalaryGradeDeductableController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrSalaryGradeDeductableController.getAllHrSalaryGradeDeductables
  )
  .post(
    authController.restrictTo("user"),
    hrSalaryGradeDeductableController.createHrSalaryGradeDeductable
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrSalaryGradeDeductableController.deleteHrSalaryGradeDeductable
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrSalaryGradeDeductableController.updateHrSalaryGradeDeductable
  )
  .get(hrSalaryGradeDeductableController.getHrSalaryGradeDeductable);

module.exports = router;
