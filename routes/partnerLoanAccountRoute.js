const express = require("express");
const PartnerLoanAccountController = require("./../controllers/partnerLoanAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    PartnerLoanAccountController.getAllPartnerLoanAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    PartnerLoanAccountController.createPartnerLoanAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    PartnerLoanAccountController.deletePartnerLoanAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    PartnerLoanAccountController.updatePartnerLoanAccount
  )
  .get(PartnerLoanAccountController.getPartnerLoanAccount);

module.exports = router;
