const fixedAssetMaintenanceAccount = require("../models/fixedAssetMaintenanceAccountModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all fixed asset maintenance accounts
exports.getAllFixedAssetMaintenanceAccounts = factory.getAll(
  fixedAssetMaintenanceAccount
);

//create a fixed asset maintenance account
exports.createFixedAssetMaintenanceAccount = factory.createOne(
  fixedAssetMaintenanceAccount
);

//get a fixed asset maintenance account
exports.getFixedAssetMaintenanceAccount = factory.getOne(
  fixedAssetMaintenanceAccount
);

//deleting a fixed asset maintenance account
exports.deleteFixedAssetMaintenanceAccount = factory.deleteOne(
  fixedAssetMaintenanceAccount
);

//updating a fixed asset maintenance accounts
exports.updateFixedAssetMaintenanceAccount = factory.updateOne(
  fixedAssetMaintenanceAccount
);
