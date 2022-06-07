const express = require("express");
const StaffLoanAccountController = require("./../controllers/staffLoanAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    StaffLoanAccountController.getAllStaffLoanAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    StaffLoanAccountController.createStaffLoanAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    StaffLoanAccountController.deleteStaffLoanAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    StaffLoanAccountController.updateStaffLoanAccount
  )
  .get(StaffLoanAccountController.getStaffLoanAccount);

module.exports = router;
