const HrSalaryGrade = require("./../models/hrSalaryGradeModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all hr salary grades
exports.getAllHrSalaryGrades = factory.getAll(HrSalaryGrade);

//create a hr salary grade
exports.createHrSalaryGrade = factory.createOne(HrSalaryGrade);

//get a hr salary grade
exports.getHrSalaryGrade = factory.getOne(HrSalaryGrade);

//deleting a hr salary grade
exports.deleteHrSalaryGrade = factory.deleteOne(HrSalaryGrade);

//updating a hr salary grade
exports.updateHrSalaryGrade = factory.updateOne(HrSalaryGrade);
