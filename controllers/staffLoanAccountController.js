const staffLoanAccount = require("../models/staffLoanAccountModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all staff loan accounts
exports.getAllStaffLoanAccounts = factory.getAll(staffLoanAccount);

//create a staff loan account
exports.createStaffLoanAccount = factory.createOne(staffLoanAccount);

//get a staff loan account
exports.getStaffLoanAccount = factory.getOne(staffLoanAccount);

//deleting a staff loan accountt
exports.deleteStaffLoanAccount = factory.deleteOne(staffLoanAccount);

//updating a staff loan account
exports.updateStaffLoanAccount = factory.updateOne(staffLoanAccount);
