const HrRole = require("./../models/hrRoleModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr roles
exports.getAllHrRoles = factory.getAll(HrRole);

//create a hr role
exports.createHrRole = factory.createOne(HrRole);

//get a hr role
exports.getHrRole = factory.getOne(HrRole);

//deleting a hr role
exports.deleteHrRole = factory.deleteOne(HrRole);

//updating a hr role
exports.updateHrRole = factory.updateOne(HrRole);
