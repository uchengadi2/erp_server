const express = require("express");
const operationOperationController = require("./../controllers/operationOperationController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    operationOperationController.getAllOperationOperations
  )
  .post(
    authController.restrictTo("user"),
    operationOperationController.createOperationOperation
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    operationOperationController.deleteOperationOperation
  )
  .patch(
    authController.restrictTo("user", "admin"),
    operationOperationController.updateOperationOperation
  )
  .get(operationOperationController.getOperationOperation);

module.exports = router;
