const express = require("express");
const operationQualityAssuranceTypeController = require("./../controllers/operationQualityAssuranceTypeController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    operationQualityAssuranceTypeController.getAllOperationQualityAssuranceTypes
  )
  .post(
    authController.restrictTo("user", "admin"),
    operationQualityAssuranceTypeController.createOperationQualityAssuranceType
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    operationQualityAssuranceTypeController.deleteOperationQualityAssuranceType
  )
  .patch(
    authController.restrictTo("user", "admin"),
    operationQualityAssuranceTypeController.updateOperationQualityAssuranceType
  )
  .get(
    operationQualityAssuranceTypeController.getOperationQualityAssuranceType
  );

module.exports = router;
