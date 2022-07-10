const express = require("express");
const GlHeadAccountController = require("../controllers/glHeadAccountController");
const authController = require("../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    GlHeadAccountController.getAllGlHeadAccounts
  )
  .post(
    authController.restrictTo("admin"),
    //cashAccountController.setAccountTransactionsAndUserId,
    GlHeadAccountController.createGlHeadAccount
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    GlHeadAccountController.deleteGlHeadAccount
  )
  .patch(
    authController.restrictTo("user", "admin"),
    GlHeadAccountController.updateGlHeadAccount
  )
  .get(GlHeadAccountController.getGlHeadAccount);

module.exports = router;
