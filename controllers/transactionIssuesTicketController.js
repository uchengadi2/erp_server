const transactionIssuesTicket = require("../models/transactionIssuesTicketModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all transaction issues tickets
exports.getAllTransactionIssuesTickets = factory.getAll(
  transactionIssuesTicket
);

//create a transaction issues ticket
exports.createTransactionIssuesTicket = factory.createOne(
  transactionIssuesTicket
);

//get a transaction issues ticket
exports.getTransactionIssuesTicket = factory.getOne(transactionIssuesTicket);

//deleting a transaction issues ticket
exports.deleteTransactionIssuesTicket = factory.deleteOne(
  transactionIssuesTicket
);

//updating a transaction issues ticket
exports.updateTransactionIssuesTicket = factory.updateOne(
  transactionIssuesTicket
);
