const HrDesignation = require("./../models/hrDesignationModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr designations
exports.getAllHrDesignations = factory.getAll(HrDesignation);

//create a hr designation
exports.createHrDesignation = factory.createOne(HrDesignation);

//get a hr designation
exports.getHrDesignation = factory.getOne(HrDesignation);

//deleting a hr designation
exports.deleteHrDesignation = factory.deleteOne(HrDesignation);

//updating a hr designation
exports.updateHrDesignation = factory.updateOne(HrDesignation);
