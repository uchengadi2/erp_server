const inventorableLivestockAssetSlot = require("../models/inventorableLivestockAssetSlotModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all  inventorable livestock asset slots
exports.getAllInventorableLivestockAssetSlots = factory.getAll(
  inventorableLivestockAssetSlot
);

//create a  inventorable livestock asset slot
exports.createInventorableLivestockAssetSlot = factory.createOne(
  inventorableLivestockAssetSlot
);

//get a inventorable livestock asset slots
exports.getInventorableLivestockAssetSlot = factory.getOne(
  inventorableLivestockAssetSlot
);

//deleting a inventorable livestock asset slots
exports.deleteInventorableLivestockAssetSlot = factory.deleteOne(
  inventorableLivestockAssetSlot
);

//updating a inventorable livestock asset slots
exports.updateInventorableLivestockAssetSlot = factory.updateOne(
  inventorableLivestockAssetSlot
);
