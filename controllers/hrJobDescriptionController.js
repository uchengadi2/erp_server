const HrJobDescription = require("./../models/hrJobDescriptionModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr job description
exports.getAllHrJobDescriptions = factory.getAll(HrJobDescription);

//create a hr job description
exports.createHrJobDescription = factory.createOne(HrJobDescription);

//get a hr job description
exports.getHrJobDescription = factory.getOne(HrJobDescription);

//deleting a hr job description
exports.deleteHrJobDescription = factory.deleteOne(HrJobDescription);

//updating a hr job description
exports.updateHrJobDescription = factory.updateOne(HrJobDescription);
