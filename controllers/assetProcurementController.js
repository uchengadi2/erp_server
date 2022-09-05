const AssetProcurement = require("./../models/assetProcurementModel");
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
exports.getAllAssetProcurements = factory.getAll(AssetProcurement);

//create an asset
exports.createAssetProcurement = factory.createOne(AssetProcurement);

//get an asset
exports.getAssetProcurement = factory.getOne(AssetProcurement);

//deleting an asset
exports.deleteAssetProcurement = factory.deleteOne(AssetProcurement);

//updating an asset disposition type
exports.updateAssetProcurement = factory.updateOne(AssetProcurement);
