const CashAccount = require("./../models/cashAccountModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all cash accounts
exports.getAllCashAccounts = factory.getAll(CashAccount);
//create a account transactions
exports.createCashAccount = factory.createOne(CashAccount);

//get a cash account
exports.getCashAccount = factory.getOne(CashAccount);

//deleting a cash account
exports.deleteCashAccount = factory.deleteOne(CashAccount);

//updating a cash account
exports.updateCashAccount = factory.updateOne(CashAccount);
