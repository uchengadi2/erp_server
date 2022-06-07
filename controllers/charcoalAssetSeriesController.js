const CharcoalAssetSeries = require("./../models/charcoalAssetSeriesModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all charcoal asset series
exports.getAllCharcoalAssetSeries = factory.getAll(CharcoalAssetSeries);

//create a charcoal asset series
exports.createCharcoalAssetSeries = factory.createOne(CharcoalAssetSeries);

//get a charcoal asset series
exports.getCharcoalAssetSeries = factory.getOne(CharcoalAssetSeries);

//deleting a charcoal asset series
exports.deleteCharcoalAssetSeries = factory.deleteOne(CharcoalAssetSeries);

//updating a charcoal asset series
exports.updateCharcoalAssetSeries = factory.updateOne(CharcoalAssetSeries);
