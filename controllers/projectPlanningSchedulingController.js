const ProjectPlanningScheduling = require("./../models/projectPlanningSchedulingModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all project schedulings
exports.getAllProjectPlanningSchedulings = factory.getAll(
  ProjectPlanningScheduling
);

//create a project scheduling
exports.createProjectPlanningScheduling = factory.createOne(
  ProjectPlanningScheduling
);

//get a project scheduling
exports.getProjectPlanningScheduling = factory.getOne(
  ProjectPlanningScheduling
);

//deleting a project scheduling
exports.deleteProjectPlanningScheduling = factory.deleteOne(
  ProjectPlanningScheduling
);

//updating a project scheduling
exports.updateProjectPlanningScheduling = factory.updateOne(
  ProjectPlanningScheduling
);
