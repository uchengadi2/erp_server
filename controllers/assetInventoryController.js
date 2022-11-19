const AssetInventory = require("./../models/assetInventoryModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all asset inventory
exports.getAllAssetInventories = factory.getAll(AssetInventory);

//create an assetinventory
exports.createAssetInventory = factory.createOne(AssetInventory);

//get an asset inventory
exports.getAssetInventory = factory.getOne(AssetInventory);

//deleting an asset inventory
exports.deleteAssetInventory = factory.deleteOne(AssetInventory);

//updating an asset inventory
exports.updateAssetInventory = factory.updateOne(AssetInventory);
