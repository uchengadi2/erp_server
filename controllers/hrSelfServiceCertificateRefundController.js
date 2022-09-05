const HrSelfServiceCertificateRefund = require("./../models/hrSelfServiceCertificateRefundModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr selfservice certificate refunds
exports.getAllHrSelfServiceCertificateRefunds = factory.getAll(
  HrSelfServiceCertificateRefund
);

//create a hr selfservice certificate refund
exports.createHrSelfServiceCertificateRefund = factory.createOne(
  HrSelfServiceCertificateRefund
);

//get a hr selfservice certificate refund
exports.getHrSelfServiceCertificateRefund = factory.getOne(
  HrSelfServiceCertificateRefund
);

//deleting a hr selfservice certificate refund
exports.deleteHrSelfServiceCertificateRefund = factory.deleteOne(
  HrSelfServiceCertificateRefund
);

//updating a hr selfservice certificate refund
exports.updateHrSelfServiceCertificateRefund = factory.updateOne(
  HrSelfServiceCertificateRefund
);
