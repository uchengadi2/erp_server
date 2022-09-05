const express = require("express");
const hrSelfServiceCertificateRefundController = require("./../controllers/hrSelfServiceCertificateRefundController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrSelfServiceCertificateRefundController.getAllHrSelfServiceCertificateRefunds
  )
  .post(
    authController.restrictTo("user"),
    hrSelfServiceCertificateRefundController.createHrSelfServiceCertificateRefund
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrSelfServiceCertificateRefundController.deleteHrSelfServiceCertificateRefund
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrSelfServiceCertificateRefundController.updateHrSelfServiceCertificateRefund
  )
  .get(
    hrSelfServiceCertificateRefundController.getHrSelfServiceCertificateRefund
  );

module.exports = router;
