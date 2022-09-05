const HrSelfServiceOvertime = require("./../models/hrSelfServiceOvertimeModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr selfservice overtimes
exports.getAllHrSelfServiceOvertimes = factory.getAll(HrSelfServiceOvertime);

//create a hr selfservice overtimes
exports.createHrSelfServiceOvertime = factory.createOne(HrSelfServiceOvertime);

//get a hr selfservice overtimes
exports.getHrSelfServiceOvertime = factory.getOne(HrSelfServiceOvertime);

//deleting a hr selfservice overtimes
exports.deleteHrSelfServiceOvertime = factory.deleteOne(HrSelfServiceOvertime);

//updating a hr selfservice overtimes
exports.updateHrSelfServiceOvertime = factory.updateOne(HrSelfServiceOvertime);
