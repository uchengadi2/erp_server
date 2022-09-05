const ProjectPlanningStep = require("./../models/projectPlanningStepModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all project steps
exports.getAllProjectPlanningSteps = factory.getAll(ProjectPlanningStep);

//create a project step
exports.createProjectPlanningStep = factory.createOne(ProjectPlanningStep);

//get a project step
exports.getProjectPlanningStep = factory.getOne(ProjectPlanningStep);

//deleting a project step
exports.deleteProjectPlanningStep = factory.deleteOne(ProjectPlanningStep);

//updating a project step
exports.updateProjectPlanningStep = factory.updateOne(ProjectPlanningStep);
