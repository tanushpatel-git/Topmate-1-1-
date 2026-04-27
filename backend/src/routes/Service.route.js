const express = require("express");
const router = express.Router();
const { createService, getMyServices, getSingleService, updateService, deleteService, searchServices, getServiceById } = require("../controllers/userServices.controller");


router.post("/create", createService);
router.get("/my", getMyServices);
router.get("/id/:serviceId", getServiceById);  
router.get("/search", searchServices);
// router.get("/:slug", getSingleService);
router.put("/update/:serviceId", updateService);
router.delete("/:serviceId", deleteService);
module.exports = router;
