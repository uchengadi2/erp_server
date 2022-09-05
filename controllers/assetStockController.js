const AssetStock = require("./../models/assetStockModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all asset stocks
exports.getAllAssetStocks = factory.getAll(AssetStock);

//create an asset  stock
exports.createAssetStock = factory.createOne(AssetStock);

//get an asset stock
exports.getAssetStock = factory.getOne(AssetStock);

//deleting an asset stock
exports.deleteAssetStock = factory.deleteOne(AssetStock);

//updating an asset stock
exports.updateAssetStock = factory.updateOne(AssetStock);
