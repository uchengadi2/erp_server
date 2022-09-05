const OperationProcessingPhase = require("./../models/operationProcessingPhaseModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all operation processing phases
exports.getAllOperationProcessingPhases = factory.getAll(
  OperationProcessingPhase
);

//create an operation processing phase
exports.createOperationProcessingPhase = factory.createOne(
  OperationProcessingPhase
);

//get an operation processing phase
exports.getOperationProcessingPhase = factory.getOne(OperationProcessingPhase);

//deleting an operation processing phase
exports.deleteOperationProcessingPhase = factory.deleteOne(
  OperationProcessingPhase
);

//updating an operation processing phase
exports.updateOperationProcessingPhase = factory.updateOne(
  OperationProcessingPhase
);
