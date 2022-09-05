const ProjectPlanningSequencing = require("./../models/projectPlanningSequencingModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all project sequencings
exports.getAllProjectPlanningSequencings = factory.getAll(
  ProjectPlanningSequencing
);

//create a project sequencing
exports.createProjectPlanningSequencing = factory.createOne(
  ProjectPlanningSequencing
);

//get a project sequencing
exports.getProjectPlanningSequencing = factory.getOne(
  ProjectPlanningSequencing
);

//deleting a project sequencing
exports.deleteProjectPlanningSequencing = factory.deleteOne(
  ProjectPlanningSequencing
);

//updating a project sequencing
exports.updateProjectPlanningSequencing = factory.updateOne(
  ProjectPlanningSequencing
);
