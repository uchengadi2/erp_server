const express = require("express");
const hrCompensationBonusController = require("./../controllers/hrCompensationBonusController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrCompensationBonusController.getAllHrCompensationBonuses
  )
  .post(
    authController.restrictTo("user"),
    hrCompensationBonusController.createHrCompenaationBonus
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrCompensationBonusController.deleteHrCompensationBonus
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrCompensationBonusController.updateHrCompensationBonus
  )
  .get(hrCompensationBonusController.getHrCompensationBonus);

module.exports = router;
