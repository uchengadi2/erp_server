const HrDepartment = require("./../models/hrDepartmentModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr departments
exports.getAllHrDepartments = factory.getAll(HrDepartment);

//create a hr department
exports.createHrDepartment = factory.createOne(HrDepartment);

//get a hr department
exports.getHrDepartment = factory.getOne(HrDepartment);

//deleting a hr department
exports.deleteHrDepartment = factory.deleteOne(HrDepartment);

//updating a hr department
exports.updateHrDepartment = factory.updateOne(HrDepartment);
