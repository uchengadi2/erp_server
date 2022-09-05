const express = require("express");
const operationProductionQualityAssuranceController = require("./../controllers/operationProductionQualityAssuranceController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    operationProductionQualityAssuranceController.getAllOperationProductionQualityAssurances
  )
  .post(
    authController.restrictTo("user"),
    operationProductionQualityAssuranceController.createOperationProductionQualityAssurance
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    operationProductionQualityAssuranceController.deleteOperationProductionQualityAssurance
  )
  .patch(
    authController.restrictTo("user", "admin"),
    operationProductionQualityAssuranceController.updateOperationProductionQualityAssurance
  )
  .get(
    operationProductionQualityAssuranceController.getOperationProductionQualityAssurance
  );

module.exports = router;
