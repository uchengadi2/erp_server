const express = require("express");
const cors = require("cors");
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
const glHeadAccountRouter = require("./routes/glHeadAccountRoute");
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
const salesTaskRouter = require("./routes/salesTaskRoute");
const salesTeamTaskRouter = require("./routes/salesTeamTaskRoute");
const salesTransactionRouter = require("./routes/salesTransactionRoute");
const serviceOutletRouter = require("./routes/serviceOutletRoute");
const staffLoanAccountRouter = require("./routes/staffLoanAccountRoute");
const staffRewardAccountRouter = require("./routes/staffRewardAccountRoute");
const subGlAccountRouter = require("./routes/subGlHeadAccountRoute");
const teamRouter = require("./routes/teamRoute");
const uniqueProductAccountRouter = require("./routes/uniqueProductAccountRoute");
const schemeCodeRoute = require("./routes/schemeCodeRoute");
const countryRoute = require("./routes/countryRoute");
const stateRoute = require("./routes/stateRoute");
const currencyRoute = require("./routes/currencyRoute");
const locationRoute = require("./routes/locationRoute");
const transactionTypeRoute = require("./routes/transactionTypeRoute");
const officeOperationRoute = require("./routes/officeOperationRoute");
const subsidiaryLedgerAccountRoute = require("./routes/subsidiaryLedgerAccountsRoute");
const assetSubclassRoute = require("./routes/assetSubclassRoute");
const storeTypeRoute = require("./routes/storeTypeRoute");
const maintenanceTypeRoute = require("./routes/maintenanceTypeRoute");
const assetMeasurementUnitRoute = require("./routes/assetMeasurementUnitRoute");
const movementTypeRoute = require("./routes/movementTypeRoute");
const dispostionTypeRoute = require("./routes/assetDispositionTypeRoute");
const storeMaintenanceTypesRoute = require("./routes/storeMaintenanceTypeRoute");
const assetRoute = require("./routes/assetRoute");
const assetProcurementRoute = require("./routes/assetProcurementRoute");
const assetRequisitionRoute = require("./routes/assetRequisitionRoute");
const assetRetirementRoute = require("./routes/assetRetirementRoute");
const assetDispositionRoute = require("./routes/assetDispositionRoute");
const assetTransferRoute = require("./routes/assetTransferRoute");
const assetMaintenanceRoute = require("./routes/assetMaintenanceRoute");
const assetMovementRoute = require("./routes/assetMovementRoute");
const storeRoute = require("./routes/storeRoute");
const storeMaintenanceRoute = require("./routes/storeMaintenanceRoute");
const storeLeaseRoute = require("./routes/storeLeaseRoute");
const storeChangeOwnershipRoute = require("./routes/storeChangeOwnershipRoute");
const storeSpaceAllocationRoute = require("./routes/storeSpaceAllocationRoute");
const storeSellRoute = require("./routes/storeSellRoute");
const operationProcessingTypeRoute = require("./routes/operationProcessingTypeRoute");
const operationProcessingPhaseRoute = require("./routes/operationProcessingPhaseRoute");
const operationProcessingPhaseEventRoute = require("./routes/operationProcessingPhaseEventRoute");
const operationFinishingTypeRoute = require("./routes/operationFinishingTypeRoute");
const operationQualityAssuranceTypeRoute = require("./routes/operationQualityAssuranceTypeRoute");
const operationQualityAssurancePhaseRoute = require("./routes/operationQualityAssurancePhaseRoute");
const operationQualityAssurancePhaseEventRoute = require("./routes/operationQualityAssurancePhaseEventRoute");
const operationMaintenanceTypeRoute = require("./routes/operationMaintenanceTypeRoute");
const operationOperationRoute = require("./routes/operationOperationRoute");
const operationProcessingRoute = require("./routes/operationProcessingRoute");
const operationProcessingMaintenanceRoute = require("./routes/operationProcessingMaintenanceRoute");
const operationProductionMaintenanceRoute = require("./routes/operationProductionMaintenanceRoute");
const operationProcessingQualityAssuranceRoute = require("./routes/operationProcessingQualityAssuranceRoute");
const operationProductionQualityAssuranceRoute = require("./routes/operationProductionQualityAssuranceRoute");
const operationProcessingFinishingRoute = require("./routes/operationProcessingFinishingRoute");
const operationProductionFinishingRoute = require("./routes/operationProductionFinishingRoute");
const crmContactRoute = require("./routes/crmContactRoute");
const crmSupplierRoute = require("./routes/crmSupplierRoute");
const crmPartnerRoute = require("./routes/crmPartnerRoute");
const crmCustomerRoute = require("./routes/crmCustomerRoute");
const salesProductRoute = require("./routes/salesProductRoute");
const salesTeamRoute = require("./routes/salesTeamRoute");
const salesTeamMemberRoute = require("./routes/salesTeamMemberRoute");
const salesSalesRoute = require("./routes/salesSalesRoute");
const salesInvoiceRoute = require("./routes/salesInvoiceRoute");
const salesAccountRoute = require("./routes/salesAccountRoute");
const projectProjectRoute = require("./routes/projectProjectRoute");
const projectResourceRoute = require("./routes/projectResourceRoute");
const projectBudgetRoute = require("./routes/projectBudgetRoute");
const projectPlanningTaskRoute = require("./routes/projectPlanningTaskRoute");
const projectPlanningActivityRoute = require("./routes/projectPlanningActivityRoute");
const projectPlanningStepRoute = require("./routes/projectPlanningStepRoute");
const projectPlanningSequencingRoute = require("./routes/projectPlanningSequencingRoute");
const projectPlanningSchedulingRoute = require("./routes/projectPlanningSchedulingRoute");
const projectMonitoringTaskRoute = require("./routes/projectMonitoringTaskRoute");
const projectMonitoringActivityRoute = require("./routes/projectMonitoringActivityRoute");
const projectClosureProjectRoute = require("./routes/projectClosureProjectRoute");
const hrUnitRoute = require("./routes/hrUnitRoute");
const hrDepartmentRoute = require("./routes/hrDepartmentRoute");
const hrGroupRoute = require("./routes/hrGroupRoute");
const hrDivisionRoute = require("./routes/hrDivisionRoute");
const hrDesignationRoute = require("./routes/hrDesignationRoute");
const hrKpiSessionRoute = require("./routes/hrKpiSessionRoute");
const hrAppraisalSeasonRoute = require("./routes/hrAppraisalSeasonRoute");
const hrEmolumentPeriodRoute = require("./routes/hrEmolumentPeriodRoute");
const hrBonusRateRoute = require("./routes/hrBonusRateRoute");
const hrOvertimeRateRoute = require("./routes/hrOvertimeRateRoute");
const hrOrganizationLevelRoute = require("./routes/hrOrganizationLevelRoute");
const hrSalaryGradeRoute = require("./routes/hrSalaryGradeRoute");
const hrSalaryGradeDeductableRoute = require("./routes/hrSalaryGradeDeductableRoute");
const hrExtraDeductableRoute = require("./routes/hrExtraDeductableRoute");
const hrRoleRoute = require("./routes/hrRoleRoute");
const hrJobDescriptionRoute = require("./routes/hrJobDescriptionRoute");
const hrSkillsetRoute = require("./routes/hrSkillsetRoute");
const hrRecruitmentInitiationRoute = require("./routes/hrRecruitmentInitiationRoute");
const hrRecruitmentInterviewRoute = require("./routes/hrRecruitmentInterviewRoute");
const hrRecruitmentSelectionRoute = require("./routes/hrRecruitmentSelectionRoute");
const hrRecruitmentOnboardingRoute = require("./routes/hrRecruitmentOnboardingRoute");
const hrRecruitmentPlacementRoute = require("./routes/hrRecruitmentPlacementRoute");
const hrCompensationSalaryRoute = require("./routes/hrCompensationSalaryRoute");
const hrCompensationBonusRoute = require("./routes/hrCompensationBonusRoute");
const hrCompensationLeaveAllowanceRoute = require("./routes/hrCompensationLeaveAllowanceRoute");
const hrCompensationOvertimeRoute = require("./routes/hrCompensationOvertimeRoute");
const hrCompensationStaffLoanRoute = require("./routes/hrCompensationStaffLoanRoute");
const hrCompensationSalaryAdvanceRoute = require("./routes/hrCompensationSalaryAdvanceRoute");
const hrCompensationCertificateRefundRoute = require("./routes/hrCompensationCertificateRefundRoute");
const hrPerformanceAppraisalRoute = require("./routes/hrPerformanceAppraisalRoute");
const hrPerformancePerformanceRoute = require("./routes/hrPerformancePerformanceRoute");
const hrLeavesLeavesRoute = require("./routes/hrLeavesLeavesRoute");
const hrExitExitRoute = require("./routes/hrExitExitRoute");
const hrExitClearanceRoute = require("./routes/hrExitClearanceRoute");
const hrSelfServiceLeaveRoute = require("./routes/hrSelfServiceLeaveRoute");
const hrSelfServiceStaffLoanRoute = require("./routes/hrSelfServiceStaffLoanRoute");
const hrSelfServiceCertificateRefundRoute = require("./routes/hrSelfServiceCertificateRefundRoute");
const hrSelfServiceExitRoute = require("./routes/hrSelfServiceExitRoute");
const hrSelfServiceOvertimeRoute = require("./routes/hrSelfServiceOvertimeRoute");
const hrSelfServiceSalaryAdvanceRoute = require("./routes/hrSelfServiceSalaryAdvanceRoute");
const hrSelfServiceAppraisalRoute = require("./routes/hrSelfServiceAppraisalRoute");
const hrSelfServicePayslipRoute = require("./routes/hrSelfServicePayslipRoute");
const accountLedgerAssetSubLedgerRoute = require("./routes/accountLedgerAssetSubLedgerRoute");
const accountLedgerStockSubLedgerRoute = require("./routes/accountLedgerStockSubLedgerRoute");
const accountLedgerStaffSubLedgerRoute = require("./routes/accountLedgerStaffSubLedgerRoute");
const accountLedgerPartnerSubLedgerRoute = require("./routes/accountLedgerPartnerSubLedgerRoute");
const accountLedgerVendorSubLedgerRoute = require("./routes/accountLedgerVendorSubLedgerRoute");
const accountLedgerCustomerSubLedgerRoute = require("./routes/accountLedgerCustomerSubLedgerRoute");
const accountLedgerSupplierSubLedgerRoute = require("./routes/accountLedgerSupplierSubLedgerRoute");
const accountLedgerOfficeSubLedgerRoute = require("./routes/accountLedgerOfficeSubLedgerRoute");
const accountLedgerProductSubLedgerRoute = require("./routes/accountLedgerProductSubLedgerRoute");
const assetStockRoute = require("./routes/assetStockRoute");
const assetSetRoute = require("./routes/assetSetRoute");
const assetSetBatchRoute = require("./routes/assetSetBatchRoute");

const app = express();

//Cross Origin middleware
app.use(cors());
//app.use(cors({ origin: true, credentials: true }));

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
app.use("/api/v1/glheadaccounts", glHeadAccountRouter);
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
app.use("/api/v1/subglheadaccounts", subGlAccountRouter);
app.use("/api/v1/teams", teamRouter);
app.use("/api/v1/uniqueProductAccount", uniqueProductAccountRouter);
app.use("/api/v1/schemecodes", schemeCodeRoute);
app.use("/api/v1/countries", countryRoute);
app.use("/api/v1/states", stateRoute);
app.use("/api/v1/currencies", currencyRoute);
app.use("/api/v1/locations", locationRoute);
app.use("/api/v1/transactiontypes", transactionTypeRoute);
app.use("/api/v1/officeoperations", officeOperationRoute);
app.use("/api/v1/subsidiaryledgers", subsidiaryLedgerAccountRoute);
app.use("/api/v1/assetsubclasses", assetSubclassRoute);
app.use("/api/v1/storetypes", storeTypeRoute);
app.use("/api/v1/maintenancetypes", maintenanceTypeRoute);
app.use("/api/v1/assetmeasurementunits", assetMeasurementUnitRoute);
app.use("/api/v1/movementtypes", movementTypeRoute);
app.use("/api/v1/dispositiontypes", dispostionTypeRoute);
app.use("/api/v1/storemaintenancetypes", storeMaintenanceTypesRoute);
app.use("/api/v1/assets", assetRoute);
app.use("/api/v1/assetprocurements", assetProcurementRoute);
app.use("/api/v1/assetrequisitions", assetRequisitionRoute);
app.use("/api/v1/assetretirements", assetRetirementRoute);
app.use("/api/v1/assetdispositions", assetDispositionRoute);
app.use("/api/v1/assettransfers", assetTransferRoute);
app.use("/api/v1/assetmaintenances", assetMaintenanceRoute);
app.use("/api/v1/assetmovements", assetMovementRoute);
app.use("/api/v1/stores", storeRoute);
app.use("/api/v1/storemaintenances", storeMaintenanceRoute);
app.use("/api/v1/storeleases", storeLeaseRoute);
app.use("/api/v1/storechangeownerships", storeChangeOwnershipRoute);
app.use("/api/v1/storespaceallocations", storeSpaceAllocationRoute);
app.use("/api/v1/storesales", storeSellRoute);
app.use("/api/v1/operationprocessingtypes", operationProcessingTypeRoute);
app.use("/api/v1/operationprocessingphases", operationProcessingPhaseRoute);
app.use(
  "/api/v1/operationprocessingphaseevents",
  operationProcessingPhaseEventRoute
);

app.use("/api/v1/operationfinishingtypes", operationFinishingTypeRoute);
app.use(
  "/api/v1/operationqualityassurancetypes",
  operationQualityAssuranceTypeRoute
);
app.use(
  "/api/v1/operationqualityassurancephases",
  operationQualityAssurancePhaseRoute
);
app.use(
  "/api/v1/operationqualityassurancephaseevents",
  operationQualityAssurancePhaseEventRoute
);
app.use("/api/v1/operationmaintenancetypes", operationMaintenanceTypeRoute);

app.use("/api/v1/operationoperations", operationOperationRoute);
app.use("/api/v1/operationprocessings", operationProcessingRoute);
app.use(
  "/api/v1/operationprocessingmaintenances",
  operationProcessingMaintenanceRoute
);
app.use(
  "/api/v1/operationproductionmaintenances",
  operationProductionMaintenanceRoute
);
app.use(
  "/api/v1/operationprocessingqualityassurances",
  operationProcessingQualityAssuranceRoute
);
app.use(
  "/api/v1/operationproductionqualityassurances",
  operationProductionQualityAssuranceRoute
);
app.use(
  "/api/v1/operationprocessingfinishings",
  operationProcessingFinishingRoute
);
app.use(
  "/api/v1/operationproductionfinishings",
  operationProductionFinishingRoute
);

app.use("/api/v1/crmcontacts", crmContactRoute);

app.use("/api/v1/crmsuppliers", crmSupplierRoute);
app.use("/api/v1/crmpartners", crmPartnerRoute);
app.use("/api/v1/crmcustomers", crmCustomerRoute);
app.use("/api/v1/salesproducts", salesProductRoute);
app.use("/api/v1/salesteams", salesTeamRoute);
app.use("/api/v1/salesteammembers", salesTeamMemberRoute);
app.use("/api/v1/sales", salesSalesRoute);
app.use("/api/v1/salesinvoices", salesInvoiceRoute);
app.use("/api/v1/salesaccounts", salesAccountRoute);
app.use("/api/v1/projects", projectProjectRoute);
app.use("/api/v1/projectresources", projectResourceRoute);
app.use("/api/v1/projectbudgets", projectBudgetRoute);
app.use("/api/v1/projectplanningtasks", projectPlanningTaskRoute);
app.use("/api/v1/projectplanningactivities", projectPlanningActivityRoute);
app.use("/api/v1/projectplanningsteps", projectPlanningStepRoute);
app.use("/api/v1/projectplanningsequencings", projectPlanningSequencingRoute);
app.use("/api/v1/projectplanningschedulings", projectPlanningSchedulingRoute);
app.use("/api/v1/projectmonitoringtasks", projectMonitoringTaskRoute);
app.use("/api/v1/projectmonitoringactivities", projectMonitoringActivityRoute);
app.use("/api/v1/projectclosures", projectClosureProjectRoute);
app.use("/api/v1/hrunits", hrUnitRoute);
app.use("/api/v1/hrdepartments", hrDepartmentRoute);
app.use("/api/v1/hrgroups", hrGroupRoute);
app.use("/api/v1/hrdivisions", hrDivisionRoute);
app.use("/api/v1/hrdesignations", hrDesignationRoute);
app.use("/api/v1/hrkpisessions", hrKpiSessionRoute);
app.use("/api/v1/hrappraisalseasons", hrAppraisalSeasonRoute);
app.use("/api/v1/hremolumentperiods", hrEmolumentPeriodRoute);
app.use("/api/v1/hrbonusrates", hrBonusRateRoute);
app.use("/api/v1/hrovertimerates", hrOvertimeRateRoute);
app.use("/api/v1/hrorganizationlevels", hrOrganizationLevelRoute);

app.use("/api/v1/hrsalarygrades", hrSalaryGradeRoute);
app.use("/api/v1/hrsalarygradedeductables", hrSalaryGradeDeductableRoute);
app.use("/api/v1/hrextradeductables", hrExtraDeductableRoute);

app.use("/api/v1/hrroles", hrRoleRoute);

app.use("/api/v1/hrjobdescriptions", hrJobDescriptionRoute);

app.use("/api/v1/hrskillsets", hrSkillsetRoute);
app.use("/api/v1/hrrecruitmentinitiations", hrRecruitmentInitiationRoute);
app.use("/api/v1/hrrecruitmentinterviews", hrRecruitmentInterviewRoute);
app.use("/api/v1/hrrecruitmentselections", hrRecruitmentSelectionRoute);
app.use("/api/v1/hrrecruitmentonboarding", hrRecruitmentOnboardingRoute);
app.use("/api/v1/hrrecruitmentplacements", hrRecruitmentPlacementRoute);
app.use("/api/v1/hrcompensationsalaries", hrCompensationSalaryRoute);
app.use("/api/v1/hrcompensationbonuses", hrCompensationBonusRoute);
app.use(
  "/api/v1/hrcompensationleaveallowances",
  hrCompensationLeaveAllowanceRoute
);
app.use("/api/v1/hrcompensationovertimes", hrCompensationOvertimeRoute);

app.use("/api/v1/hrcompensationstaffloans", hrCompensationStaffLoanRoute);
app.use(
  "/api/v1/hrcompensationsalaryadvances",
  hrCompensationSalaryAdvanceRoute
);
app.use(
  "/api/v1/hrcompensationcertificaterefunds",
  hrCompensationCertificateRefundRoute
);
app.use("/api/v1/hrperformanceappraisals", hrPerformanceAppraisalRoute);
app.use("/api/v1/hrperformanceperformances", hrPerformancePerformanceRoute);
app.use("/api/v1/hrleavesleaves", hrLeavesLeavesRoute);
app.use("/api/v1/hrexitexits", hrExitExitRoute);
app.use("/api/v1/hrexitclearances", hrExitClearanceRoute);
app.use("/api/v1/hrselfserviceleaves", hrSelfServiceLeaveRoute);
app.use("/api/v1/hrselfservicestaffloans", hrSelfServiceStaffLoanRoute);
app.use(
  "/api/v1/hrselfservicecertificaterefunds",
  hrSelfServiceCertificateRefundRoute
);
app.use("/api/v1/hrselfserviceexits", hrSelfServiceExitRoute);
app.use("/api/v1/hrselfserviceovertimes", hrSelfServiceOvertimeRoute);
app.use("/api/v1/hrselfservicesalaryadvances", hrSelfServiceSalaryAdvanceRoute);
app.use("/api/v1/hrselfserviceappraisals", hrSelfServiceAppraisalRoute);
app.use("/api/v1/hrselfservicepayslips", hrSelfServicePayslipRoute);
app.use(
  "/api/v1/accountledgerassetsubledgers",
  accountLedgerAssetSubLedgerRoute
);

app.use(
  "/api/v1/accountledgerstocksubledgers",
  accountLedgerStockSubLedgerRoute
);
app.use(
  "/api/v1/accountledgerstaffsubledgers",
  accountLedgerStaffSubLedgerRoute
);
app.use(
  "/api/v1/accountledgerpartnersubledgers",
  accountLedgerPartnerSubLedgerRoute
);

app.use(
  "/api/v1/accountledgervendorsubledgers",
  accountLedgerVendorSubLedgerRoute
);

app.use(
  "/api/v1/accountledgercustomersubledgers",
  accountLedgerCustomerSubLedgerRoute
);

app.use(
  "/api/v1/accountledgersuppliersubledgers",
  accountLedgerSupplierSubLedgerRoute
);
app.use(
  "/api/v1/accountledgerofficesubledgers",
  accountLedgerOfficeSubLedgerRoute
);

app.use(
  "/api/v1/accountledgerproductsubledgers",
  accountLedgerProductSubLedgerRoute
);
app.use("/api/v1/assetstocks", assetStockRoute);
app.use("/api/v1/assetsets", assetSetRoute);
app.use("/api/v1/assetsetbatches", assetSetBatchRoute);

//tackling unhandled routes in the application
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

//SERVER

module.exports = app;
