const express = require("express");
const hrBonusRateController = require("./../controllers/hrBonusRateController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrBonusRateController.getAllHrBonusRates
  )
  .post(
    authController.restrictTo("user"),
    hrBonusRateController.createHrBonusRate
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrBonusRateController.deleteHrBonusRate
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrBonusRateController.updateHrBonusRate
  )
  .get(hrBonusRateController.getHrBonusRate);

module.exports = router;
