const express = require("express");
const PartnerSubGlAccountController = require("./../controllers/partnerSubGlAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    PartnerSubGlAccountController.getAllPartnerSubGlAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    PartnerSubGlAccountController.createPartnerSubGlAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    PartnerSubGlAccountController.deletePartnerSubGlAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    PartnerSubGlAccountController.updatePartnerSubGlAccount
  )
  .get(PartnerSubGlAccountController.getPartnerSubGlAccount);

module.exports = router;
