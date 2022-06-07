const staffSubGlAccount = require("../models/staffSubGlAccountModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all staff subgl accounts
exports.getAllStaffSubGlAccounts = factory.getAll(staffSubGlAccount);

//create a staff subgl account
exports.createStaffSubGlAccount = factory.createOne(staffSubGlAccount);

//get a staff subgl account
exports.getStaffSubGlAccount = factory.getOne(staffSubGlAccount);

//deleting a staff subgl accountt
exports.deleteStaffSubGlAccount = factory.deleteOne(staffSubGlAccount);

//updating a staff subgl account
exports.updateStaffSubGlAccount = factory.updateOne(staffSubGlAccount);
