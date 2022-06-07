const livestockAssetSeries = require("../models/livestockAssetSeriesModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all livestock asset series
exports.getAllLivestockAssetSeries = factory.getAll(livestockAssetSeries);

//create a livestock asset series
exports.createLivestockAssetSeries = factory.createOne(livestockAssetSeries);

//get a livestock asset series
exports.getLivestockAssetSeries = factory.getOne(livestockAssetSeries);

//deleting a livestock asset series
exports.deleteLivestockAssetSeries = factory.deleteOne(livestockAssetSeries);

//updating a livestock asset series
exports.updateLivestockAssetSeries = factory.updateOne(livestockAssetSeries);
