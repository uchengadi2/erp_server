const express = require("express");
const operationProcessingPhaseEventController = require("./../controllers/operationProcessingPhaseEventController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    operationProcessingPhaseEventController.getAllOperationProcessingPhaseEvents
  )
  .post(
    authController.restrictTo("user"),
    operationProcessingPhaseEventController.createOperationProcessingPhaseEvent
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    operationProcessingPhaseEventController.deleteOperationProcessingPhaseEvent
  )
  .patch(
    authController.restrictTo("user", "admin"),
    operationProcessingPhaseEventController.updateOperationProcessingPhaseEvent
  )
  .get(
    operationProcessingPhaseEventController.getOperationProcessingPhaseEvent
  );

module.exports = router;
