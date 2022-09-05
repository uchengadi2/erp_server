const express = require("express");
const SalesSalesController = require("./../controllers/salesSalesController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    SalesSalesController.getAllSalesSales
  )
  .post(
    authController.restrictTo("user"),
    SalesSalesController.createSalesSell
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    SalesSalesController.deleteSalesSell
  )
  .patch(
    authController.restrictTo("user", "admin"),
    SalesSalesController.updateSalesSell
  )
  .get(SalesSalesController.getSalesSell);

module.exports = router;
