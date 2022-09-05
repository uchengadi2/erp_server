const express = require("express");
const SalesTeamController = require("./../controllers/salesTeamController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    SalesTeamController.getAllSalesTeams
  )
  .post(authController.restrictTo("user"), SalesTeamController.createSalesTeam);

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    SalesTeamController.deleteSalesTeam
  )
  .patch(
    authController.restrictTo("user", "admin"),
    SalesTeamController.updateSalesTeam
  )
  .get(SalesTeamController.getSalesTeam);

module.exports = router;
