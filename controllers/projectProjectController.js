const ProjectProject = require("./../models/projectProjectModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all projects
exports.getAllProjects = factory.getAll(ProjectProject);

//create a project
exports.createProject = factory.createOne(ProjectProject);

//get a project
exports.getProject = factory.getOne(ProjectProject);

//deleting a project
exports.deleteProject = factory.deleteOne(ProjectProject);

//updating a project
exports.updateProject = factory.updateOne(ProjectProject);
