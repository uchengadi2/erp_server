const team = require("../models/teamModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all teams
exports.getAllTeams = factory.getAll(team);

//create a team
exports.createTeam = factory.createOne(team);

//get a team
exports.getTeam = factory.getOne(team);

//deleting a team
exports.deleteTeam = factory.deleteOne(team);

//updating a team
exports.updateTeam = factory.updateOne(team);
