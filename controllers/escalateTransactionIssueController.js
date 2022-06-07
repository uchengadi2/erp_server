const escalateTransactionIssue = require("../models/escalateTransactionIssueModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all escalate transaction issues
exports.getAllEscalateTransactionIssues = factory.getAll(
  escalateTransactionIssue
);

//create a escalate transaction issue
exports.createEscalateTransactionIssue = factory.createOne(
  escalateTransactionIssue
);

//get a escalate transaction issue
exports.getEscalateTransactionIssue = factory.getOne(escalateTransactionIssue);

//deleting a escalate transaction issue
exports.deleteEscalateTransactionIssue = factory.deleteOne(
  escalateTransactionIssue
);

//updating a escalate transaction issue
exports.updateEscalateTransactionIssue = factory.updateOne(
  escalateTransactionIssue
);
