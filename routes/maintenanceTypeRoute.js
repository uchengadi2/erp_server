const express = require("express");
const maintenanceTypeController = require("./../controllers/maintenanceTypeController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    maintenanceTypeController.getAllMaintenanceTypes
  )
  .post(
    authController.restrictTo("user", "admin"),
    maintenanceTypeController.createMaintenanceType
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    maintenanceTypeController.deleteMaintenanceType
  )
  .patch(
    authController.restrictTo("user", "admin"),
    maintenanceTypeController.updateMaintenanceType
  )
  .get(maintenanceTypeController.getMaintenanceType);

module.exports = router;
