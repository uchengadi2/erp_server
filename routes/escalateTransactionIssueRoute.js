const express = require("express");
const EscalateTransactionIssueController = require("./../controllers/escalateTransactionIssueController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    EscalateTransactionIssueController.getAllEscalateTransactionIssues
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    EscalateTransactionIssueController.createEscalateTransactionIssue
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    EscalateTransactionIssueController.deleteEscalateTransactionIssue
  )
  .patch(
    authController.restrictTo("user", "admin"),
    EscalateTransactionIssueController.updateEscalateTransactionIssue
  )
  .get(EscalateTransactionIssueController.getEscalateTransactionIssue);

module.exports = router;
