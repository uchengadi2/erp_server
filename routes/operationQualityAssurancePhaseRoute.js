const express = require("express");
const operationQualityAssurancePhaseController = require("./../controllers/operationQualityAssurancePhaseController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    operationQualityAssurancePhaseController.getAllOperationQualityAssurancePhases
  )
  .post(
    authController.restrictTo("user"),
    operationQualityAssurancePhaseController.createOperationQualityAssurancePhase
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    operationQualityAssurancePhaseController.deleteOperationQualityAssurancePhase
  )
  .patch(
    authController.restrictTo("user", "admin"),
    operationQualityAssurancePhaseController.updateOperationQualityAssurancePhase
  )
  .get(
    operationQualityAssurancePhaseController.getOperationQualityAssurancePhase
  );

module.exports = router;
