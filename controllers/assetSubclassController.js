const AssetSubclass = require("./../models/assetSubclassModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all asset subclasses
exports.getAllAssetSubclasses = factory.getAll(AssetSubclass);

//create an asset  subclass
exports.createAssetSubclass = factory.createOne(AssetSubclass);

//get an asset subclass
exports.getAssetSubclass = factory.getOne(AssetSubclass);

//deleting an asset subclass
exports.deleteAssetSubclass = factory.deleteOne(AssetSubclass);

//updating an asset sublass
exports.updateAssetSubclass = factory.updateOne(AssetSubclass);
