const fixedAssetSubGlAccount = require("../models/fixedAssetSubGlAccountModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all fixed asset sub gl accounts
exports.getAllFixedAssetSubGlAccounts = factory.getAll(fixedAssetSubGlAccount);

//create a fixed asset sub gl account
exports.createFixedAssetSubGlAccount = factory.createOne(
  fixedAssetSubGlAccount
);

//get a fixed asset sub gl account
exports.getFixedAssetSubGlAccount = factory.getOne(fixedAssetSubGlAccount);

//deleting a fixed asset sub gl account
exports.deleteFixedAssetSubGlAccount = factory.deleteOne(
  fixedAssetSubGlAccount
);

//updating a fixed asset sub gl accounts
exports.updateFixedAssetSubGlAccount = factory.updateOne(
  fixedAssetSubGlAccount
);
