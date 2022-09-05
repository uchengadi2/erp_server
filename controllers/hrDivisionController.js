const HrDivision = require("./../models/hrDivisionModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr divisions
exports.getAllHrDivisions = factory.getAll(HrDivision);

//create a hr division
exports.createHrDivision = factory.createOne(HrDivision);

//get a hr division
exports.getHrDivision = factory.getOne(HrDivision);

//deleting a hr division
exports.deleteHrDivision = factory.deleteOne(HrDivision);

//updating a hr division
exports.updateHrDivision = factory.updateOne(HrDivision);
