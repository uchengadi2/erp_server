const SalesAccount = require("./../models/salesAccountModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all sales accounts
exports.getAllSalesAccounts = factory.getAll(SalesAccount);

//create a sales account
exports.createSalesAccount = factory.createOne(SalesAccount);

//get a sales account
exports.getSalesAccount = factory.getOne(SalesAccount);

//deleting a sales account
exports.deleteSalesAccount = factory.deleteOne(SalesAccount);

//updating a sales account
exports.updateSalesAccount = factory.updateOne(SalesAccount);
