const StoreMaintenance = require("./../models/storeMaintenanceModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all store maintenances
exports.getAllStoreMaintenances = factory.getAll(StoreMaintenance);

//create a store maintenance
exports.createStoreMaintenance = factory.createOne(StoreMaintenance);

//get a store maintenance
exports.getStoreMaintenance = factory.getOne(StoreMaintenance);

//deleting a store maintenance
exports.deleteStoreMaintenance = factory.deleteOne(StoreMaintenance);

//updating a store maintenance
exports.updateStoreMaintenance = factory.updateOne(StoreMaintenance);
