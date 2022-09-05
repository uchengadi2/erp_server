const HrRecruitmentOnboarding = require("./../models/hrRecruitmentOnboardingModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr recruitment onboarding
exports.getAllHrRecruitmentOnboardings = factory.getAll(
  HrRecruitmentOnboarding
);

//create a hr recruitment onboarding
exports.createHrRecruitmentOnboarding = factory.createOne(
  HrRecruitmentOnboarding
);

//get a hr recruitment onboarding
exports.getHrRecruitmentOnboarding = factory.getOne(HrRecruitmentOnboarding);

//deleting a hr recruitment onboarding
exports.deleteHrRecruitmentOnboarding = factory.deleteOne(
  HrRecruitmentOnboarding
);

//updating a hr recruitment onboarding
exports.updateHrRecruitmentOnboarding = factory.updateOne(
  HrRecruitmentOnboarding
);
