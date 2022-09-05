const express = require("express");
const operationProcessingMaintenanceController = require("./../controllers/operationProcessingMaintenanceController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    operationProcessingMaintenanceController.getAllOperationProcessingMaintenances
  )
  .post(
    authController.restrictTo("user"),
    operationProcessingMaintenanceController.createOperationProcessingMaintenance
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    operationProcessingMaintenanceController.deleteOperationProcessingMaintenance
  )
  .patch(
    authController.restrictTo("user", "admin"),
    operationProcessingMaintenanceController.updateOperationProcessingMaintenance
  )
  .get(
    operationProcessingMaintenanceController.getOperationProcessingMaintenance
  );

module.exports = router;
