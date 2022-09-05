const HrSelfServiceStaffLoan = require("./../models/hrSelfServiceStaffLoanModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr selfservice staff loans
exports.getAllHrSelfServiceStaffLoans = factory.getAll(HrSelfServiceStaffLoan);

//create a hr selfservice staff loan
exports.createHrSelfServiceStaffLoan = factory.createOne(
  HrSelfServiceStaffLoan
);

//get a hr selfservice staff loan
exports.getHrSelfServiceStaffLoan = factory.getOne(HrSelfServiceStaffLoan);

//deleting a hr selfservice staff loan
exports.deleteHrSelfServiceStaffLoan = factory.deleteOne(
  HrSelfServiceStaffLoan
);

//updating a hr selfservice staff loan
exports.updateHrSelfServiceStaffLoan = factory.updateOne(
  HrSelfServiceStaffLoan
);
