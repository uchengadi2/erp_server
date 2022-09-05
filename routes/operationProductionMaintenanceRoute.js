const express = require("express");
const operationProductionMaintenanceController = require("./../controllers/operationProductionMaintenanceController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    operationProductionMaintenanceController.getAllOperationProductionMaintenances
  )
  .post(
    authController.restrictTo("user"),
    operationProductionMaintenanceController.createOperationProductionMaintenance
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    operationProductionMaintenanceController.deleteOperationProductionMaintenance
  )
  .patch(
    authController.restrictTo("user", "admin"),
    operationProductionMaintenanceController.updateOperationProductionMaintenance
  )
  .get(
    operationProductionMaintenanceController.getOperationProductionMaintenance
  );

module.exports = router;
