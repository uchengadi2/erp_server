const express = require("express");
const SalesProductController = require("./../controllers/salesProductController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    SalesProductController.getAllSalesProducts
  )
  .post(
    authController.restrictTo("user"),
    SalesProductController.createSalesProduct
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    SalesProductController.deleteSalesProduct
  )
  .patch(
    authController.restrictTo("user", "admin"),
    SalesProductController.updateSalesProduct
  )
  .get(SalesProductController.getSalesProduct);

module.exports = router;
