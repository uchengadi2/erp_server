const fixedAssetMiscellaneousAccount = require("../models/fixedAssetMiscellaneousAccountModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all fixed asset Miscellaneous accounts
exports.getAllFixedAssetMiscellaneousAccounts = factory.getAll(
  fixedAssetMiscellaneousAccount
);

//create a fixed asset Miscellaneous account
exports.createFixedAssetMiscellaneousAccount = factory.createOne(
  fixedAssetMiscellaneousAccount
);

//get a fixed asset Miscellaneous account
exports.getFixedAssetMiscellaneousAccount = factory.getOne(
  fixedAssetMiscellaneousAccount
);

//deleting a fixed asset Miscellaneous account
exports.deleteFixedAssetMiscellaneousAccount = factory.deleteOne(
  fixedAssetMiscellaneousAccount
);

//updating a fixed asset Miscellaneous accounts
exports.updateFixedAssetMiscellaneousAccount = factory.updateOne(
  fixedAssetMiscellaneousAccount
);
