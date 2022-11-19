const AssetInventoryMeasurementUnit = require("./../models/assetInventoryMeasurementUnitModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all asset inventory Measurement Unit
exports.getAllAssetInventoryMeasurementUnits = factory.getAll(
  AssetInventoryMeasurementUnit
);

//create an assetinventory Measurement Unit
exports.createAssetInventoryMeasurementUnit = factory.createOne(
  AssetInventoryMeasurementUnit
);

//get an asset inventory Measurement Unit
exports.getAssetInventoryMeasurementUnit = factory.getOne(
  AssetInventoryMeasurementUnit
);

//deleting an asset inventory Measurement Unit
exports.deleteAssetInventoryMeasurementUnit = factory.deleteOne(
  AssetInventoryMeasurementUnit
);

//updating an asset inventory Measurement Unit
exports.updateAssetInventoryMeasurementUnit = factory.updateOne(
  AssetInventoryMeasurementUnit
);
