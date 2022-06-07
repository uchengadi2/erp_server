const salesTeamTask = require("../models/salesTeamTaskModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all sale team tasks
exports.getAllSalesTeamTasks = factory.getAll(salesTeamTask);

//create a sale team tasks
exports.createSalesTeamTask = factory.createOne(salesTeamTask);

//get a sale team asks
exports.getSalesTeamTask = factory.getOne(salesTeamTask);

//deleting a sale team tasks
exports.deleteSalesTeamTask = factory.deleteOne(salesTeamTask);

//updating a sale team tasks
exports.updateSalesTeamTask = factory.updateOne(salesTeamTask);
