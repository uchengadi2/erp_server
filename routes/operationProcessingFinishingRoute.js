const express = require("express");
const OperationProcessingFinishingController = require("./../controllers/operationProcessingFinishingController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    OperationProcessingFinishingController.getAllOperationProcessingFinishings
  )
  .post(
    authController.restrictTo("user"),
    OperationProcessingFinishingController.createOperationProcessingFinishing
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    OperationProcessingFinishingController.deleteOperationProcessingFinishing
  )
  .patch(
    authController.restrictTo("user", "admin"),
    OperationProcessingFinishingController.updateOperationProcessingFinishing
  )
  .get(OperationProcessingFinishingController.getOperationProcessingFinishing);

module.exports = router;
