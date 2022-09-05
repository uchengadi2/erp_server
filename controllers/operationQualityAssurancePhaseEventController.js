const OperationQualityAssurancePhaseEvent = require("./../models/operationQualityAssurancePhaseEventModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all operation quality assurance phase events
exports.getAllOperationQualityAssurancePhaseEvents = factory.getAll(
  OperationQualityAssurancePhaseEvent
);

//create an operationquality assurance phase event
exports.createOperationQualityAssurancePhaseEvent = factory.createOne(
  OperationQualityAssurancePhaseEvent
);

//get an operation quality assurance phase event
exports.getOperationQualityAssurancePhaseEvent = factory.getOne(
  OperationQualityAssurancePhaseEvent
);

//deleting an operation quality assurance phase event
exports.deleteOperationQualityAssurancePhaseEvent = factory.deleteOne(
  OperationQualityAssurancePhaseEvent
);

//updating an operation quality assurance phase event
exports.updateOperationQualityAssurancePhaseEvent = factory.updateOne(
  OperationQualityAssurancePhaseEvent
);
