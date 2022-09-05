const express = require("express");
const hrSelfServiceAppraisalController = require("./../controllers/hrSelfServiceAppraisalController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrSelfServiceAppraisalController.getAllHrSelfServiceAppraisals
  )
  .post(
    authController.restrictTo("user"),
    hrSelfServiceAppraisalController.createHrSelfServiceAppraisal
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrSelfServiceAppraisalController.deleteHrSelfServiceAppraisal
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrSelfServiceAppraisalController.updateHrSelfServiceAppraisal
  )
  .get(hrSelfServiceAppraisalController.getHrSelfServiceAppraisal);

module.exports = router;
