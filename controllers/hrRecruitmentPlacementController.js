const HrRecruitmentPlacement = require("./../models/hrRecruitmentPlacementModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr recruitment placements
exports.getAllHrRecruitmentPlacements = factory.getAll(HrRecruitmentPlacement);

//create a hr recruitment placement
exports.createHrRecruitmentPlacement = factory.createOne(
  HrRecruitmentPlacement
);

//get a hr recruitment placement
exports.getHrRecruitmentPlacement = factory.getOne(HrRecruitmentPlacement);

//deleting a hr recruitment placement
exports.deleteHrRecruitmentPlacement = factory.deleteOne(
  HrRecruitmentPlacement
);

//updating a hr recruitment placement
exports.updateHrRecruitmentPlacement = factory.updateOne(
  HrRecruitmentPlacement
);
