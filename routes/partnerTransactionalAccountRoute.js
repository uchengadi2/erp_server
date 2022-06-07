const express = require("express");
const PartnerTransactionalAccountController = require("./../controllers/partnerTransactionalAccountController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    PartnerTransactionalAccountController.getAllPartnerTransactionalAccounts
  )
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    PartnerTransactionalAccountController.createPartnerTransactionalAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    PartnerTransactionalAccountController.deletePartnerTransactionalAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    PartnerTransactionalAccountController.updatePartnerTransactionalAccount
  )
  .get(PartnerTransactionalAccountController.getPartnerTransactionalAccount);

module.exports = router;
