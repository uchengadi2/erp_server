const salesTransaction = require("../models/salesTransactionModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all sale transactions
exports.getAllSalesTransactions = factory.getAll(salesTransaction);

//create a sale transaction
exports.createSalesTransaction = factory.createOne(salesTransaction);

//get a sale transaction
exports.getSalesTransaction = factory.getOne(salesTransaction);

//deleting a sale transaction
exports.deleteSalesTransaction = factory.deleteOne(salesTransaction);

//updating a sale transaction
exports.updateSalesTransaction = factory.updateOne(salesTransaction);
