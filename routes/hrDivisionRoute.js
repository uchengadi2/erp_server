const express = require("express");
const hrDivisionController = require("./../controllers/hrDivisionController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrDivisionController.getAllHrDivisions
  )
  .post(
    authController.restrictTo("user"),
    hrDivisionController.createHrDivision
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrDivisionController.deleteHrDivision
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrDivisionController.updateHrDivision
  )
  .get(hrDivisionController.getHrDivision);

module.exports = router;
