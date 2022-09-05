const AssetDisposition = require("./../models/assetDispositionModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all asset dispositions
exports.getAllAssetDispositions = factory.getAll(AssetDisposition);

//create an asset disposition
exports.createAssetDisposition = factory.createOne(AssetDisposition);

//get an asset disposition
exports.getAssetDisposition = factory.getOne(AssetDisposition);

//deleting an asset disposition
exports.deleteAssetDisposition = factory.deleteOne(AssetDisposition);

//updating an asset disposition
exports.updateAssetDisposition = factory.updateOne(AssetDisposition);
