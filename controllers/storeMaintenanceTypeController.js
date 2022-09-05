const StoreMaintenanceType = require("./../models/storeMaintenanceTypeModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all store maintenance types
exports.getAllStoreMaintenanceTypes = factory.getAll(StoreMaintenanceType);

//create a store maintenance type
exports.createStoreMaintenanceType = factory.createOne(StoreMaintenanceType);

//get a store maintenance type
exports.getStoreMaintenanceType = factory.getOne(StoreMaintenanceType);

//deleting a store maintenance type
exports.deleteStoreMaintenanceType = factory.deleteOne(StoreMaintenanceType);

//updating a store maintenance type
exports.updateStoreMaintenanceType = factory.updateOne(StoreMaintenanceType);
