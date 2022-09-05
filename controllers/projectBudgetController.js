const ProjectBudget = require("./../models/projectBudgetModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all project budgets
exports.getAllProjectBudgets = factory.getAll(ProjectBudget);

//create a project budget
exports.createProjectBudget = factory.createOne(ProjectBudget);

//get a project budget
exports.getProjectBudget = factory.getOne(ProjectBudget);

//deleting a project budget
exports.deleteProjectBudget = factory.deleteOne(ProjectBudget);

//updating a project budget
exports.updateProjectBudget = factory.updateOne(ProjectBudget);
