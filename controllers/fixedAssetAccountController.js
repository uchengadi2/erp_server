const fixedAssetAccount = require("../models/fixedAssetAccountModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all fixed asset accounts
exports.getAllFixedAssetAccounts = factory.getAll(fixedAssetAccount);

//create a fixed asset account
exports.createFixedAssetAccount = factory.createOne(fixedAssetAccount);

//get a fixed asset account
exports.getFixedAssetAccount = factory.getOne(fixedAssetAccount);

//deleting a fixed asset account
exports.deleteFixedAssetAccount = factory.deleteOne(fixedAssetAccount);

//updating a fixed asset accounts
exports.updateFixedAssetAccount = factory.updateOne(fixedAssetAccount);
