const HrCompensationSalary = require("./../models/hrCompensationSalaryModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr compensation salaries
exports.getAllHrCompensationSalaries = factory.getAll(HrCompensationSalary);

//create a hr compensation salary
exports.createHrCompenaationSalary = factory.createOne(HrCompensationSalary);

//get a hr compensation salary
exports.getHrCompensationSalary = factory.getOne(HrCompensationSalary);

//deleting a hr compensation salary
exports.deleteHrCompensationSalary = factory.deleteOne(HrCompensationSalary);

//updating a hr compensation salary
exports.updateHrCompensationSalary = factory.updateOne(HrCompensationSalary);
