const express = require("express");
const TeamController = require("./../controllers/teamController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(authController.restrictTo("admin", "user"), TeamController.getAllTeams)
  .post(
    authController.restrictTo("user"),
    //cashAccountController.setAccountTransactionsAndUserId,
    TeamController.createTeam
  );

router
  .route("/:id")
  .delete(authController.restrictTo("user", "admin"), TeamController.deleteTeam)
  .patch(authController.restrictTo("user", "admin"), TeamController.updateTeam)
  .get(TeamController.getTeam);

module.exports = router;
