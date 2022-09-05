const express = require("express");
const hrCompensationCertificateRefundController = require("./../controllers/hrCompensationCertificateRefundController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrCompensationCertificateRefundController.getAllHrCompensationCertificateRefunds
  )
  .post(
    authController.restrictTo("user"),
    hrCompensationCertificateRefundController.createHrCompenaationCertificateRefund
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrCompensationCertificateRefundController.deleteHrCompensationCertificateRefund
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrCompensationCertificateRefundController.updateHrCompensationCertificateRefund
  )
  .get(
    hrCompensationCertificateRefundController.getHrCompensationCertificateRefund
  );

module.exports = router;
