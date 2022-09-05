const SalesTeam = require("./../models/salesTeamModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all sales teams
exports.getAllSalesTeams = factory.getAll(SalesTeam);

//create a sales team
exports.createSalesTeam = factory.createOne(SalesTeam);

//get a sales team
exports.getSalesTeam = factory.getOne(SalesTeam);

//deleting a sales team
exports.deleteSalesTeam = factory.deleteOne(SalesTeam);

//updating a sales team
exports.updateSalesTeam = factory.updateOne(SalesTeam);
