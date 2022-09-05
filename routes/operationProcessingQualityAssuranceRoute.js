const express = require("express");
const operationProcessingQualityAssuranceController = require("./../controllers/operationProcessingQualityAssuranceController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    operationProcessingQualityAssuranceController.getAllOperationProcessingQualityAssurances
  )
  .post(
    authController.restrictTo("user"),
    operationProcessingQualityAssuranceController.createOperationProcessingQualityAssurance
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    operationProcessingQualityAssuranceController.deleteOperationProcessingQualityAssurance
  )
  .patch(
    authController.restrictTo("user", "admin"),
    operationProcessingQualityAssuranceController.updateOperationProcessingQualityAssurance
  )
  .get(
    operationProcessingQualityAssuranceController.getOperationProcessingQualityAssurance
  );

module.exports = router;
