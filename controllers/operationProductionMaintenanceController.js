const OperationProductionMaintenance = require("./../models/operationProductionMaintenanceModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all operation production maintenances
exports.getAllOperationProductionMaintenances = factory.getAll(
  OperationProductionMaintenance
);

//create an operation production maintenances
exports.createOperationProductionMaintenance = factory.createOne(
  OperationProductionMaintenance
);

//get an operation production maintenances
exports.getOperationProductionMaintenance = factory.getOne(
  OperationProductionMaintenance
);

//deleting an operation production maintenances
exports.deleteOperationProductionMaintenance = factory.deleteOne(
  OperationProductionMaintenance
);

//updating an operation production maintenances
exports.updateOperationProductionMaintenance = factory.updateOne(
  OperationProductionMaintenance
);
