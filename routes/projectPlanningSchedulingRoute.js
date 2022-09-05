const express = require("express");
const ProjectPlanningSchedulingController = require("./../controllers/projectPlanningSchedulingController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    ProjectPlanningSchedulingController.getAllProjectPlanningSchedulings
  )
  .post(
    authController.restrictTo("user"),
    ProjectPlanningSchedulingController.createProjectPlanningScheduling
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    ProjectPlanningSchedulingController.deleteProjectPlanningScheduling
  )
  .patch(
    authController.restrictTo("user", "admin"),
    ProjectPlanningSchedulingController.updateProjectPlanningScheduling
  )
  .get(ProjectPlanningSchedulingController.getProjectPlanningScheduling);

module.exports = router;
