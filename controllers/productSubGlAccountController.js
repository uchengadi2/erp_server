const productSubGlAccount = require("../models/productSubGlAccountModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all product sub gl accounts
exports.getAllProductSubGlAccounts = factory.getAll(productSubGlAccount);

//create a product
exports.createProductSubGlAccount = factory.createOne(productSubGlAccount);

//get a product sub gl accounts
exports.getProductSubGlAccount = factory.getOne(productSubGlAccount);

//deleting a product sub gl accounts
exports.deleteProductSubGlAccount = factory.deleteOne(productSubGlAccount);

//updating a product sub gl accounts
exports.updateProductSubGlAccount = factory.updateOne(productSubGlAccount);
