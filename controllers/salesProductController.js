const SalesProduct = require("./../models/salesProductModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all sales products
exports.getAllSalesProducts = factory.getAll(SalesProduct);

//create a sales product
exports.createSalesProduct = factory.createOne(SalesProduct);

//get a sales product
exports.getSalesProduct = factory.getOne(SalesProduct);

//deleting a sales product
exports.deleteSalesProduct = factory.deleteOne(SalesProduct);

//updating a sales product
exports.updateSalesProduct = factory.updateOne(SalesProduct);
