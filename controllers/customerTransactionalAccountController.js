const customerTransactionalAccount = require("../models/customerTransactionalAccountModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all customer transactional accounts
exports.getAllCustomerTransactionalAccounts = factory.getAll(
  customerTransactionalAccount
);

//create a customer transactional account
exports.createCustomerTransactionalAccount = factory.createOne(
  customerTransactionalAccount
);

//get a customer transactional account
exports.getCustomerTransactionalAccount = factory.getOne(
  customerTransactionalAccount
);

//deleting a customer transactional account
exports.deleteCustomerTransactionalAccount = factory.deleteOne(
  customerTransactionalAccount
);

//updating a customer transactional account
exports.updateCustomerTransactionalAccount = factory.updateOne(
  customerTransactionalAccount
);
