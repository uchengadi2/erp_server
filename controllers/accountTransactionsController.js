const AccountTransactions = require("./../models/accountTransactionsModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

exports.setAccountTransactionsAndUserId = (req, res, next) => {
  //Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

//get all account transactions
exports.getAllAccountTransactions = factory.getAll(AccountTransactions);
//create a account transactions
exports.createAccountTransaction = factory.createOne(AccountTransactions);

//get a account transactions
exports.getAccountTransaction = factory.getOne(AccountTransactions);

//deleting a account transactions
exports.deleteAccountTransaction = factory.deleteOne(AccountTransactions);

//updating a account transactions
exports.updateAccountTransaction = factory.updateOne(AccountTransactions);
