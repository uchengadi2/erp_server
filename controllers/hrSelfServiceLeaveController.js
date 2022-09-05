const HrSelfServiceLeave = require("./../models/hrSelfServiceLeaveModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr selfservice leaves
exports.getAllHrSelfServiceLeaves = factory.getAll(HrSelfServiceLeave);

//create a hr selfservice leaves
exports.createHrSelfServiceLeave = factory.createOne(HrSelfServiceLeave);

//get a hr selfservice leaves
exports.getHrSelfServiceLeave = factory.getOne(HrSelfServiceLeave);

//deleting a hr selfservice leaves
exports.deleteHrSelfServiceLeave = factory.deleteOne(HrSelfServiceLeave);

//updating a hr selfservice leaves
exports.updateHrSelfServiceLeave = factory.updateOne(HrSelfServiceLeave);
