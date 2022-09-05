const OperationMaintenanceType = require("./../models/operationMaintenanceTypeModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all operation maintenance types
exports.getAllOperationMaintenanceTypes = factory.getAll(
  OperationMaintenanceType
);

//create an operation maintenance type
exports.createOperationMaintenanceType = factory.createOne(
  OperationMaintenanceType
);

//get an operation maintenance type
exports.getOperationMaintenanceType = factory.getOne(OperationMaintenanceType);

//deleting an operation maintenance type
exports.deleteOperationMaintenanceType = factory.deleteOne(
  OperationMaintenanceType
);

//updating an operation maintenance type
exports.updateOperationMaintenanceType = factory.updateOne(
  OperationMaintenanceType
);
