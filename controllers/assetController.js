const Asset = require("./../models/assetModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all asset
exports.getAllAssets = factory.getAll(Asset);

//create an asset
exports.createAsset = factory.createOne(Asset);

//get an asset
exports.getAsset = factory.getOne(Asset);

//deleting an asset
exports.deleteAsset = factory.deleteOne(Asset);

//updating an asset disposition type
exports.updateAsset = factory.updateOne(Asset);
