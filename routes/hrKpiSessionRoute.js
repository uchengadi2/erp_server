const express = require("express");
const hrKpiSessionController = require("./../controllers/hrKpiSessionController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrKpiSessionController.getAllHrKpiSessions
  )
  .post(
    authController.restrictTo("user"),
    hrKpiSessionController.createHrKpiSession
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrKpiSessionController.deleteHrKpiSession
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrKpiSessionController.updateHrKpiSession
  )
  .get(hrKpiSessionController.getHrKpiSession);

module.exports = router;
