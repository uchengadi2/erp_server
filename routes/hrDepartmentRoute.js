const express = require("express");
const hrDepartmentController = require("./../controllers/hrDepartmentController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrDepartmentController.getAllHrDepartments
  )
  .post(
    authController.restrictTo("user"),
    hrDepartmentController.createHrDepartment
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrDepartmentController.deleteHrDepartment
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrDepartmentController.updateHrDepartment
  )
  .get(hrDepartmentController.getHrDepartment);

module.exports = router;
