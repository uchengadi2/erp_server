const CashSubGlAccount = require("./../models/cashSubGlAccountModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all Cash SubGl Accounts
exports.getAllCashSubGlAccounts = factory.getAll(CashSubGlAccount);
//create a Cash SubGl Accounts
exports.createCashSubGlAccount = factory.createOne(CashSubGlAccount);

//get a Cash SubGl Accounts
exports.getCashSubGlAccount = factory.getOne(CashSubGlAccount);

//deleting a Cash SubGl Accounts
exports.deleteCashSubGlAccount = factory.deleteOne(CashSubGlAccount);

//updating a Cash SubGl Accounts
exports.updateCashSubGlAccount = factory.updateOne(CashSubGlAccount);
