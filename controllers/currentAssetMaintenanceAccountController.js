const CurrentAssetMaintenanceAccount = require("./../models/currentAssetMaintenanceAccountModel");
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
exports.getAllCurrentAssetMaintenanceAccounts = factory.getAll(
  CurrentAssetMaintenanceAccount
);

//create a current asset maintenance account
exports.createCurrentAssetMaintenanceAccount = factory.createOne(
  CurrentAssetMaintenanceAccount
);

//get a current asset maintenance account
exports.getCurrentAssetMaintenanceAccount = factory.getOne(
  CurrentAssetMaintenanceAccount
);

//deleting a current asset maintenance account
exports.deleteCurrentAssetMaintenanceAccount = factory.deleteOne(
  CurrentAssetMaintenanceAccount
);

//updating a current asset maintenance account
exports.updateCurrentAssetMaintenanceAccount = factory.updateOne(
  CurrentAssetMaintenanceAccount
);
