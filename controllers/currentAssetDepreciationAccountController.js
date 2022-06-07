const CurrentAssetDepreciationAccount = require("./../models/currentAssetDepreciationAccountModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all current asset depreciation accounts
exports.getAllCurrentAssetDepreciationAccounts = factory.getAll(
  CurrentAssetDepreciationAccount
);

//create a current asset depreciation account
exports.createCurrentAssetDepreciationAccount = factory.createOne(
  CurrentAssetDepreciationAccount
);

//get a current asset depreciation account
exports.getCurrentAssetDepreciationAccount = factory.getOne(
  CurrentAssetDepreciationAccount
);

//deleting a current asset depreciation account
exports.deleteCurrentAssetDepreciationAccount = factory.deleteOne(
  CurrentAssetDepreciationAccount
);

//updating a current asset depreciation account
exports.updateCurrentAssetDepreciationAccount = factory.updateOne(
  CurrentAssetDepreciationAccount
);
