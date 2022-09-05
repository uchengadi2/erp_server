const express = require("express");
const ProjectPlanningTaskController = require("./../controllers/projectPlanningTaskController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    ProjectPlanningTaskController.getAllProjectPlanningTasks
  )
  .post(
    authController.restrictTo("user"),
    ProjectPlanningTaskController.createProjectPlanningTask
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    ProjectPlanningTaskController.deleteProjectPlanningTask
  )
  .patch(
    authController.restrictTo("user", "admin"),
    ProjectPlanningTaskController.updateProjectPlanningTask
  )
  .get(ProjectPlanningTaskController.getProjectPlanningTask);

module.exports = router;
