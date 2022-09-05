const express = require("express");
const CrmContactController = require("./../controllers/crmContactController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    CrmContactController.getAllCrmContacts
  )
  .post(
    authController.restrictTo("user"),
    CrmContactController.createCrmContact
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    CrmContactController.deleteCrmContact
  )
  .patch(
    authController.restrictTo("user", "admin"),
    CrmContactController.updateCrmContact
  )
  .get(CrmContactController.getCrmContact);

module.exports = router;
