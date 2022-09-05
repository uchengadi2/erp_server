const express = require("express");
const hrUnitController = require("./../controllers/hrUnitController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrUnitController.getAllHrUnits
  )
  .post(authController.restrictTo("user"), hrUnitController.createHrUnit);

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrUnitController.deleteHrUnit
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrUnitController.updateHrUnit
  )
  .get(hrUnitController.getHrUnit);

module.exports = router;
