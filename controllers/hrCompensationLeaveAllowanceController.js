const HrCompensationLeaveAllowance = require("./../models/hrCompensationLeaveAllowanceModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr compensation leave allowances
exports.getAllHrCompensationLeaveAllowances = factory.getAll(
  HrCompensationLeaveAllowance
);

//create a hr compensation leave allowance
exports.createHrCompenaationLeaveAllowance = factory.createOne(
  HrCompensationLeaveAllowance
);

//get a hr compensation leave allowance
exports.getHrCompensationLeaveAllowance = factory.getOne(
  HrCompensationLeaveAllowance
);

//deleting a hr compensation leave allowance
exports.deleteHrCompensationLeaveAllowance = factory.deleteOne(
  HrCompensationLeaveAllowance
);

//updating a hr compensation leave allowance
exports.updateHrCompensationLeaveAllowance = factory.updateOne(
  HrCompensationLeaveAllowance
);
