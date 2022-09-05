const express = require("express");
const storeMaintenanceTypeController = require("./../controllers/storeMaintenanceTypeController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    storeMaintenanceTypeController.getAllStoreMaintenanceTypes
  )
  .post(
    authController.restrictTo("user", "admin"),
    storeMaintenanceTypeController.createStoreMaintenanceType
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    storeMaintenanceTypeController.deleteStoreMaintenanceType
  )
  .patch(
    authController.restrictTo("user", "admin"),
    storeMaintenanceTypeController.updateStoreMaintenanceType
  )
  .get(storeMaintenanceTypeController.getStoreMaintenanceType);

module.exports = router;
