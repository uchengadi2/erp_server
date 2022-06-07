const customerLoanAccount = require("../models/customerLoanAccountModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all customer loan accounts
exports.getAllCustomerLoanAccounts = factory.getAll(customerLoanAccount);

//create a customer loan accounts
exports.createCustomerLoanAccount = factory.createOne(customerLoanAccount);

//get a customer loan accounts
exports.getCustomerLoanAccount = factory.getOne(customerLoanAccount);

//deleting a customer loan accounts
exports.deleteCustomerLoanAccount = factory.deleteOne(customerLoanAccount);

//updating a customer loan accounts
exports.updateCustomerLoanAccount = factory.updateOne(customerLoanAccount);
