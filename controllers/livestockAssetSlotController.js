const livestockAssetSlot = require("../models/livestockAssetSlotModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all livestock asset slot
exports.getAllLivestockAssetSlots = factory.getAll(livestockAssetSlot);

//create a livestock asset slot
exports.createLivestockAssetSlot = factory.createOne(livestockAssetSlot);

//get a livestock asset slot
exports.getLivestockAssetSlot = factory.getOne(livestockAssetSlot);

//deleting a livestock asset slot
exports.deleteLivestockAssetSlot = factory.deleteOne(livestockAssetSlot);

//updating a livestock asset slot
exports.updateLivestockAssetSlot = factory.updateOne(livestockAssetSlot);
