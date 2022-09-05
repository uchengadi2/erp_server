const express = require("express");
const ProjectPlanningStepController = require("./../controllers/projectPlanningStepController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    ProjectPlanningStepController.getAllProjectPlanningSteps
  )
  .post(
    authController.restrictTo("user"),
    ProjectPlanningStepController.createProjectPlanningStep
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    ProjectPlanningStepController.deleteProjectPlanningStep
  )
  .patch(
    authController.restrictTo("user", "admin"),
    ProjectPlanningStepController.updateProjectPlanningStep
  )
  .get(ProjectPlanningStepController.getProjectPlanningStep);

module.exports = router;
