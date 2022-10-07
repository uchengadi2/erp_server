const express = require("express");
const CrmCustomerController = require("./../controllers/crmCustomerController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    CrmCustomerController.getAllCrmCustomers
  )
  .post(
    authController.restrictTo("user","admin"),
    CrmCustomerController.createCrmCustomer
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    CrmCustomerController.deleteCrmCustomer
  )
  .patch(
    authController.restrictTo("user", "admin"),
    CrmCustomerController.updateCrmCustomer
  )
  .get(CrmCustomerController.getCrmCustomer);

module.exports = router;
