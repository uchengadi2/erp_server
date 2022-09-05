const express = require("express");
const hrSalaryGradeController = require("./../controllers/hrSalaryGradeController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrSalaryGradeController.getAllHrSalaryGrades
  )
  .post(
    authController.restrictTo("user"),
    hrSalaryGradeController.createHrSalaryGrade
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrSalaryGradeController.deleteHrSalaryGrade
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrSalaryGradeController.updateHrSalaryGrade
  )
  .get(hrSalaryGradeController.getHrSalaryGrade);

module.exports = router;
