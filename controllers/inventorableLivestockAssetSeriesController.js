const inventorableLivestockAssetSeries = require("../models/inventorableLivestockAssetSeriesModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all  inventorable livestock asset series
exports.getAllInventorableLivestockAssetSeries = factory.getAll(
  inventorableLivestockAssetSeries
);

//create a  inventorable livestock asset series
exports.createInventorableLivestockAssetSeries = factory.createOne(
  inventorableLivestockAssetSeries
);

//get a inventorable livestock asset series
exports.getInventorableLivestockAssetSeries = factory.getOne(
  inventorableLivestockAssetSeries
);

//deleting a inventorable livestock asset series
exports.deleteInventorableLivestockAssetSeries = factory.deleteOne(
  inventorableLivestockAssetSeries
);

//updating a inventorable livestock asset series
exports.updateInventorableLivestockAssetSeries = factory.updateOne(
  inventorableLivestockAssetSeries
);
