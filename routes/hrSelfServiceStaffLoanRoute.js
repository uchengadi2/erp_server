const express = require("express");
const hrSelfServiceStaffLoanController = require("./../controllers/hrSelfServiceStaffLoanController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrSelfServiceStaffLoanController.getAllHrSelfServiceStaffLoans
  )
  .post(
    authController.restrictTo("user"),
    hrSelfServiceStaffLoanController.createHrSelfServiceStaffLoan
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrSelfServiceStaffLoanController.deleteHrSelfServiceStaffLoan
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrSelfServiceStaffLoanController.updateHrSelfServiceStaffLoan
  )
  .get(hrSelfServiceStaffLoanController.getHrSelfServiceStaffLoan);

module.exports = router;
