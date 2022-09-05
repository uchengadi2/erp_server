const SalesInvoice = require("./../models/salesInvoiceModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

// exports.setAccountTransactionsAndUserId = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId; //revisit this
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

//get all sales invoices
exports.getAllSalesInvoices = factory.getAll(SalesInvoice);

//create a sales invoice
exports.createSalesInvoice = factory.createOne(SalesInvoice);

//get a sales invoice
exports.getSalesInvoice = factory.getOne(SalesInvoice);

//deleting a sales invoice
exports.deleteSalesInvoice = factory.deleteOne(SalesInvoice);

//updating a sales invoice
exports.updateSalesInvoice = factory.updateOne(SalesInvoice);
