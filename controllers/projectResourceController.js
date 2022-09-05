const ProjectResource = require("./../models/projectResourceModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all project resources
exports.getAllProjectResources = factory.getAll(ProjectResource);

//create a project resource
exports.createProjectResource = factory.createOne(ProjectResource);

//get a project resource
exports.getProjectResource = factory.getOne(ProjectResource);

//deleting a project resource
exports.deleteProjectResource = factory.deleteOne(ProjectResource);

//updating a project resource
exports.updateProjectResource = factory.updateOne(ProjectResource);
