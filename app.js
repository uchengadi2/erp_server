const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const accountTransactionsRouter = require("./routes/accountTransactionsRoute");
const userRouter = require("./routes/userRoute");
const assetTypeRouter = require("./routes/assetTypeRoute");
const cashAccountRouter = require("./routes/cashAccountRoute");
const cashSubGlAccountRouter = require("./routes/cashSubGlAccountRoute");
const charcoalAssetSeriesRouter = require("./routes/charcoalAssetSeriesRoute");
const charcoalAssetSlotRouter = require("./routes/charcoalAssetSlotRoute");
const cityRouter = require("./routes/cityRoute");
const commodityAssetSeriesRouter = require("./routes/commodityAssetSeriesRoute");
const commodityAssetSlotRouter = require("./routes/commodityAssetSlotRoute");
const currentAssetAccountRouter = require("./routes/currentAssetAccountRoute");
const currentAssetDepreciationAccountRouter = require("./routes/currentAssetDepreciationAccountRoute");
const currentAssetMaintenanceAccountRouter = require("./routes/currentAssetMaintenanceAccountRoute");
const currentAssetMiscellaneousAccountRouter = require("./routes/currentAssetMiscellaneousAccountRoute");
const currentAssetSubGlAccountRouter = require("./routes/currentAssetSubGlAccountRoute");
const customerLoanAccountRouter = require("./routes/customerLoanAccountRoute");
const customerSubGlAccountRouter = require("./routes/customerSubGlAccountRoute");
const customerTransactionalAccountRouter = require("./routes/customerTransactionalAccountRoute");
const escalateTransactionIssueRouter = require("./routes/escalateTransactionIssueRoute");
const fixedAssetAccountRouter = require("./routes/fixedAssetAccountRoute");
const fixedAssetDepreciationAccountRouter = require("./routes/fixedAssetDepreciationAccountRoute");
const fixedAssetMaintenanceAccountRouter = require("./routes/fixedAssetMaintenanceAccountRoute");
const fixedAssetMiscellaneousAccountRouter = require("./routes/fixedAssetMiscellaneousAccountRoute");
const fixedAssetSubGlAccountRouter = require("./routes/fixedAssetSubGlAccountRoute");
const glAccountRouter = require("./routes/glAccountRoute");
const inventorableLivestockAssetSeriesRouter = require("./routes/inventorableLivestockAssetSeriesRoute");
const inventorableLivestockAssetSlotRouter = require("./routes/inventorableLivestockAssetSlotRoute");
const livestockAssetSeriesRouter = require("./routes/livestockAssetSeriesRoute");
const livestockAssetSlotRouter = require("./routes/livestockAssetSlotRoute");
const partnerLoanAccountRouter = require("./routes/partnerLoanAccountRoute");
const partnerSubGlAccountRouter = require("./routes/partnerSubGlAccountRoute");
const partnerTransactionalAccountRouter = require("./routes/partnerTransactionalAccountRoute");
const plantationAssetSeriesRouter = require("./routes/plantationAssetSeriesRoute");
const productSubGlAccountRouter = require("./routes/productSubGlAccountRoute");
const productTypeRouter = require("./routes/productTypeRoute");
const productRouter = require("./routes/productRoute");
const salesTaskRouter = require("./routes/SalesTaskRoute");
const salesTeamTaskRouter = require("./routes/SalesTeamTaskRoute");
const salesTransactionRouter = require("./routes/SalesTransactionRoute");
const serviceOutletRouter = require("./routes/ServiceOutletRoute");
const staffLoanAccountRouter = require("./routes/staffLoanAccountRoute");
const staffRewardAccountRouter = require("./routes/staffRewardAccountRoute");
const staffSubGlAccountRouter = require("./routes/staffSubGlAccountRoute");
const teamRouter = require("./routes/teamRoute");
const uniqueProductAccountRouter = require("./routes/uniqueProductAccountRoute");

const app = express();

//GLOBAL MIDDLEWARES

//SET SECURITY HTTP HEADERS
app.use(helmet());

//DEVELOPMENT LOGIN;
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP, Please try again in an hour",
});

//LIMIT REQUEST FROM SAME DOMAIN
app.use("/api", limiter);

//ABOUT THE BODY PARSER. READING DATA INTO req.body

app.use(express.json({ limit: "10kb" })); //This is a middleware

//DATA SANITIZATION AGAINST NOSQL QUERY INJECTION
app.use(mongoSanitize());

//DATA SANITIZATION AGAINST XSS
app.use(xss());

//PREVENT PARAMETER POLLUTION
app.use(
  hpp({
    whitelist: [
      "duration",
      "ratingsAverage",
      "ratingsAverage",
      "macGroupSize",
      "difficulty",
      "price",
    ],
  })
);

//SERVING STATIC FILES
app.use(express.static(`${__dirname}/starter/public`)); // accessing static files

app.use((req, res, next) => {
  //define  property on the request object
  req.requestTime = new Date().toISOString();
  next();
});

//ROUTES

app.use("/api/v1/accounttrans", accountTransactionsRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/assettypes", assetTypeRouter);
app.use("/api/v1/cashaccounts", cashAccountRouter);
app.use("/api/v1/cashsubglaccounts", cashSubGlAccountRouter);
app.use("/api/v1/charcoalassetseries", charcoalAssetSeriesRouter);
app.use("/api/v1/charcoalassetslots", charcoalAssetSlotRouter);
app.use("/api/v1/cities", cityRouter);
app.use("/api/v1/commodityassetseries", commodityAssetSeriesRouter);
app.use("/api/v1/commodityassetslot", commodityAssetSlotRouter);
app.use("/api/v1/currentassetaccounts", currentAssetAccountRouter);
app.use(
  "/api/v1/currentassetdepreciationaccounts",
  currentAssetDepreciationAccountRouter
);
app.use(
  "/api/v1/currentassetmaintenanceaccounts",
  currentAssetMaintenanceAccountRouter
);
app.use(
  "/api/v1/currentassetmiscellaneousaccounts",
  currentAssetMiscellaneousAccountRouter
);

//tackling unhandled routes in the application
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});
app.use("/api/v1/currentassetsubglaccounts", currentAssetSubGlAccountRouter);
app.use("/api/v1/customerloanaccounts", customerLoanAccountRouter);
app.use("/api/v1/customersubglaccounts", customerSubGlAccountRouter);
app.use(
  "/api/v1/customertransactionalaccounts",
  customerTransactionalAccountRouter
);
app.use("/api/v1/escalatedtransactionalissues", escalateTransactionIssueRouter);
app.use("/api/v1/fixedassetaccounts", fixedAssetAccountRouter);
app.use(
  "/api/v1/fixedassetdepreciationaccounts",
  fixedAssetDepreciationAccountRouter
);
app.use(
  "/api/v1/fixedassetmaintenanceaccounts",
  fixedAssetMaintenanceAccountRouter
);
app.use(
  "/api/v1/fixedassetmiscellaneousaccounts",
  fixedAssetMiscellaneousAccountRouter
);
app.use("/api/v1/fixedassetsubglaccounts", fixedAssetSubGlAccountRouter);
app.use("/api/v1/glaccounts", glAccountRouter);
app.use(
  "/api/v1/inventorablelivestockassetseries",
  inventorableLivestockAssetSeriesRouter
);
app.use(
  "/api/v1/inventorablelivestockassetslots",
  inventorableLivestockAssetSlotRouter
);
app.use("/api/v1/livestockassetseries", livestockAssetSeriesRouter);
app.use("/api/v1/livestockassetslots", livestockAssetSlotRouter);
app.use("/api/v1/partnerloanaccounts", partnerLoanAccountRouter);
app.use("/api/v1/partnersubglaccounts", partnerSubGlAccountRouter);
app.use(
  "/api/v1/partnertransactionalaccounts",
  partnerTransactionalAccountRouter
);
app.use("/api/v1/plantationassetseries", plantationAssetSeriesRouter);
app.use("/api/v1/producttypes", productTypeRouter);
app.use("/api/v1/serviceoutlets", serviceOutletRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/productsubglaccounts", productSubGlAccountRouter);
app.use("/api/v1/salestasks", salesTaskRouter);
app.use("/api/v1/salesteamtasks", salesTeamTaskRouter);
app.use("/api/v1/salestransactions", salesTransactionRouter);
app.use("/api/v1/staffloanaccounts", staffLoanAccountRouter);
app.use("/api/v1/staffrewardaccounts", staffRewardAccountRouter);
app.use("/api/v1/staffsubglaccounts", staffSubGlAccountRouter);
app.use("/api/v1/teams", teamRouter);
app.use("/api/v1/uniqueProductAccount", uniqueProductAccountRouter);

app.use(globalErrorHandler);

//SERVER

module.exports = app;
