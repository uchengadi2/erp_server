const HrEmolumentPeriod = require("./../models/hrEmolumentPeriodModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr emolument periods
exports.getAllHrEmolumentPeriods = factory.getAll(HrEmolumentPeriod);

//create a hr emolument period
exports.createHrEmolumentPeriod = factory.createOne(HrEmolumentPeriod);

//get a hr emolument period
exports.getHrEmolumentPeriod = factory.getOne(HrEmolumentPeriod);

//deleting a hr emolument period
exports.deleteHrEmolumentPeriod = factory.deleteOne(HrEmolumentPeriod);

//updating a hr emolument period
exports.updateHrEmolumentPeriod = factory.updateOne(HrEmolumentPeriod);
