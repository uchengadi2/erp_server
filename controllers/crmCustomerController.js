const CrmCustomer = require("./../models/crmCustomerModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all crm customers
exports.getAllCrmCustomers = factory.getAll(CrmCustomer);

//create a crm customer
exports.createCrmCustomer = factory.createOne(CrmCustomer);

//get a crm customer
exports.getCrmCustomer = factory.getOne(CrmCustomer);

//deleting a crm customer
exports.deleteCrmCustomer = factory.deleteOne(CrmCustomer);

//updating a crm customer
exports.updateCrmCustomer = factory.updateOne(CrmCustomer);
