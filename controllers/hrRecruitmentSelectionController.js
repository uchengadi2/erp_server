const HrRecruitmentSelection = require("./../models/hrRecruitmentSelectionModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr recruitment selections
exports.getAllHrRecruitmentSelections = factory.getAll(HrRecruitmentSelection);

//create a hr recruitment selection
exports.createHrRecruitmentSelection = factory.createOne(
  HrRecruitmentSelection
);

//get a hr recruitment selection
exports.getHrRecruitmentSelection = factory.getOne(HrRecruitmentSelection);

//deleting a hr recruitment selection
exports.deleteHrRecruitmentSelection = factory.deleteOne(
  HrRecruitmentSelection
);

//updating a hr recruitment selection
exports.updateHrRecruitmentSelection = factory.updateOne(
  HrRecruitmentSelection
);
