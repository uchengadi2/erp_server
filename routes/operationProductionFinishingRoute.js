const express = require("express");
const OperationProductionFinishingController = require("./../controllers/operationProductionFinishingController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    OperationProductionFinishingController.getAllOperationProductionFinishings
  )
  .post(
    authController.restrictTo("user", "admin"),
    OperationProductionFinishingController.createOperationProductionFinishing
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    OperationProductionFinishingController.deleteOperationProductionFinishing
  )
  .patch(
    authController.restrictTo("user", "admin"),
    OperationProductionFinishingController.updateOperationProductionFinishing
  )
  .get(OperationProductionFinishingController.getOperationProductionFinishing);

module.exports = router;
