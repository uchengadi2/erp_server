const AssetRequisition = require("./../models/assetRequisitionModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all asset requisitions
exports.getAllAssetRequisitions = factory.getAll(AssetRequisition);

//create an asset requisition
exports.createAssetRequisition = factory.createOne(AssetRequisition);

//get an asset requisition
exports.getAssetRequisition = factory.getOne(AssetRequisition);

//deleting an asset requisition
exports.deleteAssetRequisition = factory.deleteOne(AssetRequisition);

//updating an asset requisition
exports.updateAssetRequisition = factory.updateOne(AssetRequisition);
