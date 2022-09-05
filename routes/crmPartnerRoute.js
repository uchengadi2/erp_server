const express = require("express");
const CrmPartnerController = require("./../controllers/crmPartnerController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(
    authController.restrictTo("admin", "user"),
    CrmPartnerController.getAllCrmPartners
  )
  .post(
    authController.restrictTo("user"),
    CrmPartnerController.createCrmPartner
  );

router
  .route("/:id")
  .delete(
    authController.restrictTo("user", "admin"),
    CrmPartnerController.deleteCrmPartner
  )
  .patch(
    authController.restrictTo("user", "admin"),
    CrmPartnerController.updateCrmPartner
  )
  .get(CrmPartnerController.getCrmPartner);

module.exports = router;
