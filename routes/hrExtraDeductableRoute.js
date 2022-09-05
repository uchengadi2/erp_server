const express = require("express");
const hrExtraDeductableController = require("./../controllers/hrExtraDeductableController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrExtraDeductableController.getAllHrExtrDeductables
  )
  .post(
    authController.restrictTo("user"),
    hrExtraDeductableController.createHrExtrDeductable
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrExtraDeductableController.deleteHrExtraDeductable
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrExtraDeductableController.updateHrExtraDeductable
  )
  .get(hrExtraDeductableController.getHrExtraDeductable);

module.exports = router;
