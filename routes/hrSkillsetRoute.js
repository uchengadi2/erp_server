const express = require("express");
const hrSkillsetController = require("./../controllers/hrSkillsetController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    hrSkillsetController.getAllHrSkillsets
  )
  .post(
    authController.restrictTo("user"),
    hrSkillsetController.createHrSkillset
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    hrSkillsetController.deleteHrSkillset
  )
  .patch(
    authController.restrictTo("user", "admin"),
    hrSkillsetController.updateHrSkilset
  )
  .get(hrSkillsetController.getHrSkillset);

module.exports = router;
