const MaintenanceType = require("./../models/maintenanceTypeModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all maintenance types
exports.getAllMaintenanceTypes = factory.getAll(MaintenanceType);

//create a maintenance type
exports.createMaintenanceType = factory.createOne(MaintenanceType);

//get a maintenance type
exports.getMaintenanceType = factory.getOne(MaintenanceType);

//deleting a maintenance type
exports.deleteMaintenanceType = factory.deleteOne(MaintenanceType);

//updating a maintenance type
exports.updateMaintenanceType = factory.updateOne(MaintenanceType);
