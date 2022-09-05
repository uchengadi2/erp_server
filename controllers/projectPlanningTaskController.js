const ProjectPlanningTask = require("./../models/projectPlanningTaskModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all project tasks
exports.getAllProjectPlanningTasks = factory.getAll(ProjectPlanningTask);

//create a project task
exports.createProjectPlanningTask = factory.createOne(ProjectPlanningTask);

//get a project task
exports.getProjectPlanningTask = factory.getOne(ProjectPlanningTask);

//deleting a project task
exports.deleteProjectPlanningTask = factory.deleteOne(ProjectPlanningTask);

//updating a project task
exports.updateProjectPlanningTask = factory.updateOne(ProjectPlanningTask);
