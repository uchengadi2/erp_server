const express = require("express");
const hrSelfServiceLeaveController = require("./../controllers/hrSelfServiceLeaveController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrSelfServiceLeaveController.getAllHrSelfServiceLeaves
  )
  .post(
    authController.restrictTo("user"),
    hrSelfServiceLeaveController.createHrSelfServiceLeave
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrSelfServiceLeaveController.deleteHrSelfServiceLeave
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrSelfServiceLeaveController.updateHrSelfServiceLeave
  )
  .get(hrSelfServiceLeaveController.getHrSelfServiceLeave);

module.exports = router;
