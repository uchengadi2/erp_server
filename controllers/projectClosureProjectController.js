const ProjectClosureProject = require("./../models/projectClosureProjectModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all project closures
exports.getAllProjectClosures = factory.getAll(ProjectClosureProject);

//create a project cousre
exports.createProjectClosure = factory.createOne(ProjectClosureProject);

//get a project closure
exports.getProjectClosure = factory.getOne(ProjectClosureProject);

//deleting a project closure
exports.deleteProjectClosure = factory.deleteOne(ProjectClosureProject);

//updating a project closure
exports.updateProjectClosure = factory.updateOne(ProjectClosureProject);
