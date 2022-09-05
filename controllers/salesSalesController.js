const SalesSales = require("./../models/salesSalesModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all sales
exports.getAllSalesSales = factory.getAll(SalesSales);

//create a sales
exports.createSalesSell = factory.createOne(SalesSales);

//get a sales
exports.getSalesSell = factory.getOne(SalesSales);

//deleting a sales
exports.deleteSalesSell = factory.deleteOne(SalesSales);

//updating a sales
exports.updateSalesSell = factory.updateOne(SalesSales);
