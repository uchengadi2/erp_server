const express = require("express");
const operationProcessingTypeController = require("./../controllers/operationProcessingTypeController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    operationProcessingTypeController.getAllOperationProcessingTypes
  )
  .post(
    authController.restrictTo("user"),
    operationProcessingTypeController.createOperationProcessingType
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    operationProcessingTypeController.deleteOperationProcessingType
  )
  .patch(
    authController.restrictTo("user", "admin"),
    operationProcessingTypeController.updateOperationProcessingType
  )
  .get(operationProcessingTypeController.getOperationProcessingType);

module.exports = router;
