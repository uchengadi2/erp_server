const express = require("express");
const SchemeCodeController = require("../controllers/schemeCodeController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "accountsAdmin"),
    SchemeCodeController.getAllSchemeCode
  )
  .post(
    authController.restrictTo("admin", "accountsAdmin"),
    SchemeCodeController.createSchemeCode
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("accountsAdmin", "admin"),
    SchemeCodeController.deleteSchemeCode
  )
  .patch(
    authController.restrictTo("accountsAdmin", "admin"),
    SchemeCodeController.updateSchemeCode
  )
  .get(SchemeCodeController.getSchemeCode);

module.exports = router;
