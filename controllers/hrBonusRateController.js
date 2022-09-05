const HrBonusRate = require("./../models/hrBonusRateModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr bonus rate
exports.getAllHrBonusRates = factory.getAll(HrBonusRate);

//create a hr bonus rate
exports.createHrBonusRate = factory.createOne(HrBonusRate);

//get a hr bonus rate
exports.getHrBonusRate = factory.getOne(HrBonusRate);

//deleting a hr bonus rate
exports.deleteHrBonusRate = factory.deleteOne(HrBonusRate);

//updating a hr bonus rate
exports.updateHrBonusRate = factory.updateOne(HrBonusRate);
