const express = require("express");
const operationProcessingController = require("./../controllers/operationProcessingController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    operationProcessingController.getAllOperationProcessings
  )
  .post(
    authController.restrictTo("user"),
    operationProcessingController.createOperationProcessing
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    operationProcessingController.deleteOperationProcessing
  )
  .patch(
    authController.restrictTo("user", "admin"),
    operationProcessingController.updateOperationProcessing
  )
  .get(operationProcessingController.getOperationProcessing);

module.exports = router;
