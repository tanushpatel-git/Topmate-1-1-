const express = require("express");
const router = express.Router();

const upload = require("../utility/Multer");

const {
  createService,
  getMyServices,
  getAllServices,
  getSingleService,
  updateService,
  deleteService,
  searchServices,
  getServiceById,
} = require("../controllers/userServices.controller");

router.post(
  "/create",
  upload.array("files", 10),
  createService
);

router.get("/my", getMyServices);
router.get("/id/:serviceId", getServiceById);
router.get("/search", searchServices);
router.put(
  "/update/:serviceId",
  upload.array("files", 10),
  updateService
);
router.delete("/:serviceId", deleteService);
router.get("/get-all-services", getAllServices);
router.get("/one-to-one/:id", getSingleService);

module.exports = router;