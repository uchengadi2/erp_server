const salesTask = require("../models/salesTaskModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all sale tasks
exports.getAllSalesTasks = factory.getAll(salesTask);

//create a sale tasks
exports.createSalesTask = factory.createOne(salesTask);

//get a sale tasks
exports.getSalesTask = factory.getOne(salesTask);

//deleting a sale tasks
exports.deleteSalesTask = factory.deleteOne(salesTask);

//updating a sale tasks
exports.updateSalesTask = factory.updateOne(salesTask);
