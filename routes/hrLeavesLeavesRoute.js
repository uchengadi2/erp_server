const express = require("express");
const hrLeavesLeavesController = require("./../controllers/hrLeavesLeavesController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrLeavesLeavesController.getAllHrLeavesLeaves
  )
  .post(
    authController.restrictTo("user"),
    hrLeavesLeavesController.createHrLeavesLeave
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrLeavesLeavesController.deleteHrLeavesLeave
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrLeavesLeavesController.updateHrLeavesLeave
  )
  .get(hrLeavesLeavesController.getHrLeavesLeave);

module.exports = router;
