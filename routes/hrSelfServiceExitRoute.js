const express = require("express");
const hrSelfServiceExitController = require("./../controllers/hrSelfServiceExitController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrSelfServiceExitController.getAllHrSelfServiceExits
  )
  .post(
    authController.restrictTo("user"),
    hrSelfServiceExitController.createHrSelfServiceExit
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrSelfServiceExitController.deleteHrSelfServiceExit
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrSelfServiceExitController.updateHrSelfServiceExit
  )
  .get(hrSelfServiceExitController.getHrSelfServiceExit);

module.exports = router;
