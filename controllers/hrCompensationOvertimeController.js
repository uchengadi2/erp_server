const HrCompensationOvertime = require("./../models/hrCompensationOvertimeModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr compensation overtimes
exports.getAllHrCompensationOvertimes = factory.getAll(HrCompensationOvertime);

//create a hr compensation ovetime
exports.createHrCompenaationOvertime = factory.createOne(
  HrCompensationOvertime
);

//get a hr compensation overtime
exports.getHrCompensationOvertime = factory.getOne(HrCompensationOvertime);

//deleting a hr compensation overtime
exports.deleteHrCompensationOvertime = factory.deleteOne(
  HrCompensationOvertime
);

//updating a hr compensation overtime
exports.updateHrCompensationOvertime = factory.updateOne(
  HrCompensationOvertime
);
