const express = require("express");
const officeOperationController = require("./../controllers/officeOperationsController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    officeOperationController.getAllOfficeOperations
  )
  .post(
    authController.restrictTo("admin", "accountAdmin"),
    officeOperationController.createOfficeOperation
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    officeOperationController.deleteOfficeOperation
  )
  .patch(
    authController.restrictTo("user", "admin"),
    officeOperationController.updateOfficeOperation
  )
  .get(officeOperationController.getOfficeOperation);

module.exports = router;
