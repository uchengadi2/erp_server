const CharcoalAssetSlot = require("./../models/charcoalAssetSlotModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all charcoal asset slots
exports.getAllCharcoalAssetSlots = factory.getAll(CharcoalAssetSlot);

//create a charcoal asset slot
exports.createCharcoalAssetSlot = factory.createOne(CharcoalAssetSlot);

//get a charcoal asset slot
exports.getCharcoalAssetSlot = factory.getOne(CharcoalAssetSlot);

//deleting a charcoal asset slot
exports.deleteCharcoalAssetSlot = factory.deleteOne(CharcoalAssetSlot);

//updating a charcoal asset slot
exports.updateCharcoalAssetSlot = factory.updateOne(CharcoalAssetSlot);
