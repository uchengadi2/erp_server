const express = require("express");
const ProjectBudgetController = require("./../controllers/projectBudgetController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    ProjectBudgetController.getAllProjectBudgets
  )
  .post(
    authController.restrictTo("user"),
    ProjectBudgetController.createProjectBudget
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    ProjectBudgetController.deleteProjectBudget
  )
  .patch(
    authController.restrictTo("user", "admin"),
    ProjectBudgetController.updateProjectBudget
  )
  .get(ProjectBudgetController.getProjectBudget);

module.exports = router;
