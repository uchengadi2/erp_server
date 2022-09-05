const OperationProcessingPhaseEvent = require("./../models/operationProcessingPhaseEventModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all operation processing phase events
exports.getAllOperationProcessingPhaseEvents = factory.getAll(
  OperationProcessingPhaseEvent
);

//create an operation processing phase event
exports.createOperationProcessingPhaseEvent = factory.createOne(
  OperationProcessingPhaseEvent
);

//get an operation processing phase event
exports.getOperationProcessingPhaseEvent = factory.getOne(
  OperationProcessingPhaseEvent
);

//deleting an operation processing phase event
exports.deleteOperationProcessingPhaseEvent = factory.deleteOne(
  OperationProcessingPhaseEvent
);

//updating an operation processing phase event
exports.updateOperationProcessingPhaseEvent = factory.updateOne(
  OperationProcessingPhaseEvent
);
