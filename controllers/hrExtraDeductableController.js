const HrExtraDeductable = require("./../models/hrExtraDeductableModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr extra deductables
exports.getAllHrExtrDeductables = factory.getAll(HrExtraDeductable);

//create a hr extra  grade deductable
exports.createHrExtrDeductable = factory.createOne(HrExtraDeductable);

//get a hr extra grade deductables
exports.getHrExtraDeductable = factory.getOne(HrExtraDeductable);

//deleting a hr extra grade deductables
exports.deleteHrExtraDeductable = factory.deleteOne(HrExtraDeductable);

//updating a hr extra grade deductables
exports.updateHrExtraDeductable = factory.updateOne(HrExtraDeductable);
