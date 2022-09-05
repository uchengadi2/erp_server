const AssetMovement = require("./../models/assetMovementModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all asset movements
exports.getAllAssetMovements = factory.getAll(AssetMovement);

//create an asset movement
exports.createAssetMovement = factory.createOne(AssetMovement);

//get an asset movement
exports.getAssetMovement = factory.getOne(AssetMovement);

//deleting an asset movement
exports.deleteAssetMovement = factory.deleteOne(AssetMovement);

//updating an asset movement
exports.updateAssetMovement = factory.updateOne(AssetMovement);
