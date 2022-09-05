const express = require("express");
const hrExitExitController = require("./../controllers/hrExitExitController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrExitExitController.getAllHrExitExits
  )
  .post(
    authController.restrictTo("user"),
    hrExitExitController.createHrExitExit
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrExitExitController.deleteHrExitExit
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrExitExitController.updateHrExitExit
  )
  .get(hrExitExitController.getHrExitExit);

module.exports = router;
