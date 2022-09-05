const AssetTransfer = require("./../models/assetTransferModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all asset transfers
exports.getAllAssetTransfers = factory.getAll(AssetTransfer);

//create an asset transfer
exports.createAssetTransfer = factory.createOne(AssetTransfer);

//get an asset transfer
exports.getAssetTransfer = factory.getOne(AssetTransfer);

//deleting an asset transfer
exports.deleteAssetTransfer = factory.deleteOne(AssetTransfer);

//updating an asset transfer
exports.updateAssetTransfer = factory.updateOne(AssetTransfer);
