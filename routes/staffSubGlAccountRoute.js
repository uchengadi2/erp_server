const express = require("express");
const StaffSubGlAccountController = require("./../controllers/staffSubGlAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    StaffSubGlAccountController.getAllStaffSubGlAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    StaffSubGlAccountController.createStaffSubGlAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    StaffSubGlAccountController.deleteStaffSubGlAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    StaffSubGlAccountController.updateStaffSubGlAccount
  )
  .get(StaffSubGlAccountController.getStaffSubGlAccount);

module.exports = router;
