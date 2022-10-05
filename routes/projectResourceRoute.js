const express = require("express");
const ProjectResourceController = require("./../controllers/projectResourceController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    ProjectResourceController.getAllProjectResources
  )
  .post(
    authController.restrictTo("user", "admin"),
    ProjectResourceController.createProjectResource
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    ProjectResourceController.deleteProjectResource
  )
  .patch(
    authController.restrictTo("user", "admin"),
    ProjectResourceController.updateProjectResource
  )
  .get(ProjectResourceController.getProjectResource);

module.exports = router;
