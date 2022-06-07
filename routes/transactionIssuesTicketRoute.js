const express = require("express");
const TransactionIssuesTicketController = require("./../controllers/transactionIssuesTicketController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    TransactionIssuesTicketController.getAllTransactionIssuesTickets
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    TransactionIssuesTicketController.createTransactionIssuesTicket
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    TransactionIssuesTicketController.deleteTransactionIssuesTicket
  )
  .patch(
    authController.restrictTo("user", "admin"),
    TransactionIssuesTicketController.updateTransactionIssuesTicket
  )
  .get(TransactionIssuesTicketController.getTransactionIssuesTicket);

module.exports = router;
