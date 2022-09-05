const AssetSetBatch = require("./../models/assetSetBatchModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all asset set batches
exports.getAllAssetSetBatches = factory.getAll(AssetSetBatch);

//create an asset  set batch
exports.createAssetSetBatch = factory.createOne(AssetSetBatch);

//get an asset set batch
exports.getAssetSetBatch = factory.getOne(AssetSetBatch);

//deleting an asset set batch
exports.deleteAssetSetBatch = factory.deleteOne(AssetSetBatch);

//updating an asset set batch
exports.updateAssetSetBatch = factory.updateOne(AssetSetBatch);
