const customerSubGlAccount = require("../models/customerSubGlAccountModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all customer sub gl accounts
exports.getAllCustomerSubGlAccounts = factory.getAll(customerSubGlAccount);

//create a customer sub gl account
exports.createCustomerSubGlAccount = factory.createOne(customerSubGlAccount);

//get a customer sub gl account
exports.getCustomerSubGlAccount = factory.getOne(customerSubGlAccount);

//deleting a customer sub gl account
exports.deleteCustomerSubGlAccount = factory.deleteOne(customerSubGlAccount);

//updating a customer sub gl account
exports.updateCustomerSubGlAccount = factory.updateOne(customerSubGlAccount);
