const CommodityAssetSlot = require("./../models/commodityAssetSlotModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all commodity asset slot
exports.getAllCommodityAssetSlots = factory.getAll(CommodityAssetSlot);

//create a commodity asset slot
exports.createCommodityAssetSlot = factory.createOne(CommodityAssetSlot);

//get a commodity asset slot
exports.getCommodityAssetSlot = factory.getOne(CommodityAssetSlot);

//deleting a commodity asset slot
exports.deleteCommodityAssetSlot = factory.deleteOne(CommodityAssetSlot);

//updating a commodity asset slot
exports.updateCommodityAssetSlot = factory.updateOne(CommodityAssetSlot);
