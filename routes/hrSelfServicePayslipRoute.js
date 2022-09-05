const express = require("express");
const hrSelfServicePayslipController = require("./../controllers/hrSelfServicePayslipController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrSelfServicePayslipController.getAllHrSelfServicePayslips
  )
  .post(
    authController.restrictTo("user"),
    hrSelfServicePayslipController.createHrSelfServicePayslip
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrSelfServicePayslipController.deleteHrSelfServicePayslip
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrSelfServicePayslipController.updateHrSelfServicePayslip
  )
  .get(hrSelfServicePayslipController.getHrSelfServicePayslip);

module.exports = router;
