const express = require("express");
const CrmSupplierController = require("./../controllers/crmSupplierController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    CrmSupplierController.getAllCrmSuppliers
  )
  .post(
    authController.restrictTo("user"),
    CrmSupplierController.createCrmSupplier
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    CrmSupplierController.deleteCrmSupplier
  )
  .patch(
    authController.restrictTo("user", "admin"),
    CrmSupplierController.updateCrmSupplier
  )
  .get(CrmSupplierController.getCrmSupplier);

module.exports = router;
