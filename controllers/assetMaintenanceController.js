const AssetMaintenance = require("./../models/assetMaintenanceModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all asset maintenances
exports.getAllAssetMaintenances = factory.getAll(AssetMaintenance);

//create an asset maintenance
exports.createAssetMaintenance = factory.createOne(AssetMaintenance);

//get an asset maintenance
exports.getAssetMaintenance = factory.getOne(AssetMaintenance);

//deleting an asset maintenance
exports.deleteAssetMaintenance = factory.deleteOne(AssetMaintenance);

//updating an asset maintenance
exports.updateAssetMaintenance = factory.updateOne(AssetMaintenance);
