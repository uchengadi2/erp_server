const express = require("express");
const operationQualityAssurancePhaseEventController = require("./../controllers/operationQualityAssurancePhaseEventController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    operationQualityAssurancePhaseEventController.getAllOperationQualityAssurancePhaseEvents
  )
  .post(
    authController.restrictTo("user"),
    operationQualityAssurancePhaseEventController.createOperationQualityAssurancePhaseEvent
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    operationQualityAssurancePhaseEventController.deleteOperationQualityAssurancePhaseEvent
  )
  .patch(
    authController.restrictTo("user", "admin"),
    operationQualityAssurancePhaseEventController.updateOperationQualityAssurancePhaseEvent
  )
  .get(
    operationQualityAssurancePhaseEventController.getOperationQualityAssurancePhaseEvent
  );

module.exports = router;
