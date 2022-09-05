const AssetMeasurementUnit = require("./../models/assetMeasurementUnitModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all asset measurement units
exports.getAllAssetMeasurementUnits = factory.getAll(AssetMeasurementUnit);

//create an asset  measurement unit
exports.createAssetMeasurementUnit = factory.createOne(AssetMeasurementUnit);

//get an asset measurement unit
exports.getAssetMeasurementUnit = factory.getOne(AssetMeasurementUnit);

//deleting an asset measurement unit
exports.deleteAssetMeasurementUnit = factory.deleteOne(AssetMeasurementUnit);

//updating an asset measurement unit
exports.updateAssetMeasurementUnit = factory.updateOne(AssetMeasurementUnit);
