const express = require("express");
const operationProcessingPhaseController = require("./../controllers/operationProcessingPhaseController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    operationProcessingPhaseController.getAllOperationProcessingPhases
  )
  .post(
    authController.restrictTo("user"),
    operationProcessingPhaseController.createOperationProcessingPhase
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    operationProcessingPhaseController.deleteOperationProcessingPhase
  )
  .patch(
    authController.restrictTo("user", "admin"),
    operationProcessingPhaseController.updateOperationProcessingPhase
  )
  .get(operationProcessingPhaseController.getOperationProcessingPhase);

module.exports = router;
