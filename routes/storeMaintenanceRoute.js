const express = require("express");
const storeMaintenanceController = require("./../controllers/storeMaintenanceController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    storeMaintenanceController.getAllStoreMaintenances
  )
  .post(
    authController.restrictTo("user", "admin"),
    storeMaintenanceController.createStoreMaintenance
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    storeMaintenanceController.deleteStoreMaintenance
  )
  .patch(
    authController.restrictTo("user", "admin"),
    storeMaintenanceController.updateStoreMaintenance
  )
  .get(storeMaintenanceController.getStoreMaintenance);

module.exports = router;
