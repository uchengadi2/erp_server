const HrSalaryGradeDeductable = require("./../models/hrSalaryGradeDeductableModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr salary grade deductables
exports.getAllHrSalaryGradeDeductables = factory.getAll(
  HrSalaryGradeDeductable
);

//create a hr salary grade deductable
exports.createHrSalaryGradeDeductable = factory.createOne(
  HrSalaryGradeDeductable
);

//get a hr salary grade deductables
exports.getHrSalaryGradeDeductable = factory.getOne(HrSalaryGradeDeductable);

//deleting a hr salary grade deductables
exports.deleteHrSalaryGradeDeductable = factory.deleteOne(
  HrSalaryGradeDeductable
);

//updating a hr salary grade deductables
exports.updateHrSalaryGradeDeductable = factory.updateOne(
  HrSalaryGradeDeductable
);
