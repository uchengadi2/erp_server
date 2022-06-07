const CurrentAssetMiscellaneousAccount = require("../models/currentAssetMiscellaneousAccountModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all current asset maintenance accounts
exports.getAllCurrentAssetMiscellaneousAccounts = factory.getAll(
  CurrentAssetMiscellaneousAccount
);

//create a current asset Miscellaneous account
exports.createCurrentAssetMiscellaneousAccount = factory.createOne(
  CurrentAssetMiscellaneousAccount
);

//get a current asset Miscellaneous account
exports.getCurrentAssetMiscellaneousAccount = factory.getOne(
  CurrentAssetMiscellaneousAccount
);

//deleting a current asset Miscellaneous account
exports.deleteCurrentAssetMiscellaneousAccount = factory.deleteOne(
  CurrentAssetMiscellaneousAccount
);

//updating a current asset Miscellaneous account
exports.updateCurrentAssetMiscellaneousAccount = factory.updateOne(
  CurrentAssetMiscellaneousAccount
);
