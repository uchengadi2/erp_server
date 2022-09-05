const ProjectPlanningActivity = require("./../models/projectPlanningActivityModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all project activities
exports.getAllProjectPlanningActivities = factory.getAll(
  ProjectPlanningActivity
);

//create a project activity
exports.createProjectPlanningActivity = factory.createOne(
  ProjectPlanningActivity
);

//get a project activity
exports.getProjectPlanningActivity = factory.getOne(ProjectPlanningActivity);

//deleting a project activity
exports.deleteProjectPlanningActivity = factory.deleteOne(
  ProjectPlanningActivity
);

//updating a project activity
exports.updateProjectPlanningActivity = factory.updateOne(
  ProjectPlanningActivity
);
