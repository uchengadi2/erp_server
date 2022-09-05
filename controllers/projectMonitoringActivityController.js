const ProjectMonitoringActivity = require("./../models/projectMonitoringActivityModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all project monitoring activities
exports.getAllProjectMonitoringActivities = factory.getAll(
  ProjectMonitoringActivity
);

//create a project monitoring activity
exports.createProjectMonitoringActivity = factory.createOne(
  ProjectMonitoringActivity
);

//get a project monitoring activity
exports.getProjectMonitoringActivity = factory.getOne(
  ProjectMonitoringActivity
);

//deleting a project monitoring activity
exports.deleteProjectMonitoringActivity = factory.deleteOne(
  ProjectMonitoringActivity
);

//updating a project monitoring activity
exports.updateProjectMonitoringActivity = factory.updateOne(
  ProjectMonitoringActivity
);
