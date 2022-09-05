const HrCompensationStaffLoan = require("./../models/hrCompensationStaffLoanModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr compensation staff loans
exports.getAllHrCompensationStaffLoans = factory.getAll(
  HrCompensationStaffLoan
);

//create a hr compensation staff loan
exports.createHrCompenaationStaffLoan = factory.createOne(
  HrCompensationStaffLoan
);

//get a hr compensation staff loan
exports.getHrCompensationStaffLoan = factory.getOne(HrCompensationStaffLoan);

//deleting a hr compensation staff loan
exports.deleteHrCompensationStaffLoan = factory.deleteOne(
  HrCompensationStaffLoan
);

//updating a hr compensation staff loan
exports.updateHrCompensationStaffLoan = factory.updateOne(
  HrCompensationStaffLoan
);
