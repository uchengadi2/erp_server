const express = require("express");
const operationMaintenanceTypeController = require("./../controllers/operationMaintenanceTypeController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    operationMaintenanceTypeController.getAllOperationMaintenanceTypes
  )
  .post(
    authController.restrictTo("user", "admin"),
    operationMaintenanceTypeController.createOperationMaintenanceType
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    operationMaintenanceTypeController.deleteOperationMaintenanceType
  )
  .patch(
    authController.restrictTo("user", "admin"),
    operationMaintenanceTypeController.updateOperationMaintenanceType
  )
  .get(operationMaintenanceTypeController.getOperationMaintenanceType);

module.exports = router;
