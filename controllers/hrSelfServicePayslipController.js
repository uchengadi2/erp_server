const HrSelfServicePayslip = require("./../models/hrSelfServicePayslipModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr selfservice payslips
exports.getAllHrSelfServicePayslips = factory.getAll(HrSelfServicePayslip);

//create a hr selfservice payslip
exports.createHrSelfServicePayslip = factory.createOne(HrSelfServicePayslip);

//get a hr selfservice payslip
exports.getHrSelfServicePayslip = factory.getOne(HrSelfServicePayslip);

//deleting a hr selfservice payslip
exports.deleteHrSelfServicePayslip = factory.deleteOne(HrSelfServicePayslip);

//updating a hr selfservice payslip
exports.updateHrSelfServicePayslip = factory.updateOne(HrSelfServicePayslip);
