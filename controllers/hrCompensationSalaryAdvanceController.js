const HrCompensationSalaryAdvance = require("./../models/hrCompensationSalaryAdvanceModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr compensation salary advances
exports.getAllHrCompensationSalaryAdvances = factory.getAll(
  HrCompensationSalaryAdvance
);

//create a hr compensation salary advance
exports.createHrCompenaationSalaryAdvance = factory.createOne(
  HrCompensationSalaryAdvance
);

//get a hr compensation salary advance
exports.getHrCompensationSalaryAdvance = factory.getOne(
  HrCompensationSalaryAdvance
);

//deleting a hr compensation salary advance
exports.deleteHrCompensationSalaryAdvance = factory.deleteOne(
  HrCompensationSalaryAdvance
);

//updating a hr compensation salary advance
exports.updateHrCompensationSalaryAdvance = factory.updateOne(
  HrCompensationSalaryAdvance
);
