const HrCompensationCertificateRefund = require("./../models/hrCompensationCertificateRefundModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr compensation certificate refunds
exports.getAllHrCompensationCertificateRefunds = factory.getAll(
  HrCompensationCertificateRefund
);

//create a hr compensation certificate refund
exports.createHrCompenaationCertificateRefund = factory.createOne(
  HrCompensationCertificateRefund
);

//get a hr compensation certificate refund
exports.getHrCompensationCertificateRefund = factory.getOne(
  HrCompensationCertificateRefund
);

//deleting a hr compensation certificate refund
exports.deleteHrCompensationCertificateRefund = factory.deleteOne(
  HrCompensationCertificateRefund
);

//updating a hr compensation certificate refund
exports.updateHrCompensationCertificateRefund = factory.updateOne(
  HrCompensationCertificateRefund
);
