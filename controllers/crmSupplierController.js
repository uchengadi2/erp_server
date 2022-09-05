const CrmSupplier = require("./../models/crmSupplierModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all crm suppliers
exports.getAllCrmSuppliers = factory.getAll(CrmSupplier);

//create a crm supplier
exports.createCrmSupplier = factory.createOne(CrmSupplier);

//get a crm supplier
exports.getCrmSupplier = factory.getOne(CrmSupplier);

//deleting a crm supplier
exports.deleteCrmSupplier = factory.deleteOne(CrmSupplier);

//updating a crm supplier
exports.updateCrmSupplier = factory.updateOne(CrmSupplier);
