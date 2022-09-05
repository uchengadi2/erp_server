const SalesTeamMember = require("./../models/salesTeamMemberModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all sales team members
exports.getAllSalesTeamMembers = factory.getAll(SalesTeamMember);

//create a sales team member
exports.createSalesTeamMember = factory.createOne(SalesTeamMember);

//get a sales team member
exports.getSalesTeamMember = factory.getOne(SalesTeamMember);

//deleting a sales team member
exports.deleteSalesTeamMember = factory.deleteOne(SalesTeamMember);

//updating a sales team member
exports.updateSalesTeamMember = factory.updateOne(SalesTeamMember);
