const AssetInventoryType = require("./../models/assetInventoryTypeModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all asset inventory type
exports.getAllAssetInventoryTypes = factory.getAll(AssetInventoryType);

//create an assetinventory type
exports.createAssetInventoryType = factory.createOne(AssetInventoryType);

//get an asset inventory type
exports.getAssetInventoryType = factory.getOne(AssetInventoryType);

//deleting an asset inventory  type
exports.deleteAssetInventoryType = factory.deleteOne(AssetInventoryType);

//updating an asset inventory type
exports.updateAssetInventoryType = factory.updateOne(AssetInventoryType);
