const express = require("express");
const SalesAccountController = require("./../controllers/salesAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    SalesAccountController.getAllSalesAccounts
  )
  .post(
    authController.restrictTo("user"),
    SalesAccountController.createSalesAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    SalesAccountController.deleteSalesAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    SalesAccountController.updateSalesAccount
  )
  .get(SalesAccountController.getSalesAccount);

module.exports = router;
