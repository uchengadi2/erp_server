const HrSelfServiceSalaryAdvance = require("./../models/hrSelfServiceSalaryAdvanceModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr selfservice salary advances
exports.getAllHrSelfServiceSalaryAdvances = factory.getAll(
  HrSelfServiceSalaryAdvance
);

//create a hr selfservice salary advance
exports.createHrSelfServiceSalaryAdvance = factory.createOne(
  HrSelfServiceSalaryAdvance
);

//get a hr selfservice salary advance
exports.getHrSelfServiceSalaryAdvance = factory.getOne(
  HrSelfServiceSalaryAdvance
);

//deleting a hr selfservice salary advance
exports.deleteHrSelfServiceSalaryAdvance = factory.deleteOne(
  HrSelfServiceSalaryAdvance
);

//updating a hr selfservice salary advance
exports.updateHrSelfServiceSalaryAdvance = factory.updateOne(
  HrSelfServiceSalaryAdvance
);
