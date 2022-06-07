const AssetType = require("./../models/assetTypeModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all asset types
exports.getAllAssetTypes = factory.getAll(AssetType);
//create a asset type
exports.createAssetType = factory.createOne(AssetType);

//get a asset type
exports.getAssetType = factory.getOne(AssetType);

//deleting a asset type
exports.deleteAssetType = factory.deleteOne(AssetType);

//updating a asset type
exports.updateAssetType = factory.updateOne(AssetType);
