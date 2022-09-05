const HrOrganizationLevel = require("./../models/hrOrganizationLevelModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr orgaization levels
exports.getAllHrOrganizationLevels = factory.getAll(HrOrganizationLevel);

//create a hr orgaization level
exports.createHrOrganizationLevel = factory.createOne(HrOrganizationLevel);

//get a hr orgaization level
exports.getHrOrganizationLevel = factory.getOne(HrOrganizationLevel);

//deleting a hr orgaization level
exports.deleteHrOrganizationLevel = factory.deleteOne(HrOrganizationLevel);

//updating a hr orgaization level
exports.updateHrOrganizationlevel = factory.updateOne(HrOrganizationLevel);
