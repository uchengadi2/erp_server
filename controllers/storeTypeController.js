const StoreType = require("./../models/storeTypeModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all store types
exports.getAllStoreTypes = factory.getAll(StoreType);
//create a store type
exports.createStoreType = factory.createOne(StoreType);

//get a store type
exports.getStoreType = factory.getOne(StoreType);

//deleting a store type
exports.deleteStoreType = factory.deleteOne(StoreType);

//updating a store type
exports.updateStoreType = factory.updateOne(StoreType);
