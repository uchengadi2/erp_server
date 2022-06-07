const fixedAssetDepreciationAccount = require("../models/fixedAssetDepreciationAccountModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all fixed asset depreciation accounts
exports.getAllFixedAssetDepreciationAccounts = factory.getAll(
  fixedAssetDepreciationAccount
);

//create a fixed asset account
exports.createFixedAssetDepreciationAccount = factory.createOne(
  fixedAssetDepreciationAccount
);

//get a fixed asset depreciation account
exports.getFixedAssetDepreciationAccount = factory.getOne(
  fixedAssetDepreciationAccount
);

//deleting a fixed asset depreciation account
exports.deleteFixedAssetDepreciationAccount = factory.deleteOne(
  fixedAssetDepreciationAccount
);

//updating a fixed asset depreciation accounts
exports.updateFixedAssetDepreciationAccount = factory.updateOne(
  fixedAssetDepreciationAccount
);
