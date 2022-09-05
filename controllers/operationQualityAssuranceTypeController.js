const OperationQualityAssuranceType = require("./../models/operationQualityAssuranceTypeModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all operation quality assurance type
exports.getAllOperationQualityAssuranceTypes = factory.getAll(
  OperationQualityAssuranceType
);

//create an operationquality assurance type
exports.createOperationQualityAssuranceType = factory.createOne(
  OperationQualityAssuranceType
);

//get an operation quality assurance type
exports.getOperationQualityAssuranceType = factory.getOne(
  OperationQualityAssuranceType
);

//deleting an operation quality assurance type
exports.deleteOperationQualityAssuranceType = factory.deleteOne(
  OperationQualityAssuranceType
);

//updating an operation quality assurance type
exports.updateOperationQualityAssuranceType = factory.updateOne(
  OperationQualityAssuranceType
);
