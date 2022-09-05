const express = require("express");
const hrCompensationStaffLoanController = require("./../controllers/hrCompensationStaffLoanController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrCompensationStaffLoanController.getAllHrCompensationStaffLoans
  )
  .post(
    authController.restrictTo("user"),
    hrCompensationStaffLoanController.createHrCompenaationStaffLoan
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrCompensationStaffLoanController.deleteHrCompensationStaffLoan
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrCompensationStaffLoanController.updateHrCompensationStaffLoan
  )
  .get(hrCompensationStaffLoanController.getHrCompensationStaffLoan);

module.exports = router;
