const AssetRetirement = require("./../models/assetRetirementModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all asset retirements
exports.getAllAssetRetirements = factory.getAll(AssetRetirement);

//create an asset retirement
exports.createAssetRetirement = factory.createOne(AssetRetirement);

//get an asset retirement
exports.getAssetRetirement = factory.getOne(AssetRetirement);

//deleting an asset retirement
exports.deleteAssetRetirement = factory.deleteOne(AssetRetirement);

//updating an asset retirement
exports.updateAssetRetirement = factory.updateOne(AssetRetirement);
