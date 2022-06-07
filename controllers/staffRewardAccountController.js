const staffRewardAccount = require("../models/staffRewardAccountModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all staff reward accounts
exports.getAllStaffRewardAccounts = factory.getAll(staffRewardAccount);

//create a staff reward account
exports.createStaffRewardAccount = factory.createOne(staffRewardAccount);

//get a staff reward account
exports.getStaffRewardAccount = factory.getOne(staffRewardAccount);

//deleting a staff reward accountt
exports.deleteStaffRewardAccount = factory.deleteOne(staffRewardAccount);

//updating a staff reward account
exports.updateStaffRewardAccount = factory.updateOne(staffRewardAccount);
