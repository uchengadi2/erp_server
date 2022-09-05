const AssetDispositionType = require("./../models/assetDispositionTypeModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all asset disposition types
exports.getAllAssetDispositionTypes = factory.getAll(AssetDispositionType);

//create an asset disposition type
exports.createAssetDispositionType = factory.createOne(AssetDispositionType);

//get an asset disposition type
exports.getAssetDispositionType = factory.getOne(AssetDispositionType);

//deleting an asset disposition type
exports.deleteAssetDispositionType = factory.deleteOne(AssetDispositionType);

//updating an asset disposition type
exports.updateAssetDispositionType = factory.updateOne(AssetDispositionType);
