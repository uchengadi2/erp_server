
const express = require("express");
const operationFinishingTypeController = require("./../controllers/operationFinishingTypeController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    operationFinishingTypeController.getAllOperationFinishingTypes
  )
  .post(
    authController.restrictTo("user"),
    operationFinishingTypeController.createOperationFinishingType
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    operationFinishingTypeController.deleteOperationFinishingType
  )
  .patch(
    authController.restrictTo("user", "admin"),
    operationFinishingTypeController.updateOperationFinishingType
  )
  .get(operationFinishingTypeController.getOperationFinishingType);

module.exports = router;