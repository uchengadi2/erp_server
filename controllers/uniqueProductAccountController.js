const uniqueProductAccount = require("../models/uniqueProductAccountModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all  unique product accounts
exports.getAllUniqueProductAccounts = factory.getAll(uniqueProductAccount);

//create a unique product account
exports.createUniqueProductAccount = factory.createOne(uniqueProductAccount);

//get a unique product account
exports.getUniqueProductAccount = factory.getOne(uniqueProductAccount);

//deleting a unique product account
exports.deleteUniqueProductAccount = factory.deleteOne(uniqueProductAccount);

//updating a unique product account
exports.updateUniqueProductAccount = factory.updateOne(uniqueProductAccount);
