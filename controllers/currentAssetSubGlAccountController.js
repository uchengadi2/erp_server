const currentAssetSubGlAccount = require("../models/currentAssetSubGlAccountModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all current asset subgl accounts
exports.getAllCurrentAssetSubGlAccounts = factory.getAll(
  currentAssetSubGlAccount
);

//create a current asset subgl account
exports.createCurrentAssetSubGlAccount = factory.createOne(
  currentAssetSubGlAccount
);

//get a current asset subgl account
exports.getCurrentAssetSubGlAccount = factory.getOne(currentAssetSubGlAccount);

//deleting a current asset subgl account
exports.deleteCurrentAssetSubGlAccount = factory.deleteOne(
  currentAssetSubGlAccount
);

//updating a current asset subgl account
exports.updateCurrentAssetSubGlAccount = factory.updateOne(
  currentAssetSubGlAccount
);
