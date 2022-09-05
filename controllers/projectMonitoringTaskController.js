const ProjectMonitoringTask = require("./../models/projectMonitoringTaskModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all project monitorings
exports.getAllProjectMonitoringTasks = factory.getAll(ProjectMonitoringTask);

//create a project monitoring
exports.createProjectMonitoringTask = factory.createOne(ProjectMonitoringTask);

//get a project monitoring
exports.getProjectMonitoringTask = factory.getOne(ProjectMonitoringTask);

//deleting a project monitoring
exports.deleteProjectMonitoringTask = factory.deleteOne(ProjectMonitoringTask);

//updating a project monitoring
exports.updateProjectMonitoringTask = factory.updateOne(ProjectMonitoringTask);
