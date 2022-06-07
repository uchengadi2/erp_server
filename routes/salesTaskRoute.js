const express = require("express");
const SalesTaskController = require("./../controllers/salesTaskController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    SalesTaskController.getAllSalesTasks
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    SalesTaskController.createSalesTask
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    SalesTaskController.deleteSalesTask
  )
  .patch(
    authController.restrictTo("user", "admin"),
    SalesTaskController.updateSalesTask
  )
  .get(SalesTaskController.getSalesTask);

module.exports = router;
