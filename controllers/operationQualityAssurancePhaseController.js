const OperationQualityAssurancePhase = require("./../models/operationQualityAssurancePhaseModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all operation quality assurance phase
exports.getAllOperationQualityAssurancePhases = factory.getAll(
  OperationQualityAssurancePhase
);

//create an operationquality assurance phase
exports.createOperationQualityAssurancePhase = factory.createOne(
  OperationQualityAssurancePhase
);

//get an operation quality assurance phase
exports.getOperationQualityAssurancePhase = factory.getOne(
  OperationQualityAssurancePhase
);

//deleting an operation quality assurance phase
exports.deleteOperationQualityAssurancePhase = factory.deleteOne(
  OperationQualityAssurancePhase
);

//updating an operation quality assurance phase
exports.updateOperationQualityAssurancePhase = factory.updateOne(
  OperationQualityAssurancePhase
);
