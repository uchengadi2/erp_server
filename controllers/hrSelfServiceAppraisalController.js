const HrSelfServiceAppraisal = require("./../models/hrSelfServiceAppraisalModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr selfservice appraisals
exports.getAllHrSelfServiceAppraisals = factory.getAll(HrSelfServiceAppraisal);

//create a hr selfservice appraisal
exports.createHrSelfServiceAppraisal = factory.createOne(
  HrSelfServiceAppraisal
);

//get a hr selfservice appraisal
exports.getHrSelfServiceAppraisal = factory.getOne(HrSelfServiceAppraisal);

//deleting a hr selfservice appraisal
exports.deleteHrSelfServiceAppraisal = factory.deleteOne(
  HrSelfServiceAppraisal
);

//updating a hr selfservice appraisal
exports.updateHrSelfServiceAppraisal = factory.updateOne(
  HrSelfServiceAppraisal
);
