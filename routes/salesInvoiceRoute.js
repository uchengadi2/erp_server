const express = require("express");
const SalesInvoiceController = require("./../controllers/salesInvoiceController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    SalesInvoiceController.getAllSalesInvoices
  )
  .post(
    authController.restrictTo("user"),
    SalesInvoiceController.createSalesInvoice
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    SalesInvoiceController.deleteSalesInvoice
  )
  .patch(
    authController.restrictTo("user", "admin"),
    SalesInvoiceController.updateSalesInvoice
  )
  .get(SalesInvoiceController.getSalesInvoice);

module.exports = router;
