const HrOvertimeRate = require("./../models/hrOvertimeRateModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr overtime rate
exports.getAllHrOvertimeRates = factory.getAll(HrOvertimeRate);

//create a hr overtime rate
exports.createHrOvertimeRate = factory.createOne(HrOvertimeRate);

//get a hr overtime rate
exports.getHrOvertimeRate = factory.getOne(HrOvertimeRate);

//deleting a hr overtime rate
exports.deleteHrOvertimeRate = factory.deleteOne(HrOvertimeRate);

//updating a hr overtime rate
exports.updateHrOvertimeRate = factory.updateOne(HrOvertimeRate);
