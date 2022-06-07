const CommodityAssetSeries = require("./../models/commodityAssetSeriesModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all commodity asset series
exports.getAllCommodityAssetSeries = factory.getAll(CommodityAssetSeries);

//create a commodity asset series
exports.createCommodityAssetSeries = factory.createOne(CommodityAssetSeries);

//get a commodity asset series
exports.getCommodityAssetSeries = factory.getOne(CommodityAssetSeries);

//deleting a commodity asset series
exports.deleteCommodityAssetSeries = factory.deleteOne(CommodityAssetSeries);

//updating a commodity asset series
exports.updateCommodityAssetSeries = factory.updateOne(CommodityAssetSeries);
