const express = require("express");
const SalesTeamTaskController = require("./../controllers/salesTeamTaskController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    SalesTeamTaskController.getAllSalesTeamTasks
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    SalesTeamTaskController.createSalesTeamTask
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    SalesTeamTaskController.deleteSalesTeamTask
  )
  .patch(
    authController.restrictTo("user", "admin"),
    SalesTeamTaskController.updateSalesTeamTask
  )
  .get(SalesTeamTaskController.getSalesTeamTask);

module.exports = router;
