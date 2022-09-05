const OperationProcessingMaintenance = require("./../models/operationProcessingMaintenanceModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all operation processing maintenances
exports.getAllOperationProcessingMaintenances = factory.getAll(
  OperationProcessingMaintenance
);

//create an operation processing maintenances
exports.createOperationProcessingMaintenance = factory.createOne(
  OperationProcessingMaintenance
);

//get an operation processing maintenances
exports.getOperationProcessingMaintenance = factory.getOne(
  OperationProcessingMaintenance
);

//deleting an operation processing maintenances
exports.deleteOperationProcessingMaintenance = factory.deleteOne(
  OperationProcessingMaintenance
);

//updating an operation processing maintenances
exports.updateOperationProcessingMaintenance = factory.updateOne(
  OperationProcessingMaintenance
);
