const AssetSet = require("./../models/assetSetModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all asset sets
exports.getAllAssetSets = factory.getAll(AssetSet);

//create an asset  set
exports.createAssetSet = factory.createOne(AssetSet);

//get an asset set
exports.getAssetSet = factory.getOne(AssetSet);

//deleting an asset set
exports.deleteAssetSet = factory.deleteOne(AssetSet);

//updating an asset set
exports.updateAssetSet = factory.updateOne(AssetSet);
