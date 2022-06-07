const CurrentAssetAccount = require("./../models/currentAssetAccountModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all current asset accounts
exports.getAllCurrentAssetAccounts = factory.getAll(CurrentAssetAccount);

//create a current asset account
exports.createCurrentAssetAccount = factory.createOne(CurrentAssetAccount);

//get a current asset account
exports.getCurrentAssetAccount = factory.getOne(CurrentAssetAccount);

//deleting a current asset account
exports.deleteCurrentAssetAccount = factory.deleteOne(CurrentAssetAccount);

//updating a current asset account
exports.updateCurrentAssetAccount = factory.updateOne(CurrentAssetAccount);
