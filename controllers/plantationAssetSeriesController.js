const plantationAssetSeries = require("../models/plantationAssetSeriesModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all plantation asset series
exports.getAllPlantationAssetSeries = factory.getAll(plantationAssetSeries);

//create a plantation asset series
exports.createPlantationAssetSeries = factory.createOne(plantationAssetSeries);

//get a plantation asset series
exports.getPlantationAssetSeries = factory.getOne(plantationAssetSeries);

//deleting a plantation asset series
exports.deletePlantationAssetSeries = factory.deleteOne(plantationAssetSeries);

//updating a plantation asset series
exports.updatePlantationAssetSeries = factory.updateOne(plantationAssetSeries);
