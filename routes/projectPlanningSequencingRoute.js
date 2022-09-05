const express = require("express");
const ProjectPlanningSequencingController = require("./../controllers/projectPlanningSequencingController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    ProjectPlanningSequencingController.getAllProjectPlanningSequencings
  )
  .post(
    authController.restrictTo("user"),
    ProjectPlanningSequencingController.createProjectPlanningSequencing
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    ProjectPlanningSequencingController.deleteProjectPlanningSequencing
  )
  .patch(
    authController.restrictTo("user", "admin"),
    ProjectPlanningSequencingController.updateProjectPlanningSequencing
  )
  .get(ProjectPlanningSequencingController.getProjectPlanningSequencing);

module.exports = router;
